// js/reactionEngine.js - Smart Reaction Engine
class ReactionEngine {
    constructor() {
        this.reactions = this.initializeReactions();
        this.solubilityRules = this.initializeSolubilityRules();
    }

    initializeReactions() {
        return [
            // ===== ACID-BASE NEUTRALIZATIONS =====
            {
                id: 'hcl-naoh',
                type: 'acid-base',
                reactants: ['hcl', 'naoh'],
                products: ['nacl', 'h2o'],
                balanced: 'HCl + NaOH → NaCl + H₂O',
                enthalpy: -57.1,
                description: 'Strong acid-strong base neutralization'
            },
            {
                id: 'hcl-koh',
                type: 'acid-base',
                reactants: ['hcl', 'koh'],
                products: ['kcl', 'h2o'],
                balanced: 'HCl + KOH → KCl + H₂O',
                enthalpy: -57.3,
                description: 'Strong acid-strong base neutralization'
            },
            {
                id: 'h2so4-naoh',
                type: 'acid-base',
                reactants: ['h2so4', 'naoh'],
                products: ['na2so4', 'h2o'],
                balanced: 'H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O',
                enthalpy: -114.2,
                description: 'Diprotic acid neutralization'
            },
            {
                id: 'h2so4-koh',
                type: 'acid-base',
                reactants: ['h2so4', 'koh'],
                products: ['k2so4', 'h2o'],
                balanced: 'H₂SO₄ + 2KOH → K₂SO₄ + 2H₂O',
                enthalpy: -114.6,
                description: 'Diprotic acid neutralization'
            },
            {
                id: 'hno3-naoh',
                type: 'acid-base',
                reactants: ['hno3', 'naoh'],
                products: ['nano3', 'h2o'],
                balanced: 'HNO₃ + NaOH → NaNO₃ + H₂O',
                enthalpy: -57.1,
                description: 'Strong acid-strong base neutralization'
            },
            {
                id: 'hno3-koh',
                type: 'acid-base',
                reactants: ['hno3', 'koh'],
                products: ['kno3', 'h2o'],
                balanced: 'HNO₃ + KOH → KNO₃ + H₂O',
                enthalpy: -57.3,
                description: 'Strong acid-strong base neutralization'
            },
            {
                id: 'ch3cooh-naoh',
                type: 'acid-base',
                reactants: ['ch3cooh', 'naoh'],
                products: ['ch3coona', 'h2o'],
                balanced: 'CH₃COOH + NaOH → CH₃COONa + H₂O',
                enthalpy: -56.1,
                description: 'Weak acid-strong base neutralization'
            },
            {
                id: 'hcl-nh4oh',
                type: 'acid-base',
                reactants: ['hcl', 'nh4oh'],
                products: ['nh4cl', 'h2o'],
                balanced: 'HCl + NH₄OH → NH₄Cl + H₂O',
                enthalpy: -52.2,
                description: 'Strong acid-weak base neutralization'
            },

            // ===== PRECIPITATION REACTIONS =====
            {
                id: 'agno3-nacl',
                type: 'precipitation',
                reactants: ['agno3', 'nacl'],
                products: ['agcl', 'nano3'],
                balanced: 'AgNO₃ + NaCl → AgCl↓ + NaNO₃',
                enthalpy: -65.5,
                description: 'Silver chloride precipitation',
                precipitate: 'AgCl',
                precipitateColor: 'white'
            },
            {
                id: 'agno3-kcl',
                type: 'precipitation',
                reactants: ['agno3', 'kcl'],
                products: ['agcl', 'kno3'],
                balanced: 'AgNO₃ + KCl → AgCl↓ + KNO₃',
                enthalpy: -65.5,
                description: 'Silver chloride precipitation',
                precipitate: 'AgCl',
                precipitateColor: 'white'
            },
            {
                id: 'cuso4-naoh',
                type: 'precipitation',
                reactants: ['cuso4', 'naoh'],
                products: ['cuoh2', 'na2so4'],
                balanced: 'CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄',
                enthalpy: -45.2,
                description: 'Copper(II) hydroxide precipitation',
                precipitate: 'Cu(OH)₂',
                precipitateColor: '#4169E1'
            },
            {
                id: 'fecl3-naoh',
                type: 'precipitation',
                reactants: ['fecl3', 'naoh'],
                products: ['feoh3', 'nacl'],
                balanced: 'FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl',
                enthalpy: -52.8,
                description: 'Iron(III) hydroxide precipitation',
                precipitate: 'Fe(OH)₃',
                precipitateColor: '#8B4513'
            },
            {
                id: 'pbno3-nacl',
                type: 'precipitation',
                reactants: ['pbno3', 'nacl'],
                products: ['pbcl2', 'nano3'],
                balanced: 'Pb(NO₃)₂ + 2NaCl → PbCl₂↓ + 2NaNO₃',
                enthalpy: -25.3,
                description: 'Lead(II) chloride precipitation',
                precipitate: 'PbCl₂',
                precipitateColor: 'white'
            },
            {
                id: 'bano3-na2so4',
                type: 'precipitation',
                reactants: ['bano3', 'na2so4'],
                products: ['baso4', 'nano3'],
                balanced: 'Ba(NO₃)₂ + Na₂SO₄ → BaSO₄↓ + 2NaNO₃',
                enthalpy: -24.3,
                description: 'Barium sulfate precipitation',
                precipitate: 'BaSO₄',
                precipitateColor: 'white'
            },

            // ===== REDOX REACTIONS =====
            {
                id: 'kmno4-h2o2',
                type: 'redox',
                reactants: ['kmno4', 'h2o2'],
                products: ['mno2', 'o2', 'koh', 'h2o'],
                balanced: '2KMnO₄ + 3H₂O₂ → 2MnO₂ + 3O₂↑ + 2KOH + 2H₂O',
                enthalpy: -196.0,
                description: 'Permanganate oxidation of hydrogen peroxide',
                gas: 'O₂'
            },
            {
                id: 'kmno4-hcl',
                type: 'redox',
                reactants: ['kmno4', 'hcl'],
                products: ['kcl', 'mncl2', 'cl2', 'h2o'],
                balanced: '2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 5Cl₂↑ + 8H₂O',
                enthalpy: -250.0,
                description: 'Permanganate oxidation of hydrochloric acid',
                gas: 'Cl₂'
            },
            {
                id: 'zn-hcl',
                type: 'redox',
                reactants: ['zn', 'hcl'],
                products: ['zncl2', 'h2'],
                balanced: 'Zn + 2HCl → ZnCl₂ + H₂↑',
                enthalpy: -153.9,
                description: 'Zinc dissolution in acid',
                gas: 'H₂'
            },

            // ===== DECOMPOSITION REACTIONS =====
            {
                id: 'h2o2-decomp',
                type: 'decomposition',
                reactants: ['h2o2'],
                products: ['h2o', 'o2'],
                balanced: '2H₂O₂ → 2H₂O + O₂↑',
                enthalpy: -98.2,
                description: 'Hydrogen peroxide decomposition',
                gas: 'O₂'
            },
            {
                id: 'caco3-decomp',
                type: 'decomposition',
                reactants: ['caco3'],
                products: ['cao', 'co2'],
                balanced: 'CaCO₃ → CaO + CO₂↑',
                enthalpy: 178.3,
                description: 'Calcium carbonate thermal decomposition',
                gas: 'CO₂'
            },

            // ===== COMBUSTION REACTIONS =====
            {
                id: 'ethanol-combustion',
                type: 'combustion',
                reactants: ['ethanol', 'o2'],
                products: ['co2', 'h2o'],
                balanced: 'C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O',
                enthalpy: -1367,
                description: 'Ethanol combustion'
            },
            {
                id: 'methane-combustion',
                type: 'combustion',
                reactants: ['methane', 'o2'],
                products: ['co2', 'h2o'],
                balanced: 'CH₄ + 2O₂ → CO₂ + 2H₂O',
                enthalpy: -890.4,
                description: 'Methane combustion'
            }
        ];
    }

    initializeSolubilityRules() {
        // Simplified solubility rules for precipitation prediction
        return {
            soluble: ['NO₃⁻', 'CH₃COO⁻', 'ClO₃⁻', 'ClO₄⁻'],
            mostlySoluble: ['Cl⁻', 'Br⁻', 'I⁻', 'SO₄²⁻'],
            insoluble: ['CO₃²⁻', 'PO₄³⁻', 'S²⁻', 'OH⁻'],
            exceptions: {
                'Ag⁺': ['Cl⁻', 'Br⁻', 'I⁻'],
                'Pb²⁺': ['Cl⁻', 'Br⁻', 'I⁻', 'SO₄²⁻'],
                'Ba²⁺': ['SO₄²⁻']
            }
        };
    }

    predictReaction(reactantIds) {
        if (!reactantIds || reactantIds.length < 2) return null;

        // Normalize IDs to lowercase
        const normalizedIds = reactantIds.map(id => id.toLowerCase());

        // First, try exact match from database
        for (const reaction of this.reactions) {
            const reactionReactants = reaction.reactants.map(r => r.toLowerCase());
            const match = reactionReactants.every(r => 
                normalizedIds.some(id => id === r || id.includes(r))
            );
            
            if (match && reactionReactants.length === normalizedIds.length) {
                return reaction;
            }
        }

        // If no exact match, try to predict based on chemical properties
        return this.predictReactionByProperties(reactantIds);
    }

    predictReactionByProperties(reactantIds) {
        const reagents = reactantIds.map(id => {
            if (typeof reagentDB !== 'undefined') {
                return reagentDB.getReagent(id);
            }
            return null;
        }).filter(r => r !== null);

        if (reagents.length < 2) return null;

        const [r1, r2] = reagents;

        // Check for acid-base reaction
        if (this.isAcid(r1) && this.isBase(r2)) {
            return this.generateAcidBaseReaction(r1, r2);
        }
        if (this.isAcid(r2) && this.isBase(r1)) {
            return this.generateAcidBaseReaction(r2, r1);
        }

        // Check for precipitation reaction
        if (this.isSalt(r1) && this.isSalt(r2)) {
            return this.generatePrecipitationReaction(r1, r2);
        }

        // Check for redox reaction
        if (this.isOxidizer(r1) && this.isReducer(r2)) {
            return this.generateRedoxReaction(r1, r2);
        }
        if (this.isOxidizer(r2) && this.isReducer(r1)) {
            return this.generateRedoxReaction(r2, r1);
        }

        return null;
    }

    isAcid(reagent) {
        if (!reagent) return false;
        return reagent.pka !== null && reagent.pka < 0;
    }

    isBase(reagent) {
        if (!reagent) return false;
        return reagent.pkb !== null && reagent.pkb < 0;
    }

    isSalt(reagent) {
        if (!reagent) return false;
        return reagent.state === 'solid' && reagent.pka === null && reagent.pkb === null;
    }

    isOxidizer(reagent) {
        if (!reagent) return false;
        return reagent.hazards && reagent.hazards.includes('oxidizer');
    }

    isReducer(reagent) {
        if (!reagent) return false;
        return reagent.hazards && reagent.hazards.includes('flammable');
    }

    generateAcidBaseReaction(acid, base) {
        return {
            id: `acid-base-${acid.id}-${base.id}`,
            type: 'acid-base',
            reactants: [acid.id, base.id],
            products: ['salt', 'h2o'],
            balanced: `${acid.formula} + ${base.formula} → Salt + H₂O`,
            enthalpy: -57.1,
            description: `Neutralization reaction between ${acid.name} and ${base.name}`
        };
    }

    generatePrecipitationReaction(salt1, salt2) {
        return {
            id: `precipitation-${salt1.id}-${salt2.id}`,
            type: 'precipitation',
            reactants: [salt1.id, salt2.id],
            products: ['precipitate', 'solution'],
            balanced: `${salt1.formula} + ${salt2.formula} → Precipitate + Solution`,
            enthalpy: -30.0,
            description: `Double displacement reaction forming precipitate`,
            precipitate: 'Unknown',
            precipitateColor: 'white'
        };
    }

    generateRedoxReaction(oxidizer, reducer) {
        return {
            id: `redox-${oxidizer.id}-${reducer.id}`,
            type: 'redox',
            reactants: [oxidizer.id, reducer.id],
            products: ['reduced', 'oxidized'],
            balanced: `${oxidizer.formula} + ${reducer.formula} → Products`,
            enthalpy: -150.0,
            description: `Oxidation-reduction reaction`
        };
    }

    getReactionType(reaction) {
        return reaction.type;
    }

    getBalancedEquation(reaction) {
        return reaction.balanced;
    }

    getEnthalpy(reaction) {
        return reaction.enthalpy;
    }
}

const reactionEngine = new ReactionEngine();