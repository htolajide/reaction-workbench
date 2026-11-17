// js/stoichiometry.js
class StoichiometryCalculator {
    constructor() {
        this.reagentDB = reagentDB;
    }

    calculateMoles(mass, molecularWeight) {
        return mass / molecularWeight;
    }

    calculateMass(moles, molecularWeight) {
        return moles * molecularWeight;
    }

    calculateConcentration(moles, volumeL) {
        return moles / volumeL;
    }

    calculateVolume(moles, concentration) {
        return moles / concentration;
    }

    findLimitingReagent(reactants, amounts) {
        // reactants: array of {id, coefficient}
        // amounts: array of moles for each reactant
        
        let limitingReagent = null;
        let minRatio = Infinity;

        reactants.forEach((reactant, index) => {
            const ratio = amounts[index] / reactant.coefficient;
            if (ratio < minRatio) {
                minRatio = ratio;
                limitingReagent = {
                    ...reactant,
                    availableMoles: amounts[index],
                    ratio: ratio
                };
            }
        });

        return limitingReagent;
    }

    calculateTheoreticalYield(limitingReagent, products) {
        const yields = {};
        
        products.forEach(product => {
            const molesProduced = limitingReagent.ratio * product.coefficient;
            const reagent = this.reagentDB.getReagent(product.id);
            const massProduced = reagent ? this.calculateMass(molesProduced, reagent.mw) : 0;
            
            yields[product.id] = {
                moles: molesProduced,
                mass: massProduced,
                coefficient: product.coefficient
            };
        });

        return yields;
    }

    balanceEquation(reactants, products) {
        // Simplified equation balancing
        // In a real implementation, this would use linear algebra
        return {
            balanced: true,
            coefficients: {
                reactants: reactants.map(() => 1),
                products: products.map(() => 1)
            }
        };
    }

    solveStoichiometryProblem(problem) {
        const { reactants, products, known, unknown } = problem;
        
        // Find limiting reagent
        const reactantAmounts = reactants.map(r => known[r.id] || 0);
        const limiting = this.findLimitingReagent(reactants, reactantAmounts);
        
        // Calculate theoretical yields
        const yields = this.calculateTheoreticalYield(limiting, products);
        
        return {
            limitingReagent: limiting,
            theoreticalYields: yields,
            excessReagents: reactants.filter(r => r.id !== limiting.id)
        };
    }
}

const stoichCalc = new StoichiometryCalculator();