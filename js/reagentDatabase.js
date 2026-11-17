// js/reagentDatabase.js
class ReagentDatabase {
    constructor() {
        this.reagents = this.initializeDatabase();
    }

    initializeDatabase() {
        return [
            {
                id: 'hcl',
                name: 'Hydrochloric Acid',
                formula: 'HCl',
                mw: 36.46,
                cas: '7647-01-0',
                density: 1.18,
                concentration: 37,
                color: 'transparent',
                state: 'liquid',
                hazards: ['corrosive', 'toxic'],
                pka: -7,
                pkb: null,
                meltingPoint: -114.2,
                boilingPoint: -85.05,
                solubility: 'miscible',
                safety: {
                    pictograms: ['GHS05', 'GHS06', 'GHS09'],
                    ppe: ['gloves', 'goggles', 'fume-hood']
                }
            },
            {
                id: 'h2so4',
                name: 'Sulfuric Acid',
                formula: 'H₂SO₄',
                mw: 98.08,
                cas: '7664-93-9',
                density: 1.84,
                concentration: 98,
                color: 'transparent',
                state: 'liquid',
                hazards: ['corrosive', 'oxidizer'],
                pka: -3,
                pkb: null,
                meltingPoint: 10,
                boilingPoint: 337,
                solubility: 'miscible',
                safety: {
                    pictograms: ['GHS05', 'GHS07'],
                    ppe: ['gloves', 'goggles', 'face-shield', 'fume-hood']
                }
            },
            {
                id: 'naoh',
                name: 'Sodium Hydroxide',
                formula: 'NaOH',
                mw: 40.00,
                cas: '1310-73-2',
                density: 2.13,
                concentration: null,
                color: 'transparent',
                state: 'solid',
                hazards: ['corrosive'],
                pka: null,
                pkb: -0.2,
                meltingPoint: 318,
                boilingPoint: 1388,
                solubility: '111 g/100 mL',
                safety: {
                    pictograms: ['GHS05', 'GHS07'],
                    ppe: ['gloves', 'goggles']
                }
            },
            {
                id: 'koh',
                name: 'Potassium Hydroxide',
                formula: 'KOH',
                mw: 56.11,
                cas: '1310-58-3',
                density: 2.04,
                concentration: null,
                color: 'transparent',
                state: 'solid',
                hazards: ['corrosive'],
                pka: null,
                pkb: -0.5,
                meltingPoint: 360,
                boilingPoint: 1327,
                solubility: '121 g/100 mL',
                safety: {
                    pictograms: ['GHS05', 'GHS07'],
                    ppe: ['gloves', 'goggles']
                }
            },
            {
                id: 'agno3',
                name: 'Silver Nitrate',
                formula: 'AgNO₃',
                mw: 169.87,
                cas: '7761-88-8',
                density: 4.35,
                concentration: null,
                color: 'transparent',
                state: 'solid',
                hazards: ['oxidizer', 'corrosive', 'environmental'],
                pka: null,
                pkb: null,
                meltingPoint: 212,
                boilingPoint: 440,
                solubility: '256 g/100 mL',
                safety: {
                    pictograms: ['GHS03', 'GHS05', 'GHS09'],
                    ppe: ['gloves', 'goggles']
                }
            },
            {
                id: 'cuso4',
                name: 'Copper(II) Sulfate',
                formula: 'CuSO₄',
                mw: 159.61,
                cas: '7758-98-7',
                density: 3.60,
                concentration: null,
                color: '#00BFFF',
                state: 'solid',
                hazards: ['environmental', 'irritant'],
                pka: null,
                pkb: null,
                meltingPoint: 110,
                boilingPoint: 650,
                solubility: '32 g/100 mL',
                safety: {
                    pictograms: ['GHS07', 'GHS09'],
                    ppe: ['gloves', 'goggles']
                }
            },
            {
                id: 'kmno4',
                name: 'Potassium Permanganate',
                formula: 'KMnO₄',
                mw: 158.03,
                cas: '7722-64-7',
                density: 2.70,
                concentration: null,
                color: '#8B008B',
                state: 'solid',
                hazards: ['oxidizer', 'environmental'],
                pka: null,
                pkb: null,
                meltingPoint: 240,
                boilingPoint: null,
                solubility: '6.4 g/100 mL',
                safety: {
                    pictograms: ['GHS03', 'GHS07', 'GHS09'],
                    ppe: ['gloves', 'goggles']
                }
            },
            {
                id: 'h2o2',
                name: 'Hydrogen Peroxide',
                formula: 'H₂O₂',
                mw: 34.01,
                cas: '7722-84-1',
                density: 1.45,
                concentration: 30,
                color: 'transparent',
                state: 'liquid',
                hazards: ['oxidizer', 'corrosive'],
                pka: 11.6,
                pkb: null,
                meltingPoint: -0.43,
                boilingPoint: 150.2,
                solubility: 'miscible',
                safety: {
                    pictograms: ['GHS03', 'GHS05', 'GHS07'],
                    ppe: ['gloves', 'goggles', 'fume-hood']
                }
            },
            {
                id: 'ch3cooh',
                name: 'Acetic Acid',
                formula: 'CH₃COOH',
                mw: 60.05,
                cas: '64-19-7',
                density: 1.05,
                concentration: 99.5,
                color: 'transparent',
                state: 'liquid',
                hazards: ['corrosive', 'flammable'],
                pka: 4.76,
                pkb: null,
                meltingPoint: 16.6,
                boilingPoint: 118.1,
                solubility: 'miscible',
                safety: {
                    pictograms: ['GHS02', 'GHS07'],
                    ppe: ['gloves', 'goggles', 'fume-hood']
                }
            },
            {
                id: 'nacl',
                name: 'Sodium Chloride',
                formula: 'NaCl',
                mw: 58.44,
                cas: '7647-14-5',
                density: 2.16,
                concentration: null,
                color: 'transparent',
                state: 'solid',
                hazards: [],
                pka: null,
                pkb: null,
                meltingPoint: 801,
                boilingPoint: 1413,
                solubility: '36 g/100 mL',
                safety: {
                    pictograms: [],
                    ppe: []
                }
            },
            {
                id: 'ethanol',
                name: 'Ethanol',
                formula: 'C₂H₅OH',
                mw: 46.07,
                cas: '64-17-5',
                density: 0.789,
                concentration: 99.5,
                color: 'transparent',
                state: 'liquid',
                hazards: ['flammable'],
                pka: 15.9,
                pkb: null,
                meltingPoint: -114.1,
                boilingPoint: 78.37,
                solubility: 'miscible',
                safety: {
                    pictograms: ['GHS02', 'GHS07'],
                    ppe: ['gloves', 'goggles']
                }
            },
            {
                id: 'acetone',
                name: 'Acetone',
                formula: 'C₃H₆O',
                mw: 58.08,
                cas: '67-64-1',
                density: 0.784,
                concentration: 99.5,
                color: 'transparent',
                state: 'liquid',
                hazards: ['flammable', 'irritant'],
                pka: 19.3,
                pkb: null,
                meltingPoint: -94.7,
                boilingPoint: 56.05,
                solubility: 'miscible',
                safety: {
                    pictograms: ['GHS02', 'GHS07'],
                    ppe: ['gloves', 'goggles', 'fume-hood']
                }
            },
            {
                id: 'hno3',
                name: 'Nitric Acid',
                formula: 'HNO₃',
                mw: 63.01,
                cas: '7697-37-2',
                density: 1.51,
                concentration: 68,
                color: 'transparent',
                state: 'liquid',
                hazards: ['oxidizer', 'corrosive'],
                pka: -1.4,
                pkb: null,
                meltingPoint: -42,
                boilingPoint: 83,
                solubility: 'miscible',
                safety: {
                    pictograms: ['GHS03', 'GHS05', 'GHS07'],
                    ppe: ['gloves', 'goggles', 'face-shield', 'fume-hood']
                }
            },
            {
                id: 'nh4oh',
                name: 'Ammonium Hydroxide',
                formula: 'NH₄OH',
                mw: 35.05,
                cas: '1336-21-6',
                density: 0.91,
                concentration: 28,
                color: 'transparent',
                state: 'liquid',
                hazards: ['corrosive', 'environmental'],
                pka: 9.25,
                pkb: null,
                meltingPoint: -57.5,
                boilingPoint: 37.7,
                solubility: 'miscible',
                safety: {
                    pictograms: ['GHS05', 'GHS07', 'GHS09'],
                    ppe: ['gloves', 'goggles', 'fume-hood']
                }
            },
            {
                id: 'fecl3',
                name: 'Iron(III) Chloride',
                formula: 'FeCl₃',
                mw: 162.20,
                cas: '7705-08-0',
                density: 2.90,
                concentration: null,
                color: '#FFD700',
                state: 'solid',
                hazards: ['corrosive'],
                pka: null,
                pkb: null,
                meltingPoint: 306,
                boilingPoint: 315,
                solubility: '92 g/100 mL',
                safety: {
                    pictograms: ['GHS05', 'GHS07'],
                    ppe: ['gloves', 'goggles']
                }
            }
        ];
    }

    getReagent(id) {
        return this.reagents.find(r => r.id === id);
    }

    searchReagents(query) {
        const lowerQuery = query.toLowerCase();
        return this.reagents.filter(r => 
            r.name.toLowerCase().includes(lowerQuery) ||
            r.formula.toLowerCase().includes(lowerQuery)
        );
    }

    getAllReagents() {
        return this.reagents;
    }

    prepareSolution(reagentId, targetConcentration, targetVolume) {
        const reagent = this.getReagent(reagentId);
        if (!reagent) return null;

        // Calculate required mass or volume
        const molesNeeded = targetConcentration * (targetVolume / 1000);
        const massNeeded = molesNeeded * reagent.mw;

        let preparation = {
            reagent: reagent.name,
            formula: reagent.formula,
            targetConcentration: targetConcentration,
            targetVolume: targetVolume,
            molesNeeded: molesNeeded,
            massNeeded: massNeeded
        };

        if (reagent.state === 'solid') {
            preparation.method = `Weigh ${massNeeded.toFixed(3)} g of ${reagent.name}`;
            preparation.volumeNeeded = null;
        } else if (reagent.concentration) {
            // For liquid reagents with known concentration
            const stockConcentration = (reagent.density * reagent.concentration * 10) / reagent.mw;
            const volumeNeeded = (targetConcentration * targetVolume) / stockConcentration;
            preparation.method = `Measure ${volumeNeeded.toFixed(2)} mL of ${reagent.name} (${reagent.concentration}%)`;
            preparation.volumeNeeded = volumeNeeded;
        }

        preparation.instructions = [
            preparation.method,
            `Transfer to a ${targetVolume} mL volumetric flask`,
            `Add distilled water to the mark`,
            `Mix thoroughly`
        ];

        return preparation;
    }
}

// Initialize global database
const reagentDB = new ReagentDatabase();