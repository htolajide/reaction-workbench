// js/export.js
class DataExporter {
    constructor() {
        this.notebook = notebook;
    }

    exportToCSV(data, filename = 'export.csv') {
        const csv = this.convertToCSV(data);
        this.download(csv, filename, 'text/csv');
    }

    exportToJSON(data, filename = 'export.json') {
        const json = JSON.stringify(data, null, 2);
        this.download(json, filename, 'application/json');
    }

    exportToPDF(data, filename = 'export.pdf') {
        // Simplified PDF export
        const text = this.generatePDFText(data);
        this.download(text, filename, 'text/plain');
    }

    exportGraph(chartId, format = 'png', filename = 'graph.png') {
        const chart = document.getElementById(chartId);
        if (!chart) return;

        if (format === 'png') {
            Plotly.downloadImage(chart, {
                format: 'png',
                filename: filename,
                width: 800,
                height: 600
            });
        } else if (format === 'svg') {
            Plotly.downloadImage(chart, {
                format: 'svg',
                filename: filename,
                width: 800,
                height: 600
            });
        }
    }

    convertToCSV(data) {
        if (Array.isArray(data)) {
            if (data.length === 0) return '';
            
            const headers = Object.keys(data[0]);
            const csv = [
                headers.join(','),
                ...data.map(row => 
                    headers.map(header => {
                        const value = row[header];
                        return typeof value === 'string' && value.includes(',') 
                            ? `"${value}"` 
                            : value;
                    }).join(',')
                )
            ].join('\n');
            
            return csv;
        }
        
        return '';
    }

    generatePDFText(data) {
        let text = 'Chemistry Workbench Pro - Experiment Report\n';
        text += '='.repeat(50) + '\n\n';
        
        if (data.title) text += `Title: ${data.title}\n`;
        if (data.timestamp) text += `Date: ${new Date(data.timestamp).toLocaleString()}\n`;
        text += '\n';
        
        if (data.objective) {
            text += 'OBJECTIVE\n' + '-'.repeat(50) + '\n';
            text += data.objective + '\n\n';
        }
        
        if (data.procedure) {
            text += 'PROCEDURE\n' + '-'.repeat(50) + '\n';
            text += data.procedure + '\n\n';
        }
        
        if (data.results) {
            text += 'RESULTS\n' + '-'.repeat(50) + '\n';
            text += data.results + '\n\n';
        }
        
        if (data.conclusion) {
            text += 'CONCLUSION\n' + '-'.repeat(50) + '\n';
            text += data.conclusion + '\n';
        }
        
        return text;
    }

    download(content, filename, mimeType) {
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    exportExperiment(id, format) {
        const experiment = this.notebook.getExperiment(id);
        if (!experiment) return;

        switch (format) {
            case 'csv':
                this.exportToCSV([experiment], `experiment_${id}.csv`);
                break;
            case 'json':
                this.exportToJSON(experiment, `experiment_${id}.json`);
                break;
            case 'pdf':
                this.exportToPDF(experiment, `experiment_${id}.txt`);
                break;
        }
    }
}

const exporter = new DataExporter();