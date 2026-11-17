// js/periodicTable.js - Complete version with all 118 elements
class PeriodicTable {
    constructor() {
        this.elements = this.initializeElements();
    }

    initializeElements() {
        return [
            // Period 1
            { symbol: 'H', name: 'Hydrogen', number: 1, mass: 1.008, group: 1, period: 1, category: 'nonmetal' },
            { symbol: 'He', name: 'Helium', number: 2, mass: 4.003, group: 18, period: 1, category: 'noble-gas' },
            
            // Period 2
            { symbol: 'Li', name: 'Lithium', number: 3, mass: 6.941, group: 1, period: 2, category: 'alkali-metal' },
            { symbol: 'Be', name: 'Beryllium', number: 4, mass: 9.012, group: 2, period: 2, category: 'alkaline-earth' },
            { symbol: 'B', name: 'Boron', number: 5, mass: 10.81, group: 13, period: 2, category: 'metalloid' },
            { symbol: 'C', name: 'Carbon', number: 6, mass: 12.011, group: 14, period: 2, category: 'nonmetal' },
            { symbol: 'N', name: 'Nitrogen', number: 7, mass: 14.007, group: 15, period: 2, category: 'nonmetal' },
            { symbol: 'O', name: 'Oxygen', number: 8, mass: 15.999, group: 16, period: 2, category: 'nonmetal' },
            { symbol: 'F', name: 'Fluorine', number: 9, mass: 18.998, group: 17, period: 2, category: 'halogen' },
            { symbol: 'Ne', name: 'Neon', number: 10, mass: 20.180, group: 18, period: 2, category: 'noble-gas' },
            
            // Period 3
            { symbol: 'Na', name: 'Sodium', number: 11, mass: 22.990, group: 1, period: 3, category: 'alkali-metal' },
            { symbol: 'Mg', name: 'Magnesium', number: 12, mass: 24.305, group: 2, period: 3, category: 'alkaline-earth' },
            { symbol: 'Al', name: 'Aluminum', number: 13, mass: 26.982, group: 13, period: 3, category: 'post-transition' },
            { symbol: 'Si', name: 'Silicon', number: 14, mass: 28.086, group: 14, period: 3, category: 'metalloid' },
            { symbol: 'P', name: 'Phosphorus', number: 15, mass: 30.974, group: 15, period: 3, category: 'nonmetal' },
            { symbol: 'S', name: 'Sulfur', number: 16, mass: 32.065, group: 16, period: 3, category: 'nonmetal' },
            { symbol: 'Cl', name: 'Chlorine', number: 17, mass: 35.453, group: 17, period: 3, category: 'halogen' },
            { symbol: 'Ar', name: 'Argon', number: 18, mass: 39.948, group: 18, period: 3, category: 'noble-gas' },
            
            // Period 4
            { symbol: 'K', name: 'Potassium', number: 19, mass: 39.098, group: 1, period: 4, category: 'alkali-metal' },
            { symbol: 'Ca', name: 'Calcium', number: 20, mass: 40.078, group: 2, period: 4, category: 'alkaline-earth' },
            { symbol: 'Sc', name: 'Scandium', number: 21, mass: 44.956, group: 3, period: 4, category: 'transition-metal' },
            { symbol: 'Ti', name: 'Titanium', number: 22, mass: 47.867, group: 4, period: 4, category: 'transition-metal' },
            { symbol: 'V', name: 'Vanadium', number: 23, mass: 50.942, group: 5, period: 4, category: 'transition-metal' },
            { symbol: 'Cr', name: 'Chromium', number: 24, mass: 51.996, group: 6, period: 4, category: 'transition-metal' },
            { symbol: 'Mn', name: 'Manganese', number: 25, mass: 54.938, group: 7, period: 4, category: 'transition-metal' },
            { symbol: 'Fe', name: 'Iron', number: 26, mass: 55.845, group: 8, period: 4, category: 'transition-metal' },
            { symbol: 'Co', name: 'Cobalt', number: 27, mass: 58.933, group: 9, period: 4, category: 'transition-metal' },
            { symbol: 'Ni', name: 'Nickel', number: 28, mass: 58.693, group: 10, period: 4, category: 'transition-metal' },
            { symbol: 'Cu', name: 'Copper', number: 29, mass: 63.546, group: 11, period: 4, category: 'transition-metal' },
            { symbol: 'Zn', name: 'Zinc', number: 30, mass: 65.380, group: 12, period: 4, category: 'transition-metal' },
            { symbol: 'Ga', name: 'Gallium', number: 31, mass: 69.723, group: 13, period: 4, category: 'post-transition' },
            { symbol: 'Ge', name: 'Germanium', number: 32, mass: 72.640, group: 14, period: 4, category: 'metalloid' },
            { symbol: 'As', name: 'Arsenic', number: 33, mass: 74.922, group: 15, period: 4, category: 'metalloid' },
            { symbol: 'Se', name: 'Selenium', number: 34, mass: 78.960, group: 16, period: 4, category: 'nonmetal' },
            { symbol: 'Br', name: 'Bromine', number: 35, mass: 79.904, group: 17, period: 4, category: 'halogen' },
            { symbol: 'Kr', name: 'Krypton', number: 36, mass: 83.798, group: 18, period: 4, category: 'noble-gas' },
            
            // Period 5
            { symbol: 'Rb', name: 'Rubidium', number: 37, mass: 85.468, group: 1, period: 5, category: 'alkali-metal' },
            { symbol: 'Sr', name: 'Strontium', number: 38, mass: 87.620, group: 2, period: 5, category: 'alkaline-earth' },
            { symbol: 'Y', name: 'Yttrium', number: 39, mass: 88.906, group: 3, period: 5, category: 'transition-metal' },
            { symbol: 'Zr', name: 'Zirconium', number: 40, mass: 91.224, group: 4, period: 5, category: 'transition-metal' },
            { symbol: 'Nb', name: 'Niobium', number: 41, mass: 92.906, group: 5, period: 5, category: 'transition-metal' },
            { symbol: 'Mo', name: 'Molybdenum', number: 42, mass: 95.960, group: 6, period: 5, category: 'transition-metal' },
            { symbol: 'Tc', name: 'Technetium', number: 43, mass: 98.000, group: 7, period: 5, category: 'transition-metal' },
            { symbol: 'Ru', name: 'Ruthenium', number: 44, mass: 101.070, group: 8, period: 5, category: 'transition-metal' },
            { symbol: 'Rh', name: 'Rhodium', number: 45, mass: 102.906, group: 9, period: 5, category: 'transition-metal' },
            { symbol: 'Pd', name: 'Palladium', number: 46, mass: 106.420, group: 10, period: 5, category: 'transition-metal' },
            { symbol: 'Ag', name: 'Silver', number: 47, mass: 107.868, group: 11, period: 5, category: 'transition-metal' },
            { symbol: 'Cd', name: 'Cadmium', number: 48, mass: 112.411, group: 12, period: 5, category: 'transition-metal' },
            { symbol: 'In', name: 'Indium', number: 49, mass: 114.818, group: 13, period: 5, category: 'post-transition' },
            { symbol: 'Sn', name: 'Tin', number: 50, mass: 118.710, group: 14, period: 5, category: 'post-transition' },
            { symbol: 'Sb', name: 'Antimony', number: 51, mass: 121.760, group: 15, period: 5, category: 'metalloid' },
            { symbol: 'Te', name: 'Tellurium', number: 52, mass: 127.600, group: 16, period: 5, category: 'metalloid' },
            { symbol: 'I', name: 'Iodine', number: 53, mass: 126.904, group: 17, period: 5, category: 'halogen' },
            { symbol: 'Xe', name: 'Xenon', number: 54, mass: 131.293, group: 18, period: 5, category: 'noble-gas' },
            
            // Period 6
            { symbol: 'Cs', name: 'Cesium', number: 55, mass: 132.905, group: 1, period: 6, category: 'alkali-metal' },
            { symbol: 'Ba', name: 'Barium', number: 56, mass: 137.327, group: 2, period: 6, category: 'alkaline-earth' },
            { symbol: 'La', name: 'Lanthanum', number: 57, mass: 138.905, group: 3, period: 6, category: 'lanthanide' },
            { symbol: 'Hf', name: 'Hafnium', number: 72, mass: 178.490, group: 4, period: 6, category: 'transition-metal' },
            { symbol: 'Ta', name: 'Tantalum', number: 73, mass: 180.948, group: 5, period: 6, category: 'transition-metal' },
            { symbol: 'W', name: 'Tungsten', number: 74, mass: 183.840, group: 6, period: 6, category: 'transition-metal' },
            { symbol: 'Re', name: 'Rhenium', number: 75, mass: 186.207, group: 7, period: 6, category: 'transition-metal' },
            { symbol: 'Os', name: 'Osmium', number: 76, mass: 190.230, group: 8, period: 6, category: 'transition-metal' },
            { symbol: 'Ir', name: 'Iridium', number: 77, mass: 192.217, group: 9, period: 6, category: 'transition-metal' },
            { symbol: 'Pt', name: 'Platinum', number: 78, mass: 195.084, group: 10, period: 6, category: 'transition-metal' },
            { symbol: 'Au', name: 'Gold', number: 79, mass: 196.967, group: 11, period: 6, category: 'transition-metal' },
            { symbol: 'Hg', name: 'Mercury', number: 80, mass: 200.590, group: 12, period: 6, category: 'transition-metal' },
            { symbol: 'Tl', name: 'Thallium', number: 81, mass: 204.383, group: 13, period: 6, category: 'post-transition' },
            { symbol: 'Pb', name: 'Lead', number: 82, mass: 207.200, group: 14, period: 6, category: 'post-transition' },
            { symbol: 'Bi', name: 'Bismuth', number: 83, mass: 208.980, group: 15, period: 6, category: 'post-transition' },
            { symbol: 'Po', name: 'Polonium', number: 84, mass: 209.000, group: 16, period: 6, category: 'metalloid' },
            { symbol: 'At', name: 'Astatine', number: 85, mass: 210.000, group: 17, period: 6, category: 'halogen' },
            { symbol: 'Rn', name: 'Radon', number: 86, mass: 222.000, group: 18, period: 6, category: 'noble-gas' },
            
            // Lanthanides (Period 6, displayed in separate row)
            { symbol: 'Ce', name: 'Cerium', number: 58, mass: 140.116, group: 4, period: 9, category: 'lanthanide' },
            { symbol: 'Pr', name: 'Praseodymium', number: 59, mass: 140.908, group: 5, period: 9, category: 'lanthanide' },
            { symbol: 'Nd', name: 'Neodymium', number: 60, mass: 144.242, group: 6, period: 9, category: 'lanthanide' },
            { symbol: 'Pm', name: 'Promethium', number: 61, mass: 145.000, group: 7, period: 9, category: 'lanthanide' },
            { symbol: 'Sm', name: 'Samarium', number: 62, mass: 150.360, group: 8, period: 9, category: 'lanthanide' },
            { symbol: 'Eu', name: 'Europium', number: 63, mass: 151.964, group: 9, period: 9, category: 'lanthanide' },
            { symbol: 'Gd', name: 'Gadolinium', number: 64, mass: 157.250, group: 10, period: 9, category: 'lanthanide' },
            { symbol: 'Tb', name: 'Terbium', number: 65, mass: 158.925, group: 11, period: 9, category: 'lanthanide' },
            { symbol: 'Dy', name: 'Dysprosium', number: 66, mass: 162.500, group: 12, period: 9, category: 'lanthanide' },
            { symbol: 'Ho', name: 'Holmium', number: 67, mass: 164.930, group: 13, period: 9, category: 'lanthanide' },
            { symbol: 'Er', name: 'Erbium', number: 68, mass: 167.259, group: 14, period: 9, category: 'lanthanide' },
            { symbol: 'Tm', name: 'Thulium', number: 69, mass: 168.934, group: 15, period: 9, category: 'lanthanide' },
            { symbol: 'Yb', name: 'Ytterbium', number: 70, mass: 173.054, group: 16, period: 9, category: 'lanthanide' },
            { symbol: 'Lu', name: 'Lutetium', number: 71, mass: 174.967, group: 17, period: 9, category: 'lanthanide' },
            
            // Period 7
            { symbol: 'Fr', name: 'Francium', number: 87, mass: 223.000, group: 1, period: 7, category: 'alkali-metal' },
            { symbol: 'Ra', name: 'Radium', number: 88, mass: 226.000, group: 2, period: 7, category: 'alkaline-earth' },
            { symbol: 'Ac', name: 'Actinium', number: 89, mass: 227.000, group: 3, period: 7, category: 'actinide' },
            { symbol: 'Rf', name: 'Rutherfordium', number: 104, mass: 267.000, group: 4, period: 7, category: 'transition-metal' },
            { symbol: 'Db', name: 'Dubnium', number: 105, mass: 268.000, group: 5, period: 7, category: 'transition-metal' },
            { symbol: 'Sg', name: 'Seaborgium', number: 106, mass: 269.000, group: 6, period: 7, category: 'transition-metal' },
            { symbol: 'Bh', name: 'Bohrium', number: 107, mass: 270.000, group: 7, period: 7, category: 'transition-metal' },
            { symbol: 'Hs', name: 'Hassium', number: 108, mass: 277.000, group: 8, period: 7, category: 'transition-metal' },
            { symbol: 'Mt', name: 'Meitnerium', number: 109, mass: 278.000, group: 9, period: 7, category: 'transition-metal' },
            { symbol: 'Ds', name: 'Darmstadtium', number: 110, mass: 281.000, group: 10, period: 7, category: 'transition-metal' },
            { symbol: 'Rg', name: 'Roentgenium', number: 111, mass: 282.000, group: 11, period: 7, category: 'transition-metal' },
            { symbol: 'Cn', name: 'Copernicium', number: 112, mass: 285.000, group: 12, period: 7, category: 'transition-metal' },
            { symbol: 'Nh', name: 'Nihonium', number: 113, mass: 286.000, group: 13, period: 7, category: 'post-transition' },
            { symbol: 'Fl', name: 'Flerovium', number: 114, mass: 289.000, group: 14, period: 7, category: 'post-transition' },
            { symbol: 'Mc', name: 'Moscovium', number: 115, mass: 290.000, group: 15, period: 7, category: 'post-transition' },
            { symbol: 'Lv', name: 'Livermorium', number: 116, mass: 293.000, group: 16, period: 7, category: 'post-transition' },
            { symbol: 'Ts', name: 'Tennessine', number: 117, mass: 294.000, group: 17, period: 7, category: 'halogen' },
            { symbol: 'Og', name: 'Oganesson', number: 118, mass: 294.000, group: 18, period: 7, category: 'noble-gas' },
            
            // Actinides (Period 7, displayed in separate row)
            { symbol: 'Th', name: 'Thorium', number: 90, mass: 232.038, group: 4, period: 10, category: 'actinide' },
            { symbol: 'Pa', name: 'Protactinium', number: 91, mass: 231.036, group: 5, period: 10, category: 'actinide' },
            { symbol: 'U', name: 'Uranium', number: 92, mass: 238.029, group: 6, period: 10, category: 'actinide' },
            { symbol: 'Np', name: 'Neptunium', number: 93, mass: 237.000, group: 7, period: 10, category: 'actinide' },
            { symbol: 'Pu', name: 'Plutonium', number: 94, mass: 244.000, group: 8, period: 10, category: 'actinide' },
            { symbol: 'Am', name: 'Americium', number: 95, mass: 243.000, group: 9, period: 10, category: 'actinide' },
            { symbol: 'Cm', name: 'Curium', number: 96, mass: 247.000, group: 10, period: 10, category: 'actinide' },
            { symbol: 'Bk', name: 'Berkelium', number: 97, mass: 247.000, group: 11, period: 10, category: 'actinide' },
            { symbol: 'Cf', name: 'Californium', number: 98, mass: 251.000, group: 12, period: 10, category: 'actinide' },
            { symbol: 'Es', name: 'Einsteinium', number: 99, mass: 252.000, group: 13, period: 10, category: 'actinide' },
            { symbol: 'Fm', name: 'Fermium', number: 100, mass: 257.000, group: 14, period: 10, category: 'actinide' },
            { symbol: 'Md', name: 'Mendelevium', number: 101, mass: 258.000, group: 15, period: 10, category: 'actinide' },
            { symbol: 'No', name: 'Nobelium', number: 102, mass: 259.000, group: 16, period: 10, category: 'actinide' },
            { symbol: 'Lr', name: 'Lawrencium', number: 103, mass: 266.000, group: 17, period: 10, category: 'actinide' }
        ];
    }

    render(container) {
        if (!container) return;
        
        container.innerHTML = '';
        
        // Add legend at the top
        const legend = this.createLegend();
        container.appendChild(legend);
        
        // Create periodic table grid
        const table = document.createElement('div');
        table.className = 'periodic-table-grid';
        table.style.display = 'grid';
        table.style.gridTemplateColumns = 'repeat(18, minmax(45px, 1fr))';
        table.style.gap = '2px';
        table.style.padding = '1rem';
        table.style.maxWidth = '100%';
        table.style.overflowX = 'auto';

        this.elements.forEach(element => {
            const cell = document.createElement('div');
            cell.className = `element-cell element-${element.category}`;
            
            cell.style.gridColumn = element.group;
            cell.style.gridRow = element.period;
            
            cell.innerHTML = `
                <div class="element-number">${element.number}</div>
                <div class="element-symbol">${element.symbol}</div>
                <div class="element-name">${element.name}</div>
                <div class="element-mass">${element.mass}</div>
            `;

            cell.addEventListener('click', () => this.showElementInfo(element));
            cell.addEventListener('mouseenter', () => {
                cell.style.transform = 'scale(1.2)';
                cell.style.zIndex = '100';
                cell.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
            });
            cell.addEventListener('mouseleave', () => {
                cell.style.transform = 'scale(1)';
                cell.style.zIndex = '1';
                cell.style.boxShadow = 'none';
            });

            table.appendChild(cell);
        });

        container.appendChild(table);
    }

    createLegend() {
        const legend = document.createElement('div');
        legend.className = 'periodic-table-legend';
        legend.style.cssText = 'display: flex; flex-wrap: wrap; gap: 10px; padding: 1rem; background: var(--bg-color); border-radius: 8px; margin-bottom: 1rem;';
        
        const categories = [
            { class: 'nonmetal', label: 'Nonmetal', color: '#90EE90' },
            { class: 'noble-gas', label: 'Noble Gas', color: '#ADD8E6' },
            { class: 'alkali-metal', label: 'Alkali Metal', color: '#FFB6C1' },
            { class: 'alkaline-earth', label: 'Alkaline Earth', color: '#FFDAB9' },
            { class: 'metalloid', label: 'Metalloid', color: '#98FB98' },
            { class: 'halogen', label: 'Halogen', color: '#FFFFE0' },
            { class: 'transition-metal', label: 'Transition Metal', color: '#FFD700' },
            { class: 'post-transition', label: 'Post-Transition', color: '#D3D3D3' },
            { class: 'lanthanide', label: 'Lanthanide', color: '#FFB6FF' },
            { class: 'actinide', label: 'Actinide', color: '#FF9999' }
        ];

        categories.forEach(cat => {
            const item = document.createElement('div');
            item.style.cssText = 'display: flex; align-items: center; gap: 5px; font-size: 0.85rem;';
            item.innerHTML = `
                <div style="width: 20px; height: 20px; background: ${cat.color}; border: 1px solid #666; border-radius: 3px;"></div>
                <span>${cat.label}</span>
            `;
            legend.appendChild(item);
        });

        return legend;
    }

    showElementInfo(element) {
        const categoryNames = {
            'nonmetal': 'Nonmetal',
            'noble-gas': 'Noble Gas',
            'alkali-metal': 'Alkali Metal',
            'alkaline-earth': 'Alkaline Earth Metal',
            'metalloid': 'Metalloid',
            'halogen': 'Halogen',
            'transition-metal': 'Transition Metal',
            'post-transition': 'Post-Transition Metal',
            'lanthanide': 'Lanthanide',
            'actinide': 'Actinide'
        };

        alert(
            `${element.name} (${element.symbol})\n\n` +
            `Atomic Number: ${element.number}\n` +
            `Atomic Mass: ${element.mass} u\n` +
            `Category: ${categoryNames[element.category] || element.category}\n` +
            `Group: ${element.group}\n` +
            `Period: ${element.period}`
        );
    }

    getElement(symbol) {
        return this.elements.find(e => e.symbol === symbol);
    }
}

const periodicTable = new PeriodicTable();