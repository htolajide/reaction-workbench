// js/aiAssistant.js
// js/aiAssistant.js — replace the last lines with this

class AIAssistant {
    constructor() {
        this.model = null;
        this.yieldModel = null;
        this.isReady = false;
        this.isLoading = false;
        this.trainingHistory = [];
        this.featureNames = [
            'mw', 'density', 'pka', 'pkb', 
            'isAcid', 'isBase', 'isOxidizer', 'isFlammable',
            'isSolid', 'isLiquid', 'meltingPoint', 'boilingPoint'
        ];
        this.reactionTypes = ['acid-base', 'redox', 'precipitation', 'combustion', 'decomposition'];
        // DON'T auto-init here — wait for DOM + TensorFlow
    }

    async init() {
        console.log('🤖 AI Assistant initializing...');
        
        // Wait for TensorFlow
        if (typeof tf === 'undefined') {
            this.updateStatus('Loading TensorFlow...');
            try {
                await this.waitForTF();
            } catch (err) {
                console.error('TensorFlow load failed:', err);
                this.updateStatus('TF Error');
                return;
            }
        }
        
        this.isLoading = true;
        this.updateStatus('Building models...');
        
        try {
            await this.buildModels();
            this.updateStatus('Training...');
            await this.trainOnKnownReactions();
            this.isReady = true;
            this.isLoading = false;
            
            // This is the key line - make sure it says "Ready" not "Loading"
            this.updateStatus('Ready');
            
            console.log('✅ AI Assistant ready!');
        } catch (err) {
            console.error('❌ AI initialization failed:', err);
            this.isReady = false;
            this.isLoading = false;
            this.updateStatus('Error: ' + err.message);
        }
    }

    async waitForTF(timeout = 15000) {
        const start = Date.now();
        return new Promise((resolve, reject) => {
            const check = () => {
                if (typeof tf !== 'undefined') {
                    resolve();
                } else if (Date.now() - start > timeout) {
                    reject(new Error('TensorFlow.js failed to load'));
                } else {
                    setTimeout(check, 100);
                }
            };
            check();
        });
    }
    // ... [keep all other methods: buildModels, extractFeatures, 
    //      trainOnKnownReactions, predictReactionType, estimateYield, 
    //      suggestReagents, explainReaction, getSafetyAdvice, etc.]
    async buildModels() {
        // Reaction Type Classifier
        this.model = tf.sequential();
        this.model.add(tf.layers.dense({
            inputShape: [this.featureNames.length],
            units: 32,
            activation: 'relu',
            kernelInitializer: 'glorotNormal'
        }));
        this.model.add(tf.layers.dropout({ rate: 0.2 }));
        this.model.add(tf.layers.dense({
            units: 16,
            activation: 'relu'
        }));
        this.model.add(tf.layers.dense({
            units: this.reactionTypes.length,
            activation: 'softmax'
        }));

        this.model.compile({
            optimizer: tf.train.adam(0.005),
            loss: 'categoricalCrossentropy',
            metrics: ['accuracy']
        });

        // Yield Estimator (Regression)
        this.yieldModel = tf.sequential();
        this.yieldModel.add(tf.layers.dense({
            inputShape: [this.featureNames.length * 2 + 4], // 2 reactants + conditions
            units: 24,
            activation: 'relu'
        }));
        this.yieldModel.add(tf.layers.dense({
            units: 12,
            activation: 'relu'
        }));
        this.yieldModel.add(tf.layers.dense({
            units: 1,
            activation: 'linear'
        }));

        this.yieldModel.compile({
            optimizer: tf.train.adam(0.005),
            loss: 'meanSquaredError',
            metrics: ['mae']
        });
    }

    // Extract numerical features from reagent
    extractFeatures(reagent) {
        if (!reagent) return new Array(this.featureNames.length).fill(0);
        
        return [
            (reagent.mw || 0) / 200,              // normalized MW
            (reagent.density || 0) / 2,           // normalized density
            reagent.pka !== null ? (reagent.pka + 10) / 20 : 0.5,
            reagent.pkb !== null ? (reagent.pkb + 10) / 20 : 0.5,
            reagent.pka !== null && reagent.pka < 0 ? 1 : 0,  // isAcid
            reagent.pkb !== null && reagent.pkb < 0 ? 1 : 0,  // isBase
            reagent.hazards?.includes('oxidizer') ? 1 : 0,
            reagent.hazards?.includes('flammable') ? 1 : 0,
            reagent.state === 'solid' ? 1 : 0,
            reagent.state === 'liquid' ? 1 : 0,
            (reagent.meltingPoint || 0) / 500,
            (reagent.boilingPoint || 0) / 500
        ];
    }

    // Generate training data from known reactions
    async trainOnKnownReactions() {
        const trainingData = this.generateTrainingData();
        
        const xs = tf.tensor2d(trainingData.inputs);
        const ys = tf.tensor2d(trainingData.outputs);

        const history = await this.model.fit(xs, ys, {
            epochs: 50,
            batchSize: 8,
            validationSplit: 0.2,
            shuffle: true,
            callbacks: {
                onEpochEnd: (epoch, logs) => {
                    this.trainingHistory.push({ epoch, ...logs });
                }
            }
        });

        xs.dispose();
        ys.dispose();

        // Train yield model
        const yieldData = this.generateYieldTrainingData();
        const yxs = tf.tensor2d(yieldData.inputs);
        const yys = tf.tensor2d(yieldData.targets);

        await this.yieldModel.fit(yxs, yys, {
            epochs: 40,
            batchSize: 8,
            shuffle: true
        });

        yxs.dispose();
        yys.dispose();
    }

    generateTrainingData() {
        // Synthetic training examples based on chemical knowledge
        const examples = [
            // Acid-base reactions
            { r1: 'hcl', r2: 'naoh', type: 'acid-base' },
            { r1: 'h2so4', r2: 'koh', type: 'acid-base' },
            { r1: 'ch3cooh', r2: 'naoh', type: 'acid-base' },
            { r1: 'hno3', r2: 'nh4oh', type: 'acid-base' },
            { r1: 'hcl', r2: 'koh', type: 'acid-base' },
            
            // Precipitation reactions
            { r1: 'agno3', r2: 'nacl', type: 'precipitation' },
            { r1: 'cuso4', r2: 'naoh', type: 'precipitation' },
            { r1: 'fecl3', r2: 'naoh', type: 'precipitation' },
            { r1: 'agno3', r2: 'kcl', type: 'precipitation' },
            
            // Redox reactions
            { r1: 'kmno4', r2: 'h2o2', type: 'redox' },
            { r1: 'kmno4', r2: 'hcl', type: 'redox' },
            { r1: 'hno3', r2: 'cuso4', type: 'redox' },
            
            // Combustion
            { r1: 'ethanol', r2: 'h2o2', type: 'combustion' },
            { r1: 'acetone', r2: 'h2o2', type: 'combustion' },
            
            // Decomposition
            { r1: 'h2o2', r2: 'h2o', type: 'decomposition' },
            { r1: 'kmno4', r2: 'h2o', type: 'decomposition' }
        ];

        const inputs = [];
        const outputs = [];

        examples.forEach(ex => {
            const r1 = reagentDB.getReagent(ex.r1);
            const r2 = reagentDB.getReagent(ex.r2);
            if (!r1 || !r2) return;

            // Combine features (average for order-invariance)
            const f1 = this.extractFeatures(r1);
            const f2 = this.extractFeatures(r2);
            const combined = f1.map((v, i) => (v + f2[i]) / 2);
            
            inputs.push(combined);
            
            // One-hot encode reaction type
            const oneHot = new Array(this.reactionTypes.length).fill(0);
            const idx = this.reactionTypes.indexOf(ex.type);
            if (idx >= 0) oneHot[idx] = 1;
            outputs.push(oneHot);
        });

        return { inputs, outputs };
    }

    generateYieldTrainingData() {
        // Synthetic yield data based on reaction characteristics
        const examples = [];
        
        // Generate synthetic examples
        for (let i = 0; i < 100; i++) {
            const f1 = Array(this.featureNames.length).fill(0).map(() => Math.random());
            const f2 = Array(this.featureNames.length).fill(0).map(() => Math.random());
            
            // Conditions: temperature, concentration, time, catalyst
            const conditions = [
                Math.random(),  // temperature factor
                Math.random(),  // concentration
                Math.random(),  // time
                Math.random() > 0.5 ? 1 : 0  // catalyst
            ];

            const input = [...f1, ...f2, ...conditions];
            
            // Synthetic target yield (0-100%) based on features
            const acidBaseScore = f1[4] * f2[5] + f1[5] * f2[4];
            const oxidizerScore = f1[6] * f2[7] + f1[7] * f2[6];
            const baseYield = 0.5 + 0.3 * acidBaseScore + 0.2 * oxidizerScore;
            const noise = (Math.random() - 0.5) * 0.1;
            const yield_ = Math.max(0, Math.min(1, baseYield + noise + conditions[2] * 0.1));
            
            examples.push({ input, target: yield_ });
        }

        return {
            inputs: examples.map(e => e.input),
            targets: examples.map(e => [e.target])
        };
    }

    // Predict reaction type
    async predictReactionType(reagent1, reagent2) {
        if (!this.isReady) {
            await this.waitForReady();
        }

        const f1 = this.extractFeatures(reagent1);
        const f2 = this.extractFeatures(reagent2);
        const combined = f1.map((v, i) => (v + f2[i]) / 2);

        return tf.tidy(() => {
            const input = tf.tensor2d([combined]);
            const prediction = this.model.predict(input);
            const probs = prediction.dataSync();
            input.dispose();
            prediction.dispose();

            const results = this.reactionTypes.map((type, i) => ({
                type,
                probability: probs[i]
            })).sort((a, b) => b.probability - a.probability);

            return results;
        });
    }

    // Estimate yield
    async estimateYield(reagent1, reagent2, conditions = {}) {
        if (!this.isReady) {
            await this.waitForReady();
        }

        const f1 = this.extractFeatures(reagent1);
        const f2 = this.extractFeatures(reagent2);
        const cond = [
            (conditions.temperature || 25) / 100,
            (conditions.concentration || 1) / 2,
            (conditions.time || 10) / 60,
            conditions.catalyst ? 1 : 0
        ];

        const input = [...f1, ...f2, ...cond];

        return tf.tidy(() => {
            const tensor = tf.tensor2d([input]);
            const prediction = this.yieldModel.predict(tensor);
            const yieldValue = prediction.dataSync()[0];
            tensor.dispose();
            prediction.dispose();

            return Math.max(0, Math.min(100, yieldValue * 100));
        });
    }

    // Suggest reagents for a desired reaction type
    suggestReagents(desiredType, constraints = {}) {
        const reagents = reagentDB.getAllReagents();
        const suggestions = [];

        for (let i = 0; i < reagents.length; i++) {
            for (let j = i + 1; j < reagents.length; j++) {
                const r1 = reagents[i];
                const r2 = reagents[j];
                
                // Quick heuristic filter
                const score = this.heuristicMatchScore(r1, r2, desiredType);
                if (score > 0.3) {
                    suggestions.push({
                        reagents: [r1, r2],
                        score,
                        type: desiredType
                    });
                }
            }
        }

        suggestions.sort((a, b) => b.score - a.score);
        return suggestions.slice(0, 5);
    }

    heuristicMatchScore(r1, r2, type) {
        switch (type) {
            case 'acid-base':
                return (r1.pka !== null && r2.pkb !== null) || 
                       (r2.pka !== null && r1.pkb !== null) ? 0.9 : 0.1;
            case 'precipitation':
                return (r1.state === 'solid' || r2.state === 'solid') ? 0.6 : 0.2;
            case 'redox':
                return (r1.hazards?.includes('oxidizer') || 
                        r2.hazards?.includes('oxidizer')) ? 0.7 : 0.15;
            case 'combustion':
                return (r1.hazards?.includes('flammable') || 
                        r2.hazards?.includes('flammable')) ? 0.8 : 0.1;
            case 'decomposition':
                return (r1.id === 'h2o2' || r2.id === 'h2o2') ? 0.85 : 0.2;
            default:
                return 0;
        }
    }

    // Explain why a reaction occurs
    explainReaction(reagent1, reagent2, reactionType) {
        const explanations = {
            'acid-base': `This is an acid-base neutralization. ${reagent1.name} acts as ${reagent1.pka !== null ? 'an acid (pKa=' + reagent1.pka + ')' : 'a base'}, while ${reagent2.name} acts as ${reagent2.pkb !== null ? 'a base (pKb=' + reagent2.pkb + ')' : 'an acid'}. Proton transfer occurs to form a salt and water.`,
            
            'precipitation': `This is a precipitation reaction. When ${reagent1.name} and ${reagent2.name} are mixed, an insoluble ionic compound forms due to the low solubility product (Ksp). The precipitate appears as a solid settling out of solution.`,
            
            'redox': `This is a redox (oxidation-reduction) reaction. Electron transfer occurs between ${reagent1.name} and ${reagent2.name}. One species is oxidized (loses electrons) while the other is reduced (gains electrons).`,
            
            'combustion': `This is a combustion reaction. ${reagent1.hazards?.includes('flammable') ? reagent1.name : reagent2.name} (a flammable substance) reacts with an oxidizer, releasing heat and light. Products typically include CO₂ and H₂O.`,
            
            'decomposition': `This is a decomposition reaction. The compound breaks down into simpler substances, often releasing gas (O₂) and forming more stable products.`
        };

        return explanations[reactionType] || 'Reaction mechanism analysis in progress...';
    }

    // Safety recommendation
    getSafetyAdvice(reagent1, reagent2) {
        const hazards = new Set();
        const ppe = new Set();

        [reagent1, reagent2].forEach(r => {
            if (!r) return;
            r.hazards?.forEach(h => hazards.add(h));
            r.safety?.ppe?.forEach(p => ppe.add(p));
        });

        const advice = {
            hazards: Array.from(hazards),
            ppe: Array.from(ppe),
            warnings: []
        };

        if (hazards.has('toxic')) advice.warnings.push('⚠️ Use in fume hood');
        if (hazards.has('corrosive')) advice.warnings.push('⚠️ Wear acid-resistant gloves and face shield');
        if (hazards.has('flammable')) advice.warnings.push('⚠️ Keep away from ignition sources');
        if (hazards.has('oxidizer')) advice.warnings.push('⚠️ Keep away from combustible materials');

        return advice;
    }

    async waitForReady() {
        return new Promise(resolve => {
            const check = () => {
                if (this.isReady) resolve();
                else setTimeout(check, 100);
            };
            check();
        });
    }

    updateStatus(status) {
        const el = document.getElementById('ai-status');
        if (el) {
            // Remove all status classes first
            el.classList.remove('loading', 'ready', 'error');
            
            // Add new status class
            if (status === 'Ready') {
                el.classList.add('ready');
            } else if (status.includes('Error')) {
                el.classList.add('error');
            } else {
                el.classList.add('loading');
            }
            
            el.textContent = status;
            console.log('AI Status:', status);
        } else {
            console.warn('AI status element not found');
        }
    }

    // Dispose tensors to prevent memory leaks
    dispose() {
        if (this.model) this.model.dispose();
        if (this.yieldModel) this.yieldModel.dispose();
    }
}

// Global instance — but don't auto-init
const aiAssistant = new AIAssistant();

// Initialize only when DOM is ready AND TensorFlow is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure all scripts are parsed
    setTimeout(() => {
        aiAssistant.init().catch(err => {
            console.error('AI init error:', err);
            aiAssistant.updateStatus('Error');
        });
    }, 100);
});

