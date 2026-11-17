// js/notebook.js
class ExperimentNotebook {
    constructor() {
        this.experiments = this.loadExperiments();
    }

    loadExperiments() {
        const saved = localStorage.getItem('chemistryNotebook');
        return saved ? JSON.parse(saved) : [];
    }

    saveExperiments() {
        localStorage.setItem('chemistryNotebook', JSON.stringify(this.experiments));
    }

    createExperiment(data) {
        const experiment = {
            id: Date.now(),
            timestamp: new Date().toISOString(),
            title: data.title || 'Untitled Experiment',
            objective: data.objective || '',
            materials: data.materials || [],
            reagents: data.reagents || [],
            procedure: data.procedure || '',
            observations: data.observations || [],
            data: data.data || {},
            calculations: data.calculations || {},
            results: data.results || '',
            conclusion: data.conclusion || '',
            graphs: data.graphs || []
        };

        this.experiments.push(experiment);
        this.saveExperiments();
        return experiment;
    }

    getExperiment(id) {
        return this.experiments.find(e => e.id === id);
    }

    getAllExperiments() {
        return this.experiments;
    }

    updateExperiment(id, updates) {
        const index = this.experiments.findIndex(e => e.id === id);
        if (index !== -1) {
            this.experiments[index] = { ...this.experiments[index], ...updates };
            this.saveExperiments();
            return this.experiments[index];
        }
        return null;
    }

    deleteExperiment(id) {
        this.experiments = this.experiments.filter(e => e.id !== id);
        this.saveExperiments();
    }

    exportExperiment(id, format = 'json') {
        const experiment = this.getExperiment(id);
        if (!experiment) return null;

        switch (format) {
            case 'json':
                return JSON.stringify(experiment, null, 2);
            case 'csv':
                return this.convertToCSV(experiment);
            case 'pdf':
                return this.generatePDF(experiment);
            default:
                return JSON.stringify(experiment, null, 2);
        }
    }

    convertToCSV(experiment) {
        let csv = 'Field,Value\n';
        csv += `Title,"${experiment.title}"\n`;
        csv += `Date,"${experiment.timestamp}"\n`;
        csv += `Objective,"${experiment.objective}"\n`;
        csv += `Procedure,"${experiment.procedure}"\n`;
        csv += `Results,"${experiment.results}"\n`;
        csv += `Conclusion,"${experiment.conclusion}"\n`;
        return csv;
    }

    generatePDF(experiment) {
        // Simplified PDF generation
        // In production, use jsPDF or similar library
        return `
Experiment Report: ${experiment.title}
Date: ${new Date(experiment.timestamp).toLocaleString()}

Objective:
${experiment.objective}

Materials:
${experiment.materials.join('\n')}

Procedure:
${experiment.procedure}

Observations:
${experiment.observations.join('\n')}

Results:
${experiment.results}

Conclusion:
${experiment.conclusion}
        `;
    }
}

const notebook = new ExperimentNotebook();