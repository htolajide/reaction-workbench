/* ============ THEME (light/dark) ============ */
(function(){
  const KEY = "reactionBenchTheme";
  let saved = null;
  try{ saved = localStorage.getItem(KEY); }catch(e){}
  const theme = saved || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);
  const btn = document.getElementById("theme-toggle");
  if(btn){
    btn.textContent = theme==="dark" ? "☀️" : "🌙";
    btn.addEventListener("click", ()=>{
      const cur = document.documentElement.getAttribute("data-theme")==="dark" ? "dark" : "light";
      const next = cur==="dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      btn.textContent = next==="dark" ? "☀️" : "🌙";
      try{ localStorage.setItem(KEY, next); }catch(e){}
    });
  }
})();

/* ============ I18N ============ */
const I18N = {"en": {"app_eyebrow": "Reaction Bench · animated workbench", "app_title": "Chemistry Simulation Workbench", "app_note": "ⓘ Physics-based teaching models — verify quantitatively before lab use.", "tab_kinetics": "Kinetics", "tab_equilibrium": "Equilibrium", "tab_acidbase": "Acid–Base", "tab_thermo": "Thermochemistry", "tab_custom": "Custom Reaction", "tab_reagents": "Reagents & Elements", "tab_log": "Lab Log", "tab_ai": "AI Assistant", "footer_text": "Reaction Bench — an educational pre-lab intuition tool. Confirm quantitative results against primary literature before relying on them experimentally.", "reagent_preset": "Reagent / reaction preset", "export_data_csv": "⬇ Export data (CSV)", "export_chart_png": "⬇ Export chart (PNG)", "log_this_experiment": "📌 Log this experiment", "order_0": "0th order", "order_1": "1st order", "order_2": "2nd order", "k_reaction_setup": "Reaction setup", "k_opt_custom": "Custom species \"A\"", "k_opt_h2o2": "Hydrogen peroxide decomposition — H₂O₂", "k_opt_n2o5": "Dinitrogen pentoxide decomposition — N₂O₅", "k_opt_nh3": "Ammonia surface decomposition — NH₃ (0th order)", "k_opt_no2": "Nitrogen dioxide dimerization — NO₂ (2nd order)", "k_or_bank": "Or pick species from reactant bank", "k_generic_species": "— generic species \"A\" —", "k_initial_conc": "Initial concentration [A]₀", "k_rate_constant": "Rate constant k", "k_run_btn": "▶ Run reaction on the bench", "k_halflife_label": "Half-life t½", "k_rate_label": "Initial rate", "k_law_label": "Rate law", "k_surface_beaker": "reaction beaker", "k_surface_chart": "concentration vs. time", "e_reaction_system": "Reaction system", "e_opt_custom": "Custom A + B ⇌ C + D", "e_opt_watergas": "Water-gas shift — CO + H₂O ⇌ CO₂ + H₂", "e_opt_ester": "Esterification — CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O", "e_kc": "Equilibrium constant Kc", "e_initial_A0": "Initial [A]₀", "e_initial_B0": "Initial [B]₀", "e_custom_mode": "Custom mode: name the species (optional)", "e_stress_test": "Le Chatelier stress test", "e_add_a": "+ Add 0.40 M A", "e_remove_c": "− Remove 0.30 M C", "e_dilute": "⇌ Dilute the system", "e_reset": "reset to initial equilibrium", "e_export_ice": "⬇ Export ICE table (CSV)", "e_ice_table": "ICE table", "a_titration_setup": "Titration setup", "a_acid_in_flask": "Acid in flask", "a_opt_custom": "Custom weak acid", "a_opt_hcl": "Hydrochloric acid — HCl", "a_opt_hno3": "Nitric acid — HNO₃", "a_opt_h2so4": "Sulfuric acid — H₂SO₄ (1st H⁺)", "a_opt_ch3cooh": "Acetic acid — CH₃COOH", "a_opt_hf": "Hydrofluoric acid — HF", "a_opt_h3po4": "Phosphoric acid — H₃PO₄ (1st H⁺)", "a_base_in_burette": "Base in burette", "a_opt_naoh": "Sodium hydroxide — NaOH", "a_opt_koh": "Potassium hydroxide — KOH", "a_opt_caoh2": "Calcium hydroxide — Ca(OH)₂", "a_strong_strong": "Strong/Strong", "a_weak_strong": "Weak acid/Strong base", "a_acid_conc": "Acid conc. [HA]", "a_acid_volume": "Acid volume", "a_base_conc": "Base conc. [OH⁻]", "a_pka": "pKa of acid", "a_titrant_added": "Titrant added (drag me)", "a_surface_rig": "titration rig", "a_surface_curve": "titration curve · pH vs. volume", "a_ph_now": "pH now", "a_equiv_vol": "Equiv. Vol.", "a_indicator_label": "Indicator", "a_export_curve": "⬇ Export curve (CSV)", "t_calorimetry": "Calorimetry", "t_opt_custom": "Custom reaction", "t_opt_neutralization": "Neutralization — HCl + NaOH", "t_opt_dissolution": "Dissolution — NH₄NO₃ in water (endothermic)", "t_opt_combustion": "Combustion — CH₄ (highly exothermic)", "t_mass": "Mass of solution", "t_specific_heat": "Specific heat c", "t_delta_t": "Temperature change ΔT", "t_moles": "Moles of reactant", "t_or_bank": "Or compute moles from a reactant bank compound", "t_mass_reactant": "Mass of that reactant", "t_ea": "Activation energy Ea", "t_q_label": "q (heat exchanged)", "t_dh_label": "ΔH (reaction)", "t_dhm_label": "ΔH molar", "t_class_label": "Classification", "t_export_diagram": "⬇ Export diagram data (CSV)", "t_surface_flask": "reaction flask", "t_surface_diagram": "reaction energy diagram", "c_reactants": "Reactants", "c_add_reactant": "+ Add reactant", "c_products": "Products", "c_add_product": "+ Add product", "c_balance_solve": "⚖ Balance & Solve", "c_hint": "Set each reactant's phase and amount, predict the products, then run. Recognized reaction types: combustion, acid–base neutralization, metal + acid, decomposition, and element synthesis.", "c_balanced_eq": "Balanced equation", "c_results": "Stoichiometry results", "c_export_csv": "⬇ Export results (CSV)", "c_err_need_both": "Add at least one reactant and one product.", "c_err_bad_formula": "Unrecognized formula:", "c_err_impossible": "This equation can't be balanced — the elements on each side don't match. Check your formulas.", "c_err_underdetermined": "Not enough information to find a unique balance — try adding another product or reactant.", "c_err_general": "Couldn't balance this equation. Check your formulas and try again.", "c_role_reactant": "Reactant", "c_role_product": "Product", "c_limiting": "limiting", "c_th_role": "Role", "c_th_formula": "Formula", "c_th_coeff": "Coeff.", "c_th_molarmass": "Molar mass", "c_th_input": "Input", "c_th_output": "Result", "c_mass_check": "Mass balance check", "c_in": "in", "c_leftover": "leftover", "r_periodic_table": "Periodic table — click an element to add it to the formula builder", "r_common_reagents": "Common laboratory reagents", "r_formula_builder": "Formula builder", "r_formula_placeholder": "e.g. NaOH, H2SO4, Ca(OH)2", "r_clear": "Clear", "r_molar_mass": "Molar mass", "r_prepare_solution": "Prepare a solution", "r_target_molarity": "Target molarity", "r_target_volume": "Target volume", "r_mass_to_weigh": "Mass to weigh out", "r_dissolve_note": "Dissolve this mass of the selected compound in water and dilute to the target volume in a volumetric flask.", "log_title_pre": "Experiment log (", "log_title_post": " saved) — stored locally in this browser", "log_export_csv": "⬇ Export all (CSV)", "log_export_json": "⬇ Export all (JSON)", "log_clear_all": "clear all", "log_th_time": "Time", "log_th_module": "Module", "log_th_inputs": "Inputs", "log_th_results": "Results", "log_no_experiments": "No experiments logged yet. Use the \"📌 Log this experiment\" button in any module.", "log_confirm_clear": "Clear all logged experiments? This cannot be undone.", "ai_title": "Lab Assistant", "ai_intro": "Ask a quick-help question (works instantly, no download) or load the on-device model below for open-ended chat.", "ai_input_placeholder": "e.g. What does half-life mean?", "ai_send": "Send", "ai_model_title": "On-device AI model (optional)", "ai_load_model": "⬇ Load on-device model", "ai_not_loaded": "Not loaded — quick-help still works without it.", "ai_covers_title": "What quick-help covers", "ai_downloading": "Downloading model (first time only, needs internet)…", "ai_loading_memory": "Loading model into memory…", "ai_ready": "Model loaded ✓ — open-ended questions now use the on-device model.", "ai_ready_btn": "Model loaded", "ai_ready_chat": "On-device model ready. Ask anything — responses are limited compared to a full assistant, but no data leaves your browser.", "ai_load_error": "Couldn't load the model (needs internet + a modern browser). Quick-help still works below. Error:", "ai_thinking": "thinking…", "ai_gen_error": "I couldn't generate a response — try rephrasing.", "ai_fallback_error": "The on-device model hit an error. Falling back to quick-help:", "ai_no_faq": "I don't have a canned answer for that — try loading the model again or rephrasing.", "ai_no_answer": "I don't have an instant answer for that yet. Try one of the suggested questions, rephrase using terms like pH, equilibrium, half-life, or Le Chatelier, or load the on-device model above for open-ended answers.", "classify_exo": "Exothermic", "classify_endo": "Endothermic", "axis_time_s": "TIME (s)", "axis_conc_M": "[A] (M)", "axis_volume_ml": "VOLUME BASE ADDED (mL)", "axis_ph": "pH", "cat_alkali": "Alkali metal", "cat_alkaline": "Alkaline earth", "cat_transition": "Transition metal", "cat_postmetal": "Post-transition metal", "cat_metalloid": "Metalloid", "cat_nonmetal": "Reactive nonmetal", "cat_halogen": "Halogen", "cat_noble": "Noble gas", "cat_lan": "Lanthanide", "cat_act": "Actinide", "cat_other": "Other", "ai_model_desc": "Loads an open-source instruction-tuned language model directly in your browser via <a href=\"https://github.com/huggingface/transformers.js\" target=\"_blank\" rel=\"noopener\">transformers.js</a> — free, no API key, and nothing is sent to a server. It's much less capable than a full assistant. Pick Lite if your connection is slow; first load still needs internet and a minute or two, after that it's cached.", "ai_covers_list": "Half-life · reaction order · Le Chatelier's principle · equilibrium constants · pH &amp; pKa · buffers · titration equivalence points · activation energy · exothermic vs endothermic · molarity &amp; molar mass · limiting reactant", "tab_overview": "Overview", "nav_group_sims": "Simulations", "nav_group_tools": "Tools", "ov_desc_kinetics": "Model reaction rates, orders, and half-life with an animated beaker.", "ov_desc_equilibrium": "Explore Kc, ICE tables, and Le Chatelier's principle with real reagents.", "ov_desc_acidbase": "Simulate titrations, pH curves, and indicator color changes.", "ov_desc_thermo": "Calculate ΔH, classify exo/endothermic reactions, and view energy diagrams.", "ov_desc_custom": "Set reactants and conditions, auto-predict products, chain reactions, and see estimated kinetics & equilibrium.", "ov_desc_reagents": "Browse the periodic table, build formulas, and calculate molar mass.", "ov_desc_log": "Review and export every experiment you've saved, as CSV or JSON.", "ov_desc_ai": "Get instant quick-help answers or chat with an optional on-device AI model.", "r_custom_name_placeholder": "Optional name", "r_add_to_bank": "➕ Add to reactant bank", "r_add_to_bank_invalid": "Build a valid formula first.", "r_add_to_bank_success": "Added {formula} to the reactant bank — it's now selectable in Kinetics, Equilibrium, Thermochemistry, and Custom Reaction.", "r_add_to_bank_exists": "That compound is already in the bank.", "r_suggestions_label": "Suggested real compounds with these elements:", "ind_name_methyl_orange": "Methyl orange", "ind_name_bromothymol": "Bromothymol blue", "ind_name_phenolphthalein": "Phenolphthalein", "ind_state_red": "red", "ind_state_yellow": "yellow", "ind_state_blue": "blue", "ind_state_colorless": "colorless", "ind_state_pink": "pink", "ind_state_transitioning": "transitioning", "a_indicator_note": "Chosen once for this titration; only its color changes as titrant is added — that color change marks the endpoint.", "toast_logged": "Saved to Lab Log ({module})", "c_conditions": "Conditions", "c_temperature": "Temperature", "c_sim_time": "Simulation time", "c_predicted_products_title": "Predicted products", "c_predict_btn": "🔮 Predict products", "c_ai_predict_btn": "🤖 Ask AI for products", "c_run_reaction": "▶ Run Reaction", "c_phase_solid": "Solid (mass)", "c_phase_solution": "Solution (vol×conc)", "c_mass_placeholder": "mass (g)", "c_vol_placeholder": "volume (mL)", "c_conc_placeholder": "conc (M)", "c_detected_prefix": "Detected reaction type:", "c_type_combustion": "Combustion", "c_type_neutralization": "Acid–base neutralization", "c_type_metal_acid": "Metal + acid", "c_type_decomposition": "Decomposition", "c_type_synthesis": "Element synthesis", "c_type_unknown": "Unrecognized", "c_type_ai": "AI-suggested (unverified)", "c_predict_failed": "Couldn't automatically recognize this reaction. Try a supported type, or ask the AI assistant (load it first from the AI Assistant tab).", "c_ai_thinking": "Asking the on-device model…", "c_ai_suggested": "AI-suggested products (unverified — please check these).", "c_ai_failed": "The AI couldn't produce usable formulas. Try rephrasing the reactants or enter a supported reaction type.", "c_no_products_yet": "No products yet — click \"Predict products\" above.", "c_err_no_products": "Predict (or AI-suggest) products before running the reaction.", "c_err_run_first": "Run a reaction first — there are no products to chain forward yet.", "c_auto_kinetics": "Auto-generated kinetics", "c_kinetics_surface": "limiting reactant remaining", "c_auto_equilibrium": "Auto-generated equilibrium position", "c_dynamics_disclaimer": "Kinetics and equilibrium panels are educational estimates based on reaction type and temperature — not measured rate constants or equilibrium constants for this specific reaction.", "c_axis_fraction": "FRACTION REMAINING", "c_kinetics_rate": "Estimated rate constant", "c_kinetics_complete": "Estimated completion", "c_kinetics_within": "within", "c_eq_estimate": "Estimated equilibrium constant", "c_eq_complete": "Effectively irreversible — treated as going to completion (>99.9% conversion).", "c_eq_favors_products": "Strongly favors products at equilibrium (roughly >90% conversion).", "c_eq_mixed": "Significant reversibility — meaningful amounts of both reactants and products expected at equilibrium.", "c_eq_favors_reactants": "Favors reactants — limited conversion expected.", "c_chain_btn": "⛓ Use products as next reactants", "toast_reaction_run": "Reaction run — results updated below.", "toast_chained": "Products loaded as new reactants. Predict again to continue the chain.", "ai_model_lite": "Lite (~0.5B params, faster download)", "ai_model_standard": "Standard (~1.5B params, more detailed)", "t_add_substance": "+ Add substance", "t_initial_temp": "Initial temperature", "t_final_temp": "Final temperature", "t_run_simulation": "▶ Run Simulation", "t_hint": "Pick the substance(s) you want to heat or cool, set a mass for each, choose the starting and target temperature, then run. Specific heat is looked up automatically where known.", "t_c_known": "using known specific heat: {c} J/g·°C", "t_c_default": "no data for this compound — using default {c} J/g·°C (water-like)", "t_absorbed": "Heat absorbed (heating)", "t_released": "Heat released (cooling)", "t_total": "Total", "t_th_mass": "Mass", "t_th_c": "c (J/g·°C)", "t_th_q": "q", "t_breakdown_title": "Per-substance breakdown", "t_axis_progress": "PROGRESS (%)", "t_axis_temp": "TEMPERATURE (°C)", "a_run_titration": "▶ Run Titration", "a_running": "Titrating…", "a_reaction_title": "Neutralization reaction", "a_titer_label": "Titer (volume delivered)", "a_endpoint_detected": "Endpoint detected — indicator color change observed. Titration stopped automatically.", "a_eq_unavailable": "Equation not available for this acid/base pair yet.", "toast_endpoint": "Endpoint reached — titer recorded.", "ai_stall_hint": "Still working — if this doesn't move for a while, your network may be blocking huggingface.co (where the model files come from), even though the small transformers.js library itself loaded fine.", "ai_downloading_pct": "Downloading {file}: {pct}%", "ai_load_error_hint": "If this keeps failing even with Lite selected, your network is likely blocking direct downloads from huggingface.co — a school/office firewall or ad-blocker is a common cause. Quick-help works fully offline either way.", "c_ai_auto_trying": "Physical rules couldn't determine the products — automatically asking the on-device AI model instead…", "c_type_esterification": "Esterification (acid + alcohol)", "c_type_saponification": "Saponification (ester + base)", "c_type_alkene_addition": "Alkene addition reaction", "c_type_photosynthesis": "Photosynthesis (requires light energy — not spontaneous in the dark)", "c_vessel_label": "reaction vessel", "c_type_alkyne_addition": "Alkyne addition reaction", "c_type_alkane_halogenation": "Alkane halogenation (radical substitution)", "c_type_alcohol_oxidation": "Alcohol oxidation", "c_type_amine_neutralization": "Amine neutralization", "c_view3d_label": "🧊 View in 3D", "c_ai_suspicious": "⚠ This looks like a simple \"all atoms glued together\" guess with no byproduct — that's rarely how real reactions work outside of specific addition reactions. Treat this as a rough guess, not a verified answer, especially for unusual reactant pairs."}, "es": {"app_eyebrow": "Banco de Reacciones · laboratorio animado", "app_title": "Simulador de Reacciones Químicas", "app_note": "ⓘ Modelos didácticos basados en física — verifica cuantitativamente antes de usar en el laboratorio.", "tab_kinetics": "Cinética", "tab_equilibrium": "Equilibrio", "tab_acidbase": "Ácido–Base", "tab_thermo": "Termoquímica", "tab_custom": "Reacción Personalizada", "tab_reagents": "Reactivos y Elementos", "tab_log": "Registro", "tab_ai": "Asistente IA", "footer_text": "Reaction Bench — una herramienta educativa para intuición previa al laboratorio. Confirma los resultados cuantitativos con literatura primaria antes de aplicarlos experimentalmente.", "reagent_preset": "Reactivo / reacción preestablecida", "export_data_csv": "⬇ Exportar datos (CSV)", "export_chart_png": "⬇ Exportar gráfico (PNG)", "log_this_experiment": "📌 Registrar este experimento", "order_0": "Orden 0", "order_1": "Orden 1", "order_2": "Orden 2", "k_reaction_setup": "Configuración de la reacción", "k_opt_custom": "Especie personalizada \"A\"", "k_opt_h2o2": "Descomposición del peróxido de hidrógeno — H₂O₂", "k_opt_n2o5": "Descomposición del pentóxido de dinitrógeno — N₂O₅", "k_opt_nh3": "Descomposición superficial del amoníaco — NH₃ (orden 0)", "k_opt_no2": "Dimerización del dióxido de nitrógeno — NO₂ (orden 2)", "k_or_bank": "O elige una especie del banco de reactivos", "k_generic_species": "— especie genérica \"A\" —", "k_initial_conc": "Concentración inicial [A]₀", "k_rate_constant": "Constante de velocidad k", "k_run_btn": "▶ Ejecutar reacción en el banco", "k_halflife_label": "Vida media t½", "k_rate_label": "Velocidad inicial", "k_law_label": "Ley de velocidad", "k_surface_beaker": "vaso de reacción", "k_surface_chart": "concentración vs. tiempo", "e_reaction_system": "Sistema de reacción", "e_opt_custom": "Personalizado A + B ⇌ C + D", "e_opt_watergas": "Reacción de gas de agua — CO + H₂O ⇌ CO₂ + H₂", "e_opt_ester": "Esterificación — CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O", "e_kc": "Constante de equilibrio Kc", "e_initial_A0": "[A]₀ inicial", "e_initial_B0": "[B]₀ inicial", "e_custom_mode": "Modo personalizado: nombra las especies (opcional)", "e_stress_test": "Prueba de estrés (Le Chatelier)", "e_add_a": "+ Añadir 0.40 M de A", "e_remove_c": "− Quitar 0.30 M de C", "e_dilute": "⇌ Diluir el sistema", "e_reset": "restablecer al equilibrio inicial", "e_export_ice": "⬇ Exportar tabla ICE (CSV)", "e_ice_table": "Tabla ICE", "a_titration_setup": "Configuración de la titulación", "a_acid_in_flask": "Ácido en el matraz", "a_opt_custom": "Ácido débil personalizado", "a_opt_hcl": "Ácido clorhídrico — HCl", "a_opt_hno3": "Ácido nítrico — HNO₃", "a_opt_h2so4": "Ácido sulfúrico — H₂SO₄ (1er H⁺)", "a_opt_ch3cooh": "Ácido acético — CH₃COOH", "a_opt_hf": "Ácido fluorhídrico — HF", "a_opt_h3po4": "Ácido fosfórico — H₃PO₄ (1er H⁺)", "a_base_in_burette": "Base en la bureta", "a_opt_naoh": "Hidróxido de sodio — NaOH", "a_opt_koh": "Hidróxido de potasio — KOH", "a_opt_caoh2": "Hidróxido de calcio — Ca(OH)₂", "a_strong_strong": "Fuerte/Fuerte", "a_weak_strong": "Ácido débil/Base fuerte", "a_acid_conc": "Conc. ácido [HA]", "a_acid_volume": "Volumen de ácido", "a_base_conc": "Conc. base [OH⁻]", "a_pka": "pKa del ácido", "a_titrant_added": "Titulante añadido (arrástrame)", "a_surface_rig": "montaje de titulación", "a_surface_curve": "curva de titulación · pH vs. volumen", "a_ph_now": "pH actual", "a_equiv_vol": "Vol. equivalencia", "a_indicator_label": "Indicador", "a_export_curve": "⬇ Exportar curva (CSV)", "t_calorimetry": "Calorimetría", "t_opt_custom": "Reacción personalizada", "t_opt_neutralization": "Neutralización — HCl + NaOH", "t_opt_dissolution": "Disolución — NH₄NO₃ en agua (endotérmica)", "t_opt_combustion": "Combustión — CH₄ (muy exotérmica)", "t_mass": "Masa de la disolución", "t_specific_heat": "Calor específico c", "t_delta_t": "Cambio de temperatura ΔT", "t_moles": "Moles de reactivo", "t_or_bank": "O calcula los moles desde un compuesto del banco", "t_mass_reactant": "Masa de ese reactivo", "t_ea": "Energía de activación Ea", "t_q_label": "q (calor intercambiado)", "t_dh_label": "ΔH (reacción)", "t_dhm_label": "ΔH molar", "t_class_label": "Clasificación", "t_export_diagram": "⬇ Exportar datos del diagrama (CSV)", "t_surface_flask": "matraz de reacción", "t_surface_diagram": "diagrama de energía de la reacción", "c_reactants": "Reactivos", "c_add_reactant": "+ Añadir reactivo", "c_products": "Productos", "c_add_product": "+ Añadir producto", "c_balance_solve": "⚖ Balancear y resolver", "c_hint": "Escribe cualquier fórmula (p. ej. KMnO4, Ca(OH)2) o elige una sugerencia del banco de reactivos. Indica la masa en gramos de cada reactivo — la app balancea la ecuación, halla el reactivo limitante y calcula los rendimientos automáticamente.", "c_balanced_eq": "Ecuación balanceada", "c_results": "Resultados estequiométricos", "c_export_csv": "⬇ Exportar resultados (CSV)", "c_err_need_both": "Añade al menos un reactivo y un producto.", "c_err_bad_formula": "Fórmula no reconocida:", "c_err_impossible": "Esta ecuación no se puede balancear — los elementos de cada lado no coinciden. Revisa las fórmulas.", "c_err_underdetermined": "No hay suficiente información para un balance único — intenta añadir otro producto o reactivo.", "c_err_general": "No se pudo balancear esta ecuación. Revisa las fórmulas e inténtalo de nuevo.", "c_role_reactant": "Reactivo", "c_role_product": "Producto", "c_limiting": "limitante", "c_th_role": "Rol", "c_th_formula": "Fórmula", "c_th_coeff": "Coef.", "c_th_molarmass": "Masa molar", "c_th_input": "Entrada", "c_th_output": "Resultado", "c_mass_check": "Verificación de balance de masa", "c_in": "entrada", "c_leftover": "sobrante", "r_periodic_table": "Tabla periódica — haz clic en un elemento para añadirlo al constructor de fórmulas", "r_common_reagents": "Reactivos de laboratorio comunes", "r_formula_builder": "Constructor de fórmulas", "r_formula_placeholder": "p. ej. NaOH, H2SO4, Ca(OH)2", "r_clear": "Borrar", "r_molar_mass": "Masa molar", "r_prepare_solution": "Preparar una disolución", "r_target_molarity": "Molaridad objetivo", "r_target_volume": "Volumen objetivo", "r_mass_to_weigh": "Masa a pesar", "r_dissolve_note": "Disuelve esta masa del compuesto seleccionado en agua y diluye hasta el volumen objetivo en un matraz aforado.", "log_title_pre": "Registro de experimentos (", "log_title_post": " guardados) — almacenado localmente en este navegador", "log_export_csv": "⬇ Exportar todo (CSV)", "log_export_json": "⬇ Exportar todo (JSON)", "log_clear_all": "borrar todo", "log_th_time": "Hora", "log_th_module": "Módulo", "log_th_inputs": "Entradas", "log_th_results": "Resultados", "log_no_experiments": "Aún no hay experimentos registrados. Usa el botón \"📌 Registrar este experimento\" en cualquier módulo.", "log_confirm_clear": "¿Borrar todos los experimentos registrados? Esta acción no se puede deshacer.", "ai_title": "Asistente de Laboratorio", "ai_intro": "Haz una pregunta rápida (funciona al instante, sin descargas) o carga el modelo local para chat abierto.", "ai_input_placeholder": "p. ej. ¿Qué significa la vida media?", "ai_send": "Enviar", "ai_model_title": "Modelo de IA local (opcional)", "ai_load_model": "⬇ Cargar modelo local", "ai_not_loaded": "No cargado — la ayuda rápida funciona igualmente.", "ai_covers_title": "Qué cubre la ayuda rápida", "ai_downloading": "Descargando el modelo (solo la primera vez, necesita internet)…", "ai_loading_memory": "Cargando el modelo en memoria…", "ai_ready": "Modelo cargado ✓ — las preguntas abiertas ahora usan el modelo local.", "ai_ready_btn": "Modelo cargado", "ai_ready_chat": "Modelo local listo. Pregunta lo que quieras — las respuestas son limitadas comparadas con un asistente completo, pero ningún dato sale de tu navegador.", "ai_load_error": "No se pudo cargar el modelo (necesita internet y un navegador moderno). La ayuda rápida sigue funcionando abajo. Error:", "ai_thinking": "pensando…", "ai_gen_error": "No pude generar una respuesta — intenta reformular la pregunta.", "ai_fallback_error": "El modelo local tuvo un error. Usando la ayuda rápida:", "ai_no_faq": "No tengo una respuesta preparada para eso — intenta cargar el modelo de nuevo o reformula la pregunta.", "ai_no_answer": "Todavía no tengo una respuesta instantánea para eso. Prueba una de las preguntas sugeridas, usa términos como pH, equilibrio, vida media o Le Chatelier, o carga el modelo local arriba para respuestas abiertas.", "classify_exo": "Exotérmica", "classify_endo": "Endotérmica", "axis_time_s": "TIEMPO (s)", "axis_conc_M": "[A] (M)", "axis_volume_ml": "VOLUMEN DE BASE AÑADIDO (mL)", "axis_ph": "pH", "cat_alkali": "Metal alcalino", "cat_alkaline": "Alcalinotérreo", "cat_transition": "Metal de transición", "cat_postmetal": "Metal postransición", "cat_metalloid": "Metaloide", "cat_nonmetal": "No metal reactivo", "cat_halogen": "Halógeno", "cat_noble": "Gas noble", "cat_lan": "Lantánido", "cat_act": "Actínido", "cat_other": "Otro", "ai_model_desc": "Carga un modelo de lenguaje de código abierto ajustado por instrucciones directamente en tu navegador mediante <a href=\"https://github.com/huggingface/transformers.js\" target=\"_blank\" rel=\"noopener\">transformers.js</a> — gratis, sin clave de API, y nada se envía a un servidor. Es mucho menos capaz que un asistente completo. Elige Ligero si tu conexión es lenta; la primera carga necesita internet y uno o dos minutos, después queda en caché.", "ai_covers_list": "Vida media · orden de reacción · principio de Le Chatelier · constantes de equilibrio · pH y pKa · disoluciones amortiguadoras · puntos de equivalencia · energía de activación · exotérmica vs endotérmica · molaridad y masa molar · reactivo limitante", "tab_overview": "Resumen", "nav_group_sims": "Simulaciones", "nav_group_tools": "Herramientas", "ov_desc_kinetics": "Modela velocidades de reacción, órdenes y vida media con un vaso animado.", "ov_desc_equilibrium": "Explora Kc, tablas ICE y el principio de Le Chatelier con reactivos reales.", "ov_desc_acidbase": "Simula titulaciones, curvas de pH y cambios de color de indicadores.", "ov_desc_thermo": "Calcula ΔH, clasifica reacciones exo/endotérmicas y visualiza diagramas de energía.", "ov_desc_custom": "Define reactivos y condiciones, predice productos automáticamente, encadena reacciones y observa la cinética y el equilibrio estimados.", "ov_desc_reagents": "Explora la tabla periódica, construye fórmulas y calcula la masa molar.", "ov_desc_log": "Revisa y exporta cada experimento guardado, como CSV o JSON.", "ov_desc_ai": "Obtén ayuda instantánea o chatea con un modelo de IA local opcional.", "r_custom_name_placeholder": "Nombre (opcional)", "r_add_to_bank": "➕ Añadir al banco de reactivos", "r_add_to_bank_invalid": "Primero construye una fórmula válida.", "r_add_to_bank_success": "Se añadió {formula} al banco de reactivos — ya se puede elegir en Cinética, Equilibrio, Termoquímica y Reacción Personalizada.", "r_add_to_bank_exists": "Ese compuesto ya está en el banco.", "r_suggestions_label": "Compuestos reales sugeridos con estos elementos:", "ind_name_methyl_orange": "Anaranjado de metilo", "ind_name_bromothymol": "Azul de bromotimol", "ind_name_phenolphthalein": "Fenolftaleína", "ind_state_red": "rojo", "ind_state_yellow": "amarillo", "ind_state_blue": "azul", "ind_state_colorless": "incoloro", "ind_state_pink": "rosa", "ind_state_transitioning": "en transición", "a_indicator_note": "Elegido una sola vez para esta titulación; solo su color cambia a medida que se añade titulante — ese cambio de color marca el punto final.", "toast_logged": "Guardado en el Registro ({module})", "c_conditions": "Condiciones", "c_temperature": "Temperatura", "c_sim_time": "Tiempo de simulación", "c_predicted_products_title": "Productos predichos", "c_predict_btn": "🔮 Predecir productos", "c_ai_predict_btn": "🤖 Preguntar a la IA por los productos", "c_run_reaction": "▶ Ejecutar reacción", "c_phase_solid": "Sólido (masa)", "c_phase_solution": "Disolución (vol×conc)", "c_mass_placeholder": "masa (g)", "c_vol_placeholder": "volumen (mL)", "c_conc_placeholder": "conc (M)", "c_detected_prefix": "Tipo de reacción detectado:", "c_type_combustion": "Combustión", "c_type_neutralization": "Neutralización ácido-base", "c_type_metal_acid": "Metal + ácido", "c_type_decomposition": "Descomposición", "c_type_synthesis": "Síntesis de elementos", "c_type_unknown": "No reconocido", "c_type_ai": "Sugerido por IA (sin verificar)", "c_predict_failed": "No se pudo reconocer esta reacción automáticamente. Prueba un tipo compatible, o pide ayuda al asistente de IA (cárgalo primero en la pestaña Asistente IA).", "c_ai_thinking": "Preguntando al modelo local…", "c_ai_suggested": "Productos sugeridos por IA (sin verificar — revísalos).", "c_ai_failed": "La IA no pudo generar fórmulas utilizables. Reformula los reactivos o introduce un tipo de reacción compatible.", "c_no_products_yet": "Aún no hay productos — pulsa \"Predecir productos\" arriba.", "c_err_no_products": "Predice (o pide a la IA) los productos antes de ejecutar la reacción.", "c_err_run_first": "Ejecuta primero una reacción — todavía no hay productos que encadenar.", "c_auto_kinetics": "Cinética generada automáticamente", "c_kinetics_surface": "reactivo limitante restante", "c_auto_equilibrium": "Posición de equilibrio generada automáticamente", "c_dynamics_disclaimer": "Los paneles de cinética y equilibrio son estimaciones educativas basadas en el tipo de reacción y la temperatura — no son constantes de velocidad ni de equilibrio medidas para esta reacción específica.", "c_axis_fraction": "FRACCIÓN RESTANTE", "c_kinetics_rate": "Constante de velocidad estimada", "c_kinetics_complete": "Finalización estimada", "c_kinetics_within": "en", "c_eq_estimate": "Constante de equilibrio estimada", "c_eq_complete": "Prácticamente irreversible — se trata como si llegara a completarse (>99.9% de conversión).", "c_eq_favors_products": "Favorece fuertemente los productos en el equilibrio (aproximadamente >90% de conversión).", "c_eq_mixed": "Reversibilidad significativa — se esperan cantidades relevantes de reactivos y productos en el equilibrio.", "c_eq_favors_reactants": "Favorece los reactivos — se espera una conversión limitada.", "c_chain_btn": "⛓ Usar productos como próximos reactivos", "toast_reaction_run": "Reacción ejecutada — resultados actualizados abajo.", "toast_chained": "Productos cargados como nuevos reactivos. Predice de nuevo para continuar la cadena.", "ai_model_lite": "Ligero (~0.5B parámetros, descarga más rápida)", "ai_model_standard": "Estándar (~1.5B parámetros, más detallado)", "t_add_substance": "+ Añadir sustancia", "t_initial_temp": "Temperatura inicial", "t_final_temp": "Temperatura final", "t_run_simulation": "▶ Ejecutar simulación", "t_hint": "Elige las sustancias que quieres calentar o enfriar, indica una masa para cada una, elige la temperatura inicial y objetivo, y ejecuta. El calor específico se busca automáticamente cuando se conoce.", "t_c_known": "usando calor específico conocido: {c} J/g·°C", "t_c_default": "sin datos para este compuesto — usando valor por defecto {c} J/g·°C (similar al agua)", "t_absorbed": "Calor absorbido (calentamiento)", "t_released": "Calor liberado (enfriamiento)", "t_total": "Total", "t_th_mass": "Masa", "t_th_c": "c (J/g·°C)", "t_th_q": "q", "t_breakdown_title": "Desglose por sustancia", "t_axis_progress": "PROGRESO (%)", "t_axis_temp": "TEMPERATURA (°C)", "a_run_titration": "▶ Ejecutar titulación", "a_running": "Titulando…", "a_reaction_title": "Reacción de neutralización", "a_titer_label": "Titulante (volumen añadido)", "a_endpoint_detected": "Punto final detectado — se observó el cambio de color del indicador. La titulación se detuvo automáticamente.", "a_eq_unavailable": "La ecuación aún no está disponible para este par ácido/base.", "toast_endpoint": "Punto final alcanzado — titulante registrado.", "ai_stall_hint": "Sigue trabajando — si esto no avanza durante un rato, tu red podría estar bloqueando huggingface.co (de donde vienen los archivos del modelo), aunque la pequeña librería transformers.js se haya cargado bien.", "ai_downloading_pct": "Descargando {file}: {pct}%", "ai_load_error_hint": "Si esto sigue fallando incluso con Ligero seleccionado, tu red probablemente está bloqueando descargas directas desde huggingface.co — un firewall escolar/de oficina o un bloqueador de anuncios es una causa común. La ayuda rápida funciona totalmente sin conexión de todas formas.", "c_ai_auto_trying": "Las reglas físicas no pudieron determinar los productos — preguntando automáticamente al modelo de IA local…", "c_type_esterification": "Esterificación (ácido + alcohol)", "c_type_saponification": "Saponificación (éster + base)", "c_type_alkene_addition": "Reacción de adición a alqueno", "c_type_photosynthesis": "Fotosíntesis (requiere energía luminosa — no ocurre espontáneamente a oscuras)", "c_vessel_label": "recipiente de reacción", "c_type_alkyne_addition": "Reacción de adición a alquino", "c_type_alkane_halogenation": "Halogenación de alcano (sustitución radicalaria)", "c_type_alcohol_oxidation": "Oxidación de alcohol", "c_type_amine_neutralization": "Neutralización de amina", "c_view3d_label": "🧊 Ver en 3D", "c_ai_suspicious": "⚠ Esto parece una simple suposición de \"todos los átomos pegados\" sin subproducto — rara vez así funcionan las reacciones reales, salvo en reacciones de adición específicas. Trátalo como una suposición aproximada, no como una respuesta verificada, sobre todo para combinaciones de reactivos inusuales."}, "fr": {"app_eyebrow": "Reaction Bench · laboratoire animé", "app_title": "Simulateur de Réactions Chimiques", "app_note": "ⓘ Modèles pédagogiques basés sur la physique — vérifiez quantitativement avant utilisation en laboratoire.", "tab_kinetics": "Cinétique", "tab_equilibrium": "Équilibre", "tab_acidbase": "Acide–Base", "tab_thermo": "Thermochimie", "tab_custom": "Réaction Personnalisée", "tab_reagents": "Réactifs et Éléments", "tab_log": "Journal", "tab_ai": "Assistant IA", "footer_text": "Reaction Bench — un outil pédagogique d'intuition avant le laboratoire. Vérifiez les résultats quantitatifs dans la littérature primaire avant de vous y fier expérimentalement.", "reagent_preset": "Réactif / réaction prédéfinie", "export_data_csv": "⬇ Exporter les données (CSV)", "export_chart_png": "⬇ Exporter le graphique (PNG)", "log_this_experiment": "📌 Enregistrer cette expérience", "order_0": "Ordre 0", "order_1": "Ordre 1", "order_2": "Ordre 2", "k_reaction_setup": "Configuration de la réaction", "k_opt_custom": "Espèce personnalisée « A »", "k_opt_h2o2": "Décomposition du peroxyde d'hydrogène — H₂O₂", "k_opt_n2o5": "Décomposition du pentoxyde de diazote — N₂O₅", "k_opt_nh3": "Décomposition surfacique de l'ammoniac — NH₃ (ordre 0)", "k_opt_no2": "Dimérisation du dioxyde d'azote — NO₂ (ordre 2)", "k_or_bank": "Ou choisir une espèce dans la banque de réactifs", "k_generic_species": "— espèce générique « A » —", "k_initial_conc": "Concentration initiale [A]₀", "k_rate_constant": "Constante de vitesse k", "k_run_btn": "▶ Lancer la réaction sur la paillasse", "k_halflife_label": "Demi-vie t½", "k_rate_label": "Vitesse initiale", "k_law_label": "Loi de vitesse", "k_surface_beaker": "bécher réactionnel", "k_surface_chart": "concentration vs. temps", "e_reaction_system": "Système réactionnel", "e_opt_custom": "Personnalisé A + B ⇌ C + D", "e_opt_watergas": "Réaction du gaz à l'eau — CO + H₂O ⇌ CO₂ + H₂", "e_opt_ester": "Estérification — CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O", "e_kc": "Constante d'équilibre Kc", "e_initial_A0": "[A]₀ initiale", "e_initial_B0": "[B]₀ initiale", "e_custom_mode": "Mode personnalisé : nommer les espèces (optionnel)", "e_stress_test": "Test de contrainte (Le Chatelier)", "e_add_a": "+ Ajouter 0,40 M de A", "e_remove_c": "− Retirer 0,30 M de C", "e_dilute": "⇌ Diluer le système", "e_reset": "revenir à l'équilibre initial", "e_export_ice": "⬇ Exporter le tableau ICE (CSV)", "e_ice_table": "Tableau ICE", "a_titration_setup": "Configuration du titrage", "a_acid_in_flask": "Acide dans le ballon", "a_opt_custom": "Acide faible personnalisé", "a_opt_hcl": "Acide chlorhydrique — HCl", "a_opt_hno3": "Acide nitrique — HNO₃", "a_opt_h2so4": "Acide sulfurique — H₂SO₄ (1er H⁺)", "a_opt_ch3cooh": "Acide acétique — CH₃COOH", "a_opt_hf": "Acide fluorhydrique — HF", "a_opt_h3po4": "Acide phosphorique — H₃PO₄ (1er H⁺)", "a_base_in_burette": "Base dans la burette", "a_opt_naoh": "Hydroxyde de sodium — NaOH", "a_opt_koh": "Hydroxyde de potassium — KOH", "a_opt_caoh2": "Hydroxyde de calcium — Ca(OH)₂", "a_strong_strong": "Fort/Fort", "a_weak_strong": "Acide faible/Base forte", "a_acid_conc": "Conc. acide [HA]", "a_acid_volume": "Volume d'acide", "a_base_conc": "Conc. base [OH⁻]", "a_pka": "pKa de l'acide", "a_titrant_added": "Titrant ajouté (glissez-moi)", "a_surface_rig": "montage de titrage", "a_surface_curve": "courbe de titrage · pH vs. volume", "a_ph_now": "pH actuel", "a_equiv_vol": "Vol. équivalence", "a_indicator_label": "Indicateur", "a_export_curve": "⬇ Exporter la courbe (CSV)", "t_calorimetry": "Calorimétrie", "t_opt_custom": "Réaction personnalisée", "t_opt_neutralization": "Neutralisation — HCl + NaOH", "t_opt_dissolution": "Dissolution — NH₄NO₃ dans l'eau (endothermique)", "t_opt_combustion": "Combustion — CH₄ (très exothermique)", "t_mass": "Masse de la solution", "t_specific_heat": "Chaleur spécifique c", "t_delta_t": "Variation de température ΔT", "t_moles": "Moles de réactif", "t_or_bank": "Ou calculer les moles à partir d'un composé de la banque", "t_mass_reactant": "Masse de ce réactif", "t_ea": "Énergie d'activation Ea", "t_q_label": "q (chaleur échangée)", "t_dh_label": "ΔH (réaction)", "t_dhm_label": "ΔH molaire", "t_class_label": "Classification", "t_export_diagram": "⬇ Exporter les données du diagramme (CSV)", "t_surface_flask": "ballon réactionnel", "t_surface_diagram": "diagramme d'énergie de la réaction", "c_reactants": "Réactifs", "c_add_reactant": "+ Ajouter un réactif", "c_products": "Produits", "c_add_product": "+ Ajouter un produit", "c_balance_solve": "⚖ Équilibrer et résoudre", "c_hint": "Saisissez n'importe quelle formule (p. ex. KMnO4, Ca(OH)2) ou choisissez une suggestion de la banque de réactifs. Indiquez la masse en grammes de chaque réactif — l'application équilibre l'équation, trouve le réactif limitant et calcule les rendements automatiquement.", "c_balanced_eq": "Équation équilibrée", "c_results": "Résultats stœchiométriques", "c_export_csv": "⬇ Exporter les résultats (CSV)", "c_err_need_both": "Ajoutez au moins un réactif et un produit.", "c_err_bad_formula": "Formule non reconnue :", "c_err_impossible": "Cette équation ne peut pas être équilibrée — les éléments de chaque côté ne correspondent pas. Vérifiez les formules.", "c_err_underdetermined": "Pas assez d'informations pour un équilibrage unique — essayez d'ajouter un autre produit ou réactif.", "c_err_general": "Impossible d'équilibrer cette équation. Vérifiez les formules et réessayez.", "c_role_reactant": "Réactif", "c_role_product": "Produit", "c_limiting": "limitant", "c_th_role": "Rôle", "c_th_formula": "Formule", "c_th_coeff": "Coeff.", "c_th_molarmass": "Masse molaire", "c_th_input": "Entrée", "c_th_output": "Résultat", "c_mass_check": "Vérification du bilan de masse", "c_in": "entrée", "c_leftover": "restant", "r_periodic_table": "Tableau périodique — cliquez sur un élément pour l'ajouter au générateur de formule", "r_common_reagents": "Réactifs de laboratoire courants", "r_formula_builder": "Générateur de formule", "r_formula_placeholder": "p. ex. NaOH, H2SO4, Ca(OH)2", "r_clear": "Effacer", "r_molar_mass": "Masse molaire", "r_prepare_solution": "Préparer une solution", "r_target_molarity": "Molarité cible", "r_target_volume": "Volume cible", "r_mass_to_weigh": "Masse à peser", "r_dissolve_note": "Dissolvez cette masse du composé sélectionné dans l'eau et diluez jusqu'au volume cible dans une fiole jaugée.", "log_title_pre": "Journal d'expériences (", "log_title_post": " enregistrées) — stocké localement dans ce navigateur", "log_export_csv": "⬇ Tout exporter (CSV)", "log_export_json": "⬇ Tout exporter (JSON)", "log_clear_all": "tout effacer", "log_th_time": "Heure", "log_th_module": "Module", "log_th_inputs": "Entrées", "log_th_results": "Résultats", "log_no_experiments": "Aucune expérience enregistrée pour l'instant. Utilisez le bouton « 📌 Enregistrer cette expérience » dans n'importe quel module.", "log_confirm_clear": "Effacer toutes les expériences enregistrées ? Cette action est irréversible.", "ai_title": "Assistant de Laboratoire", "ai_intro": "Posez une question rapide (instantané, sans téléchargement) ou chargez le modèle local pour une discussion ouverte.", "ai_input_placeholder": "p. ex. Que signifie la demi-vie ?", "ai_send": "Envoyer", "ai_model_title": "Modèle d'IA local (optionnel)", "ai_load_model": "⬇ Charger le modèle local", "ai_not_loaded": "Non chargé — l'aide rapide fonctionne quand même.", "ai_covers_title": "Ce que couvre l'aide rapide", "ai_downloading": "Téléchargement du modèle (une seule fois, nécessite internet)…", "ai_loading_memory": "Chargement du modèle en mémoire…", "ai_ready": "Modèle chargé ✓ — les questions ouvertes utilisent maintenant le modèle local.", "ai_ready_btn": "Modèle chargé", "ai_ready_chat": "Modèle local prêt. Posez n'importe quelle question — les réponses sont limitées par rapport à un assistant complet, mais aucune donnée ne quitte votre navigateur.", "ai_load_error": "Impossible de charger le modèle (nécessite internet et un navigateur récent). L'aide rapide fonctionne toujours ci-dessous. Erreur :", "ai_thinking": "réflexion…", "ai_gen_error": "Je n'ai pas pu générer de réponse — essayez de reformuler.", "ai_fallback_error": "Le modèle local a rencontré une erreur. Retour à l'aide rapide :", "ai_no_faq": "Je n'ai pas de réponse toute faite pour cela — essayez de recharger le modèle ou reformulez.", "ai_no_answer": "Je n'ai pas encore de réponse instantanée pour cela. Essayez l'une des questions suggérées, utilisez des termes comme pH, équilibre, demi-vie ou Le Chatelier, ou chargez le modèle local ci-dessus pour des réponses ouvertes.", "classify_exo": "Exothermique", "classify_endo": "Endothermique", "axis_time_s": "TEMPS (s)", "axis_conc_M": "[A] (M)", "axis_volume_ml": "VOLUME DE BASE AJOUTÉ (mL)", "axis_ph": "pH", "cat_alkali": "Métal alcalin", "cat_alkaline": "Alcalino-terreux", "cat_transition": "Métal de transition", "cat_postmetal": "Métal pauvre", "cat_metalloid": "Métalloïde", "cat_nonmetal": "Non-métal réactif", "cat_halogen": "Halogène", "cat_noble": "Gaz noble", "cat_lan": "Lanthanide", "cat_act": "Actinide", "cat_other": "Autre", "ai_model_desc": "Charge un modèle de langage open source ajusté par instructions directement dans votre navigateur via <a href=\"https://github.com/huggingface/transformers.js\" target=\"_blank\" rel=\"noopener\">transformers.js</a> — gratuit, sans clé API, rien n'est envoyé à un serveur. Il est bien moins capable qu'un assistant complet. Choisissez Léger si votre connexion est lente ; le premier chargement nécessite internet et une minute ou deux, ensuite il est mis en cache.", "ai_covers_list": "Demi-vie · ordre de réaction · principe de Le Chatelier · constantes d'équilibre · pH et pKa · solutions tampons · points d'équivalence · énergie d'activation · exothermique vs endothermique · molarité et masse molaire · réactif limitant", "tab_overview": "Aperçu", "nav_group_sims": "Simulations", "nav_group_tools": "Outils", "ov_desc_kinetics": "Modélisez les vitesses de réaction, les ordres et la demi-vie avec un bécher animé.", "ov_desc_equilibrium": "Explorez Kc, les tableaux ICE et le principe de Le Chatelier avec de vrais réactifs.", "ov_desc_acidbase": "Simulez des titrages, des courbes de pH et des changements de couleur d'indicateurs.", "ov_desc_thermo": "Calculez ΔH, classez les réactions exo/endothermiques et visualisez les diagrammes d'énergie.", "ov_desc_custom": "Définissez réactifs et conditions, prédisez les produits automatiquement, enchaînez les réactions et visualisez la cinétique et l'équilibre estimés.", "ov_desc_reagents": "Parcourez le tableau périodique, construisez des formules et calculez la masse molaire.", "ov_desc_log": "Consultez et exportez chaque expérience enregistrée, en CSV ou JSON.", "ov_desc_ai": "Obtenez de l'aide instantanée ou discutez avec un modèle d'IA local optionnel.", "r_custom_name_placeholder": "Nom (optionnel)", "r_add_to_bank": "➕ Ajouter à la banque de réactifs", "r_add_to_bank_invalid": "Construisez d'abord une formule valide.", "r_add_to_bank_success": "{formula} ajouté à la banque de réactifs — désormais sélectionnable dans Cinétique, Équilibre, Thermochimie et Réaction Personnalisée.", "r_add_to_bank_exists": "Ce composé est déjà dans la banque.", "r_suggestions_label": "Composés réels suggérés avec ces éléments :", "ind_name_methyl_orange": "Orangé de méthyle", "ind_name_bromothymol": "Bleu de bromothymol", "ind_name_phenolphthalein": "Phénolphtaléine", "ind_state_red": "rouge", "ind_state_yellow": "jaune", "ind_state_blue": "bleu", "ind_state_colorless": "incolore", "ind_state_pink": "rose", "ind_state_transitioning": "en transition", "a_indicator_note": "Choisi une seule fois pour ce titrage ; seule sa couleur change à mesure que le titrant est ajouté — ce changement de couleur marque le point final.", "toast_logged": "Enregistré dans le Journal ({module})", "c_conditions": "Conditions", "c_temperature": "Température", "c_sim_time": "Temps de simulation", "c_predicted_products_title": "Produits prédits", "c_predict_btn": "🔮 Prédire les produits", "c_ai_predict_btn": "🤖 Demander à l'IA les produits", "c_run_reaction": "▶ Lancer la réaction", "c_phase_solid": "Solide (masse)", "c_phase_solution": "Solution (vol×conc)", "c_mass_placeholder": "masse (g)", "c_vol_placeholder": "volume (mL)", "c_conc_placeholder": "conc (M)", "c_detected_prefix": "Type de réaction détecté :", "c_type_combustion": "Combustion", "c_type_neutralization": "Neutralisation acido-basique", "c_type_metal_acid": "Métal + acide", "c_type_decomposition": "Décomposition", "c_type_synthesis": "Synthèse d'éléments", "c_type_unknown": "Non reconnu", "c_type_ai": "Suggéré par IA (non vérifié)", "c_predict_failed": "Cette réaction n'a pas pu être reconnue automatiquement. Essayez un type pris en charge, ou demandez à l'assistant IA (chargez-le d'abord depuis l'onglet Assistant IA).", "c_ai_thinking": "Interrogation du modèle local…", "c_ai_suggested": "Produits suggérés par l'IA (non vérifiés — veuillez les vérifier).", "c_ai_failed": "L'IA n'a pas pu produire de formules utilisables. Reformulez les réactifs ou saisissez un type de réaction pris en charge.", "c_no_products_yet": "Pas encore de produits — cliquez sur « Prédire les produits » ci-dessus.", "c_err_no_products": "Prédisez (ou demandez à l'IA) les produits avant de lancer la réaction.", "c_err_run_first": "Lancez d'abord une réaction — il n'y a pas encore de produits à enchaîner.", "c_auto_kinetics": "Cinétique générée automatiquement", "c_kinetics_surface": "réactif limitant restant", "c_auto_equilibrium": "Position d'équilibre générée automatiquement", "c_dynamics_disclaimer": "Les panneaux de cinétique et d'équilibre sont des estimations pédagogiques basées sur le type de réaction et la température — pas des constantes de vitesse ou d'équilibre mesurées pour cette réaction précise.", "c_axis_fraction": "FRACTION RESTANTE", "c_kinetics_rate": "Constante de vitesse estimée", "c_kinetics_complete": "Achèvement estimé", "c_kinetics_within": "en", "c_eq_estimate": "Constante d'équilibre estimée", "c_eq_complete": "Pratiquement irréversible — traité comme allant à complétion (>99,9% de conversion).", "c_eq_favors_products": "Favorise fortement les produits à l'équilibre (environ >90% de conversion).", "c_eq_mixed": "Réversibilité significative — quantités notables de réactifs et de produits attendues à l'équilibre.", "c_eq_favors_reactants": "Favorise les réactifs — conversion limitée attendue.", "c_chain_btn": "⛓ Utiliser les produits comme prochains réactifs", "toast_reaction_run": "Réaction exécutée — résultats mis à jour ci-dessous.", "toast_chained": "Produits chargés comme nouveaux réactifs. Prédisez à nouveau pour continuer la chaîne.", "ai_model_lite": "Léger (~0,5 Md de paramètres, téléchargement plus rapide)", "ai_model_standard": "Standard (~1,5 Md de paramètres, plus détaillé)", "t_add_substance": "+ Ajouter une substance", "t_initial_temp": "Température initiale", "t_final_temp": "Température finale", "t_run_simulation": "▶ Lancer la simulation", "t_hint": "Choisissez la ou les substances à chauffer ou refroidir, indiquez une masse pour chacune, choisissez la température de départ et cible, puis lancez. La chaleur spécifique est recherchée automatiquement quand elle est connue.", "t_c_known": "chaleur spécifique connue utilisée : {c} J/g·°C", "t_c_default": "pas de données pour ce composé — valeur par défaut {c} J/g·°C (comme l'eau)", "t_absorbed": "Chaleur absorbée (chauffage)", "t_released": "Chaleur libérée (refroidissement)", "t_total": "Total", "t_th_mass": "Masse", "t_th_c": "c (J/g·°C)", "t_th_q": "q", "t_breakdown_title": "Détail par substance", "t_axis_progress": "PROGRESSION (%)", "t_axis_temp": "TEMPÉRATURE (°C)", "a_run_titration": "▶ Lancer le titrage", "a_running": "Titrage en cours…", "a_reaction_title": "Réaction de neutralisation", "a_titer_label": "Titre (volume versé)", "a_endpoint_detected": "Point final détecté — changement de couleur de l'indicateur observé. Titrage arrêté automatiquement.", "a_eq_unavailable": "Équation pas encore disponible pour cette paire acide/base.", "toast_endpoint": "Point final atteint — titre enregistré.", "ai_stall_hint": "Toujours en cours — si cela ne progresse pas pendant un moment, votre réseau bloque peut-être huggingface.co (d'où proviennent les fichiers du modèle), même si la petite bibliothèque transformers.js s'est chargée correctement.", "ai_downloading_pct": "Téléchargement de {file} : {pct}%", "ai_load_error_hint": "Si cela continue d'échouer même avec Léger sélectionné, votre réseau bloque probablement les téléchargements directs depuis huggingface.co — un pare-feu scolaire/professionnel ou un bloqueur de publicités en est une cause fréquente. L'aide rapide fonctionne entièrement hors ligne de toute façon.", "c_ai_auto_trying": "Les règles physiques n'ont pas pu déterminer les produits — interrogation automatique du modèle d'IA local…", "c_type_esterification": "Estérification (acide + alcool)", "c_type_saponification": "Saponification (ester + base)", "c_type_alkene_addition": "Réaction d'addition sur un alcène", "c_type_photosynthesis": "Photosynthèse (nécessite de l'énergie lumineuse — non spontanée dans l'obscurité)", "c_vessel_label": "récipient réactionnel", "c_type_alkyne_addition": "Réaction d'addition sur un alcyne", "c_type_alkane_halogenation": "Halogénation d'alcane (substitution radicalaire)", "c_type_alcohol_oxidation": "Oxydation d'alcool", "c_type_amine_neutralization": "Neutralisation d'amine", "c_view3d_label": "🧊 Voir en 3D", "c_ai_suspicious": "⚠ Cela ressemble à une simple supposition « tous les atomes collés ensemble » sans sous-produit — les réactions réelles fonctionnent rarement ainsi, sauf dans des réactions d'addition spécifiques. Considérez ceci comme une estimation approximative, pas une réponse vérifiée, surtout pour des combinaisons de réactifs inhabituelles."}, "de": {"app_eyebrow": "Reaction Bench · animierte Werkbank", "app_title": "Chemie-Simulationswerkbank", "app_note": "ⓘ Physikalisch basierte Lehrmodelle — vor dem Laboreinsatz quantitativ überprüfen.", "tab_kinetics": "Kinetik", "tab_equilibrium": "Gleichgewicht", "tab_acidbase": "Säure–Base", "tab_thermo": "Thermochemie", "tab_custom": "Eigene Reaktion", "tab_reagents": "Reagenzien & Elemente", "tab_log": "Laborbuch", "tab_ai": "KI-Assistent", "footer_text": "Reaction Bench — ein pädagogisches Werkzeug für die Intuition vor dem Labor. Überprüfen Sie quantitative Ergebnisse anhand von Primärliteratur, bevor Sie sich experimentell darauf verlassen.", "reagent_preset": "Reagenz / Reaktions-Voreinstellung", "export_data_csv": "⬇ Daten exportieren (CSV)", "export_chart_png": "⬇ Diagramm exportieren (PNG)", "log_this_experiment": "📌 Experiment protokollieren", "order_0": "0. Ordnung", "order_1": "1. Ordnung", "order_2": "2. Ordnung", "k_reaction_setup": "Reaktionseinstellung", "k_opt_custom": "Benutzerdefinierte Spezies „A“", "k_opt_h2o2": "Zerfall von Wasserstoffperoxid — H₂O₂", "k_opt_n2o5": "Zerfall von Distickstoffpentoxid — N₂O₅", "k_opt_nh3": "Oberflächenzerfall von Ammoniak — NH₃ (0. Ordnung)", "k_opt_no2": "Dimerisierung von Stickstoffdioxid — NO₂ (2. Ordnung)", "k_or_bank": "Oder Spezies aus der Reagenzienbank wählen", "k_generic_species": "— generische Spezies „A“ —", "k_initial_conc": "Anfangskonzentration [A]₀", "k_rate_constant": "Geschwindigkeitskonstante k", "k_run_btn": "▶ Reaktion auf der Werkbank starten", "k_halflife_label": "Halbwertszeit t½", "k_rate_label": "Anfangsgeschwindigkeit", "k_law_label": "Geschwindigkeitsgesetz", "k_surface_beaker": "Reaktionsbecher", "k_surface_chart": "Konzentration vs. Zeit", "e_reaction_system": "Reaktionssystem", "e_opt_custom": "Benutzerdefiniert A + B ⇌ C + D", "e_opt_watergas": "Wassergas-Shift-Reaktion — CO + H₂O ⇌ CO₂ + H₂", "e_opt_ester": "Veresterung — CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O", "e_kc": "Gleichgewichtskonstante Kc", "e_initial_A0": "Anfangs-[A]₀", "e_initial_B0": "Anfangs-[B]₀", "e_custom_mode": "Benutzerdefinierter Modus: Spezies benennen (optional)", "e_stress_test": "Störungstest (Le Chatelier)", "e_add_a": "+ 0,40 M A hinzufügen", "e_remove_c": "− 0,30 M C entfernen", "e_dilute": "⇌ System verdünnen", "e_reset": "auf Ausgangsgleichgewicht zurücksetzen", "e_export_ice": "⬇ ICE-Tabelle exportieren (CSV)", "e_ice_table": "ICE-Tabelle", "a_titration_setup": "Titrationsaufbau", "a_acid_in_flask": "Säure im Kolben", "a_opt_custom": "Benutzerdefinierte schwache Säure", "a_opt_hcl": "Salzsäure — HCl", "a_opt_hno3": "Salpetersäure — HNO₃", "a_opt_h2so4": "Schwefelsäure — H₂SO₄ (1. H⁺)", "a_opt_ch3cooh": "Essigsäure — CH₃COOH", "a_opt_hf": "Flusssäure — HF", "a_opt_h3po4": "Phosphorsäure — H₃PO₄ (1. H⁺)", "a_base_in_burette": "Base in der Bürette", "a_opt_naoh": "Natriumhydroxid — NaOH", "a_opt_koh": "Kaliumhydroxid — KOH", "a_opt_caoh2": "Calciumhydroxid — Ca(OH)₂", "a_strong_strong": "Stark/Stark", "a_weak_strong": "Schwache Säure/Starke Base", "a_acid_conc": "Säurekonz. [HA]", "a_acid_volume": "Säurevolumen", "a_base_conc": "Basenkonz. [OH⁻]", "a_pka": "pKa der Säure", "a_titrant_added": "Zugegebenes Titrant (ziehen)", "a_surface_rig": "Titrationsaufbau", "a_surface_curve": "Titrationskurve · pH vs. Volumen", "a_ph_now": "pH aktuell", "a_equiv_vol": "Äquiv.-Vol.", "a_indicator_label": "Indikator", "a_export_curve": "⬇ Kurve exportieren (CSV)", "t_calorimetry": "Kalorimetrie", "t_opt_custom": "Benutzerdefinierte Reaktion", "t_opt_neutralization": "Neutralisation — HCl + NaOH", "t_opt_dissolution": "Lösung — NH₄NO₃ in Wasser (endotherm)", "t_opt_combustion": "Verbrennung — CH₄ (stark exotherm)", "t_mass": "Masse der Lösung", "t_specific_heat": "Spezifische Wärme c", "t_delta_t": "Temperaturänderung ΔT", "t_moles": "Mol Reaktant", "t_or_bank": "Oder Mol aus einer Verbindung der Bank berechnen", "t_mass_reactant": "Masse dieses Reaktanten", "t_ea": "Aktivierungsenergie Ea", "t_q_label": "q (ausgetauschte Wärme)", "t_dh_label": "ΔH (Reaktion)", "t_dhm_label": "ΔH molar", "t_class_label": "Klassifizierung", "t_export_diagram": "⬇ Diagrammdaten exportieren (CSV)", "t_surface_flask": "Reaktionskolben", "t_surface_diagram": "Reaktionsenergiediagramm", "c_reactants": "Reaktanten", "c_add_reactant": "+ Reaktant hinzufügen", "c_products": "Produkte", "c_add_product": "+ Produkt hinzufügen", "c_balance_solve": "⚖ Ausgleichen & Lösen", "c_hint": "Geben Sie eine beliebige Formel ein (z. B. KMnO4, Ca(OH)2) oder wählen Sie einen Vorschlag aus der Reagenzienbank. Geben Sie für jeden Reaktanten eine Masse in Gramm an — die App gleicht die Gleichung aus, findet den limitierenden Reaktanten und berechnet automatisch die Ausbeuten.", "c_balanced_eq": "Ausgeglichene Gleichung", "c_results": "Stöchiometrische Ergebnisse", "c_export_csv": "⬇ Ergebnisse exportieren (CSV)", "c_err_need_both": "Fügen Sie mindestens einen Reaktanten und ein Produkt hinzu.", "c_err_bad_formula": "Unbekannte Formel:", "c_err_impossible": "Diese Gleichung kann nicht ausgeglichen werden — die Elemente auf beiden Seiten stimmen nicht überein. Überprüfen Sie die Formeln.", "c_err_underdetermined": "Nicht genug Informationen für einen eindeutigen Ausgleich — versuchen Sie, ein weiteres Produkt oder Reaktant hinzuzufügen.", "c_err_general": "Diese Gleichung konnte nicht ausgeglichen werden. Überprüfen Sie die Formeln und versuchen Sie es erneut.", "c_role_reactant": "Reaktant", "c_role_product": "Produkt", "c_limiting": "limitierend", "c_th_role": "Rolle", "c_th_formula": "Formel", "c_th_coeff": "Koeff.", "c_th_molarmass": "Molare Masse", "c_th_input": "Eingabe", "c_th_output": "Ergebnis", "c_mass_check": "Massenbilanz-Prüfung", "c_in": "eingesetzt", "c_leftover": "übrig", "r_periodic_table": "Periodensystem — auf ein Element klicken, um es zum Formel-Baukasten hinzuzufügen", "r_common_reagents": "Gängige Laborreagenzien", "r_formula_builder": "Formel-Baukasten", "r_formula_placeholder": "z. B. NaOH, H2SO4, Ca(OH)2", "r_clear": "Löschen", "r_molar_mass": "Molare Masse", "r_prepare_solution": "Eine Lösung herstellen", "r_target_molarity": "Ziel-Molarität", "r_target_volume": "Zielvolumen", "r_mass_to_weigh": "Einzuwiegende Masse", "r_dissolve_note": "Lösen Sie diese Masse der ausgewählten Verbindung in Wasser und füllen Sie im Messkolben bis zum Zielvolumen auf.", "log_title_pre": "Experimentprotokoll (", "log_title_post": " gespeichert) — lokal in diesem Browser gespeichert", "log_export_csv": "⬇ Alles exportieren (CSV)", "log_export_json": "⬇ Alles exportieren (JSON)", "log_clear_all": "alles löschen", "log_th_time": "Zeit", "log_th_module": "Modul", "log_th_inputs": "Eingaben", "log_th_results": "Ergebnisse", "log_no_experiments": "Noch keine Experimente protokolliert. Nutzen Sie die Schaltfläche „📌 Experiment protokollieren“ in jedem Modul.", "log_confirm_clear": "Alle protokollierten Experimente löschen? Dies kann nicht rückgängig gemacht werden.", "ai_title": "Laborassistent", "ai_intro": "Stellen Sie eine Schnellhilfe-Frage (sofort, ohne Download) oder laden Sie das lokale Modell für offenen Chat.", "ai_input_placeholder": "z. B. Was bedeutet Halbwertszeit?", "ai_send": "Senden", "ai_model_title": "KI-Modell auf dem Gerät (optional)", "ai_load_model": "⬇ Lokales Modell laden", "ai_not_loaded": "Nicht geladen — Schnellhilfe funktioniert trotzdem.", "ai_covers_title": "Was die Schnellhilfe abdeckt", "ai_downloading": "Modell wird heruntergeladen (nur beim ersten Mal, Internet erforderlich)…", "ai_loading_memory": "Modell wird geladen…", "ai_ready": "Modell geladen ✓ — offene Fragen nutzen jetzt das lokale Modell.", "ai_ready_btn": "Modell geladen", "ai_ready_chat": "Lokales Modell bereit. Fragen Sie alles — die Antworten sind im Vergleich zu einem vollständigen Assistenten begrenzt, aber es verlassen keine Daten Ihren Browser.", "ai_load_error": "Modell konnte nicht geladen werden (Internet und ein moderner Browser erforderlich). Schnellhilfe funktioniert weiterhin unten. Fehler:", "ai_thinking": "denkt nach…", "ai_gen_error": "Ich konnte keine Antwort generieren — versuchen Sie es anders zu formulieren.", "ai_fallback_error": "Das lokale Modell hatte einen Fehler. Rückgriff auf Schnellhilfe:", "ai_no_faq": "Dafür habe ich keine fertige Antwort — versuchen Sie, das Modell erneut zu laden oder anders zu formulieren.", "ai_no_answer": "Dafür habe ich noch keine sofortige Antwort. Probieren Sie eine der vorgeschlagenen Fragen, verwenden Sie Begriffe wie pH, Gleichgewicht, Halbwertszeit oder Le Chatelier, oder laden Sie oben das lokale Modell für offene Antworten.", "classify_exo": "Exotherm", "classify_endo": "Endotherm", "axis_time_s": "ZEIT (s)", "axis_conc_M": "[A] (M)", "axis_volume_ml": "ZUGEGEBENES BASENVOLUMEN (mL)", "axis_ph": "pH", "cat_alkali": "Alkalimetall", "cat_alkaline": "Erdalkalimetall", "cat_transition": "Übergangsmetall", "cat_postmetal": "Metall (p-Block)", "cat_metalloid": "Halbmetall", "cat_nonmetal": "Reaktives Nichtmetall", "cat_halogen": "Halogen", "cat_noble": "Edelgas", "cat_lan": "Lanthanoid", "cat_act": "Actinoid", "cat_other": "Sonstige", "ai_model_desc": "Lädt ein instruktionsoptimiertes Open-Source-Sprachmodell direkt in Ihrem Browser über <a href=\"https://github.com/huggingface/transformers.js\" target=\"_blank\" rel=\"noopener\">transformers.js</a> — kostenlos, ohne API-Schlüssel, keine Daten gehen an einen Server. Es ist weit weniger leistungsfähig als ein vollständiger Assistent. Wählen Sie Leicht bei langsamer Verbindung; der erste Ladevorgang braucht trotzdem Internet und ein bis zwei Minuten, danach wird es zwischengespeichert.", "ai_covers_list": "Halbwertszeit · Reaktionsordnung · Prinzip von Le Chatelier · Gleichgewichtskonstanten · pH & pKa · Puffer · Äquivalenzpunkte bei Titrationen · Aktivierungsenergie · exotherm vs. endotherm · Molarität & molare Masse · limitierender Reaktant", "tab_overview": "Übersicht", "nav_group_sims": "Simulationen", "nav_group_tools": "Werkzeuge", "ov_desc_kinetics": "Modellieren Sie Reaktionsgeschwindigkeiten, Ordnungen und Halbwertszeit mit einem animierten Becher.", "ov_desc_equilibrium": "Erkunden Sie Kc, ICE-Tabellen und das Prinzip von Le Chatelier mit echten Reagenzien.", "ov_desc_acidbase": "Simulieren Sie Titrationen, pH-Kurven und Indikator-Farbwechsel.", "ov_desc_thermo": "Berechnen Sie ΔH, klassifizieren Sie exo-/endotherme Reaktionen und betrachten Sie Energiediagramme.", "ov_desc_custom": "Reaktanten und Bedingungen festlegen, Produkte automatisch vorhersagen, Reaktionen verketten und geschätzte Kinetik & Gleichgewicht anzeigen.", "ov_desc_reagents": "Durchsuchen Sie das Periodensystem, erstellen Sie Formeln und berechnen Sie die molare Masse.", "ov_desc_log": "Sehen Sie sich jedes gespeicherte Experiment an und exportieren Sie es als CSV oder JSON.", "ov_desc_ai": "Erhalten Sie sofortige Schnellhilfe oder chatten Sie mit einem optionalen KI-Modell auf dem Gerät.", "r_custom_name_placeholder": "Name (optional)", "r_add_to_bank": "➕ Zur Reagenzienbank hinzufügen", "r_add_to_bank_invalid": "Erstellen Sie zuerst eine gültige Formel.", "r_add_to_bank_success": "{formula} zur Reagenzienbank hinzugefügt — jetzt auswählbar in Kinetik, Gleichgewicht, Thermochemie und Eigene Reaktion.", "r_add_to_bank_exists": "Diese Verbindung ist bereits in der Bank.", "r_suggestions_label": "Vorgeschlagene reale Verbindungen mit diesen Elementen:", "ind_name_methyl_orange": "Methylorange", "ind_name_bromothymol": "Bromthymolblau", "ind_name_phenolphthalein": "Phenolphthalein", "ind_state_red": "rot", "ind_state_yellow": "gelb", "ind_state_blue": "blau", "ind_state_colorless": "farblos", "ind_state_pink": "rosa", "ind_state_transitioning": "im Übergang", "a_indicator_note": "Einmal für diese Titration gewählt; nur seine Farbe ändert sich bei Titrantzugabe — dieser Farbwechsel markiert den Endpunkt.", "toast_logged": "Im Laborbuch gespeichert ({module})", "c_conditions": "Bedingungen", "c_temperature": "Temperatur", "c_sim_time": "Simulationszeit", "c_predicted_products_title": "Vorhergesagte Produkte", "c_predict_btn": "🔮 Produkte vorhersagen", "c_ai_predict_btn": "🤖 KI nach Produkten fragen", "c_run_reaction": "▶ Reaktion starten", "c_phase_solid": "Feststoff (Masse)", "c_phase_solution": "Lösung (Vol×Konz)", "c_mass_placeholder": "Masse (g)", "c_vol_placeholder": "Volumen (mL)", "c_conc_placeholder": "Konz. (M)", "c_detected_prefix": "Erkannter Reaktionstyp:", "c_type_combustion": "Verbrennung", "c_type_neutralization": "Säure-Base-Neutralisation", "c_type_metal_acid": "Metall + Säure", "c_type_decomposition": "Zersetzung", "c_type_synthesis": "Elementsynthese", "c_type_unknown": "Nicht erkannt", "c_type_ai": "KI-Vorschlag (ungeprüft)", "c_predict_failed": "Diese Reaktion konnte nicht automatisch erkannt werden. Versuchen Sie einen unterstützten Typ oder fragen Sie den KI-Assistenten (zuerst im Tab „KI-Assistent“ laden).", "c_ai_thinking": "Lokales Modell wird befragt…", "c_ai_suggested": "KI-vorgeschlagene Produkte (ungeprüft — bitte überprüfen).", "c_ai_failed": "Die KI konnte keine verwendbaren Formeln erzeugen. Reaktanten umformulieren oder einen unterstützten Reaktionstyp eingeben.", "c_no_products_yet": "Noch keine Produkte — oben auf „Produkte vorhersagen“ klicken.", "c_err_no_products": "Vor dem Starten der Reaktion Produkte vorhersagen (oder von der KI vorschlagen lassen).", "c_err_run_first": "Zuerst eine Reaktion starten — es gibt noch keine Produkte zum Weiterverketten.", "c_auto_kinetics": "Automatisch erzeugte Kinetik", "c_kinetics_surface": "verbleibender limitierender Reaktant", "c_auto_equilibrium": "Automatisch erzeugte Gleichgewichtslage", "c_dynamics_disclaimer": "Die Kinetik- und Gleichgewichtsanzeigen sind pädagogische Schätzungen basierend auf Reaktionstyp und Temperatur — keine gemessenen Geschwindigkeits- oder Gleichgewichtskonstanten für diese spezifische Reaktion.", "c_axis_fraction": "VERBLEIBENDER ANTEIL", "c_kinetics_rate": "Geschätzte Geschwindigkeitskonstante", "c_kinetics_complete": "Geschätzter Abschluss", "c_kinetics_within": "innerhalb von", "c_eq_estimate": "Geschätzte Gleichgewichtskonstante", "c_eq_complete": "Praktisch irreversibel — wird als vollständig ablaufend behandelt (>99,9% Umsatz).", "c_eq_favors_products": "Begünstigt die Produkte im Gleichgewicht stark (etwa >90% Umsatz).", "c_eq_mixed": "Deutliche Reversibilität — nennenswerte Mengen an Reaktanten und Produkten im Gleichgewicht zu erwarten.", "c_eq_favors_reactants": "Begünstigt die Reaktanten — begrenzter Umsatz zu erwarten.", "c_chain_btn": "⛓ Produkte als nächste Reaktanten verwenden", "toast_reaction_run": "Reaktion ausgeführt — Ergebnisse unten aktualisiert.", "toast_chained": "Produkte als neue Reaktanten geladen. Erneut vorhersagen, um die Kette fortzusetzen.", "ai_model_lite": "Leicht (~0,5 Mrd. Parameter, schnellerer Download)", "ai_model_standard": "Standard (~1,5 Mrd. Parameter, ausführlicher)", "t_add_substance": "+ Substanz hinzufügen", "t_initial_temp": "Anfangstemperatur", "t_final_temp": "Endtemperatur", "t_run_simulation": "▶ Simulation starten", "t_hint": "Wählen Sie die zu erwärmende(n) oder abzukühlende(n) Substanz(en), geben Sie jeweils eine Masse an, wählen Sie Start- und Zieltemperatur und starten Sie. Die spezifische Wärme wird automatisch nachgeschlagen, wenn bekannt.", "t_c_known": "bekannte spezifische Wärme verwendet: {c} J/g·°C", "t_c_default": "keine Daten für diese Verbindung — Standardwert {c} J/g·°C (wie Wasser) verwendet", "t_absorbed": "Wärme aufgenommen (Erwärmung)", "t_released": "Wärme abgegeben (Abkühlung)", "t_total": "Gesamt", "t_th_mass": "Masse", "t_th_c": "c (J/g·°C)", "t_th_q": "q", "t_breakdown_title": "Aufschlüsselung nach Substanz", "t_axis_progress": "FORTSCHRITT (%)", "t_axis_temp": "TEMPERATUR (°C)", "a_run_titration": "▶ Titration starten", "a_running": "Titriere…", "a_reaction_title": "Neutralisationsreaktion", "a_titer_label": "Titer (abgegebenes Volumen)", "a_endpoint_detected": "Endpunkt erkannt — Farbumschlag des Indikators beobachtet. Titration automatisch gestoppt.", "a_eq_unavailable": "Gleichung für dieses Säure-Base-Paar noch nicht verfügbar.", "toast_endpoint": "Endpunkt erreicht — Titer aufgezeichnet.", "ai_stall_hint": "Arbeitet noch — wenn sich hier eine Weile nichts tut, blockiert Ihr Netzwerk möglicherweise huggingface.co (woher die Modelldateien kommen), auch wenn die kleine transformers.js-Bibliothek selbst erfolgreich geladen wurde.", "ai_downloading_pct": "Lade {file} herunter: {pct}%", "ai_load_error_hint": "Wenn dies auch mit ausgewähltem „Leicht“ weiterhin fehlschlägt, blockiert Ihr Netzwerk wahrscheinlich direkte Downloads von huggingface.co — eine Schul-/Firmenfirewall oder ein Werbeblocker ist eine häufige Ursache. Die Schnellhilfe funktioniert in jedem Fall vollständig offline.", "c_ai_auto_trying": "Die physikalischen Regeln konnten die Produkte nicht bestimmen — frage automatisch das lokale KI-Modell…", "c_type_esterification": "Veresterung (Säure + Alkohol)", "c_type_saponification": "Verseifung (Ester + Base)", "c_type_alkene_addition": "Alken-Additionsreaktion", "c_type_photosynthesis": "Photosynthese (benötigt Lichtenergie — im Dunkeln nicht spontan)", "c_vessel_label": "Reaktionsgefäß", "c_type_alkyne_addition": "Alkin-Additionsreaktion", "c_type_alkane_halogenation": "Alkan-Halogenierung (radikalische Substitution)", "c_type_alcohol_oxidation": "Alkoholoxidation", "c_type_amine_neutralization": "Amin-Neutralisation", "c_view3d_label": "🧊 In 3D anzeigen", "c_ai_suspicious": "⚠ Das sieht nach einer simplen „alle Atome zusammengeklebt“-Vermutung ohne Nebenprodukt aus — so funktionieren reale Reaktionen selten, außer bei bestimmten Additionsreaktionen. Betrachten Sie dies als grobe Vermutung, nicht als geprüfte Antwort, besonders bei ungewöhnlichen Reaktantenkombinationen."}, "pt": {"app_eyebrow": "Reaction Bench · bancada animada", "app_title": "Simulador de Reações Químicas", "app_note": "ⓘ Modelos didáticos baseados em física — verifique quantitativamente antes do uso em laboratório.", "tab_kinetics": "Cinética", "tab_equilibrium": "Equilíbrio", "tab_acidbase": "Ácido–Base", "tab_thermo": "Termoquímica", "tab_custom": "Reação Personalizada", "tab_reagents": "Reagentes e Elementos", "tab_log": "Registro", "tab_ai": "Assistente de IA", "footer_text": "Reaction Bench — uma ferramenta educacional de intuição pré-laboratório. Confirme os resultados quantitativos com a literatura primária antes de confiar neles experimentalmente.", "reagent_preset": "Reagente / reação predefinida", "export_data_csv": "⬇ Exportar dados (CSV)", "export_chart_png": "⬇ Exportar gráfico (PNG)", "log_this_experiment": "📌 Registrar este experimento", "order_0": "Ordem 0", "order_1": "Ordem 1", "order_2": "Ordem 2", "k_reaction_setup": "Configuração da reação", "k_opt_custom": "Espécie personalizada \"A\"", "k_opt_h2o2": "Decomposição do peróxido de hidrogênio — H₂O₂", "k_opt_n2o5": "Decomposição do pentóxido de dinitrogênio — N₂O₅", "k_opt_nh3": "Decomposição superficial da amônia — NH₃ (ordem 0)", "k_opt_no2": "Dimerização do dióxido de nitrogênio — NO₂ (ordem 2)", "k_or_bank": "Ou escolha uma espécie do banco de reagentes", "k_generic_species": "— espécie genérica \"A\" —", "k_initial_conc": "Concentração inicial [A]₀", "k_rate_constant": "Constante de velocidade k", "k_run_btn": "▶ Executar reação na bancada", "k_halflife_label": "Meia-vida t½", "k_rate_label": "Velocidade inicial", "k_law_label": "Lei de velocidade", "k_surface_beaker": "béquer de reação", "k_surface_chart": "concentração vs. tempo", "e_reaction_system": "Sistema de reação", "e_opt_custom": "Personalizado A + B ⇌ C + D", "e_opt_watergas": "Reação de deslocamento gás-água — CO + H₂O ⇌ CO₂ + H₂", "e_opt_ester": "Esterificação — CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O", "e_kc": "Constante de equilíbrio Kc", "e_initial_A0": "[A]₀ inicial", "e_initial_B0": "[B]₀ inicial", "e_custom_mode": "Modo personalizado: nomeie as espécies (opcional)", "e_stress_test": "Teste de estresse (Le Chatelier)", "e_add_a": "+ Adicionar 0,40 M de A", "e_remove_c": "− Remover 0,30 M de C", "e_dilute": "⇌ Diluir o sistema", "e_reset": "redefinir para o equilíbrio inicial", "e_export_ice": "⬇ Exportar tabela ICE (CSV)", "e_ice_table": "Tabela ICE", "a_titration_setup": "Configuração da titulação", "a_acid_in_flask": "Ácido no frasco", "a_opt_custom": "Ácido fraco personalizado", "a_opt_hcl": "Ácido clorídrico — HCl", "a_opt_hno3": "Ácido nítrico — HNO₃", "a_opt_h2so4": "Ácido sulfúrico — H₂SO₄ (1º H⁺)", "a_opt_ch3cooh": "Ácido acético — CH₃COOH", "a_opt_hf": "Ácido fluorídrico — HF", "a_opt_h3po4": "Ácido fosfórico — H₃PO₄ (1º H⁺)", "a_base_in_burette": "Base na bureta", "a_opt_naoh": "Hidróxido de sódio — NaOH", "a_opt_koh": "Hidróxido de potássio — KOH", "a_opt_caoh2": "Hidróxido de cálcio — Ca(OH)₂", "a_strong_strong": "Forte/Forte", "a_weak_strong": "Ácido fraco/Base forte", "a_acid_conc": "Conc. ácido [HA]", "a_acid_volume": "Volume de ácido", "a_base_conc": "Conc. base [OH⁻]", "a_pka": "pKa do ácido", "a_titrant_added": "Titulante adicionado (arraste-me)", "a_surface_rig": "aparato de titulação", "a_surface_curve": "curva de titulação · pH vs. volume", "a_ph_now": "pH atual", "a_equiv_vol": "Vol. equivalência", "a_indicator_label": "Indicador", "a_export_curve": "⬇ Exportar curva (CSV)", "t_calorimetry": "Calorimetria", "t_opt_custom": "Reação personalizada", "t_opt_neutralization": "Neutralização — HCl + NaOH", "t_opt_dissolution": "Dissolução — NH₄NO₃ em água (endotérmica)", "t_opt_combustion": "Combustão — CH₄ (altamente exotérmica)", "t_mass": "Massa da solução", "t_specific_heat": "Calor específico c", "t_delta_t": "Variação de temperatura ΔT", "t_moles": "Mols de reagente", "t_or_bank": "Ou calcule os mols a partir de um composto do banco", "t_mass_reactant": "Massa desse reagente", "t_ea": "Energia de ativação Ea", "t_q_label": "q (calor trocado)", "t_dh_label": "ΔH (reação)", "t_dhm_label": "ΔH molar", "t_class_label": "Classificação", "t_export_diagram": "⬇ Exportar dados do diagrama (CSV)", "t_surface_flask": "frasco de reação", "t_surface_diagram": "diagrama de energia da reação", "c_reactants": "Reagentes", "c_add_reactant": "+ Adicionar reagente", "c_products": "Produtos", "c_add_product": "+ Adicionar produto", "c_balance_solve": "⚖ Balancear e resolver", "c_hint": "Digite qualquer fórmula (ex.: KMnO4, Ca(OH)2) ou escolha uma sugestão do banco de reagentes. Informe a massa em gramas de cada reagente — o app balanceia a equação, encontra o reagente limitante e calcula os rendimentos automaticamente.", "c_balanced_eq": "Equação balanceada", "c_results": "Resultados estequiométricos", "c_export_csv": "⬇ Exportar resultados (CSV)", "c_err_need_both": "Adicione pelo menos um reagente e um produto.", "c_err_bad_formula": "Fórmula não reconhecida:", "c_err_impossible": "Esta equação não pode ser balanceada — os elementos de cada lado não correspondem. Verifique as fórmulas.", "c_err_underdetermined": "Informação insuficiente para um balanceamento único — tente adicionar outro produto ou reagente.", "c_err_general": "Não foi possível balancear esta equação. Verifique as fórmulas e tente novamente.", "c_role_reactant": "Reagente", "c_role_product": "Produto", "c_limiting": "limitante", "c_th_role": "Papel", "c_th_formula": "Fórmula", "c_th_coeff": "Coef.", "c_th_molarmass": "Massa molar", "c_th_input": "Entrada", "c_th_output": "Resultado", "c_mass_check": "Verificação do balanço de massa", "c_in": "entrada", "c_leftover": "sobra", "r_periodic_table": "Tabela periódica — clique em um elemento para adicioná-lo ao construtor de fórmulas", "r_common_reagents": "Reagentes de laboratório comuns", "r_formula_builder": "Construtor de fórmulas", "r_formula_placeholder": "ex.: NaOH, H2SO4, Ca(OH)2", "r_clear": "Limpar", "r_molar_mass": "Massa molar", "r_prepare_solution": "Preparar uma solução", "r_target_molarity": "Molaridade alvo", "r_target_volume": "Volume alvo", "r_mass_to_weigh": "Massa a pesar", "r_dissolve_note": "Dissolva essa massa do composto selecionado em água e complete até o volume alvo em um balão volumétrico.", "log_title_pre": "Registro de experimentos (", "log_title_post": " salvos) — armazenado localmente neste navegador", "log_export_csv": "⬇ Exportar tudo (CSV)", "log_export_json": "⬇ Exportar tudo (JSON)", "log_clear_all": "limpar tudo", "log_th_time": "Hora", "log_th_module": "Módulo", "log_th_inputs": "Entradas", "log_th_results": "Resultados", "log_no_experiments": "Nenhum experimento registrado ainda. Use o botão \"📌 Registrar este experimento\" em qualquer módulo.", "log_confirm_clear": "Limpar todos os experimentos registrados? Esta ação não pode ser desfeita.", "ai_title": "Assistente de Laboratório", "ai_intro": "Faça uma pergunta rápida (funciona instantaneamente, sem download) ou carregue o modelo local para conversa aberta.", "ai_input_placeholder": "ex.: O que significa meia-vida?", "ai_send": "Enviar", "ai_model_title": "Modelo de IA local (opcional)", "ai_load_model": "⬇ Carregar modelo local", "ai_not_loaded": "Não carregado — a ajuda rápida ainda funciona.", "ai_covers_title": "O que a ajuda rápida cobre", "ai_downloading": "Baixando o modelo (só na primeira vez, requer internet)…", "ai_loading_memory": "Carregando o modelo na memória…", "ai_ready": "Modelo carregado ✓ — perguntas abertas agora usam o modelo local.", "ai_ready_btn": "Modelo carregado", "ai_ready_chat": "Modelo local pronto. Pergunte qualquer coisa — as respostas são limitadas comparadas a um assistente completo, mas nenhum dado sai do seu navegador.", "ai_load_error": "Não foi possível carregar o modelo (requer internet e um navegador moderno). A ajuda rápida continua funcionando abaixo. Erro:", "ai_thinking": "pensando…", "ai_gen_error": "Não consegui gerar uma resposta — tente reformular.", "ai_fallback_error": "O modelo local encontrou um erro. Voltando à ajuda rápida:", "ai_no_faq": "Não tenho uma resposta pronta para isso — tente carregar o modelo novamente ou reformule.", "ai_no_answer": "Ainda não tenho uma resposta instantânea para isso. Tente uma das perguntas sugeridas, use termos como pH, equilíbrio, meia-vida ou Le Chatelier, ou carregue o modelo local acima para respostas abertas.", "classify_exo": "Exotérmica", "classify_endo": "Endotérmica", "axis_time_s": "TEMPO (s)", "axis_conc_M": "[A] (M)", "axis_volume_ml": "VOLUME DE BASE ADICIONADO (mL)", "axis_ph": "pH", "cat_alkali": "Metal alcalino", "cat_alkaline": "Metal alcalino-terroso", "cat_transition": "Metal de transição", "cat_postmetal": "Metal pós-transição", "cat_metalloid": "Metaloide", "cat_nonmetal": "Não metal reativo", "cat_halogen": "Halogênio", "cat_noble": "Gás nobre", "cat_lan": "Lantanídeo", "cat_act": "Actinídeo", "cat_other": "Outro", "ai_model_desc": "Carrega um modelo de linguagem de código aberto ajustado por instruções diretamente no seu navegador via <a href=\"https://github.com/huggingface/transformers.js\" target=\"_blank\" rel=\"noopener\">transformers.js</a> — gratuito, sem chave de API, nada é enviado a um servidor. É bem menos capaz que um assistente completo. Escolha Leve se sua conexão for lenta; o primeiro carregamento ainda precisa de internet e um ou dois minutos, depois fica em cache.", "ai_covers_list": "Meia-vida · ordem de reação · princípio de Le Chatelier · constantes de equilíbrio · pH e pKa · soluções tampão · pontos de equivalência · energia de ativação · exotérmica vs endotérmica · molaridade e massa molar · reagente limitante", "tab_overview": "Visão geral", "nav_group_sims": "Simulações", "nav_group_tools": "Ferramentas", "ov_desc_kinetics": "Modele velocidades de reação, ordens e meia-vida com um béquer animado.", "ov_desc_equilibrium": "Explore Kc, tabelas ICE e o princípio de Le Chatelier com reagentes reais.", "ov_desc_acidbase": "Simule titulações, curvas de pH e mudanças de cor de indicadores.", "ov_desc_thermo": "Calcule ΔH, classifique reações exo/endotérmicas e veja diagramas de energia.", "ov_desc_custom": "Defina reagentes e condições, preveja produtos automaticamente, encadeie reações e veja a cinética e o equilíbrio estimados.", "ov_desc_reagents": "Explore a tabela periódica, construa fórmulas e calcule a massa molar.", "ov_desc_log": "Revise e exporte cada experimento salvo, como CSV ou JSON.", "ov_desc_ai": "Obtenha ajuda instantânea ou converse com um modelo de IA local opcional.", "r_custom_name_placeholder": "Nome (opcional)", "r_add_to_bank": "➕ Adicionar ao banco de reagentes", "r_add_to_bank_invalid": "Construa uma fórmula válida primeiro.", "r_add_to_bank_success": "{formula} adicionado ao banco de reagentes — agora selecionável em Cinética, Equilíbrio, Termoquímica e Reação Personalizada.", "r_add_to_bank_exists": "Esse composto já está no banco.", "r_suggestions_label": "Compostos reais sugeridos com estes elementos:", "ind_name_methyl_orange": "Alaranjado de metila", "ind_name_bromothymol": "Azul de bromotimol", "ind_name_phenolphthalein": "Fenolftaleína", "ind_state_red": "vermelho", "ind_state_yellow": "amarelo", "ind_state_blue": "azul", "ind_state_colorless": "incolor", "ind_state_pink": "rosa", "ind_state_transitioning": "em transição", "a_indicator_note": "Escolhido uma única vez para esta titulação; apenas sua cor muda à medida que o titulante é adicionado — essa mudança de cor marca o ponto final.", "toast_logged": "Salvo no Registro ({module})", "c_conditions": "Condições", "c_temperature": "Temperatura", "c_sim_time": "Tempo de simulação", "c_predicted_products_title": "Produtos previstos", "c_predict_btn": "🔮 Prever produtos", "c_ai_predict_btn": "🤖 Perguntar à IA pelos produtos", "c_run_reaction": "▶ Executar reação", "c_phase_solid": "Sólido (massa)", "c_phase_solution": "Solução (vol×conc)", "c_mass_placeholder": "massa (g)", "c_vol_placeholder": "volume (mL)", "c_conc_placeholder": "conc (M)", "c_detected_prefix": "Tipo de reação detectado:", "c_type_combustion": "Combustão", "c_type_neutralization": "Neutralização ácido-base", "c_type_metal_acid": "Metal + ácido", "c_type_decomposition": "Decomposição", "c_type_synthesis": "Síntese de elementos", "c_type_unknown": "Não reconhecido", "c_type_ai": "Sugerido por IA (não verificado)", "c_predict_failed": "Não foi possível reconhecer esta reação automaticamente. Tente um tipo suportado, ou peça ajuda ao assistente de IA (carregue-o primeiro na aba Assistente de IA).", "c_ai_thinking": "Perguntando ao modelo local…", "c_ai_suggested": "Produtos sugeridos pela IA (não verificados — revise-os).", "c_ai_failed": "A IA não conseguiu gerar fórmulas utilizáveis. Reformule os reagentes ou informe um tipo de reação suportado.", "c_no_products_yet": "Ainda sem produtos — clique em \"Prever produtos\" acima.", "c_err_no_products": "Preveja (ou peça à IA) os produtos antes de executar a reação.", "c_err_run_first": "Execute uma reação primeiro — ainda não há produtos para encadear.", "c_auto_kinetics": "Cinética gerada automaticamente", "c_kinetics_surface": "reagente limitante restante", "c_auto_equilibrium": "Posição de equilíbrio gerada automaticamente", "c_dynamics_disclaimer": "Os painéis de cinética e equilíbrio são estimativas educacionais baseadas no tipo de reação e na temperatura — não são constantes de velocidade ou de equilíbrio medidas para esta reação específica.", "c_axis_fraction": "FRAÇÃO RESTANTE", "c_kinetics_rate": "Constante de velocidade estimada", "c_kinetics_complete": "Conclusão estimada", "c_kinetics_within": "em", "c_eq_estimate": "Constante de equilíbrio estimada", "c_eq_complete": "Praticamente irreversível — tratada como completa (>99,9% de conversão).", "c_eq_favors_products": "Favorece fortemente os produtos no equilíbrio (aproximadamente >90% de conversão).", "c_eq_mixed": "Reversibilidade significativa — quantidades relevantes de reagentes e produtos esperadas no equilíbrio.", "c_eq_favors_reactants": "Favorece os reagentes — conversão limitada esperada.", "c_chain_btn": "⛓ Usar produtos como próximos reagentes", "toast_reaction_run": "Reação executada — resultados atualizados abaixo.", "toast_chained": "Produtos carregados como novos reagentes. Preveja novamente para continuar a cadeia.", "ai_model_lite": "Leve (~0,5B parâmetros, download mais rápido)", "ai_model_standard": "Padrão (~1,5B parâmetros, mais detalhado)", "t_add_substance": "+ Adicionar substância", "t_initial_temp": "Temperatura inicial", "t_final_temp": "Temperatura final", "t_run_simulation": "▶ Executar simulação", "t_hint": "Escolha a(s) substância(s) que deseja aquecer ou resfriar, defina uma massa para cada uma, escolha a temperatura inicial e a de destino, depois execute. O calor específico é procurado automaticamente quando conhecido.", "t_c_known": "usando calor específico conhecido: {c} J/g·°C", "t_c_default": "sem dados para este composto — usando padrão {c} J/g·°C (semelhante à água)", "t_absorbed": "Calor absorvido (aquecimento)", "t_released": "Calor liberado (resfriamento)", "t_total": "Total", "t_th_mass": "Massa", "t_th_c": "c (J/g·°C)", "t_th_q": "q", "t_breakdown_title": "Detalhamento por substância", "t_axis_progress": "PROGRESSO (%)", "t_axis_temp": "TEMPERATURA (°C)", "a_run_titration": "▶ Executar titulação", "a_running": "Titulando…", "a_reaction_title": "Reação de neutralização", "a_titer_label": "Titulante (volume adicionado)", "a_endpoint_detected": "Ponto final detectado — mudança de cor do indicador observada. Titulação interrompida automaticamente.", "a_eq_unavailable": "Equação ainda não disponível para este par ácido/base.", "toast_endpoint": "Ponto final atingido — titulante registrado.", "ai_stall_hint": "Ainda trabalhando — se isso não avançar por um tempo, sua rede pode estar bloqueando huggingface.co (de onde vêm os arquivos do modelo), mesmo que a pequena biblioteca transformers.js tenha carregado bem.", "ai_downloading_pct": "Baixando {file}: {pct}%", "ai_load_error_hint": "Se isso continuar falhando mesmo com Leve selecionado, sua rede provavelmente está bloqueando downloads diretos do huggingface.co — um firewall escolar/corporativo ou bloqueador de anúncios é uma causa comum. A ajuda rápida funciona totalmente offline de qualquer forma.", "c_ai_auto_trying": "As regras físicas não conseguiram determinar os produtos — perguntando automaticamente ao modelo de IA local…", "c_type_esterification": "Esterificação (ácido + álcool)", "c_type_saponification": "Saponificação (éster + base)", "c_type_alkene_addition": "Reação de adição a alceno", "c_type_photosynthesis": "Fotossíntese (requer energia luminosa — não é espontânea no escuro)", "c_vessel_label": "recipiente de reação", "c_type_alkyne_addition": "Reação de adição a alcino", "c_type_alkane_halogenation": "Halogenação de alcano (substituição radicalar)", "c_type_alcohol_oxidation": "Oxidação de álcool", "c_type_amine_neutralization": "Neutralização de amina", "c_view3d_label": "🧊 Ver em 3D", "c_ai_suspicious": "⚠ Isso parece um simples palpite de \"todos os átomos colados\" sem subproduto — raramente é assim que reações reais funcionam, exceto em reações de adição específicas. Trate isso como um palpite aproximado, não uma resposta verificada, especialmente para combinações incomuns de reagentes."}};
const HTML_I18N_KEYS = new Set(["ai_model_desc","ai_covers_list"]);
let currentLang = localStorage.getItem("reactionBenchLang") || "en";
if(!I18N[currentLang]) currentLang = "en";

function t(key){
  return (I18N[currentLang] && I18N[currentLang][key]) || (I18N.en && I18N.en[key]) || key;
}

const __rerenderers = [];
function onLanguageChange(fn){ __rerenderers.push(fn); }

function applyLanguage(lang){
  if(!I18N[lang]) lang="en";
  currentLang = lang;
  try{ localStorage.setItem("reactionBenchLang", lang); }catch(e){}
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    const val = t(key);
    if(HTML_I18N_KEYS.has(key)) el.innerHTML = val;
    else el.textContent = val;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
  });
  const sel = document.getElementById("lang-select");
  if(sel) sel.value = lang;
  __rerenderers.forEach(fn=>{ try{ fn(); }catch(e){ console.error(e); } });
}

document.getElementById("lang-select").addEventListener("change", (e)=> applyLanguage(e.target.value));


/* ============ shared helpers ============ */
const clamp=(v,lo,hi)=>Math.max(lo,Math.min(hi,v));
const log10=(v)=>Math.log(v)/Math.LN10;
function fmt(v,d=3){
  if(!isFinite(v)) return "—";
  if(Math.abs(v)!==0 && (Math.abs(v)<1e-4 || Math.abs(v)>1e5)) return v.toExponential(2);
  return v.toFixed(d);
}
function solveEquilibrium(Kc,A0,B0,C0,D0){
  const a=Kc-1, b=-(Kc*(A0+B0)+(C0+D0)), c=Kc*A0*B0-C0*D0;
  const lo=-Math.min(C0,D0), hi=Math.min(A0,B0);
  let x;
  if(Math.abs(a)<1e-9){ x=-c/b; }
  else{
    const disc=b*b-4*a*c;
    if(disc<0) return null;
    const r1=(-b+Math.sqrt(disc))/(2*a), r2=(-b-Math.sqrt(disc))/(2*a);
    const inRange=(r)=> r>=lo-1e-9 && r<=hi+1e-9;
    if(inRange(r1)&&inRange(r2)) x=Math.abs(r1)<Math.abs(r2)?r1:r2;
    else if(inRange(r1)) x=r1;
    else if(inRange(r2)) x=r2;
    else x=clamp(Math.abs(r1)<Math.abs(r2)?r1:r2, lo, hi);
  }
  x=clamp(x,lo,hi);
  return {x, A:A0-x, B:B0-x, C:C0+x, D:D0+x};
}

/* ============ EXPORT + EXPERIMENT LOG UTILITIES ============ */
function downloadBlob(filename, blob){
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click();
  a.remove();
  setTimeout(()=> URL.revokeObjectURL(url), 2000);
}
function downloadCSV(filename, rows){
  const csv = rows.map(r => r.map(v => {
    const s = String(v);
    return /[",\n]/.test(s) ? '"'+s.replace(/"/g,'""')+'"' : s;
  }).join(",")).join("\r\n");
  downloadBlob(filename, new Blob([csv], {type:"text/csv;charset=utf-8;"}));
}
function downloadCanvasPNG(canvas, filename){
  canvas.toBlob((blob)=>{ if(blob) downloadBlob(filename, blob); }, "image/png");
}

const LOG_KEY = "reactionBenchExperimentLog";
function getLog(){
  try{ return JSON.parse(localStorage.getItem(LOG_KEY) || "[]"); }
  catch(e){ return []; }
}
function saveLog(entries){
  try{ localStorage.setItem(LOG_KEY, JSON.stringify(entries)); }catch(e){}
}
function showToast(message, kind){
  let host = document.getElementById("toast-host");
  if(!host){
    host = document.createElement("div");
    host.id = "toast-host";
    host.className = "toast-host";
    document.body.appendChild(host);
  }
  const el = document.createElement("div");
  el.className = "toast"+(kind?" toast-"+kind:"");
  el.textContent = message;
  host.appendChild(el);
  requestAnimationFrame(()=> el.classList.add("show"));
  setTimeout(()=>{
    el.classList.remove("show");
    setTimeout(()=> el.remove(), 300);
  }, 2600);
}

function logExperiment(module, formula, inputs, results){
  const entries = getLog();
  entries.unshift({
    id: Date.now()+"-"+Math.floor(Math.random()*1000),
    time: new Date().toLocaleString(),
    module, formula, inputs, results
  });
  saveLog(entries);
  renderLogTable();
  flashLogTab();
  showToast("📌 "+t("toast_logged").replace("{module}", module), "success");
}
function flashLogTab(){
  const btn = document.querySelector('#tabs button[data-tab="log"]');
  if(!btn) return;
  btn.classList.add("flash");
  setTimeout(()=> btn.classList.remove("flash"), 900);
}
function renderLogTable(){
  const host = document.getElementById("log-table-body");
  if(!host) return;
  const entries = getLog();
  document.getElementById("log-count").textContent = entries.length;
  if(entries.length===0){
    host.innerHTML = '<tr><td colspan="5" style="color:var(--ink-soft);padding:14px 0;">'+t("log_no_experiments")+'</td></tr>';
    return;
  }
  host.innerHTML = entries.map(e => `
    <tr style="border-top:1px solid var(--paper-edge);">
      <td style="padding:6px 8px;white-space:nowrap;">${e.time}</td>
      <td style="padding:6px 8px;">${e.module}<br><span style="color:var(--ink-soft);font-size:11px;">${e.formula||""}</span></td>
      <td style="padding:6px 8px;font-size:11px;">${Object.entries(e.inputs||{}).map(([k,v])=>k+"="+v).join(", ")}</td>
      <td style="padding:6px 8px;font-size:11px;">${Object.entries(e.results||{}).map(([k,v])=>k+"="+v).join(", ")}</td>
      <td style="padding:6px 8px;"><button class="linklike" data-del="${e.id}">remove</button></td>
    </tr>
  `).join("");
  host.querySelectorAll("[data-del]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const remaining = getLog().filter(e=> e.id!==btn.dataset.del);
      saveLog(remaining);
      renderLogTable();
    });
  });
}
function exportLogCSV(){
  const entries = getLog();
  const rows = [["time","module","formula","inputs","results"]];
  entries.forEach(e=> rows.push([e.time, e.module, e.formula||"",
    Object.entries(e.inputs||{}).map(([k,v])=>k+"="+v).join("; "),
    Object.entries(e.results||{}).map(([k,v])=>k+"="+v).join("; ")]));
  downloadCSV("reaction_bench_experiment_log.csv", rows);
}
function exportLogJSON(){
  downloadBlob("reaction_bench_experiment_log.json", new Blob([JSON.stringify(getLog(), null, 2)], {type:"application/json"}));
}

/* ============ canvas chart utils ============ */
function setupCanvas(canvas){
  const ratio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  const w = rect.width || canvas.parentElement.clientWidth;
  const h = canvas.height;
  canvas.width = w*ratio; canvas.height = h*ratio;
  canvas.style.height = h+"px";
  const ctx = canvas.getContext("2d");
  ctx.setTransform(ratio,0,0,ratio,0,0);
  return {ctx, w, h};
}
const PHOSPHOR="#2F9E52", PHOSPHOR_DIM="rgba(107,227,123,0.35)", AMBER="#C9791A", GRID="rgba(120,255,150,0.10)";
const CHART_GRID_LINE="rgba(80,72,55,0.14)", CHART_AXIS="rgba(80,72,55,0.55)", CHART_TEXT="#544C3B";

function drawLineChart(canvas, {points, xDomain, yDomain, xLabel, yLabel, markers=[], color="#2B6FB8"}){
  const {ctx,w,h} = setupCanvas(canvas);
  ctx.clearRect(0,0,w,h);
  const m={l:42,r:12,t:8,b:24};
  const pw=w-m.l-m.r, ph=h-m.t-m.b;
  const sx=(x)=> m.l + (x-xDomain[0])/((xDomain[1]-xDomain[0])||1)*pw;
  const sy=(y)=> m.t + ph - (y-yDomain[0])/((yDomain[1]-yDomain[0])||1)*ph;
  ctx.font="9.5px 'IBM Plex Mono', monospace";
  ctx.strokeStyle=CHART_GRID_LINE; ctx.lineWidth=1;
  for(let i=0;i<=4;i++){
    const gy=yDomain[0]+i*(yDomain[1]-yDomain[0])/4;
    ctx.beginPath(); ctx.moveTo(m.l,sy(gy)); ctx.lineTo(m.l+pw,sy(gy)); ctx.stroke();
    ctx.fillStyle=CHART_TEXT; ctx.textAlign="right"; ctx.fillText(fmt(gy,1), m.l-6, sy(gy)+3);
  }
  for(let i=0;i<=4;i++){
    const gx=xDomain[0]+i*(xDomain[1]-xDomain[0])/4;
    ctx.beginPath(); ctx.moveTo(sx(gx),m.t); ctx.lineTo(sx(gx),m.t+ph); ctx.stroke();
    ctx.fillStyle=CHART_TEXT; ctx.textAlign="center"; ctx.fillText(fmt(gx,1), sx(gx), m.t+ph+13);
  }
  ctx.strokeStyle=CHART_AXIS; ctx.lineWidth=1.3; ctx.beginPath(); ctx.moveTo(m.l,m.t); ctx.lineTo(m.l,m.t+ph); ctx.lineTo(m.l+pw,m.t+ph); ctx.stroke();

  markers.forEach(mk=>{
    ctx.strokeStyle = mk.color||"#C9791A"; ctx.setLineDash([3,3]); ctx.lineWidth=1.2; ctx.beginPath();
    ctx.moveTo(sx(mk.x), m.t); ctx.lineTo(sx(mk.x), m.t+ph); ctx.stroke(); ctx.setLineDash([]);
    if(mk.y!==undefined){ ctx.fillStyle=mk.color||"#C9791A"; ctx.beginPath(); ctx.arc(sx(mk.x), sy(clamp(mk.y,yDomain[0],yDomain[1])), 3.8, 0, 7); ctx.fill(); }
    if(mk.label){ ctx.fillStyle=mk.color||"#C9791A"; ctx.textAlign="left"; ctx.font="bold 9.5px 'IBM Plex Mono', monospace"; ctx.fillText(mk.label, sx(mk.x)+4, m.t+10); ctx.font="9.5px 'IBM Plex Mono', monospace"; }
  });

  ctx.beginPath();
  points.forEach((p,i)=>{
    const X=sx(p.x), Y=sy(clamp(p.y,yDomain[0],yDomain[1]));
    if(i===0) ctx.moveTo(X,Y); else ctx.lineTo(X,Y);
  });
  ctx.strokeStyle=color; ctx.lineWidth=2.6; ctx.lineJoin="round"; ctx.stroke();

  ctx.fillStyle=CHART_TEXT; ctx.textAlign="center"; ctx.font="bold 9.5px 'IBM Plex Mono', monospace";
  ctx.fillText(xLabel, m.l+pw/2, h-3);
  ctx.save(); ctx.translate(11, m.t+ph/2); ctx.rotate(-Math.PI/2); ctx.fillText(yLabel,0,0); ctx.restore();
}

function drawBarChart(canvas, {bars, yDomain}){
  const {ctx,w,h} = setupCanvas(canvas);
  ctx.clearRect(0,0,w,h);
  const m={l:42,r:12,t:10,b:20};
  const pw=w-m.l-m.r, ph=h-m.t-m.b;
  const sy=(y)=> m.t+ph - (y-yDomain[0])/((yDomain[1]-yDomain[0])||1)*ph;
  ctx.font="9.5px 'IBM Plex Mono', monospace";
  for(let i=0;i<=4;i++){
    const gy=yDomain[0]+i*(yDomain[1]-yDomain[0])/4;
    ctx.strokeStyle=CHART_GRID_LINE; ctx.beginPath(); ctx.moveTo(m.l,sy(gy)); ctx.lineTo(m.l+pw,sy(gy)); ctx.stroke();
    ctx.fillStyle=CHART_TEXT; ctx.textAlign="right"; ctx.fillText(fmt(gy,2), m.l-6, sy(gy)+3);
  }
  ctx.strokeStyle=CHART_AXIS; ctx.lineWidth=1.3; ctx.beginPath(); ctx.moveTo(m.l,sy(0)); ctx.lineTo(m.l+pw,sy(0)); ctx.stroke();
  const slot = pw/bars.length, bw=slot/1.8;
  bars.forEach((b,i)=>{
    const cx=m.l+slot*i+slot/2;
    const y0=sy(0), y1=sy(b.value);
    ctx.fillStyle=b.color;
    ctx.fillRect(cx-bw/2, Math.min(y0,y1), bw, Math.max(Math.abs(y1-y0),1));
    ctx.textAlign="center"; ctx.fillStyle=CHART_TEXT; ctx.font="bold 9.5px 'IBM Plex Mono', monospace"; ctx.fillText(b.label, cx, m.t+ph+13);
    ctx.font="9.5px 'IBM Plex Mono', monospace"; ctx.fillText(fmt(b.value,3), cx, Math.min(y0,y1)-5);
  });
}

/* ============ REAGENTS: periodic table + formula builder ============ */
const ELEMENTS = [
{z:1,s:"H",n:"Hydrogen",m:1.008,c:"nonmetal",p:1,g:1},
{z:2,s:"He",n:"Helium",m:4.003,c:"noble",p:1,g:18},
{z:3,s:"Li",n:"Lithium",m:6.94,c:"alkali",p:2,g:1},
{z:4,s:"Be",n:"Beryllium",m:9.012,c:"alkaline",p:2,g:2},
{z:5,s:"B",n:"Boron",m:10.81,c:"metalloid",p:2,g:13},
{z:6,s:"C",n:"Carbon",m:12.011,c:"nonmetal",p:2,g:14},
{z:7,s:"N",n:"Nitrogen",m:14.007,c:"nonmetal",p:2,g:15},
{z:8,s:"O",n:"Oxygen",m:15.999,c:"nonmetal",p:2,g:16},
{z:9,s:"F",n:"Fluorine",m:18.998,c:"halogen",p:2,g:17},
{z:10,s:"Ne",n:"Neon",m:20.18,c:"noble",p:2,g:18},
{z:11,s:"Na",n:"Sodium",m:22.99,c:"alkali",p:3,g:1},
{z:12,s:"Mg",n:"Magnesium",m:24.305,c:"alkaline",p:3,g:2},
{z:13,s:"Al",n:"Aluminium",m:26.982,c:"postmetal",p:3,g:13},
{z:14,s:"Si",n:"Silicon",m:28.085,c:"metalloid",p:3,g:14},
{z:15,s:"P",n:"Phosphorus",m:30.974,c:"nonmetal",p:3,g:15},
{z:16,s:"S",n:"Sulfur",m:32.06,c:"nonmetal",p:3,g:16},
{z:17,s:"Cl",n:"Chlorine",m:35.45,c:"halogen",p:3,g:17},
{z:18,s:"Ar",n:"Argon",m:39.948,c:"noble",p:3,g:18},
{z:19,s:"K",n:"Potassium",m:39.098,c:"alkali",p:4,g:1},
{z:20,s:"Ca",n:"Calcium",m:40.078,c:"alkaline",p:4,g:2},
{z:21,s:"Sc",n:"Scandium",m:44.956,c:"transition",p:4,g:3},
{z:22,s:"Ti",n:"Titanium",m:47.867,c:"transition",p:4,g:4},
{z:23,s:"V",n:"Vanadium",m:50.942,c:"transition",p:4,g:5},
{z:24,s:"Cr",n:"Chromium",m:51.996,c:"transition",p:4,g:6},
{z:25,s:"Mn",n:"Manganese",m:54.938,c:"transition",p:4,g:7},
{z:26,s:"Fe",n:"Iron",m:55.845,c:"transition",p:4,g:8},
{z:27,s:"Co",n:"Cobalt",m:58.933,c:"transition",p:4,g:9},
{z:28,s:"Ni",n:"Nickel",m:58.693,c:"transition",p:4,g:10},
{z:29,s:"Cu",n:"Copper",m:63.546,c:"transition",p:4,g:11},
{z:30,s:"Zn",n:"Zinc",m:65.38,c:"transition",p:4,g:12},
{z:31,s:"Ga",n:"Gallium",m:69.723,c:"postmetal",p:4,g:13},
{z:32,s:"Ge",n:"Germanium",m:72.63,c:"metalloid",p:4,g:14},
{z:33,s:"As",n:"Arsenic",m:74.922,c:"metalloid",p:4,g:15},
{z:34,s:"Se",n:"Selenium",m:78.971,c:"nonmetal",p:4,g:16},
{z:35,s:"Br",n:"Bromine",m:79.904,c:"halogen",p:4,g:17},
{z:36,s:"Kr",n:"Krypton",m:83.798,c:"noble",p:4,g:18},
{z:37,s:"Rb",n:"Rubidium",m:85.468,c:"alkali",p:5,g:1},
{z:38,s:"Sr",n:"Strontium",m:87.62,c:"alkaline",p:5,g:2},
{z:39,s:"Y",n:"Yttrium",m:88.906,c:"transition",p:5,g:3},
{z:40,s:"Zr",n:"Zirconium",m:91.224,c:"transition",p:5,g:4},
{z:41,s:"Nb",n:"Niobium",m:92.906,c:"transition",p:5,g:5},
{z:42,s:"Mo",n:"Molybdenum",m:95.95,c:"transition",p:5,g:6},
{z:43,s:"Tc",n:"Technetium",m:98,c:"transition",p:5,g:7},
{z:44,s:"Ru",n:"Ruthenium",m:101.07,c:"transition",p:5,g:8},
{z:45,s:"Rh",n:"Rhodium",m:102.906,c:"transition",p:5,g:9},
{z:46,s:"Pd",n:"Palladium",m:106.42,c:"transition",p:5,g:10},
{z:47,s:"Ag",n:"Silver",m:107.868,c:"transition",p:5,g:11},
{z:48,s:"Cd",n:"Cadmium",m:112.414,c:"transition",p:5,g:12},
{z:49,s:"In",n:"Indium",m:114.818,c:"postmetal",p:5,g:13},
{z:50,s:"Sn",n:"Tin",m:118.71,c:"postmetal",p:5,g:14},
{z:51,s:"Sb",n:"Antimony",m:121.76,c:"metalloid",p:5,g:15},
{z:52,s:"Te",n:"Tellurium",m:127.6,c:"metalloid",p:5,g:16},
{z:53,s:"I",n:"Iodine",m:126.904,c:"halogen",p:5,g:17},
{z:54,s:"Xe",n:"Xenon",m:131.293,c:"noble",p:5,g:18},
{z:55,s:"Cs",n:"Caesium",m:132.905,c:"alkali",p:6,g:1},
{z:56,s:"Ba",n:"Barium",m:137.327,c:"alkaline",p:6,g:2},
{z:57,s:"La",n:"Lanthanum",m:138.905,c:"lan",p:8,g:3},
{z:58,s:"Ce",n:"Cerium",m:140.116,c:"lan",p:8,g:4},
{z:59,s:"Pr",n:"Praseodymium",m:140.908,c:"lan",p:8,g:5},
{z:60,s:"Nd",n:"Neodymium",m:144.242,c:"lan",p:8,g:6},
{z:61,s:"Pm",n:"Promethium",m:145,c:"lan",p:8,g:7},
{z:62,s:"Sm",n:"Samarium",m:150.36,c:"lan",p:8,g:8},
{z:63,s:"Eu",n:"Europium",m:151.964,c:"lan",p:8,g:9},
{z:64,s:"Gd",n:"Gadolinium",m:157.25,c:"lan",p:8,g:10},
{z:65,s:"Tb",n:"Terbium",m:158.925,c:"lan",p:8,g:11},
{z:66,s:"Dy",n:"Dysprosium",m:162.5,c:"lan",p:8,g:12},
{z:67,s:"Ho",n:"Holmium",m:164.93,c:"lan",p:8,g:13},
{z:68,s:"Er",n:"Erbium",m:167.259,c:"lan",p:8,g:14},
{z:69,s:"Tm",n:"Thulium",m:168.934,c:"lan",p:8,g:15},
{z:70,s:"Yb",n:"Ytterbium",m:173.045,c:"lan",p:8,g:16},
{z:71,s:"Lu",n:"Lutetium",m:174.967,c:"lan",p:8,g:17},
{z:72,s:"Hf",n:"Hafnium",m:178.49,c:"transition",p:6,g:4},
{z:73,s:"Ta",n:"Tantalum",m:180.948,c:"transition",p:6,g:5},
{z:74,s:"W",n:"Tungsten",m:183.84,c:"transition",p:6,g:6},
{z:75,s:"Re",n:"Rhenium",m:186.207,c:"transition",p:6,g:7},
{z:76,s:"Os",n:"Osmium",m:190.23,c:"transition",p:6,g:8},
{z:77,s:"Ir",n:"Iridium",m:192.217,c:"transition",p:6,g:9},
{z:78,s:"Pt",n:"Platinum",m:195.085,c:"transition",p:6,g:10},
{z:79,s:"Au",n:"Gold",m:196.967,c:"transition",p:6,g:11},
{z:80,s:"Hg",n:"Mercury",m:200.592,c:"transition",p:6,g:12},
{z:81,s:"Tl",n:"Thallium",m:204.38,c:"postmetal",p:6,g:13},
{z:82,s:"Pb",n:"Lead",m:207.2,c:"postmetal",p:6,g:14},
{z:83,s:"Bi",n:"Bismuth",m:208.98,c:"postmetal",p:6,g:15},
{z:84,s:"Po",n:"Polonium",m:209,c:"postmetal",p:6,g:16},
{z:85,s:"At",n:"Astatine",m:210,c:"halogen",p:6,g:17},
{z:86,s:"Rn",n:"Radon",m:222,c:"noble",p:6,g:18},
{z:87,s:"Fr",n:"Francium",m:223,c:"alkali",p:7,g:1},
{z:88,s:"Ra",n:"Radium",m:226,c:"alkaline",p:7,g:2},
{z:89,s:"Ac",n:"Actinium",m:227,c:"act",p:9,g:3},
{z:90,s:"Th",n:"Thorium",m:232.038,c:"act",p:9,g:4},
{z:91,s:"Pa",n:"Protactinium",m:231.036,c:"act",p:9,g:5},
{z:92,s:"U",n:"Uranium",m:238.029,c:"act",p:9,g:6},
{z:93,s:"Np",n:"Neptunium",m:237,c:"act",p:9,g:7},
{z:94,s:"Pu",n:"Plutonium",m:244,c:"act",p:9,g:8},
{z:95,s:"Am",n:"Americium",m:243,c:"act",p:9,g:9},
{z:96,s:"Cm",n:"Curium",m:247,c:"act",p:9,g:10},
{z:97,s:"Bk",n:"Berkelium",m:247,c:"act",p:9,g:11},
{z:98,s:"Cf",n:"Californium",m:251,c:"act",p:9,g:12},
{z:99,s:"Es",n:"Einsteinium",m:252,c:"act",p:9,g:13},
{z:100,s:"Fm",n:"Fermium",m:257,c:"act",p:9,g:14},
{z:101,s:"Md",n:"Mendelevium",m:258,c:"act",p:9,g:15},
{z:102,s:"No",n:"Nobelium",m:259,c:"act",p:9,g:16},
{z:103,s:"Lr",n:"Lawrencium",m:266,c:"act",p:9,g:17},
{z:104,s:"Rf",n:"Rutherfordium",m:267,c:"transition",p:7,g:4},
{z:105,s:"Db",n:"Dubnium",m:268,c:"transition",p:7,g:5},
{z:106,s:"Sg",n:"Seaborgium",m:269,c:"transition",p:7,g:6},
{z:107,s:"Bh",n:"Bohrium",m:270,c:"transition",p:7,g:7},
{z:108,s:"Hs",n:"Hassium",m:269,c:"transition",p:7,g:8},
{z:109,s:"Mt",n:"Meitnerium",m:278,c:"transition",p:7,g:9},
{z:110,s:"Ds",n:"Darmstadtium",m:281,c:"transition",p:7,g:10},
{z:111,s:"Rg",n:"Roentgenium",m:282,c:"transition",p:7,g:11},
{z:112,s:"Cn",n:"Copernicium",m:285,c:"transition",p:7,g:12},
{z:113,s:"Nh",n:"Nihonium",m:286,c:"postmetal",p:7,g:13},
{z:114,s:"Fl",n:"Flerovium",m:289,c:"postmetal",p:7,g:14},
{z:115,s:"Mc",n:"Moscovium",m:290,c:"postmetal",p:7,g:15},
{z:116,s:"Lv",n:"Livermorium",m:293,c:"postmetal",p:7,g:16},
{z:117,s:"Ts",n:"Tennessine",m:294,c:"halogen",p:7,g:17},
{z:118,s:"Og",n:"Oganesson",m:294,c:"noble",p:7,g:18}
];

const CAT_LABELS = {
  alkali:'cat_alkali', alkaline:'cat_alkaline', transition:'cat_transition',
  postmetal:'cat_postmetal', metalloid:'cat_metalloid', nonmetal:'cat_nonmetal',
  halogen:'cat_halogen', noble:'cat_noble', lan:'cat_lan', act:'cat_act', other:'cat_other'
};

function renderLegend(){
  const legend=document.getElementById('ptable-legend');
  if(!legend) return;
  legend.innerHTML = Object.keys(CAT_LABELS).map(k=>
    '<span><i class="cat-'+k+'"></i>'+t(CAT_LABELS[k])+'</span>'
  ).join('');
}

function renderPeriodicTable(){
  const host=document.getElementById('ptable');
  host.innerHTML='';
  ELEMENTS.forEach(el=>{
    const cell=document.createElement('div');
    cell.className='pcell cat-'+el.c;
    cell.style.gridColumn=el.g;
    cell.style.gridRow=el.p;
    cell.innerHTML = '<span class="z">'+el.z+'</span><span class="sym">'+el.s+'</span><span class="mass">'+el.m+'</span>';
    cell.title = el.n+' ('+el.s+') — '+el.m+' g/mol';
    cell.addEventListener('click', ()=>{
      const input=document.getElementById('formula-input');
      input.value = (input.value||'') + el.s;
      updateFormula();
      document.querySelectorAll('.pcell.selected').forEach(c=>c.classList.remove('selected'));
      cell.classList.add('selected');
    });
    host.appendChild(cell);
  });
  // placeholder cells for the f-block link in main table
  [{p:6,g:3,label:'57–71'},{p:7,g:3,label:'89–103'}].forEach(ph=>{
    const cell=document.createElement('div');
    cell.className='pcell placeholder';
    cell.style.gridColumn=ph.g; cell.style.gridRow=ph.p;
    cell.textContent=ph.label;
    host.appendChild(cell);
  });
  renderLegend();
}

const ELEMENT_BY_SYMBOL = {};
ELEMENTS.forEach(el=> ELEMENT_BY_SYMBOL[el.s]=el);

function parseFormula(formula){
  // returns {counts:{Sym:count}, valid:bool, unknown:[symbols]}
  let s = formula.replace(/\s+/g,'');
  if(!s) return {counts:{}, valid:false, unknown:[]};
  let i=0;
  const unknown=[];
  function parseGroup(){
    const counts={};
    while(i<s.length && s[i] !== ')'){
      if(s[i]==='('){
        i++;
        const inner=parseGroup();
        if(s[i]===')') i++;
        let numStr='';
        while(i<s.length && /[0-9]/.test(s[i])){ numStr+=s[i]; i++; }
        const mult = numStr? parseInt(numStr,10) : 1;
        for(const el in inner) counts[el]=(counts[el]||0)+inner[el]*mult;
      } else if(/[A-Z]/.test(s[i])){
        let sym = s[i]; i++;
        if(i<s.length && /[a-z]/.test(s[i])){ sym+=s[i]; i++; }
        let numStr='';
        while(i<s.length && /[0-9]/.test(s[i])){ numStr+=s[i]; i++; }
        const count = numStr? parseInt(numStr,10) : 1;
        if(!ELEMENT_BY_SYMBOL[sym]) unknown.push(sym);
        counts[sym]=(counts[sym]||0)+count;
      } else {
        i++; // skip unrecognized char (e.g. middot for hydrates) to stay forgiving
      }
    }
    return counts;
  }
  const counts = parseGroup();
  return {counts, valid: unknown.length===0 && Object.keys(counts).length>0, unknown};
}

function molarMass(counts){
  let total=0;
  for(const sym in counts){
    const el=ELEMENT_BY_SYMBOL[sym];
    if(el) total += el.m*counts[sym];
  }
  return total;
}

const REAGENTS = [
  {f:'HCl', label:'Hydrochloric acid', cat:'acid'}, {f:'NaOH', label:'Sodium hydroxide', cat:'base'},
  {f:'H2SO4', label:'Sulfuric acid', cat:'acid'}, {f:'CH3COOH', label:'Acetic acid', cat:'acid'},
  {f:'NaCl', label:'Sodium chloride', cat:'salt'}, {f:'KMnO4', label:'Potassium permanganate', cat:'oxidizer'},
  {f:'CuSO4', label:'Copper(II) sulfate', cat:'salt'}, {f:'AgNO3', label:'Silver nitrate', cat:'salt'},
  {f:'NH3', label:'Ammonia', cat:'base'}, {f:'CaOH2', display:'Ca(OH)2', label:'Calcium hydroxide', cat:'base'},
  {f:'C6H12O6', label:'Glucose', cat:'organic'}, {f:'NaHCO3', label:'Sodium bicarbonate', cat:'salt'},
  {f:'K2Cr2O7', label:'Potassium dichromate', cat:'oxidizer'}, {f:'HNO3', label:'Nitric acid', cat:'acid'},
  {f:'H2O2', label:'Hydrogen peroxide', cat:'oxidizer'}, {f:'Na2CO3', label:'Sodium carbonate', cat:'salt'},
  {f:'CaCO3', label:'Calcium carbonate', cat:'salt'}, {f:'NH4Cl', label:'Ammonium chloride', cat:'salt'},
  {f:'NH4NO3', label:'Ammonium nitrate', cat:'salt'}, {f:'KOH', label:'Potassium hydroxide', cat:'base'},
  {f:'HF', label:'Hydrofluoric acid', cat:'acid'}, {f:'H3PO4', label:'Phosphoric acid', cat:'acid'},
  {f:'CH3OH', label:'Methanol', cat:'organic'}, {f:'C2H5OH', label:'Ethanol', cat:'organic'},
  {f:'C6H12O6', label:'Fructose', cat:'organic'}, {f:'FeCl3', label:'Iron(III) chloride', cat:'salt'},
  {f:'ZnSO4', label:'Zinc sulfate', cat:'salt'}, {f:'BaCl2', label:'Barium chloride', cat:'salt'},
  {f:'Na2SO4', label:'Sodium sulfate', cat:'salt'}, {f:'KCl', label:'Potassium chloride', cat:'salt'},
  {f:'CO2', label:'Carbon dioxide', cat:'gas'}, {f:'O2', label:'Oxygen', cat:'gas'},
  {f:'N2', label:'Nitrogen', cat:'gas'}, {f:'H2', label:'Hydrogen', cat:'gas'},
  {f:'CH4', label:'Methane', cat:'gas'}, {f:'C2H4', label:'Ethylene', cat:'organic'},
];

/* ---- custom (user-built) reagents, persisted, merged into the bank everywhere ---- */
const CUSTOM_REAGENTS_KEY = "reactionBenchCustomReagents";
function getCustomReagents(){
  try{ return JSON.parse(localStorage.getItem(CUSTOM_REAGENTS_KEY) || "[]"); }
  catch(e){ return []; }
}
function saveCustomReagents(list){
  try{ localStorage.setItem(CUSTOM_REAGENTS_KEY, JSON.stringify(list)); }catch(e){}
}
function allReagents(){ return REAGENTS.concat(getCustomReagents()); }

const REAGENT_BANK_LISTENERS = [];
function onReagentBankChange(fn){ REAGENT_BANK_LISTENERS.push(fn); }
function notifyReagentBankChange(){ REAGENT_BANK_LISTENERS.forEach(fn=>{ try{ fn(); }catch(e){ console.error(e); } }); }

function addCustomReagent(formula, label){
  const list = getCustomReagents();
  if(list.some(r=>r.f===formula) || REAGENTS.some(r=>r.f===formula)) return false;
  list.push({f:formula, label: label || formula, cat:'custom', custom:true});
  saveCustomReagents(list);
  notifyReagentBankChange();
  return true;
}
function removeCustomReagent(formula){
  saveCustomReagents(getCustomReagents().filter(r=>r.f!==formula));
  notifyReagentBankChange();
}

function reagentDisplay(r){ return (r.display||r.f); }
function reagentOptionsHTML(filterCat){
  return allReagents()
    .filter(r=> !filterCat || r.cat===filterCat)
    .map(r=> '<option value="'+r.f+'" data-display="'+reagentDisplay(r)+'">'+reagentDisplay(r)+' — '+r.label+(r.custom?' ★':'')+'</option>')
    .join('');
}

/* generic helper: refresh a <select> populated by reagentOptionsHTML(), keeping its first placeholder option and current selection */
function refreshBankSelect(selectEl, filterCat){
  if(!selectEl) return;
  const cur = selectEl.value;
  const placeholder = selectEl.options[0] && !selectEl.options[0].value ? selectEl.options[0].outerHTML : "";
  selectEl.innerHTML = placeholder + reagentOptionsHTML(filterCat);
  if([...selectEl.options].some(o=>o.value===cur)) selectEl.value = cur;
}

let lastValidFormula = null, lastValidMM = null;

/* ---- element-set -> known real compound suggestions ---- */
const COMPOUND_SUGGESTIONS = {
  "H,O": [{f:"H2O",n:"Water"},{f:"H2O2",n:"Hydrogen peroxide"}],
  "Cl,H": [{f:"HCl",n:"Hydrochloric acid"}],
  "Cl,Na": [{f:"NaCl",n:"Sodium chloride"}],
  "H,Na,O": [{f:"NaOH",n:"Sodium hydroxide"}],
  "H,K,O": [{f:"KOH",n:"Potassium hydroxide"}],
  "Ca,H,O": [{f:"Ca(OH)2",n:"Calcium hydroxide"}],
  "O,V": [{f:"VO",n:"Vanadium(II) oxide"},{f:"V2O3",n:"Vanadium(III) oxide"},{f:"VO2",n:"Vanadium(IV) oxide"},{f:"V2O5",n:"Vanadium(V) oxide"}],
  "Fe,O": [{f:"FeO",n:"Iron(II) oxide"},{f:"Fe2O3",n:"Iron(III) oxide"},{f:"Fe3O4",n:"Iron(II,III) oxide (magnetite)"}],
  "Cu,O": [{f:"Cu2O",n:"Copper(I) oxide"},{f:"CuO",n:"Copper(II) oxide"}],
  "Mn,O": [{f:"MnO",n:"Manganese(II) oxide"},{f:"MnO2",n:"Manganese(IV) oxide"},{f:"Mn2O3",n:"Manganese(III) oxide"},{f:"Mn2O7",n:"Manganese(VII) oxide"}],
  "Cr,O": [{f:"Cr2O3",n:"Chromium(III) oxide"},{f:"CrO3",n:"Chromium(VI) oxide"}],
  "O,Ti": [{f:"TiO2",n:"Titanium dioxide"},{f:"TiO",n:"Titanium(II) oxide"}],
  "N,O": [{f:"NO",n:"Nitric oxide"},{f:"NO2",n:"Nitrogen dioxide"},{f:"N2O",n:"Nitrous oxide"},{f:"N2O3",n:"Dinitrogen trioxide"},{f:"N2O4",n:"Dinitrogen tetroxide"},{f:"N2O5",n:"Dinitrogen pentoxide"}],
  "O,S": [{f:"SO2",n:"Sulfur dioxide"},{f:"SO3",n:"Sulfur trioxide"}],
  "C,O": [{f:"CO",n:"Carbon monoxide"},{f:"CO2",n:"Carbon dioxide"}],
  "H,N": [{f:"NH3",n:"Ammonia"}],
  "C,H": [{f:"CH4",n:"Methane"},{f:"C2H4",n:"Ethylene"},{f:"C2H2",n:"Acetylene"},{f:"C6H6",n:"Benzene"}],
  "C,H,O": [{f:"CH3OH",n:"Methanol"},{f:"C2H5OH",n:"Ethanol"},{f:"C6H12O6",n:"Glucose"},{f:"CH3COOH",n:"Acetic acid"}],
  "C,Cl,H": [{f:"CH3Cl",n:"Chloromethane"},{f:"CH2Cl2",n:"Dichloromethane"},{f:"CHCl3",n:"Chloroform"},{f:"CCl4",n:"Carbon tetrachloride"}],
  "C,F,H": [{f:"CH3F",n:"Fluoromethane"},{f:"CH2F2",n:"Difluoromethane"},{f:"CHF3",n:"Fluoroform"},{f:"CF4",n:"Carbon tetrafluoride"}],
  "Br,C,H": [{f:"CH3Br",n:"Bromomethane"},{f:"CH2Br2",n:"Dibromomethane"},{f:"CHBr3",n:"Bromoform"},{f:"CBr4",n:"Carbon tetrabromide"}],
  "C,H,I": [{f:"CH3I",n:"Iodomethane"},{f:"CH2I2",n:"Diiodomethane"}],
  "Ca,O": [{f:"CaO",n:"Calcium oxide (lime)"}],
  "C,Ca,O": [{f:"CaCO3",n:"Calcium carbonate"}],
  "Mg,O": [{f:"MgO",n:"Magnesium oxide"}],
  "Al,O": [{f:"Al2O3",n:"Aluminium oxide"}],
  "H,S": [{f:"H2S",n:"Hydrogen sulfide"}],
  "H,N,O": [{f:"HNO3",n:"Nitric acid"},{f:"NH4NO3",n:"Ammonium nitrate"}],
  "O,P": [{f:"P2O5",n:"Phosphorus pentoxide"},{f:"P2O3",n:"Phosphorus trioxide"}],
  "H,O,P": [{f:"H3PO4",n:"Phosphoric acid"}],
  "K,Mn,O": [{f:"KMnO4",n:"Potassium permanganate"}],
  "Cr,K,O": [{f:"K2Cr2O7",n:"Potassium dichromate"}],
  "Ag,N,O": [{f:"AgNO3",n:"Silver nitrate"}],
  "Cu,O,S": [{f:"CuSO4",n:"Copper(II) sulfate"}],
  "O,S,Zn": [{f:"ZnSO4",n:"Zinc sulfate"}],
  "Ba,Cl": [{f:"BaCl2",n:"Barium chloride"}],
  "C,H,Na,O": [{f:"NaHCO3",n:"Sodium bicarbonate"}],
  "C,Na,O": [{f:"Na2CO3",n:"Sodium carbonate"}],
  "Cl,H,N": [{f:"NH4Cl",n:"Ammonium chloride"}],
  "Cl,Fe": [{f:"FeCl2",n:"Iron(II) chloride"},{f:"FeCl3",n:"Iron(III) chloride"}],
  "O,Zn": [{f:"ZnO",n:"Zinc oxide"}],
  "O,Pb": [{f:"PbO",n:"Lead(II) oxide"},{f:"PbO2",n:"Lead(IV) oxide"}],
  "O,Sn": [{f:"SnO",n:"Tin(II) oxide"},{f:"SnO2",n:"Tin(IV) oxide"}],
  "Ni,O": [{f:"NiO",n:"Nickel(II) oxide"}],
  "Co,O": [{f:"CoO",n:"Cobalt(II) oxide"},{f:"Co3O4",n:"Cobalt(II,III) oxide"}],
  "Ag,Cl": [{f:"AgCl",n:"Silver chloride"}],
  "Ca,O,S": [{f:"CaSO4",n:"Calcium sulfate"}],
  "Mg,O,S": [{f:"MgSO4",n:"Magnesium sulfate"}],
  "Cl,K": [{f:"KCl",n:"Potassium chloride"}],
  "Na,O,S": [{f:"Na2SO4",n:"Sodium sulfate"}],
  "Al,Cl": [{f:"AlCl3",n:"Aluminium chloride"}],
};
function elementSetKey(counts){ return Object.keys(counts).sort().join(","); }
function renderFormulaSuggestions(counts){
  const host = document.getElementById('formula-suggestions');
  const list = counts ? COMPOUND_SUGGESTIONS[elementSetKey(counts)] : null;
  if(!list){ host.style.display='none'; host.innerHTML=''; return; }
  host.style.display='block';
  host.innerHTML = '<div style="font-size:11px;color:var(--ink-soft);margin-bottom:5px;">'+t('r_suggestions_label')+'</div><div class="chips">' +
    list.map(c=>'<button type="button" class="chip suggestion-chip" data-f="'+c.f+'">'+c.f+' — '+c.n+'</button>').join('') +
    '</div>';
  host.querySelectorAll('.suggestion-chip').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.getElementById('formula-input').value = btn.dataset.f;
      updateFormula();
    });
  });
}

function updateFormula(){
  const raw=document.getElementById('formula-input').value;
  const parsed=parseFormula(raw);
  const breakdown=document.getElementById('formula-breakdown');
  const mmEl=document.getElementById('formula-mm');
  if(!parsed.valid){
    breakdown.innerHTML = raw.trim()? '<div style="color:var(--red);font-size:12px;">Unrecognized symbol'+(parsed.unknown.length>1?'s':'')+': '+parsed.unknown.join(', ')+'</div>' : '<div style="color:var(--ink-soft);font-size:12px;">Type a formula or click elements above.</div>';
    mmEl.textContent='—';
    lastValidFormula = null; lastValidMM = null;
    renderFormulaSuggestions(null);
    updateSolutionPrep(0);
    return;
  }
  const mm=molarMass(parsed.counts);
  breakdown.innerHTML = Object.entries(parsed.counts).map(([sym,count])=>{
    const el=ELEMENT_BY_SYMBOL[sym];
    return '<div class="breakdown-row"><span>'+sym+' × '+count+' ('+el.n+')</span><span>'+(el.m*count).toFixed(3)+' g/mol</span></div>';
  }).join('');
  mmEl.textContent = mm.toFixed(3)+' g/mol';
  renderFormulaSuggestions(parsed.counts);
  lastValidFormula = raw.replace(/\s+/g,''); lastValidMM = mm;
  updateSolutionPrep(mm);
}

function updateSolutionPrep(mm){
  const M=parseFloat(document.getElementById('prep-M').value);
  const V=parseFloat(document.getElementById('prep-V').value);
  document.getElementById('prep-M-val').textContent=M.toFixed(2)+' M';
  document.getElementById('prep-V-val').textContent=V.toFixed(0)+' mL';
  const massEl=document.getElementById('prep-mass');
  if(!mm){ massEl.textContent='—'; return; }
  const grams = M * (V/1000) * mm;
  massEl.textContent = fmt(grams,3)+' g';
}

document.getElementById('formula-input').addEventListener('input', updateFormula);
document.getElementById('formula-clear').addEventListener('click', ()=>{
  document.getElementById('formula-input').value='';
  document.querySelectorAll('.pcell.selected').forEach(c=>c.classList.remove('selected'));
  updateFormula();
});
document.getElementById('prep-M').addEventListener('input', ()=> updateFormula());
document.getElementById('prep-V').addEventListener('input', ()=> updateFormula());

document.getElementById('add-to-bank').addEventListener('click', ()=>{
  const msg = document.getElementById('add-to-bank-msg');
  msg.style.display = 'block';
  if(!lastValidFormula){
    msg.style.color = 'var(--red)';
    msg.textContent = t('r_add_to_bank_invalid');
    return;
  }
  const nameInput = document.getElementById('custom-reagent-name');
  const added = addCustomReagent(lastValidFormula, nameInput.value.trim());
  if(added){
    msg.style.color = 'var(--success-text)';
    msg.textContent = t('r_add_to_bank_success').replace('{formula}', lastValidFormula);
    nameInput.value = '';
  } else {
    msg.style.color = 'var(--amber)';
    msg.textContent = t('r_add_to_bank_exists');
  }
});

function renderReagentChips(){
  const host=document.getElementById('reagent-chips');
  host.innerHTML='';
  allReagents().forEach(r=>{
    const chip=document.createElement('span');
    chip.className='chip'+(r.custom?' chip-custom':'');
    chip.style.display='inline-flex'; chip.style.alignItems='center'; chip.style.gap='6px';
    const btn=document.createElement('button');
    btn.style.cssText='background:none;border:0;color:inherit;font:inherit;cursor:pointer;padding:0;';
    btn.textContent=(r.custom?'★ ':'')+(r.display||r.f)+' — '+r.label;
    btn.addEventListener('click', ()=>{
      document.getElementById('formula-input').value = r.f;
      updateFormula();
    });
    chip.appendChild(btn);
    if(r.custom){
      const rm=document.createElement('button');
      rm.textContent='✕'; rm.title='remove';
      rm.style.cssText='background:none;border:0;color:var(--red);cursor:pointer;font-size:11px;padding:0;';
      rm.addEventListener('click', (e)=>{ e.stopPropagation(); removeCustomReagent(r.f); });
      chip.appendChild(rm);
    }
    host.appendChild(chip);
  });
}
onReagentBankChange(renderReagentChips);
onLanguageChange(renderReagentChips);
onLanguageChange(updateFormula);

renderPeriodicTable();
renderReagentChips();
onLanguageChange(renderLegend);
document.getElementById('formula-input').value = 'NaCl';
updateFormula();



/* ============ tabs / navigation ============ */
const TAB_META = ["overview","acidbase","thermo","custom","reagents","log","ai"];
const TAB_ICON = {overview:"🏠",acidbase:"💧",thermo:"🔥",custom:"🧪",reagents:"⚛️",log:"📒",ai:"🤖"};
const TAB_TITLE_KEY = {overview:"tab_overview",acidbase:"tab_acidbase",thermo:"tab_thermo",custom:"tab_custom",reagents:"tab_reagents",log:"tab_log",ai:"tab_ai"};
const TAB_DESC_KEY = {acidbase:"ov_desc_acidbase",thermo:"ov_desc_thermo",custom:"ov_desc_custom",reagents:"ov_desc_reagents",log:"ov_desc_log",ai:"ov_desc_ai"};

function updatePageHeader(tab){
  document.getElementById("page-title").textContent = t(TAB_TITLE_KEY[tab] || "tab_overview");
  document.getElementById("page-desc").textContent = tab==="overview" ? "" : t(TAB_DESC_KEY[tab] || "");
}

const TAB_RUN_BUTTON = { acidbase:"a-run", thermo:"t-solve", custom:"c-solve" };
function updateTopbarRunButton(tab){
  document.querySelectorAll(".topbar-run-btn").forEach(btn=>{
    btn.classList.toggle("show", btn.id === TAB_RUN_BUTTON[tab]);
  });
}

function activateTab(tab){
  document.querySelectorAll("#tabs .nav-link").forEach(b=>b.classList.toggle("active", b.dataset.tab===tab));
  document.querySelectorAll(".panel").forEach(p=>p.classList.remove("active"));
  const panel = document.getElementById("panel-"+tab);
  if(panel) panel.classList.add("active");
  updatePageHeader(tab);
  updateTopbarRunButton(tab);
  if(tab==="log") renderLogTable();
  closeSidebarMobile();
  window.scrollTo({top:0, behavior:"instant"});
}

document.getElementById("tabs").addEventListener("click",(e)=>{
  const btn=e.target.closest("button"); if(!btn) return;
  activateTab(btn.dataset.tab);
});

/* mobile sidebar toggle */
const sidebarEl = document.getElementById("sidebar");
const backdropEl = document.getElementById("sidebar-backdrop");
function openSidebarMobile(){ sidebarEl.classList.add("open"); backdropEl.classList.add("show"); }
function closeSidebarMobile(){ sidebarEl.classList.remove("open"); backdropEl.classList.remove("show"); }
document.getElementById("sidebar-toggle").addEventListener("click", ()=>{
  sidebarEl.classList.contains("open") ? closeSidebarMobile() : openSidebarMobile();
});
backdropEl.addEventListener("click", closeSidebarMobile);

/* overview dashboard cards */
function renderOverview(){
  const grid = document.getElementById("overview-grid");
  grid.innerHTML = "";
  Object.keys(TAB_DESC_KEY).forEach(tab=>{
    const card = document.createElement("button");
    card.className = "overview-card";
    card.innerHTML = `<div class="ov-icon">${TAB_ICON[tab]}</div><div class="ov-title">${t(TAB_TITLE_KEY[tab])}</div><div class="ov-desc">${t(TAB_DESC_KEY[tab])}</div>`;
    card.addEventListener("click", ()=> activateTab(tab));
    grid.appendChild(card);
  });
}
renderOverview();
onLanguageChange(renderOverview);
onLanguageChange(()=> updatePageHeader(document.querySelector("#tabs .nav-link.active")?.dataset.tab || "overview"));
updatePageHeader("overview");

document.getElementById("log-export-csv").addEventListener("click", exportLogCSV);
document.getElementById("log-export-json").addEventListener("click", exportLogJSON);
document.getElementById("log-clear-all").addEventListener("click", ()=>{
  if(confirm(t("log_confirm_clear"))){
    saveLog([]);
    renderLogTable();
  }
});
renderLogTable();
onLanguageChange(renderLogTable);

/* ============ ACID-BASE ============ */
(function(){
  const modeGroup=document.getElementById("a-mode");
  const Ca=document.getElementById("a-Ca"), Cav=document.getElementById("a-Ca-val");
  const Va=document.getElementById("a-Va"), Vav=document.getElementById("a-Va-val");
  const Cb=document.getElementById("a-Cb"), Cbv=document.getElementById("a-Cb-val");
  const pKaEl=document.getElementById("a-pKa"), pKav=document.getElementById("a-pKa-val");
  const pKaField=document.getElementById("a-pKa-field");
  const Vb=document.getElementById("a-Vb"), Vbv=document.getElementById("a-Vb-val");
  const chart=document.getElementById("a-chart");
  const pHNow=document.getElementById("a-pH-now"), veqEl=document.getElementById("a-veq"), indEl=document.getElementById("a-indicator");
  const flaskLiquid=document.getElementById("a-flask-liquid");
  const burette=document.getElementById("a-burette-liquid");
  const drop=document.getElementById("a-drop");
  const acidSelect=document.getElementById("a-acid-select");
  const baseSelect=document.getElementById("a-base-select");
  const formulaEl=document.getElementById("a-formula");

  const ACID_NAMES = {HCl:"HCl", HNO3:"HNO₃", H2SO4:"H₂SO₄", CH3COOH:"CH₃COOH", HF:"HF", H3PO4:"H₃PO₄", custom:"HA"};
  const BASE_NAMES = {NaOH:"NaOH", KOH:"KOH", CaOH2:"Ca(OH)₂"};
  const SALT_TABLE = {
    "HCl_NaOH":"NaCl","HCl_KOH":"KCl","HCl_CaOH2":"CaCl2",
    "HNO3_NaOH":"NaNO3","HNO3_KOH":"KNO3","HNO3_CaOH2":"Ca(NO3)2",
    "H2SO4_NaOH":"Na2SO4","H2SO4_KOH":"K2SO4","H2SO4_CaOH2":"CaSO4",
    "CH3COOH_NaOH":"CH3COONa","CH3COOH_KOH":"CH3COOK","CH3COOH_CaOH2":"(CH3COO)2Ca",
    "HF_NaOH":"NaF","HF_KOH":"KF","HF_CaOH2":"CaF2",
    "H3PO4_NaOH":"Na3PO4","H3PO4_KOH":"K3PO4","H3PO4_CaOH2":"Ca3(PO4)2",
  };

  /* small self-contained equation balancer (exact-fraction Gaussian elimination) */
  function gcdI(a,b){ a=Math.abs(a); b=Math.abs(b); while(b){ [a,b]=[b,a%b]; } return a||1; }
  function lcmI(a,b){ return Math.abs(a*b)/gcdI(a,b); }
  function fracReduce(n,d){ if(d<0){n=-n;d=-d;} const g=gcdI(n,d)||1; return [n/g,d/g]; }
  function fracMul(a,b){ return fracReduce(a[0]*b[0], a[1]*b[1]); }
  function fracDivF(a,b){ return fracReduce(a[0]*b[1], a[1]*b[0]); }
  function fracSub(a,b){ return fracReduce(a[0]*b[1]-b[0]*a[1], a[1]*b[1]); }
  function balanceSimple(species){
    const elements=[...new Set(species.flatMap(s=>Object.keys(s.counts)))];
    const R=elements.length, C=species.length;
    let M=[];
    for(let r=0;r<R;r++){
      const row=[];
      for(let c=0;c<C;c++) row.push(fracReduce((species[c].counts[elements[r]]||0)*species[c].sign,1));
      M.push(row);
    }
    let pivotCols=[], pr=0;
    for(let pc=0; pc<C && pr<R; pc++){
      let sel=-1;
      for(let r=pr;r<R;r++){ if(M[r][pc][0]!==0){ sel=r; break; } }
      if(sel===-1) continue;
      [M[pr],M[sel]]=[M[sel],M[pr]];
      const piv=M[pr][pc];
      for(let c=0;c<C;c++) M[pr][c]=fracDivF(M[pr][c],piv);
      for(let r=0;r<R;r++){
        if(r===pr) continue;
        if(M[r][pc][0]!==0){ const f=M[r][pc]; for(let c=0;c<C;c++) M[r][c]=fracSub(M[r][c],fracMul(f,M[pr][c])); }
      }
      pivotCols.push(pc); pr++;
    }
    const freeCols=[]; for(let c=0;c<C;c++) if(!pivotCols.includes(c)) freeCols.push(c);
    if(freeCols.length!==1) return null;
    const freeCol=freeCols[0];
    let x=new Array(C).fill(null); x[freeCol]=[1,1];
    for(let i=0;i<pivotCols.length;i++){
      const pc=pivotCols[i], cf=M[i][freeCol];
      x[pc]=fracReduce(-cf[0]*x[freeCol][0], cf[1]*x[freeCol][1]);
    }
    let L=1; for(const f of x) L=lcmI(L,f[1]);
    let ints=x.map(f=>Math.round(f[0]*L/f[1]));
    let g=0; for(const v of ints) g=gcdI(g,v);
    ints=ints.map(v=>v/g);
    if(ints.some(v=>v<=0)) return null;
    return ints;
  }
  function computeEquation(){
    const acidF = acidSelect.value, baseF = baseSelect.value;
    if(acidF==="custom") return "HA + BOH → Salt + H₂O";
    const salt = SALT_TABLE[acidF+"_"+baseF];
    if(!salt) return null;
    const species=[
      {f:acidF, sign:1, counts:parseFormula(acidF).counts},
      {f:baseF, sign:1, counts:parseFormula(baseF.replace("CaOH2","Ca(OH)2")).counts},
      {f:salt, sign:-1, counts:parseFormula(salt).counts},
      {f:"H2O", sign:-1, counts:parseFormula("H2O").counts},
    ];
    const coeffs = balanceSimple(species);
    if(!coeffs) return null;
    const parts = species.map((s,i)=>(coeffs[i]===1?"":coeffs[i]+" ")+s.f);
    return parts[0]+" + "+parts[1]+" → "+parts[2]+" + "+parts[3];
  }
  function updateEquationDisplay(){
    const eqEl = document.getElementById("a-equation");
    const eq = computeEquation();
    eqEl.textContent = eq || t("a_eq_unavailable");
  }

  function updateFormulaLabel(){
    formulaEl.textContent = ACID_NAMES[acidSelect.value] + " + " + BASE_NAMES[baseSelect.value];
    updateEquationDisplay();
  }
  acidSelect.addEventListener("change", ()=>{
    const opt = acidSelect.selectedOptions[0];
    const m = opt.dataset.mode, pka = parseFloat(opt.dataset.pka);
    mode = m;
    [...modeGroup.children].forEach(c=>c.classList.toggle("active", c.dataset.v===mode));
    pKaField.style.display = mode==="weak" ? "block" : "none";
    if(mode==="weak") pKaEl.value = pka;
    updateFormulaLabel();
    paint();
  });
  baseSelect.addEventListener("change", ()=>{ updateFormulaLabel(); paint(); });

  let mode="weak";
  let lastPts=[], lastVeq=0, lastCurPH=7;
  modeGroup.addEventListener("click",(e)=>{
    const b=e.target.closest("button"); if(!b) return;
    mode=b.dataset.v;
    [...modeGroup.children].forEach(c=>c.classList.remove("active"));
    b.classList.add("active");
    pKaField.style.display = mode==="weak"?"block":"none";
    paint();
  });
  pKaField.style.display = mode==="weak" ? "block" : "none";
  updateFormulaLabel();

  function phAt(VbVal){
    const ca=parseFloat(Ca.value), va=parseFloat(Va.value), cb=parseFloat(Cb.value);
    const V=va+VbVal;
    if(mode==="strong"){
      const molH = ca*va - cb*VbVal;
      if(molH>1e-9) return -log10(molH/V);
      if(molH<-1e-9) return 14+log10(-molH/V);
      return 7;
    }
    const pKa=parseFloat(pKaEl.value), Ka=Math.pow(10,-pKa);
    const molHA0=ca*va, molBase=cb*VbVal;
    const eps=Math.max(molHA0*0.004, 1e-6);
    if(VbVal<=1e-9) return -log10(Math.sqrt(Ka*ca));
    if(molBase<molHA0-eps){
      const molHA=molHA0-molBase;
      return pKa+log10(molBase/molHA);
    }
    if(molBase>molHA0+eps){
      const excess=molBase-molHA0;
      return 14+log10(excess/V);
    }
    const cA=molHA0/V, Kb=1e-14/Ka, OH=Math.sqrt(Kb*cA);
    return 14+log10(OH);
  }

  /* A real titration uses ONE indicator, chosen in advance for the expected
     equivalence-point pH; that same indicator's color change (not a swap
     between different indicators) signals the endpoint. */
  const INDICATORS = [
    {nameKey:"ind_name_methyl_orange", range:[3.1,4.4], colorLow:[226,87,76], colorHigh:[245,199,126], stateLow:"ind_state_red", stateHigh:"ind_state_yellow"},
    {nameKey:"ind_name_bromothymol",   range:[6.0,7.6], colorLow:[232,217,107], colorHigh:[111,182,217], stateLow:"ind_state_yellow", stateHigh:"ind_state_blue"},
    {nameKey:"ind_name_phenolphthalein", range:[8.2,10.0], colorLow:[240,233,217], colorHigh:[227,127,192], stateLow:"ind_state_colorless", stateHigh:"ind_state_pink"},
  ];
  function pickIndicator(equivPH){
    let best=INDICATORS[0], bestDist=Infinity;
    INDICATORS.forEach(ind=>{
      const inRange = equivPH>=ind.range[0] && equivPH<=ind.range[1];
      const dist = inRange? 0 : Math.min(Math.abs(equivPH-ind.range[0]), Math.abs(equivPH-ind.range[1]));
      if(dist<bestDist){ bestDist=dist; best=ind; }
    });
    return best;
  }
  function indicatorColorAt(ind, pH){
    let frac;
    if(pH<=ind.range[0]) frac=0;
    else if(pH>=ind.range[1]) frac=1;
    else frac=(pH-ind.range[0])/(ind.range[1]-ind.range[0]);
    const c0=ind.colorLow, c1=ind.colorHigh;
    const r=Math.round(c0[0]+(c1[0]-c0[0])*frac);
    const g=Math.round(c0[1]+(c1[1]-c0[1])*frac);
    const b=Math.round(c0[2]+(c1[2]-c0[2])*frac);
    return `rgb(${r},${g},${b})`;
  }
  function indicatorStateAt(ind, pH){
    if(pH<ind.range[0]) return t(ind.stateLow);
    if(pH>ind.range[1]) return t(ind.stateHigh);
    return t("ind_state_transitioning");
  }

  function paint(){
    const ca=parseFloat(Ca.value), va=parseFloat(Va.value), cb=parseFloat(Cb.value), pKa=parseFloat(pKaEl.value);
    Cav.textContent=ca.toFixed(2)+" M"; Vav.textContent=va.toFixed(0)+" mL"; Cbv.textContent=cb.toFixed(2)+" M"; pKav.textContent=pKa.toFixed(2);
    const Veq = (ca*va)/cb;
    Vb.max = (Veq*2).toFixed(2);
    const vb=parseFloat(Vb.value);
    Vbv.textContent = vb.toFixed(1)+" mL";
    const N=100, pts=[];
    for(let i=0;i<=N;i++){
      const v=Veq*2*i/N;
      pts.push({x:v, y:clamp(phAt(v),0,14)});
    }
    const curPH=clamp(phAt(vb),0,14);
    // indicator is chosen once from the equivalence-point pH (fixed for this
    // titration setup) -- NOT from the current slider position -- exactly
    // like picking an indicator in advance of a real titration.
    const equivPH = clamp(phAt(Veq),0,14);
    const indicator = pickIndicator(equivPH);
    lastPts = pts; lastVeq = Veq; lastVb = vb; lastCurPH = curPH;
    drawLineChart(chart, {points:pts, xDomain:[0,Veq*2], yDomain:[0,14], xLabel:t("axis_volume_ml"), yLabel:t("axis_ph"),
      color:"#2B6FB8",
      markers:[{x:Veq,color:"#C9791A",label:"equiv."},{x:vb,y:curPH,color:"#B8452B",label:""}]});
    pHNow.textContent = curPH.toFixed(2);
    veqEl.textContent = Veq.toFixed(1)+" mL";
    indEl.textContent = t(indicator.nameKey)+" — "+indicatorStateAt(indicator, curPH);

    // visuals: the flask shows THIS SAME indicator's actual color at the
    // current pH, so the flask and the "Indicator" readout always agree.
    const liquidColor = indicatorColorAt(indicator, curPH);
    flaskLiquid.setAttribute("fill", liquidColor);
    // flask liquid rises within the bulb (y=220..310) as titrant is added --
    // starts holding just the original acid, grows toward the burette's full
    // delivered volume by the time titration reaches ~2x the equivalence point
    const flaskBottomY = 310, maxFlaskLiquidHeight = 88;
    const fillFrac = clamp(0.28 + (vb/(Veq*2))*0.6, 0.28, 0.88);
    const flaskHeight = fillFrac*maxFlaskLiquidHeight;
    flaskLiquid.setAttribute("y", flaskBottomY-flaskHeight);
    flaskLiquid.setAttribute("height", flaskHeight);

    // burette liquid drains from the same fixed tip (y=130) as titrant is
    // delivered, so flask volume visibly increases exactly as burette volume decreases
    const buretteBottomY = 130, maxBuretteLiquidHeight = 90;
    const buretteFrac = clamp(1-vb/(Veq*2),0,1);
    const buretteHeight = buretteFrac*maxBuretteLiquidHeight;
    burette.setAttribute("height", buretteHeight);
    burette.setAttribute("y", buretteBottomY-buretteHeight);
  }

  let lastVb = 0;
  Vb.addEventListener("input", ()=>{
    const now=parseFloat(Vb.value);
    if(now>lastVb){ drop.classList.remove("falling"); void drop.offsetWidth; drop.classList.add("falling"); }
    lastVb=now;
    paint();
  });
  [Ca,Va,Cb,pKaEl].forEach(el=>el.addEventListener("input", paint));

  document.getElementById("a-export-csv").addEventListener("click", ()=>{
    const summary=[
      ["Experiment","Acid-Base Titration"],
      ["Acid", ACID_NAMES[acidSelect.value]], ["Base", BASE_NAMES[baseSelect.value]],
      ["Mode", mode], ["Acid conc (M)", Ca.value], ["Acid volume (mL)", Va.value], ["Base conc (M)", Cb.value],
      ["Equivalence volume (mL)", fmt(lastVeq,2)], ["Titer / volume delivered (mL)", fmt(lastVb,2)],
      ["pH at last recorded volume", fmt(lastCurPH,2)],
      [],
      ["volume_base_mL","pH"],
    ];
    const rows=summary.concat(lastPts.map(p=>[p.x.toFixed(3), p.y.toFixed(3)]));
    downloadCSV("titration_curve.csv", rows);
  });
  document.getElementById("a-export-png").addEventListener("click", ()=>{
    downloadCanvasPNG(chart, "titration_curve.png");
  });
  document.getElementById("a-log").addEventListener("click", ()=>{
    logExperiment("Acid–Base", ACID_NAMES[acidSelect.value]+" + "+BASE_NAMES[baseSelect.value], {
      mode, "Ca(M)":Ca.value, "Va(mL)":Va.value, "Cb(M)":Cb.value, "Vb(mL)":Vb.value
    }, {
      "pH_now": fmt(lastCurPH,2), "equivalence_vol_mL": fmt(lastVeq,1)
    });
  });

  let titrationTimer = null;
  const runBtn = document.getElementById("a-run");
  const titerEl = document.getElementById("a-titer");
  const endpointNote = document.getElementById("a-endpoint-note");

  function runTitration(){
    if(titrationTimer){ clearInterval(titrationTimer); titrationTimer=null; }
    const ca=parseFloat(Ca.value), va=parseFloat(Va.value), cb=parseFloat(Cb.value);
    const Veq = (ca*va)/cb;
    Vb.value = 0; Vb.dispatchEvent(new Event("input"));
    endpointNote.style.display = "none";
    titerEl.textContent = "—";
    runBtn.disabled = true;
    runBtn.textContent = t("a_running");
    const steps = 70;
    let i = 0;
    titrationTimer = setInterval(()=>{
      i++;
      const v = Math.min(Veq, (Veq*i)/steps);
      Vb.value = v;
      Vb.dispatchEvent(new Event("input"));
      if(v>=Veq){
        clearInterval(titrationTimer);
        titrationTimer = null;
        runBtn.disabled = false;
        runBtn.textContent = t("a_run_titration");
        titerEl.textContent = Veq.toFixed(2)+" mL";
        endpointNote.style.display = "block";
        endpointNote.textContent = t("a_endpoint_detected");
        showToast(t("toast_endpoint"), "success");
      }
    }, 60);
  }
  runBtn.addEventListener("click", runTitration);

  updateEquationDisplay();
  paint();
  onLanguageChange(()=>{ updateEquationDisplay(); paint(); });
})();

/* ============ THERMOCHEMISTRY (calorimetry: heat/cool selected substances) ============ */
(function(){
  const substancesList=document.getElementById("t-substances-list");
  const TiSlider=document.getElementById("t-Ti"), TiVal=document.getElementById("t-Ti-val");
  const TfSlider=document.getElementById("t-Tf"), TfVal=document.getElementById("t-Tf-val");
  const qEl=document.getElementById("t-q"), dHmEl=document.getElementById("t-dHm"), classEl=document.getElementById("t-class");
  const equationEl=document.getElementById("t-equation");
  const resultsTable=document.getElementById("t-results-table");
  const mercury=document.getElementById("t-mercury");
  const flame=document.getElementById("t-flame"), ice=document.getElementById("t-ice");
  const flaskLiquid=document.getElementById("t-flask-liquid");
  const chart=document.getElementById("t-chart");
  const formulaEl=document.getElementById("t-formula-suffix");

  TiSlider.addEventListener("input", ()=> TiVal.textContent = TiSlider.value+" °C");
  TfSlider.addEventListener("input", ()=> TfVal.textContent = TfSlider.value+" °C");

  // specific heat lookup (J/g·°C) for common substances; unlisted formulas fall back to water's value
  const SPECIFIC_HEATS = {
    H2O:4.184, C2H5OH:2.44, CH3OH:2.51, Al:0.897, Fe:0.449, Cu:0.385, Zn:0.388,
    Pb:0.129, Au:0.129, Ag:0.235, NaCl:0.864, NaOH:1.49, CaCO3:0.82, C6H12O6:1.24,
    Ni:0.444, Sn:0.227, Mg:1.023, CuSO4:0.98, KCl:0.690, Na2CO3:1.04,
  };
  const DEFAULT_C = 4.184;

  function makeSubstanceRow(formula, mass){
    const row=document.createElement("div");
    row.className="reaction-row-block";
    row.innerHTML = `
      <div class="reaction-row">
        <input type="text" class="formula-cell" list="known-formulas" value="${formula||''}" placeholder="e.g. H2O, Fe, C2H5OH">
        <input type="number" class="mass-cell" value="${mass!==undefined?mass:100}" min="0" step="1" placeholder="${t('c_mass_placeholder')}">
        <button class="row-remove" title="remove">✕</button>
      </div>
      <div style="font-size:10.5px;color:var(--ink-soft);margin-top:2px;" class="c-lookup-note"></div>
    `;
    const formulaInput = row.querySelector(".formula-cell");
    const noteEl = row.querySelector(".c-lookup-note");
    function updateNote(){
      const f = formulaInput.value.trim();
      if(!f){ noteEl.textContent=""; return; }
      if(SPECIFIC_HEATS[f]!==undefined){
        noteEl.textContent = t("t_c_known").replace("{c}", SPECIFIC_HEATS[f]);
      } else {
        noteEl.textContent = t("t_c_default").replace("{c}", DEFAULT_C);
      }
    }
    formulaInput.addEventListener("input", updateNote);
    updateNote();
    row.querySelector(".row-remove").addEventListener("click", ()=>{
      if(substancesList.children.length>1) row.remove();
    });
    return row;
  }
  document.getElementById("t-add-substance").addEventListener("click", ()=>{
    substancesList.appendChild(makeSubstanceRow("",50));
  });
  substancesList.appendChild(makeSubstanceRow("H2O",100));

  function readSubstances(){
    return [...substancesList.children].map(row=>{
      const formula = row.querySelector(".formula-cell").value.trim();
      const mass = parseFloat(row.querySelector(".mass-cell").value)||0;
      const c = SPECIFIC_HEATS[formula] !== undefined ? SPECIFIC_HEATS[formula] : DEFAULT_C;
      return {formula, mass, c, known: SPECIFIC_HEATS[formula]!==undefined};
    }).filter(s=>s.formula);
  }

  let lastResult=null;

  function solve(){
    const substances = readSubstances();
    if(!substances.length) return;
    const Ti = parseFloat(TiSlider.value), Tf = parseFloat(TfSlider.value);
    const dT = Tf-Ti;
    const exo = dT<0; // cooling releases heat to the surroundings from the substance's perspective is ambiguous;
    // here "exothermic-looking" visual = the substance is losing heat (being cooled), "endothermic-looking" = being heated
    const heating = dT>0;

    let totalQ=0, totalMass=0;
    const rows = substances.map(s=>{
      const q = s.mass*s.c*dT;
      totalQ += q;
      totalMass += s.mass;
      return {...s, q};
    });
    const qPerGram = totalQ/(totalMass||1);

    formulaEl.textContent = substances.map(s=>s.formula).join(" + ");
    qEl.textContent = fmt(totalQ,1)+" J";
    dHmEl.textContent = fmt(qPerGram,2)+" J/g";
    classEl.textContent = heating? t("t_absorbed") : t("t_released");
    classEl.style.color = heating? "var(--red)" : PHOSPHOR;

    const eqLines = rows.map(r=> `q(${r.formula}) = ${r.mass}g × ${r.c}J/g°C × ${dT.toFixed(1)}°C = ${fmt(r.q,1)}J`);
    equationEl.innerHTML = eqLines.join("<br>") + `<br><b>${t("t_total")}: ${fmt(totalQ,1)} J</b>`;

    resultsTable.innerHTML = `
      <tr><th>${t("c_th_formula")}</th><th>${t("t_th_mass")}</th><th>${t("t_th_c")}</th><th>${t("t_th_q")}</th></tr>
      ${rows.map(r=>`<tr><td>${r.formula}</td><td>${r.mass} g</td><td>${r.c}${r.known?'':' *'}</td><td>${fmt(r.q,1)} J</td></tr>`).join("")}
    `;

    // thermometer: map Tf across -20..2000 to mercury height (bulb fixed near y=148, stem rises toward y=8)
    const frac = clamp((Tf+20)/2020,0,1);
    const h = 10+frac*130;
    mercury.setAttribute("y", 148-h);
    mercury.setAttribute("height", h);
    flame.style.display = heating? "block":"none";
    ice.style.display = heating? "none":"block";
    if(flaskLiquid){
      flaskLiquid.setAttribute("fill", heating ? "#D9695F" : "#63C7D6");
    }

    // temperature ramp chart (illustrative linear progression from Ti to Tf)
    const N=40, pts=[];
    for(let i=0;i<=N;i++) pts.push({x:i/N*100, y: Ti + (Tf-Ti)*(i/N)});
    drawLineChart(chart, {points:pts, xDomain:[0,100], yDomain:[Math.min(Ti,Tf,-20), Math.max(Ti,Tf,200)], xLabel:t("t_axis_progress"), yLabel:t("t_axis_temp"), color: heating? "#E8695F" : "#63C7D6"});

    lastResult = {substances: rows, Ti, Tf, dT, totalQ, qPerGram, heating};
    showToast(t("toast_reaction_run"), "success");
  }

  document.getElementById("t-solve").addEventListener("click", solve);

  document.getElementById("t-export-csv").addEventListener("click", ()=>{
    if(!lastResult) solve();
    if(!lastResult) return;
    const rows=[
      ["Experiment","Calorimetry"],
      ["Initial temperature (°C)", lastResult.Ti], ["Final temperature (°C)", lastResult.Tf], ["ΔT (°C)", fmt(lastResult.dT,1)],
      ["Classification", lastResult.heating? "Heat absorbed (heating)":"Heat released (cooling)"],
      ["Total q (J)", lastResult.totalQ.toFixed(2)], ["q per gram (J/g)", lastResult.qPerGram.toFixed(3)],
      [],
      ["formula","mass_g","specific_heat_J_gC","q_J"],
    ];
    lastResult.substances.forEach(r=> rows.push([r.formula, r.mass, r.c, r.q.toFixed(2)]));
    rows.push(["TOTAL","","",lastResult.totalQ.toFixed(2)]);
    downloadCSV("calorimetry_results.csv", rows);
  });
  document.getElementById("t-export-png").addEventListener("click", ()=>{
    downloadCanvasPNG(chart, "calorimetry_temperature_profile.png");
  });
  document.getElementById("t-log").addEventListener("click", ()=>{
    if(!lastResult) solve();
    if(!lastResult) return;
    const inputs={}, results={};
    lastResult.substances.forEach(r=> inputs[r.formula+"_g"]=r.mass);
    inputs["Ti_C"]=lastResult.Ti; inputs["Tf_C"]=lastResult.Tf;
    results["q_J"]=lastResult.totalQ.toFixed(1);
    results["q_per_g_Jg"]=lastResult.qPerGram.toFixed(2);
    results["classification"]= lastResult.heating? "heat absorbed":"heat released";
    logExperiment("Thermochemistry", lastResult.substances.map(s=>s.formula).join(" + "), inputs, results);
  });

  onLanguageChange(()=>{ if(lastResult) solve(); });
})();

/* ============ CUSTOM REACTION (equation balancer + stoichiometry) ============ */
(function(){
  function gcdI(a,b){ a=Math.abs(a); b=Math.abs(b); while(b){ [a,b]=[b,a%b]; } return a||1; }
  function lcmI(a,b){ return Math.abs(a*b)/gcdI(a,b); }
  function fracReduce(n,d){ if(d<0){n=-n;d=-d;} const g=gcdI(n,d)||1; return [n/g,d/g]; }
  function fracMul(a,b){ return fracReduce(a[0]*b[0], a[1]*b[1]); }
  function fracDivF(a,b){ return fracReduce(a[0]*b[1], a[1]*b[0]); }
  function fracSub(a,b){ return fracReduce(a[0]*b[1]-b[0]*a[1], a[1]*b[1]); }
  function fracIsZero(a){ return a[0]===0; }

  function balanceEquation(elements, species){
    const R=elements.length, C=species.length;
    let M=[];
    for(let r=0;r<R;r++){
      const row=[];
      for(let c=0;c<C;c++){
        const cnt = species[c].counts[elements[r]]||0;
        row.push(fracReduce(cnt*species[c].sign,1));
      }
      M.push(row);
    }
    let pivotCols=[], pr=0;
    for(let pc=0; pc<C && pr<R; pc++){
      let sel=-1;
      for(let r=pr;r<R;r++){ if(!fracIsZero(M[r][pc])){ sel=r; break; } }
      if(sel===-1) continue;
      [M[pr],M[sel]]=[M[sel],M[pr]];
      const piv=M[pr][pc];
      for(let c=0;c<C;c++) M[pr][c]=fracDivF(M[pr][c],piv);
      for(let r=0;r<R;r++){
        if(r===pr) continue;
        if(!fracIsZero(M[r][pc])){
          const factor=M[r][pc];
          for(let c=0;c<C;c++) M[r][c]=fracSub(M[r][c], fracMul(factor, M[pr][c]));
        }
      }
      pivotCols.push(pc); pr++;
    }
    const freeCols=[];
    for(let c=0;c<C;c++) if(!pivotCols.includes(c)) freeCols.push(c);
    if(freeCols.length!==1) return {ok:false, freeCount:freeCols.length};
    const freeCol=freeCols[0];
    let x=new Array(C).fill(null);
    x[freeCol]=[1,1];
    for(let i=0;i<pivotCols.length;i++){
      const pc=pivotCols[i];
      const coeffFree=M[i][freeCol];
      x[pc]=fracReduce(-coeffFree[0]*x[freeCol][0], coeffFree[1]*x[freeCol][1]);
    }
    let L=1;
    for(const f of x) L=lcmI(L,f[1]);
    let ints=x.map(f=> Math.round(f[0]*L/f[1]));
    let g=0;
    for(const v of ints) g=gcdI(g,v);
    ints=ints.map(v=> v/g);
    if(ints.some(v=>v<=0)) return {ok:false, reason:"nonpositive"};
    return {ok:true, coeffs:ints};
  }

  const reactantsList=document.getElementById("c-reactants-list");
  const productsList=document.getElementById("c-products-list");
  const equationEl=document.getElementById("c-equation");
  const errorEl=document.getElementById("c-error");
  const resultsTable=document.getElementById("c-results-table");
  const massBalanceEl=document.getElementById("c-mass-balance");
  const tempSlider=document.getElementById("c-temp"), tempVal=document.getElementById("c-temp-val");
  const timeSlider=document.getElementById("c-time"), timeVal=document.getElementById("c-time-val");
  const predictNote=document.getElementById("c-predict-note");
  const aiPredictBtn=document.getElementById("c-ai-predict");
  const kineticsChart=document.getElementById("c-kinetics-chart");
  const kineticsSummary=document.getElementById("c-kinetics-summary");
  const equilibriumSummary=document.getElementById("c-equilibrium-summary");
  const vesselLiquid=document.getElementById("c-vessel-liquid");
  const bubbleHost=document.getElementById("c-bubble-host");

  function spawnVesselBubble(){
    if(!bubbleHost) return;
    const b=document.createElement("div");
    b.className="bubble";
    b.style.left=(60+Math.random()*30)+"px";
    bubbleHost.appendChild(b);
    b.addEventListener("animationend", ()=> b.remove());
  }
  function lerpColor(hexA, hexB, frac){
    const a=[1,3,5].map(i=>parseInt(hexA.slice(i,i+2),16));
    const b=[1,3,5].map(i=>parseInt(hexB.slice(i,i+2),16));
    const c=a.map((v,i)=>Math.round(v+(b[i]-v)*frac));
    return "#"+c.map(v=>v.toString(16).padStart(2,"0")).join("");
  }

  tempSlider.addEventListener("input", ()=> tempVal.textContent = tempSlider.value+" °C");
  timeSlider.addEventListener("input", ()=> timeVal.textContent = timeSlider.value+" s");

  // populate the shared datalist for autocomplete
  const datalist=document.getElementById("known-formulas");
  function refreshDatalist(){
    datalist.innerHTML = "";
    allReagents().forEach(r=>{
      const opt=document.createElement("option");
      opt.value=reagentDisplay(r);
      datalist.appendChild(opt);
    });
  }
  refreshDatalist();
  onReagentBankChange(refreshDatalist);

  /* ---- reactant rows (phase-aware: solid=mass, solution=volume x concentration) ---- */
  const ACIDS = new Set(["HCl","HNO3","H2SO4","CH3COOH","HF","H3PO4"]);
  const BASES = new Set(["NaOH","KOH","CaOH2","Ca(OH)2","NH3"]);
  function guessPhase(formula){
    return (ACIDS.has(formula) || BASES.has(formula)) ? "solution" : "solid";
  }
  function makeReactantRow(formula, phase, mass, vol, conc){
    phase = phase || guessPhase(formula||"");
    const row=document.createElement("div");
    row.className="reaction-row-block";
    row.innerHTML = `
      <div class="reaction-row">
        <input type="text" class="formula-cell" list="known-formulas" value="${formula||''}" placeholder="e.g. Mg, HCl">
        <select class="phase-cell">
          <option value="solid" ${phase==="solid"?"selected":""}>${t("c_phase_solid")}</option>
          <option value="solution" ${phase==="solution"?"selected":""}>${t("c_phase_solution")}</option>
        </select>
        <button class="row-remove" title="remove">✕</button>
      </div>
      <div class="reaction-row qty-solid" style="display:${phase==="solid"?"flex":"none"};margin-top:4px;">
        <input type="number" class="mass-cell" value="${mass!==undefined?mass:10}" min="0" step="0.1" placeholder="${t('c_mass_placeholder')}">
      </div>
      <div class="reaction-row qty-solution" style="display:${phase==="solution"?"flex":"none"};margin-top:4px;">
        <input type="number" class="vol-cell" value="${vol!==undefined?vol:50}" min="0" step="1" placeholder="${t('c_vol_placeholder')}">
        <input type="number" class="conc-cell" value="${conc!==undefined?conc:1.0}" min="0" step="0.01" placeholder="${t('c_conc_placeholder')}">
      </div>
    `;
    const formulaInput = row.querySelector(".formula-cell");
    const phaseSelect = row.querySelector(".phase-cell");
    function applyPhaseVisibility(){
      const solid = phaseSelect.value==="solid";
      row.querySelector(".qty-solid").style.display = solid?"flex":"none";
      row.querySelector(".qty-solution").style.display = solid?"none":"flex";
    }
    let userSetPhase = false;
    formulaInput.addEventListener("input", ()=>{
      if(userSetPhase) return; // respect an explicit manual phase choice
      phaseSelect.value = guessPhase(formulaInput.value.trim());
      applyPhaseVisibility();
    });
    phaseSelect.addEventListener("change", ()=>{
      userSetPhase = true;
      applyPhaseVisibility();
    });
    row.querySelector(".row-remove").addEventListener("click", ()=>{
      if(reactantsList.children.length>1) row.remove();
    });
    return row;
  }
  document.getElementById("c-add-reactant").addEventListener("click", ()=>{
    reactantsList.appendChild(makeReactantRow("","solid",10));
  });

  // seed with a default example: magnesium + hydrochloric acid
  reactantsList.appendChild(makeReactantRow("Mg","solid",2.4));
  reactantsList.appendChild(makeReactantRow("HCl","solution",undefined,50,1.0));

  function readReactants(){
    return [...reactantsList.children].map(block=>{
      const formula = block.querySelector(".formula-cell").value.trim();
      const phase = block.querySelector(".phase-cell").value;
      let moles=0, massG=null;
      if(phase==="solid"){
        massG = parseFloat(block.querySelector(".mass-cell").value)||0;
      } else {
        const vol = parseFloat(block.querySelector(".vol-cell").value)||0;
        const conc = parseFloat(block.querySelector(".conc-cell").value)||0;
        moles = (vol/1000)*conc;
      }
      return {formula, phase, massG, molesGiven: phase==="solution"?moles:null};
    }).filter(r=> r.formula);
  }

  /* ---- automatic product prediction (rule-based reaction-type recognition) ---- */
  const METALS = new Set(["Na","K","Mg","Ca","Zn","Fe","Al","Li","Ba"]);
  const DECOMPOSITION = {
    "H2O2":["H2O","O2"], "CaCO3":["CaO","CO2"], "KClO3":["KCl","O2"],
    "NaHCO3":["Na2CO3","H2O","CO2"], "NH4NO3":["N2O","H2O"], "CaOH2":["CaO","H2O"], "Ca(OH)2":["CaO","H2O"],
    "C6H12O6":["C2H5OH","CO2"], // alcoholic fermentation of glucose
  };
  const SALT_FROM_ACID_BASE = {
    "HCl_NaOH":"NaCl","HCl_KOH":"KCl","HCl_CaOH2":"CaCl2","HCl_Ca(OH)2":"CaCl2","HCl_NH3":"NH4Cl",
    "HNO3_NaOH":"NaNO3","HNO3_KOH":"KNO3","HNO3_NH3":"NH4NO3",
    "H2SO4_NaOH":"Na2SO4","H2SO4_KOH":"K2SO4","H2SO4_CaOH2":"CaSO4","H2SO4_Ca(OH)2":"CaSO4","H2SO4_NH3":"(NH4)2SO4",
    "CH3COOH_NaOH":"CH3COONa","CH3COOH_KOH":"CH3COOK",
    "HF_NaOH":"NaF","H3PO4_NaOH":"Na3PO4",
  };
  const SALT_FROM_METAL_ACID = {
    "Mg_HCl":"MgCl2","Zn_HCl":"ZnCl2","Fe_HCl":"FeCl2","Na_HCl":"NaCl","Ca_HCl":"CaCl2","Al_HCl":"AlCl3","Li_HCl":"LiCl",
    "Mg_H2SO4":"MgSO4","Zn_H2SO4":"ZnSO4","Fe_H2SO4":"FeSO4","Al_H2SO4":"Al2(SO4)3",
    "Mg_HNO3":"Mg(NO3)2","Zn_HNO3":"Zn(NO3)2","Ca_HNO3":"Ca(NO3)2",
  };
  // organic: carboxylic acids + alcohols -> ester + water (Fischer esterification)
  const CARBOXYLIC_ACIDS = new Set(["CH3COOH","HCOOH","C2H5COOH","C3H7COOH","C6H5COOH"]);
  const ALCOHOLS = new Set(["CH3OH","C2H5OH","C3H7OH","C4H9OH"]);
  const ESTER_FROM_ACID_ALCOHOL = {
    "CH3COOH_CH3OH":"CH3COOCH3", "CH3COOH_C2H5OH":"CH3COOC2H5", "CH3COOH_C3H7OH":"CH3COOC3H7", "CH3COOH_C4H9OH":"CH3COOC4H9",
    "HCOOH_CH3OH":"HCOOCH3", "HCOOH_C2H5OH":"HCOOC2H5", "HCOOH_C3H7OH":"HCOOC3H7",
    "C2H5COOH_CH3OH":"C2H5COOCH3", "C2H5COOH_C2H5OH":"C2H5COOC2H5",
    "C3H7COOH_CH3OH":"C3H7COOCH3", "C3H7COOH_C2H5OH":"C3H7COOC2H5",
    "C6H5COOH_CH3OH":"C6H5COOCH3", "C6H5COOH_C2H5OH":"C6H5COOC2H5",
  };
  // organic: ester + strong base -> carboxylate salt + alcohol (saponification) --
  // built programmatically from the same acid/alcohol pairs above, for NaOH and KOH
  const ESTERS = new Set(Object.values(ESTER_FROM_ACID_ALCOHOL));
  const SAPONIFICATION = {};
  Object.entries(ESTER_FROM_ACID_ALCOHOL).forEach(([key, ester])=>{
    const [acid, alcohol] = key.split("_");
    const carboxylate = acid.replace(/OOH$/,"OO"); // CH3COOH -> CH3COO, HCOOH -> HCOO, etc.
    SAPONIFICATION[ester+"_NaOH"] = [carboxylate+"Na", alcohol];
    SAPONIFICATION[ester+"_KOH"] = [carboxylate+"K", alcohol];
  });
  // organic: alkenes + small molecules -> addition products
  const ALKENES = new Set(["C2H4","C3H6","C4H8"]);
  const ALKENE_ADDITION = {
    "C2H4_H2":"C2H6", "C2H4_Cl2":"C2H4Cl2", "C2H4_Br2":"C2H4Br2", "C2H4_H2O":"C2H5OH",
    "C3H6_H2":"C3H8", "C3H6_Cl2":"C3H6Cl2", "C3H6_Br2":"C3H6Br2", "C3H6_H2O":"C3H7OH",
    "C4H8_H2":"C4H10", "C4H8_Cl2":"C4H8Cl2", "C4H8_Br2":"C4H8Br2", "C4H8_H2O":"C4H9OH",
  };
  // organic: alkynes fully saturate with 2 equivalents of H2/Cl2/Br2
  const ALKYNES = new Set(["C2H2","C3H4"]);
  const ALKYNE_ADDITION = {
    "C2H2_H2":"C2H6", "C2H2_Cl2":"C2H2Cl4", "C2H2_Br2":"C2H2Br4",
    "C3H4_H2":"C3H8", "C3H4_Cl2":"C3H4Cl4", "C3H4_Br2":"C3H4Br4",
  };
  // organic: alkane + halogen -> haloalkane + hydrogen halide (radical mono-substitution, simplified)
  const ALKANES = new Set(["CH4","C2H6","C3H8"]);
  const ALKANE_HALOGENATION = {
    "CH4_Cl2":["CH3Cl","HCl"], "CH4_Br2":["CH3Br","HBr"],
    "C2H6_Cl2":["C2H5Cl","HCl"], "C2H6_Br2":["C2H5Br","HBr"],
    "C3H8_Cl2":["C3H7Cl","HCl"], "C3H8_Br2":["C3H7Br","HBr"],
  };
  // organic: primary alcohol + oxidizer -> carboxylic acid + the reduced
  // metal byproduct (K and Mn/Cr atoms can't just disappear -- omitting them
  // makes the equation unbalanceable, so they're included as real products)
  const OXIDIZERS = new Set(["KMnO4","K2Cr2O7"]);
  const ALCOHOL_OXIDATION = {
    "CH3OH_KMnO4":["HCOOH","MnO2","KOH","H2O"], "C2H5OH_KMnO4":["CH3COOH","MnO2","KOH","H2O"],
    "C3H7OH_KMnO4":["C2H5COOH","MnO2","KOH","H2O"], "C4H9OH_KMnO4":["C3H7COOH","MnO2","KOH","H2O"],
    "CH3OH_K2Cr2O7":["HCOOH","Cr2O3","KOH","H2O"], "C2H5OH_K2Cr2O7":["CH3COOH","Cr2O3","KOH","H2O"],
    "C3H7OH_K2Cr2O7":["C2H5COOH","Cr2O3","KOH","H2O"], "C4H9OH_K2Cr2O7":["C3H7COOH","Cr2O3","KOH","H2O"],
  };
  // organic: amine (a weak organic base) + acid -> alkylammonium salt
  const AMINES = new Set(["CH3NH2","C2H5NH2"]);
  const AMINE_ACID_SALT = {
    "CH3NH2_HCl":"CH3NH3Cl", "C2H5NH2_HCl":"C2H5NH3Cl",
    "CH3NH2_HNO3":"CH3NH3NO3", "C2H5NH2_HNO3":"C2H5NH3NO3",
  };
  // specific known multi-compound reactions that don't fit a generic archetype rule
  const KNOWN_COMPOUND_REACTIONS = {
    "CO2,H2O": {type:"photosynthesis", products:["C6H12O6","O2"]},
  };
  function isPureElementFormula(f){
    const p = parseFormula(f);
    return p.valid && Object.keys(p.counts).length===1;
  }
  function predictProducts(reactants){
    const formulas = reactants.map(r=>r.formula);
    const knownKey = [...formulas].sort().join(",");
    if(KNOWN_COMPOUND_REACTIONS[knownKey]) return KNOWN_COMPOUND_REACTIONS[knownKey];
    if(formulas.length===1 && DECOMPOSITION[formulas[0]]){
      return {type:"decomposition", products: DECOMPOSITION[formulas[0]]};
    }
    if(formulas.length===2 && formulas.includes("O2")){
      const other = formulas.find(f=>f!=="O2");
      const parsed = parseFormula(other);
      const elems = Object.keys(parsed.counts||{});
      if(parsed.valid && elems.length && elems.every(e=>["C","H","O"].includes(e)) && elems.includes("C") && elems.includes("H")){
        return {type:"combustion", products:["CO2","H2O"]};
      }
    }
    if(formulas.length===2){
      const acid = formulas.find(f=>ACIDS.has(f));
      const base = formulas.find(f=>BASES.has(f));
      if(acid && base){
        const salt = SALT_FROM_ACID_BASE[acid+"_"+base];
        if(salt) return {type:"neutralization", products:[salt,"H2O"]};
      }
      const metal = formulas.find(f=>METALS.has(f));
      const acid2 = formulas.find(f=>ACIDS.has(f));
      if(metal && acid2){
        const salt = SALT_FROM_METAL_ACID[metal+"_"+acid2];
        if(salt) return {type:"metal_acid", products:[salt,"H2"]};
      }
      const carbAcid = formulas.find(f=>CARBOXYLIC_ACIDS.has(f));
      const alcohol = formulas.find(f=>ALCOHOLS.has(f));
      if(carbAcid && alcohol){
        const ester = ESTER_FROM_ACID_ALCOHOL[carbAcid+"_"+alcohol];
        if(ester) return {type:"esterification", products:[ester,"H2O"]};
      }
      const ester2 = formulas.find(f=>ESTERS.has(f));
      const base2 = formulas.find(f=>BASES.has(f) && f!=="NH3");
      if(ester2 && base2){
        const products = SAPONIFICATION[ester2+"_"+base2];
        if(products) return {type:"saponification", products};
      }
      const alkyne = formulas.find(f=>ALKYNES.has(f));
      const alkynePartner = formulas.find(f=>["H2","Cl2","Br2"].includes(f));
      if(alkyne && alkynePartner){
        const product = ALKYNE_ADDITION[alkyne+"_"+alkynePartner];
        if(product) return {type:"alkyne_addition", products:[product]};
      }
      const alkene = formulas.find(f=>ALKENES.has(f));
      const partner = formulas.find(f=>["H2","Cl2","Br2","H2O"].includes(f));
      if(alkene && partner){
        const product = ALKENE_ADDITION[alkene+"_"+partner];
        if(product) return {type:"alkene_addition", products:[product]};
      }
      const alkane = formulas.find(f=>ALKANES.has(f));
      const halogen = formulas.find(f=>["Cl2","Br2"].includes(f));
      if(alkane && halogen){
        const products = ALKANE_HALOGENATION[alkane+"_"+halogen];
        if(products) return {type:"alkane_halogenation", products};
      }
      const oxAlcohol = formulas.find(f=>ALCOHOLS.has(f));
      const oxidizer = formulas.find(f=>OXIDIZERS.has(f));
      if(oxAlcohol && oxidizer){
        const products = ALCOHOL_OXIDATION[oxAlcohol+"_"+oxidizer];
        if(products) return {type:"alcohol_oxidation", products};
      }
      const amine = formulas.find(f=>AMINES.has(f));
      const amineAcid = formulas.find(f=>ACIDS.has(f));
      if(amine && amineAcid){
        const salt = AMINE_ACID_SALT[amine+"_"+amineAcid];
        if(salt) return {type:"amine_neutralization", products:[salt]};
      }
      if(formulas.every(isPureElementFormula)){
        const key = [...new Set(formulas.flatMap(f=>Object.keys(parseFormula(f).counts)))].sort().join(",");
        const sugg = COMPOUND_SUGGESTIONS[key];
        if(sugg && sugg.length) return {type:"synthesis", products:[sugg[sugg.length-1].f]};
      }
    }
    return {type:"unknown", products:[]};
  }

  let predictedProducts = [];
  let reactionType = "unknown";

  function renderProducts(){
    productsList.innerHTML = predictedProducts.map((f,i)=>`
      <div class="reaction-row" data-i="${i}">
        <input type="text" class="formula-cell product-formula" value="${f}">
        <button class="row-remove" title="remove">✕</button>
      </div>
    `).join("") || `<div style="font-size:12px;color:var(--ink-soft);">${t("c_no_products_yet")}</div>`;
    productsList.querySelectorAll(".product-formula").forEach((inp,i)=>{
      inp.addEventListener("input", ()=>{ predictedProducts[i]=inp.value.trim(); });
    });
    productsList.querySelectorAll(".row-remove").forEach((btn,i)=>{
      btn.addEventListener("click", ()=>{ predictedProducts.splice(i,1); renderProducts(); });
    });
  }
  renderProducts();

  const REACTION_TYPE_LABEL_KEY = {
    combustion:"c_type_combustion", neutralization:"c_type_neutralization", metal_acid:"c_type_metal_acid",
    decomposition:"c_type_decomposition", synthesis:"c_type_synthesis", unknown:"c_type_unknown", ai:"c_type_ai",
    esterification:"c_type_esterification", saponification:"c_type_saponification", alkene_addition:"c_type_alkene_addition",
    photosynthesis:"c_type_photosynthesis", alkyne_addition:"c_type_alkyne_addition",
    alkane_halogenation:"c_type_alkane_halogenation", alcohol_oxidation:"c_type_alcohol_oxidation",
    amine_neutralization:"c_type_amine_neutralization",
  };

  document.getElementById("c-predict").addEventListener("click", ()=>{
    const reactants = readReactants();
    const result = predictProducts(reactants);
    reactionType = result.type;
    predictedProducts = result.products.slice();
    renderProducts();
    if(predictedProducts.length){
      predictNote.style.color = "var(--success-text)";
      predictNote.textContent = t("c_detected_prefix")+" "+t(REACTION_TYPE_LABEL_KEY[reactionType]);
      aiPredictBtn.style.display = "none";
    } else if(window.__callCloudAI){
      // physical/rule-based prediction couldn't determine products -- automatically
      // fall back to the on-device AI model since it's already loaded and available
      aiPredictBtn.style.display = "none";
      tryAIPredict(true);
    } else {
      predictNote.style.color = "var(--red)";
      predictNote.textContent = t("c_predict_failed");
      aiPredictBtn.style.display = "none";
    }
  });

  async function tryAIPredict(isAutoFallback){
    if(!window.__callCloudAI) return;
    aiPredictBtn.disabled = true;
    predictNote.style.color = "var(--ink-soft)";
    predictNote.textContent = isAutoFallback ? t("c_ai_auto_trying") : t("c_ai_thinking");
    try{
      const reactants = readReactants();
      const formulasStr = reactants.map(r=>r.formula).join(" + ");
      const messages = [
        {role:"system", content:"You are a chemistry assistant. Given reactants, reply with ONLY the likely chemical product formulas separated by ' + ' (e.g. 'NaCl + H2O'). Use standard chemical notation. No explanation."},
        {role:"user", content:"Reactants: "+formulasStr},
      ];
      const text = await window.__callCloudAI(messages);
      if(typeof text !== "string" || !text.trim()) throw new Error("EMPTY_RESPONSE");
      const tokens = text.split(/\+|,|\n|\band\b/i).map(s=>s.trim()).filter(Boolean);
      const valid = [];
      tokens.forEach(tok=>{
        const cleaned = tok.replace(/[^A-Za-z0-9()]/g,"");
        if(!cleaned) return;
        if(parseFormula(cleaned).valid) valid.push(cleaned);
      });
      if(valid.length){
        reactionType = "ai";
        predictedProducts = valid;
        renderProducts();
        predictNote.style.color = "var(--amber)";
        // flag a common hallucination signature: a single suggested product whose
        // atom counts are just the reactants glued together with nothing lost --
        // real reactions this simple (no byproduct at all) are the exception, not
        // the rule, especially for saturated/non-reactive-looking combinations
        let suspicious = false;
        if(valid.length===1){
          const reactants = readReactants();
          const combinedCounts = {};
          reactants.forEach(r=>{
            const c = parseFormula(r.formula).counts || {};
            Object.entries(c).forEach(([el,n])=>{ combinedCounts[el] = (combinedCounts[el]||0)+n; });
          });
          const productCounts = parseFormula(valid[0]).counts || {};
          const sameElements = Object.keys(combinedCounts).length === Object.keys(productCounts).length
            && Object.keys(combinedCounts).every(el => combinedCounts[el] === productCounts[el]);
          suspicious = sameElements;
        }
        predictNote.textContent = t("c_ai_suggested") + (suspicious ? " " + t("c_ai_suspicious") : "");
      } else {
        predictNote.style.color = "var(--red)";
        predictNote.textContent = t("c_ai_failed");
        aiPredictBtn.style.display = "block";
      }
    }catch(err){
      predictNote.style.color = "var(--red)";
      const reason = window.__friendlyAIError ? window.__friendlyAIError(err) : err.message;
      predictNote.textContent = t("c_ai_failed") + " (" + reason + ")";
      aiPredictBtn.style.display = "block";
    }
    aiPredictBtn.disabled = false;
  }

  aiPredictBtn.addEventListener("click", ()=> tryAIPredict(false));

  /* ---- run reaction: balance + stoichiometry + auto kinetics/equilibrium ---- */
  let lastResult=null;
  let kineticsAnimTimer=null;

  const KINETICS_K_REF = {combustion:0.5, neutralization:0.6, metal_acid:0.3, decomposition:0.02, synthesis:0.01, unknown:0.05, ai:0.05, esterification:0.02, saponification:0.4, alkene_addition:0.3, photosynthesis:0.003, alkyne_addition:0.25, alkane_halogenation:0.08, alcohol_oxidation:0.15, amine_neutralization:0.6};
  const EQUILIBRIUM_KC_REF = {combustion:1e8, neutralization:1e8, metal_acid:1e6, decomposition:20, synthesis:100, unknown:1, ai:1, esterification:4, saponification:1e6, alkene_addition:1e4, photosynthesis:0.001, alkyne_addition:1e4, alkane_halogenation:1e3, alcohol_oxidation:1e5, amine_neutralization:1e8};

  function solve(){
    errorEl.style.display="none";
    equationEl.textContent="";
    resultsTable.innerHTML="";
    massBalanceEl.textContent="";
    kineticsSummary.textContent="";
    equilibriumSummary.textContent="";

    const reactants = readReactants();
    if(reactants.length<1){ showError(t("c_err_need_both")); return; }
    if(predictedProducts.length<1){ showError(t("c_err_no_products")); return; }

    const reactantData = reactants.map(r=>({formula:r.formula, kind:"reactant", massG:r.massG, molesGiven:r.molesGiven}));
    const productData = predictedProducts.filter(Boolean).map(f=>({formula:f, kind:"product"}));

    const species = [];
    for(const r of [...reactantData, ...productData]){
      const parsed = parseFormula(r.formula);
      if(!parsed.valid){
        showError(t("c_err_bad_formula")+" \""+r.formula+"\"" + (parsed.unknown&&parsed.unknown.length? " ("+parsed.unknown.join(", ")+")" : ""));
        return;
      }
      species.push({...r, counts:parsed.counts, sign: r.kind==="reactant"?1:-1});
    }
    const elements = [...new Set(species.flatMap(s=>Object.keys(s.counts)))];
    const bal = balanceEquation(elements, species);
    if(!bal.ok){
      if(bal.freeCount===0) showError(t("c_err_impossible"));
      else if(bal.freeCount>1) showError(t("c_err_underdetermined"));
      else showError(t("c_err_general"));
      return;
    }

    const nR = reactantData.length;
    const coeffs = bal.coeffs;
    const molarMasses = species.map(s=> molarMass(s.counts));

    const eqParts = species.map((s,i)=> (coeffs[i]===1?"":coeffs[i]+" ")+s.formula);
    equationEl.textContent = eqParts.slice(0,nR).join(" + ") + "  →  " + eqParts.slice(nR).join(" + ");

    const molesIn = species.map((s,i)=>{
      if(i>=nR) return 0;
      return s.molesGiven!==null && s.molesGiven!==undefined ? s.molesGiven : (s.massG/molarMasses[i]);
    });
    let limitingIdx=-1, minRatio=Infinity;
    for(let i=0;i<nR;i++){
      const ratio = molesIn[i]/coeffs[i];
      if(ratio<minRatio){ minRatio=ratio; limitingIdx=i; }
    }
    const extent = minRatio;

    const rows = species.map((s,i)=>{
      const isReactant = i<nR;
      const mm = molarMasses[i];
      if(isReactant){
        const molesReacted = extent*coeffs[i];
        const molesLeftover = Math.max(0, molesIn[i]-molesReacted);
        return {
          role: t("c_role_reactant"), formula:s.formula, coeff:coeffs[i], mm,
          inputMass: molesIn[i]*mm, molesIn: molesIn[i],
          molesUsed: molesReacted, leftoverMass: molesLeftover*mm,
          limiting: i===limitingIdx,
        };
      } else {
        const molesFormed = extent*coeffs[i];
        return {
          role: t("c_role_product"), formula:s.formula, coeff:coeffs[i], mm,
          inputMass: null, molesIn:null,
          molesFormed, yieldMass: molesFormed*mm,
          limiting:false,
        };
      }
    });

    lastResult = {equation: equationEl.textContent, rows, extent, reactionType};

    resultsTable.innerHTML = `
      <tr>
        <th>${t("c_th_role")}</th><th>${t("c_th_formula")}</th><th>${t("c_th_coeff")}</th>
        <th>${t("c_th_molarmass")}</th><th>${t("c_th_input")}</th><th>${t("c_th_output")}</th>
      </tr>
      ${rows.map(r=>`
        <tr class="${r.limiting?'limiting':''}">
          <td>${r.role}${r.limiting? ' ⚠ '+t("c_limiting"):''}</td>
          <td>${r.formula}</td>
          <td>${r.coeff}</td>
          <td>${r.mm.toFixed(2)}</td>
          <td>${r.inputMass!==null ? r.inputMass.toFixed(2)+" g ("+fmt(r.molesIn,3)+" mol)" : "—"}</td>
          <td>${r.molesFormed!==undefined ? fmt(r.molesFormed,3)+" mol = "+r.yieldMass.toFixed(3)+" g" : fmt(r.leftoverMass/(r.mm||1),3)+" mol leftover = "+r.leftoverMass.toFixed(3)+" g"}</td>
        </tr>
      `).join("")}
    `;

    const totalIn = rows.filter(r=>r.inputMass!==null).reduce((a,r)=>a+r.inputMass,0);
    const totalLeftover = rows.filter(r=>r.leftoverMass!==undefined).reduce((a,r)=>a+r.leftoverMass,0);
    const totalYield = rows.filter(r=>r.yieldMass!==undefined).reduce((a,r)=>a+r.yieldMass,0);
    massBalanceEl.textContent = t("c_mass_check")+`: ${totalIn.toFixed(3)} g (${t("c_in")}) = ${totalLeftover.toFixed(3)} g (${t("c_leftover")}) + ${totalYield.toFixed(3)} g (${t("c_products")}) ${Math.abs(totalIn-(totalLeftover+totalYield))<0.01?"✓":"⚠"}`;

    // ---- populate "View in 3D" chips for every unique reactant/product ----
    const view3dSection = document.getElementById("c-view3d-section");
    const view3dChips = document.getElementById("c-view3d-chips");
    if(view3dSection && view3dChips){
      const uniqueFormulas = [...new Set(rows.map(r=>r.formula))];
      view3dChips.innerHTML = "";
      uniqueFormulas.forEach(f=>{
        const chip = document.createElement("button");
        chip.className = "chip";
        chip.textContent = f;
        chip.addEventListener("click", ()=>{
          activateTab("3dview");
          if(window.__viewMolecule3D) window.__viewMolecule3D(f);
        });
        view3dChips.appendChild(chip);
      });
      view3dSection.style.display = uniqueFormulas.length ? "block" : "none";
    }

    // ---- auto-generated illustrative kinetics (animated reveal over real time) ----
    const T = parseFloat(tempSlider.value), simTime = parseFloat(timeSlider.value);
    const kRef = KINETICS_K_REF[reactionType] ?? 0.05;
    const k = kRef * Math.pow(2, (T-25)/10);
    const N=80, fullPts=[];
    for(let i=0;i<=N;i++){
      const tt = simTime*i/N;
      fullPts.push({x:tt, y:Math.exp(-k*tt)});
    }
    const pctComplete = (1-Math.exp(-k*simTime))*100;

    if(kineticsAnimTimer) clearInterval(kineticsAnimTimer);
    const solveBtn = document.getElementById("c-solve");
    solveBtn.disabled = true;
    const animFrames = 50, animDurationMs = 2200;
    let frame = 0;
    kineticsSummary.innerHTML = t("c_kinetics_running");
    const reactantColor = "#63C7D6", productColor = "#8B6BD9";
    kineticsAnimTimer = setInterval(()=>{
      frame++;
      const progress = frame/animFrames;
      const shownCount = Math.max(2, Math.round(progress*fullPts.length));
      const shownPts = fullPts.slice(0, shownCount);
      const curT = shownPts[shownPts.length-1].x;
      drawLineChart(kineticsChart, {points:shownPts, xDomain:[0,simTime], yDomain:[0,1.02], xLabel:t("axis_time_s"), yLabel:t("c_axis_fraction"), color:"#3E8E52", markers:[{x:curT, y:shownPts[shownPts.length-1].y, color:AMBER, label:fmt(curT,0)+"s"}]});
      if(vesselLiquid){
        const converted = 1 - shownPts[shownPts.length-1].y;
        vesselLiquid.setAttribute("fill", lerpColor(reactantColor, productColor, converted));
      }
      if(Math.random() < 0.35) spawnVesselBubble();
      if(frame>=animFrames){
        clearInterval(kineticsAnimTimer);
        kineticsAnimTimer=null;
        solveBtn.disabled = false;
        kineticsSummary.innerHTML = t("c_kinetics_rate")+`: k ≈ ${fmt(k,4)} s⁻¹ (${T}°C)<br>`+t("c_kinetics_complete")+`: ${pctComplete.toFixed(1)}% `+t("c_kinetics_within")+` ${simTime}s`;
      }
    }, animDurationMs/animFrames);

    // ---- auto-generated illustrative equilibrium position ----
    const Kc = EQUILIBRIUM_KC_REF[reactionType] ?? 1;
    let posKey;
    if(Kc>=1e6) posKey="c_eq_complete";
    else if(Kc>=10) posKey="c_eq_favors_products";
    else if(Kc>=0.1) posKey="c_eq_mixed";
    else posKey="c_eq_favors_reactants";
    equilibriumSummary.innerHTML = t("c_eq_estimate")+`: Kc ≈ ${Kc>=1e6? Kc.toExponential(1) : Kc}<br>`+t(posKey);

    showToast(t("toast_reaction_run"), "success");
  }

  function showError(msg){
    errorEl.textContent = msg;
    errorEl.style.display = "block";
  }

  document.getElementById("c-solve").addEventListener("click", solve);

  document.getElementById("c-chain").addEventListener("click", ()=>{
    if(!lastResult){ showToast(t("c_err_run_first")); return; }
    const productRows = lastResult.rows.filter(r=>r.yieldMass!==undefined && r.yieldMass>0);
    if(!productRows.length){ showToast(t("c_err_run_first")); return; }
    reactantsList.innerHTML = "";
    productRows.forEach(r=> reactantsList.appendChild(makeReactantRow(r.formula, "solid", r.yieldMass.toFixed(3))));
    predictedProducts = [];
    renderProducts();
    equationEl.textContent = "";
    resultsTable.innerHTML = "";
    massBalanceEl.textContent = "";
    kineticsSummary.textContent = "";
    equilibriumSummary.textContent = "";
    predictNote.textContent = "";
    showToast(t("toast_chained"), "success");
  });

  document.getElementById("c-export-csv").addEventListener("click", ()=>{
    if(!lastResult){ solve(); if(!lastResult) return; }
    const summary=[
      ["Experiment","Custom Reaction"],
      ["Balanced equation", lastResult.equation],
      ["Reaction type", lastResult.reactionType],
      ["Temperature (°C)", tempSlider.value], ["Simulation time (s)", timeSlider.value],
      [],
      ["role","formula","coefficient","molar_mass","input_mass_g","moles","output_mol","output_mass_g"],
    ];
    const rows=summary.concat(lastResult.rows.map(r=> [r.role, r.formula, r.coeff, r.mm.toFixed(3),
      r.inputMass!==null?r.inputMass.toFixed(3):"", r.molesIn!==null?fmt(r.molesIn,4):"",
      r.molesFormed!==undefined?fmt(r.molesFormed,4):fmt(r.leftoverMass/(r.mm||1),4),
      r.yieldMass!==undefined?r.yieldMass.toFixed(4):r.leftoverMass.toFixed(4)]));
    downloadCSV("reaction_stoichiometry.csv", rows);
  });
  document.getElementById("c-log").addEventListener("click", ()=>{
    if(!lastResult){ solve(); if(!lastResult) return; }
    const inputs={}, results={};
    lastResult.rows.forEach(r=>{
      if(r.inputMass!==null) inputs[r.formula+"_g"]=r.inputMass.toFixed(2);
      else results[r.formula+"_yield_g"]=r.yieldMass.toFixed(3);
    });
    inputs["T_C"]=tempSlider.value; inputs["t_s"]=timeSlider.value;
    logExperiment("Reaction Lab", lastResult.equation, inputs, results);
  });

  onLanguageChange(()=>{ if(lastResult) solve(); });
  window.__customReactionSolve = solve;
})();

/* ============ AI ASSISTANT (Cloud API) ============ */
(function(){
const log = document.getElementById("ai-log");
const input = document.getElementById("ai-input");
const sendBtn = document.getElementById("ai-send");
const suggestionsHost = document.getElementById("ai-suggestions");

const AI_SETTINGS_KEY = "reactionBenchAISettings";
let aiSettings = { provider: "openrouter", apiKey: "", model: "" };
try {
  const saved = localStorage.getItem(AI_SETTINGS_KEY);
  if(saved) aiSettings = JSON.parse(saved);
} catch(e){}

const providerSel = document.getElementById("cloud-ai-provider");
const keyInput = document.getElementById("cloud-ai-key");
const modelInput = document.getElementById("cloud-ai-model");
const keyStatus = document.getElementById("cloud-ai-key-status");

function updateKeyStatus(){
  if(!keyStatus) return;
  if(aiSettings.apiKey.trim()){
    keyStatus.textContent = "✓ API key set — cloud chat is active.";
    keyStatus.style.color = "var(--success-text)";
  } else {
    keyStatus.textContent = "⚠ No API key yet — questions will use offline quick-help until you add one.";
    keyStatus.style.color = "var(--amber)";
  }
}

if(providerSel && keyInput) {
  providerSel.value = aiSettings.provider;
  keyInput.value = aiSettings.apiKey;
  if(modelInput) modelInput.value = aiSettings.model || "";
  updateKeyStatus();
  providerSel.addEventListener("change", () => {
    aiSettings.provider = providerSel.value;
    localStorage.setItem(AI_SETTINGS_KEY, JSON.stringify(aiSettings));
  });
  keyInput.addEventListener("input", () => {
    aiSettings.apiKey = keyInput.value;
    localStorage.setItem(AI_SETTINGS_KEY, JSON.stringify(aiSettings));
    updateKeyStatus();
  });
  if(modelInput){
    modelInput.addEventListener("input", () => {
      aiSettings.model = modelInput.value;
      localStorage.setItem(AI_SETTINGS_KEY, JSON.stringify(aiSettings));
    });
  }
}

const FAQ = [
  {kw:["half-life", "half life", "t1/2", "t½"], a:"Half-life is the time it takes for a reactant's concentration to fall to half its starting value. For 1st-order reactions it's constant (t½ = ln2/k); for 0th-order it shrinks, and for 2nd-order it grows."},
  {kw:["order of reaction", "reaction order"], a:"Reaction order describes how rate depends on concentration: 0th order (rate is constant), 1st order (rate ∝ [A]), 2nd order (rate ∝ [A]²). Determined experimentally."},
  {kw:["le chatelier", "chatelier", "shift equilibrium"], a:"Le Chatelier's principle: if you stress an equilibrium, the system shifts to partially counteract that stress. Adding a reactant shifts forward."},
  {kw:["equilibrium constant", "kc", "kp"], a:"Kc is the ratio of product to reactant concentrations at equilibrium. Kc >> 1 means products are favored. Kc depends only on temperature."},
  {kw:["ph", "pka", "pkb"], a:"pH = -log10[H+]. pKa = -log10(Ka) describes acid strength. At the half-equivalence point of a weak-acid titration, pH = pKa exactly."},
  {kw:["buffer"], a:"A buffer resists pH change because it contains both a weak acid and its conjugate base in comparable amounts. Works best within ±1 pH unit of the acid's pKa."},
  {kw:["equivalence point"], a:"The point where moles of acid equal moles of base added. For strong acid + strong base it's pH 7; for weak acid + strong base it's above 7."},
  {kw:["activation energy", "ea "], a:"Activation energy (Ea) is the energy barrier reactants must overcome. Higher Ea means a slower reaction. Catalysts work by lowering Ea."},
  {kw:["exothermic", "endothermic"], a:"Exothermic reactions release heat (ΔH < 0); endothermic reactions absorb heat (ΔH > 0). Independent of activation energy."},
  {kw:["molarity", "molar mass", "moles"], a:"Molarity (M) = moles ÷ liters. Molar mass (g/mol) is the mass of one mole. Moles = mass (g) ÷ molar mass."},
  {kw:["limiting reactant", "limiting reagent"], a:"The limiting reactant runs out first, capping product formation. Compare moles available to moles required by the balanced equation."},
];

function findFAQAnswer(q){
  const text = q.toLowerCase();
  let best=null, bestScore=0;
  FAQ.forEach(rule=>{
    let score=0;
    rule.kw.forEach(k=>{ if(text.includes(k)) score++; });
    if(score>bestScore){ bestScore=score; best=rule; }
  });
  return bestScore>0 ? best.a : null;
}

function escapeHTML(s){
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

function inlineMd(s){
  return s
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/(?<!\*)\*([^*\n]+?)\*(?!\*)/g, "<em>$1</em>")
    .replace(/`([^`]+?)`/g, "<code class=\"md-inline-code\">$1</code>");
}

function renderMarkdown(raw){
  let text = escapeHTML(raw);

  // fenced code blocks and LaTeX blocks first (multi-line, must not be touched by later line-based parsing)
  const blocks = [];
  text = text.replace(/```([\s\S]*?)```/g, (m, code) => {
    blocks.push(`<pre class="md-code-block">${code.trim()}</pre>`);
    return `\u0000BLOCK${blocks.length-1}\u0000`;
  });
  text = text.replace(/\$\$([\s\S]*?)\$\$/g, (m, formula) => {
    blocks.push(`<div class="md-formula">${formula.trim()}</div>`);
    return `\u0000BLOCK${blocks.length-1}\u0000`;
  });
  text = text.replace(/\$([^$\n]+)\$/g, (m, formula) => `<span class="md-formula-inline">${formula.trim()}</span>`);

  const lines = text.split("\n");
  const out = [];
  let inUL=false, inOL=false, tableRows=[];

  function closeLists(){
    if(inUL){ out.push("</ul>"); inUL=false; }
    if(inOL){ out.push("</ol>"); inOL=false; }
  }
  function isSeparatorRow(cells){
    return cells.length>0 && cells.every(c => /^:?-{1,}:?$/.test(c));
  }
  function flushTable(){
    if(!tableRows.length) return;
    let html = '<table class="md-table">';
    let rowIndex = 0;
    tableRows.forEach(row=>{
      const cells = row.replace(/^\||\|$/g,"").split("|").map(c=>c.trim());
      if(isSeparatorRow(cells)) return;
      const tag = rowIndex===0 ? "th" : "td";
      html += "<tr>"+cells.map(c=>`<${tag}>${inlineMd(c)}</${tag}>`).join("")+"</tr>";
      rowIndex++;
    });
    html += "</table>";
    out.push(html);
    tableRows = [];
  }

  for(const line of lines){
    const trimmed = line.trim();
    if(/^\u0000BLOCK\d+\u0000$/.test(trimmed)){
      closeLists(); flushTable();
      out.push(trimmed);
      continue;
    }
    if(/^\|.*\|$/.test(trimmed)){
      closeLists();
      tableRows.push(trimmed);
      continue;
    }
    if(tableRows.length) flushTable();

    if(/^#{1,3}\s+/.test(trimmed)){
      closeLists();
      const level = trimmed.match(/^(#{1,3})/)[1].length;
      out.push(`<div class="md-h${level}">${inlineMd(trimmed.replace(/^#{1,3}\s+/, ""))}</div>`);
      continue;
    }
    if(/^&gt;\s?/.test(trimmed)){
      closeLists();
      out.push(`<div class="md-quote">${inlineMd(trimmed.replace(/^&gt;\s?/,""))}</div>`);
      continue;
    }
    if(/^(-{3,}|\*{3,})$/.test(trimmed)){
      closeLists();
      out.push("<hr class=\"md-hr\">");
      continue;
    }
    if(/^[-*]\s+/.test(trimmed)){
      if(!inOL && !inUL){ out.push("<ul class=\"md-ul\">"); inUL=true; }
      out.push(`<li>${inlineMd(trimmed.replace(/^[-*]\s+/,""))}</li>`);
      continue;
    }
    if(/^\d+\.\s+/.test(trimmed)){
      if(!inUL && !inOL){ out.push("<ol class=\"md-ol\">"); inOL=true; }
      out.push(`<li>${inlineMd(trimmed.replace(/^\d+\.\s+/,""))}</li>`);
      continue;
    }
    closeLists();
    if(trimmed==="") continue;
    out.push(`<div class="md-p">${inlineMd(trimmed)}</div>`);
  }
  closeLists();
  flushTable();

  let html = out.join("");
  html = html.replace(/\u0000BLOCK(\d+)\u0000/g, (m, i) => blocks[+i]);
  return html;
}

function appendMsg(role, text){
  const div=document.createElement("div");
  div.className="chat-msg "+role;
  if(role==="bot"){
    div.innerHTML = renderMarkdown(text);
  } else {
    div.textContent=text;
  }
  log.appendChild(div);
  log.scrollTop = log.scrollHeight;
}

["What does half-life mean?","Explain Le Chatelier's principle","What's a buffer?","Why does the titration curve flatten near pKa?"].forEach(s=>{
  const chip=document.createElement("button");
  chip.className="chip"; chip.textContent=s;
  chip.addEventListener("click", ()=>{ input.value=s; handleSend(); });
  suggestionsHost.appendChild(chip);
});

const AI_SYSTEM_PROMPT = "You are a knowledgeable, patient chemistry lab assistant. Give thorough, well-structured explanations: define key terms, explain the underlying concept, walk through relevant reasoning or a worked example, and note common misconceptions.";

function friendlyAIError(err){
  const msg = (err && err.message) || String(err);
  if(msg === "NO_KEY") return "No API key is configured yet.";
  if(msg === "EMPTY_RESPONSE") return "The model returned an empty response (this happens occasionally with free auto-routed models) — try again.";
  if(/\b401\b/.test(msg) || /missing authentication/i.test(msg)) return "No API key is configured (or it wasn't sent) — the provider rejected the request as unauthenticated.";
  if(/\b403\b/.test(msg)) return "That API key was rejected (403) — double-check it's correct, active, and matches the selected provider.";
  if(/\b404\b/.test(msg) && /no endpoints found/i.test(msg)) return "That model is no longer available (free-model lineups on OpenRouter rotate often). Try clearing the \"Model\" override to use OpenRouter's auto-router, or enter a currently-live model slug from openrouter.ai/models.";
  if(/\b429\b/.test(msg)) return "Rate limit reached for this provider — wait a moment and try again, or switch providers.";
  if(/Failed to fetch|NetworkError/i.test(msg)) return "Couldn't reach the AI provider — check your internet connection.";
  return msg;
}

async function callCloudAIOnce(messages){
  const provider = aiSettings.provider;
  const apiKey = aiSettings.apiKey.trim();
  if(!apiKey) throw new Error("NO_KEY");
  let endpoint = "https://openrouter.ai/api/v1/chat/completions";
  // OpenRouter's free-model catalog rotates constantly (models get added/retired
  // week to week), so a hardcoded slug like "mistralai/mistral-7b-instruct:free"
  // reliably goes stale. "openrouter/free" is OpenRouter's own auto-router: it
  // picks a currently-working free model for you, so this keeps working even
  // after individual free models rotate out. Users can still override it below.
  let model = "openrouter/free";

  if(provider === "qwen"){
    endpoint = "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions";
    model = "qwen-turbo";
  } else if(provider === "mistral"){
    endpoint = "https://api.mistral.ai/v1/chat/completions";
    model = "mistral-small-latest";
  }
  if(aiSettings.model && aiSettings.model.trim()) model = aiSettings.model.trim();

  const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${apiKey}` };
  if(provider === "openrouter"){
    headers["HTTP-Referer"] = window.location.href;
    headers["X-Title"] = "Reaction Bench";
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ model: model, messages: messages, temperature: 0.7, max_tokens: 800 })
  });

  if(!response.ok) throw new Error(`API error ${response.status}: ${await response.text()}`);
  const data = await response.json();
  const content = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
  if(typeof content === "string" && content.trim()) return content;
  throw new Error("EMPTY_RESPONSE");
}

// Free auto-routed models (e.g. OpenRouter's "openrouter/free") occasionally
// route to a model that returns an empty completion for no clear reason --
// a transient hiccup, not a real failure. Retry a couple of times with a
// short backoff before giving up, but don't retry on errors that won't be
// fixed by retrying (missing key, auth, or a model that flat-out doesn't exist).
async function callCloudAI(messages, attempt){
  attempt = attempt || 1;
  try{
    return await callCloudAIOnce(messages);
  }catch(err){
    const msg = err.message || "";
    const retryable = msg === "EMPTY_RESPONSE" || /\b429\b/.test(msg) || /Failed to fetch|NetworkError/i.test(msg);
    if(retryable && attempt < 3){
      await new Promise(r => setTimeout(r, 500 * attempt));
      return callCloudAI(messages, attempt + 1);
    }
    throw err;
  }
}

async function handleSend(){
  const q = input.value.trim();
  if(!q) return;
  appendMsg("user", q);
  input.value="";

  const thinkingDiv = document.createElement("div");
  thinkingDiv.className = "chat-msg system";
  thinkingDiv.innerHTML = '<span style="display:inline-block;width:12px;height:12px;border:2px solid var(--paper-edge);border-top-color:var(--ink);border-radius:50%;animation:spin 0.8s linear infinite;vertical-align:middle;margin-right:6px;"></span> Thinking...';
  log.appendChild(thinkingDiv);
  log.scrollTop = log.scrollHeight;

  try{
    const answer = await callCloudAI([{ role: "system", content: AI_SYSTEM_PROMPT }, { role: "user", content: q }]);
    log.removeChild(thinkingDiv);
    appendMsg("bot", answer || "I couldn't generate a response.");
  }catch(err){
    log.removeChild(thinkingDiv);
    const reason = friendlyAIError(err);
    const faq = findFAQAnswer(q);
    if(faq) appendMsg("bot", `⚠️ Cloud AI unavailable (${reason}). Using offline help:\n\n${faq}`);
    else appendMsg("bot", `⚠️ Cloud AI unavailable (${reason}).\n\nAdd a free API key in "Cloud AI Configuration" above, or try a suggested question below for instant offline help.`);
  }
}

sendBtn.addEventListener("click", handleSend);
input.addEventListener("keydown", (e)=>{ if(e.key==="Enter") handleSend(); });
window.__callCloudAI = callCloudAI;
window.__friendlyAIError = friendlyAIError;
window.__aiSystemPrompt = AI_SYSTEM_PROMPT;

if(!document.getElementById("ai-spin-style")){
  const style = document.createElement("style");
  style.id = "ai-spin-style";
  style.textContent = `@keyframes spin { to { transform: rotate(360deg); } }`;
  document.head.appendChild(style);
}
})();
/* ============ 3D MOLECULE VIEWER ============ */
(function(){
if(typeof THREE === 'undefined'){ console.warn("Three.js not loaded"); return; }
const container = document.getElementById('three-container');
const moleculeSelect = document.getElementById('molecule-select');
const moleculeInfo = document.getElementById('molecule-info');
if(!container || !moleculeSelect) {
  console.warn("3D viewer elements not found in HTML");
  return;
}

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf5f5f5); // Light background as requested

// NOTE: the 3D panel is hidden (display:none) until its tab is selected, so
// container.clientWidth/clientHeight are both 0 at this point -- fall back to
// sane defaults here to avoid a NaN camera aspect / zero-size renderer, then
// use a ResizeObserver below to correct sizing the moment the tab becomes visible.
const initW = container.clientWidth || 600, initH = container.clientHeight || 500;

const camera = new THREE.PerspectiveCamera(60, initW / initH, 0.1, 1000);
camera.position.z = 8;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(initW, initH);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

// Re-sync the camera/renderer to the container's real size whenever it changes --
// this fires when the tab switches from hidden to visible (0x0 -> real size),
// which a plain window "resize" listener would never catch.
if(typeof ResizeObserver !== 'undefined'){
  const resizeObserver = new ResizeObserver(() => {
    const w = container.clientWidth, h = container.clientHeight;
    if(w === 0 || h === 0) return; // still hidden -- nothing to size to yet
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });
  resizeObserver.observe(container);
}

// Brighter lighting for white background
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);
const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(5, 10, 7);
scene.add(dirLight);
const light2 = new THREE.PointLight(0x63C7D6, 0.3);
light2.position.set(-5, -5, 5);
scene.add(light2);

const MOLECULES = {
  H2O: { name: "Water", formula: "H₂O", atoms: [{e:"O",p:[0,0,0],c:0xff0000,r:0.6},{e:"H",p:[-0.8,0.6,0],c:0xffffff,r:0.35},{e:"H",p:[0.8,0.6,0],c:0xffffff,r:0.35}], bonds:[[0,1],[0,2]], props:{"Molar Mass":"18.015 g/mol","Bond Angle":"104.5°","Geometry":"Bent"} },
  CO2: { name: "Carbon Dioxide", formula: "CO₂", atoms: [{e:"C",p:[0,0,0],c:0x333333,r:0.55},{e:"O",p:[-1.2,0,0],c:0xff0000,r:0.6},{e:"O",p:[1.2,0,0],c:0xff0000,r:0.6}], bonds:[[0,1],[0,2]], props:{"Molar Mass":"44.01 g/mol","Bond Angle":"180°","Geometry":"Linear"} },
  CH4: { name: "Methane", formula: "CH₄", atoms: [{e:"C",p:[0,0,0],c:0x333333,r:0.55},{e:"H",p:[0.6,0.6,0.6],c:0xffffff,r:0.35},{e:"H",p:[-0.6,-0.6,0.6],c:0xffffff,r:0.35},{e:"H",p:[0.6,-0.6,-0.6],c:0xffffff,r:0.35},{e:"H",p:[-0.6,0.6,-0.6],c:0xffffff,r:0.35}], bonds:[[0,1],[0,2],[0,3],[0,4]], props:{"Molar Mass":"16.04 g/mol","Bond Angle":"109.5°","Geometry":"Tetrahedral"} },
  NH3: { name: "Ammonia", formula: "NH₃", atoms: [{e:"N",p:[0,0,0],c:0x0000ff,r:0.55},{e:"H",p:[0.7,0.5,0.3],c:0xffffff,r:0.35},{e:"H",p:[-0.7,0.5,0.3],c:0xffffff,r:0.35},{e:"H",p:[0,0.5,-0.8],c:0xffffff,r:0.35}], bonds:[[0,1],[0,2],[0,3]], props:{"Molar Mass":"17.03 g/mol","Bond Angle":"107°","Geometry":"Trigonal Pyramidal"} },
  C6H6: { name: "Benzene", formula: "C₆H₆", atoms: [{e:"C",p:[1.2,0,0],c:0x333333,r:0.5},{e:"C",p:[0.6,1.04,0],c:0x333333,r:0.5},{e:"C",p:[-0.6,1.04,0],c:0x333333,r:0.5},{e:"C",p:[-1.2,0,0],c:0x333333,r:0.5},{e:"C",p:[-0.6,-1.04,0],c:0x333333,r:0.5},{e:"C",p:[0.6,-1.04,0],c:0x333333,r:0.5},{e:"H",p:[2.1,0,0],c:0xffffff,r:0.3},{e:"H",p:[1.05,1.82,0],c:0xffffff,r:0.3},{e:"H",p:[-1.05,1.82,0],c:0xffffff,r:0.3},{e:"H",p:[-2.1,0,0],c:0xffffff,r:0.3},{e:"H",p:[-1.05,-1.82,0],c:0xffffff,r:0.3},{e:"H",p:[1.05,-1.82,0],c:0xffffff,r:0.3}], bonds:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[0,6],[1,7],[2,8],[3,9],[4,10],[5,11]], props:{"Molar Mass":"78.11 g/mol","Bond Angle":"120°","Geometry":"Planar Hexagonal"} },
  NaCl: { name: "Sodium Chloride", formula: "NaCl", atoms: [{e:"Na",p:[0,0,0],c:0x800080,r:0.7},{e:"Cl",p:[1.8,0,0],c:0x00ff00,r:0.8}], bonds:[[0,1]], props:{"Molar Mass":"58.44 g/mol","Bond Type":"Ionic","Crystal":"Face-centered cubic"} },
  C2H5OH: { name: "Ethanol", formula: "C₂H₅OH", atoms: [{e:"C",p:[-0.7,0,0],c:0x333333,r:0.5},{e:"C",p:[0.7,0,0],c:0x333333,r:0.5},{e:"O",p:[1.8,0.8,0],c:0xff0000,r:0.55},{e:"H",p:[2.4,1.4,0],c:0xffffff,r:0.3},{e:"H",p:[-1.3,0.5,0.5],c:0xffffff,r:0.3},{e:"H",p:[-1.3,-0.5,-0.5],c:0xffffff,r:0.3},{e:"H",p:[-1.3,0.5,-0.5],c:0xffffff,r:0.3},{e:"H",p:[0.7,0.9,0.5],c:0xffffff,r:0.3},{e:"H",p:[0.7,-0.9,-0.5],c:0xffffff,r:0.3}], bonds:[[0,1],[1,2],[2,3],[0,4],[0,5],[0,6],[1,7],[1,8]], props:{"Molar Mass":"46.07 g/mol","Bond Angle":"~109.5°","Geometry":"Tetrahedral"} }
};

const ELEMENT_3D_COLOR = { C:0x333333,O:0xff0000,N:0x0000ff,H:0xffffff,Cl:0x00cc44,Br:0x8B2E00,S:0xdddd00,P:0xffa500,Na:0x9932CC,K:0x9400D3,Ca:0x808080,Mg:0x228B22,F:0x90EE90,I:0x9400D3,Mn:0xa0a0a0,Cr:0x6a5acd,Zn:0x7d80b0,Fe:0xb7410e,Al:0xa6a6a6,Li:0xcc80ff,Ba:0x00c957 };
const ELEMENT_3D_RADIUS = { C:0.5,O:0.55,N:0.55,H:0.3,Cl:0.7,Br:0.75,S:0.65,P:0.65,Na:0.7,K:0.75,Ca:0.75,Mg:0.6,F:0.5,I:0.8,Mn:0.6,Cr:0.6,Zn:0.65,Fe:0.6,Al:0.6,Li:0.55,Ba:0.8 };

// Builds a reasonable (not literature-accurate) ball-and-stick layout for ANY
// valid formula, so the viewer isn't limited to the ~7 hand-placed molecules --
// heavy (non-H) atoms form a simple zig-zag backbone, hydrogens and other light
// atoms fan out around each backbone atom.
function buildGenericGeometry(formula){
  const parsed = parseFormula(formula);
  if(!parsed.valid) return null;
  const counts = parsed.counts;
  const heavy = [], light = [];
  Object.entries(counts).forEach(([el,n])=>{
    for(let i=0;i<n;i++){ (el==="H" ? light : heavy).push(el); }
  });
  const atoms = [], bonds = [];
  if(heavy.length===0){
    // pure-hydrogen or empty case (e.g. H2)
    const n = Math.max(light.length,1);
    for(let i=0;i<n;i++) atoms.push({e:"H", p:[(i-(n-1)/2)*1.0,0,0], c:0xffffff, r:0.3});
    for(let i=0;i<atoms.length-1;i++) bonds.push([i,i+1]);
  } else {
    const spacing = 1.5;
    const startX = -(heavy.length-1)*spacing/2;
    heavy.forEach((el,i)=>{
      const x = startX + i*spacing;
      const y = (i%2===0) ? 0.15 : -0.15;
      atoms.push({e:el, p:[x,y,0], c: ELEMENT_3D_COLOR[el]||0xcccccc, r: ELEMENT_3D_RADIUS[el]||0.5});
    });
    for(let i=0;i<atoms.length-1;i++) bonds.push([i,i+1]);
    let hRemaining = light.length;
    const perHeavy = Math.max(1, Math.ceil(light.length/heavy.length));
    heavy.forEach((el,i)=>{
      const around = Math.min(perHeavy, hRemaining);
      for(let k=0;k<around;k++){
        const angle = (k/Math.max(around,1))*Math.PI*2 + i*0.7;
        const idx = atoms.length;
        atoms.push({
          e:"H",
          p:[ atoms[i].p[0]+0.85*Math.cos(angle), atoms[i].p[1]+0.55+0.5*Math.sin(angle), 0.85*Math.sin(angle*1.3) ],
          c:0xffffff, r:0.3
        });
        bonds.push([i, idx]);
        hRemaining--;
      }
    });
  }
  const mm = molarMass(counts);
  return {
    name: formula, formula: formula, atoms, bonds, approximate:true,
    props: {"Molar Mass": mm.toFixed(2)+" g/mol", "Layout":"Auto-generated (approximate, not a measured structure)"},
  };
}

let moleculeGroup = new THREE.Group();
scene.add(moleculeGroup);
let isDragging = false, prevMouse = {x:0,y:0}, rotSpeed = {x:0,y:0};

container.addEventListener('mousedown', e => { isDragging = true; prevMouse = {x:e.clientX, y:e.clientY}; });
container.addEventListener('mousemove', e => {
  if(!isDragging) return;
  rotSpeed.y = (e.clientX - prevMouse.x) * 0.005;
  rotSpeed.x = (e.clientY - prevMouse.y) * 0.005;
  prevMouse = {x:e.clientX, y:e.clientY};
});
container.addEventListener('mouseup', () => isDragging = false);
container.addEventListener('mouseleave', () => isDragging = false);
container.addEventListener('wheel', e => { e.preventDefault(); camera.position.z = Math.max(3, Math.min(20, camera.position.z + e.deltaY * 0.01)); });

function createMolecule(key) {
  while(moleculeGroup.children.length > 0) moleculeGroup.remove(moleculeGroup.children[0]);
  let mol = MOLECULES[key];
  if(!mol) mol = buildGenericGeometry(key);
  if(!mol){
    moleculeInfo.innerHTML = `<div style="color:#a33;font-size:12px;">Couldn't parse "${key}" as a chemical formula.</div>`;
    return;
  }

  mol.atoms.forEach(a => {
    const geometry = new THREE.SphereGeometry(a.r, 32, 32);
    const material = new THREE.MeshPhongMaterial({color:a.c, shininess:80, specular:0x444444});
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(a.p[0], a.p[1], a.p[2]);
    
    // Add black outline to make atoms visible on white background
    const edges = new THREE.EdgesGeometry(geometry);
    const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 1 }));
    mesh.add(line);
    
    moleculeGroup.add(mesh);
  });
  
  mol.bonds.forEach(b => {
    const start = mol.atoms[b[0]].p, end = mol.atoms[b[1]].p;
    const dir = new THREE.Vector3(end[0]-start[0], end[1]-start[1], end[2]-start[2]);
    const len = dir.length();
    const cyl = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, len, 8), new THREE.MeshPhongMaterial({color:0x888888, shininess:30}));
    cyl.position.set((start[0]+end[0])/2, (start[1]+end[1])/2, (start[2]+end[2])/2);
    dir.normalize();
    cyl.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0), dir);
    moleculeGroup.add(cyl);
  });
  
  let html = `<div style="font-size:14px;font-weight:600;margin-bottom:8px;color:#333;">${mol.name} (${mol.formula})</div>`;
  if(mol.approximate) html += `<div style="font-size:10.5px;color:#a67c00;margin-bottom:8px;">⚠ Approximate auto-generated layout, not a measured/literature structure.</div>`;
  for(const [k,v] of Object.entries(mol.props)) html += `<div style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px dashed #ccc;"><span style="color:#666;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;">${k}</span><span style="font-weight:600;color:#333;">${v}</span></div>`;
  moleculeInfo.innerHTML = html;
  window.__lastViewed3DFormula = key;
}

function animate() {
  requestAnimationFrame(animate);
  if(!isDragging) { rotSpeed.x *= 0.95; rotSpeed.y *= 0.95; }
  moleculeGroup.rotation.x += rotSpeed.x;
  moleculeGroup.rotation.y += rotSpeed.y;
  if(!isDragging && Math.abs(rotSpeed.x)<0.001 && Math.abs(rotSpeed.y)<0.001) moleculeGroup.rotation.y += 0.003;
  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
});

moleculeSelect.addEventListener('change', e => createMolecule(e.target.value));
createMolecule(moleculeSelect.value);
animate();

// free-form "type any formula" input
const customFormulaInput = document.getElementById("molecule-custom-formula");
const customFormulaBtn = document.getElementById("molecule-custom-show");
if(customFormulaInput && customFormulaBtn){
  const showCustom = ()=>{
    const f = customFormulaInput.value.trim();
    if(!f) return;
    createMolecule(f);
    // reflect it in the dropdown too, adding a temporary entry if not already known
    if(![...moleculeSelect.options].some(o=>o.value===f)){
      const opt = document.createElement("option");
      opt.value = f; opt.textContent = f + " (custom)";
      moleculeSelect.appendChild(opt);
    }
    moleculeSelect.value = f;
  };
  customFormulaBtn.addEventListener("click", showCustom);
  customFormulaInput.addEventListener("keydown", e=>{ if(e.key==="Enter") showCustom(); });
}

// lets other panels (e.g. Custom Reaction) hand a formula to this viewer directly
window.__viewMolecule3D = function(formula){
  if(![...moleculeSelect.options].some(o=>o.value===formula)){
    const opt = document.createElement("option");
    opt.value = formula; opt.textContent = formula + " (from reaction)";
    moleculeSelect.appendChild(opt);
  }
  moleculeSelect.value = formula;
  createMolecule(formula);
};
})();
applyLanguage(currentLang);
