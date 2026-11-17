// js/i18n.js
const translations = {
    en: {
        app_title: "Chemistry Workbench Pro",
        reagent_shelf: "🧪 Reagent Shelf",
        search_reagents: "Search reagents...",
        glassware: "🧫 Glassware",
        beaker: "Beaker",
        flask: "Flask",
        test_tube: "Test Tube",
        lab_bench: "🧪 Lab Bench",
        kinetics: "⚡ Kinetics",
        equilibrium: "⚖️ Equilibrium",
        titration: "💧 Titration",
        thermo: "🔥 Thermo",
        stoich: "🧮 Stoich",
        analysis: "📈 Analysis",
        calculations: "🔬 Calculations",
        safety: "⚠️ Safety",
        ai_assistant: "🤖 AI Assistant",
        predict: "Predict",
        yield: "Yield",
        suggest: "Suggest",
        explain: "Explain",
        run_simulation: "▶ Run Simulation",
        clear_bench: "🗑️ Clear Bench",
        run_mixture: "⚗️ Run Mixture",
        virtual_lab: "Virtual Lab Bench",
        drag_glassware: "Drag glassware from the left panel"
    },
    pl: {
        app_title: "Laboratorium Chemiczne Pro",
        reagent_shelf: "🧪 Półka z odczynnikami",
        search_reagents: "Szukaj odczynników...",
        glassware: "🧫 Szkło laboratoryjne",
        beaker: "Zlewka",
        flask: "Kolba",
        test_tube: "Probówka",
        lab_bench: "🧪 Stół laboratoryjny",
        kinetics: "⚡ Kinetyka",
        equilibrium: "⚖️ Równowaga",
        titration: "💧 Miareczkowanie",
        thermo: "🔥 Termochimia",
        stoich: " Stechiometria",
        analysis: " Analiza",
        calculations: " Obliczenia",
        safety: "️ Bezpieczeństwo",
        ai_assistant: "🤖 Asystent AI",
        predict: "Przewiduj",
        yield: "Wydajność",
        suggest: "Sugeruj",
        explain: "Wyjaśnij",
        run_simulation: "▶ Uruchom symulację",
        clear_bench: "️ Wyczyść stół",
        run_mixture: "⚗️ Uruchom mieszaninę",
        virtual_lab: "Wirtualny stół laboratoryjny",
        drag_glassware: "Przeciągnij szkło z lewego panelu"
    },
    es: {
        app_title: "Mesa de Química Pro",
        reagent_shelf: "🧪 Estante de Reactivos",
        search_reagents: "Buscar reactivos...",
        glassware: "🧫 Vidrio de Laboratorio",
        beaker: "Vaso de precipitados",
        flask: "Matraz",
        test_tube: "Tubo de ensayo",
        lab_bench: "🧪 Mesa de Laboratorio",
        kinetics: "⚡ Cinética",
        equilibrium: "⚖️ Equilibrio",
        titration: "💧 Titulación",
        thermo: "🔥 Termoquímica",
        stoich: "🧮 Estequiometría",
        analysis: "📈 Análisis",
        calculations: "🔬 Cálculos",
        safety: "⚠️ Seguridad",
        ai_assistant: "🤖 Asistente IA",
        predict: "Predecir",
        yield: "Rendimiento",
        suggest: "Sugerir",
        explain: "Explicar",
        run_simulation: "▶ Ejecutar Simulación",
        clear_bench: "🗑️ Limpiar Mesa",
        run_mixture: "⚗️ Ejecutar Mezcla",
        virtual_lab: "Mesa de Laboratorio Virtual",
        drag_glassware: "Arrastra el vidrio desde el panel izquierdo"
    },
    fr: {
        app_title: "Laboratoire de Chimie Pro",
        reagent_shelf: " Étagère à Réactifs",
        search_reagents: "Rechercher des réactifs...",
        glassware: "🧫 Verrerie",
        beaker: "Bécher",
        flask: "Ballon",
        test_tube: "Tube à essai",
        lab_bench: "🧪 Paillasse",
        kinetics: "⚡ Cinétique",
        equilibrium: "⚖️ Équilibre",
        titration: "💧 Titrage",
        thermo: "🔥 Thermochimie",
        stoich: "🧮 Stœchiométrie",
        analysis: "📈 Analyse",
        calculations: "🔬 Calculs",
        safety: "⚠️ Sécurité",
        ai_assistant: "🤖 Assistant IA",
        predict: "Prédire",
        yield: "Rendement",
        suggest: "Suggérer",
        explain: "Expliquer",
        run_simulation: "▶ Lancer la Simulation",
        clear_bench: "🗑️ Nettoyer la Paillasse",
        run_mixture: "⚗️ Lancer le Mélange",
        virtual_lab: "Paillasse Virtuelle",
        drag_glassware: "Glissez la verrerie depuis le panneau gauche"
    },
    de: {
        app_title: "Chemie Labor Pro",
        reagent_shelf: "🧪 Reagenzienregal",
        search_reagents: "Reagenzien suchen...",
        glassware: "🧫 Glasgeräte",
        beaker: "Becherglas",
        flask: "Kolben",
        test_tube: "Reagenzglas",
        lab_bench: " Laborbank",
        kinetics: " Kinetik",
        equilibrium: "⚖️ Gleichgewicht",
        titration: "💧 Titration",
        thermo: " Thermochemie",
        stoich: "🧮 Stöchiometrie",
        analysis: "📈 Analyse",
        calculations: "🔬 Berechnungen",
        safety: "⚠️ Sicherheit",
        ai_assistant: "🤖 KI-Assistent",
        predict: "Vorhersagen",
        yield: "Ausbeute",
        suggest: "Vorschlagen",
        explain: "Erklären",
        run_simulation: "▶ Simulation starten",
        clear_bench: "🗑️ Tisch leeren",
        run_mixture: "⚗️ Mischung starten",
        virtual_lab: "Virtuelle Laborbank",
        drag_glassware: "Glasgeräte vom linken Panel ziehen"
    }
};

class I18n {
    constructor() {
        this.currentLang = localStorage.getItem('app_language') || 'en';
    }

    // Get translation for a key
    t(key) {
        return (translations[this.currentLang] && translations[this.currentLang][key]) || translations['en'][key] || key;
    }

    // Apply translations to all elements with data-i18n attribute
    apply() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.t(key);
            
            if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
                el.setAttribute('placeholder', translation);
            } else {
                el.textContent = translation;
            }
        });
        
        // Update HTML lang attribute for accessibility
        document.documentElement.lang = this.currentLang;
    }

    // Change language and save preference
    setLanguage(lang) {
        if (translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('app_language', lang);
            this.apply();
            
            // Trigger custom event so app.js knows to re-render dynamic modules
            window.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));
        }
    }
}

const i18n = new I18n();