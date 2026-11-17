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
const I18N = {"en": {"app_eyebrow": "Reaction Bench · animated workbench", "app_title": "Chemistry Simulation Workbench", "app_note": "ⓘ Physics-based teaching models — verify quantitatively before lab use.", "tab_kinetics": "Kinetics", "tab_equilibrium": "Equilibrium", "tab_acidbase": "Acid–Base", "tab_thermo": "Thermochemistry", "tab_custom": "Custom Reaction", "tab_reagents": "Reagents & Elements", "tab_log": "Lab Log", "tab_ai": "AI Assistant", "footer_text": "Reaction Bench — an educational pre-lab intuition tool. Confirm quantitative results against primary literature before relying on them experimentally.", "reagent_preset": "Reagent / reaction preset", "export_data_csv": "⬇ Export data (CSV)", "export_chart_png": "⬇ Export chart (PNG)", "log_this_experiment": "📌 Log this experiment", "order_0": "0th order", "order_1": "1st order", "order_2": "2nd order", "k_reaction_setup": "Reaction setup", "k_opt_custom": "Custom species \"A\"", "k_opt_h2o2": "Hydrogen peroxide decomposition — H₂O₂", "k_opt_n2o5": "Dinitrogen pentoxide decomposition — N₂O₅", "k_opt_nh3": "Ammonia surface decomposition — NH₃ (0th order)", "k_opt_no2": "Nitrogen dioxide dimerization — NO₂ (2nd order)", "k_or_bank": "Or pick species from reactant bank", "k_generic_species": "— generic species \"A\" —", "k_initial_conc": "Initial concentration [A]₀", "k_rate_constant": "Rate constant k", "k_run_btn": "▶ Run reaction on the bench", "k_halflife_label": "Half-life t½", "k_rate_label": "Initial rate", "k_law_label": "Rate law", "k_surface_beaker": "reaction beaker", "k_surface_chart": "concentration vs. time", "e_reaction_system": "Reaction system", "e_opt_custom": "Custom A + B ⇌ C + D", "e_opt_watergas": "Water-gas shift — CO + H₂O ⇌ CO₂ + H₂", "e_opt_ester": "Esterification — CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O", "e_kc": "Equilibrium constant Kc", "e_initial_A0": "Initial [A]₀", "e_initial_B0": "Initial [B]₀", "e_custom_mode": "Custom mode: name the species (optional)", "e_stress_test": "Le Chatelier stress test", "e_add_a": "+ Add 0.40 M A", "e_remove_c": "− Remove 0.30 M C", "e_dilute": "⇌ Dilute the system", "e_reset": "reset to initial equilibrium", "e_export_ice": "⬇ Export ICE table (CSV)", "e_ice_table": "ICE table", "a_titration_setup": "Titration setup", "a_acid_in_flask": "Acid in flask", "a_opt_custom": "Custom weak acid", "a_opt_hcl": "Hydrochloric acid — HCl", "a_opt_hno3": "Nitric acid — HNO₃", "a_opt_h2so4": "Sulfuric acid — H₂SO₄ (1st H⁺)", "a_opt_ch3cooh": "Acetic acid — CH₃COOH", "a_opt_hf": "Hydrofluoric acid — HF", "a_opt_h3po4": "Phosphoric acid — H₃PO₄ (1st H⁺)", "a_base_in_burette": "Base in burette", "a_opt_naoh": "Sodium hydroxide — NaOH", "a_opt_koh": "Potassium hydroxide — KOH", "a_opt_caoh2": "Calcium hydroxide — Ca(OH)₂", "a_strong_strong": "Strong/Strong", "a_weak_strong": "Weak acid/Strong base", "a_acid_conc": "Acid conc. [HA]", "a_acid_volume": "Acid volume", "a_base_conc": "Base conc. [OH⁻]", "a_pka": "pKa of acid", "a_titrant_added": "Titrant added (drag me)", "a_surface_rig": "titration rig", "a_surface_curve": "titration curve · pH vs. volume", "a_ph_now": "pH now", "a_equiv_vol": "Equiv. Vol.", "a_indicator_label": "Indicator", "a_export_curve": "⬇ Export curve (CSV)", "t_calorimetry": "Calorimetry", "t_opt_custom": "Custom reaction", "t_opt_neutralization": "Neutralization — HCl + NaOH", "t_opt_dissolution": "Dissolution — NH₄NO₃ in water (endothermic)", "t_opt_combustion": "Combustion — CH₄ (highly exothermic)", "t_mass": "Mass of solution", "t_specific_heat": "Specific heat c", "t_delta_t": "Temperature change ΔT", "t_moles": "Moles of reactant", "t_or_bank": "Or compute moles from a reactant bank compound", "t_mass_reactant": "Mass of that reactant", "t_ea": "Activation energy Ea", "t_q_label": "q (heat exchanged)", "t_dh_label": "ΔH (reaction)", "t_dhm_label": "ΔH molar", "t_class_label": "Classification", "t_export_diagram": "⬇ Export diagram data (CSV)", "t_surface_flask": "reaction flask", "t_surface_diagram": "reaction energy diagram", "c_reactants": "Reactants", "c_add_reactant": "+ Add reactant", "c_products": "Products", "c_add_product": "+ Add product", "c_balance_solve": "⚖ Balance & Solve", "c_hint": "Set each reactant's phase and amount, predict the products, then run. Recognized reaction types: combustion, acid–base neutralization, metal + acid, decomposition, and element synthesis.", "c_balanced_eq": "Balanced equation", "c_results": "Stoichiometry results", "c_export_csv": "⬇ Export results (CSV)", "c_err_need_both": "Add at least one reactant and one product.", "c_err_bad_formula": "Unrecognized formula:", "c_err_impossible": "This equation can't be balanced — the elements on each side don't match. Check your formulas.", "c_err_underdetermined": "Not enough information to find a unique balance — try adding another product or reactant.", "c_err_general": "Couldn't balance this equation. Check your formulas and try again.", "c_role_reactant": "Reactant", "c_role_product": "Product", "c_limiting": "limiting", "c_th_role": "Role", "c_th_formula": "Formula", "c_th_coeff": "Coeff.", "c_th_molarmass": "Molar mass", "c_th_input": "Input", "c_th_output": "Result", "c_mass_check": "Mass balance check", "c_in": "in", "c_leftover": "leftover", "r_periodic_table": "Periodic table — click an element to add it to the formula builder", "r_common_reagents": "Common laboratory reagents", "r_formula_builder": "Formula builder", "r_formula_placeholder": "e.g. NaOH, H2SO4, Ca(OH)2", "r_clear": "Clear", "r_molar_mass": "Molar mass", "r_prepare_solution": "Prepare a solution", "r_target_molarity": "Target molarity", "r_target_volume": "Target volume", "r_mass_to_weigh": "Mass to weigh out", "r_dissolve_note": "Dissolve this mass of the selected compound in water and dilute to the target volume in a volumetric flask.", "log_title_pre": "Experiment log (", "log_title_post": " saved) — stored locally in this browser", "log_export_csv": "⬇ Export all (CSV)", "log_export_json": "⬇ Export all (JSON)", "log_clear_all": "clear all", "log_th_time": "Time", "log_th_module": "Module", "log_th_inputs": "Inputs", "log_th_results": "Results", "log_no_experiments": "No experiments logged yet. Use the \"📌 Log this experiment\" button in any module.", "log_confirm_clear": "Clear all logged experiments? This cannot be undone.", "ai_title": "Lab Assistant", "ai_intro": "Ask a quick-help question (works instantly, no download) or load the on-device model below for open-ended chat.", "ai_input_placeholder": "e.g. What does half-life mean?", "ai_send": "Send", "ai_model_title": "On-device AI model (optional)", "ai_load_model": "⬇ Load on-device model", "ai_not_loaded": "Not loaded — quick-help still works without it.", "ai_covers_title": "What quick-help covers", "ai_downloading": "Downloading model (first time only, needs internet)…", "ai_loading_memory": "Loading model into memory…", "ai_ready": "Model loaded ✓ — open-ended questions now use the on-device model.", "ai_ready_btn": "Model loaded", "ai_ready_chat": "On-device model ready. Ask anything — responses are limited compared to a full assistant, but no data leaves your browser.", "ai_load_error": "Couldn't load the model (needs internet + a modern browser). Quick-help still works below. Error:", "ai_thinking": "thinking…", "ai_gen_error": "I couldn't generate a response — try rephrasing.", "ai_fallback_error": "The on-device model hit an error. Falling back to quick-help:", "ai_no_faq": "I don't have a canned answer for that — try loading the model again or rephrasing.", "ai_no_answer": "I don't have an instant answer for that yet. Try one of the suggested questions, rephrase using terms like pH, equilibrium, half-life, or Le Chatelier, or load the on-device model above for open-ended answers.", "classify_exo": "Exothermic", "classify_endo": "Endothermic", "axis_time_s": "TIME (s)", "axis_conc_M": "[A] (M)", "axis_volume_ml": "VOLUME BASE ADDED (mL)", "axis_ph": "pH", "cat_alkali": "Alkali metal", "cat_alkaline": "Alkaline earth", "cat_transition": "Transition metal", "cat_postmetal": "Post-transition metal", "cat_metalloid": "Metalloid", "cat_nonmetal": "Reactive nonmetal", "cat_halogen": "Halogen", "cat_noble": "Noble gas", "cat_lan": "Lanthanide", "cat_act": "Actinide", "cat_other": "Other", "ai_model_desc": "Loads an open-source instruction-tuned language model directly in your browser via <a href=\"https://github.com/huggingface/transformers.js\" target=\"_blank\" rel=\"noopener\">transformers.js</a> — free, no API key, and nothing is sent to a server. It's much less capable than a full assistant. Pick Lite if your connection is slow; first load still needs internet and a minute or two, after that it's cached.", "ai_covers_list": "Half-life · reaction order · Le Chatelier's principle · equilibrium constants · pH &amp; pKa · buffers · titration equivalence points · activation energy · exothermic vs endothermic · molarity &amp; molar mass · limiting reactant", "tab_overview": "Overview", "nav_group_sims": "Simulations", "nav_group_tools": "Tools", "ov_desc_kinetics": "Model reaction rates, orders, and half-life with an animated beaker.", "ov_desc_equilibrium": "Explore Kc, ICE tables, and Le Chatelier's principle with real reagents.", "ov_desc_acidbase": "Simulate titrations, pH curves, and indicator color changes.", "ov_desc_thermo": "Calculate ΔH, classify exo/endothermic reactions, and view energy diagrams.", "ov_desc_custom": "Set reactants and conditions, auto-predict products, chain reactions, and see estimated kinetics & equilibrium.", "ov_desc_reagents": "Browse the periodic table, build formulas, and calculate molar mass.", "ov_desc_log": "Review and export every experiment you've saved, as CSV or JSON.", "ov_desc_ai": "Get instant quick-help answers or chat with an optional on-device AI model.", "r_custom_name_placeholder": "Optional name", "r_add_to_bank": "➕ Add to reactant bank", "r_add_to_bank_invalid": "Build a valid formula first.", "r_add_to_bank_success": "Added {formula} to the reactant bank — it's now selectable in Kinetics, Equilibrium, Thermochemistry, and Custom Reaction.", "r_add_to_bank_exists": "That compound is already in the bank.", "r_suggestions_label": "Suggested real compounds with these elements:", "ind_name_methyl_orange": "Methyl orange", "ind_name_bromothymol": "Bromothymol blue", "ind_name_phenolphthalein": "Phenolphthalein", "ind_state_red": "red", "ind_state_yellow": "yellow", "ind_state_blue": "blue", "ind_state_colorless": "colorless", "ind_state_pink": "pink", "ind_state_transitioning": "transitioning", "a_indicator_note": "Chosen once for this titration; only its color changes as titrant is added — that color change marks the endpoint.", "toast_logged": "Saved to Lab Log ({module})", "c_conditions": "Conditions", "c_temperature": "Temperature", "c_sim_time": "Simulation time", "c_predicted_products_title": "Predicted products", "c_predict_btn": "🔮 Predict products", "c_ai_predict_btn": "🤖 Ask AI for products", "c_run_reaction": "▶ Run Reaction", "c_phase_solid": "Solid · g", "c_phase_solution": "Solution · mL × M", "c_mass_placeholder": "mass (g)", "c_vol_placeholder": "volume (mL)", "c_conc_placeholder": "conc (M)", "c_detected_prefix": "Detected reaction type:", "c_type_combustion": "Combustion", "c_type_neutralization": "Acid–base neutralization", "c_type_metal_acid": "Metal + acid", "c_type_decomposition": "Decomposition", "c_type_synthesis": "Element synthesis", "c_type_unknown": "Unrecognized", "c_type_ai": "AI-suggested (unverified)", "c_predict_failed": "Couldn't automatically recognize this reaction. Try a supported type, or ask the AI assistant (load it first from the AI Assistant tab).", "c_ai_thinking": "Asking the on-device model…", "c_ai_suggested": "AI-suggested products (unverified — please check these).", "c_ai_failed": "The AI couldn't produce usable formulas. Try rephrasing the reactants or enter a supported reaction type.", "c_no_products_yet": "No products yet — click \"Predict products\" above.", "c_err_no_products": "Predict (or AI-suggest) products before running the reaction.", "c_err_run_first": "Run a reaction first — there are no products to chain forward yet.", "c_auto_kinetics": "Auto-generated kinetics", "c_kinetics_surface": "limiting reactant remaining", "c_auto_equilibrium": "Auto-generated equilibrium position", "c_dynamics_disclaimer": "Kinetics and equilibrium panels are educational estimates based on reaction type and temperature — not measured rate constants or equilibrium constants for this specific reaction.", "c_axis_fraction": "FRACTION REMAINING", "c_kinetics_rate": "Estimated rate constant", "c_kinetics_complete": "Estimated completion", "c_kinetics_within": "within", "c_eq_estimate": "Estimated equilibrium constant", "c_eq_complete": "Effectively irreversible — treated as going to completion (>99.9% conversion).", "c_eq_favors_products": "Strongly favors products at equilibrium (roughly >90% conversion).", "c_eq_mixed": "Significant reversibility — meaningful amounts of both reactants and products expected at equilibrium.", "c_eq_favors_reactants": "Favors reactants — limited conversion expected.", "c_chain_btn": "⛓ Use products as next reactants", "toast_reaction_run": "Reaction run — results updated below.", "toast_chained": "Products loaded as new reactants. Predict again to continue the chain.", "ai_model_lite": "Lite (~0.5B params, faster download)", "ai_model_standard": "Standard (~1.5B params, more detailed)", "t_add_substance": "+ Add substance", "t_initial_temp": "Initial temperature", "t_final_temp": "Final temperature", "t_run_simulation": "▶ Run Simulation", "t_hint": "Pick the substance(s) you want to heat or cool, set a mass for each, choose the starting and target temperature, then run. Specific heat is looked up automatically where known.", "t_c_known": "using known specific heat: {c} J/g·°C", "t_c_default": "no data for this compound — using default {c} J/g·°C (water-like)", "t_absorbed": "Heat absorbed (heating)", "t_released": "Heat released (cooling)", "t_total": "Total", "t_th_mass": "Mass", "t_th_c": "c (J/g·°C)", "t_th_q": "q", "t_breakdown_title": "Per-substance breakdown", "t_axis_progress": "PROGRESS (%)", "t_axis_temp": "TEMPERATURE (°C)", "a_run_titration": "▶ Run Titration", "a_running": "Titrating…", "a_reaction_title": "Neutralization reaction", "a_titer_label": "Titer (volume delivered)", "a_endpoint_detected": "Endpoint detected — indicator color change observed. Titration stopped automatically.", "a_eq_unavailable": "Equation not available for this acid/base pair yet.", "toast_endpoint": "Endpoint reached — titer recorded.", "ai_stall_hint": "Still working — if this doesn't move for a while, your network may be blocking huggingface.co (where the model files come from), even though the small transformers.js library itself loaded fine.", "ai_downloading_pct": "Downloading {file}: {pct}%", "ai_load_error_hint": "If this keeps failing even with Lite selected, your network is likely blocking direct downloads from huggingface.co — a school/office firewall or ad-blocker is a common cause. Quick-help works fully offline either way.", "c_ai_auto_trying": "Physical rules couldn't determine the products — automatically asking the on-device AI model instead…", "c_type_esterification": "Esterification (acid + alcohol)", "c_type_saponification": "Saponification (ester + base)", "c_type_alkene_addition": "Alkene addition reaction", "c_type_photosynthesis": "Photosynthesis (requires light energy — not spontaneous in the dark)", "c_vessel_label": "reaction vessel", "c_type_alkyne_addition": "Alkyne addition reaction", "c_type_alkane_halogenation": "Alkane halogenation (radical substitution)", "c_type_alcohol_oxidation": "Alcohol oxidation", "c_type_amine_neutralization": "Amine neutralization", "c_view3d_label": "🧊 View in 3D", "c_ai_suspicious": "⚠ This looks like a simple \"all atoms glued together\" guess with no byproduct — that's rarely how real reactions work outside of specific addition reactions. Treat this as a rough guess, not a verified answer, especially for unusual reactant pairs.", "ai_explain_btn": "🤖 Explain this titration with AI", "ai_explain_btn_thermo": "🤖 Explain this result with AI", "ai_explain_btn_reaction": "🤖 Explain this reaction with AI", "rag_title": "📚 Reference Library (grounds AI answers in your sources)", "rag_desc": "Add excerpts from textbooks or other references (PDF, .txt, or pasted text). When you ask a question or request an AI explanation anywhere in the app, relevant passages are automatically found by keyword matching and included as context for the AI — so answers can cite and stay grounded in your sources instead of relying purely on the model's own training. This is keyword-based retrieval, not true semantic search, so exact terminology in your question helps it find the right passage.", "rag_title_label": "Source title (e.g. author/edition):", "rag_or": "or", "rag_paste_btn": "Paste text instead", "rag_add_pasted": "+ Add pasted text", "rag_empty": "No reference sources added yet.", "rag_processing": "Reading and indexing…", "rag_processing_failed": "Couldn't process that file.", "rag_no_text": "No usable text found to add.", "rag_storage_full": "Couldn't save — your browser's storage is full. Try removing an existing source first, or add a shorter excerpt.", "rag_added": "✓ Added \"{title}\" ({n} passages indexed).", "rag_pasted_default_title": "Pasted excerpt", "tab_designer": "Reaction Designer", "ov_desc_designer": "Draw molecules in Ketcher, validate and analyze with RDKit, predict and render products.", "rd_pipeline_label": "Pipeline:", "rd_pipeline_desc": "Draw (Ketcher) → Validate (RDKit) → Define reaction → Predict → Validate products (RDKit) → Analyze (RDKit) → Display (RDKit render) → Explain.", "rd_step1": "① Draw a molecule (Ketcher)", "rd_ketcher_note": "Draw your structure below, then use Ketcher's menu (☰ → Save/Export, or Ctrl+Shift+C) to copy it as SMILES, and paste it into the field underneath. Ketcher runs in an embedded third-party frame, so — unlike the rest of this app — this step depends on EPAM's hosted service being reachable.", "rd_step2": "② Validate & add reactant (RDKit)", "rd_smiles_label": "SMILES:", "rd_validate_btn": "Validate & add", "rd_reactants_title": "Reactants", "rd_predict_btn": "④ Predict products", "rd_products_title": "⑤⑥⑦ Predicted products — validated & analyzed (RDKit)", "rd_explain_title": "⑧ Explain", "rd_no_reactants": "No reactants added yet — draw or paste a SMILES above.", "rd_validating": "Validating with RDKit…", "rd_invalid_smiles": "RDKit couldn't parse that as a valid molecule.", "rd_valid_added": "✓ Valid — added {formula}.", "rd_rdkit_error": "RDKit error.", "rd_need_reactants": "Add at least one reactant first.", "rd_predicting": "Predicting products…", "rd_predict_failed": "Couldn't predict products for this combination — not in the recognized rule set, and either no AI key is configured or the AI couldn't produce valid SMILES.", "rd_products_invalid": "The candidate product(s) didn't parse as valid molecules.", "rd_predicted_rules": "✓ Predicted using this app's verified reaction rules.", "rd_predicted_ai": "⚠ Predicted by AI (unverified) — RDKit confirms these are valid molecules, but not that they're the correct product for this reaction.", "rd_explain_rules": "This combination matched a known, verified reaction pattern.", "rd_explain_ai": "No rule matched this combination, so an AI model suggested candidate products. RDKit confirmed they're valid molecules, but the AI's chemistry could still be wrong — verify independently.", "rd_reactant_fgs": "Functional groups detected in reactants", "rd_product_fgs": "Functional groups detected in products", "r_suggest_btn": "✨ Suggest compounds (AI)", "r_suggesting": "Suggesting", "r_use": "Use", "r_added": "Added", "r_pick_elements": "Select one or more elements in the periodic table (or type them in the formula field) first.", "r_ai_label": "AI-suggested compounds from {els} ({n}) — unverified, double-check before relying on them.", "r_ai_none": "No valid compounds were returned.", "r_ai_need_key": "Cloud AI needs an API key (AI Assistant tab).", "r_offline_list": "Showing the small built-in list instead.", "tab_conjugation": "Conjugation", "ov_desc_conjugation": "Couple molecules or label biomolecules: amide/NHS, click, thiol–maleimide, oxime, Diels–Alder and more, with pH, temperature and hydrolysis kinetics.", "cj_run": "▶ Run Conjugation", "cj_setup": "Conjugation setup", "cj_mode": "Conjugation type", "cj_mode_chem": "Chemical conjugation (small molecules)", "cj_mode_bio": "Bio-conjugation (proteins, peptides, oligos)", "cj_chemistry": "Coupling chemistry", "cj_target": "Target / substrate", "cj_target_bio": "Biomolecule", "cj_reagent": "Coupling partner / label", "cj_amounts": "Amounts", "cj_conc_chem": "Substrate concentration", "cj_conc_bio": "Biomolecule concentration", "cj_equiv": "Partner equivalents (molar excess)", "cj_volume": "Reaction volume", "cj_add_custom": "➕ Add a reactant to the conjugation bank", "cj_new_name_ph": "Name, e.g. Cy5-NHS ester", "cj_new_formula_ph": "Formula (optional), e.g. C7H6O2", "cj_new_mw_ph": "Molar mass g/mol (if no formula)", "cj_kind_small": "Small molecule / linker / label", "cj_kind_bio": "Biomolecule (protein, peptide, oligo)", "cj_groups_label": "Reactive groups (number of accessible sites for biomolecules):", "cj_equation": "Conjugation equation", "cj_results": "Results", "cj_results_empty": "Choose the partners and press ▶ Run Conjugation.", "cj_log": "📌 Log experiment", "cj_export": "⬇ Export CSV", "cj_add_product": "➕ Add product to bank", "cj_kinetics": "kinetics · fraction vs. time", "cj_disclaimer": "Rate constants, pH profiles and hydrolysis half-lives are literature-typical values for each chemistry, used in a second-order kinetic model. They are teaching estimates, not measurements for your exact molecules.", "ai_copy": "Copy", "ai_copied": "Copied", "sim_speed": "Playback speed", "sim_realtime": "1× (real time)", "sim_preview": "Fast preview (~6 s)", "sim_pause": "Pause", "sim_resume": "Resume", "sim_skip": "Skip to end", "sim_stop": "Stop now", "sim_state_idle": "Ready", "sim_state_running": "Running", "sim_state_paused": "Paused", "sim_state_done": "Finished", "sim_state_stopped": "Stopped", "sim_stopped_at": "Stopped early at {v} after {t}.", "a_rate": "Titrant delivery rate", "t_power": "Heating / cooling power", "t_heat_time": "Time required", "c_kinetics_running": "Reaction in progress — converted:", "lab_title": "🧪 Lab conditions & measurement realism", "lab_mode": "Simulation mode", "lab_mode_real": "Realistic laboratory", "lab_mode_ideal": "Idealized (textbook)", "lab_ambient": "Room temperature (°C)", "lab_pressure": "Air pressure (kPa)", "lab_glass": "Volumetric glassware", "lab_glass_a": "Class A (±tolerance ISO 385/648)", "lab_glass_b": "Class B (2× Class A tolerance)", "lab_class": "Class", "lab_replicates": "Replicate runs (n)", "lab_seed": "Random seed (reproducible)", "lab_note": "Realistic mode adds real-laboratory effects: temperature-dependent constants, activity corrections, glassware tolerances, instrument resolution and noise, heat losses, phase changes, reagent purity and work-up losses. Each run is repeated n times with random errors drawn from a seeded generator, so the same seed always reproduces the same data set. Results are reported as mean ± expanded uncertainty (k = 2) with an uncertainty budget.", "lab_report": "Laboratory report", "lab_replicates_title": "Replicate measurements", "lab_budget_title": "Uncertainty budget (GUM)", "lab_budget_source": "Source", "lab_budget_u": "Standard uncertainty", "lab_budget_rel": "Note", "lab_sim_disclaimer": "These are simulated, model-generated values with literature-typical error sources — not experimental measurements. Use them for planning, teaching and method design; if they appear in a publication, label them as simulated and state the model, parameters and random seed (all included in the CSV export). Real experimental data are still required to support experimental claims.", "ab_true_conc": "True acid concentration (model input)", "ab_found_conc": "Concentration found", "ab_mean_titre": "Mean titre", "ab_ci95": "95 % confidence interval (t)", "ab_equiv_true": "True equivalence volume", "ab_endpoint_ph": "Visual endpoint pH", "ab_ind_error": "Indicator (endpoint) error", "ab_bias": "Bias of result vs. true value", "ab_conditions": "Conditions", "ab_time_per_rep": "Time per titration", "ab_total_time": "all replicates:", "ab_col_titre": "Titre (mL)", "ab_col_conc": "c found (M)", "ab_u_std": "Titrant standardisation", "ab_u_pip": "Pipette (tolerance)", "ab_u_bur": "Burette (tolerance, 2 readings, drop size)", "ab_u_rep": "Repeatability (s/√n)", "ab_u_comb": "Combined standard uncertainty", "ab_warn_indicator": "The chosen indicator changes colour away from the equivalence point (endpoint error {e} %). Use an indicator whose transition range contains the equivalence pH, or a pH meter.", "ab_warn_refill": "The equivalence volume exceeds a 50 mL burette — it would need refilling, adding reading error. Use a more concentrated titrant or a smaller aliquot.", "ab_warn_small": "Titres below 10 mL have a large relative reading error; aim for 15–40 mL.", "ab_note_model": "pH from the exact charge balance with Kw(T) and Davies activity coefficients; endpoint where the indicator colour is first perceived; 0.05 mL drops; ISO glassware tolerances; titrant standardised to 0.1 % RSD.", "ab_note_monoprotic": "Polyprotic acids are treated by their first dissociation step, as labelled in the acid list.", "t_vessel": "Vessel", "t_source": "Heat source", "v_beaker100": "100 mL borosilicate beaker", "v_beaker250": "250 mL borosilicate beaker", "v_beaker600": "600 mL borosilicate beaker", "v_rbf500": "500 mL round-bottom flask", "v_coffee": "Coffee-cup calorimeter (polystyrene)", "v_dewar": "Dewar flask calorimeter", "v_crucible": "Porcelain crucible", "s_bunsen": "Bunsen burner (≈35 % transferred)", "s_hotplate": "Hot plate (≈60 %)", "s_mantle": "Heating mantle (≈80 %)", "s_immersion": "Immersion heater (≈95 %)", "th_sensible": "sensible heat", "th_latent": "Latent heat (phase changes)", "th_balance": "Energy balance", "th_in": "entered", "th_stored": "stored (sample + vessel)", "th_latent_s": "latent", "th_lost": "lost to room", "th_warn_boil": "{f} boils at {T} °C at this air pressure: an open vessel stays at the boiling point until the liquid has evaporated, so the target could not be reached.", "th_warn_stall": "Heat losses balance the heat input at {T} °C — the target cannot be reached with this power/vessel. Increase the power or insulate the vessel.", "th_warn_boiled": "{f} reached its boiling point ({T} °C) and boiled off before the target temperature was reached.", "th_warn_phase": "{f} went through a phase change at {T} °C (plateau in the heating curve).", "th_warn_evap": "{g} g of liquid evaporated — weigh the vessel after the run if mass matters.", "th_target": "Target temperature", "th_reached": "reached", "th_not_reached": "not reached", "th_time": "Time to target", "th_q_meas": "q from thermometer readings (Σ m·c·ΔT)", "th_readings": "Thermometer start → end", "th_supplied": "Energy from source (nominal)", "th_entered": "Energy entering the vessel", "th_losses": "Lost to room", "th_evap": "evaporation", "th_vessel": "Absorbed by glassware", "th_eff": "Overall heating efficiency", "th_mass_lost": "Mass evaporated / boiled", "th_col_time": "Time", "th_col_tend": "T end (°C)", "th_col_q": "q (J)", "th_u_res": "Thermometer resolution (0.1 °C, 2 readings)", "th_u_noise": "Thermometer read noise", "th_u_mass": "Balance (±0.01 g)", "th_note_model": "Energy balance with source efficiency, vessel heat capacity, Newton heat loss to the room, open-surface evaporation (Antoine), melting/boiling plateaus with boiling points corrected for air pressure, and a thermometer with ±0.2 °C calibration offset, 0.1 °C resolution and 8 s response lag.", "c_purity": "Reagent purity (assay)", "c_loss": "Work-up / isolation loss", "c_form": "Solid reactant form", "c_form_powder": "Fine powder", "c_form_granules": "Granules / turnings", "c_form_lumps": "Lumps / ribbon", "c_stir": "Magnetic stirring", "cr_k": "Rate constant k(T)", "cr_mass_transfer": "Mixing / surface-area factor", "cr_xeq": "Equilibrium conversion limit", "cr_conv": "Conversion reached", "cr_after": "after", "cr_t95": "Time to 95 % of equilibrium", "cr_theo": "Theoretical yield (main product)", "cr_isolated": "Isolated product", "cr_yield": "Isolated yield", "cr_inputs": "Inputs", "cr_purity": "purity", "cr_loss": "work-up loss", "cr_col_conv": "Conversion (%)", "cr_col_mass": "Isolated (g)", "cr_col_yield": "Yield (%)", "cr_u_bal": "Balance (±1 mg)", "cr_u_pur": "Reagent assay (±0.5 %)", "cr_warn_eq": "Equilibrium-limited: at most {x} % conversion is possible. Shift it with excess reagent or by removing a product (e.g. water, gas).", "cr_warn_slow": "The reaction is far from complete at this time/temperature; ≈95 % of equilibrium needs about {t}.", "cr_warn_hetero": "A solid reactant with little surface area or no stirring slows the reaction strongly (mass-transfer limited).", "cr_warn_ignition": "Combustion assumes an ignition source (flame/spark) and enough oxygen; without them the mixture will not react at room temperature.", "cr_note_model": "Arrhenius kinetics with reaction-class activation energies, conversion capped by the equilibrium constant, mass-transfer factor for solids/stirring, reagent purity, and random work-up losses. The stoichiometry table above stays the theoretical 100 % case.", "cj_purity": "Reagent activity / purity", "cjr_dol": "Degree of labelling (measured, UV-Vis)", "cjr_yield": "Isolated yield", "cjr_model_val": "Model value (no measurement error)", "cjr_col_eq": "Equiv.", "cjr_col_dol": "DOL", "cjr_col_yield": "Yield (%)", "cjr_u_uv": "UV-Vis quantification (A280 3 %, dye 2 %)", "cjr_u_workup": "Work-up / purification", "cjr_note_bio": "Replicates include reagent pipetting (2 %), pH meter (±0.03), thermostat (±0.3 °C) and reagent activity scatter; DOL is \"measured\" by UV-Vis with A280 and dye-absorbance errors.", "cjr_note_chem": "Replicates include reagent pipetting, pH, temperature and reagent activity scatter, plus a 10 ± 2.5 % purification loss.", "c_phase_liquid": "Pure liquid · mL", "c_phase_gas": "Gas · mL", "c_q_mass": "Mass", "c_q_volume": "Volume", "c_q_density": "Density", "c_q_conc": "Concentration", "c_q_gas_note": "at {T} °C, {P} kPa (ideal gas)", "c_q_invalid": "⚠ enter a valid formula", "c_q_help": "Solids are weighed (g). Pure liquids are measured by volume and converted with their density. Solutions need both volume and molar concentration, because amount = concentration × volume. Gases are measured by volume at room temperature and pressure."}, "es": {"app_eyebrow": "Banco de Reacciones · laboratorio animado", "app_title": "Simulador de Reacciones Químicas", "app_note": "ⓘ Modelos didácticos basados en física — verifica cuantitativamente antes de usar en el laboratorio.", "tab_kinetics": "Cinética", "tab_equilibrium": "Equilibrio", "tab_acidbase": "Ácido–Base", "tab_thermo": "Termoquímica", "tab_custom": "Reacción Personalizada", "tab_reagents": "Reactivos y Elementos", "tab_log": "Registro", "tab_ai": "Asistente IA", "footer_text": "Reaction Bench — una herramienta educativa para intuición previa al laboratorio. Confirma los resultados cuantitativos con literatura primaria antes de aplicarlos experimentalmente.", "reagent_preset": "Reactivo / reacción preestablecida", "export_data_csv": "⬇ Exportar datos (CSV)", "export_chart_png": "⬇ Exportar gráfico (PNG)", "log_this_experiment": "📌 Registrar este experimento", "order_0": "Orden 0", "order_1": "Orden 1", "order_2": "Orden 2", "k_reaction_setup": "Configuración de la reacción", "k_opt_custom": "Especie personalizada \"A\"", "k_opt_h2o2": "Descomposición del peróxido de hidrógeno — H₂O₂", "k_opt_n2o5": "Descomposición del pentóxido de dinitrógeno — N₂O₅", "k_opt_nh3": "Descomposición superficial del amoníaco — NH₃ (orden 0)", "k_opt_no2": "Dimerización del dióxido de nitrógeno — NO₂ (orden 2)", "k_or_bank": "O elige una especie del banco de reactivos", "k_generic_species": "— especie genérica \"A\" —", "k_initial_conc": "Concentración inicial [A]₀", "k_rate_constant": "Constante de velocidad k", "k_run_btn": "▶ Ejecutar reacción en el banco", "k_halflife_label": "Vida media t½", "k_rate_label": "Velocidad inicial", "k_law_label": "Ley de velocidad", "k_surface_beaker": "vaso de reacción", "k_surface_chart": "concentración vs. tiempo", "e_reaction_system": "Sistema de reacción", "e_opt_custom": "Personalizado A + B ⇌ C + D", "e_opt_watergas": "Reacción de gas de agua — CO + H₂O ⇌ CO₂ + H₂", "e_opt_ester": "Esterificación — CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O", "e_kc": "Constante de equilibrio Kc", "e_initial_A0": "[A]₀ inicial", "e_initial_B0": "[B]₀ inicial", "e_custom_mode": "Modo personalizado: nombra las especies (opcional)", "e_stress_test": "Prueba de estrés (Le Chatelier)", "e_add_a": "+ Añadir 0.40 M de A", "e_remove_c": "− Quitar 0.30 M de C", "e_dilute": "⇌ Diluir el sistema", "e_reset": "restablecer al equilibrio inicial", "e_export_ice": "⬇ Exportar tabla ICE (CSV)", "e_ice_table": "Tabla ICE", "a_titration_setup": "Configuración de la titulación", "a_acid_in_flask": "Ácido en el matraz", "a_opt_custom": "Ácido débil personalizado", "a_opt_hcl": "Ácido clorhídrico — HCl", "a_opt_hno3": "Ácido nítrico — HNO₃", "a_opt_h2so4": "Ácido sulfúrico — H₂SO₄ (1er H⁺)", "a_opt_ch3cooh": "Ácido acético — CH₃COOH", "a_opt_hf": "Ácido fluorhídrico — HF", "a_opt_h3po4": "Ácido fosfórico — H₃PO₄ (1er H⁺)", "a_base_in_burette": "Base en la bureta", "a_opt_naoh": "Hidróxido de sodio — NaOH", "a_opt_koh": "Hidróxido de potasio — KOH", "a_opt_caoh2": "Hidróxido de calcio — Ca(OH)₂", "a_strong_strong": "Fuerte/Fuerte", "a_weak_strong": "Ácido débil/Base fuerte", "a_acid_conc": "Conc. ácido [HA]", "a_acid_volume": "Volumen de ácido", "a_base_conc": "Conc. base [OH⁻]", "a_pka": "pKa del ácido", "a_titrant_added": "Titulante añadido (arrástrame)", "a_surface_rig": "montaje de titulación", "a_surface_curve": "curva de titulación · pH vs. volumen", "a_ph_now": "pH actual", "a_equiv_vol": "Vol. equivalencia", "a_indicator_label": "Indicador", "a_export_curve": "⬇ Exportar curva (CSV)", "t_calorimetry": "Calorimetría", "t_opt_custom": "Reacción personalizada", "t_opt_neutralization": "Neutralización — HCl + NaOH", "t_opt_dissolution": "Disolución — NH₄NO₃ en agua (endotérmica)", "t_opt_combustion": "Combustión — CH₄ (muy exotérmica)", "t_mass": "Masa de la disolución", "t_specific_heat": "Calor específico c", "t_delta_t": "Cambio de temperatura ΔT", "t_moles": "Moles de reactivo", "t_or_bank": "O calcula los moles desde un compuesto del banco", "t_mass_reactant": "Masa de ese reactivo", "t_ea": "Energía de activación Ea", "t_q_label": "q (calor intercambiado)", "t_dh_label": "ΔH (reacción)", "t_dhm_label": "ΔH molar", "t_class_label": "Clasificación", "t_export_diagram": "⬇ Exportar datos del diagrama (CSV)", "t_surface_flask": "matraz de reacción", "t_surface_diagram": "diagrama de energía de la reacción", "c_reactants": "Reactivos", "c_add_reactant": "+ Añadir reactivo", "c_products": "Productos", "c_add_product": "+ Añadir producto", "c_balance_solve": "⚖ Balancear y resolver", "c_hint": "Escribe cualquier fórmula (p. ej. KMnO4, Ca(OH)2) o elige una sugerencia del banco de reactivos. Indica la masa en gramos de cada reactivo — la app balancea la ecuación, halla el reactivo limitante y calcula los rendimientos automáticamente.", "c_balanced_eq": "Ecuación balanceada", "c_results": "Resultados estequiométricos", "c_export_csv": "⬇ Exportar resultados (CSV)", "c_err_need_both": "Añade al menos un reactivo y un producto.", "c_err_bad_formula": "Fórmula no reconocida:", "c_err_impossible": "Esta ecuación no se puede balancear — los elementos de cada lado no coinciden. Revisa las fórmulas.", "c_err_underdetermined": "No hay suficiente información para un balance único — intenta añadir otro producto o reactivo.", "c_err_general": "No se pudo balancear esta ecuación. Revisa las fórmulas e inténtalo de nuevo.", "c_role_reactant": "Reactivo", "c_role_product": "Producto", "c_limiting": "limitante", "c_th_role": "Rol", "c_th_formula": "Fórmula", "c_th_coeff": "Coef.", "c_th_molarmass": "Masa molar", "c_th_input": "Entrada", "c_th_output": "Resultado", "c_mass_check": "Verificación de balance de masa", "c_in": "entrada", "c_leftover": "sobrante", "r_periodic_table": "Tabla periódica — haz clic en un elemento para añadirlo al constructor de fórmulas", "r_common_reagents": "Reactivos de laboratorio comunes", "r_formula_builder": "Constructor de fórmulas", "r_formula_placeholder": "p. ej. NaOH, H2SO4, Ca(OH)2", "r_clear": "Borrar", "r_molar_mass": "Masa molar", "r_prepare_solution": "Preparar una disolución", "r_target_molarity": "Molaridad objetivo", "r_target_volume": "Volumen objetivo", "r_mass_to_weigh": "Masa a pesar", "r_dissolve_note": "Disuelve esta masa del compuesto seleccionado en agua y diluye hasta el volumen objetivo en un matraz aforado.", "log_title_pre": "Registro de experimentos (", "log_title_post": " guardados) — almacenado localmente en este navegador", "log_export_csv": "⬇ Exportar todo (CSV)", "log_export_json": "⬇ Exportar todo (JSON)", "log_clear_all": "borrar todo", "log_th_time": "Hora", "log_th_module": "Módulo", "log_th_inputs": "Entradas", "log_th_results": "Resultados", "log_no_experiments": "Aún no hay experimentos registrados. Usa el botón \"📌 Registrar este experimento\" en cualquier módulo.", "log_confirm_clear": "¿Borrar todos los experimentos registrados? Esta acción no se puede deshacer.", "ai_title": "Asistente de Laboratorio", "ai_intro": "Haz una pregunta rápida (funciona al instante, sin descargas) o carga el modelo local para chat abierto.", "ai_input_placeholder": "p. ej. ¿Qué significa la vida media?", "ai_send": "Enviar", "ai_model_title": "Modelo de IA local (opcional)", "ai_load_model": "⬇ Cargar modelo local", "ai_not_loaded": "No cargado — la ayuda rápida funciona igualmente.", "ai_covers_title": "Qué cubre la ayuda rápida", "ai_downloading": "Descargando el modelo (solo la primera vez, necesita internet)…", "ai_loading_memory": "Cargando el modelo en memoria…", "ai_ready": "Modelo cargado ✓ — las preguntas abiertas ahora usan el modelo local.", "ai_ready_btn": "Modelo cargado", "ai_ready_chat": "Modelo local listo. Pregunta lo que quieras — las respuestas son limitadas comparadas con un asistente completo, pero ningún dato sale de tu navegador.", "ai_load_error": "No se pudo cargar el modelo (necesita internet y un navegador moderno). La ayuda rápida sigue funcionando abajo. Error:", "ai_thinking": "pensando…", "ai_gen_error": "No pude generar una respuesta — intenta reformular la pregunta.", "ai_fallback_error": "El modelo local tuvo un error. Usando la ayuda rápida:", "ai_no_faq": "No tengo una respuesta preparada para eso — intenta cargar el modelo de nuevo o reformula la pregunta.", "ai_no_answer": "Todavía no tengo una respuesta instantánea para eso. Prueba una de las preguntas sugeridas, usa términos como pH, equilibrio, vida media o Le Chatelier, o carga el modelo local arriba para respuestas abiertas.", "classify_exo": "Exotérmica", "classify_endo": "Endotérmica", "axis_time_s": "TIEMPO (s)", "axis_conc_M": "[A] (M)", "axis_volume_ml": "VOLUMEN DE BASE AÑADIDO (mL)", "axis_ph": "pH", "cat_alkali": "Metal alcalino", "cat_alkaline": "Alcalinotérreo", "cat_transition": "Metal de transición", "cat_postmetal": "Metal postransición", "cat_metalloid": "Metaloide", "cat_nonmetal": "No metal reactivo", "cat_halogen": "Halógeno", "cat_noble": "Gas noble", "cat_lan": "Lantánido", "cat_act": "Actínido", "cat_other": "Otro", "ai_model_desc": "Carga un modelo de lenguaje de código abierto ajustado por instrucciones directamente en tu navegador mediante <a href=\"https://github.com/huggingface/transformers.js\" target=\"_blank\" rel=\"noopener\">transformers.js</a> — gratis, sin clave de API, y nada se envía a un servidor. Es mucho menos capaz que un asistente completo. Elige Ligero si tu conexión es lenta; la primera carga necesita internet y uno o dos minutos, después queda en caché.", "ai_covers_list": "Vida media · orden de reacción · principio de Le Chatelier · constantes de equilibrio · pH y pKa · disoluciones amortiguadoras · puntos de equivalencia · energía de activación · exotérmica vs endotérmica · molaridad y masa molar · reactivo limitante", "tab_overview": "Resumen", "nav_group_sims": "Simulaciones", "nav_group_tools": "Herramientas", "ov_desc_kinetics": "Modela velocidades de reacción, órdenes y vida media con un vaso animado.", "ov_desc_equilibrium": "Explora Kc, tablas ICE y el principio de Le Chatelier con reactivos reales.", "ov_desc_acidbase": "Simula titulaciones, curvas de pH y cambios de color de indicadores.", "ov_desc_thermo": "Calcula ΔH, clasifica reacciones exo/endotérmicas y visualiza diagramas de energía.", "ov_desc_custom": "Define reactivos y condiciones, predice productos automáticamente, encadena reacciones y observa la cinética y el equilibrio estimados.", "ov_desc_reagents": "Explora la tabla periódica, construye fórmulas y calcula la masa molar.", "ov_desc_log": "Revisa y exporta cada experimento guardado, como CSV o JSON.", "ov_desc_ai": "Obtén ayuda instantánea o chatea con un modelo de IA local opcional.", "r_custom_name_placeholder": "Nombre (opcional)", "r_add_to_bank": "➕ Añadir al banco de reactivos", "r_add_to_bank_invalid": "Primero construye una fórmula válida.", "r_add_to_bank_success": "Se añadió {formula} al banco de reactivos — ya se puede elegir en Cinética, Equilibrio, Termoquímica y Reacción Personalizada.", "r_add_to_bank_exists": "Ese compuesto ya está en el banco.", "r_suggestions_label": "Compuestos reales sugeridos con estos elementos:", "ind_name_methyl_orange": "Anaranjado de metilo", "ind_name_bromothymol": "Azul de bromotimol", "ind_name_phenolphthalein": "Fenolftaleína", "ind_state_red": "rojo", "ind_state_yellow": "amarillo", "ind_state_blue": "azul", "ind_state_colorless": "incoloro", "ind_state_pink": "rosa", "ind_state_transitioning": "en transición", "a_indicator_note": "Elegido una sola vez para esta titulación; solo su color cambia a medida que se añade titulante — ese cambio de color marca el punto final.", "toast_logged": "Guardado en el Registro ({module})", "c_conditions": "Condiciones", "c_temperature": "Temperatura", "c_sim_time": "Tiempo de simulación", "c_predicted_products_title": "Productos predichos", "c_predict_btn": "🔮 Predecir productos", "c_ai_predict_btn": "🤖 Preguntar a la IA por los productos", "c_run_reaction": "▶ Ejecutar reacción", "c_phase_solid": "Sólido · g", "c_phase_solution": "Disolución · mL × M", "c_mass_placeholder": "masa (g)", "c_vol_placeholder": "volumen (mL)", "c_conc_placeholder": "conc (M)", "c_detected_prefix": "Tipo de reacción detectado:", "c_type_combustion": "Combustión", "c_type_neutralization": "Neutralización ácido-base", "c_type_metal_acid": "Metal + ácido", "c_type_decomposition": "Descomposición", "c_type_synthesis": "Síntesis de elementos", "c_type_unknown": "No reconocido", "c_type_ai": "Sugerido por IA (sin verificar)", "c_predict_failed": "No se pudo reconocer esta reacción automáticamente. Prueba un tipo compatible, o pide ayuda al asistente de IA (cárgalo primero en la pestaña Asistente IA).", "c_ai_thinking": "Preguntando al modelo local…", "c_ai_suggested": "Productos sugeridos por IA (sin verificar — revísalos).", "c_ai_failed": "La IA no pudo generar fórmulas utilizables. Reformula los reactivos o introduce un tipo de reacción compatible.", "c_no_products_yet": "Aún no hay productos — pulsa \"Predecir productos\" arriba.", "c_err_no_products": "Predice (o pide a la IA) los productos antes de ejecutar la reacción.", "c_err_run_first": "Ejecuta primero una reacción — todavía no hay productos que encadenar.", "c_auto_kinetics": "Cinética generada automáticamente", "c_kinetics_surface": "reactivo limitante restante", "c_auto_equilibrium": "Posición de equilibrio generada automáticamente", "c_dynamics_disclaimer": "Los paneles de cinética y equilibrio son estimaciones educativas basadas en el tipo de reacción y la temperatura — no son constantes de velocidad ni de equilibrio medidas para esta reacción específica.", "c_axis_fraction": "FRACCIÓN RESTANTE", "c_kinetics_rate": "Constante de velocidad estimada", "c_kinetics_complete": "Finalización estimada", "c_kinetics_within": "en", "c_eq_estimate": "Constante de equilibrio estimada", "c_eq_complete": "Prácticamente irreversible — se trata como si llegara a completarse (>99.9% de conversión).", "c_eq_favors_products": "Favorece fuertemente los productos en el equilibrio (aproximadamente >90% de conversión).", "c_eq_mixed": "Reversibilidad significativa — se esperan cantidades relevantes de reactivos y productos en el equilibrio.", "c_eq_favors_reactants": "Favorece los reactivos — se espera una conversión limitada.", "c_chain_btn": "⛓ Usar productos como próximos reactivos", "toast_reaction_run": "Reacción ejecutada — resultados actualizados abajo.", "toast_chained": "Productos cargados como nuevos reactivos. Predice de nuevo para continuar la cadena.", "ai_model_lite": "Ligero (~0.5B parámetros, descarga más rápida)", "ai_model_standard": "Estándar (~1.5B parámetros, más detallado)", "t_add_substance": "+ Añadir sustancia", "t_initial_temp": "Temperatura inicial", "t_final_temp": "Temperatura final", "t_run_simulation": "▶ Ejecutar simulación", "t_hint": "Elige las sustancias que quieres calentar o enfriar, indica una masa para cada una, elige la temperatura inicial y objetivo, y ejecuta. El calor específico se busca automáticamente cuando se conoce.", "t_c_known": "usando calor específico conocido: {c} J/g·°C", "t_c_default": "sin datos para este compuesto — usando valor por defecto {c} J/g·°C (similar al agua)", "t_absorbed": "Calor absorbido (calentamiento)", "t_released": "Calor liberado (enfriamiento)", "t_total": "Total", "t_th_mass": "Masa", "t_th_c": "c (J/g·°C)", "t_th_q": "q", "t_breakdown_title": "Desglose por sustancia", "t_axis_progress": "PROGRESO (%)", "t_axis_temp": "TEMPERATURA (°C)", "a_run_titration": "▶ Ejecutar titulación", "a_running": "Titulando…", "a_reaction_title": "Reacción de neutralización", "a_titer_label": "Titulante (volumen añadido)", "a_endpoint_detected": "Punto final detectado — se observó el cambio de color del indicador. La titulación se detuvo automáticamente.", "a_eq_unavailable": "La ecuación aún no está disponible para este par ácido/base.", "toast_endpoint": "Punto final alcanzado — titulante registrado.", "ai_stall_hint": "Sigue trabajando — si esto no avanza durante un rato, tu red podría estar bloqueando huggingface.co (de donde vienen los archivos del modelo), aunque la pequeña librería transformers.js se haya cargado bien.", "ai_downloading_pct": "Descargando {file}: {pct}%", "ai_load_error_hint": "Si esto sigue fallando incluso con Ligero seleccionado, tu red probablemente está bloqueando descargas directas desde huggingface.co — un firewall escolar/de oficina o un bloqueador de anuncios es una causa común. La ayuda rápida funciona totalmente sin conexión de todas formas.", "c_ai_auto_trying": "Las reglas físicas no pudieron determinar los productos — preguntando automáticamente al modelo de IA local…", "c_type_esterification": "Esterificación (ácido + alcohol)", "c_type_saponification": "Saponificación (éster + base)", "c_type_alkene_addition": "Reacción de adición a alqueno", "c_type_photosynthesis": "Fotosíntesis (requiere energía luminosa — no ocurre espontáneamente a oscuras)", "c_vessel_label": "recipiente de reacción", "c_type_alkyne_addition": "Reacción de adición a alquino", "c_type_alkane_halogenation": "Halogenación de alcano (sustitución radicalaria)", "c_type_alcohol_oxidation": "Oxidación de alcohol", "c_type_amine_neutralization": "Neutralización de amina", "c_view3d_label": "🧊 Ver en 3D", "c_ai_suspicious": "⚠ Esto parece una simple suposición de \"todos los átomos pegados\" sin subproducto — rara vez así funcionan las reacciones reales, salvo en reacciones de adición específicas. Trátalo como una suposición aproximada, no como una respuesta verificada, sobre todo para combinaciones de reactivos inusuales.", "ai_explain_btn": "🤖 Explicar esta titulación con IA", "ai_explain_btn_thermo": "🤖 Explicar este resultado con IA", "ai_explain_btn_reaction": "🤖 Explicar esta reacción con IA", "rag_title": "📚 Biblioteca de referencias (fundamenta las respuestas de la IA en tus fuentes)", "rag_desc": "Añade extractos de libros de texto u otras referencias (PDF, .txt o texto pegado). Al hacer una pregunta o pedir una explicación de IA en cualquier parte de la app, se buscan automáticamente pasajes relevantes por coincidencia de palabras clave y se incluyen como contexto para la IA, de modo que las respuestas puedan citar y fundamentarse en tus fuentes en lugar de depender solo del entrenamiento del modelo. Esto es recuperación basada en palabras clave, no búsqueda semántica real, así que usar la terminología exacta en tu pregunta ayuda a encontrar el pasaje correcto.", "rag_title_label": "Título de la fuente (p. ej. autor/edición):", "rag_or": "o", "rag_paste_btn": "Pegar texto en su lugar", "rag_add_pasted": "+ Añadir texto pegado", "rag_empty": "Aún no se han añadido fuentes de referencia.", "rag_processing": "Leyendo e indexando…", "rag_processing_failed": "No se pudo procesar ese archivo.", "rag_no_text": "No se encontró texto utilizable para añadir.", "rag_storage_full": "No se pudo guardar — el almacenamiento de tu navegador está lleno. Intenta eliminar una fuente existente primero, o añade un extracto más corto.", "rag_added": "✓ Se añadió \"{title}\" ({n} pasajes indexados).", "rag_pasted_default_title": "Extracto pegado", "tab_designer": "Diseñador de Reacciones", "ov_desc_designer": "Dibuja moléculas en Ketcher, valida y analiza con RDKit, predice y renderiza productos.", "rd_pipeline_label": "Flujo:", "rd_pipeline_desc": "Dibujar (Ketcher) → Validar (RDKit) → Definir reacción → Predecir → Validar productos (RDKit) → Analizar (RDKit) → Mostrar (renderizado RDKit) → Explicar.", "rd_step1": "① Dibuja una molécula (Ketcher)", "rd_ketcher_note": "Dibuja tu estructura abajo, luego usa el menú de Ketcher (☰ → Guardar/Exportar, o Ctrl+Shift+C) para copiarla como SMILES, y pégala en el campo de abajo. Ketcher se ejecuta en un iframe de terceros, así que — a diferencia del resto de esta app — este paso depende de que el servicio alojado por EPAM esté disponible.", "rd_step2": "② Validar y añadir reactivo (RDKit)", "rd_smiles_label": "SMILES:", "rd_validate_btn": "Validar y añadir", "rd_reactants_title": "Reactivos", "rd_predict_btn": "④ Predecir productos", "rd_products_title": "⑤⑥⑦ Productos predichos — validados y analizados (RDKit)", "rd_explain_title": "⑧ Explicar", "rd_no_reactants": "Aún no hay reactivos — dibuja o pega un SMILES arriba.", "rd_validating": "Validando con RDKit…", "rd_invalid_smiles": "RDKit no pudo interpretar eso como una molécula válida.", "rd_valid_added": "✓ Válido — se añadió {formula}.", "rd_rdkit_error": "Error de RDKit.", "rd_need_reactants": "Añade al menos un reactivo primero.", "rd_predicting": "Prediciendo productos…", "rd_predict_failed": "No se pudieron predecir productos para esta combinación — no está en el conjunto de reglas reconocido, y no hay una clave de IA configurada o la IA no pudo generar SMILES válidos.", "rd_products_invalid": "Los productos candidatos no se interpretaron como moléculas válidas.", "rd_predicted_rules": "✓ Predicho usando las reglas de reacción verificadas de esta app.", "rd_predicted_ai": "⚠ Predicho por IA (sin verificar) — RDKit confirma que son moléculas válidas, pero no que sean el producto correcto para esta reacción.", "rd_explain_rules": "Esta combinación coincidió con un patrón de reacción conocido y verificado.", "rd_explain_ai": "Ninguna regla coincidió con esta combinación, así que un modelo de IA sugirió productos candidatos. RDKit confirmó que son moléculas válidas, pero la química de la IA podría seguir siendo incorrecta — verifica de forma independiente.", "rd_reactant_fgs": "Grupos funcionales detectados en los reactivos", "rd_product_fgs": "Grupos funcionales detectados en los productos", "r_suggest_btn": "✨ Sugerir compuestos (IA)", "r_suggesting": "Sugiriendo", "r_use": "Usar", "r_added": "Añadido", "r_pick_elements": "Seleccione primero uno o más elementos en la tabla periódica (o escríbalos en el campo de fórmula).", "r_ai_label": "Compuestos sugeridos por IA a partir de {els} ({n}) — sin verificar, compruébelos antes de usarlos.", "r_ai_none": "No se devolvieron compuestos válidos.", "r_ai_need_key": "La IA en la nube necesita una clave API (pestaña Asistente de IA).", "r_offline_list": "Se muestra la pequeña lista integrada.", "tab_conjugation": "Conjugación", "ov_desc_conjugation": "Une moléculas o marca biomoléculas: amida/NHS, click, tiol–maleimida, oxima, Diels–Alder y más, con cinética de pH, temperatura e hidrólisis.", "cj_run": "▶ Ejecutar conjugación", "cj_setup": "Configuración de la conjugación", "cj_mode": "Tipo de conjugación", "cj_mode_chem": "Conjugación química (moléculas pequeñas)", "cj_mode_bio": "Bioconjugación (proteínas, péptidos, oligos)", "cj_chemistry": "Química de acoplamiento", "cj_target": "Diana / sustrato", "cj_target_bio": "Biomolécula", "cj_reagent": "Socio de acoplamiento / marcador", "cj_amounts": "Cantidades", "cj_conc_chem": "Concentración del sustrato", "cj_conc_bio": "Concentración de la biomolécula", "cj_equiv": "Equivalentes del socio (exceso molar)", "cj_volume": "Volumen de reacción", "cj_add_custom": "➕ Añadir un reactivo al banco de conjugación", "cj_new_name_ph": "Nombre, p. ej. Cy5-NHS éster", "cj_new_formula_ph": "Fórmula (opcional), p. ej. C7H6O2", "cj_new_mw_ph": "Masa molar g/mol (si no hay fórmula)", "cj_kind_small": "Molécula pequeña / enlazador / marcador", "cj_kind_bio": "Biomolécula (proteína, péptido, oligo)", "cj_groups_label": "Grupos reactivos (número de sitios accesibles en biomoléculas):", "cj_equation": "Ecuación de conjugación", "cj_results": "Resultados", "cj_results_empty": "Elija los socios y pulse ▶ Ejecutar conjugación.", "cj_log": "📌 Registrar experimento", "cj_export": "⬇ Exportar CSV", "cj_add_product": "➕ Añadir producto al banco", "cj_kinetics": "cinética · fracción vs. tiempo", "cj_disclaimer": "Las constantes de velocidad, perfiles de pH y vidas medias de hidrólisis son valores típicos de la literatura usados en un modelo cinético de segundo orden. Son estimaciones didácticas, no mediciones de sus moléculas exactas.", "ai_copy": "Copiar", "ai_copied": "Copiado", "sim_speed": "Velocidad de reproducción", "sim_realtime": "1× (tiempo real)", "sim_preview": "Vista rápida (~6 s)", "sim_pause": "Pausar", "sim_resume": "Reanudar", "sim_skip": "Saltar al final", "sim_stop": "Detener ahora", "sim_state_idle": "Listo", "sim_state_running": "En curso", "sim_state_paused": "En pausa", "sim_state_done": "Terminado", "sim_state_stopped": "Detenido", "sim_stopped_at": "Detenido antes de tiempo en {v} tras {t}.", "a_rate": "Velocidad de adición del titulante", "t_power": "Potencia de calentamiento / enfriamiento", "t_heat_time": "Tiempo necesario", "c_kinetics_running": "Reacción en curso — convertido:", "lab_title": "🧪 Condiciones de laboratorio y realismo de medida", "lab_mode": "Modo de simulación", "lab_mode_real": "Laboratorio realista", "lab_mode_ideal": "Idealizado (libro de texto)", "lab_ambient": "Temperatura ambiente (°C)", "lab_pressure": "Presión del aire (kPa)", "lab_glass": "Material volumétrico", "lab_glass_a": "Clase A (tolerancia ISO 385/648)", "lab_glass_b": "Clase B (2× tolerancia de clase A)", "lab_class": "Clase", "lab_replicates": "Réplicas (n)", "lab_seed": "Semilla aleatoria (reproducible)", "lab_note": "El modo realista añade efectos de laboratorio real: constantes dependientes de la temperatura, correcciones de actividad, tolerancias del material de vidrio, resolución y ruido de los instrumentos, pérdidas de calor, cambios de fase, pureza de reactivos y pérdidas en el aislamiento. Cada ensayo se repite n veces con errores aleatorios de un generador con semilla, de modo que la misma semilla reproduce siempre los mismos datos. Los resultados se dan como media ± incertidumbre expandida (k = 2) con un balance de incertidumbre.", "lab_report": "Informe de laboratorio", "lab_replicates_title": "Mediciones replicadas", "lab_budget_title": "Balance de incertidumbre (GUM)", "lab_budget_source": "Fuente", "lab_budget_u": "Incertidumbre típica", "lab_budget_rel": "Nota", "lab_sim_disclaimer": "Son valores simulados generados por un modelo con fuentes de error típicas de la literatura, no mediciones experimentales. Úselos para planificar, enseñar y diseñar métodos; si aparecen en una publicación, indíquelos como simulados y declare el modelo, los parámetros y la semilla (todo incluido en el CSV). Las afirmaciones experimentales siguen requiriendo datos reales.", "ab_true_conc": "Concentración real del ácido (dato del modelo)", "ab_found_conc": "Concentración encontrada", "ab_mean_titre": "Volumen medio de valoración", "ab_ci95": "Intervalo de confianza 95 % (t)", "ab_equiv_true": "Volumen de equivalencia real", "ab_endpoint_ph": "pH del punto final visual", "ab_ind_error": "Error del indicador (punto final)", "ab_bias": "Sesgo del resultado frente al valor real", "ab_conditions": "Condiciones", "ab_time_per_rep": "Tiempo por valoración", "ab_total_time": "todas las réplicas:", "ab_col_titre": "Volumen (mL)", "ab_col_conc": "c encontrada (M)", "ab_u_std": "Normalización del valorante", "ab_u_pip": "Pipeta (tolerancia)", "ab_u_bur": "Bureta (tolerancia, 2 lecturas, tamaño de gota)", "ab_u_rep": "Repetibilidad (s/√n)", "ab_u_comb": "Incertidumbre típica combinada", "ab_warn_indicator": "El indicador elegido vira lejos del punto de equivalencia (error {e} %). Use un indicador cuyo intervalo de viraje contenga el pH de equivalencia, o un pH-metro.", "ab_warn_refill": "El volumen de equivalencia supera una bureta de 50 mL: habría que rellenarla, con más error de lectura. Use un valorante más concentrado o una alícuota menor.", "ab_warn_small": "Volúmenes menores de 10 mL tienen un gran error relativo de lectura; apunte a 15–40 mL.", "ab_note_model": "pH a partir del balance de cargas exacto con Kw(T) y coeficientes de actividad de Davies; punto final cuando se percibe el color del indicador; gotas de 0,05 mL; tolerancias ISO; valorante normalizado al 0,1 % RSD.", "ab_note_monoprotic": "Los ácidos polipróticos se tratan por su primera disociación, como indica la lista.", "t_vessel": "Recipiente", "t_source": "Fuente de calor", "v_beaker100": "Vaso de borosilicato de 100 mL", "v_beaker250": "Vaso de borosilicato de 250 mL", "v_beaker600": "Vaso de borosilicato de 600 mL", "v_rbf500": "Matraz de fondo redondo de 500 mL", "v_coffee": "Calorímetro de vaso de poliestireno", "v_dewar": "Calorímetro Dewar", "v_crucible": "Crisol de porcelana", "s_bunsen": "Mechero Bunsen (≈35 % transferido)", "s_hotplate": "Placa calefactora (≈60 %)", "s_mantle": "Manta calefactora (≈80 %)", "s_immersion": "Calentador de inmersión (≈95 %)", "th_sensible": "calor sensible", "th_latent": "Calor latente (cambios de fase)", "th_balance": "Balance de energía", "th_in": "entrada", "th_stored": "almacenado (muestra + recipiente)", "th_latent_s": "latente", "th_lost": "perdido al ambiente", "th_warn_boil": "{f} hierve a {T} °C a esta presión: un recipiente abierto se mantiene en el punto de ebullición hasta que el líquido se evapora, por lo que no se alcanzó el objetivo.", "th_warn_stall": "Las pérdidas de calor igualan la entrada a {T} °C: no se puede alcanzar el objetivo con esta potencia/recipiente. Aumente la potencia o aísle el recipiente.", "th_warn_boiled": "{f} alcanzó su punto de ebullición ({T} °C) y se evaporó antes de llegar a la temperatura objetivo.", "th_warn_phase": "{f} sufrió un cambio de fase a {T} °C (meseta en la curva).", "th_warn_evap": "Se evaporaron {g} g de líquido; pese el recipiente tras el ensayo si la masa importa.", "th_target": "Temperatura objetivo", "th_reached": "alcanzada", "th_not_reached": "no alcanzada", "th_time": "Tiempo hasta el objetivo", "th_q_meas": "q a partir del termómetro (Σ m·c·ΔT)", "th_readings": "Termómetro inicio → fin", "th_supplied": "Energía de la fuente (nominal)", "th_entered": "Energía que entra al recipiente", "th_losses": "Perdida al ambiente", "th_evap": "evaporación", "th_vessel": "Absorbida por el vidrio", "th_eff": "Eficiencia global de calentamiento", "th_mass_lost": "Masa evaporada / hervida", "th_col_time": "Tiempo", "th_col_tend": "T final (°C)", "th_col_q": "q (J)", "th_u_res": "Resolución del termómetro (0,1 °C, 2 lecturas)", "th_u_noise": "Ruido de lectura", "th_u_mass": "Balanza (±0,01 g)", "th_note_model": "Balance de energía con eficiencia de la fuente, capacidad calorífica del recipiente, pérdidas de Newton al ambiente, evaporación (Antoine), mesetas de fusión/ebullición corregidas por presión y un termómetro con desviación de ±0,2 °C, resolución de 0,1 °C y retardo de 8 s.", "c_purity": "Pureza del reactivo", "c_loss": "Pérdida en el aislamiento", "c_form": "Forma del reactivo sólido", "c_form_powder": "Polvo fino", "c_form_granules": "Gránulos / virutas", "c_form_lumps": "Trozos / cinta", "c_stir": "Agitación magnética", "cr_k": "Constante de velocidad k(T)", "cr_mass_transfer": "Factor de mezcla / superficie", "cr_xeq": "Límite de conversión en equilibrio", "cr_conv": "Conversión alcanzada", "cr_after": "tras", "cr_t95": "Tiempo hasta el 95 % del equilibrio", "cr_theo": "Rendimiento teórico (producto principal)", "cr_isolated": "Producto aislado", "cr_yield": "Rendimiento aislado", "cr_inputs": "Entradas", "cr_purity": "pureza", "cr_loss": "pérdida", "cr_col_conv": "Conversión (%)", "cr_col_mass": "Aislado (g)", "cr_col_yield": "Rendimiento (%)", "cr_u_bal": "Balanza (±1 mg)", "cr_u_pur": "Pureza del reactivo (±0,5 %)", "cr_warn_eq": "Limitada por el equilibrio: como máximo {x} % de conversión. Desplácelo con exceso de reactivo o retirando un producto (agua, gas).", "cr_warn_slow": "La reacción está lejos de completarse a este tiempo/temperatura; el 95 % del equilibrio requiere unos {t}.", "cr_warn_hetero": "Un sólido con poca superficie o sin agitación ralentiza mucho la reacción (limitada por transferencia de masa).", "cr_warn_ignition": "La combustión supone una fuente de ignición (llama/chispa) y oxígeno suficiente; sin ellos la mezcla no reacciona a temperatura ambiente.", "cr_note_model": "Cinética de Arrhenius con energías de activación por tipo de reacción, conversión limitada por la constante de equilibrio, factor de transferencia de masa, pureza del reactivo y pérdidas aleatorias de aislamiento. La tabla estequiométrica sigue siendo el caso teórico del 100 %.", "cj_purity": "Actividad / pureza del reactivo", "cjr_dol": "Grado de marcaje (medido por UV-Vis)", "cjr_yield": "Rendimiento aislado", "cjr_model_val": "Valor del modelo (sin error de medida)", "cjr_col_eq": "Equiv.", "cjr_col_dol": "DOL", "cjr_col_yield": "Rendimiento (%)", "cjr_u_uv": "Cuantificación UV-Vis (A280 3 %, colorante 2 %)", "cjr_u_workup": "Purificación", "cjr_note_bio": "Las réplicas incluyen pipeteo (2 %), pH-metro (±0,03), termostato (±0,3 °C) y actividad del reactivo; el DOL se \"mide\" por UV-Vis con errores de A280 y del colorante.", "cjr_note_chem": "Las réplicas incluyen pipeteo, pH, temperatura y actividad del reactivo, más una pérdida de purificación del 10 ± 2,5 %.", "c_phase_liquid": "Líquido puro · mL", "c_phase_gas": "Gas · mL", "c_q_mass": "Masa", "c_q_volume": "Volumen", "c_q_density": "Densidad", "c_q_conc": "Concentración", "c_q_gas_note": "a {T} °C, {P} kPa (gas ideal)", "c_q_invalid": "⚠ introduzca una fórmula válida", "c_q_help": "Los sólidos se pesan (g). Los líquidos puros se miden por volumen y se convierten con su densidad. Las disoluciones necesitan volumen y concentración molar, porque cantidad = concentración × volumen. Los gases se miden por volumen a temperatura y presión ambiente."}, "fr": {"app_eyebrow": "Reaction Bench · laboratoire animé", "app_title": "Simulateur de Réactions Chimiques", "app_note": "ⓘ Modèles pédagogiques basés sur la physique — vérifiez quantitativement avant utilisation en laboratoire.", "tab_kinetics": "Cinétique", "tab_equilibrium": "Équilibre", "tab_acidbase": "Acide–Base", "tab_thermo": "Thermochimie", "tab_custom": "Réaction Personnalisée", "tab_reagents": "Réactifs et Éléments", "tab_log": "Journal", "tab_ai": "Assistant IA", "footer_text": "Reaction Bench — un outil pédagogique d'intuition avant le laboratoire. Vérifiez les résultats quantitatifs dans la littérature primaire avant de vous y fier expérimentalement.", "reagent_preset": "Réactif / réaction prédéfinie", "export_data_csv": "⬇ Exporter les données (CSV)", "export_chart_png": "⬇ Exporter le graphique (PNG)", "log_this_experiment": "📌 Enregistrer cette expérience", "order_0": "Ordre 0", "order_1": "Ordre 1", "order_2": "Ordre 2", "k_reaction_setup": "Configuration de la réaction", "k_opt_custom": "Espèce personnalisée « A »", "k_opt_h2o2": "Décomposition du peroxyde d'hydrogène — H₂O₂", "k_opt_n2o5": "Décomposition du pentoxyde de diazote — N₂O₅", "k_opt_nh3": "Décomposition surfacique de l'ammoniac — NH₃ (ordre 0)", "k_opt_no2": "Dimérisation du dioxyde d'azote — NO₂ (ordre 2)", "k_or_bank": "Ou choisir une espèce dans la banque de réactifs", "k_generic_species": "— espèce générique « A » —", "k_initial_conc": "Concentration initiale [A]₀", "k_rate_constant": "Constante de vitesse k", "k_run_btn": "▶ Lancer la réaction sur la paillasse", "k_halflife_label": "Demi-vie t½", "k_rate_label": "Vitesse initiale", "k_law_label": "Loi de vitesse", "k_surface_beaker": "bécher réactionnel", "k_surface_chart": "concentration vs. temps", "e_reaction_system": "Système réactionnel", "e_opt_custom": "Personnalisé A + B ⇌ C + D", "e_opt_watergas": "Réaction du gaz à l'eau — CO + H₂O ⇌ CO₂ + H₂", "e_opt_ester": "Estérification — CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O", "e_kc": "Constante d'équilibre Kc", "e_initial_A0": "[A]₀ initiale", "e_initial_B0": "[B]₀ initiale", "e_custom_mode": "Mode personnalisé : nommer les espèces (optionnel)", "e_stress_test": "Test de contrainte (Le Chatelier)", "e_add_a": "+ Ajouter 0,40 M de A", "e_remove_c": "− Retirer 0,30 M de C", "e_dilute": "⇌ Diluer le système", "e_reset": "revenir à l'équilibre initial", "e_export_ice": "⬇ Exporter le tableau ICE (CSV)", "e_ice_table": "Tableau ICE", "a_titration_setup": "Configuration du titrage", "a_acid_in_flask": "Acide dans le ballon", "a_opt_custom": "Acide faible personnalisé", "a_opt_hcl": "Acide chlorhydrique — HCl", "a_opt_hno3": "Acide nitrique — HNO₃", "a_opt_h2so4": "Acide sulfurique — H₂SO₄ (1er H⁺)", "a_opt_ch3cooh": "Acide acétique — CH₃COOH", "a_opt_hf": "Acide fluorhydrique — HF", "a_opt_h3po4": "Acide phosphorique — H₃PO₄ (1er H⁺)", "a_base_in_burette": "Base dans la burette", "a_opt_naoh": "Hydroxyde de sodium — NaOH", "a_opt_koh": "Hydroxyde de potassium — KOH", "a_opt_caoh2": "Hydroxyde de calcium — Ca(OH)₂", "a_strong_strong": "Fort/Fort", "a_weak_strong": "Acide faible/Base forte", "a_acid_conc": "Conc. acide [HA]", "a_acid_volume": "Volume d'acide", "a_base_conc": "Conc. base [OH⁻]", "a_pka": "pKa de l'acide", "a_titrant_added": "Titrant ajouté (glissez-moi)", "a_surface_rig": "montage de titrage", "a_surface_curve": "courbe de titrage · pH vs. volume", "a_ph_now": "pH actuel", "a_equiv_vol": "Vol. équivalence", "a_indicator_label": "Indicateur", "a_export_curve": "⬇ Exporter la courbe (CSV)", "t_calorimetry": "Calorimétrie", "t_opt_custom": "Réaction personnalisée", "t_opt_neutralization": "Neutralisation — HCl + NaOH", "t_opt_dissolution": "Dissolution — NH₄NO₃ dans l'eau (endothermique)", "t_opt_combustion": "Combustion — CH₄ (très exothermique)", "t_mass": "Masse de la solution", "t_specific_heat": "Chaleur spécifique c", "t_delta_t": "Variation de température ΔT", "t_moles": "Moles de réactif", "t_or_bank": "Ou calculer les moles à partir d'un composé de la banque", "t_mass_reactant": "Masse de ce réactif", "t_ea": "Énergie d'activation Ea", "t_q_label": "q (chaleur échangée)", "t_dh_label": "ΔH (réaction)", "t_dhm_label": "ΔH molaire", "t_class_label": "Classification", "t_export_diagram": "⬇ Exporter les données du diagramme (CSV)", "t_surface_flask": "ballon réactionnel", "t_surface_diagram": "diagramme d'énergie de la réaction", "c_reactants": "Réactifs", "c_add_reactant": "+ Ajouter un réactif", "c_products": "Produits", "c_add_product": "+ Ajouter un produit", "c_balance_solve": "⚖ Équilibrer et résoudre", "c_hint": "Saisissez n'importe quelle formule (p. ex. KMnO4, Ca(OH)2) ou choisissez une suggestion de la banque de réactifs. Indiquez la masse en grammes de chaque réactif — l'application équilibre l'équation, trouve le réactif limitant et calcule les rendements automatiquement.", "c_balanced_eq": "Équation équilibrée", "c_results": "Résultats stœchiométriques", "c_export_csv": "⬇ Exporter les résultats (CSV)", "c_err_need_both": "Ajoutez au moins un réactif et un produit.", "c_err_bad_formula": "Formule non reconnue :", "c_err_impossible": "Cette équation ne peut pas être équilibrée — les éléments de chaque côté ne correspondent pas. Vérifiez les formules.", "c_err_underdetermined": "Pas assez d'informations pour un équilibrage unique — essayez d'ajouter un autre produit ou réactif.", "c_err_general": "Impossible d'équilibrer cette équation. Vérifiez les formules et réessayez.", "c_role_reactant": "Réactif", "c_role_product": "Produit", "c_limiting": "limitant", "c_th_role": "Rôle", "c_th_formula": "Formule", "c_th_coeff": "Coeff.", "c_th_molarmass": "Masse molaire", "c_th_input": "Entrée", "c_th_output": "Résultat", "c_mass_check": "Vérification du bilan de masse", "c_in": "entrée", "c_leftover": "restant", "r_periodic_table": "Tableau périodique — cliquez sur un élément pour l'ajouter au générateur de formule", "r_common_reagents": "Réactifs de laboratoire courants", "r_formula_builder": "Générateur de formule", "r_formula_placeholder": "p. ex. NaOH, H2SO4, Ca(OH)2", "r_clear": "Effacer", "r_molar_mass": "Masse molaire", "r_prepare_solution": "Préparer une solution", "r_target_molarity": "Molarité cible", "r_target_volume": "Volume cible", "r_mass_to_weigh": "Masse à peser", "r_dissolve_note": "Dissolvez cette masse du composé sélectionné dans l'eau et diluez jusqu'au volume cible dans une fiole jaugée.", "log_title_pre": "Journal d'expériences (", "log_title_post": " enregistrées) — stocké localement dans ce navigateur", "log_export_csv": "⬇ Tout exporter (CSV)", "log_export_json": "⬇ Tout exporter (JSON)", "log_clear_all": "tout effacer", "log_th_time": "Heure", "log_th_module": "Module", "log_th_inputs": "Entrées", "log_th_results": "Résultats", "log_no_experiments": "Aucune expérience enregistrée pour l'instant. Utilisez le bouton « 📌 Enregistrer cette expérience » dans n'importe quel module.", "log_confirm_clear": "Effacer toutes les expériences enregistrées ? Cette action est irréversible.", "ai_title": "Assistant de Laboratoire", "ai_intro": "Posez une question rapide (instantané, sans téléchargement) ou chargez le modèle local pour une discussion ouverte.", "ai_input_placeholder": "p. ex. Que signifie la demi-vie ?", "ai_send": "Envoyer", "ai_model_title": "Modèle d'IA local (optionnel)", "ai_load_model": "⬇ Charger le modèle local", "ai_not_loaded": "Non chargé — l'aide rapide fonctionne quand même.", "ai_covers_title": "Ce que couvre l'aide rapide", "ai_downloading": "Téléchargement du modèle (une seule fois, nécessite internet)…", "ai_loading_memory": "Chargement du modèle en mémoire…", "ai_ready": "Modèle chargé ✓ — les questions ouvertes utilisent maintenant le modèle local.", "ai_ready_btn": "Modèle chargé", "ai_ready_chat": "Modèle local prêt. Posez n'importe quelle question — les réponses sont limitées par rapport à un assistant complet, mais aucune donnée ne quitte votre navigateur.", "ai_load_error": "Impossible de charger le modèle (nécessite internet et un navigateur récent). L'aide rapide fonctionne toujours ci-dessous. Erreur :", "ai_thinking": "réflexion…", "ai_gen_error": "Je n'ai pas pu générer de réponse — essayez de reformuler.", "ai_fallback_error": "Le modèle local a rencontré une erreur. Retour à l'aide rapide :", "ai_no_faq": "Je n'ai pas de réponse toute faite pour cela — essayez de recharger le modèle ou reformulez.", "ai_no_answer": "Je n'ai pas encore de réponse instantanée pour cela. Essayez l'une des questions suggérées, utilisez des termes comme pH, équilibre, demi-vie ou Le Chatelier, ou chargez le modèle local ci-dessus pour des réponses ouvertes.", "classify_exo": "Exothermique", "classify_endo": "Endothermique", "axis_time_s": "TEMPS (s)", "axis_conc_M": "[A] (M)", "axis_volume_ml": "VOLUME DE BASE AJOUTÉ (mL)", "axis_ph": "pH", "cat_alkali": "Métal alcalin", "cat_alkaline": "Alcalino-terreux", "cat_transition": "Métal de transition", "cat_postmetal": "Métal pauvre", "cat_metalloid": "Métalloïde", "cat_nonmetal": "Non-métal réactif", "cat_halogen": "Halogène", "cat_noble": "Gaz noble", "cat_lan": "Lanthanide", "cat_act": "Actinide", "cat_other": "Autre", "ai_model_desc": "Charge un modèle de langage open source ajusté par instructions directement dans votre navigateur via <a href=\"https://github.com/huggingface/transformers.js\" target=\"_blank\" rel=\"noopener\">transformers.js</a> — gratuit, sans clé API, rien n'est envoyé à un serveur. Il est bien moins capable qu'un assistant complet. Choisissez Léger si votre connexion est lente ; le premier chargement nécessite internet et une minute ou deux, ensuite il est mis en cache.", "ai_covers_list": "Demi-vie · ordre de réaction · principe de Le Chatelier · constantes d'équilibre · pH et pKa · solutions tampons · points d'équivalence · énergie d'activation · exothermique vs endothermique · molarité et masse molaire · réactif limitant", "tab_overview": "Aperçu", "nav_group_sims": "Simulations", "nav_group_tools": "Outils", "ov_desc_kinetics": "Modélisez les vitesses de réaction, les ordres et la demi-vie avec un bécher animé.", "ov_desc_equilibrium": "Explorez Kc, les tableaux ICE et le principe de Le Chatelier avec de vrais réactifs.", "ov_desc_acidbase": "Simulez des titrages, des courbes de pH et des changements de couleur d'indicateurs.", "ov_desc_thermo": "Calculez ΔH, classez les réactions exo/endothermiques et visualisez les diagrammes d'énergie.", "ov_desc_custom": "Définissez réactifs et conditions, prédisez les produits automatiquement, enchaînez les réactions et visualisez la cinétique et l'équilibre estimés.", "ov_desc_reagents": "Parcourez le tableau périodique, construisez des formules et calculez la masse molaire.", "ov_desc_log": "Consultez et exportez chaque expérience enregistrée, en CSV ou JSON.", "ov_desc_ai": "Obtenez de l'aide instantanée ou discutez avec un modèle d'IA local optionnel.", "r_custom_name_placeholder": "Nom (optionnel)", "r_add_to_bank": "➕ Ajouter à la banque de réactifs", "r_add_to_bank_invalid": "Construisez d'abord une formule valide.", "r_add_to_bank_success": "{formula} ajouté à la banque de réactifs — désormais sélectionnable dans Cinétique, Équilibre, Thermochimie et Réaction Personnalisée.", "r_add_to_bank_exists": "Ce composé est déjà dans la banque.", "r_suggestions_label": "Composés réels suggérés avec ces éléments :", "ind_name_methyl_orange": "Orangé de méthyle", "ind_name_bromothymol": "Bleu de bromothymol", "ind_name_phenolphthalein": "Phénolphtaléine", "ind_state_red": "rouge", "ind_state_yellow": "jaune", "ind_state_blue": "bleu", "ind_state_colorless": "incolore", "ind_state_pink": "rose", "ind_state_transitioning": "en transition", "a_indicator_note": "Choisi une seule fois pour ce titrage ; seule sa couleur change à mesure que le titrant est ajouté — ce changement de couleur marque le point final.", "toast_logged": "Enregistré dans le Journal ({module})", "c_conditions": "Conditions", "c_temperature": "Température", "c_sim_time": "Temps de simulation", "c_predicted_products_title": "Produits prédits", "c_predict_btn": "🔮 Prédire les produits", "c_ai_predict_btn": "🤖 Demander à l'IA les produits", "c_run_reaction": "▶ Lancer la réaction", "c_phase_solid": "Solide · g", "c_phase_solution": "Solution · mL × M", "c_mass_placeholder": "masse (g)", "c_vol_placeholder": "volume (mL)", "c_conc_placeholder": "conc (M)", "c_detected_prefix": "Type de réaction détecté :", "c_type_combustion": "Combustion", "c_type_neutralization": "Neutralisation acido-basique", "c_type_metal_acid": "Métal + acide", "c_type_decomposition": "Décomposition", "c_type_synthesis": "Synthèse d'éléments", "c_type_unknown": "Non reconnu", "c_type_ai": "Suggéré par IA (non vérifié)", "c_predict_failed": "Cette réaction n'a pas pu être reconnue automatiquement. Essayez un type pris en charge, ou demandez à l'assistant IA (chargez-le d'abord depuis l'onglet Assistant IA).", "c_ai_thinking": "Interrogation du modèle local…", "c_ai_suggested": "Produits suggérés par l'IA (non vérifiés — veuillez les vérifier).", "c_ai_failed": "L'IA n'a pas pu produire de formules utilisables. Reformulez les réactifs ou saisissez un type de réaction pris en charge.", "c_no_products_yet": "Pas encore de produits — cliquez sur « Prédire les produits » ci-dessus.", "c_err_no_products": "Prédisez (ou demandez à l'IA) les produits avant de lancer la réaction.", "c_err_run_first": "Lancez d'abord une réaction — il n'y a pas encore de produits à enchaîner.", "c_auto_kinetics": "Cinétique générée automatiquement", "c_kinetics_surface": "réactif limitant restant", "c_auto_equilibrium": "Position d'équilibre générée automatiquement", "c_dynamics_disclaimer": "Les panneaux de cinétique et d'équilibre sont des estimations pédagogiques basées sur le type de réaction et la température — pas des constantes de vitesse ou d'équilibre mesurées pour cette réaction précise.", "c_axis_fraction": "FRACTION RESTANTE", "c_kinetics_rate": "Constante de vitesse estimée", "c_kinetics_complete": "Achèvement estimé", "c_kinetics_within": "en", "c_eq_estimate": "Constante d'équilibre estimée", "c_eq_complete": "Pratiquement irréversible — traité comme allant à complétion (>99,9% de conversion).", "c_eq_favors_products": "Favorise fortement les produits à l'équilibre (environ >90% de conversion).", "c_eq_mixed": "Réversibilité significative — quantités notables de réactifs et de produits attendues à l'équilibre.", "c_eq_favors_reactants": "Favorise les réactifs — conversion limitée attendue.", "c_chain_btn": "⛓ Utiliser les produits comme prochains réactifs", "toast_reaction_run": "Réaction exécutée — résultats mis à jour ci-dessous.", "toast_chained": "Produits chargés comme nouveaux réactifs. Prédisez à nouveau pour continuer la chaîne.", "ai_model_lite": "Léger (~0,5 Md de paramètres, téléchargement plus rapide)", "ai_model_standard": "Standard (~1,5 Md de paramètres, plus détaillé)", "t_add_substance": "+ Ajouter une substance", "t_initial_temp": "Température initiale", "t_final_temp": "Température finale", "t_run_simulation": "▶ Lancer la simulation", "t_hint": "Choisissez la ou les substances à chauffer ou refroidir, indiquez une masse pour chacune, choisissez la température de départ et cible, puis lancez. La chaleur spécifique est recherchée automatiquement quand elle est connue.", "t_c_known": "chaleur spécifique connue utilisée : {c} J/g·°C", "t_c_default": "pas de données pour ce composé — valeur par défaut {c} J/g·°C (comme l'eau)", "t_absorbed": "Chaleur absorbée (chauffage)", "t_released": "Chaleur libérée (refroidissement)", "t_total": "Total", "t_th_mass": "Masse", "t_th_c": "c (J/g·°C)", "t_th_q": "q", "t_breakdown_title": "Détail par substance", "t_axis_progress": "PROGRESSION (%)", "t_axis_temp": "TEMPÉRATURE (°C)", "a_run_titration": "▶ Lancer le titrage", "a_running": "Titrage en cours…", "a_reaction_title": "Réaction de neutralisation", "a_titer_label": "Titre (volume versé)", "a_endpoint_detected": "Point final détecté — changement de couleur de l'indicateur observé. Titrage arrêté automatiquement.", "a_eq_unavailable": "Équation pas encore disponible pour cette paire acide/base.", "toast_endpoint": "Point final atteint — titre enregistré.", "ai_stall_hint": "Toujours en cours — si cela ne progresse pas pendant un moment, votre réseau bloque peut-être huggingface.co (d'où proviennent les fichiers du modèle), même si la petite bibliothèque transformers.js s'est chargée correctement.", "ai_downloading_pct": "Téléchargement de {file} : {pct}%", "ai_load_error_hint": "Si cela continue d'échouer même avec Léger sélectionné, votre réseau bloque probablement les téléchargements directs depuis huggingface.co — un pare-feu scolaire/professionnel ou un bloqueur de publicités en est une cause fréquente. L'aide rapide fonctionne entièrement hors ligne de toute façon.", "c_ai_auto_trying": "Les règles physiques n'ont pas pu déterminer les produits — interrogation automatique du modèle d'IA local…", "c_type_esterification": "Estérification (acide + alcool)", "c_type_saponification": "Saponification (ester + base)", "c_type_alkene_addition": "Réaction d'addition sur un alcène", "c_type_photosynthesis": "Photosynthèse (nécessite de l'énergie lumineuse — non spontanée dans l'obscurité)", "c_vessel_label": "récipient réactionnel", "c_type_alkyne_addition": "Réaction d'addition sur un alcyne", "c_type_alkane_halogenation": "Halogénation d'alcane (substitution radicalaire)", "c_type_alcohol_oxidation": "Oxydation d'alcool", "c_type_amine_neutralization": "Neutralisation d'amine", "c_view3d_label": "🧊 Voir en 3D", "c_ai_suspicious": "⚠ Cela ressemble à une simple supposition « tous les atomes collés ensemble » sans sous-produit — les réactions réelles fonctionnent rarement ainsi, sauf dans des réactions d'addition spécifiques. Considérez ceci comme une estimation approximative, pas une réponse vérifiée, surtout pour des combinaisons de réactifs inhabituelles.", "ai_explain_btn": "🤖 Expliquer ce titrage avec l'IA", "ai_explain_btn_thermo": "🤖 Expliquer ce résultat avec l'IA", "ai_explain_btn_reaction": "🤖 Expliquer cette réaction avec l'IA", "rag_title": "📚 Bibliothèque de références (ancre les réponses de l'IA dans vos sources)", "rag_desc": "Ajoutez des extraits de manuels ou d'autres références (PDF, .txt, ou texte collé). Lorsque vous posez une question ou demandez une explication IA n'importe où dans l'app, les passages pertinents sont automatiquement trouvés par correspondance de mots-clés et inclus comme contexte pour l'IA — les réponses peuvent ainsi citer et rester ancrées dans vos sources plutôt que de dépendre uniquement de l'entraînement du modèle. Il s'agit d'une recherche par mots-clés, pas d'une véritable recherche sémantique, donc une terminologie exacte dans votre question aide à trouver le bon passage.", "rag_title_label": "Titre de la source (ex. auteur/édition) :", "rag_or": "ou", "rag_paste_btn": "Coller du texte à la place", "rag_add_pasted": "+ Ajouter le texte collé", "rag_empty": "Aucune source de référence ajoutée pour l'instant.", "rag_processing": "Lecture et indexation…", "rag_processing_failed": "Impossible de traiter ce fichier.", "rag_no_text": "Aucun texte utilisable trouvé à ajouter.", "rag_storage_full": "Impossible d'enregistrer — le stockage de votre navigateur est plein. Essayez de supprimer une source existante d'abord, ou ajoutez un extrait plus court.", "rag_added": "✓ « {title} » ajouté ({n} passages indexés).", "rag_pasted_default_title": "Extrait collé", "tab_designer": "Concepteur de Réactions", "ov_desc_designer": "Dessinez des molécules dans Ketcher, validez et analysez avec RDKit, prédisez et affichez les produits.", "rd_pipeline_label": "Pipeline :", "rd_pipeline_desc": "Dessiner (Ketcher) → Valider (RDKit) → Définir la réaction → Prédire → Valider les produits (RDKit) → Analyser (RDKit) → Afficher (rendu RDKit) → Expliquer.", "rd_step1": "① Dessinez une molécule (Ketcher)", "rd_ketcher_note": "Dessinez votre structure ci-dessous, puis utilisez le menu de Ketcher (☰ → Enregistrer/Exporter, ou Ctrl+Shift+C) pour la copier en SMILES, et collez-la dans le champ ci-dessous. Ketcher s'exécute dans un cadre tiers intégré, donc — contrairement au reste de cette application — cette étape dépend de la disponibilité du service hébergé par EPAM.", "rd_step2": "② Valider et ajouter le réactif (RDKit)", "rd_smiles_label": "SMILES :", "rd_validate_btn": "Valider et ajouter", "rd_reactants_title": "Réactifs", "rd_predict_btn": "④ Prédire les produits", "rd_products_title": "⑤⑥⑦ Produits prédits — validés et analysés (RDKit)", "rd_explain_title": "⑧ Expliquer", "rd_no_reactants": "Aucun réactif ajouté pour l'instant — dessinez ou collez un SMILES ci-dessus.", "rd_validating": "Validation avec RDKit…", "rd_invalid_smiles": "RDKit n'a pas pu interpréter cela comme une molécule valide.", "rd_valid_added": "✓ Valide — {formula} ajouté.", "rd_rdkit_error": "Erreur RDKit.", "rd_need_reactants": "Ajoutez d'abord au moins un réactif.", "rd_predicting": "Prédiction des produits…", "rd_predict_failed": "Impossible de prédire les produits pour cette combinaison — hors de l'ensemble de règles reconnu, et aucune clé IA n'est configurée ou l'IA n'a pas pu produire de SMILES valides.", "rd_products_invalid": "Le(s) produit(s) candidat(s) ne correspondaient pas à des molécules valides.", "rd_predicted_rules": "✓ Prédit à l'aide des règles de réaction vérifiées de cette application.", "rd_predicted_ai": "⚠ Prédit par IA (non vérifié) — RDKit confirme que ce sont des molécules valides, mais pas que ce sont les bons produits pour cette réaction.", "rd_explain_rules": "Cette combinaison correspond à un schéma réactionnel connu et vérifié.", "rd_explain_ai": "Aucune règle ne correspondait à cette combinaison, un modèle d'IA a donc suggéré des produits candidats. RDKit a confirmé qu'il s'agit de molécules valides, mais la chimie de l'IA pourrait tout de même être incorrecte — vérifiez indépendamment.", "rd_reactant_fgs": "Groupes fonctionnels détectés dans les réactifs", "rd_product_fgs": "Groupes fonctionnels détectés dans les produits", "r_suggest_btn": "✨ Suggérer des composés (IA)", "r_suggesting": "Suggestion en cours", "r_use": "Utiliser", "r_added": "Ajouté", "r_pick_elements": "Sélectionnez d'abord un ou plusieurs éléments dans le tableau périodique (ou saisissez-les dans le champ de formule).", "r_ai_label": "Composés suggérés par l'IA à partir de {els} ({n}) — non vérifiés, à confirmer avant usage.", "r_ai_none": "Aucun composé valide n'a été renvoyé.", "r_ai_need_key": "L'IA cloud nécessite une clé API (onglet Assistant IA).", "r_offline_list": "Affichage de la petite liste intégrée.", "tab_conjugation": "Conjugaison", "ov_desc_conjugation": "Couplez des molécules ou marquez des biomolécules : amide/NHS, click, thiol–maléimide, oxime, Diels–Alder et plus, avec cinétique de pH, température et hydrolyse.", "cj_run": "▶ Lancer la conjugaison", "cj_setup": "Paramètres de conjugaison", "cj_mode": "Type de conjugaison", "cj_mode_chem": "Conjugaison chimique (petites molécules)", "cj_mode_bio": "Bioconjugaison (protéines, peptides, oligos)", "cj_chemistry": "Chimie de couplage", "cj_target": "Cible / substrat", "cj_target_bio": "Biomolécule", "cj_reagent": "Partenaire de couplage / marqueur", "cj_amounts": "Quantités", "cj_conc_chem": "Concentration du substrat", "cj_conc_bio": "Concentration de la biomolécule", "cj_equiv": "Équivalents du partenaire (excès molaire)", "cj_volume": "Volume réactionnel", "cj_add_custom": "➕ Ajouter un réactif à la banque de conjugaison", "cj_new_name_ph": "Nom, ex. ester Cy5-NHS", "cj_new_formula_ph": "Formule (facultatif), ex. C7H6O2", "cj_new_mw_ph": "Masse molaire g/mol (sans formule)", "cj_kind_small": "Petite molécule / lieur / marqueur", "cj_kind_bio": "Biomolécule (protéine, peptide, oligo)", "cj_groups_label": "Groupes réactifs (nombre de sites accessibles pour les biomolécules) :", "cj_equation": "Équation de conjugaison", "cj_results": "Résultats", "cj_results_empty": "Choisissez les partenaires puis ▶ Lancer la conjugaison.", "cj_log": "📌 Enregistrer l'expérience", "cj_export": "⬇ Exporter CSV", "cj_add_product": "➕ Ajouter le produit à la banque", "cj_kinetics": "cinétique · fraction vs temps", "cj_disclaimer": "Les constantes de vitesse, profils de pH et demi-vies d'hydrolyse sont des valeurs typiques de la littérature utilisées dans un modèle cinétique du second ordre. Ce sont des estimations pédagogiques, pas des mesures pour vos molécules exactes.", "ai_copy": "Copier", "ai_copied": "Copié", "sim_speed": "Vitesse de lecture", "sim_realtime": "1× (temps réel)", "sim_preview": "Aperçu rapide (~6 s)", "sim_pause": "Pause", "sim_resume": "Reprendre", "sim_skip": "Aller à la fin", "sim_stop": "Arrêter", "sim_state_idle": "Prêt", "sim_state_running": "En cours", "sim_state_paused": "En pause", "sim_state_done": "Terminé", "sim_state_stopped": "Arrêté", "sim_stopped_at": "Arrêté prématurément à {v} après {t}.", "a_rate": "Débit du titrant", "t_power": "Puissance de chauffage / refroidissement", "t_heat_time": "Durée nécessaire", "c_kinetics_running": "Réaction en cours — converti :", "lab_title": "🧪 Conditions de laboratoire et réalisme des mesures", "lab_mode": "Mode de simulation", "lab_mode_real": "Laboratoire réaliste", "lab_mode_ideal": "Idéalisé (manuel)", "lab_ambient": "Température de la pièce (°C)", "lab_pressure": "Pression atmosphérique (kPa)", "lab_glass": "Verrerie volumétrique", "lab_glass_a": "Classe A (tolérance ISO 385/648)", "lab_glass_b": "Classe B (2× la tolérance classe A)", "lab_class": "Classe", "lab_replicates": "Répétitions (n)", "lab_seed": "Graine aléatoire (reproductible)", "lab_note": "Le mode réaliste ajoute les effets d'un vrai laboratoire : constantes dépendant de la température, corrections d'activité, tolérances de la verrerie, résolution et bruit des instruments, pertes thermiques, changements de phase, pureté des réactifs et pertes lors de l'isolement. Chaque essai est répété n fois avec des erreurs aléatoires issues d'un générateur à graine : la même graine reproduit toujours les mêmes données. Les résultats sont donnés en moyenne ± incertitude élargie (k = 2) avec un bilan d'incertitude.", "lab_report": "Rapport de laboratoire", "lab_replicates_title": "Mesures répétées", "lab_budget_title": "Bilan d'incertitude (GUM)", "lab_budget_source": "Source", "lab_budget_u": "Incertitude-type", "lab_budget_rel": "Note", "lab_sim_disclaimer": "Ce sont des valeurs simulées par un modèle avec des sources d'erreur typiques de la littérature, pas des mesures expérimentales. Utilisez-les pour planifier, enseigner et concevoir des méthodes ; dans une publication, indiquez qu'elles sont simulées avec le modèle, les paramètres et la graine (inclus dans l'export CSV). Les conclusions expérimentales exigent toujours des données réelles.", "ab_true_conc": "Concentration réelle de l'acide (entrée du modèle)", "ab_found_conc": "Concentration trouvée", "ab_mean_titre": "Volume moyen versé", "ab_ci95": "Intervalle de confiance 95 % (t)", "ab_equiv_true": "Volume d'équivalence réel", "ab_endpoint_ph": "pH du point de fin visuel", "ab_ind_error": "Erreur d'indicateur (point de fin)", "ab_bias": "Biais du résultat vs valeur réelle", "ab_conditions": "Conditions", "ab_time_per_rep": "Durée par titrage", "ab_total_time": "toutes les répétitions :", "ab_col_titre": "Volume (mL)", "ab_col_conc": "c trouvée (M)", "ab_u_std": "Étalonnage du titrant", "ab_u_pip": "Pipette (tolérance)", "ab_u_bur": "Burette (tolérance, 2 lectures, taille de goutte)", "ab_u_rep": "Répétabilité (s/√n)", "ab_u_comb": "Incertitude-type composée", "ab_warn_indicator": "L'indicateur choisi vire loin du point d'équivalence (erreur {e} %). Choisissez un indicateur dont la zone de virage contient le pH d'équivalence, ou un pH-mètre.", "ab_warn_refill": "Le volume d'équivalence dépasse une burette de 50 mL : il faudrait la remplir à nouveau, ce qui ajoute une erreur. Utilisez un titrant plus concentré ou une prise d'essai plus petite.", "ab_warn_small": "Les volumes inférieurs à 10 mL ont une forte erreur relative de lecture ; visez 15–40 mL.", "ab_note_model": "pH par bilan de charges exact avec Kw(T) et coefficients d'activité de Davies ; point de fin à la première perception du virage ; gouttes de 0,05 mL ; tolérances ISO ; titrant étalonné à 0,1 % RSD.", "ab_note_monoprotic": "Les acides polyprotiques sont traités par leur première dissociation, comme indiqué dans la liste.", "t_vessel": "Récipient", "t_source": "Source de chaleur", "v_beaker100": "Bécher borosilicate 100 mL", "v_beaker250": "Bécher borosilicate 250 mL", "v_beaker600": "Bécher borosilicate 600 mL", "v_rbf500": "Ballon à fond rond 500 mL", "v_coffee": "Calorimètre gobelet polystyrène", "v_dewar": "Calorimètre vase Dewar", "v_crucible": "Creuset en porcelaine", "s_bunsen": "Bec Bunsen (≈35 % transmis)", "s_hotplate": "Plaque chauffante (≈60 %)", "s_mantle": "Chauffe-ballon (≈80 %)", "s_immersion": "Thermoplongeur (≈95 %)", "th_sensible": "chaleur sensible", "th_latent": "Chaleur latente (changements de phase)", "th_balance": "Bilan énergétique", "th_in": "entrée", "th_stored": "stockée (échantillon + récipient)", "th_latent_s": "latente", "th_lost": "perdue dans la pièce", "th_warn_boil": "{f} bout à {T} °C à cette pression : un récipient ouvert reste au point d'ébullition jusqu'à évaporation du liquide, l'objectif n'a donc pas été atteint.", "th_warn_stall": "Les pertes thermiques égalent l'apport à {T} °C : l'objectif est inaccessible avec cette puissance/ce récipient. Augmentez la puissance ou isolez le récipient.", "th_warn_boiled": "{f} a atteint son point d'ébullition ({T} °C) et s'est évaporé avant la température visée.", "th_warn_phase": "{f} a subi un changement de phase à {T} °C (palier sur la courbe).", "th_warn_evap": "{g} g de liquide se sont évaporés — pesez le récipient après l'essai si la masse compte.", "th_target": "Température visée", "th_reached": "atteinte", "th_not_reached": "non atteinte", "th_time": "Temps jusqu'à l'objectif", "th_q_meas": "q à partir du thermomètre (Σ m·c·ΔT)", "th_readings": "Thermomètre début → fin", "th_supplied": "Énergie de la source (nominale)", "th_entered": "Énergie entrant dans le récipient", "th_losses": "Perdue dans la pièce", "th_evap": "évaporation", "th_vessel": "Absorbée par la verrerie", "th_eff": "Rendement global de chauffe", "th_mass_lost": "Masse évaporée / bouillie", "th_col_time": "Durée", "th_col_tend": "T finale (°C)", "th_col_q": "q (J)", "th_u_res": "Résolution du thermomètre (0,1 °C, 2 lectures)", "th_u_noise": "Bruit de lecture", "th_u_mass": "Balance (±0,01 g)", "th_note_model": "Bilan énergétique avec rendement de la source, capacité thermique du récipient, pertes de Newton, évaporation (Antoine), paliers de fusion/ébullition corrigés de la pression, et thermomètre avec décalage ±0,2 °C, résolution 0,1 °C et temps de réponse 8 s.", "c_purity": "Pureté du réactif", "c_loss": "Perte à l'isolement", "c_form": "Forme du réactif solide", "c_form_powder": "Poudre fine", "c_form_granules": "Granulés / copeaux", "c_form_lumps": "Morceaux / ruban", "c_stir": "Agitation magnétique", "cr_k": "Constante de vitesse k(T)", "cr_mass_transfer": "Facteur de mélange / surface", "cr_xeq": "Conversion limite à l'équilibre", "cr_conv": "Conversion atteinte", "cr_after": "après", "cr_t95": "Temps pour 95 % de l'équilibre", "cr_theo": "Rendement théorique (produit principal)", "cr_isolated": "Produit isolé", "cr_yield": "Rendement isolé", "cr_inputs": "Entrées", "cr_purity": "pureté", "cr_loss": "perte", "cr_col_conv": "Conversion (%)", "cr_col_mass": "Isolé (g)", "cr_col_yield": "Rendement (%)", "cr_u_bal": "Balance (±1 mg)", "cr_u_pur": "Titre du réactif (±0,5 %)", "cr_warn_eq": "Limité par l'équilibre : au plus {x} % de conversion. Déplacez-le avec un excès de réactif ou en retirant un produit (eau, gaz).", "cr_warn_slow": "La réaction est loin d'être complète à ce temps/cette température ; 95 % de l'équilibre demandent environ {t}.", "cr_warn_hetero": "Un solide peu divisé ou sans agitation ralentit fortement la réaction (limitée par le transfert de matière).", "cr_warn_ignition": "La combustion suppose une source d'ignition (flamme/étincelle) et assez d'oxygène ; sans elles, le mélange ne réagit pas à température ambiante.", "cr_note_model": "Cinétique d'Arrhenius avec énergies d'activation par classe de réaction, conversion bornée par la constante d'équilibre, facteur de transfert de matière, pureté du réactif et pertes aléatoires à l'isolement. Le tableau stœchiométrique reste le cas théorique à 100 %.", "cj_purity": "Activité / pureté du réactif", "cjr_dol": "Degré de marquage (mesuré par UV-Vis)", "cjr_yield": "Rendement isolé", "cjr_model_val": "Valeur du modèle (sans erreur de mesure)", "cjr_col_eq": "Équiv.", "cjr_col_dol": "DOL", "cjr_col_yield": "Rendement (%)", "cjr_u_uv": "Quantification UV-Vis (A280 3 %, colorant 2 %)", "cjr_u_workup": "Purification", "cjr_note_bio": "Les répétitions incluent le pipetage (2 %), le pH-mètre (±0,03), le thermostat (±0,3 °C) et l'activité du réactif ; le DOL est « mesuré » par UV-Vis avec erreurs A280 et colorant.", "cjr_note_chem": "Les répétitions incluent pipetage, pH, température et activité du réactif, plus une perte de purification de 10 ± 2,5 %.", "c_phase_liquid": "Liquide pur · mL", "c_phase_gas": "Gaz · mL", "c_q_mass": "Masse", "c_q_volume": "Volume", "c_q_density": "Masse volumique", "c_q_conc": "Concentration", "c_q_gas_note": "à {T} °C, {P} kPa (gaz parfait)", "c_q_invalid": "⚠ saisissez une formule valide", "c_q_help": "Les solides sont pesés (g). Les liquides purs sont mesurés en volume puis convertis par leur masse volumique. Les solutions exigent le volume et la concentration molaire, car quantité = concentration × volume. Les gaz sont mesurés en volume à température et pression ambiantes."}, "de": {"app_eyebrow": "Reaction Bench · animierte Werkbank", "app_title": "Chemie-Simulationswerkbank", "app_note": "ⓘ Physikalisch basierte Lehrmodelle — vor dem Laboreinsatz quantitativ überprüfen.", "tab_kinetics": "Kinetik", "tab_equilibrium": "Gleichgewicht", "tab_acidbase": "Säure–Base", "tab_thermo": "Thermochemie", "tab_custom": "Eigene Reaktion", "tab_reagents": "Reagenzien & Elemente", "tab_log": "Laborbuch", "tab_ai": "KI-Assistent", "footer_text": "Reaction Bench — ein pädagogisches Werkzeug für die Intuition vor dem Labor. Überprüfen Sie quantitative Ergebnisse anhand von Primärliteratur, bevor Sie sich experimentell darauf verlassen.", "reagent_preset": "Reagenz / Reaktions-Voreinstellung", "export_data_csv": "⬇ Daten exportieren (CSV)", "export_chart_png": "⬇ Diagramm exportieren (PNG)", "log_this_experiment": "📌 Experiment protokollieren", "order_0": "0. Ordnung", "order_1": "1. Ordnung", "order_2": "2. Ordnung", "k_reaction_setup": "Reaktionseinstellung", "k_opt_custom": "Benutzerdefinierte Spezies „A“", "k_opt_h2o2": "Zerfall von Wasserstoffperoxid — H₂O₂", "k_opt_n2o5": "Zerfall von Distickstoffpentoxid — N₂O₅", "k_opt_nh3": "Oberflächenzerfall von Ammoniak — NH₃ (0. Ordnung)", "k_opt_no2": "Dimerisierung von Stickstoffdioxid — NO₂ (2. Ordnung)", "k_or_bank": "Oder Spezies aus der Reagenzienbank wählen", "k_generic_species": "— generische Spezies „A“ —", "k_initial_conc": "Anfangskonzentration [A]₀", "k_rate_constant": "Geschwindigkeitskonstante k", "k_run_btn": "▶ Reaktion auf der Werkbank starten", "k_halflife_label": "Halbwertszeit t½", "k_rate_label": "Anfangsgeschwindigkeit", "k_law_label": "Geschwindigkeitsgesetz", "k_surface_beaker": "Reaktionsbecher", "k_surface_chart": "Konzentration vs. Zeit", "e_reaction_system": "Reaktionssystem", "e_opt_custom": "Benutzerdefiniert A + B ⇌ C + D", "e_opt_watergas": "Wassergas-Shift-Reaktion — CO + H₂O ⇌ CO₂ + H₂", "e_opt_ester": "Veresterung — CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O", "e_kc": "Gleichgewichtskonstante Kc", "e_initial_A0": "Anfangs-[A]₀", "e_initial_B0": "Anfangs-[B]₀", "e_custom_mode": "Benutzerdefinierter Modus: Spezies benennen (optional)", "e_stress_test": "Störungstest (Le Chatelier)", "e_add_a": "+ 0,40 M A hinzufügen", "e_remove_c": "− 0,30 M C entfernen", "e_dilute": "⇌ System verdünnen", "e_reset": "auf Ausgangsgleichgewicht zurücksetzen", "e_export_ice": "⬇ ICE-Tabelle exportieren (CSV)", "e_ice_table": "ICE-Tabelle", "a_titration_setup": "Titrationsaufbau", "a_acid_in_flask": "Säure im Kolben", "a_opt_custom": "Benutzerdefinierte schwache Säure", "a_opt_hcl": "Salzsäure — HCl", "a_opt_hno3": "Salpetersäure — HNO₃", "a_opt_h2so4": "Schwefelsäure — H₂SO₄ (1. H⁺)", "a_opt_ch3cooh": "Essigsäure — CH₃COOH", "a_opt_hf": "Flusssäure — HF", "a_opt_h3po4": "Phosphorsäure — H₃PO₄ (1. H⁺)", "a_base_in_burette": "Base in der Bürette", "a_opt_naoh": "Natriumhydroxid — NaOH", "a_opt_koh": "Kaliumhydroxid — KOH", "a_opt_caoh2": "Calciumhydroxid — Ca(OH)₂", "a_strong_strong": "Stark/Stark", "a_weak_strong": "Schwache Säure/Starke Base", "a_acid_conc": "Säurekonz. [HA]", "a_acid_volume": "Säurevolumen", "a_base_conc": "Basenkonz. [OH⁻]", "a_pka": "pKa der Säure", "a_titrant_added": "Zugegebenes Titrant (ziehen)", "a_surface_rig": "Titrationsaufbau", "a_surface_curve": "Titrationskurve · pH vs. Volumen", "a_ph_now": "pH aktuell", "a_equiv_vol": "Äquiv.-Vol.", "a_indicator_label": "Indikator", "a_export_curve": "⬇ Kurve exportieren (CSV)", "t_calorimetry": "Kalorimetrie", "t_opt_custom": "Benutzerdefinierte Reaktion", "t_opt_neutralization": "Neutralisation — HCl + NaOH", "t_opt_dissolution": "Lösung — NH₄NO₃ in Wasser (endotherm)", "t_opt_combustion": "Verbrennung — CH₄ (stark exotherm)", "t_mass": "Masse der Lösung", "t_specific_heat": "Spezifische Wärme c", "t_delta_t": "Temperaturänderung ΔT", "t_moles": "Mol Reaktant", "t_or_bank": "Oder Mol aus einer Verbindung der Bank berechnen", "t_mass_reactant": "Masse dieses Reaktanten", "t_ea": "Aktivierungsenergie Ea", "t_q_label": "q (ausgetauschte Wärme)", "t_dh_label": "ΔH (Reaktion)", "t_dhm_label": "ΔH molar", "t_class_label": "Klassifizierung", "t_export_diagram": "⬇ Diagrammdaten exportieren (CSV)", "t_surface_flask": "Reaktionskolben", "t_surface_diagram": "Reaktionsenergiediagramm", "c_reactants": "Reaktanten", "c_add_reactant": "+ Reaktant hinzufügen", "c_products": "Produkte", "c_add_product": "+ Produkt hinzufügen", "c_balance_solve": "⚖ Ausgleichen & Lösen", "c_hint": "Geben Sie eine beliebige Formel ein (z. B. KMnO4, Ca(OH)2) oder wählen Sie einen Vorschlag aus der Reagenzienbank. Geben Sie für jeden Reaktanten eine Masse in Gramm an — die App gleicht die Gleichung aus, findet den limitierenden Reaktanten und berechnet automatisch die Ausbeuten.", "c_balanced_eq": "Ausgeglichene Gleichung", "c_results": "Stöchiometrische Ergebnisse", "c_export_csv": "⬇ Ergebnisse exportieren (CSV)", "c_err_need_both": "Fügen Sie mindestens einen Reaktanten und ein Produkt hinzu.", "c_err_bad_formula": "Unbekannte Formel:", "c_err_impossible": "Diese Gleichung kann nicht ausgeglichen werden — die Elemente auf beiden Seiten stimmen nicht überein. Überprüfen Sie die Formeln.", "c_err_underdetermined": "Nicht genug Informationen für einen eindeutigen Ausgleich — versuchen Sie, ein weiteres Produkt oder Reaktant hinzuzufügen.", "c_err_general": "Diese Gleichung konnte nicht ausgeglichen werden. Überprüfen Sie die Formeln und versuchen Sie es erneut.", "c_role_reactant": "Reaktant", "c_role_product": "Produkt", "c_limiting": "limitierend", "c_th_role": "Rolle", "c_th_formula": "Formel", "c_th_coeff": "Koeff.", "c_th_molarmass": "Molare Masse", "c_th_input": "Eingabe", "c_th_output": "Ergebnis", "c_mass_check": "Massenbilanz-Prüfung", "c_in": "eingesetzt", "c_leftover": "übrig", "r_periodic_table": "Periodensystem — auf ein Element klicken, um es zum Formel-Baukasten hinzuzufügen", "r_common_reagents": "Gängige Laborreagenzien", "r_formula_builder": "Formel-Baukasten", "r_formula_placeholder": "z. B. NaOH, H2SO4, Ca(OH)2", "r_clear": "Löschen", "r_molar_mass": "Molare Masse", "r_prepare_solution": "Eine Lösung herstellen", "r_target_molarity": "Ziel-Molarität", "r_target_volume": "Zielvolumen", "r_mass_to_weigh": "Einzuwiegende Masse", "r_dissolve_note": "Lösen Sie diese Masse der ausgewählten Verbindung in Wasser und füllen Sie im Messkolben bis zum Zielvolumen auf.", "log_title_pre": "Experimentprotokoll (", "log_title_post": " gespeichert) — lokal in diesem Browser gespeichert", "log_export_csv": "⬇ Alles exportieren (CSV)", "log_export_json": "⬇ Alles exportieren (JSON)", "log_clear_all": "alles löschen", "log_th_time": "Zeit", "log_th_module": "Modul", "log_th_inputs": "Eingaben", "log_th_results": "Ergebnisse", "log_no_experiments": "Noch keine Experimente protokolliert. Nutzen Sie die Schaltfläche „📌 Experiment protokollieren“ in jedem Modul.", "log_confirm_clear": "Alle protokollierten Experimente löschen? Dies kann nicht rückgängig gemacht werden.", "ai_title": "Laborassistent", "ai_intro": "Stellen Sie eine Schnellhilfe-Frage (sofort, ohne Download) oder laden Sie das lokale Modell für offenen Chat.", "ai_input_placeholder": "z. B. Was bedeutet Halbwertszeit?", "ai_send": "Senden", "ai_model_title": "KI-Modell auf dem Gerät (optional)", "ai_load_model": "⬇ Lokales Modell laden", "ai_not_loaded": "Nicht geladen — Schnellhilfe funktioniert trotzdem.", "ai_covers_title": "Was die Schnellhilfe abdeckt", "ai_downloading": "Modell wird heruntergeladen (nur beim ersten Mal, Internet erforderlich)…", "ai_loading_memory": "Modell wird geladen…", "ai_ready": "Modell geladen ✓ — offene Fragen nutzen jetzt das lokale Modell.", "ai_ready_btn": "Modell geladen", "ai_ready_chat": "Lokales Modell bereit. Fragen Sie alles — die Antworten sind im Vergleich zu einem vollständigen Assistenten begrenzt, aber es verlassen keine Daten Ihren Browser.", "ai_load_error": "Modell konnte nicht geladen werden (Internet und ein moderner Browser erforderlich). Schnellhilfe funktioniert weiterhin unten. Fehler:", "ai_thinking": "denkt nach…", "ai_gen_error": "Ich konnte keine Antwort generieren — versuchen Sie es anders zu formulieren.", "ai_fallback_error": "Das lokale Modell hatte einen Fehler. Rückgriff auf Schnellhilfe:", "ai_no_faq": "Dafür habe ich keine fertige Antwort — versuchen Sie, das Modell erneut zu laden oder anders zu formulieren.", "ai_no_answer": "Dafür habe ich noch keine sofortige Antwort. Probieren Sie eine der vorgeschlagenen Fragen, verwenden Sie Begriffe wie pH, Gleichgewicht, Halbwertszeit oder Le Chatelier, oder laden Sie oben das lokale Modell für offene Antworten.", "classify_exo": "Exotherm", "classify_endo": "Endotherm", "axis_time_s": "ZEIT (s)", "axis_conc_M": "[A] (M)", "axis_volume_ml": "ZUGEGEBENES BASENVOLUMEN (mL)", "axis_ph": "pH", "cat_alkali": "Alkalimetall", "cat_alkaline": "Erdalkalimetall", "cat_transition": "Übergangsmetall", "cat_postmetal": "Metall (p-Block)", "cat_metalloid": "Halbmetall", "cat_nonmetal": "Reaktives Nichtmetall", "cat_halogen": "Halogen", "cat_noble": "Edelgas", "cat_lan": "Lanthanoid", "cat_act": "Actinoid", "cat_other": "Sonstige", "ai_model_desc": "Lädt ein instruktionsoptimiertes Open-Source-Sprachmodell direkt in Ihrem Browser über <a href=\"https://github.com/huggingface/transformers.js\" target=\"_blank\" rel=\"noopener\">transformers.js</a> — kostenlos, ohne API-Schlüssel, keine Daten gehen an einen Server. Es ist weit weniger leistungsfähig als ein vollständiger Assistent. Wählen Sie Leicht bei langsamer Verbindung; der erste Ladevorgang braucht trotzdem Internet und ein bis zwei Minuten, danach wird es zwischengespeichert.", "ai_covers_list": "Halbwertszeit · Reaktionsordnung · Prinzip von Le Chatelier · Gleichgewichtskonstanten · pH & pKa · Puffer · Äquivalenzpunkte bei Titrationen · Aktivierungsenergie · exotherm vs. endotherm · Molarität & molare Masse · limitierender Reaktant", "tab_overview": "Übersicht", "nav_group_sims": "Simulationen", "nav_group_tools": "Werkzeuge", "ov_desc_kinetics": "Modellieren Sie Reaktionsgeschwindigkeiten, Ordnungen und Halbwertszeit mit einem animierten Becher.", "ov_desc_equilibrium": "Erkunden Sie Kc, ICE-Tabellen und das Prinzip von Le Chatelier mit echten Reagenzien.", "ov_desc_acidbase": "Simulieren Sie Titrationen, pH-Kurven und Indikator-Farbwechsel.", "ov_desc_thermo": "Berechnen Sie ΔH, klassifizieren Sie exo-/endotherme Reaktionen und betrachten Sie Energiediagramme.", "ov_desc_custom": "Reaktanten und Bedingungen festlegen, Produkte automatisch vorhersagen, Reaktionen verketten und geschätzte Kinetik & Gleichgewicht anzeigen.", "ov_desc_reagents": "Durchsuchen Sie das Periodensystem, erstellen Sie Formeln und berechnen Sie die molare Masse.", "ov_desc_log": "Sehen Sie sich jedes gespeicherte Experiment an und exportieren Sie es als CSV oder JSON.", "ov_desc_ai": "Erhalten Sie sofortige Schnellhilfe oder chatten Sie mit einem optionalen KI-Modell auf dem Gerät.", "r_custom_name_placeholder": "Name (optional)", "r_add_to_bank": "➕ Zur Reagenzienbank hinzufügen", "r_add_to_bank_invalid": "Erstellen Sie zuerst eine gültige Formel.", "r_add_to_bank_success": "{formula} zur Reagenzienbank hinzugefügt — jetzt auswählbar in Kinetik, Gleichgewicht, Thermochemie und Eigene Reaktion.", "r_add_to_bank_exists": "Diese Verbindung ist bereits in der Bank.", "r_suggestions_label": "Vorgeschlagene reale Verbindungen mit diesen Elementen:", "ind_name_methyl_orange": "Methylorange", "ind_name_bromothymol": "Bromthymolblau", "ind_name_phenolphthalein": "Phenolphthalein", "ind_state_red": "rot", "ind_state_yellow": "gelb", "ind_state_blue": "blau", "ind_state_colorless": "farblos", "ind_state_pink": "rosa", "ind_state_transitioning": "im Übergang", "a_indicator_note": "Einmal für diese Titration gewählt; nur seine Farbe ändert sich bei Titrantzugabe — dieser Farbwechsel markiert den Endpunkt.", "toast_logged": "Im Laborbuch gespeichert ({module})", "c_conditions": "Bedingungen", "c_temperature": "Temperatur", "c_sim_time": "Simulationszeit", "c_predicted_products_title": "Vorhergesagte Produkte", "c_predict_btn": "🔮 Produkte vorhersagen", "c_ai_predict_btn": "🤖 KI nach Produkten fragen", "c_run_reaction": "▶ Reaktion starten", "c_phase_solid": "Feststoff · g", "c_phase_solution": "Lösung · mL × M", "c_mass_placeholder": "Masse (g)", "c_vol_placeholder": "Volumen (mL)", "c_conc_placeholder": "Konz. (M)", "c_detected_prefix": "Erkannter Reaktionstyp:", "c_type_combustion": "Verbrennung", "c_type_neutralization": "Säure-Base-Neutralisation", "c_type_metal_acid": "Metall + Säure", "c_type_decomposition": "Zersetzung", "c_type_synthesis": "Elementsynthese", "c_type_unknown": "Nicht erkannt", "c_type_ai": "KI-Vorschlag (ungeprüft)", "c_predict_failed": "Diese Reaktion konnte nicht automatisch erkannt werden. Versuchen Sie einen unterstützten Typ oder fragen Sie den KI-Assistenten (zuerst im Tab „KI-Assistent“ laden).", "c_ai_thinking": "Lokales Modell wird befragt…", "c_ai_suggested": "KI-vorgeschlagene Produkte (ungeprüft — bitte überprüfen).", "c_ai_failed": "Die KI konnte keine verwendbaren Formeln erzeugen. Reaktanten umformulieren oder einen unterstützten Reaktionstyp eingeben.", "c_no_products_yet": "Noch keine Produkte — oben auf „Produkte vorhersagen“ klicken.", "c_err_no_products": "Vor dem Starten der Reaktion Produkte vorhersagen (oder von der KI vorschlagen lassen).", "c_err_run_first": "Zuerst eine Reaktion starten — es gibt noch keine Produkte zum Weiterverketten.", "c_auto_kinetics": "Automatisch erzeugte Kinetik", "c_kinetics_surface": "verbleibender limitierender Reaktant", "c_auto_equilibrium": "Automatisch erzeugte Gleichgewichtslage", "c_dynamics_disclaimer": "Die Kinetik- und Gleichgewichtsanzeigen sind pädagogische Schätzungen basierend auf Reaktionstyp und Temperatur — keine gemessenen Geschwindigkeits- oder Gleichgewichtskonstanten für diese spezifische Reaktion.", "c_axis_fraction": "VERBLEIBENDER ANTEIL", "c_kinetics_rate": "Geschätzte Geschwindigkeitskonstante", "c_kinetics_complete": "Geschätzter Abschluss", "c_kinetics_within": "innerhalb von", "c_eq_estimate": "Geschätzte Gleichgewichtskonstante", "c_eq_complete": "Praktisch irreversibel — wird als vollständig ablaufend behandelt (>99,9% Umsatz).", "c_eq_favors_products": "Begünstigt die Produkte im Gleichgewicht stark (etwa >90% Umsatz).", "c_eq_mixed": "Deutliche Reversibilität — nennenswerte Mengen an Reaktanten und Produkten im Gleichgewicht zu erwarten.", "c_eq_favors_reactants": "Begünstigt die Reaktanten — begrenzter Umsatz zu erwarten.", "c_chain_btn": "⛓ Produkte als nächste Reaktanten verwenden", "toast_reaction_run": "Reaktion ausgeführt — Ergebnisse unten aktualisiert.", "toast_chained": "Produkte als neue Reaktanten geladen. Erneut vorhersagen, um die Kette fortzusetzen.", "ai_model_lite": "Leicht (~0,5 Mrd. Parameter, schnellerer Download)", "ai_model_standard": "Standard (~1,5 Mrd. Parameter, ausführlicher)", "t_add_substance": "+ Substanz hinzufügen", "t_initial_temp": "Anfangstemperatur", "t_final_temp": "Endtemperatur", "t_run_simulation": "▶ Simulation starten", "t_hint": "Wählen Sie die zu erwärmende(n) oder abzukühlende(n) Substanz(en), geben Sie jeweils eine Masse an, wählen Sie Start- und Zieltemperatur und starten Sie. Die spezifische Wärme wird automatisch nachgeschlagen, wenn bekannt.", "t_c_known": "bekannte spezifische Wärme verwendet: {c} J/g·°C", "t_c_default": "keine Daten für diese Verbindung — Standardwert {c} J/g·°C (wie Wasser) verwendet", "t_absorbed": "Wärme aufgenommen (Erwärmung)", "t_released": "Wärme abgegeben (Abkühlung)", "t_total": "Gesamt", "t_th_mass": "Masse", "t_th_c": "c (J/g·°C)", "t_th_q": "q", "t_breakdown_title": "Aufschlüsselung nach Substanz", "t_axis_progress": "FORTSCHRITT (%)", "t_axis_temp": "TEMPERATUR (°C)", "a_run_titration": "▶ Titration starten", "a_running": "Titriere…", "a_reaction_title": "Neutralisationsreaktion", "a_titer_label": "Titer (abgegebenes Volumen)", "a_endpoint_detected": "Endpunkt erkannt — Farbumschlag des Indikators beobachtet. Titration automatisch gestoppt.", "a_eq_unavailable": "Gleichung für dieses Säure-Base-Paar noch nicht verfügbar.", "toast_endpoint": "Endpunkt erreicht — Titer aufgezeichnet.", "ai_stall_hint": "Arbeitet noch — wenn sich hier eine Weile nichts tut, blockiert Ihr Netzwerk möglicherweise huggingface.co (woher die Modelldateien kommen), auch wenn die kleine transformers.js-Bibliothek selbst erfolgreich geladen wurde.", "ai_downloading_pct": "Lade {file} herunter: {pct}%", "ai_load_error_hint": "Wenn dies auch mit ausgewähltem „Leicht“ weiterhin fehlschlägt, blockiert Ihr Netzwerk wahrscheinlich direkte Downloads von huggingface.co — eine Schul-/Firmenfirewall oder ein Werbeblocker ist eine häufige Ursache. Die Schnellhilfe funktioniert in jedem Fall vollständig offline.", "c_ai_auto_trying": "Die physikalischen Regeln konnten die Produkte nicht bestimmen — frage automatisch das lokale KI-Modell…", "c_type_esterification": "Veresterung (Säure + Alkohol)", "c_type_saponification": "Verseifung (Ester + Base)", "c_type_alkene_addition": "Alken-Additionsreaktion", "c_type_photosynthesis": "Photosynthese (benötigt Lichtenergie — im Dunkeln nicht spontan)", "c_vessel_label": "Reaktionsgefäß", "c_type_alkyne_addition": "Alkin-Additionsreaktion", "c_type_alkane_halogenation": "Alkan-Halogenierung (radikalische Substitution)", "c_type_alcohol_oxidation": "Alkoholoxidation", "c_type_amine_neutralization": "Amin-Neutralisation", "c_view3d_label": "🧊 In 3D anzeigen", "c_ai_suspicious": "⚠ Das sieht nach einer simplen „alle Atome zusammengeklebt“-Vermutung ohne Nebenprodukt aus — so funktionieren reale Reaktionen selten, außer bei bestimmten Additionsreaktionen. Betrachten Sie dies als grobe Vermutung, nicht als geprüfte Antwort, besonders bei ungewöhnlichen Reaktantenkombinationen.", "ai_explain_btn": "🤖 Diese Titration mit KI erklären", "ai_explain_btn_thermo": "🤖 Dieses Ergebnis mit KI erklären", "ai_explain_btn_reaction": "🤖 Diese Reaktion mit KI erklären", "rag_title": "📚 Referenzbibliothek (verankert KI-Antworten in Ihren Quellen)", "rag_desc": "Fügen Sie Auszüge aus Lehrbüchern oder anderen Referenzen hinzu (PDF, .txt oder eingefügter Text). Wenn Sie irgendwo in der App eine Frage stellen oder eine KI-Erklärung anfordern, werden relevante Passagen automatisch per Schlüsselwortabgleich gefunden und als Kontext für die KI einbezogen — so können Antworten Ihre Quellen zitieren und sich darauf stützen, statt sich nur auf das Training des Modells zu verlassen. Dies ist schlüsselwortbasierte Suche, keine echte semantische Suche, daher hilft exakte Terminologie in Ihrer Frage, die richtige Passage zu finden.", "rag_title_label": "Quellentitel (z. B. Autor/Auflage):", "rag_or": "oder", "rag_paste_btn": "Stattdessen Text einfügen", "rag_add_pasted": "+ Eingefügten Text hinzufügen", "rag_empty": "Noch keine Referenzquellen hinzugefügt.", "rag_processing": "Lese und indexiere…", "rag_processing_failed": "Diese Datei konnte nicht verarbeitet werden.", "rag_no_text": "Kein verwendbarer Text zum Hinzufügen gefunden.", "rag_storage_full": "Konnte nicht speichern — der Speicher Ihres Browsers ist voll. Entfernen Sie zuerst eine vorhandene Quelle oder fügen Sie einen kürzeren Auszug hinzu.", "rag_added": "✓ „{title}\" hinzugefügt ({n} Passagen indexiert).", "rag_pasted_default_title": "Eingefügter Auszug", "tab_designer": "Reaktionsdesigner", "ov_desc_designer": "Moleküle in Ketcher zeichnen, mit RDKit validieren und analysieren, Produkte vorhersagen und darstellen.", "rd_pipeline_label": "Ablauf:", "rd_pipeline_desc": "Zeichnen (Ketcher) → Validieren (RDKit) → Reaktion definieren → Vorhersagen → Produkte validieren (RDKit) → Analysieren (RDKit) → Anzeigen (RDKit-Rendering) → Erklären.", "rd_step1": "① Molekül zeichnen (Ketcher)", "rd_ketcher_note": "Zeichnen Sie unten Ihre Struktur, kopieren Sie sie dann über das Ketcher-Menü (☰ → Speichern/Exportieren, oder Strg+Umschalt+C) als SMILES und fügen Sie sie in das Feld darunter ein. Ketcher läuft in einem eingebetteten Drittanbieter-Frame, daher hängt dieser Schritt — anders als der Rest dieser App — von der Erreichbarkeit des von EPAM gehosteten Dienstes ab.", "rd_step2": "② Reaktant validieren & hinzufügen (RDKit)", "rd_smiles_label": "SMILES:", "rd_validate_btn": "Validieren & hinzufügen", "rd_reactants_title": "Reaktanten", "rd_predict_btn": "④ Produkte vorhersagen", "rd_products_title": "⑤⑥⑦ Vorhergesagte Produkte — validiert & analysiert (RDKit)", "rd_explain_title": "⑧ Erklären", "rd_no_reactants": "Noch keine Reaktanten hinzugefügt — oben zeichnen oder SMILES einfügen.", "rd_validating": "Validierung mit RDKit…", "rd_invalid_smiles": "RDKit konnte dies nicht als gültiges Molekül interpretieren.", "rd_valid_added": "✓ Gültig — {formula} hinzugefügt.", "rd_rdkit_error": "RDKit-Fehler.", "rd_need_reactants": "Fügen Sie zuerst mindestens einen Reaktanten hinzu.", "rd_predicting": "Produkte werden vorhergesagt…", "rd_predict_failed": "Produkte für diese Kombination konnten nicht vorhergesagt werden — nicht im erkannten Regelsatz, und entweder ist kein KI-Schlüssel konfiguriert oder die KI konnte keine gültigen SMILES erzeugen.", "rd_products_invalid": "Die vorgeschlagenen Produkte ließen sich nicht als gültige Moleküle interpretieren.", "rd_predicted_rules": "✓ Vorhergesagt mit den verifizierten Reaktionsregeln dieser App.", "rd_predicted_ai": "⚠ Von KI vorhergesagt (ungeprüft) — RDKit bestätigt gültige Moleküle, aber nicht, dass es die richtigen Produkte für diese Reaktion sind.", "rd_explain_rules": "Diese Kombination entsprach einem bekannten, verifizierten Reaktionsmuster.", "rd_explain_ai": "Keine Regel passte auf diese Kombination, daher schlug ein KI-Modell Kandidatenprodukte vor. RDKit bestätigte gültige Moleküle, aber die Chemie der KI könnte dennoch falsch sein — bitte unabhängig prüfen.", "rd_reactant_fgs": "In den Reaktanten erkannte funktionelle Gruppen", "rd_product_fgs": "In den Produkten erkannte funktionelle Gruppen", "r_suggest_btn": "✨ Verbindungen vorschlagen (KI)", "r_suggesting": "Suche Vorschläge", "r_use": "Übernehmen", "r_added": "Hinzugefügt", "r_pick_elements": "Wählen Sie zuerst ein oder mehrere Elemente im Periodensystem aus (oder geben Sie sie ins Formelfeld ein).", "r_ai_label": "KI-vorgeschlagene Verbindungen aus {els} ({n}) — ungeprüft, vor Gebrauch bitte verifizieren.", "r_ai_none": "Es wurden keine gültigen Verbindungen zurückgegeben.", "r_ai_need_key": "Die Cloud-KI benötigt einen API-Schlüssel (Tab KI-Assistent).", "r_offline_list": "Stattdessen wird die kleine integrierte Liste angezeigt.", "tab_conjugation": "Konjugation", "ov_desc_conjugation": "Moleküle koppeln oder Biomoleküle markieren: Amid/NHS, Click, Thiol–Maleimid, Oxim, Diels–Alder u. a., mit pH-, Temperatur- und Hydrolysekinetik.", "cj_run": "▶ Konjugation starten", "cj_setup": "Konjugations-Setup", "cj_mode": "Konjugationsart", "cj_mode_chem": "Chemische Konjugation (kleine Moleküle)", "cj_mode_bio": "Biokonjugation (Proteine, Peptide, Oligos)", "cj_chemistry": "Kopplungschemie", "cj_target": "Ziel / Substrat", "cj_target_bio": "Biomolekül", "cj_reagent": "Kopplungspartner / Marker", "cj_amounts": "Mengen", "cj_conc_chem": "Substratkonzentration", "cj_conc_bio": "Biomolekülkonzentration", "cj_equiv": "Partner-Äquivalente (molarer Überschuss)", "cj_volume": "Reaktionsvolumen", "cj_add_custom": "➕ Reaktant zur Konjugationsbank hinzufügen", "cj_new_name_ph": "Name, z. B. Cy5-NHS-Ester", "cj_new_formula_ph": "Formel (optional), z. B. C7H6O2", "cj_new_mw_ph": "Molare Masse g/mol (ohne Formel)", "cj_kind_small": "Kleines Molekül / Linker / Marker", "cj_kind_bio": "Biomolekül (Protein, Peptid, Oligo)", "cj_groups_label": "Reaktive Gruppen (Anzahl zugänglicher Stellen bei Biomolekülen):", "cj_equation": "Konjugationsgleichung", "cj_results": "Ergebnisse", "cj_results_empty": "Partner wählen und ▶ Konjugation starten drücken.", "cj_log": "📌 Experiment protokollieren", "cj_export": "⬇ CSV exportieren", "cj_add_product": "➕ Produkt zur Bank hinzufügen", "cj_kinetics": "Kinetik · Anteil vs. Zeit", "cj_disclaimer": "Geschwindigkeitskonstanten, pH-Profile und Hydrolyse-Halbwertszeiten sind literaturtypische Werte in einem Kinetikmodell zweiter Ordnung. Es sind Lehrschätzungen, keine Messwerte für Ihre konkreten Moleküle.", "ai_copy": "Kopieren", "ai_copied": "Kopiert", "sim_speed": "Wiedergabegeschwindigkeit", "sim_realtime": "1× (Echtzeit)", "sim_preview": "Schnellvorschau (~6 s)", "sim_pause": "Pause", "sim_resume": "Fortsetzen", "sim_skip": "Zum Ende springen", "sim_stop": "Jetzt stoppen", "sim_state_idle": "Bereit", "sim_state_running": "Läuft", "sim_state_paused": "Pausiert", "sim_state_done": "Fertig", "sim_state_stopped": "Gestoppt", "sim_stopped_at": "Vorzeitig gestoppt bei {v} nach {t}.", "a_rate": "Zugaberate des Titranten", "t_power": "Heiz- / Kühlleistung", "t_heat_time": "Benötigte Zeit", "c_kinetics_running": "Reaktion läuft — umgesetzt:", "lab_title": "🧪 Laborbedingungen & Messrealismus", "lab_mode": "Simulationsmodus", "lab_mode_real": "Realistisches Labor", "lab_mode_ideal": "Idealisiert (Lehrbuch)", "lab_ambient": "Raumtemperatur (°C)", "lab_pressure": "Luftdruck (kPa)", "lab_glass": "Volumetrische Glasgeräte", "lab_glass_a": "Klasse A (Toleranz ISO 385/648)", "lab_glass_b": "Klasse B (2× Klasse-A-Toleranz)", "lab_class": "Klasse", "lab_replicates": "Wiederholungen (n)", "lab_seed": "Zufalls-Seed (reproduzierbar)", "lab_note": "Der realistische Modus ergänzt echte Laboreffekte: temperaturabhängige Konstanten, Aktivitätskorrekturen, Glastoleranzen, Geräteauflösung und -rauschen, Wärmeverluste, Phasenübergänge, Reagenzreinheit und Aufarbeitungsverluste. Jeder Versuch wird n-mal mit Zufallsfehlern aus einem Generator mit Seed wiederholt – derselbe Seed liefert immer dieselben Daten. Ergebnisse werden als Mittelwert ± erweiterte Unsicherheit (k = 2) mit Unsicherheitsbudget angegeben.", "lab_report": "Laborbericht", "lab_replicates_title": "Wiederholungsmessungen", "lab_budget_title": "Unsicherheitsbudget (GUM)", "lab_budget_source": "Quelle", "lab_budget_u": "Standardunsicherheit", "lab_budget_rel": "Hinweis", "lab_sim_disclaimer": "Dies sind simulierte, modellgenerierte Werte mit literaturtypischen Fehlerquellen – keine experimentellen Messungen. Nutzen Sie sie für Planung, Lehre und Methodenentwicklung; in einer Publikation als simuliert kennzeichnen und Modell, Parameter und Seed angeben (alles im CSV-Export enthalten). Experimentelle Aussagen erfordern weiterhin echte Messdaten.", "ab_true_conc": "Wahre Säurekonzentration (Modelleingabe)", "ab_found_conc": "Gefundene Konzentration", "ab_mean_titre": "Mittlerer Verbrauch", "ab_ci95": "95-%-Konfidenzintervall (t)", "ab_equiv_true": "Wahres Äquivalenzvolumen", "ab_endpoint_ph": "pH am visuellen Endpunkt", "ab_ind_error": "Indikatorfehler (Endpunkt)", "ab_bias": "Abweichung vom wahren Wert", "ab_conditions": "Bedingungen", "ab_time_per_rep": "Zeit pro Titration", "ab_total_time": "alle Wiederholungen:", "ab_col_titre": "Verbrauch (mL)", "ab_col_conc": "c gefunden (M)", "ab_u_std": "Titerbestimmung der Maßlösung", "ab_u_pip": "Pipette (Toleranz)", "ab_u_bur": "Bürette (Toleranz, 2 Ablesungen, Tropfengröße)", "ab_u_rep": "Wiederholpräzision (s/√n)", "ab_u_comb": "Kombinierte Standardunsicherheit", "ab_warn_indicator": "Der gewählte Indikator schlägt weit vom Äquivalenzpunkt um (Endpunktfehler {e} %). Wählen Sie einen Indikator, dessen Umschlagsbereich den Äquivalenz-pH enthält, oder ein pH-Meter.", "ab_warn_refill": "Das Äquivalenzvolumen übersteigt eine 50-mL-Bürette – Nachfüllen erhöht den Ablesefehler. Konzentriertere Maßlösung oder kleineres Aliquot verwenden.", "ab_warn_small": "Verbräuche unter 10 mL haben einen großen relativen Ablesefehler; 15–40 mL anstreben.", "ab_note_model": "pH aus exakter Ladungsbilanz mit Kw(T) und Davies-Aktivitätskoeffizienten; Endpunkt beim ersten wahrgenommenen Farbumschlag; 0,05-mL-Tropfen; ISO-Toleranzen; Maßlösung auf 0,1 % RSD eingestellt.", "ab_note_monoprotic": "Mehrprotonige Säuren werden über ihre erste Dissoziationsstufe behandelt, wie in der Liste angegeben.", "t_vessel": "Gefäß", "t_source": "Wärmequelle", "v_beaker100": "100-mL-Becherglas (Borosilikat)", "v_beaker250": "250-mL-Becherglas (Borosilikat)", "v_beaker600": "600-mL-Becherglas (Borosilikat)", "v_rbf500": "500-mL-Rundkolben", "v_coffee": "Kaffeebecher-Kalorimeter (Polystyrol)", "v_dewar": "Dewar-Kalorimeter", "v_crucible": "Porzellantiegel", "s_bunsen": "Bunsenbrenner (≈35 % übertragen)", "s_hotplate": "Heizplatte (≈60 %)", "s_mantle": "Heizpilz (≈80 %)", "s_immersion": "Tauchsieder (≈95 %)", "th_sensible": "fühlbare Wärme", "th_latent": "Latente Wärme (Phasenübergänge)", "th_balance": "Energiebilanz", "th_in": "zugeführt", "th_stored": "gespeichert (Probe + Gefäß)", "th_latent_s": "latent", "th_lost": "an den Raum verloren", "th_warn_boil": "{f} siedet bei diesem Luftdruck bei {T} °C: Ein offenes Gefäß bleibt am Siedepunkt, bis die Flüssigkeit verdampft ist – das Ziel wurde daher nicht erreicht.", "th_warn_stall": "Wärmeverluste gleichen die Zufuhr bei {T} °C aus – das Ziel ist mit dieser Leistung/diesem Gefäß nicht erreichbar. Leistung erhöhen oder Gefäß isolieren.", "th_warn_boiled": "{f} erreichte seinen Siedepunkt ({T} °C) und verdampfte vor Erreichen der Zieltemperatur.", "th_warn_phase": "{f} durchlief bei {T} °C einen Phasenübergang (Plateau in der Kurve).", "th_warn_evap": "{g} g Flüssigkeit sind verdunstet – Gefäß nach dem Versuch wiegen, falls die Masse wichtig ist.", "th_target": "Zieltemperatur", "th_reached": "erreicht", "th_not_reached": "nicht erreicht", "th_time": "Zeit bis zum Ziel", "th_q_meas": "q aus Thermometerwerten (Σ m·c·ΔT)", "th_readings": "Thermometer Start → Ende", "th_supplied": "Energie der Quelle (nominal)", "th_entered": "In das Gefäß gelangte Energie", "th_losses": "An den Raum verloren", "th_evap": "Verdunstung", "th_vessel": "Vom Glas aufgenommen", "th_eff": "Gesamtwirkungsgrad", "th_mass_lost": "Verdunstete / verdampfte Masse", "th_col_time": "Zeit", "th_col_tend": "T Ende (°C)", "th_col_q": "q (J)", "th_u_res": "Thermometerauflösung (0,1 °C, 2 Ablesungen)", "th_u_noise": "Ablese-Rauschen", "th_u_mass": "Waage (±0,01 g)", "th_note_model": "Energiebilanz mit Quellenwirkungsgrad, Wärmekapazität des Gefäßes, Newtonscher Wärmeverlust, Verdunstung (Antoine), Schmelz-/Siedeplateaus mit druckkorrigiertem Siedepunkt und Thermometer mit ±0,2 °C Kalibrierversatz, 0,1 °C Auflösung und 8 s Ansprechzeit.", "c_purity": "Reagenzreinheit (Gehalt)", "c_loss": "Aufarbeitungs-/Isolierungsverlust", "c_form": "Form des festen Reaktanten", "c_form_powder": "Feines Pulver", "c_form_granules": "Granulat / Späne", "c_form_lumps": "Stücke / Band", "c_stir": "Magnetrührer", "cr_k": "Geschwindigkeitskonstante k(T)", "cr_mass_transfer": "Misch- / Oberflächenfaktor", "cr_xeq": "Gleichgewichts-Umsatzgrenze", "cr_conv": "Erreichter Umsatz", "cr_after": "nach", "cr_t95": "Zeit bis 95 % des Gleichgewichts", "cr_theo": "Theoretische Ausbeute (Hauptprodukt)", "cr_isolated": "Isoliertes Produkt", "cr_yield": "Isolierte Ausbeute", "cr_inputs": "Eingaben", "cr_purity": "Reinheit", "cr_loss": "Verlust", "cr_col_conv": "Umsatz (%)", "cr_col_mass": "Isoliert (g)", "cr_col_yield": "Ausbeute (%)", "cr_u_bal": "Waage (±1 mg)", "cr_u_pur": "Reagenzgehalt (±0,5 %)", "cr_warn_eq": "Gleichgewichtslimitiert: höchstens {x} % Umsatz möglich. Mit Überschuss oder durch Entfernen eines Produkts (Wasser, Gas) verschieben.", "cr_warn_slow": "Die Reaktion ist bei dieser Zeit/Temperatur weit von vollständig entfernt; 95 % des Gleichgewichts brauchen etwa {t}.", "cr_warn_hetero": "Ein Feststoff mit kleiner Oberfläche oder fehlendes Rühren verlangsamt die Reaktion stark (stofftransportlimitiert).", "cr_warn_ignition": "Verbrennung setzt eine Zündquelle (Flamme/Funke) und genug Sauerstoff voraus; ohne sie reagiert das Gemisch bei Raumtemperatur nicht.", "cr_note_model": "Arrhenius-Kinetik mit Aktivierungsenergien je Reaktionsklasse, Umsatz begrenzt durch die Gleichgewichtskonstante, Stofftransportfaktor, Reagenzreinheit und zufällige Aufarbeitungsverluste. Die Stöchiometrietabelle bleibt der theoretische 100-%-Fall.", "cj_purity": "Reagenzaktivität / Reinheit", "cjr_dol": "Markierungsgrad (gemessen, UV-Vis)", "cjr_yield": "Isolierte Ausbeute", "cjr_model_val": "Modellwert (ohne Messfehler)", "cjr_col_eq": "Äquiv.", "cjr_col_dol": "DOL", "cjr_col_yield": "Ausbeute (%)", "cjr_u_uv": "UV-Vis-Quantifizierung (A280 3 %, Farbstoff 2 %)", "cjr_u_workup": "Aufreinigung", "cjr_note_bio": "Wiederholungen enthalten Pipettierfehler (2 %), pH-Meter (±0,03), Thermostat (±0,3 °C) und Reagenzaktivität; der DOL wird per UV-Vis mit A280- und Farbstofffehlern „gemessen“.", "cjr_note_chem": "Wiederholungen enthalten Pipettier-, pH-, Temperatur- und Aktivitätsstreuung sowie 10 ± 2,5 % Aufreinigungsverlust.", "c_phase_liquid": "Flüssigkeit · mL", "c_phase_gas": "Gas · mL", "c_q_mass": "Masse", "c_q_volume": "Volumen", "c_q_density": "Dichte", "c_q_conc": "Konzentration", "c_q_gas_note": "bei {T} °C, {P} kPa (ideales Gas)", "c_q_invalid": "⚠ gültige Formel eingeben", "c_q_help": "Feststoffe werden gewogen (g). Reine Flüssigkeiten werden nach Volumen abgemessen und über die Dichte umgerechnet. Lösungen brauchen Volumen und Stoffmengenkonzentration, denn Stoffmenge = Konzentration × Volumen. Gase werden als Volumen bei Raumtemperatur und -druck gemessen."}, "pt": {"app_eyebrow": "Reaction Bench · bancada animada", "app_title": "Simulador de Reações Químicas", "app_note": "ⓘ Modelos didáticos baseados em física — verifique quantitativamente antes do uso em laboratório.", "tab_kinetics": "Cinética", "tab_equilibrium": "Equilíbrio", "tab_acidbase": "Ácido–Base", "tab_thermo": "Termoquímica", "tab_custom": "Reação Personalizada", "tab_reagents": "Reagentes e Elementos", "tab_log": "Registro", "tab_ai": "Assistente de IA", "footer_text": "Reaction Bench — uma ferramenta educacional de intuição pré-laboratório. Confirme os resultados quantitativos com a literatura primária antes de confiar neles experimentalmente.", "reagent_preset": "Reagente / reação predefinida", "export_data_csv": "⬇ Exportar dados (CSV)", "export_chart_png": "⬇ Exportar gráfico (PNG)", "log_this_experiment": "📌 Registrar este experimento", "order_0": "Ordem 0", "order_1": "Ordem 1", "order_2": "Ordem 2", "k_reaction_setup": "Configuração da reação", "k_opt_custom": "Espécie personalizada \"A\"", "k_opt_h2o2": "Decomposição do peróxido de hidrogênio — H₂O₂", "k_opt_n2o5": "Decomposição do pentóxido de dinitrogênio — N₂O₅", "k_opt_nh3": "Decomposição superficial da amônia — NH₃ (ordem 0)", "k_opt_no2": "Dimerização do dióxido de nitrogênio — NO₂ (ordem 2)", "k_or_bank": "Ou escolha uma espécie do banco de reagentes", "k_generic_species": "— espécie genérica \"A\" —", "k_initial_conc": "Concentração inicial [A]₀", "k_rate_constant": "Constante de velocidade k", "k_run_btn": "▶ Executar reação na bancada", "k_halflife_label": "Meia-vida t½", "k_rate_label": "Velocidade inicial", "k_law_label": "Lei de velocidade", "k_surface_beaker": "béquer de reação", "k_surface_chart": "concentração vs. tempo", "e_reaction_system": "Sistema de reação", "e_opt_custom": "Personalizado A + B ⇌ C + D", "e_opt_watergas": "Reação de deslocamento gás-água — CO + H₂O ⇌ CO₂ + H₂", "e_opt_ester": "Esterificação — CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O", "e_kc": "Constante de equilíbrio Kc", "e_initial_A0": "[A]₀ inicial", "e_initial_B0": "[B]₀ inicial", "e_custom_mode": "Modo personalizado: nomeie as espécies (opcional)", "e_stress_test": "Teste de estresse (Le Chatelier)", "e_add_a": "+ Adicionar 0,40 M de A", "e_remove_c": "− Remover 0,30 M de C", "e_dilute": "⇌ Diluir o sistema", "e_reset": "redefinir para o equilíbrio inicial", "e_export_ice": "⬇ Exportar tabela ICE (CSV)", "e_ice_table": "Tabela ICE", "a_titration_setup": "Configuração da titulação", "a_acid_in_flask": "Ácido no frasco", "a_opt_custom": "Ácido fraco personalizado", "a_opt_hcl": "Ácido clorídrico — HCl", "a_opt_hno3": "Ácido nítrico — HNO₃", "a_opt_h2so4": "Ácido sulfúrico — H₂SO₄ (1º H⁺)", "a_opt_ch3cooh": "Ácido acético — CH₃COOH", "a_opt_hf": "Ácido fluorídrico — HF", "a_opt_h3po4": "Ácido fosfórico — H₃PO₄ (1º H⁺)", "a_base_in_burette": "Base na bureta", "a_opt_naoh": "Hidróxido de sódio — NaOH", "a_opt_koh": "Hidróxido de potássio — KOH", "a_opt_caoh2": "Hidróxido de cálcio — Ca(OH)₂", "a_strong_strong": "Forte/Forte", "a_weak_strong": "Ácido fraco/Base forte", "a_acid_conc": "Conc. ácido [HA]", "a_acid_volume": "Volume de ácido", "a_base_conc": "Conc. base [OH⁻]", "a_pka": "pKa do ácido", "a_titrant_added": "Titulante adicionado (arraste-me)", "a_surface_rig": "aparato de titulação", "a_surface_curve": "curva de titulação · pH vs. volume", "a_ph_now": "pH atual", "a_equiv_vol": "Vol. equivalência", "a_indicator_label": "Indicador", "a_export_curve": "⬇ Exportar curva (CSV)", "t_calorimetry": "Calorimetria", "t_opt_custom": "Reação personalizada", "t_opt_neutralization": "Neutralização — HCl + NaOH", "t_opt_dissolution": "Dissolução — NH₄NO₃ em água (endotérmica)", "t_opt_combustion": "Combustão — CH₄ (altamente exotérmica)", "t_mass": "Massa da solução", "t_specific_heat": "Calor específico c", "t_delta_t": "Variação de temperatura ΔT", "t_moles": "Mols de reagente", "t_or_bank": "Ou calcule os mols a partir de um composto do banco", "t_mass_reactant": "Massa desse reagente", "t_ea": "Energia de ativação Ea", "t_q_label": "q (calor trocado)", "t_dh_label": "ΔH (reação)", "t_dhm_label": "ΔH molar", "t_class_label": "Classificação", "t_export_diagram": "⬇ Exportar dados do diagrama (CSV)", "t_surface_flask": "frasco de reação", "t_surface_diagram": "diagrama de energia da reação", "c_reactants": "Reagentes", "c_add_reactant": "+ Adicionar reagente", "c_products": "Produtos", "c_add_product": "+ Adicionar produto", "c_balance_solve": "⚖ Balancear e resolver", "c_hint": "Digite qualquer fórmula (ex.: KMnO4, Ca(OH)2) ou escolha uma sugestão do banco de reagentes. Informe a massa em gramas de cada reagente — o app balanceia a equação, encontra o reagente limitante e calcula os rendimentos automaticamente.", "c_balanced_eq": "Equação balanceada", "c_results": "Resultados estequiométricos", "c_export_csv": "⬇ Exportar resultados (CSV)", "c_err_need_both": "Adicione pelo menos um reagente e um produto.", "c_err_bad_formula": "Fórmula não reconhecida:", "c_err_impossible": "Esta equação não pode ser balanceada — os elementos de cada lado não correspondem. Verifique as fórmulas.", "c_err_underdetermined": "Informação insuficiente para um balanceamento único — tente adicionar outro produto ou reagente.", "c_err_general": "Não foi possível balancear esta equação. Verifique as fórmulas e tente novamente.", "c_role_reactant": "Reagente", "c_role_product": "Produto", "c_limiting": "limitante", "c_th_role": "Papel", "c_th_formula": "Fórmula", "c_th_coeff": "Coef.", "c_th_molarmass": "Massa molar", "c_th_input": "Entrada", "c_th_output": "Resultado", "c_mass_check": "Verificação do balanço de massa", "c_in": "entrada", "c_leftover": "sobra", "r_periodic_table": "Tabela periódica — clique em um elemento para adicioná-lo ao construtor de fórmulas", "r_common_reagents": "Reagentes de laboratório comuns", "r_formula_builder": "Construtor de fórmulas", "r_formula_placeholder": "ex.: NaOH, H2SO4, Ca(OH)2", "r_clear": "Limpar", "r_molar_mass": "Massa molar", "r_prepare_solution": "Preparar uma solução", "r_target_molarity": "Molaridade alvo", "r_target_volume": "Volume alvo", "r_mass_to_weigh": "Massa a pesar", "r_dissolve_note": "Dissolva essa massa do composto selecionado em água e complete até o volume alvo em um balão volumétrico.", "log_title_pre": "Registro de experimentos (", "log_title_post": " salvos) — armazenado localmente neste navegador", "log_export_csv": "⬇ Exportar tudo (CSV)", "log_export_json": "⬇ Exportar tudo (JSON)", "log_clear_all": "limpar tudo", "log_th_time": "Hora", "log_th_module": "Módulo", "log_th_inputs": "Entradas", "log_th_results": "Resultados", "log_no_experiments": "Nenhum experimento registrado ainda. Use o botão \"📌 Registrar este experimento\" em qualquer módulo.", "log_confirm_clear": "Limpar todos os experimentos registrados? Esta ação não pode ser desfeita.", "ai_title": "Assistente de Laboratório", "ai_intro": "Faça uma pergunta rápida (funciona instantaneamente, sem download) ou carregue o modelo local para conversa aberta.", "ai_input_placeholder": "ex.: O que significa meia-vida?", "ai_send": "Enviar", "ai_model_title": "Modelo de IA local (opcional)", "ai_load_model": "⬇ Carregar modelo local", "ai_not_loaded": "Não carregado — a ajuda rápida ainda funciona.", "ai_covers_title": "O que a ajuda rápida cobre", "ai_downloading": "Baixando o modelo (só na primeira vez, requer internet)…", "ai_loading_memory": "Carregando o modelo na memória…", "ai_ready": "Modelo carregado ✓ — perguntas abertas agora usam o modelo local.", "ai_ready_btn": "Modelo carregado", "ai_ready_chat": "Modelo local pronto. Pergunte qualquer coisa — as respostas são limitadas comparadas a um assistente completo, mas nenhum dado sai do seu navegador.", "ai_load_error": "Não foi possível carregar o modelo (requer internet e um navegador moderno). A ajuda rápida continua funcionando abaixo. Erro:", "ai_thinking": "pensando…", "ai_gen_error": "Não consegui gerar uma resposta — tente reformular.", "ai_fallback_error": "O modelo local encontrou um erro. Voltando à ajuda rápida:", "ai_no_faq": "Não tenho uma resposta pronta para isso — tente carregar o modelo novamente ou reformule.", "ai_no_answer": "Ainda não tenho uma resposta instantânea para isso. Tente uma das perguntas sugeridas, use termos como pH, equilíbrio, meia-vida ou Le Chatelier, ou carregue o modelo local acima para respostas abertas.", "classify_exo": "Exotérmica", "classify_endo": "Endotérmica", "axis_time_s": "TEMPO (s)", "axis_conc_M": "[A] (M)", "axis_volume_ml": "VOLUME DE BASE ADICIONADO (mL)", "axis_ph": "pH", "cat_alkali": "Metal alcalino", "cat_alkaline": "Metal alcalino-terroso", "cat_transition": "Metal de transição", "cat_postmetal": "Metal pós-transição", "cat_metalloid": "Metaloide", "cat_nonmetal": "Não metal reativo", "cat_halogen": "Halogênio", "cat_noble": "Gás nobre", "cat_lan": "Lantanídeo", "cat_act": "Actinídeo", "cat_other": "Outro", "ai_model_desc": "Carrega um modelo de linguagem de código aberto ajustado por instruções diretamente no seu navegador via <a href=\"https://github.com/huggingface/transformers.js\" target=\"_blank\" rel=\"noopener\">transformers.js</a> — gratuito, sem chave de API, nada é enviado a um servidor. É bem menos capaz que um assistente completo. Escolha Leve se sua conexão for lenta; o primeiro carregamento ainda precisa de internet e um ou dois minutos, depois fica em cache.", "ai_covers_list": "Meia-vida · ordem de reação · princípio de Le Chatelier · constantes de equilíbrio · pH e pKa · soluções tampão · pontos de equivalência · energia de ativação · exotérmica vs endotérmica · molaridade e massa molar · reagente limitante", "tab_overview": "Visão geral", "nav_group_sims": "Simulações", "nav_group_tools": "Ferramentas", "ov_desc_kinetics": "Modele velocidades de reação, ordens e meia-vida com um béquer animado.", "ov_desc_equilibrium": "Explore Kc, tabelas ICE e o princípio de Le Chatelier com reagentes reais.", "ov_desc_acidbase": "Simule titulações, curvas de pH e mudanças de cor de indicadores.", "ov_desc_thermo": "Calcule ΔH, classifique reações exo/endotérmicas e veja diagramas de energia.", "ov_desc_custom": "Defina reagentes e condições, preveja produtos automaticamente, encadeie reações e veja a cinética e o equilíbrio estimados.", "ov_desc_reagents": "Explore a tabela periódica, construa fórmulas e calcule a massa molar.", "ov_desc_log": "Revise e exporte cada experimento salvo, como CSV ou JSON.", "ov_desc_ai": "Obtenha ajuda instantânea ou converse com um modelo de IA local opcional.", "r_custom_name_placeholder": "Nome (opcional)", "r_add_to_bank": "➕ Adicionar ao banco de reagentes", "r_add_to_bank_invalid": "Construa uma fórmula válida primeiro.", "r_add_to_bank_success": "{formula} adicionado ao banco de reagentes — agora selecionável em Cinética, Equilíbrio, Termoquímica e Reação Personalizada.", "r_add_to_bank_exists": "Esse composto já está no banco.", "r_suggestions_label": "Compostos reais sugeridos com estes elementos:", "ind_name_methyl_orange": "Alaranjado de metila", "ind_name_bromothymol": "Azul de bromotimol", "ind_name_phenolphthalein": "Fenolftaleína", "ind_state_red": "vermelho", "ind_state_yellow": "amarelo", "ind_state_blue": "azul", "ind_state_colorless": "incolor", "ind_state_pink": "rosa", "ind_state_transitioning": "em transição", "a_indicator_note": "Escolhido uma única vez para esta titulação; apenas sua cor muda à medida que o titulante é adicionado — essa mudança de cor marca o ponto final.", "toast_logged": "Salvo no Registro ({module})", "c_conditions": "Condições", "c_temperature": "Temperatura", "c_sim_time": "Tempo de simulação", "c_predicted_products_title": "Produtos previstos", "c_predict_btn": "🔮 Prever produtos", "c_ai_predict_btn": "🤖 Perguntar à IA pelos produtos", "c_run_reaction": "▶ Executar reação", "c_phase_solid": "Sólido · g", "c_phase_solution": "Solução · mL × M", "c_mass_placeholder": "massa (g)", "c_vol_placeholder": "volume (mL)", "c_conc_placeholder": "conc (M)", "c_detected_prefix": "Tipo de reação detectado:", "c_type_combustion": "Combustão", "c_type_neutralization": "Neutralização ácido-base", "c_type_metal_acid": "Metal + ácido", "c_type_decomposition": "Decomposição", "c_type_synthesis": "Síntese de elementos", "c_type_unknown": "Não reconhecido", "c_type_ai": "Sugerido por IA (não verificado)", "c_predict_failed": "Não foi possível reconhecer esta reação automaticamente. Tente um tipo suportado, ou peça ajuda ao assistente de IA (carregue-o primeiro na aba Assistente de IA).", "c_ai_thinking": "Perguntando ao modelo local…", "c_ai_suggested": "Produtos sugeridos pela IA (não verificados — revise-os).", "c_ai_failed": "A IA não conseguiu gerar fórmulas utilizáveis. Reformule os reagentes ou informe um tipo de reação suportado.", "c_no_products_yet": "Ainda sem produtos — clique em \"Prever produtos\" acima.", "c_err_no_products": "Preveja (ou peça à IA) os produtos antes de executar a reação.", "c_err_run_first": "Execute uma reação primeiro — ainda não há produtos para encadear.", "c_auto_kinetics": "Cinética gerada automaticamente", "c_kinetics_surface": "reagente limitante restante", "c_auto_equilibrium": "Posição de equilíbrio gerada automaticamente", "c_dynamics_disclaimer": "Os painéis de cinética e equilíbrio são estimativas educacionais baseadas no tipo de reação e na temperatura — não são constantes de velocidade ou de equilíbrio medidas para esta reação específica.", "c_axis_fraction": "FRAÇÃO RESTANTE", "c_kinetics_rate": "Constante de velocidade estimada", "c_kinetics_complete": "Conclusão estimada", "c_kinetics_within": "em", "c_eq_estimate": "Constante de equilíbrio estimada", "c_eq_complete": "Praticamente irreversível — tratada como completa (>99,9% de conversão).", "c_eq_favors_products": "Favorece fortemente os produtos no equilíbrio (aproximadamente >90% de conversão).", "c_eq_mixed": "Reversibilidade significativa — quantidades relevantes de reagentes e produtos esperadas no equilíbrio.", "c_eq_favors_reactants": "Favorece os reagentes — conversão limitada esperada.", "c_chain_btn": "⛓ Usar produtos como próximos reagentes", "toast_reaction_run": "Reação executada — resultados atualizados abaixo.", "toast_chained": "Produtos carregados como novos reagentes. Preveja novamente para continuar a cadeia.", "ai_model_lite": "Leve (~0,5B parâmetros, download mais rápido)", "ai_model_standard": "Padrão (~1,5B parâmetros, mais detalhado)", "t_add_substance": "+ Adicionar substância", "t_initial_temp": "Temperatura inicial", "t_final_temp": "Temperatura final", "t_run_simulation": "▶ Executar simulação", "t_hint": "Escolha a(s) substância(s) que deseja aquecer ou resfriar, defina uma massa para cada uma, escolha a temperatura inicial e a de destino, depois execute. O calor específico é procurado automaticamente quando conhecido.", "t_c_known": "usando calor específico conhecido: {c} J/g·°C", "t_c_default": "sem dados para este composto — usando padrão {c} J/g·°C (semelhante à água)", "t_absorbed": "Calor absorvido (aquecimento)", "t_released": "Calor liberado (resfriamento)", "t_total": "Total", "t_th_mass": "Massa", "t_th_c": "c (J/g·°C)", "t_th_q": "q", "t_breakdown_title": "Detalhamento por substância", "t_axis_progress": "PROGRESSO (%)", "t_axis_temp": "TEMPERATURA (°C)", "a_run_titration": "▶ Executar titulação", "a_running": "Titulando…", "a_reaction_title": "Reação de neutralização", "a_titer_label": "Titulante (volume adicionado)", "a_endpoint_detected": "Ponto final detectado — mudança de cor do indicador observada. Titulação interrompida automaticamente.", "a_eq_unavailable": "Equação ainda não disponível para este par ácido/base.", "toast_endpoint": "Ponto final atingido — titulante registrado.", "ai_stall_hint": "Ainda trabalhando — se isso não avançar por um tempo, sua rede pode estar bloqueando huggingface.co (de onde vêm os arquivos do modelo), mesmo que a pequena biblioteca transformers.js tenha carregado bem.", "ai_downloading_pct": "Baixando {file}: {pct}%", "ai_load_error_hint": "Se isso continuar falhando mesmo com Leve selecionado, sua rede provavelmente está bloqueando downloads diretos do huggingface.co — um firewall escolar/corporativo ou bloqueador de anúncios é uma causa comum. A ajuda rápida funciona totalmente offline de qualquer forma.", "c_ai_auto_trying": "As regras físicas não conseguiram determinar os produtos — perguntando automaticamente ao modelo de IA local…", "c_type_esterification": "Esterificação (ácido + álcool)", "c_type_saponification": "Saponificação (éster + base)", "c_type_alkene_addition": "Reação de adição a alceno", "c_type_photosynthesis": "Fotossíntese (requer energia luminosa — não é espontânea no escuro)", "c_vessel_label": "recipiente de reação", "c_type_alkyne_addition": "Reação de adição a alcino", "c_type_alkane_halogenation": "Halogenação de alcano (substituição radicalar)", "c_type_alcohol_oxidation": "Oxidação de álcool", "c_type_amine_neutralization": "Neutralização de amina", "c_view3d_label": "🧊 Ver em 3D", "c_ai_suspicious": "⚠ Isso parece um simples palpite de \"todos os átomos colados\" sem subproduto — raramente é assim que reações reais funcionam, exceto em reações de adição específicas. Trate isso como um palpite aproximado, não uma resposta verificada, especialmente para combinações incomuns de reagentes.", "ai_explain_btn": "🤖 Explicar esta titulação com IA", "ai_explain_btn_thermo": "🤖 Explicar este resultado com IA", "ai_explain_btn_reaction": "🤖 Explicar esta reação com IA", "rag_title": "📚 Biblioteca de referências (fundamenta respostas de IA em suas fontes)", "rag_desc": "Adicione trechos de livros didáticos ou outras referências (PDF, .txt ou texto colado). Ao fazer uma pergunta ou solicitar uma explicação de IA em qualquer lugar do app, passagens relevantes são encontradas automaticamente por correspondência de palavras-chave e incluídas como contexto para a IA — assim as respostas podem citar e permanecer fundamentadas em suas fontes em vez de depender apenas do treinamento do modelo. Isso é recuperação baseada em palavras-chave, não busca semântica real, então terminologia exata na sua pergunta ajuda a encontrar a passagem certa.", "rag_title_label": "Título da fonte (ex.: autor/edição):", "rag_or": "ou", "rag_paste_btn": "Colar texto em vez disso", "rag_add_pasted": "+ Adicionar texto colado", "rag_empty": "Nenhuma fonte de referência adicionada ainda.", "rag_processing": "Lendo e indexando…", "rag_processing_failed": "Não foi possível processar esse arquivo.", "rag_no_text": "Nenhum texto utilizável encontrado para adicionar.", "rag_storage_full": "Não foi possível salvar — o armazenamento do seu navegador está cheio. Tente remover uma fonte existente primeiro, ou adicione um trecho mais curto.", "rag_added": "✓ \"{title}\" adicionado ({n} passagens indexadas).", "rag_pasted_default_title": "Trecho colado", "tab_designer": "Designer de Reações", "ov_desc_designer": "Desenhe moléculas no Ketcher, valide e analise com RDKit, preveja e renderize produtos.", "rd_pipeline_label": "Fluxo:", "rd_pipeline_desc": "Desenhar (Ketcher) → Validar (RDKit) → Definir reação → Prever → Validar produtos (RDKit) → Analisar (RDKit) → Exibir (renderização RDKit) → Explicar.", "rd_step1": "① Desenhe uma molécula (Ketcher)", "rd_ketcher_note": "Desenhe sua estrutura abaixo, depois use o menu do Ketcher (☰ → Salvar/Exportar, ou Ctrl+Shift+C) para copiá-la como SMILES, e cole no campo abaixo. O Ketcher roda em um frame de terceiros incorporado, então — diferente do resto deste app — esta etapa depende da disponibilidade do serviço hospedado pela EPAM.", "rd_step2": "② Validar e adicionar reagente (RDKit)", "rd_smiles_label": "SMILES:", "rd_validate_btn": "Validar e adicionar", "rd_reactants_title": "Reagentes", "rd_predict_btn": "④ Prever produtos", "rd_products_title": "⑤⑥⑦ Produtos previstos — validados e analisados (RDKit)", "rd_explain_title": "⑧ Explicar", "rd_no_reactants": "Nenhum reagente adicionado ainda — desenhe ou cole um SMILES acima.", "rd_validating": "Validando com RDKit…", "rd_invalid_smiles": "O RDKit não conseguiu interpretar isso como uma molécula válida.", "rd_valid_added": "✓ Válido — {formula} adicionado.", "rd_rdkit_error": "Erro do RDKit.", "rd_need_reactants": "Adicione pelo menos um reagente primeiro.", "rd_predicting": "Prevendo produtos…", "rd_predict_failed": "Não foi possível prever produtos para esta combinação — fora do conjunto de regras reconhecido, e nenhuma chave de IA configurada ou a IA não conseguiu gerar SMILES válidos.", "rd_products_invalid": "O(s) produto(s) candidato(s) não corresponderam a moléculas válidas.", "rd_predicted_rules": "✓ Previsto usando as regras de reação verificadas deste app.", "rd_predicted_ai": "⚠ Previsto por IA (não verificado) — o RDKit confirma que são moléculas válidas, mas não que sejam o produto correto para esta reação.", "rd_explain_rules": "Esta combinação correspondeu a um padrão de reação conhecido e verificado.", "rd_explain_ai": "Nenhuma regra correspondeu a esta combinação, então um modelo de IA sugeriu produtos candidatos. O RDKit confirmou que são moléculas válidas, mas a química da IA ainda pode estar errada — verifique de forma independente.", "rd_reactant_fgs": "Grupos funcionais detectados nos reagentes", "rd_product_fgs": "Grupos funcionais detectados nos produtos", "r_suggest_btn": "✨ Sugerir compostos (IA)", "r_suggesting": "Sugerindo", "r_use": "Usar", "r_added": "Adicionado", "r_pick_elements": "Selecione primeiro um ou mais elementos na tabela periódica (ou digite-os no campo de fórmula).", "r_ai_label": "Compostos sugeridos pela IA a partir de {els} ({n}) — não verificados, confirme antes de usar.", "r_ai_none": "Nenhum composto válido foi retornado.", "r_ai_need_key": "A IA na nuvem precisa de uma chave de API (aba Assistente de IA).", "r_offline_list": "Mostrando a pequena lista integrada.", "tab_conjugation": "Conjugação", "ov_desc_conjugation": "Acople moléculas ou marque biomoléculas: amida/NHS, click, tiol–maleimida, oxima, Diels–Alder e mais, com cinética de pH, temperatura e hidrólise.", "cj_run": "▶ Executar conjugação", "cj_setup": "Configuração da conjugação", "cj_mode": "Tipo de conjugação", "cj_mode_chem": "Conjugação química (moléculas pequenas)", "cj_mode_bio": "Bioconjugação (proteínas, peptídeos, oligos)", "cj_chemistry": "Química de acoplamento", "cj_target": "Alvo / substrato", "cj_target_bio": "Biomolécula", "cj_reagent": "Parceiro de acoplamento / marcador", "cj_amounts": "Quantidades", "cj_conc_chem": "Concentração do substrato", "cj_conc_bio": "Concentração da biomolécula", "cj_equiv": "Equivalentes do parceiro (excesso molar)", "cj_volume": "Volume de reação", "cj_add_custom": "➕ Adicionar um reagente ao banco de conjugação", "cj_new_name_ph": "Nome, ex. éster Cy5-NHS", "cj_new_formula_ph": "Fórmula (opcional), ex. C7H6O2", "cj_new_mw_ph": "Massa molar g/mol (sem fórmula)", "cj_kind_small": "Molécula pequena / ligante / marcador", "cj_kind_bio": "Biomolécula (proteína, peptídeo, oligo)", "cj_groups_label": "Grupos reativos (número de sítios acessíveis em biomoléculas):", "cj_equation": "Equação de conjugação", "cj_results": "Resultados", "cj_results_empty": "Escolha os parceiros e pressione ▶ Executar conjugação.", "cj_log": "📌 Registrar experimento", "cj_export": "⬇ Exportar CSV", "cj_add_product": "➕ Adicionar produto ao banco", "cj_kinetics": "cinética · fração vs. tempo", "cj_disclaimer": "Constantes de velocidade, perfis de pH e meias-vidas de hidrólise são valores típicos da literatura usados num modelo cinético de segunda ordem. São estimativas didáticas, não medições das suas moléculas exatas.", "ai_copy": "Copiar", "ai_copied": "Copiado", "sim_speed": "Velocidade de reprodução", "sim_realtime": "1× (tempo real)", "sim_preview": "Pré-visualização rápida (~6 s)", "sim_pause": "Pausar", "sim_resume": "Retomar", "sim_skip": "Pular para o fim", "sim_stop": "Parar agora", "sim_state_idle": "Pronto", "sim_state_running": "Em execução", "sim_state_paused": "Pausado", "sim_state_done": "Concluído", "sim_state_stopped": "Parado", "sim_stopped_at": "Parado antecipadamente em {v} após {t}.", "a_rate": "Taxa de adição do titulante", "t_power": "Potência de aquecimento / resfriamento", "t_heat_time": "Tempo necessário", "c_kinetics_running": "Reação em andamento — convertido:", "lab_title": "🧪 Condições de laboratório e realismo de medição", "lab_mode": "Modo de simulação", "lab_mode_real": "Laboratório realista", "lab_mode_ideal": "Idealizado (livro-texto)", "lab_ambient": "Temperatura ambiente (°C)", "lab_pressure": "Pressão do ar (kPa)", "lab_glass": "Vidraria volumétrica", "lab_glass_a": "Classe A (tolerância ISO 385/648)", "lab_glass_b": "Classe B (2× tolerância classe A)", "lab_class": "Classe", "lab_replicates": "Réplicas (n)", "lab_seed": "Semente aleatória (reprodutível)", "lab_note": "O modo realista acrescenta efeitos de laboratório real: constantes dependentes da temperatura, correções de atividade, tolerâncias da vidraria, resolução e ruído dos instrumentos, perdas de calor, mudanças de fase, pureza dos reagentes e perdas no isolamento. Cada ensaio é repetido n vezes com erros aleatórios de um gerador com semente, de modo que a mesma semente reproduz sempre os mesmos dados. Os resultados são dados como média ± incerteza expandida (k = 2) com orçamento de incerteza.", "lab_report": "Relatório de laboratório", "lab_replicates_title": "Medições replicadas", "lab_budget_title": "Orçamento de incerteza (GUM)", "lab_budget_source": "Fonte", "lab_budget_u": "Incerteza-padrão", "lab_budget_rel": "Nota", "lab_sim_disclaimer": "São valores simulados, gerados por modelo com fontes de erro típicas da literatura — não medições experimentais. Use-os para planejar, ensinar e desenhar métodos; numa publicação, identifique-os como simulados e declare o modelo, os parâmetros e a semente (tudo incluído no CSV). Afirmações experimentais continuam a exigir dados reais.", "ab_true_conc": "Concentração real do ácido (entrada do modelo)", "ab_found_conc": "Concentração encontrada", "ab_mean_titre": "Volume médio titulado", "ab_ci95": "Intervalo de confiança 95 % (t)", "ab_equiv_true": "Volume de equivalência real", "ab_endpoint_ph": "pH do ponto final visual", "ab_ind_error": "Erro do indicador (ponto final)", "ab_bias": "Viés do resultado vs. valor real", "ab_conditions": "Condições", "ab_time_per_rep": "Tempo por titulação", "ab_total_time": "todas as réplicas:", "ab_col_titre": "Volume (mL)", "ab_col_conc": "c encontrada (M)", "ab_u_std": "Padronização do titulante", "ab_u_pip": "Pipeta (tolerância)", "ab_u_bur": "Bureta (tolerância, 2 leituras, tamanho da gota)", "ab_u_rep": "Repetibilidade (s/√n)", "ab_u_comb": "Incerteza-padrão combinada", "ab_warn_indicator": "O indicador escolhido muda de cor longe do ponto de equivalência (erro {e} %). Use um indicador cuja faixa de viragem contenha o pH de equivalência, ou um pHmetro.", "ab_warn_refill": "O volume de equivalência excede uma bureta de 50 mL — seria preciso reabastecê-la, com mais erro de leitura. Use titulante mais concentrado ou alíquota menor.", "ab_warn_small": "Volumes abaixo de 10 mL têm grande erro relativo de leitura; procure 15–40 mL.", "ab_note_model": "pH pelo balanço de cargas exato com Kw(T) e coeficientes de atividade de Davies; ponto final quando a cor do indicador é percebida; gotas de 0,05 mL; tolerâncias ISO; titulante padronizado a 0,1 % RSD.", "ab_note_monoprotic": "Ácidos polipróticos são tratados pela primeira dissociação, como indicado na lista.", "t_vessel": "Recipiente", "t_source": "Fonte de calor", "v_beaker100": "Béquer de borossilicato 100 mL", "v_beaker250": "Béquer de borossilicato 250 mL", "v_beaker600": "Béquer de borossilicato 600 mL", "v_rbf500": "Balão de fundo redondo 500 mL", "v_coffee": "Calorímetro de copo de poliestireno", "v_dewar": "Calorímetro Dewar", "v_crucible": "Cadinho de porcelana", "s_bunsen": "Bico de Bunsen (≈35 % transferido)", "s_hotplate": "Placa de aquecimento (≈60 %)", "s_mantle": "Manta de aquecimento (≈80 %)", "s_immersion": "Aquecedor de imersão (≈95 %)", "th_sensible": "calor sensível", "th_latent": "Calor latente (mudanças de fase)", "th_balance": "Balanço de energia", "th_in": "entrou", "th_stored": "armazenado (amostra + recipiente)", "th_latent_s": "latente", "th_lost": "perdido para o ambiente", "th_warn_boil": "{f} ferve a {T} °C a esta pressão: um recipiente aberto permanece no ponto de ebulição até o líquido evaporar, por isso o alvo não foi atingido.", "th_warn_stall": "As perdas de calor igualam a entrada a {T} °C — o alvo é inatingível com esta potência/recipiente. Aumente a potência ou isole o recipiente.", "th_warn_boiled": "{f} atingiu o ponto de ebulição ({T} °C) e evaporou antes da temperatura alvo.", "th_warn_phase": "{f} passou por mudança de fase a {T} °C (patamar na curva).", "th_warn_evap": "{g} g de líquido evaporaram — pese o recipiente após o ensaio se a massa importar.", "th_target": "Temperatura alvo", "th_reached": "atingida", "th_not_reached": "não atingida", "th_time": "Tempo até o alvo", "th_q_meas": "q pelas leituras do termômetro (Σ m·c·ΔT)", "th_readings": "Termômetro início → fim", "th_supplied": "Energia da fonte (nominal)", "th_entered": "Energia que entra no recipiente", "th_losses": "Perdida para o ambiente", "th_evap": "evaporação", "th_vessel": "Absorvida pela vidraria", "th_eff": "Eficiência global de aquecimento", "th_mass_lost": "Massa evaporada / fervida", "th_col_time": "Tempo", "th_col_tend": "T final (°C)", "th_col_q": "q (J)", "th_u_res": "Resolução do termômetro (0,1 °C, 2 leituras)", "th_u_noise": "Ruído de leitura", "th_u_mass": "Balança (±0,01 g)", "th_note_model": "Balanço de energia com eficiência da fonte, capacidade calorífica do recipiente, perda de Newton para o ambiente, evaporação (Antoine), patamares de fusão/ebulição corrigidos pela pressão e termômetro com desvio de ±0,2 °C, resolução de 0,1 °C e atraso de 8 s.", "c_purity": "Pureza do reagente", "c_loss": "Perda no isolamento", "c_form": "Forma do reagente sólido", "c_form_powder": "Pó fino", "c_form_granules": "Grânulos / aparas", "c_form_lumps": "Pedaços / fita", "c_stir": "Agitação magnética", "cr_k": "Constante de velocidade k(T)", "cr_mass_transfer": "Fator de mistura / superfície", "cr_xeq": "Limite de conversão no equilíbrio", "cr_conv": "Conversão atingida", "cr_after": "após", "cr_t95": "Tempo até 95 % do equilíbrio", "cr_theo": "Rendimento teórico (produto principal)", "cr_isolated": "Produto isolado", "cr_yield": "Rendimento isolado", "cr_inputs": "Entradas", "cr_purity": "pureza", "cr_loss": "perda", "cr_col_conv": "Conversão (%)", "cr_col_mass": "Isolado (g)", "cr_col_yield": "Rendimento (%)", "cr_u_bal": "Balança (±1 mg)", "cr_u_pur": "Teor do reagente (±0,5 %)", "cr_warn_eq": "Limitada pelo equilíbrio: no máximo {x} % de conversão. Desloque-o com excesso de reagente ou removendo um produto (água, gás).", "cr_warn_slow": "A reação está longe de completa neste tempo/temperatura; 95 % do equilíbrio exige cerca de {t}.", "cr_warn_hetero": "Um sólido com pouca superfície ou sem agitação torna a reação muito lenta (limitada por transferência de massa).", "cr_warn_ignition": "A combustão pressupõe uma fonte de ignição (chama/faísca) e oxigênio suficiente; sem elas a mistura não reage à temperatura ambiente.", "cr_note_model": "Cinética de Arrhenius com energias de ativação por classe de reação, conversão limitada pela constante de equilíbrio, fator de transferência de massa, pureza do reagente e perdas aleatórias no isolamento. A tabela estequiométrica continua sendo o caso teórico de 100 %.", "cj_purity": "Atividade / pureza do reagente", "cjr_dol": "Grau de marcação (medido por UV-Vis)", "cjr_yield": "Rendimento isolado", "cjr_model_val": "Valor do modelo (sem erro de medição)", "cjr_col_eq": "Equiv.", "cjr_col_dol": "DOL", "cjr_col_yield": "Rendimento (%)", "cjr_u_uv": "Quantificação UV-Vis (A280 3 %, corante 2 %)", "cjr_u_workup": "Purificação", "cjr_note_bio": "As réplicas incluem pipetagem (2 %), pHmetro (±0,03), termostato (±0,3 °C) e atividade do reagente; o DOL é \"medido\" por UV-Vis com erros de A280 e do corante.", "cjr_note_chem": "As réplicas incluem pipetagem, pH, temperatura e atividade do reagente, mais uma perda de purificação de 10 ± 2,5 %.", "c_phase_liquid": "Líquido puro · mL", "c_phase_gas": "Gás · mL", "c_q_mass": "Massa", "c_q_volume": "Volume", "c_q_density": "Densidade", "c_q_conc": "Concentração", "c_q_gas_note": "a {T} °C, {P} kPa (gás ideal)", "c_q_invalid": "⚠ insira uma fórmula válida", "c_q_help": "Sólidos são pesados (g). Líquidos puros são medidos por volume e convertidos pela densidade. Soluções precisam de volume e concentração molar, pois quantidade = concentração × volume. Gases são medidos por volume à temperatura e pressão ambiente."}};
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

/* ============ shared simulation clock ============
   Every experiment advances in *simulated* seconds that are tied to the wall clock:
   at 1× a 60-minute run really takes 60 minutes. Faster playback speeds compress it. */
const SIM_SPEED_KEY = "reactionBenchSimSpeed";
const SIM_SPEEDS = [1, 10, 60, 600, 3600, 0];   // 0 = fast preview (~6 s regardless of length)
const SIM_CLOCKS = [];
function getSimSpeed(){ try{ const v=localStorage.getItem(SIM_SPEED_KEY); if(v!==null && SIM_SPEEDS.includes(+v)) return +v; }catch(e){} return 1; }
function setSimSpeed(v){ try{ localStorage.setItem(SIM_SPEED_KEY, String(v)); }catch(e){} SIM_CLOCKS.forEach(c=>c.speedChanged(v)); }
function fmtClock(s){
  s = Math.max(0, Math.round(s));
  const h=Math.floor(s/3600), m=Math.floor((s%3600)/60), sec=s%60;
  const p=n=>String(n).padStart(2,"0");
  return h ? `${h}:${p(m)}:${p(sec)}` : `${p(m)}:${p(sec)}`;
}
function speedLabel(v){
  if(v===1) return t("sim_realtime");
  if(v===0) return t("sim_preview");
  return v+"×" + (v===60?" (1 min/s)":v===600?" (10 min/s)":v===3600?" (1 h/s)":"");
}

/* ============ shared laboratory conditions & measurement statistics ============
   Global, persisted settings used by every experiment when "Realistic lab" mode is on:
   ambient temperature & pressure, glassware tolerance class, number of replicates and a
   random seed (so every simulated data set is exactly reproducible and citable). */
const LAB_KEY = "reactionBenchLabConditions";
const LAB_DEFAULTS = {realistic:true, ambientC:22, pressureKPa:101.325, glass:"A", replicates:3, seed:12345};
const LAB = (function(){ try{ return Object.assign({}, LAB_DEFAULTS, JSON.parse(localStorage.getItem(LAB_KEY)||"{}")); }catch(e){ return Object.assign({}, LAB_DEFAULTS); } })();
const LAB_LISTENERS = [];
function onLabChange(fn){ LAB_LISTENERS.push(fn); }
function setLab(patch){
  Object.assign(LAB, patch);
  try{ localStorage.setItem(LAB_KEY, JSON.stringify(LAB)); }catch(e){}
  LAB_LISTENERS.forEach(fn=>{ try{ fn(); }catch(e){ console.error(e); } });
}
/* seeded PRNG (mulberry32) + Gaussian (Box–Muller) */
function makeRng(seed){
  let a = (seed>>>0) || 1;
  const uni = ()=>{ a|=0; a=(a+0x6D2B79F5)|0; let t1=Math.imul(a^(a>>>15),1|a); t1=(t1+Math.imul(t1^(t1>>>7),61|t1))^t1; return ((t1^(t1>>>14))>>>0)/4294967296; };
  return {
    uni,
    normal(mean=0, sd=1){ let u=0,v=0; while(u===0) u=uni(); while(v===0) v=uni(); return mean + sd*Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v); },
    rect(halfWidth){ return (uni()*2-1)*halfWidth; }
  };
}
function hashSeed(...parts){ let h=2166136261; String(parts.join("|")).split("").forEach(c=>{ h^=c.charCodeAt(0); h=Math.imul(h,16777619); }); return (h>>>0); }
const T95 = {1:12.706,2:4.303,3:3.182,4:2.776,5:2.571,6:2.447,7:2.365,8:2.306,9:2.262,10:2.228,11:2.201,12:2.179,13:2.160,14:2.145,15:2.131,16:2.120,17:2.110,18:2.101,19:2.093,20:2.086,25:2.060,30:2.042};
function tCrit95(df){ if(df<=0) return NaN; if(T95[df]) return T95[df]; if(df>30) return 1.96 + 2.4/df; const ks=Object.keys(T95).map(Number).filter(k=>k<df); return T95[ks[ks.length-1]]; }
function stats(xs){
  const n=xs.length, mean=xs.reduce((a,b)=>a+b,0)/n;
  const sd = n>1 ? Math.sqrt(xs.reduce((a,b)=>a+(b-mean)*(b-mean),0)/(n-1)) : 0;
  const ci = n>1 ? tCrit95(n-1)*sd/Math.sqrt(n) : NaN;
  return {n, mean, sd, rsd: mean ? 100*sd/Math.abs(mean) : 0, ci95: ci, sem: n>1 ? sd/Math.sqrt(n) : 0};
}
/* round a value to the significant figures justified by its uncertainty (2 s.f. on the uncertainty) */
function fmtUnc(x, u, unit){
  if(!(u>0) || !isFinite(u)) return fmt(x,4)+(unit?" "+unit:"");
  const e = Math.floor(Math.log10(u)) - 1;
  const d = Math.max(0, -e);
  const r = v => (Math.round(v/Math.pow(10,e))*Math.pow(10,e)).toFixed(d);
  return r(x)+" ± "+r(u)+(unit?" "+unit:"");
}
/* glassware tolerances (ISO 385 / ISO 648, ±mL) */
function glassTol(kind, nominal){
  const A = LAB.glass==="A";
  if(kind==="burette") return (nominal>25 ? 0.05 : 0.03) * (A?1:2);
  if(kind==="pipette"){ const tabA = nominal<=10?0.02 : nominal<=25?0.03 : nominal<=50?0.05 : 0.08; return tabA*(A?1:2); }
  return 0;
}
/* boiling point at the lab pressure (Clausius–Clapeyron) */
function boilingPointAt(bp0C, dHvapKJmol, pKPa){
  const T0 = bp0C+273.15;
  return 1/(1/T0 - 8.314*Math.log(pKPa/101.325)/(dHvapKJmol*1000)) - 273.15;
}

function createLabConditions(panelId){
  const panel=document.getElementById(panelId);
  const box=document.createElement("details");
  box.className="lab-cond";
  box.innerHTML = `
    <summary><span class="lab-title"></span><span class="lab-summary"></span></summary>
    <div class="lab-grid">
      <label class="lab-field"><span data-k="lab_mode"></span>
        <select class="reagent-select" data-f="realistic"><option value="1"></option><option value="0"></option></select></label>
      <label class="lab-field"><span data-k="lab_ambient"></span><input type="number" step="0.5" min="-10" max="45" data-f="ambientC" class="formula-input"></label>
      <label class="lab-field"><span data-k="lab_pressure"></span><input type="number" step="0.1" min="50" max="110" data-f="pressureKPa" class="formula-input"></label>
      <label class="lab-field"><span data-k="lab_glass"></span>
        <select class="reagent-select" data-f="glass"><option value="A"></option><option value="B"></option></select></label>
      <label class="lab-field"><span data-k="lab_replicates"></span><input type="number" step="1" min="1" max="20" data-f="replicates" class="formula-input"></label>
      <label class="lab-field"><span data-k="lab_seed"></span><span style="display:flex;gap:6px;"><input type="number" step="1" min="1" data-f="seed" class="formula-input" style="flex:1;"><button type="button" class="stressbtn lab-reseed" style="width:auto;margin:0;">🎲</button></span></label>
    </div>
    <div class="lab-note"></div>`;
  const clock = panel.querySelector(".sim-clock");
  if(clock && clock.nextSibling) panel.insertBefore(box, clock.nextSibling); else panel.insertBefore(box, panel.firstChild);
  const fields = box.querySelectorAll("[data-f]");
  function render(){
    box.querySelector(".lab-title").textContent = t("lab_title");
    box.querySelectorAll("[data-k]").forEach(el=> el.textContent = t(el.dataset.k));
    const sel = box.querySelector('[data-f="realistic"]');
    sel.options[0].textContent = t("lab_mode_real"); sel.options[1].textContent = t("lab_mode_ideal");
    const g = box.querySelector('[data-f="glass"]');
    g.options[0].textContent = t("lab_glass_a"); g.options[1].textContent = t("lab_glass_b");
    fields.forEach(f=>{
      const k=f.dataset.f;
      if(document.activeElement===f) return;
      f.value = k==="realistic" ? (LAB.realistic?"1":"0") : LAB[k];
    });
    box.querySelector(".lab-summary").textContent = LAB.realistic
      ? ` — ${t("lab_mode_real")} · ${LAB.ambientC} °C · ${LAB.pressureKPa} kPa · ${t("lab_class")} ${LAB.glass} · n = ${LAB.replicates} · seed ${LAB.seed}`
      : ` — ${t("lab_mode_ideal")}`;
    box.querySelector(".lab-note").textContent = t("lab_note");
    box.querySelectorAll(".lab-field").forEach((el,i)=>{ if(i>0) el.style.opacity = LAB.realistic ? "1" : ".45"; });
  }
  fields.forEach(f=> f.addEventListener("change", ()=>{
    const k=f.dataset.f; let v=f.value;
    if(k==="realistic") v = v==="1";
    else if(k==="glass") v = v==="B" ? "B" : "A";
    else if(k==="replicates") v = Math.max(1, Math.min(20, Math.round(+v||1)));
    else if(k==="seed") v = Math.max(1, Math.round(+v||1));
    else { v = +v; if(!isFinite(v)) v = LAB_DEFAULTS[k]; }
    if(k==="ambientC") v = Math.max(-10, Math.min(45, v));
    if(k==="pressureKPa") v = Math.max(50, Math.min(110, v));
    setLab({[k]:v});
  }));
  box.querySelector(".lab-reseed").addEventListener("click", ()=> setLab({seed: 1+Math.floor(Math.random()*999999)}));
  onLabChange(render);
  onLanguageChange(render);
  render();
  return box;
}

/* shared "lab report" block: key results, replicate table, GUM uncertainty budget, warnings */
function renderLabReport(el, rep){
  if(!el) return;
  if(!rep){ el.innerHTML=""; el.style.display="none"; return; }
  const esc = x=>String(x).replace(/&/g,"&amp;").replace(/</g,"&lt;");
  let h = `<div class="lab-report-title">${esc(rep.title||t("lab_report"))}</div>`;
  if(rep.rows && rep.rows.length) h += rep.rows.map(([k,v])=>`<div class="readout"><span class="label">${k}</span><span class="value">${v}</span></div>`).join("");
  if(rep.replicates && rep.replicates.rows.length){
    h += `<div class="lab-sub">${t("lab_replicates_title")}</div><div class="lab-table-wrap"><table class="lab-table"><tr>${rep.replicates.headers.map(x=>`<th>${x}</th>`).join("")}</tr>` +
      rep.replicates.rows.map(r=>`<tr>${r.map(x=>`<td>${x}</td>`).join("")}</tr>`).join("") + `</table></div>`;
  }
  if(rep.budget && rep.budget.length){
    h += `<div class="lab-sub">${t("lab_budget_title")}</div><div class="lab-table-wrap"><table class="lab-table"><tr><th>${t("lab_budget_source")}</th><th>${t("lab_budget_u")}</th><th>${t("lab_budget_rel")}</th></tr>` +
      rep.budget.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join("") + `</table></div>`;
  }
  if(rep.warnings && rep.warnings.length) h += rep.warnings.map(w=>`<div class="lab-warn">⚠ ${w}</div>`).join("");
  if(rep.notes && rep.notes.length) h += `<div class="lab-notes">${rep.notes.map(n=>`<div>ⓘ ${n}</div>`).join("")}</div>`;
  el.innerHTML = h; el.style.display="block";
}
/* rows for CSV export describing the conditions, so exported data are self-documenting */
function labConditionsCSV(model){
  return [["Simulation conditions"],["mode", LAB.realistic?"realistic laboratory":"idealized textbook"],["ambient_temperature_C",LAB.ambientC],["pressure_kPa",LAB.pressureKPa],
    ["glassware_class",LAB.glass],["replicates",LAB.replicates],["random_seed",LAB.seed],["model",model],["generated", new Date().toISOString()],
    ["note","Simulated (model-generated) data — not experimental measurements. Report as simulated, with model and parameters."],[]];
}

function createSimClock(panelId){
  const panel = document.getElementById(panelId);
  const bar = document.createElement("div");
  bar.className = "sim-clock";
  bar.innerHTML = `
    <label class="sim-speed-wrap"><span class="sim-lbl"></span><select class="sim-speed reagent-select"></select></label>
    <div class="sim-status"><span class="sim-state"></span><span class="sim-time"><span class="sim-elapsed">00:00</span> / <span class="sim-total">—</span></span></div>
    <div class="sim-progress"><div class="sim-progress-fill"></div></div>
    <div class="sim-btns">
      <button type="button" class="sim-btn sim-pause" disabled>⏸</button>
      <button type="button" class="sim-btn sim-skip" disabled>⏭</button>
      <button type="button" class="sim-btn sim-stop" disabled>⏹</button>
    </div>`;
  panel.insertBefore(bar, panel.firstChild);
  const q = s=>bar.querySelector(s);
  const sel=q(".sim-speed"), fill=q(".sim-progress-fill"), elapsedEl=q(".sim-elapsed"), totalEl=q(".sim-total"), stateEl=q(".sim-state");
  const pauseBtn=q(".sim-pause"), skipBtn=q(".sim-skip"), stopBtn=q(".sim-stop");
  let job=null, timer=null, state="idle";

  function labels(){
    q(".sim-lbl").textContent = t("sim_speed");
    const cur = getSimSpeed();
    sel.innerHTML = SIM_SPEEDS.map(v=>`<option value="${v}">${speedLabel(v)}</option>`).join("");
    sel.value = String(cur);
    pauseBtn.title = state==="paused" ? t("sim_resume") : t("sim_pause");
    pauseBtn.textContent = state==="paused" ? "▶" : "⏸";
    skipBtn.title = t("sim_skip"); stopBtn.title = t("sim_stop");
    stateEl.textContent = t("sim_state_"+state);
    stateEl.className = "sim-state sim-state-"+state;
  }
  function rate(){ if(!job) return 1; const v=getSimSpeed(); return v===0 ? Math.max(1, job.total/6) : v; }
  function simNow(){
    if(!job) return 0;
    if(state!=="running") return job.baseSim;
    return Math.min(job.total, job.baseSim + (performance.now()-job.baseWall)/1000*rate());
  }
  function rebase(){ if(job){ job.baseSim = simNow(); job.baseWall = performance.now(); } }
  function paint(simT){
    const total = job ? job.total : 0;
    elapsedEl.textContent = fmtClock(simT);
    totalEl.textContent = job ? fmtClock(total) : "—";
    fill.style.width = (total>0 ? Math.min(100, simT/total*100) : 0)+"%";
  }
  function setState(s){
    state=s;
    const active = s==="running"||s==="paused";
    pauseBtn.disabled = skipBtn.disabled = stopBtn.disabled = !active;
    labels();
  }
  function tick(){
    if(!job) return;
    const simT = simNow();
    paint(simT);
    try{ job.onFrame(simT, job.total>0 ? simT/job.total : 1); }catch(e){ console.error(e); }
    if(simT >= job.total) finish(true);
  }
  function finish(completed){
    if(!job) return;
    const j=job, simT = completed ? j.total : simNow();
    clearInterval(timer); timer=null;
    paint(simT);
    if(!completed){ try{ j.onFrame(simT, j.total>0 ? simT/j.total : 1); }catch(e){} }
    job=null;
    setState(completed ? "done" : "stopped");
    try{ j.onDone(simT, completed); }catch(e){ console.error(e); }
  }
  const api = {
    /* opts: {total: simulated seconds, onFrame(simT, frac), onDone(simT, completed)} */
    run(opts){
      if(job){ clearInterval(timer); timer=null; job=null; }
      job = {total: Math.max(0, +opts.total||0), onFrame: opts.onFrame||(()=>{}), onDone: opts.onDone||(()=>{}), baseSim:0, baseWall:performance.now()};
      setState("running");
      paint(0);
      try{ job.onFrame(0, 0); }catch(e){ console.error(e); }
      if(job.total<=0){ finish(true); return; }
      timer = setInterval(tick, 50);
    },
    stop(){ finish(false); },
    isRunning(){ return !!job; },
    speedChanged(v){ rebase(); sel.value=String(v); },
    labels
  };
  sel.addEventListener("change", ()=> setSimSpeed(+sel.value));
  pauseBtn.addEventListener("click", ()=>{
    if(!job) return;
    if(state==="running"){ rebase(); setState("paused"); }
    else { job.baseWall = performance.now(); setState("running"); }
  });
  skipBtn.addEventListener("click", ()=>{ if(job){ job.baseSim = job.total; job.baseWall=performance.now(); if(state==="paused") setState("running"); tick(); } });
  stopBtn.addEventListener("click", ()=> finish(false));
  SIM_CLOCKS.push(api);
  setState("idle");
  onLanguageChange(labels);
  return api;
}

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

/* ============ Conjugation / bio-conjugation reactant bank ============ */
/* groups: reactive handle -> count (for biomolecules = accessible sites per molecule); pKa: per-group override */
const CJ_GROUPS = {
  NH2:{label:"Amine (–NH₂)", pKa:10.5}, COOH:{label:"Carboxylic acid (–COOH)"}, OH:{label:"Alcohol (–OH)"},
  SH:{label:"Thiol (–SH)", pKa:8.3}, CHO:{label:"Aldehyde (–CHO)"}, N3:{label:"Azide (–N₃)"},
  alkyne:{label:"Terminal alkyne (–C≡CH)"}, DBCO:{label:"Strained alkyne (DBCO)"}, maleimide:{label:"Maleimide"},
  NHS:{label:"NHS ester"}, hydrazide:{label:"Hydrazide / hydrazine"}, aminooxy:{label:"Aminooxy (–O–NH₂)"},
  diene:{label:"Conjugated diene"}, dienophile:{label:"Dienophile (activated C=C)"}, acrylate:{label:"Michael acceptor (acrylate)"},
  PDS:{label:"Pyridyl disulfide"}, biotin:{label:"Biotin"}, SA:{label:"Streptavidin biotin pocket"}
};
const CJ_BANK = [
  // --- small molecules for ordinary chemical conjugation ---
  {id:"ethylamine", name:"Ethylamine", f:"C2H7N", groups:{NH2:1}, pKa:{NH2:10.7}, modes:["chem"]},
  {id:"benzylamine", name:"Benzylamine", f:"C7H9N", groups:{NH2:1}, pKa:{NH2:9.3}, modes:["chem"]},
  {id:"aniline", name:"Aniline", f:"C6H7N", groups:{NH2:1}, pKa:{NH2:4.6}, modes:["chem"]},
  {id:"glyome", name:"Glycine methyl ester", f:"C3H7NO2", groups:{NH2:1}, pKa:{NH2:7.7}, modes:["chem"]},
  {id:"acetic", name:"Acetic acid", f:"CH3COOH", groups:{COOH:1}, modes:["chem"]},
  {id:"benzoic", name:"Benzoic acid", f:"C7H6O2", groups:{COOH:1}, modes:["chem"]},
  {id:"folic", name:"Folic acid", f:"C19H19N7O6", groups:{COOH:2}, modes:["chem","bio"]},
  {id:"ethanol", name:"Ethanol", f:"C2H5OH", groups:{OH:1}, modes:["chem"]},
  {id:"benzylalc", name:"Benzyl alcohol", f:"C7H8O", groups:{OH:1}, modes:["chem"]},
  {id:"benzaldehyde", name:"Benzaldehyde", f:"C7H6O", groups:{CHO:1}, modes:["chem"]},
  {id:"acetaldehyde", name:"Acetaldehyde", f:"C2H4O", groups:{CHO:1}, modes:["chem"]},
  {id:"benzylazide", name:"Benzyl azide", f:"C7H7N3", groups:{N3:1}, modes:["chem"]},
  {id:"azidoethanol", name:"2-Azidoethanol", f:"C2H5N3O", groups:{N3:1, OH:1}, modes:["chem"]},
  {id:"phenylacetylene", name:"Phenylacetylene", f:"C8H6", groups:{alkyne:1}, modes:["chem"]},
  {id:"propargylalc", name:"Propargyl alcohol", f:"C3H4O", groups:{alkyne:1, OH:1}, modes:["chem"]},
  {id:"propargylamine", name:"Propargylamine", f:"C3H5N", groups:{alkyne:1, NH2:1}, pKa:{NH2:8.2}, modes:["chem","bio"]},
  {id:"dbcoamine", name:"DBCO-amine", f:"C18H16N2O", groups:{DBCO:1, NH2:1}, pKa:{NH2:9.5}, modes:["chem","bio"]},
  {id:"nem", name:"N-Ethylmaleimide", f:"C6H7NO2", groups:{maleimide:1, dienophile:1}, modes:["chem","bio"]},
  {id:"maleicanh", name:"Maleic anhydride", f:"C4H2O3", groups:{dienophile:1}, modes:["chem"]},
  {id:"macrylate", name:"Methyl acrylate", f:"C4H6O2", groups:{acrylate:1, dienophile:1}, modes:["chem"]},
  {id:"butadiene", name:"1,3-Butadiene", f:"C4H6", groups:{diene:1}, modes:["chem"]},
  {id:"cpd", name:"Cyclopentadiene", f:"C5H6", groups:{diene:1}, modes:["chem"]},
  {id:"furan", name:"Furan", f:"C4H4O", groups:{diene:1}, modes:["chem"]},
  {id:"thiophenol", name:"Thiophenol", f:"C6H6S", groups:{SH:1}, pKa:{SH:6.6}, modes:["chem"]},
  {id:"cysteamine", name:"Cysteamine", f:"C2H7NS", groups:{SH:1, NH2:1}, pKa:{SH:8.3, NH2:10.8}, modes:["chem","bio"]},
  {id:"bme", name:"2-Mercaptoethanol", f:"C2H6OS", groups:{SH:1, OH:1}, pKa:{SH:9.6}, modes:["chem"]},
  {id:"phenylhydrazine", name:"Phenylhydrazine", f:"C6H8N2", groups:{hydrazide:1}, modes:["chem"]},
  {id:"hydroxylamine", name:"Hydroxylamine", f:"NH2OH", groups:{aminooxy:1}, modes:["chem"]},
  {id:"aoaa", name:"Aminooxyacetic acid", f:"C2H5NO3", groups:{aminooxy:1, COOH:1}, modes:["chem","bio"]},
  {id:"nhsacetate", name:"Acetyl-NHS ester", f:"C6H7NO4", groups:{NHS:1}, modes:["chem","bio"]},
  {id:"pdsamine", name:"2-(2-Pyridyldithio)ethylamine", f:"C7H10N2S2", groups:{PDS:1, NH2:1}, pKa:{NH2:9.5}, modes:["chem","bio"]},
  // --- labels, linkers and crosslinkers (both modes) ---
  {id:"fitcnhs", name:"NHS-Fluorescein (FAM SE)", f:"C25H15NO9", groups:{NHS:1}, modes:["chem","bio"]},
  {id:"nhsbiotin", name:"NHS-Biotin", f:"C14H19N3O5S", groups:{NHS:1, biotin:1}, modes:["chem","bio"]},
  {id:"snhsbiotin", name:"Sulfo-NHS-Biotin", f:"C14H18N3NaO8S2", groups:{NHS:1, biotin:1}, modes:["bio"]},
  {id:"fluormal", name:"Fluorescein-5-maleimide", f:"C24H13NO7", groups:{maleimide:1}, modes:["chem","bio"]},
  {id:"malpegbiotin", name:"Maleimide-PEG2-Biotin", f:"C23H35N5O7S", groups:{maleimide:1, biotin:1}, modes:["bio"]},
  {id:"dbcopegbiotin", name:"DBCO-PEG4-Biotin", mw:749.9, groups:{DBCO:1, biotin:1}, modes:["chem","bio"]},
  {id:"azpegbiotin", name:"Azide-PEG3-Biotin", f:"C18H32N6O5S", groups:{N3:1, biotin:1}, modes:["chem","bio"]},
  {id:"biotinhz", name:"Biotin hydrazide", f:"C10H18N4O2S", groups:{hydrazide:1, biotin:1}, modes:["chem","bio"]},
  {id:"famalkyne", name:"5-FAM alkyne", f:"C24H15NO6", groups:{alkyne:1}, modes:["chem","bio"]},
  {id:"spdp", name:"SPDP crosslinker", f:"C12H12N2O4S2", groups:{NHS:1, PDS:1}, modes:["chem","bio"]},
  {id:"smcc", name:"SMCC crosslinker (NHS–maleimide)", f:"C16H18N2O6", groups:{NHS:1, maleimide:1}, modes:["chem","bio"]},
  {id:"mpegnhs", name:"mPEG-NHS (5 kDa)", mw:5000, groups:{NHS:1}, modes:["bio"]},
  {id:"mpegmal", name:"mPEG-Maleimide (5 kDa)", mw:5000, groups:{maleimide:1}, modes:["bio"]},
  {id:"biotin", name:"D-Biotin", f:"C10H16N2O3S", groups:{biotin:1, COOH:1}, modes:["chem","bio"]},
  // --- biomolecules (bio-conjugation targets; counts = accessible sites per molecule) ---
  {id:"bsa", name:"Bovine serum albumin (BSA)", mw:66430, kind:"bio", groups:{NH2:30, SH:1, COOH:99}, modes:["bio"]},
  {id:"igg", name:"IgG antibody (native)", mw:150000, kind:"bio", groups:{NH2:40, COOH:120}, modes:["bio"]},
  {id:"iggred", name:"IgG antibody (TCEP-reduced hinge, 8 Cys)", mw:150000, kind:"bio", groups:{SH:8, NH2:40, COOH:120}, modes:["bio"]},
  {id:"iggox", name:"IgG antibody (periodate-oxidized glycans)", mw:150000, kind:"bio", groups:{CHO:4, NH2:40}, modes:["bio"]},
  {id:"lysozyme", name:"Lysozyme", mw:14300, kind:"bio", groups:{NH2:7, COOH:11}, modes:["bio"]},
  {id:"insulin", name:"Insulin (human)", mw:5808, kind:"bio", groups:{NH2:3, COOH:6}, pKa:{NH2:9.0}, modes:["bio"]},
  {id:"sa", name:"Streptavidin (tetramer)", mw:52800, kind:"bio", groups:{SA:4, NH2:16}, modes:["bio"]},
  {id:"azgfp", name:"Azide-tagged GFP (AHA-labelled)", mw:27000, kind:"bio", groups:{N3:2, NH2:20}, modes:["bio"]},
  {id:"cysrgd", name:"Cys-RGD peptide", mw:594.6, kind:"bio", groups:{SH:1, NH2:1, COOH:3}, pKa:{NH2:8.0}, modes:["bio"]},
  {id:"oligosh", name:"5′-Thiol oligonucleotide (20-mer)", mw:6300, kind:"bio", groups:{SH:1}, modes:["bio"]},
  {id:"oligonh2", name:"5′-Amino oligonucleotide (20-mer)", mw:6250, kind:"bio", groups:{NH2:1}, pKa:{NH2:10.0}, modes:["bio"]},
  {id:"oligon3", name:"5′-Azide oligonucleotide (20-mer)", mw:6300, kind:"bio", groups:{N3:1}, modes:["bio"]}
];
/* make the small conjugation reagents (those with a formula) available in the shared reactant bank too */
CJ_BANK.forEach(r=>{
  if(r.f && r.kind!=="bio" && !REAGENTS.some(x=>x.f===r.f)) REAGENTS.push({f:r.f, label:r.name, cat:"conjugation"});
});

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

function syncPtableSelection(){
  const syms = new Set((document.getElementById('formula-input').value.match(/[A-Z][a-z]?/g)||[]));
  document.querySelectorAll('#ptable .pcell').forEach(c=>{
    const sym = c.querySelector('.sym');
    c.classList.toggle('selected', !!sym && syms.has(sym.textContent));
  });
}
function updateFormula(){
  const raw=document.getElementById('formula-input').value;
  syncPtableSelection();
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
  const sg=document.getElementById('formula-suggestions'); if(sg){ sg.style.display='none'; sg.innerHTML=''; }
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


/* ---- AI-driven compound suggestions for the selected elements ---- */
(function(){
  const btn = document.getElementById('suggest-compounds');
  const host = document.getElementById('formula-suggestions');
  if(!btn || !host) return;
  let busy = false;

  function selectedElements(){
    const syms = [...new Set((document.getElementById('formula-input').value.match(/[A-Z][a-z]?/g)||[]))];
    return syms.filter(x=>ELEMENT_BY_SYMBOL[x]);
  }
  function extractJSONArray(text){
    let s = String(text||'').replace(/```(?:json)?/gi,'');
    const a = s.indexOf('['), b = s.lastIndexOf(']');
    if(a<0 || b<=a) return null;
    try{ const arr = JSON.parse(s.slice(a,b+1)); return Array.isArray(arr)?arr:null; }catch(e){}
    // salvage individual objects from a truncated array
    const out=[]; const re=/\{[^{}]*\}/g; let m;
    while((m=re.exec(s.slice(a)))){ try{ out.push(JSON.parse(m[0])); }catch(e){} }
    return out.length?out:null;
  }
  function normalizeFormula(f){
    return String(f||'').trim()
      .replace(/[₀-₉]/g, d=>String(d.charCodeAt(0)-0x2080))
      .replace(/[\s·•]/g,'').replace(/^\$|\$$/g,'').replace(/[{}_\\^]/g,'');
  }
  function validate(list, allowed){
    const seen = new Set(), out=[];
    list.forEach(c=>{
      if(!c || typeof c!=='object') return;
      const f = normalizeFormula(c.formula||c.f);
      if(!f || seen.has(f)) return;
      const parsed = parseFormula(f);
      if(!parsed.valid) return;
      if(!Object.keys(parsed.counts).every(sym=>allowed.includes(sym))) return;
      seen.add(f);
      out.push({f:f, n:String(c.name||c.n||f).replace(/[<>]/g,'').slice(0,80), note:String(c.note||c.type||'').replace(/[<>]/g,'').slice(0,120), mm:molarMass(parsed.counts)});
    });
    return out;
  }
  function esc(x){ return String(x).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

  function render(items, banner, bannerColor){
    host.style.display='block';
    if(!items.length){
      host.innerHTML = '<div style="font-size:12px;color:var(--ink-soft);">'+esc(banner||t('r_ai_none'))+'</div>';
      return;
    }
    host.innerHTML =
      '<div style="font-size:11px;color:'+(bannerColor||'var(--ink-soft)')+';margin-bottom:6px;">'+esc(banner)+'</div>'+
      '<div class="ai-sugg-list" style="display:flex;flex-direction:column;gap:6px;max-height:340px;overflow:auto;">'+
      items.map((c,i)=>
        '<div class="ai-sugg-row" style="display:flex;align-items:center;gap:8px;padding:6px 8px;border:1px solid var(--line, rgba(128,128,128,.3));border-radius:8px;">'+
          '<div style="flex:1;min-width:0;"><div style="font-size:13px;"><strong>'+esc(c.f)+'</strong> — '+esc(c.n)+'</div>'+
          '<div style="font-size:11px;color:var(--ink-soft);">'+c.mm.toFixed(2)+' g/mol'+(c.note?' · '+esc(c.note):'')+'</div></div>'+
          '<button type="button" class="stressbtn ai-sugg-use" data-i="'+i+'" style="flex:0 0 auto;">'+esc(t('r_use'))+'</button>'+
          '<button type="button" class="stressbtn ai-sugg-add" data-i="'+i+'" style="flex:0 0 auto;">'+esc(t('r_add_to_bank'))+'</button>'+
        '</div>').join('')+
      '</div>';
    host.querySelectorAll('.ai-sugg-use').forEach(b=>b.addEventListener('click', ()=>{
      document.getElementById('formula-input').value = items[+b.dataset.i].f;
      updateFormula();
    }));
    host.querySelectorAll('.ai-sugg-add').forEach(b=>b.addEventListener('click', ()=>{
      const c = items[+b.dataset.i];
      const added = addCustomReagent(c.f, c.n);
      b.textContent = added ? '✓ '+t('r_added') : t('r_add_to_bank_exists');
      b.disabled = true;
    }));
  }

  function fallback(elems, why){
    const key = elems.slice().sort().join(',');
    const list = (COMPOUND_SUGGESTIONS[key]||[]).map(c=>({f:c.f,n:c.n,note:'',mm:molarMass(parseFormula(c.f).counts)}));
    render(list, (why?why+' ':'')+t('r_offline_list'), 'var(--amber)');
  }

  btn.addEventListener('click', async ()=>{
    if(busy) return;
    const elems = selectedElements();
    if(!elems.length){ render([], t('r_pick_elements')); return; }
    busy = true; btn.disabled = true;
    const oldLabel = btn.textContent;
    btn.textContent = '⏳ '+t('r_suggesting');
    host.style.display='block';
    host.innerHTML = '<div style="font-size:12px;color:var(--ink-soft);">'+esc(t('r_suggesting'))+'…</div>';
    try{
      if(!window.__callCloudAI) throw new Error('NO_KEY');
      const prompt = 'List the real, chemically valid compounds (inorganic, organic, ionic, molecular, common ions and well-known minerals/salts) that can be formed using ONLY these elements: '+elems.join(', ')+
        '. Each compound may use some or all of these elements, but no other elements. Include simple binary compounds, oxides, acids, bases, salts, oxyanion salts, hydrides, hydrates excluded, and for carbon-containing sets common organic compounds (alkanes, alcohols, acids, esters, halocarbons...) when relevant. Order from most common to least common and give up to 25 items. '+
        'Respond with ONLY a JSON array, no prose, no markdown, no LaTeX. Each item: {"formula":"plain ASCII formula such as H2SO4 or Ca(OH)2","name":"common name","note":"very short type, e.g. ionic salt, acid, organic"}.';
      const reply = await window.__callCloudAI([
        {role:'system', content:'You are an accurate chemistry database. Output only valid JSON. Never invent compounds that do not exist; omit if unsure.'},
        {role:'user', content: prompt}
      ]);
      const arr = extractJSONArray(reply);
      const items = arr ? validate(arr, elems) : [];
      if(!items.length) throw new Error('EMPTY_RESPONSE');
      render(items, t('r_ai_label').replace('{n}', items.length).replace('{els}', elems.join(', ')));
    }catch(err){
      const why = (err && err.message==='NO_KEY') ? t('r_ai_need_key') : (window.__friendlyAIError ? window.__friendlyAIError(err) : String(err.message||err));
      fallback(elems, why);
    }finally{
      busy=false; btn.disabled=false; btn.textContent = oldLabel;
    }
  });
})();

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
const TAB_ICON = {overview:"🏠",acidbase:"💧",thermo:"🔥",custom:"🧪",conjugation:"🔗",reagents:"⚛️",log:"📒",ai:"🤖"};
const TAB_TITLE_KEY = {overview:"tab_overview",acidbase:"tab_acidbase",thermo:"tab_thermo",custom:"tab_custom",conjugation:"tab_conjugation",reagents:"tab_reagents",log:"tab_log",ai:"tab_ai"};
const TAB_DESC_KEY = {acidbase:"ov_desc_acidbase",thermo:"ov_desc_thermo",custom:"ov_desc_custom",conjugation:"ov_desc_conjugation",reagents:"ov_desc_reagents",log:"ov_desc_log",ai:"ov_desc_ai"};

function updatePageHeader(tab){
  document.getElementById("page-title").textContent = t(TAB_TITLE_KEY[tab] || "tab_overview");
  document.getElementById("page-desc").textContent = tab==="overview" ? "" : t(TAB_DESC_KEY[tab] || "");
}

const TAB_RUN_BUTTON = { acidbase:"a-run", thermo:"t-solve", custom:"c-solve", conjugation:"cj-run" };
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

  /* ---- textbook (idealized) model: Henderson–Hasselbalch / simple excess, pKw = 14, activities = 1 ---- */
  function phIdeal(VbVal){
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
    if(molBase<molHA0-eps){ const molHA=molHA0-molBase; return pKa+log10(molBase/molHA); }
    if(molBase>molHA0+eps){ const excess=molBase-molHA0; return 14+log10(excess/V); }
    const cA=molHA0/V, Kb=1e-14/Ka, OH=Math.sqrt(Kb*cA);
    return 14+log10(OH);
  }
  /* ---- realistic model: exact charge balance, temperature-dependent Kw (Harned & Owen fit),
         Davies activity coefficients from the ionic strength, iterated to self-consistency ---- */
  function pKwAt(TC){ const T=TC+273.15; return 4470.99/T - 6.0875 + 0.01706*T; }
  function daviesA(TC){ return 0.4918 + 6.6e-4*TC + 5e-6*TC*TC; }
  function phExact(VbVal, p){
    p = p || {};
    const ca = p.ca ?? parseFloat(Ca.value), va = p.va ?? parseFloat(Va.value), cb = p.cb ?? parseFloat(Cb.value);
    const TC = p.TC ?? LAB.ambientC;
    const strong = (p.strong ?? (mode==="strong"));
    const Ka = strong ? Infinity : Math.pow(10, -(p.pKa ?? parseFloat(pKaEl.value)));
    const z = baseSelect.value==="CaOH2" ? 2 : 1;
    const V = va + VbVal;
    const CA = ca*va/V, CM = cb*VbVal/V;          // total acid, total OH⁻ delivered (as cation charge)
    const Kw = Math.pow(10, -pKwAt(TC)), A = daviesA(TC);
    let g = 1, h = 1e-7;
    for(let it=0; it<4; it++){
      const Kwc = Kw/(g*g), Kac = Ka/(g*g);
      const Aminus = hh => strong ? CA : CA*Kac/(Kac+hh);
      let lo=-16, hi=1;
      for(let k=0;k<80;k++){
        const mid=(lo+hi)/2, hh=Math.pow(10,mid);
        const f = hh + CM - Kwc/hh - Aminus(hh);
        if(f>0) hi=mid; else lo=mid;
      }
      h = Math.pow(10,(lo+hi)/2);
      const I = 0.5*(h + Kwc/h + Aminus(h) + (CM/z)*z*z);
      const sI = Math.sqrt(Math.max(I,0));
      g = Math.pow(10, -A*(sI/(1+sI) - 0.3*I));
    }
    return -log10(g*h);
  }
  function phAt(VbVal, p){ return LAB.realistic ? phExact(VbVal, p) : phIdeal(VbVal); }
  /* volume at which pH reaches a given value (pH rises monotonically as base is added) */
  function volumeAtPH(target, Vmax, p){
    let lo=0, hi=Vmax;
    if(phAt(0,p) >= target) return 0;
    if(phAt(hi,p) < target) return hi;
    for(let k=0;k<60;k++){ const mid=(lo+hi)/2; if(phAt(mid,p) < target) lo=mid; else hi=mid; }
    return (lo+hi)/2;
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
      markers:[{x:Veq,color:"#C9791A",label:"equiv."}].concat(LAB.realistic ? (()=>{ const ve=volumeAtPH(endpointPH(indicator), Veq*2); return [{x:ve, color:"#2F9E52", label: Math.abs(ve-Veq) > 0.04*Veq ? "end" : ""}]; })() : []).concat([{x:vb,y:curPH,color:"#B8452B",label:""}])});
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
    let rows=labConditionsCSV(LAB.realistic?"exact charge balance, Kw(T), Davies activities, indicator endpoint, ISO glassware tolerances":"textbook Henderson–Hasselbalch, pKw = 14").concat(summary).concat(lastPts.map(p=>[p.x.toFixed(3), p.y.toFixed(3)]));
    if(LAB.realistic && lastSeries){
      rows = rows.concat([[],["Replicate titrations"],["replicate","titre_mL","c_found_M","T_C"]])
        .concat(lastSeries.reps.map((r,i)=>[i+1, r.Vread.toFixed(3), r.cFound.toFixed(5), r.TC.toFixed(2)]))
        .concat([[],["mean_c_M", lastSeries.st.mean.toFixed(5)],["sd_M", lastSeries.st.sd.toExponential(3)],["expanded_U_k2_M", lastSeries.U.toExponential(3)],["true_c_M", lastSeries.ca],["indicator_error_pct", lastSeries.indErrPct.toFixed(3)]]);
    }
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

  const runBtn = document.getElementById("a-run");
  const titerEl = document.getElementById("a-titer");
  const endpointNote = document.getElementById("a-endpoint-note");
  const rateEl = document.getElementById("a-rate"), rateVal = document.getElementById("a-rate-val");
  rateEl.addEventListener("input", ()=> rateVal.textContent = parseFloat(rateEl.value).toFixed(1)+" mL/min");
  const abClock = createSimClock("panel-acidbase");
  createLabConditions("panel-acidbase");
  const reportEl = document.getElementById("a-report");
  onLabChange(()=>{ paint(); });
  let lastSeries = null;

  const DROP_ML = 0.05;               // one burette drop
  const DROPWISE_ML_MIN = 1.5;        // ≈ 1 drop every 2 s near the endpoint
  const STD_RSD = 0.001;              // titrant standardisation, relative standard uncertainty
  const READ_SD = 0.02;               // burette meniscus reading (parallax) per reading, mL
  const DRAIN_SD = 0.02;              // drainage / wall-film variability per titration, mL
  const PERCEPTION_SD_PH = 0.12;      // analyst's colour-perception scatter at the endpoint, pH units

  /* endpoint pH where an analyst first sees the persistent colour change */
  function endpointPH(ind){ return ind.range[0] + 0.35*(ind.range[1]-ind.range[0]); }

  /* Simulate a replicate series exactly as an analyst would run it, returning raw readings */
  function simulateSeries(){
    const ca=parseFloat(Ca.value), va=parseFloat(Va.value), cb=parseFloat(Cb.value);
    const Veq = ca*va/cb;
    const indicator = pickIndicator(clamp(phAt(Veq),0,14));
    const pHe = endpointPH(indicator);
    const n = LAB.replicates;
    const rng = makeRng(hashSeed(LAB.seed, "acidbase", acidSelect.value, baseSelect.value, ca, va, cb, pKaEl.value, mode));
    const tolPip = glassTol("pipette", va), tolBur = glassTol("burette", 50);
    // systematic (once per series): titrant standardisation, burette and pipette calibration
    const cbTrue = cb*(1 + rng.normal(0, STD_RSD));
    const burBias = rng.rect(tolBur);
    const pipBias = rng.rect(tolPip);
    const reps = [];
    for(let i=0;i<n;i++){
      const vaTrue = va + pipBias + rng.normal(0, tolPip/3);           // pipette repeatability
      const TC = LAB.ambientC + rng.normal(0, 0.3);
      const pHseen = pHe + rng.normal(0, PERCEPTION_SD_PH);
      const p = {ca, va:vaTrue, cb:cbTrue, TC};
      const Vexact = volumeAtPH(pHseen, Veq*2, p);
      const start = rng.uni()*DROP_ML;                                  // where the last drop boundary falls
      const Vdelivered = Math.ceil((Vexact-start)/DROP_ML)*DROP_ML + start;
      const Vread = Vdelivered + burBias + rng.normal(0, READ_SD) - rng.normal(0, READ_SD) + rng.normal(0, DRAIN_SD);
      reps.push({Vexact, Vdelivered, Vread, TC, cFound: cb*Vread/va});
    }
    const st = stats(reps.map(r=>r.cFound));
    const Vst = stats(reps.map(r=>r.Vread));
    // GUM-style combined standard uncertainty of c(acid) = c(base)·V(burette)/V(pipette)
    const uCb = STD_RSD;
    const uVa = (tolPip/Math.sqrt(3))/va;
    const uVb = Math.sqrt(Math.pow(tolBur/Math.sqrt(3),2) + 2*READ_SD*READ_SD + DRAIN_SD*DRAIN_SD + Math.pow(DROP_ML/Math.sqrt(12),2))/Vst.mean;
    const uRep = n>1 ? (st.sd/Math.sqrt(n))/st.mean : 0;
    const uc = st.mean*Math.sqrt(uCb*uCb + uVa*uVa + uVb*uVb + uRep*uRep);
    // duration of ONE replicate: normal delivery, then drop-wise for the last ~1 mL
    const V1 = reps[0].Vdelivered, rate = parseFloat(rateEl.value);
    const fastV = Math.max(0, V1-1.0), slowV = V1-fastV;
    const tFast = fastV/rate*60, tSlow = slowV/Math.min(rate, DROPWISE_ML_MIN)*60;
    return {ca, va, cb, Veq, indicator, pHe, reps, st, Vst, uc, U: 2*uc, budget:{uCb, uVa, uVb, uRep}, rate, fastV, tFast, tSlow, total:tFast+tSlow,
            biasPct: 100*(st.mean-ca)/ca, indErrPct: 100*(volumeAtPH(pHe, Veq*2, {ca, va, cb})-Veq)/Veq};
  }

  function showReport(S, simT, completed){
    if(!LAB.realistic){ renderLabReport(reportEl, null); return; }
    const acidN = ACID_NAMES[acidSelect.value];
    renderLabReport(reportEl, {
      title: t("lab_report")+" — "+acidN+" + "+BASE_NAMES[baseSelect.value],
      rows: [
        [t("ab_true_conc"), fmt(S.ca,4)+" M"],
        [t("ab_found_conc"), `<strong>${fmtUnc(S.st.mean, S.U, "M")}</strong> (k = 2)`],
        [t("ab_mean_titre"), fmtUnc(S.Vst.mean, Math.max(S.Vst.sd,0.01), "mL")+` · RSD ${S.st.rsd.toFixed(2)} %`],
        [t("ab_ci95"), isFinite(S.st.ci95) ? "± "+(S.st.ci95<0.01 ? S.st.ci95.toExponential(2) : fmt(S.st.ci95,3))+" M" : "—"],
        [t("ab_equiv_true"), fmt(S.Veq,3)+" mL"],
        [t("ab_endpoint_ph"), S.pHe.toFixed(2)+" ("+t(S.indicator.nameKey)+")"],
        [t("ab_ind_error"), (S.indErrPct>=0?"+":"")+S.indErrPct.toFixed(2)+" %"],
        [t("ab_bias"), (S.biasPct>=0?"+":"")+S.biasPct.toFixed(2)+" %"],
        [t("ab_conditions"), `${LAB.ambientC} °C · pKw ${pKwAt(LAB.ambientC).toFixed(3)} · ${t("lab_class")} ${LAB.glass}`],
        [t("ab_time_per_rep"), fmtClock(S.total)+" · "+t("ab_total_time")+" "+fmtClock(S.total*S.reps.length)]
      ],
      replicates: {headers:["#", t("ab_col_titre"), t("ab_col_conc"), "T (°C)"],
        rows: S.reps.map((r,i)=>[i+1, r.Vread.toFixed(2), r.cFound.toFixed(4), r.TC.toFixed(1)])},
      budget: [
        [t("ab_u_std"), (S.budget.uCb*100).toFixed(3)+" %", ""],
        [t("ab_u_pip"), (S.budget.uVa*100).toFixed(3)+" %", ""],
        [t("ab_u_bur"), (S.budget.uVb*100).toFixed(3)+" %", ""],
        [t("ab_u_rep"), (S.budget.uRep*100).toFixed(3)+" %", ""],
        [t("ab_u_comb"), (S.uc/S.st.mean*100).toFixed(3)+" %", "U (k=2) = "+(S.U/S.st.mean*100).toFixed(2)+" %"]
      ].map(r=>[r[0], r[1], r[2]]),
      warnings: [
        Math.abs(S.indErrPct)>0.5 ? t("ab_warn_indicator").replace("{e}", S.indErrPct.toFixed(2)) : null,
        S.Veq>50 ? t("ab_warn_refill") : null,
        S.Veq<10 ? t("ab_warn_small") : null,
        !completed ? t("sim_stopped_at").replace("{v}", (S.reps[0].Vdelivered*Math.min(1,simT/S.total)).toFixed(2)+" mL").replace("{t}", fmtClock(simT)) : null
      ].filter(Boolean),
      notes: [t("ab_note_model"), t("ab_note_monoprotic"), t("lab_sim_disclaimer")]
    });
  }

  function runTitration(){
    const ca=parseFloat(Ca.value), va=parseFloat(Va.value), cb=parseFloat(Cb.value);
    const Veq = (ca*va)/cb;
    const rate = parseFloat(rateEl.value);
    const realistic = LAB.realistic;
    const S = realistic ? simulateSeries() : null;
    lastSeries = S;
    const Vstop = realistic ? S.reps[0].Vdelivered : Veq;
    // delivery schedule: constant rate (idealized) or fast then drop-wise near the endpoint (realistic)
    const total = realistic ? S.total : Veq/rate*60;
    const volAt = simT => {
      if(!realistic) return Math.min(Veq, rate*simT/60);
      if(simT <= S.tFast) return rate*simT/60;
      return Math.min(Vstop, S.fastV + Math.min(rate, DROPWISE_ML_MIN)*(simT-S.tFast)/60);
    };
    Vb.value = 0; Vb.dispatchEvent(new Event("input"));
    endpointNote.style.display = "none";
    titerEl.textContent = "—";
    renderLabReport(reportEl, null);
    runBtn.disabled = true;
    runBtn.textContent = t("a_running");
    abClock.run({
      total,
      onFrame:(simT)=>{
        Vb.value = volAt(simT);
        Vb.dispatchEvent(new Event("input"));
      },
      onDone:(simT, completed)=>{
        runBtn.disabled = false;
        runBtn.textContent = t("a_run_titration");
        endpointNote.style.display = "block";
        if(completed){
          titerEl.textContent = realistic ? fmtUnc(S.Vst.mean, Math.max(S.Vst.sd,0.01), "mL") + (S.reps.length>1?` (n = ${S.reps.length})`:"") : Veq.toFixed(2)+" mL";
          endpointNote.textContent = t("a_endpoint_detected") + " (" + fmtClock(total) + ")";
          showToast(t("toast_endpoint"), "success");
        } else {
          endpointNote.textContent = t("sim_stopped_at").replace("{v}", volAt(simT).toFixed(2)+" mL").replace("{t}", fmtClock(simT));
        }
        if(realistic) showReport(S, simT, completed);
      }
    });
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

  const powerEl = document.getElementById("t-power"), powerVal = document.getElementById("t-power-val");
  powerEl.addEventListener("input", ()=> powerVal.textContent = powerEl.value+" W");
  const vesselEl = document.getElementById("t-vessel"), sourceEl = document.getElementById("t-source");
  const thClock = createSimClock("panel-thermo");
  createLabConditions("panel-thermo");
  const reportEl = document.getElementById("t-report");
  function mercuryFor(T){
    const frac = clamp((T+20)/2020,0,1), h = 10+frac*130;
    mercury.setAttribute("y", 148-h); mercury.setAttribute("height", h);
  }

  /* vessel: glass mass (g), specific heat (J/g·K), overall heat-loss coefficient hA (W/K),
     open-surface evaporation scale (W at the liquid's boiling point) */
  const VESSELS = {
    beaker100:{m:50,  c:0.83, hA:0.20, evap:25},
    beaker250:{m:105, c:0.83, hA:0.35, evap:45},
    beaker600:{m:200, c:0.83, hA:0.60, evap:80},
    rbf500:   {m:190, c:0.83, hA:0.45, evap:10},
    coffee:   {m:6,   c:1.30, hA:0.06, evap:12},
    dewar:    {m:40,  c:0.83, hA:0.012,evap:2},
    crucible: {m:30,  c:0.88, hA:0.25, evap:10}
  };
  /* fraction of the source's nominal power that actually enters the vessel */
  const SOURCES = {bunsen:0.35, hotplate:0.60, mantle:0.80, immersion:0.95, chiller:0.70};
  /* phase-change data: mp/bp (°C, 1 atm), latent heats (J/g), molar ΔHvap (kJ/mol), Antoine (mmHg, °C) */
  const PHASE = {
    H2O:{mp:0, Hf:334, bp:100, Hv:2257, dHv:40.65, ant:[8.07131,1730.63,233.426], cs:2.09},
    C2H5OH:{mp:-114.1, Hf:109, bp:78.37, Hv:846, dHv:38.56, ant:[8.20417,1642.89,230.3]},
    CH3OH:{mp:-97.6, Hf:99.2, bp:64.7, Hv:1100, dHv:35.2, ant:[8.08097,1582.271,239.726]},
    Al:{mp:660.3, Hf:397}, Cu:{mp:1084.6, Hf:209}, Fe:{mp:1538, Hf:247}, Pb:{mp:327.5, Hf:23}, Sn:{mp:231.9, Hf:59.2},
    Zn:{mp:419.5, Hf:112}, Ag:{mp:961.8, Hf:105}, Au:{mp:1064.2, Hf:64.5}, Mg:{mp:650, Hf:349}, Ni:{mp:1455, Hf:298},
    NaCl:{mp:801, Hf:482}, KCl:{mp:770, Hf:353}, NaOH:{mp:323, Hf:209}
  };
  function vapKPa(ph, TC){ if(!ph.ant) return 0; const [A,B,C]=ph.ant; return Math.pow(10, A - B/(C+TC))*0.133322; }

  /* Realistic heating/cooling run: energy balance with source efficiency, vessel heat capacity,
     Newton heat loss to the room, evaporation, melting/boiling plateaus, and a thermometer with
     calibration offset, 0.1 °C resolution, read noise and an 8 s response lag. */
  function simulateHeating(subs, Ti, Tf, P, opts){
    const rng = opts.rng;
    const V = VESSELS[vesselEl.value] || VESSELS.beaker250;
    const heating = Tf > Ti;
    const eta = heating ? (SOURCES[sourceEl.value] ?? 0.6) : SOURCES.chiller;
    const Pin = (heating?1:-1) * eta * P * opts.powerFactor;
    const Tamb = opts.Tamb, pLab = LAB.pressureKPa;
    // per-substance state: liquid/solid masses, transition temperatures at lab pressure
    const S = subs.map(s=>{
      const ph = PHASE[s.formula] || {};
      const bp = ph.bp!=null ? (ph.dHv ? boilingPointAt(ph.bp, ph.dHv, pLab) : ph.bp) : null;
      const st = {f:s.formula, c:s.c, cs:ph.cs||s.c, ph, bp, mp:ph.mp, m:s.massMeas};
      const startSolid = ph.mp!=null && Ti < ph.mp;
      st.solid = startSolid ? st.m : 0; st.liquid = startSolid ? 0 : st.m;
      st.vaporized = 0; st.evaporated = 0;
      return st;
    });
    const Cv = V.m*V.c;
    const heatCap = ()=> Cv + S.reduce((a,s)=>a + s.solid*s.cs + s.liquid*s.c, 0);
    let T = Ti, t = 0, Tr = Ti;               // true temperature, thermometer sensor temperature
    const tau = 8, offset = opts.thermoOffset;
    const out = [{t:0, T, R: Math.round((Ti+offset)*10)/10}];
    let Esrc=0, Eloss=0, Eevap=0, Elat=0, reached=false, stalled=false, plateau=null, steadyFor=0;
    const tMax = 86400;
    let nextRec = 0;
    while(t < tMax){
      const C = heatCap();
      // evaporation of volatile liquids below their boiling point (open vessels)
      let Pev = 0;
      S.forEach(s=>{ if(s.liquid>0 && s.bp!=null && T < s.bp-0.01){ const pv=vapKPa(s.ph, T); Pev += V.evap * Math.min(1, pv/pLab) * (s.liquid/(s.liquid+50)); } });
      const Ploss = V.hA*(T - Tamb);
      let Pnet = Pin - Ploss - Pev;
      // adaptive step: at most 0.2 K change, at most 2 s
      let dt = Math.min(2, 0.2*C/Math.max(Math.abs(Pnet), 1e-6));
      dt = Math.max(dt, 0.01);
      // phase transitions: hold temperature while latent heat is absorbed / released
      let held = false;
      if(Pnet>0){
        const sb = S.find(s=>s.bp!=null && s.liquid>0 && T >= s.bp-1e-6);
        const sm = S.find(s=>s.mp!=null && s.solid>0 && T >= s.mp-1e-6);
        const s = sm || sb;
        if(s){
          held = true;
          const L = s===sm ? s.ph.Hf : s.ph.Hv;
          const dm = Math.min(s===sm ? s.solid : s.liquid, Pnet*dt/L);
          if(s===sm){ s.solid -= dm; s.liquid += dm; plateau = {f:s.f, kind:"melt", T:s.mp}; }
          else { s.liquid -= dm; s.vaporized += dm; plateau = {f:s.f, kind:"boil", T:s.bp}; }
          Elat += dm*L; T = s===sm ? s.mp : s.bp;
        }
      } else if(Pnet<0){
        const s = S.find(s=>s.mp!=null && s.liquid>0 && T <= s.mp+1e-6);
        if(s){
          held = true;
          const dm = Math.min(s.liquid, -Pnet*dt/s.ph.Hf);
          s.liquid -= dm; s.solid += dm; Elat -= dm*s.ph.Hf; T = s.mp; plateau = {f:s.f, kind:"freeze", T:s.mp};
        }
      }
      if(!held){
        let Tn = T + Pnet*dt/C;
        // do not overshoot a transition temperature inside one step
        S.forEach(s=>{
          if(Pnet>0){ if(s.solid>0 && s.mp!=null && T<s.mp && Tn>s.mp) Tn=s.mp; if(s.liquid>0 && s.bp!=null && T<s.bp && Tn>s.bp) Tn=s.bp; }
          else { if(s.liquid>0 && s.mp!=null && T>s.mp && Tn<s.mp) Tn=s.mp; }
        });
        if(heating && Tn>Tf) Tn=Tf;
        if(!heating && Tn<Tf) Tn=Tf;
        T = Tn;
      }
      // evaporative mass loss
      if(Pev>0) S.forEach(s=>{ if(s.liquid>0 && s.bp!=null && s.ph.Hv){ const pv=vapKPa(s.ph,T); const pe=V.evap*Math.min(1,pv/pLab)*(s.liquid/(s.liquid+50)); const dm=Math.min(s.liquid, pe*dt/s.ph.Hv); s.liquid-=dm; s.evaporated+=dm; } });
      Esrc += Pin*dt; Eloss += Ploss*dt; Eevap += Pev*dt;
      Tr += (T - Tr)*(1-Math.exp(-dt/tau));
      t += dt;
      if(t >= nextRec){ out.push({t, T, R: Math.round((Tr + offset + rng.normal(0,0.05))*10)/10}); nextRec = t + Math.max(1, t/400); }
      if((heating && T>=Tf-1e-9) || (!heating && T<=Tf+1e-9)){ reached = true; break; }
      // steady state that never reaches the target (losses balance the input, or a plateau that cannot finish)
      if(!held && Math.abs(Pnet) < 1e-3*Math.max(1,Math.abs(Pin))){ steadyFor += dt; if(steadyFor > 600){ stalled = true; break; } } else steadyFor = 0;
      if(S.every(s=>s.liquid<=0 && s.solid<=0) && Cv<=0){ stalled = true; break; }
    }
    // let the thermometer settle for 30 s after the heat is switched off (what an analyst records)
    for(let k=0;k<30;k++){ Tr += (T-Tr)*(1-Math.exp(-1/tau)); }
    const Rend = Math.round((Tr + offset + rng.normal(0,0.05))*10)/10;
    out.push({t, T, R: Rend});
    const Rstart = out[0].R;
    const Esample = S.reduce((a,s)=>a, 0);
    const qMeas = subs.reduce((a,s)=>a + s.massMeas*s.c, 0)*(Rend - Rstart);
    return {series:out, t, T, reached, stalled, plateau, S, Esrc, Eloss, Eevap, Elat, Eves: Cv*(T-Ti), eta, Pin, Rstart, Rend, qMeas,
            Tmax: Tamb + (Pin)/Math.max(V.hA,1e-9)};
  }

  // heat is delivered at constant power P; realistic mode adds the full laboratory energy balance
  function solve(){
    const substances = readSubstances();
    if(!substances.length) return;
    const Ti = parseFloat(TiSlider.value), Tf = parseFloat(TfSlider.value);
    const dT = Tf-Ti;
    const heating = dT>0;
    const P = parseFloat(powerEl.value);
    const realistic = LAB.realistic;

    let totalQ=0, totalMass=0;
    const rows = substances.map(s=>{
      const q = s.mass*s.c*dT;
      totalQ += q; totalMass += s.mass;
      return {...s, q};
    });
    const qPerGram = totalQ/(totalMass||1);

    // realistic: run every replicate with its own weighing, ambient and source fluctuations
    let R = null, reps = [];
    if(realistic && dT!==0){
      const rng = makeRng(hashSeed(LAB.seed, "thermo", JSON.stringify(substances), Ti, Tf, P, vesselEl.value, sourceEl.value));
      const thermoOffset = rng.rect(0.2);            // same thermometer for all replicates
      for(let i=0;i<LAB.replicates;i++){
        const subsI = substances.map(s=>({...s, massMeas: s.mass + rng.normal(0, 0.005)}));
        reps.push(simulateHeating(subsI, Ti, Tf, P, {rng, Tamb: LAB.ambientC + rng.normal(0,0.3), powerFactor: 1 + rng.normal(0, sourceEl.value==="bunsen"?0.03:0.01), thermoOffset}));
      }
      R = reps[0];
    }
    const total = realistic && R ? R.t : Math.abs(totalQ)/P;

    formulaEl.textContent = substances.map(s=>s.formula).join(" + ");
    classEl.textContent = heating? t("t_absorbed") : t("t_released");
    classEl.style.color = heating? "var(--red)" : PHOSPHOR;
    flame.style.display = heating? "block":"none";
    ice.style.display = heating? "none":"block";
    if(flaskLiquid) flaskLiquid.setAttribute("fill", heating ? "#D9695F" : "#63C7D6");
    equationEl.innerHTML = `<span style="color:var(--ink-soft);">${t("sim_state_running")}…</span>`;
    resultsTable.innerHTML = "";
    renderLabReport(reportEl, null);
    const solveBtn = document.getElementById("t-solve");
    solveBtn.disabled = true;
    const yDom = [Math.min(Ti,Tf,-20), Math.max(Ti,Tf,200)];
    const N=120;
    const seriesAt = simT => { const s=R.series; let lo=0, hi=s.length-1; while(hi-lo>1){ const m=(lo+hi)>>1; if(s[m].t<=simT) lo=m; else hi=m; } return s[lo]; };

    thClock.run({
      total,
      onFrame:(simT, f)=>{
        if(R){
          const pt = seriesAt(simT);
          mercuryFor(pt.R);
          qEl.textContent = fmt(substances.reduce((a,s)=>a+s.mass*s.c,0)*(pt.R-R.Rstart),1)+" J";
          dHmEl.textContent = fmt(substances.reduce((a,s)=>a+s.mass*s.c,0)*(pt.R-R.Rstart)/(totalMass||1),2)+" J/g";
          const pts = R.series.filter(p=>p.t<=simT).map(p=>({x:p.t, y:p.R}));
          if(pts.length<2) pts.push({x:simT, y:pt.R});
          drawLineChart(chart, {points:pts, xDomain:[0, total||1], yDomain:yDom, xLabel:t("axis_time_s"), yLabel:t("t_axis_temp"), color: heating? "#E8695F" : "#63C7D6",
            markers:[{x:simT, y:pt.R, color:AMBER}]});
          return;
        }
        const Tnow = Ti + dT*f;
        mercuryFor(Tnow);
        qEl.textContent = fmt(totalQ*f,1)+" J";
        dHmEl.textContent = fmt(qPerGram*f,2)+" J/g";
        const n = Math.max(2, Math.round(f*N)+1), pts=[];
        for(let i=0;i<n;i++){ const ff=Math.min(f, i/N); pts.push({x:ff*total, y:Ti+dT*ff}); }
        drawLineChart(chart, {points:pts, xDomain:[0, total||1], yDomain:yDom, xLabel:t("axis_time_s"), yLabel:t("t_axis_temp"), color: heating? "#E8695F" : "#63C7D6",
          markers:[{x:f*total, y:Tnow, color:AMBER}]});
      },
      onDone:(simT, completed)=>{
        solveBtn.disabled = false;
        if(R){
          const pt = seriesAt(simT);
          const Treached = completed ? R.T : pt.T;
          const rowsNow = rows.map(r=>({...r, q: r.mass*r.c*(Treached-Ti)}));
          const qNow = rowsNow.reduce((a,r)=>a+r.q,0);
          qEl.textContent = fmt(qNow,1)+" J";
          dHmEl.textContent = fmt(qNow/(totalMass||1),2)+" J/g";
          const latentTxt = R.S.filter(s=>s.vaporized>0||Math.abs(s.solid-(s.ph.mp!=null&&Ti<s.ph.mp?s.m:0))>1e-6).map(s=>
            s.vaporized>0 ? `${s.f}: ${fmt(s.vaporized,2)} g boiled × ${s.ph.Hv} J/g` : `${s.f}: phase change (${s.ph.Hf} J/g)`).join("<br>");
          equationEl.innerHTML =
            rowsNow.map(r=>`q(${r.formula}) = ${r.mass}g × ${r.c}J/g°C × ${(Treached-Ti).toFixed(1)}°C = ${fmt(r.q,1)}J`).join("<br>") +
            `<br><b>${t("t_total")} (${t("th_sensible")}): ${fmt(qNow,1)} J</b>` +
            (latentTxt ? `<br>${t("th_latent")}: ${fmt(R.Elat,1)} J<br>${latentTxt}` : "") +
            `<br>${t("th_balance")}: ${fmt(Math.abs(R.Esrc),0)} J ${t("th_in")} = ${fmt(Math.abs(qNow+R.Eves),0)} J ${t("th_stored")} + ${fmt(Math.abs(R.Elat),0)} J ${t("th_latent_s")} + ${fmt(Math.abs(R.Eloss+R.Eevap),0)} J ${t("th_lost")}`;
          resultsTable.innerHTML = `
            <tr><th>${t("c_th_formula")}</th><th>${t("t_th_mass")}</th><th>${t("t_th_c")}</th><th>${t("t_th_q")}</th></tr>
            ${rowsNow.map(r=>`<tr><td>${r.formula}</td><td>${r.mass} g</td><td>${r.c}${r.known?'':' *'}</td><td>${fmt(r.q,1)} J</td></tr>`).join("")}`;
          const times = stats(reps.map(r=>r.t)), qm = stats(reps.map(r=>r.qMeas));
          const sumMC = substances.reduce((a,s)=>a+s.mass*s.c,0);
          const uQ = Math.sqrt(Math.pow(Math.sqrt(2)*0.1/Math.sqrt(12)*sumMC,2) + Math.pow(0.05*Math.SQRT2*sumMC,2) + Math.pow(qm.n>1?qm.sd/Math.sqrt(qm.n):0,2) + substances.reduce((a,s)=>a+Math.pow(0.005*s.c*Math.abs(R.Rend-R.Rstart),2),0));
          const warn = [];
          if(R.stalled) warn.push(R.plateau && R.plateau.kind==="boil" ? t("th_warn_boil").replace("{f}",R.plateau.f).replace("{T}",R.plateau.T.toFixed(1)) : t("th_warn_stall").replace("{T}", fmt(R.T,1)));
          else if(R.plateau && R.plateau.kind==="boil") warn.push(t("th_warn_boiled").replace("{f}",R.plateau.f).replace("{T}",R.plateau.T.toFixed(1)));
          if(R.plateau && R.plateau.kind!=="boil") warn.push(t("th_warn_phase").replace("{f}",R.plateau.f).replace("{T}",R.plateau.T.toFixed(1)));
          const evapG = R.S.reduce((a,s)=>a+s.evaporated+s.vaporized,0);
          if(evapG>0.5) warn.push(t("th_warn_evap").replace("{g}", fmt(evapG,2)));
          if(!completed) warn.push(t("sim_stopped_at").replace("{v}", pt.R.toFixed(1)+" °C").replace("{t}", fmtClock(simT)));
          renderLabReport(reportEl, {
            title: t("lab_report")+" — "+substances.map(s=>s.formula).join(" + "),
            rows: [
              [t("th_target"), R.reached ? `${Tf} °C ${t("th_reached")}` : `<span style="color:var(--amber)">${t("th_not_reached")} (${fmt(R.T,1)} °C)</span>`],
              [t("th_time"), fmtUnc(times.mean, times.sd||0.5, "s")+` (${fmtClock(times.mean)})`],
              [t("th_q_meas"), `<strong>${fmtUnc(qm.mean, 2*uQ, "J")}</strong> (k = 2)`],
              [t("th_readings"), `${R.Rstart.toFixed(1)} → ${R.Rend.toFixed(1)} °C`],
              [t("th_supplied"), fmt(P*R.t,0)+" J ("+P+" W × "+fmt(R.t,0)+" s)"],
              [t("th_entered"), fmt(Math.abs(R.Esrc),0)+" J (η = "+(R.eta*100).toFixed(0)+" %)"],
              [t("th_losses"), fmt(Math.abs(R.Eloss),0)+" J · "+t("th_evap")+" "+fmt(R.Eevap,0)+" J"],
              [t("th_vessel"), fmt(Math.abs(R.Eves),0)+" J"],
              [t("th_eff"), (100*Math.abs(qNow+R.Elat)/(P*R.t||1)).toFixed(1)+" %"],
              [t("th_mass_lost"), fmt(evapG,3)+" g"]
            ],
            replicates: {headers:["#", t("th_col_time"), t("th_col_tend"), t("th_col_q")],
              rows: reps.map((r,i)=>[i+1, fmtClock(r.t), r.Rend.toFixed(1), fmt(r.qMeas,0)])},
            budget: [
              [t("th_u_res"), fmt(Math.sqrt(2)*0.1/Math.sqrt(12)*sumMC,1)+" J", ""],
              [t("th_u_noise"), fmt(0.05*Math.SQRT2*sumMC,1)+" J", ""],
              [t("th_u_mass"), fmt(Math.sqrt(substances.reduce((a,s)=>a+Math.pow(0.005*s.c*Math.abs(R.Rend-R.Rstart),2),0)),1)+" J", ""],
              [t("ab_u_rep"), fmt(qm.n>1?qm.sd/Math.sqrt(qm.n):0,1)+" J", ""],
              [t("ab_u_comb"), fmt(uQ,1)+" J", "U (k=2) = "+fmt(2*uQ,1)+" J"]
            ],
            warnings: warn,
            notes: [t("th_note_model"), t("lab_sim_disclaimer")]
          });
          lastResult = {substances: rowsNow, Ti, Tf: Treached, dT: Treached-Ti, totalQ: qNow, qPerGram: qNow/(totalMass||1), heating, power_W:P, time_s: R.t,
                        realistic:true, vessel: vesselEl.value, source: sourceEl.value, qMeasured: qm.mean, qU: 2*uQ, replicates: reps.map(r=>({t:r.t, Tend:r.Rend, q:r.qMeas}))};
          showToast(t("toast_reaction_run"), "success");
          return;
        }
        renderLabReport(reportEl, null);
        const f = total>0 ? simT/total : 1;
        const Treached = Ti + dT*f;
        const rowsNow = rows.map(r=>({...r, q:r.q*f}));
        const qNow = totalQ*f;
        const eqLines = rowsNow.map(r=> `q(${r.formula}) = ${r.mass}g × ${r.c}J/g°C × ${(Treached-Ti).toFixed(1)}°C = ${fmt(r.q,1)}J`);
        equationEl.innerHTML = eqLines.join("<br>") + `<br><b>${t("t_total")}: ${fmt(qNow,1)} J</b>` +
          `<br>${t("t_heat_time")}: |q| / P = ${fmt(Math.abs(totalQ),1)} J / ${P} W = <b>${fmtClock(total)}</b> (${fmt(total,1)} s)` +
          (completed ? "" : `<br><span style="color:var(--amber);">${t("sim_stopped_at").replace("{v}", fmt(Treached,1)+" °C").replace("{t}", fmtClock(simT))}</span>`);
        resultsTable.innerHTML = `
          <tr><th>${t("c_th_formula")}</th><th>${t("t_th_mass")}</th><th>${t("t_th_c")}</th><th>${t("t_th_q")}</th></tr>
          ${rowsNow.map(r=>`<tr><td>${r.formula}</td><td>${r.mass} g</td><td>${r.c}${r.known?'':' *'}</td><td>${fmt(r.q,1)} J</td></tr>`).join("")}
        `;
        lastResult = {substances: rowsNow, Ti, Tf: Treached, dT: Treached-Ti, totalQ: qNow, qPerGram: qPerGram*f, heating, power_W:P, time_s: simT};
        showToast(t("toast_reaction_run"), "success");
      }
    });
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
    if(lastResult.realistic){
      rows.push([],["Realistic run"],["vessel",lastResult.vessel],["heat_source",lastResult.source],["power_W",lastResult.power_W],["time_to_target_s",fmt(lastResult.time_s,1)],
        ["q_from_thermometer_J",fmt(lastResult.qMeasured,1)],["expanded_U_k2_J",fmt(lastResult.qU,1)],[],["replicate","time_s","T_end_reading_C","q_J"]);
      lastResult.replicates.forEach((r,i)=>rows.push([i+1, r.t.toFixed(1), r.Tend.toFixed(1), r.q.toFixed(1)]));
    }
    downloadCSV("calorimetry_results.csv", labConditionsCSV(LAB.realistic?"energy balance with heat loss, evaporation, phase changes, thermometer lag/resolution":"q = m·c·ΔT, ideal heating at constant power").concat(rows));
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

  /* ---- reactant rows: each physical state is entered the way it is measured in the lab ----
     solid    → weighed mass (g)
     liquid   → measured volume (mL) × density (g/mL)           [pure liquid, e.g. ethanol]
     solution → volume (mL) × molar concentration (mol/L)       [n = c·V, both are needed]
     gas      → volume (mL) at room T and P, ideal gas n = PV/RT */
  const ACIDS = new Set(["HCl","HNO3","H2SO4","HF","H3PO4","HBr","HI","HClO4"]);
  const BASES = new Set(["NaOH","KOH","CaOH2","Ca(OH)2","NH3","LiOH","Ba(OH)2"]);
  const AQUEOUS_SALTS = new Set(["NaCl","KCl","CuSO4","AgNO3","BaCl2","Na2SO4","ZnSO4","FeCl3","Na2CO3","NaHCO3","NH4Cl","KMnO4","K2Cr2O7","Pb(NO3)2","KI","CaCl2","MgCl2","NaNO3","KNO3"]);
  const LIQUID_DENSITY = {H2O:0.998, C2H5OH:0.789, CH3CH2OH:0.789, CH3OH:0.792, CH3COOH:1.049, C2H4O2:1.049, C3H8O:0.786, C4H10O:0.810,
    C6H6:0.877, C7H8:0.867, C6H14:0.659, C7H16:0.684, C8H18:0.703, C3H6O:0.784, CH3COCH3:0.784, CHCl3:1.489, CCl4:1.594, CH2Cl2:1.326,
    C3H8O3:1.261, C2H6O2:1.113, H2O2:1.45, Br2:3.10, Hg:13.53, C4H8O2:0.902, C5H12:0.626, C6H12:0.779, C2H4O:0.785, CH2O2:1.22, HCOOH:1.22,
    C6H5NH2:1.022, C6H7N:1.022, C5H5N:0.982, C2H3N:0.786, CS2:1.26, C4H8O:0.889, C2H6OS:1.10};
  const GASES = new Set(["H2","O2","N2","CO2","CO","CH4","C2H6","C3H8","C4H10","C2H4","C2H2","Cl2","F2","He","Ne","Ar","NO","NO2","N2O","SO2","H2S","O3"]);
  function guessPhase(formula){
    if(ACIDS.has(formula) || BASES.has(formula) || AQUEOUS_SALTS.has(formula)) return "solution";
    if(GASES.has(formula)) return "gas";
    if(LIQUID_DENSITY[formula]!==undefined) return "liquid";
    return "solid";
  }
  function qtyField(key, cls, value, unit, step, extra){
    return `<label class="qty-field ${extra||""}"><span class="qty-lbl" data-ck="${key}">${t(key)}</span>` +
           `<span class="qty-box"><input type="number" class="${cls}" value="${value}" min="0" step="${step}"><span class="qty-unit">${unit}</span></span></label>`;
  }
  function makeReactantRow(formula, phase, mass, vol, conc, density){
    phase = phase || guessPhase(formula||"");
    const row=document.createElement("div");
    row.className="reaction-row-block";
    const dens = density!==undefined ? density : (LIQUID_DENSITY[formula]!==undefined ? LIQUID_DENSITY[formula] : 1.00);
    row.innerHTML = `
      <div class="reaction-row">
        <input type="text" class="formula-cell" list="known-formulas" value="${formula||''}" placeholder="e.g. Mg, HCl">
        <select class="phase-cell">
          <option value="solid" data-ck="c_phase_solid">${t("c_phase_solid")}</option>
          <option value="liquid" data-ck="c_phase_liquid">${t("c_phase_liquid")}</option>
          <option value="solution" data-ck="c_phase_solution">${t("c_phase_solution")}</option>
          <option value="gas" data-ck="c_phase_gas">${t("c_phase_gas")}</option>
        </select>
        <button class="row-remove" title="remove">✕</button>
      </div>
      <div class="qty-row qty-solid">${qtyField("c_q_mass","mass-cell", mass!==undefined?mass:10, "g", "0.01")}</div>
      <div class="qty-row qty-liquid">${qtyField("c_q_volume","lvol-cell", vol!==undefined?vol:10, "mL", "0.1")}${qtyField("c_q_density","dens-cell", dens, "g/mL", "0.001")}</div>
      <div class="qty-row qty-solution">${qtyField("c_q_volume","vol-cell", vol!==undefined?vol:50, "mL", "1")}${qtyField("c_q_conc","conc-cell", conc!==undefined?conc:1.0, "mol/L", "0.01")}</div>
      <div class="qty-row qty-gas">${qtyField("c_q_volume","gvol-cell", vol!==undefined?vol:100, "mL", "1")}<span class="qty-gas-note"></span></div>
      <div class="qty-amount"></div>
    `;
    const formulaInput = row.querySelector(".formula-cell");
    const phaseSelect = row.querySelector(".phase-cell");
    phaseSelect.value = phase;
    function applyPhaseVisibility(){
      const ph = phaseSelect.value;
      ["solid","liquid","solution","gas"].forEach(k=> row.querySelector(".qty-"+k).style.display = k===ph ? "flex" : "none");
      updateAmount();
    }
    function updateAmount(){
      const out = row.querySelector(".qty-amount");
      row.querySelector(".qty-gas-note").textContent = t("c_q_gas_note").replace("{T}", LAB.ambientC).replace("{P}", LAB.pressureKPa);
      const q = readRowQuantity(row);
      const p = parseFormula(formulaInput.value.trim());
      if(!formulaInput.value.trim()){ out.textContent = ""; return; }
      if(!p.valid){ out.textContent = t("c_q_invalid"); out.classList.add("bad"); return; }
      out.classList.remove("bad");
      const mm = molarMass(p.counts);
      const mol = q.molesGiven!==null ? q.molesGiven : q.massG/mm;
      const g = q.massG!==null ? q.massG : mol*mm;
      out.textContent = `= ${fmt(mol,4)} mol · ${fmt(g,4)} g · M = ${mm.toFixed(2)} g/mol`;
    }
    let userSetPhase = false;
    formulaInput.addEventListener("input", ()=>{
      const f = formulaInput.value.trim();
      if(LIQUID_DENSITY[f]!==undefined) row.querySelector(".dens-cell").value = LIQUID_DENSITY[f];
      if(!userSetPhase) phaseSelect.value = guessPhase(f);
      applyPhaseVisibility();
    });
    phaseSelect.addEventListener("change", ()=>{ userSetPhase = true; applyPhaseVisibility(); });
    row.querySelectorAll(".qty-row input").forEach(i=> i.addEventListener("input", updateAmount));
    row.querySelector(".row-remove").addEventListener("click", ()=>{
      if(reactantsList.children.length>1) row.remove();
    });
    row.__update = ()=>{
      row.querySelectorAll("[data-ck]").forEach(el=> el.textContent = t(el.dataset.ck));
      updateAmount();
    };
    applyPhaseVisibility();
    return row;
  }
  /* moles (solution, gas) or mass (solid, liquid) for one row */
  function readRowQuantity(block){
    const phase = block.querySelector(".phase-cell").value;
    const num = sel => Math.max(0, parseFloat(block.querySelector(sel).value)||0);
    if(phase==="solid")  return {phase, massG: num(".mass-cell"), molesGiven: null};
    if(phase==="liquid") return {phase, massG: num(".lvol-cell")*num(".dens-cell"), molesGiven: null};
    if(phase==="solution") return {phase, massG: null, molesGiven: num(".vol-cell")/1000*num(".conc-cell")};
    // ideal gas at room conditions: n = PV/RT  (P in Pa, V in m³)
    const V = num(".gvol-cell")/1e6, P = LAB.pressureKPa*1000, T = LAB.ambientC+273.15;
    return {phase, massG: null, molesGiven: P*V/(8.314*T)};
  }
  onLanguageChange(()=> [...reactantsList.children].forEach(r=> r.__update && r.__update()));
  onLabChange(()=> [...reactantsList.children].forEach(r=> r.__update && r.__update()));
  /* convenience: a row for a product carried into the next step (chain reaction) */
  function rowForAmount(formula, grams){
    const ph = guessPhase(formula);
    const p = parseFormula(formula), mm = p.valid ? molarMass(p.counts) : 1, mol = grams/mm;
    if(ph==="liquid"){ const d = LIQUID_DENSITY[formula]; return makeReactantRow(formula, "liquid", undefined, +(grams/d).toFixed(3), undefined, d); }
    if(ph==="gas"){ const V = mol*8.314*(LAB.ambientC+273.15)/(LAB.pressureKPa*1000)*1e6; return makeReactantRow(formula, "gas", undefined, +V.toFixed(1)); }
    return makeReactantRow(formula, "solid", +grams.toFixed(4));
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
      const q = readRowQuantity(block);
      return {formula, phase:q.phase, massG:q.massG, molesGiven:q.molesGiven};
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
        // flag a common hallucination signature: the suggested product(s) -- however
        // many there are -- are just the reactant atoms redistributed with each side
        // taken at face value (no coefficients), nothing gained or lost. This misses
        // real chemistry that needs a coefficient other than 1 to balance correctly
        // (e.g. suggesting "MgCl + H" instead of "MgCl2 + H2" for Mg + HCl).
        const reactants = readReactants();
        const reactantCounts = {};
        reactants.forEach(r=>{
          const c = parseFormula(r.formula).counts || {};
          Object.entries(c).forEach(([el,n])=>{ reactantCounts[el] = (reactantCounts[el]||0)+n; });
        });
        const productCounts = {};
        valid.forEach(f=>{
          const c = parseFormula(f).counts || {};
          Object.entries(c).forEach(([el,n])=>{ productCounts[el] = (productCounts[el]||0)+n; });
        });
        const rKeys = Object.keys(reactantCounts), pKeys = Object.keys(productCounts);
        const suspicious = rKeys.length===pKeys.length && rKeys.every(el => reactantCounts[el]===productCounts[el]);
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
  const customClock = createSimClock("panel-custom");
  createLabConditions("panel-custom");

  const KINETICS_K_REF = {combustion:0.5, neutralization:0.6, metal_acid:0.3, decomposition:0.02, synthesis:0.01, unknown:0.05, ai:0.05, esterification:0.02, saponification:0.4, alkene_addition:0.3, photosynthesis:0.003, alkyne_addition:0.25, alkane_halogenation:0.08, alcohol_oxidation:0.15, amine_neutralization:0.6};
  const EQUILIBRIUM_KC_REF = {combustion:1e8, neutralization:1e8, metal_acid:1e6, decomposition:20, synthesis:100, unknown:1, ai:1, esterification:4, saponification:1e6, alkene_addition:1e4, photosynthesis:0.001, alkyne_addition:1e4, alkane_halogenation:1e3, alcohol_oxidation:1e5, amine_neutralization:1e8};

  /* ---- realistic laboratory layer for the custom reaction ---- */
  const EA_KJ = {combustion:150, neutralization:12, amine_neutralization:12, metal_acid:40, decomposition:120, synthesis:60, esterification:60, saponification:50,
                 alkene_addition:50, alkyne_addition:50, alkane_halogenation:60, alcohol_oxidation:55, photosynthesis:30, unknown:60, ai:60};
  const FORM_FACTOR = {powder:1, granules:0.25, lumps:0.04};
  function heteroFactor(reactants){
    const stir = document.getElementById("c-stir").checked;
    const hasSolid = reactants.some(r=>r.phase==="solid");
    if(hasSolid) return FORM_FACTOR[document.getElementById("c-form").value||"powder"] * (stir?1:0.35);
    return stir ? 1 : 0.7;
  }
  function customReport(ctx){
    const {rows, reactionType, kRef, EaKJ, hetero, T, Xeq, curT, completed, reactants} = ctx;
    const repEl = document.getElementById("c-report");
    if(!LAB.realistic){ renderLabReport(repEl, null); return null; }
    const purity = clamp(parseFloat(document.getElementById("c-purity").value)||99, 50, 100)/100;
    const loss = clamp(parseFloat(document.getElementById("c-loss").value)||0, 0, 90)/100;
    const prods = rows.filter(r=>r.yieldMass!==undefined);
    const main = prods.reduce((a,b)=> (b.yieldMass>(a?a.yieldMass:-1)) ? b : a, null);
    const kAt = TC => kRef*Math.exp(-EaKJ*1000/8.314*(1/(TC+273.15)-1/298.15))*hetero;
    const Xat = (TC, tt) => Xeq*(1-Math.exp(-kAt(TC)*tt));
    const rng = makeRng(hashSeed(LAB.seed, "custom", JSON.stringify(reactants), reactionType, T, curT));
    const reps=[];
    for(let i=0;i<LAB.replicates;i++){
      const Ti = T + rng.normal(0, 0.5);                       // bath / hot-plate regulation
      const pur = clamp(purity + rng.normal(0, 0.003), 0, 1);  // lot-to-lot assay
      const li = clamp(loss + rng.normal(0, Math.max(0.01, loss*0.25)), 0, 0.95); // transfer / work-up losses
      const X = Xat(Ti, curT);
      const mass = main ? Math.max(0, main.yieldMass*pur*X*(1-li) + rng.normal(0, 0.001)) : 0; // top-loading balance ±1 mg
      reps.push({Ti, X, mass, yieldPct: main && main.yieldMass ? 100*mass/main.yieldMass : 0});
    }
    const ms = stats(reps.map(r=>r.mass)), ys = stats(reps.map(r=>r.yieldPct));
    const theo = main ? main.yieldMass : 0;
    const uBal = 0.001/Math.sqrt(3)*Math.SQRT2;
    const uPur = theo*Xat(T,curT)*(1-loss)*0.005;
    const uRep = ms.n>1 ? ms.sd/Math.sqrt(ms.n) : 0;
    const uc = Math.sqrt(uBal*uBal + uPur*uPur + uRep*uRep);
    const k = kAt(T), X = Xat(T, curT);
    const warn = [];
    if(Xeq < 0.95) warn.push(t("cr_warn_eq").replace("{x}", (Xeq*100).toFixed(1)));
    if(X < 0.5*Xeq) warn.push(t("cr_warn_slow").replace("{t}", fmtClock(Math.log(20)/k)));
    if(hetero < 0.5) warn.push(t("cr_warn_hetero"));
    if(reactionType==="combustion") warn.push(t("cr_warn_ignition"));
    if(!completed) warn.push(t("sim_state_stopped")+" · "+fmtClock(curT));
    renderLabReport(repEl, {
      title: t("lab_report")+(main?" — "+main.formula:""),
      rows: [
        [t("cr_k"), fmt(k,4)+" s⁻¹ ("+T+" °C, Eₐ ≈ "+EaKJ+" kJ/mol)"],
        [t("cr_mass_transfer"), "× "+fmt(hetero,2)],
        [t("cr_xeq"), (Xeq*100).toFixed(1)+" % (Kc ≈ "+fmt(EQUILIBRIUM_KC_REF[reactionType] ?? 1,3)+")"],
        [t("cr_conv"), (X*100).toFixed(1)+" % "+t("cr_after")+" "+fmtClock(curT)],
        [t("cr_t95"), fmtClock(Math.log(20)/k)],
        [t("cr_theo"), main ? fmt(theo,4)+" g "+main.formula : "—"],
        [t("cr_isolated"), main ? `<strong>${fmtUnc(ms.mean, 2*uc, "g")}</strong> (k = 2)` : "—"],
        [t("cr_yield"), main ? fmtUnc(ys.mean, ys.sd||0.1, "%") : "—"],
        [t("cr_inputs"), t("cr_purity")+" "+(purity*100).toFixed(1)+" % · "+t("cr_loss")+" "+(loss*100).toFixed(0)+" %"]
      ],
      replicates: {headers:["#", "T (°C)", t("cr_col_conv"), t("cr_col_mass"), t("cr_col_yield")],
        rows: reps.map((r,i)=>[i+1, r.Ti.toFixed(1), (r.X*100).toFixed(1), r.mass.toFixed(4), r.yieldPct.toFixed(1)])},
      budget: [
        [t("cr_u_bal"), fmt(uBal*1000,2)+" mg", ""],
        [t("cr_u_pur"), fmt(uPur*1000,2)+" mg", ""],
        [t("ab_u_rep"), fmt(uRep*1000,2)+" mg", ""],
        [t("ab_u_comb"), fmt(uc*1000,2)+" mg", "U (k=2) = "+fmt(2*uc*1000,2)+" mg"]
      ],
      warnings: warn,
      notes: [t("cr_note_model"), t("lab_sim_disclaimer")]
    });
    return {k, X, Xeq, isolated: ms.mean, U: 2*uc, yieldPct: ys.mean, yieldSD: ys.sd, reps};
  }

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
    const realisticC = LAB.realistic;
    const EaKJ = EA_KJ[reactionType] ?? 60;
    const hetero = realisticC ? heteroFactor(reactants) : 1;
    const k = realisticC ? kRef*Math.exp(-EaKJ*1000/8.314*(1/(T+273.15)-1/298.15))*hetero : kRef * Math.pow(2, (T-25)/10);
    const KcR = EQUILIBRIUM_KC_REF[reactionType] ?? 1;
    const Xeq = realisticC ? Math.sqrt(KcR)/(1+Math.sqrt(KcR)) : 1;
    const remaining = tt => realisticC ? 1 - Xeq*(1-Math.exp(-k*tt)) : Math.exp(-k*tt);
    renderLabReport(document.getElementById("c-report"), null);
    const N=80, fullPts=[];
    for(let i=0;i<=N;i++){
      const tt = simTime*i/N;
      fullPts.push({x:tt, y:remaining(tt)});
    }

    const solveBtn = document.getElementById("c-solve");
    solveBtn.disabled = true;
    kineticsSummary.innerHTML = t("c_kinetics_running");
    const reactantColor = "#63C7D6", productColor = "#8B6BD9";
    let lastBubble = 0;
    customClock.run({
      total: simTime,
      onFrame:(curT)=>{
        const shownPts = fullPts.filter(p=>p.x<=curT);
        shownPts.push({x:curT, y:remaining(curT)});
        if(shownPts.length<2) shownPts.unshift({x:0,y:1});
        const yNow = remaining(curT);
        drawLineChart(kineticsChart, {points:shownPts, xDomain:[0,simTime||1], yDomain:[0,1.02], xLabel:t("axis_time_s"), yLabel:t("c_axis_fraction"), color:"#3E8E52", markers:[{x:curT, y:yNow, color:AMBER, label:fmt(curT,0)+"s"}]});
        if(vesselLiquid) vesselLiquid.setAttribute("fill", lerpColor(reactantColor, productColor, 1-yNow));
        const now = performance.now();
        if(now-lastBubble > 250 && yNow>0.02){ lastBubble = now; spawnVesselBubble(); }
        kineticsSummary.innerHTML = t("c_kinetics_running")+` ${((1-yNow)*100).toFixed(1)}%`;
      },
      onDone:(curT, completed)=>{
        solveBtn.disabled = false;
        const pct = (1-remaining(curT))*100;
        lastResult.lab = customReport({rows, reactionType, kRef, EaKJ, hetero, T, Xeq, curT, completed, reactants});
        kineticsSummary.innerHTML = t("c_kinetics_rate")+`: k ≈ ${fmt(k,4)} s⁻¹ (${T}°C)<br>`+t("c_kinetics_complete")+`: ${pct.toFixed(1)}% `+t("c_kinetics_within")+` ${fmtClock(curT)}`+(completed?"":` — ${t("sim_state_stopped")}`);
      }
    });

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
    productRows.forEach(r=> reactantsList.appendChild(rowForAmount(r.formula, r.yieldMass)));
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
    let outRows = labConditionsCSV(LAB.realistic?"Arrhenius kinetics, equilibrium-limited conversion, purity & work-up losses":"textbook 100 % conversion").concat(rows);
    if(lastResult.lab){ const L=lastResult.lab; outRows = outRows.concat([[],["Realistic results"],["rate_constant_s-1",L.k],["equilibrium_conversion",L.Xeq],["conversion_at_t",L.X],["isolated_mass_g",L.isolated],["expanded_U_k2_g",L.U],["yield_pct",L.yieldPct],["yield_sd_pct",L.yieldSD],[],["replicate","T_C","conversion","isolated_g","yield_pct"]]).concat(L.reps.map((r,i)=>[i+1,r.Ti.toFixed(2),r.X.toFixed(4),r.mass.toFixed(5),r.yieldPct.toFixed(2)])); }
    downloadCSV("reaction_stoichiometry.csv", outRows);
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

/* ============ REFERENCE LIBRARY (lexical RAG) ============
   This is keyword-based retrieval (TF-IDF/BM25-style term scoring), not
   neural/semantic embeddings -- deliberately, since it needs no model
   download and can't fail the way our on-device model did earlier. It's a
   real, standard information-retrieval technique, just not "semantic search". */
const RAG_STORAGE_KEY = "reactionBenchRAGLibrary";
let ragDocuments = []; // [{id, title, chunks: [string,...]}]

function ragLoad(){
  try{
    const saved = localStorage.getItem(RAG_STORAGE_KEY);
    if(saved) ragDocuments = JSON.parse(saved);
  }catch(e){ ragDocuments = []; }
}
function ragSave(){
  try{
    localStorage.setItem(RAG_STORAGE_KEY, JSON.stringify(ragDocuments));
    return true;
  }catch(e){
    return false; // likely quota exceeded -- caller should warn the user
  }
}

// Splits text into ~targetLen-character chunks, breaking on paragraph/sentence
// boundaries where possible, with a little overlap so context isn't cut mid-idea.
function ragChunkText(text, targetLen, overlap){
  targetLen = targetLen || 700; overlap = overlap || 100;
  const clean = text.replace(/\r\n/g, "\n").replace(/[ \t]+/g, " ").trim();
  const paragraphs = clean.split(/\n\s*\n/).map(p=>p.trim()).filter(Boolean);
  const chunks = [];
  let current = "";
  paragraphs.forEach(p=>{
    if((current + "\n\n" + p).length > targetLen && current){
      chunks.push(current.trim());
      // start next chunk with a small overlap tail from the previous one
      const tail = current.slice(Math.max(0, current.length-overlap));
      current = tail + "\n\n" + p;
    } else {
      current = current ? current + "\n\n" + p : p;
    }
    // a single paragraph longer than targetLen on its own: hard-split it
    while(current.length > targetLen*1.6){
      chunks.push(current.slice(0, targetLen).trim());
      current = current.slice(targetLen-overlap);
    }
  });
  if(current.trim()) chunks.push(current.trim());
  return chunks.filter(c=>c.length>20);
}

const RAG_STOPWORDS = new Set(["the","a","an","of","to","in","and","or","is","are","was","were","be","been","for","on","with","as","at","by","this","that","it","its","from","into","which","can","will","would","should","may","not","but","we","you","your","their","these","those","also","such","when","where","how","what"]);
function ragTokenize(text){
  return (text.toLowerCase().match(/[a-z0-9][a-z0-9\-]*/g) || []).filter(w=>w.length>1 && !RAG_STOPWORDS.has(w));
}

// BM25-style scoring across every chunk from every loaded document, returning
// the top-k passages most relevant to `query`. No index is precomputed/stored --
// scoring happens fresh at query time, which is plenty fast at this scale
// (a handful of documents, at most a few thousand chunks) and avoids ever
// having a stale index to maintain.
function ragRetrieve(query, k){
  k = k || 4;
  if(!ragDocuments.length) return [];
  const qTerms = [...new Set(ragTokenize(query))];
  if(!qTerms.length) return [];

  const allChunks = [];
  ragDocuments.forEach(doc=> doc.chunks.forEach(text=> allChunks.push({docTitle: doc.title, text})));
  if(!allChunks.length) return [];

  const N = allChunks.length;
  const df = {}; // document(chunk) frequency per term
  const chunkTerms = allChunks.map(c=>{
    const terms = ragTokenize(c.text);
    const tf = {};
    terms.forEach(t=> tf[t]=(tf[t]||0)+1);
    Object.keys(tf).forEach(t=> df[t]=(df[t]||0)+1);
    return {tf, len: terms.length};
  });
  const avgLen = chunkTerms.reduce((a,c)=>a+c.len,0)/N || 1;
  const k1=1.5, b=0.75;

  const scores = allChunks.map((c,i)=>{
    let score = 0;
    const {tf, len} = chunkTerms[i];
    qTerms.forEach(term=>{
      const f = tf[term]||0;
      if(!f) return;
      const idf = Math.log(1 + (N - (df[term]||0) + 0.5)/((df[term]||0) + 0.5));
      score += idf * (f*(k1+1)) / (f + k1*(1-b+b*(len/avgLen)));
    });
    return {score, chunk:c};
  });
  return scores.filter(s=>s.score>0).sort((a,b)=>b.score-a.score).slice(0,k).map(s=>s.chunk);
}

// Builds a "reference excerpts" block for a query and returns it, or null if
// no library is loaded / nothing relevant was found -- callers should just
// skip augmentation in that case rather than send an empty block.
function ragBuildContext(query){
  const hits = ragRetrieve(query, 4);
  if(!hits.length) return null;
  const bySource = {};
  hits.forEach(h=>{ (bySource[h.docTitle] = bySource[h.docTitle]||[]).push(h.text); });
  let block = "Reference excerpts from the user's uploaded sources (use these if relevant to ground your answer; if they don't address the question, answer from general knowledge and say so):\n\n";
  Object.entries(bySource).forEach(([title, texts])=>{
    block += `--- From "${title}" ---\n`;
    texts.forEach(t=> block += t + "\n\n");
  });
  return {block, sources: Object.keys(bySource)};
}

window.__ragBuildContext = ragBuildContext;
window.__ragHasLibrary = ()=> ragDocuments.length>0;

/* ---- Reference Library UI ---- */
ragLoad();
const ragTitleInput = document.getElementById("rag-doc-title");
const ragFileInput = document.getElementById("rag-file-input");
const ragPasteToggle = document.getElementById("rag-paste-toggle");
const ragPasteArea = document.getElementById("rag-paste-area");
const ragPasteText = document.getElementById("rag-paste-text");
const ragPasteAdd = document.getElementById("rag-paste-add");
const ragStatusEl = document.getElementById("rag-status");
const ragDocListEl = document.getElementById("rag-doc-list");

let pdfjsLoadPromise = null;
function loadPdfJs(){
  if(window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
  if(pdfjsLoadPromise) return pdfjsLoadPromise;
  pdfjsLoadPromise = new Promise((resolve, reject)=>{
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.min.js";
    script.onload = ()=>{
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js";
      resolve(window.pdfjsLib);
    };
    script.onerror = ()=> reject(new Error("Could not load the PDF reader library (check your internet connection)."));
    document.head.appendChild(script);
  });
  return pdfjsLoadPromise;
}

async function extractPdfText(arrayBuffer){
  const pdfjsLib = await loadPdfJs();
  const pdf = await pdfjsLib.getDocument({data: arrayBuffer}).promise;
  let text = "";
  for(let i=1; i<=pdf.numPages; i++){
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    text += content.items.map(it=>it.str).join(" ") + "\n\n";
  }
  return text;
}

function ragShowStatus(msg, isError){
  ragStatusEl.textContent = msg;
  ragStatusEl.style.color = isError ? "var(--red)" : "var(--success-text)";
}

function renderRagDocList(){
  if(!ragDocuments.length){
    ragDocListEl.innerHTML = `<div style="font-size:11px;color:var(--ink-soft);">${t("rag_empty")}</div>`;
    return;
  }
  ragDocListEl.innerHTML = ragDocuments.map((doc,i)=>`
    <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 8px;background:var(--paper-raised);border:1px solid var(--paper-edge);border-radius:6px;margin-bottom:4px;font-size:11.5px;">
      <span>📖 ${doc.title} <span style="color:var(--ink-soft);">(${doc.chunks.length} passages)</span></span>
      <button data-idx="${i}" class="rag-remove-btn" style="background:none;border:0;color:var(--red);cursor:pointer;font-size:11px;">✕</button>
    </div>
  `).join("");
  ragDocListEl.querySelectorAll(".rag-remove-btn").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      ragDocuments.splice(+btn.dataset.idx, 1);
      ragSave();
      renderRagDocList();
    });
  });
}

function addRagDocument(title, rawText){
  title = title.trim() || "Untitled source";
  const chunks = ragChunkText(rawText);
  if(!chunks.length){
    ragShowStatus(t("rag_no_text"), true);
    return;
  }
  ragDocuments.push({id: Date.now()+"-"+Math.random().toString(36).slice(2), title, chunks});
  const saved = ragSave();
  if(!saved){
    ragShowStatus(t("rag_storage_full"), true);
    ragDocuments.pop(); // don't keep an unsaved doc silently diverging from storage
    return;
  }
  ragShowStatus(t("rag_added").replace("{title}", title).replace("{n}", chunks.length), false);
  renderRagDocList();
}

if(ragFileInput){
  ragFileInput.addEventListener("change", async ()=>{
    const file = ragFileInput.files[0];
    if(!file) return;
    const title = ragTitleInput.value.trim() || file.name;
    ragShowStatus(t("rag_processing"), false);
    try{
      if(file.name.toLowerCase().endsWith(".pdf")){
        const buf = await file.arrayBuffer();
        const text = await extractPdfText(buf);
        addRagDocument(title, text);
      } else {
        const text = await file.text();
        addRagDocument(title, text);
      }
    }catch(err){
      ragShowStatus(t("rag_processing_failed") + " (" + (err.message||err) + ")", true);
    }
    ragFileInput.value = "";
    ragTitleInput.value = "";
  });
}
if(ragPasteToggle && ragPasteArea){
  ragPasteToggle.addEventListener("click", ()=>{
    ragPasteArea.style.display = ragPasteArea.style.display==="none" ? "block" : "none";
  });
}
if(ragPasteAdd){
  ragPasteAdd.addEventListener("click", ()=>{
    const text = ragPasteText.value.trim();
    if(!text){ ragShowStatus(t("rag_no_text"), true); return; }
    const title = ragTitleInput.value.trim() || t("rag_pasted_default_title");
    addRagDocument(title, text);
    ragPasteText.value = "";
    ragTitleInput.value = "";
    ragPasteArea.style.display = "none";
  });
}
renderRagDocList();

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


/* ---- LaTeX -> readable plain text / Unicode (AI models often emit raw LaTeX) ---- */
const LATEX_SYMBOLS = {
  rightleftharpoons:"⇌", leftrightharpoons:"⇌", rightleftarrows:"⇄", leftrightarrow:"↔", Leftrightarrow:"⇔", iff:"⇔",
  longrightarrow:"→", rightarrow:"→", to:"→", Rightarrow:"⇒", implies:"⇒", longleftarrow:"←", leftarrow:"←", Leftarrow:"⇐",
  uparrow:"↑", downarrow:"↓", times:"×", cdot:"·", cdots:"⋯", ldots:"…", dots:"…", div:"÷", pm:"±", mp:"∓",
  leq:"≤", le:"≤", geq:"≥", ge:"≥", neq:"≠", ne:"≠", approx:"≈", sim:"∼", equiv:"≡", propto:"∝", infty:"∞",
  degree:"°", circ:"°", prime:"′", partial:"∂", nabla:"∇", sum:"Σ", prod:"Π", int:"∫", ll:"≪", gg:"≫",
  alpha:"α", beta:"β", gamma:"γ", delta:"δ", epsilon:"ε", varepsilon:"ε", zeta:"ζ", eta:"η", theta:"θ", iota:"ι", kappa:"κ",
  lambda:"λ", mu:"μ", nu:"ν", xi:"ξ", pi:"π", rho:"ρ", sigma:"σ", tau:"τ", upsilon:"υ", phi:"φ", varphi:"φ", chi:"χ", psi:"ψ", omega:"ω",
  Gamma:"Γ", Delta:"Δ", Theta:"Θ", Lambda:"Λ", Xi:"Ξ", Pi:"Π", Sigma:"Σ", Phi:"Φ", Psi:"Ψ", Omega:"Ω",
  ominus:"⊖", oplus:"⊕", ddagger:"‡", dagger:"†", ce:"", checkmark:"✓"
};
const SUP_MAP = {"0":"⁰","1":"¹","2":"²","3":"³","4":"⁴","5":"⁵","6":"⁶","7":"⁷","8":"⁸","9":"⁹","+":"⁺","-":"⁻","−":"⁻","=":"⁼","(":"⁽",")":"⁾","n":"ⁿ","i":"ⁱ"};
const SUB_MAP = {"0":"₀","1":"₁","2":"₂","3":"₃","4":"₄","5":"₅","6":"₆","7":"₇","8":"₈","9":"₉","+":"₊","-":"₋","−":"₋","=":"₌","(":"₍",")":"₎","a":"ₐ","e":"ₑ","o":"ₒ","x":"ₓ","h":"ₕ","k":"ₖ","l":"ₗ","m":"ₘ","n":"ₙ","p":"ₚ","s":"ₛ","t":"ₜ","i":"ᵢ","j":"ⱼ","r":"ᵣ","u":"ᵤ","v":"ᵥ"};
function toScript(str, map, fallbackMark){
  str = String(str).replace(/\s+/g,"");
  if(!str) return "";
  let out = "";
  for(const ch of str){
    if(map[ch]) out += map[ch];
    else if(str==="°"||str==="∘") return "°";
    else if(fallbackMark==="_" && str.length<=3) return str;
    else return fallbackMark + (str.length>1 ? "("+str+")" : str);
  }
  return out;
}
function cleanLatex(input, inMath){
  let s = String(input);
  // escaped delimiters / spacing commands
  s = s.replace(/\\[,;:!> ]/g, " ").replace(/\\(quad|qquad)\b/g, " ");
  s = s.replace(/\\(left|right|big|Big|bigg|Bigg)\b\s*/g, "").replace(/\\(displaystyle|textstyle|limits|nolimits)\b/g, "");
  s = s.replace(/\\\\/g, "\n");
  // \ce{H2O} and text-like wrappers -> inner text (repeat for nesting)
  for(let i=0;i<6;i++){
    const before = s;
    s = s.replace(/\\(?:text|textbf|textit|mathrm|mathbf|mathit|mathsf|mathtt|operatorname|ce|boldsymbol|bm|mbox|textrm|rm)\s*\{([^{}]*)\}/g, "$1");
    s = s.replace(/\\(?:overline|bar|vec|hat|tilde)\s*\{([^{}]*)\}/g, "$1");
    s = s.replace(/\\sqrt\s*\{([^{}]*)\}/g, (m,a)=>"√("+a+")");
    s = s.replace(/\\[dt]?frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, (m,a,b)=>{
      const wrap = x => /^[\w.\[\]]+$/.test(x.trim()) ? x.trim() : "("+x.trim()+")";
      return wrap(a)+"/"+wrap(b);
    });
    if(s===before) break;
  }
  s = s.replace(/\\(ln|log|exp|sin|cos|tan|lim|max|min)\b\s*/g, " $1 ");
  // named symbols
  s = s.replace(/\\([A-Za-z]+)/g, (m,name)=> Object.prototype.hasOwnProperty.call(LATEX_SYMBOLS,name) ? LATEX_SYMBOLS[name] : m);
  // super/subscripts with braces (safe anywhere)
  s = s.replace(/\^\s*\{([^{}]*)\}/g, (m,a)=>toScript(a,SUP_MAP,"^"));
  s = s.replace(/(?<=[A-Za-z0-9\])}])_\s*\{([^{}]*)\}/g, (m,a)=>toScript(a,SUB_MAP,"_"));
  if(inMath){
    s = s.replace(/\^([0-9+\-−nA-Za-z])/g, (m,a)=>toScript(a,SUP_MAP,"^"));
    s = s.replace(/_([0-9+\-−A-Za-z])/g, (m,a)=>toScript(a,SUB_MAP,"_"));
    s = s.replace(/[{}]/g, "");
    s = s.replace(/\\([A-Za-z]+)/g, "$1");   // any leftover unknown command: keep the word
  }
  // leftover \[ \] \( \) delimiters and stray escapes
  s = s.replace(/\\([\[\]()])/g, "");
  s = s.replace(/\\([%&#_{}$])/g, "$1");
  return s.replace(/[ \t]{2,}/g, " ").trim();
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
  const mathBlock = (m, formula) => {
    blocks.push(`<div class="md-formula">${cleanLatex(formula, true)}</div>`);
    return `\u0000BLOCK${blocks.length-1}\u0000`;
  };
  text = text.replace(/\$\$([\s\S]*?)\$\$/g, mathBlock);
  text = text.replace(/\\\[([\s\S]*?)\\\]/g, mathBlock);
  text = text.replace(/\\\(([\s\S]*?)\\\)/g, (m, formula) => `<span class="md-formula-inline">${cleanLatex(formula, true)}</span>`);
  text = text.replace(/\$([^$\n]+)\$/g, (m, formula) => /\\|[\^_{}]/.test(formula) ? `<span class="md-formula-inline">${cleanLatex(formula, true)}</span>` : m);
  // stray LaTeX commands / delimiters outside math
  text = cleanLatex(text, false);

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


const AI_SUMMARY_SYSTEM_PROMPT = "You are a knowledgeable chemistry lab assistant helping a student interpret results they just generated in a simulator. You'll be given the exact substances, conditions, and computed numbers from their run. Explain in natural, clear language what happened chemically, why, and what the numbers mean -- referencing their actual substances and values, not generic examples. Use markdown structure (a short heading, bold terms, a small table where it genuinely helps) but keep it to a few focused sections, not an exhaustive essay. If the computed numbers look physically implausible for the real substances involved, say so plainly."+" Formatting rules: never use LaTeX or math markup (no backslash commands, \\[ \\], \\( \\) or $...$). Write equations in plain text/Unicode, e.g. H₂O, Ca²⁺, → and ⇌.";

// Shared by Acid-Base, Thermochemistry, and Custom Reaction: sends a natural-language
// description of what the user actually just ran (their real compounds/values/results)
// to the same cloud AI used in the chat assistant, and renders the reply as markdown
// into `container`. `button` is disabled while the request is in flight.
async function generateAISummary(container, button, contextPrompt){
  if(!window.__callCloudAI){
    container.style.display = "block";
    container.innerHTML = `<div class="md-p" style="color:var(--red);">No API key configured yet. Add one in the AI Assistant tab's Cloud AI Configuration to use this.</div>`;
    return;
  }
  container.style.display = "block";
  container.innerHTML = `<div class="md-p" style="color:var(--ink-soft);"><span style="display:inline-block;width:11px;height:11px;border:2px solid var(--paper-edge);border-top-color:var(--ink);border-radius:50%;animation:spin 0.8s linear infinite;vertical-align:middle;margin-right:6px;"></span>Asking the AI to explain this result…</div>`;
  if(button) button.disabled = true;
  try{
    const rag = ragBuildContext(contextPrompt);
    const messages = [
      {role:"system", content: AI_SUMMARY_SYSTEM_PROMPT + (rag ? "\n\n" + rag.block : "")},
      {role:"user", content: contextPrompt},
    ];
    const text = await window.__callCloudAI(messages);
    if(typeof text !== "string" || !text.trim()) throw new Error("EMPTY_RESPONSE");
    let html = renderMarkdown(text);
    if(rag) html += `<div style="margin-top:10px;padding-top:8px;border-top:1px dashed var(--paper-edge);font-size:10.5px;color:var(--ink-soft);">📚 Grounded using excerpts from: ${rag.sources.map(s=>`<em>${s}</em>`).join(", ")}</div>`;
    container.innerHTML = html;
  }catch(err){
    const reason = window.__friendlyAIError ? window.__friendlyAIError(err) : (err.message||String(err));
    container.innerHTML = `<div class="md-p" style="color:var(--red);">⚠ Couldn't generate an AI explanation (${reason}).</div>`;
  }
  if(button) button.disabled = false;
}
window.__generateAISummary = generateAISummary;

function appendMsg(role, text){
  const div=document.createElement("div");
  div.className="chat-msg "+role;
  if(role==="bot"){
    div.innerHTML = renderMarkdown(text) + `<div class="msg-actions"><button type="button" class="msg-copy" title="${t("ai_copy")}">⧉ ${t("ai_copy")}</button></div>`;
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

const AI_SYSTEM_PROMPT = "You are a knowledgeable, patient chemistry lab assistant. Give thorough, well-structured explanations: define key terms, explain the underlying concept, walk through relevant reasoning or a worked example, and note common misconceptions."+" Formatting rules: never use LaTeX or math markup (no \\[ \\], \\( \\), $...$, \\frac, \\rightarrow, \\text, etc.). Write chemical equations and formulas in plain text/Unicode instead, e.g. aA + bB ⇌ cC + dD, K_c written as Kc = [C]^c[D]^d / ([A]^a[B]^b) or with subscripts/superscripts like H₂O, Ca²⁺, and use → or ⇌ for arrows. Use markdown only for headings, bold, lists and tables.";

function friendlyAIError(err){
  const msg = (err && err.message) || String(err);
  if(msg === "NO_KEY") return "No API key is configured yet.";
  if(msg === "EMPTY_RESPONSE") return "The AI returned an empty response.";
  if(/\b401\b/.test(msg) || /missing authentication/i.test(msg)) return "Error 401: missing or invalid authentication (API key).";
  if(/\b403\b/.test(msg)) return "Error 403: the API key was rejected by the provider.";
  if(/\b404\b/.test(msg) && /no endpoints found/i.test(msg)) return "Error 404: no endpoint found for the selected model.";
  if(/\b429\b/.test(msg)) return "Error 429: rate limit reached for this provider.";
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
    const rag = ragBuildContext(q);
    const systemContent = AI_SYSTEM_PROMPT + (rag ? "\n\n" + rag.block : "");
    const answer = await callCloudAI([{ role: "system", content: systemContent }, { role: "user", content: q }]);
    log.removeChild(thinkingDiv);
    appendMsg("bot", answer || "I couldn't generate a response.");
    if(rag){
      const lastMsg = log.querySelector(".chat-msg.bot:last-child");
      if(lastMsg) lastMsg.querySelector(".msg-actions")?.insertAdjacentHTML("beforebegin", `<div style="margin-top:10px;padding-top:8px;border-top:1px dashed var(--paper-edge);font-size:10.5px;color:var(--ink-soft);">📚 Grounded using excerpts from: ${rag.sources.map(s=>`<em>${s}</em>`).join(", ")}</div>`);
    }
  }catch(err){
    log.removeChild(thinkingDiv);
    const reason = friendlyAIError(err);
    const faq = findFAQAnswer(q);
    if(faq) appendMsg("bot", `⚠️ Cloud AI unavailable (${reason}). Using offline help:\n\n${faq}`);
    else appendMsg("bot", `⚠️ Cloud AI unavailable (${reason}).\n\nAdd an API key in "Cloud AI Configuration" above, or try a suggested question below for instant offline help.`);
  }
}

sendBtn.addEventListener("click", handleSend);
// copy an assistant answer as plain readable text (event delegation survives later innerHTML edits)
log.addEventListener("click", async (e)=>{
  const btn = e.target.closest(".msg-copy"); if(!btn) return;
  const msg = btn.closest(".chat-msg"); if(!msg) return;
  const actions = msg.querySelectorAll(".msg-actions");
  actions.forEach(a=>a.style.display="none");
  const text = msg.innerText.trim();
  actions.forEach(a=>a.style.display="");
  let ok = false;
  try{ await navigator.clipboard.writeText(text); ok = true; }
  catch(err){
    const ta=document.createElement("textarea"); ta.value=text; ta.style.position="fixed"; ta.style.opacity="0";
    document.body.appendChild(ta); ta.select();
    try{ ok = document.execCommand("copy"); }catch(e2){}
    ta.remove();
  }
  btn.textContent = ok ? "✓ "+t("ai_copied") : "⚠";
  setTimeout(()=>{ btn.textContent = "⧉ "+t("ai_copy"); }, 1600);
});
input.addEventListener("keydown", (e)=>{ if(e.key==="Enter") handleSend(); });
window.__callCloudAI = callCloudAI;
window.__friendlyAIError = friendlyAIError;
window.__aiSystemPrompt = AI_SYSTEM_PROMPT;
window.__renderMarkdown = renderMarkdown;

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



/* ============ Conjugation & Bio-conjugation panel ============ */
(function(){
  const panel = document.getElementById("panel-conjugation");
  if(!panel) return;
  const $ = id => document.getElementById(id);
  const R_GAS = 8.314;
  const CJ_CUSTOM_KEY = "reactionBenchConjugationBank";

  /* ---- coupling chemistries ----
     a = handle on the coupling partner / label (added in excess), b = handle on the target / substrate.
     k25: second-order rate constant at 25 °C for the reactive form (M⁻¹ s⁻¹); Ea kJ/mol.
     ph: nuc (deprotonated nucleophile on b), bell (optimum), flat.
     hydro: competing hydrolysis of the partner (half-life at pH 7, 25 °C, and log-slope per pH unit).
     keq: association constant (M⁻¹) if reversible; dHdS for temperature-dependent equilibria.
     leave: formula lost when one linkage forms; leaveName/leaveMW for display. */
  const TYPES = [
    {id:"amide", modes:["chem"], name:"Amide coupling (EDC/NHS activation)", a:"COOH", b:"NH2", link:"amide bond –CO–NH–", leave:"H2O", leaveName:"H₂O (taken up by EDC → urea)", cat:{label:"EDC / NHS coupling reagents present", off:1e-5}, k25:0.6, Ea:45, ph:{kind:"bell", opt:6.0, w:1.4}, phRange:[4.5,7.5], phDefault:6.0,
      info:"Carboxyl is activated by EDC (O-acylisourea → NHS ester) and then attacked by the amine. Works best at mildly acidic to neutral pH."},
    {id:"nhs", modes:["chem"], name:"NHS ester + amine → amide", a:"NHS", b:"NH2", link:"amide bond –CO–NH–", leave:"C4H5NO3", leaveName:"N-hydroxysuccinimide (NHS)", k25:150, Ea:40, ph:{kind:"nuc"}, hydro:{t12h:4.5, slope:0.9}, phRange:[7.2,8.5], phDefault:8.3,
      info:"Only the unprotonated amine attacks the active ester, while water hydrolyses the ester faster as pH rises — the classic pH trade-off."},
    {id:"steglich", modes:["chem"], name:"Steglich esterification (DCC/DMAP)", a:"COOH", b:"OH", link:"ester bond –CO–O–", leave:"H2O", leaveName:"H₂O (as dicyclohexylurea)", cat:{label:"DCC + DMAP catalyst present", off:1e-4}, k25:0.05, Ea:50, ph:{kind:"flat"}, phRange:[2,12], phDefault:7, organic:true,
      info:"Carbodiimide activation with DMAP acyl-transfer catalysis couples acids and alcohols in dry organic solvent (pH is not meaningful here)."},
    {id:"cuaac", modes:["chem"], name:"CuAAC click (azide + terminal alkyne)", a:"alkyne", b:"N3", link:"1,4-disubstituted 1,2,3-triazole", leave:"", cat:{label:"Cu(I) catalyst (CuSO₄ + sodium ascorbate)", off:1e-7}, k25:20, Ea:55, ph:{kind:"flat"}, phRange:[4,12], phDefault:7,
      info:"Copper(I) accelerates the Huisgen cycloaddition by ~10⁷ and gives only the 1,4-regioisomer."},
    {id:"spaac", modes:["chem"], name:"SPAAC copper-free click (azide + DBCO)", a:"DBCO", b:"N3", link:"triazole (fused to cyclooctene)", leave:"", k25:0.3, Ea:40, ph:{kind:"flat"}, phRange:[4,10], phDefault:7.4,
      info:"Ring strain of the cyclooctyne drives the cycloaddition without any catalyst."},
    {id:"thiolmal", modes:["chem"], name:"Thiol–maleimide Michael addition", a:"maleimide", b:"SH", link:"thiosuccinimide thioether", leave:"", k25:1.5e4, Ea:35, ph:{kind:"nuc"}, hydro:{t12h:30, slope:1.0}, phRange:[6.5,7.5], phDefault:7.0,
      info:"The thiolate adds across the maleimide C=C; very fast and thiol-selective at pH 6.5–7.5."},
    {id:"thiolene", modes:["chem"], name:"Thia-Michael addition (thiol + acrylate)", a:"acrylate", b:"SH", link:"β-thioether ester", leave:"", k25:50, Ea:40, ph:{kind:"nuc"}, phRange:[7,9], phDefault:8.0,
      info:"Base-catalysed conjugate addition of a thiolate to an electron-poor alkene."},
    {id:"redam", modes:["chem"], name:"Reductive amination (aldehyde + amine)", a:"CHO", b:"NH2", link:"secondary amine –CH₂–NH–", leave:"O", leaveName:"H₂O (H₂ supplied by NaBH₃CN)", cat:{label:"NaBH₃CN reducing agent present (otherwise reversible imine)", off:1}, k25:1.0, Ea:40, ph:{kind:"bell", opt:6.0, w:1.5}, keqOff:10, phRange:[5,7], phDefault:6.0,
      info:"Aldehyde and amine form an imine (Schiff base) reversibly; NaBH₃CN reduces it to a stable secondary amine."},
    {id:"hydrazone", modes:["chem"], name:"Hydrazone ligation (aldehyde + hydrazine)", a:"hydrazide", b:"CHO", link:"hydrazone C=N–NH–", leave:"H2O", leaveName:"H₂O", cat:{label:"Aniline nucleophilic catalyst (10–100 mM)", off:0.05}, k25:0.2, Ea:40, ph:{kind:"bell", opt:4.7, w:1.3}, keq:1e5, phRange:[4,6], phDefault:4.7,
      info:"Condensation to a hydrazone; acid-catalysed, reversible, accelerated by aniline."},
    {id:"oxime", modes:["chem"], name:"Oxime ligation (aldehyde + aminooxy)", a:"aminooxy", b:"CHO", link:"oxime C=N–O–", leave:"H2O", leaveName:"H₂O", cat:{label:"Aniline nucleophilic catalyst (10–100 mM)", off:0.05}, k25:0.5, Ea:40, ph:{kind:"bell", opt:4.5, w:1.3}, keq:1e8, phRange:[4,6], phDefault:4.5,
      info:"Like hydrazone formation but the oxime is far more stable to hydrolysis."},
    {id:"da", modes:["chem"], name:"Diels–Alder cycloaddition (diene + dienophile)", a:"dienophile", b:"diene", link:"cyclohexene ring (cycloadduct)", leave:"", k25:2e-3, Ea:60, ph:{kind:"flat"}, dHdS:[-90, -0.22], phRange:[2,12], phDefault:7, organic:true,
      info:"[4+2] cycloaddition between a conjugated diene and a dienophile; reversible (retro-Diels–Alder) at high temperature."},
    {id:"pds", modes:["chem"], name:"Thiol–disulfide exchange (pyridyl disulfide)", a:"PDS", b:"SH", link:"disulfide –S–S–", leave:"C5H5NS", leaveName:"pyridine-2-thione (λmax 343 nm)", k25:3e3, Ea:40, ph:{kind:"nuc"}, phRange:[7,8], phDefault:7.5,
      info:"A thiolate displaces pyridine-2-thione, forming a cleavable disulfide; release can be followed at 343 nm."},

    // ---- bio-conjugation ----
    {id:"bnhs", modes:["bio"], name:"Amine labelling: NHS ester + lysine", a:"NHS", b:"NH2", link:"amide bond to lysine ε-NH₂ / N-terminus", leave:"C4H5NO3", leaveName:"N-hydroxysuccinimide (NHS)", k25:150, Ea:40, ph:{kind:"nuc"}, hydro:{t12h:4.5, slope:0.9}, phRange:[7.2,8.5], phDefault:8.3, buffer:"PBS, bicarbonate or borate — no Tris/glycine (they contain amines)",
      info:"Random labelling of surface lysines. Higher pH deprotonates more lysines but also speeds up NHS-ester hydrolysis."},
    {id:"bmal", modes:["bio"], name:"Thiol labelling: maleimide + cysteine", a:"maleimide", b:"SH", link:"thiosuccinimide thioether to cysteine", leave:"", k25:1.5e4, Ea:35, ph:{kind:"nuc"}, hydro:{t12h:30, slope:1.0}, phRange:[6.5,7.5], phDefault:7.0, buffer:"PBS/HEPES with EDTA, degassed; reduce disulfides with TCEP first",
      info:"Site-selective labelling of free cysteines. Above pH 7.5 maleimides start reacting with lysines and hydrolyse."},
    {id:"bedc", modes:["bio"], name:"Carboxyl-to-amine: EDC/sulfo-NHS", a:"NH2", b:"COOH", link:"amide bond to Asp/Glu carboxyl", leave:"H2O", leaveName:"H₂O (as EDC-urea)", cat:{label:"EDC / sulfo-NHS present", off:1e-5}, k25:0.08, Ea:45, ph:{kind:"bell", opt:6.0, w:1.2}, phRange:[4.7,7.2], phDefault:6.0, buffer:"MES pH 4.7–6 for activation, then PBS pH 7.2",
      info:"Zero-length crosslinking of protein carboxylates to an amine-bearing ligand. Excess EDC can also crosslink protein to protein."},
    {id:"bspaac", modes:["bio"], name:"Copper-free click: DBCO + azide", a:"DBCO", b:"N3", link:"triazole (bio-orthogonal)", leave:"", k25:0.3, Ea:40, ph:{kind:"flat"}, phRange:[6,8.5], phDefault:7.4, buffer:"any physiological buffer; no azide (NaN₃) preservative",
      info:"Bio-orthogonal and catalyst-free, so suitable even in live cells."},
    {id:"bcuaac", modes:["bio"], name:"CuAAC click on biomolecules (Cu/THPTA)", a:"alkyne", b:"N3", link:"1,4-triazole", leave:"", cat:{label:"Cu(I) + THPTA ligand + ascorbate", off:1e-7}, k25:20, Ea:55, ph:{kind:"flat"}, phRange:[6.5,8], phDefault:7.4, buffer:"phosphate/HEPES; add aminoguanidine to scavenge ascorbate by-products",
      info:"Fast and selective, but copper can generate reactive oxygen species — a chelating ligand protects the protein."},
    {id:"bhz", modes:["bio"], name:"Glycan labelling: hydrazide + aldehyde", a:"hydrazide", b:"CHO", link:"hydrazone to oxidized glycan", leave:"H2O", leaveName:"H₂O", cat:{label:"Aniline catalyst", off:0.05}, k25:0.2, Ea:40, ph:{kind:"bell", opt:5.0, w:1.3}, keq:1e5, phRange:[4.5,6], phDefault:5.5, buffer:"acetate pH 5.5 after NaIO₄ oxidation",
      info:"Periodate creates aldehydes on Fc glycans, away from the antigen-binding site; hydrazone can be stabilised by NaBH₃CN."},
    {id:"box", modes:["bio"], name:"Oxime ligation: aminooxy + aldehyde", a:"aminooxy", b:"CHO", link:"oxime to aldehyde site", leave:"H2O", leaveName:"H₂O", cat:{label:"Aniline catalyst", off:0.05}, k25:0.5, Ea:40, ph:{kind:"bell", opt:4.8, w:1.3}, keq:1e8, phRange:[4.5,6.5], phDefault:5.5, buffer:"acetate or phosphate pH 4.5–6.5",
      info:"Chemoselective and hydrolytically stable conjugate."},
    {id:"bpds", modes:["bio"], name:"Disulfide exchange: pyridyl disulfide + thiol", a:"PDS", b:"SH", link:"cleavable disulfide –S–S–", leave:"C5H5NS", leaveName:"pyridine-2-thione (A343, ε = 8080 M⁻¹cm⁻¹)", k25:3e3, Ea:40, ph:{kind:"nuc"}, phRange:[7,8], phDefault:7.5, buffer:"PBS + EDTA",
      info:"Reducible linkage (cleaved by DTT/TCEP or intracellular glutathione); progress is read directly from A343."},
    {id:"bsa", modes:["bio"], name:"Affinity capture: biotin + streptavidin", a:"biotin", b:"SA", link:"non-covalent biotin–streptavidin complex (Kd ≈ 10⁻¹⁴ M)", leave:"", k25:5e7, Ea:20, ph:{kind:"bell", opt:7.0, w:3.5}, keq:1e14, phRange:[4,9], phDefault:7.4, buffer:"PBS",
      info:"Not a covalent bond, but one of the strongest non-covalent interactions known — effectively irreversible."}
  ];

  const MODE_TEMP = {chem:[-20,150,25], bio:[0,95,25]};

  /* ---- bank ---- */
  function customBank(){ try{ return JSON.parse(localStorage.getItem(CJ_CUSTOM_KEY)||"[]"); }catch(e){ return []; } }
  function saveCustomBank(list){ try{ localStorage.setItem(CJ_CUSTOM_KEY, JSON.stringify(list)); }catch(e){} }
  function bank(){ return CJ_BANK.concat(customBank()); }
  function mwOf(r){
    if(r.f){ const p=parseFormula(r.f); if(p.valid) return molarMass(p.counts); }
    return r.mw || 0;
  }
  function isBio(r){ return r.kind==="bio"; }

  /* ---- chemistry helpers ---- */
  function countsOf(f){ const p=parseFormula(f||""); return p.valid ? Object.assign({}, p.counts) : null; }
  function hill(counts){
    const keys = Object.keys(counts).filter(k=>counts[k]>0);
    const order = keys.includes("C") ? ["C","H"].filter(k=>keys.includes(k)).concat(keys.filter(k=>k!=="C"&&k!=="H").sort()) : keys.sort();
    return order.map(k=>k+(counts[k]>1?counts[k]:"")).join("");
  }
  function subs(f){ return String(f).replace(/(\d+)/g, d=>d.split("").map(c=>"₀₁₂₃₄₅₆₇₈₉"[+c]).join("")); }
  function productFormula(A, B, leave){
    const a=countsOf(A.f), b=countsOf(B.f); if(!a||!b) return null;
    const out=Object.assign({}, a);
    Object.entries(b).forEach(([k,v])=> out[k]=(out[k]||0)+v);
    if(leave){ const l=countsOf(leave); if(!l) return null; for(const [k,v] of Object.entries(l)){ out[k]=(out[k]||0)-v; if(out[k]<0) return null; } }
    return hill(out);
  }
  function leaveMW(leave){ if(!leave) return 0; const c=countsOf(leave); return c?molarMass(c):0; }

  function kForward(type, B, pH, TK, catOn){
    let k = type.k25 * Math.exp(-type.Ea*1000/R_GAS*(1/TK - 1/298.15));
    if(type.ph.kind==="nuc"){
      const pKa = (B.pKa && B.pKa[type.b]!=null) ? B.pKa[type.b] : (CJ_GROUPS[type.b].pKa||9);
      k *= 1/(1+Math.pow(10, pKa-pH));
    } else if(type.ph.kind==="bell"){
      k *= Math.exp(-Math.pow(pH-type.ph.opt,2)/(2*type.ph.w*type.ph.w));
    }
    if(type.cat && !catOn) k *= type.cat.off;
    return k;
  }
  function kHydro(type, pH, TK){
    if(!type.hydro) return 0;
    return Math.LN2/(type.hydro.t12h*3600) * Math.pow(10, type.hydro.slope*(pH-7)) * Math.exp(-50000/R_GAS*(1/TK-1/298.15));
  }
  function keqOf(type, TK, catOn){
    if(type.id==="redam") return catOn ? null : type.keqOff;
    if(type.dHdS) return Math.exp(-(type.dHdS[0] - TK*type.dHdS[1])*1000/(R_GAS*TK));
    return type.keq || null;
  }

  /* reversible A + B ⇌ P, closed-form solution */
  function solveReversible(A0, B0, kf, Keq, times){
    const Kd = 1/Keq;
    const S = A0+B0+Kd;
    const disc = Math.pow(A0-B0,2) + 2*Kd*(A0+B0) + Kd*Kd;
    const D = Math.sqrt(disc);
    const x2 = (S + D)/2, x1 = 2*A0*B0/(S + D);
    return times.map(t=>{
      let x;
      if(D/S < 1e-9){ const k=kf*t; x = A0*A0*k/(1+A0*k); }
      else { const u = Math.exp(-D*kf*t); x = x1*(1-u)/(1-(x1/x2)*u); }
      x = Math.max(0, Math.min(x, Math.min(A0,B0)));
      return {t, P:x, A:A0-x, B:B0-x, H:0};
    });
  }
  /* irreversible A + B → P with first-order hydrolysis of A; stable exponential splitting with adaptive steps */
  function solveIrreversible(A0, B0, kf, kh, times){
    let A=A0, B=B0, P=0, H=0, t=0;
    const out=[];
    for(const tt of times){
      let guard=0;
      while(t < tt - 1e-12 && guard++ < 20000){
        const minor = Math.min(A,B), major = Math.max(A,B);
        let dt = tt - t;
        const rate = kf*A*B;
        if(rate>0 && major>0) dt = Math.min(dt, 0.03*major/rate);
        if(kh>0) dt = Math.min(dt, 0.1/kh + 1e-9) ;
        // the minor species decays exponentially against the (nearly constant) major one
        const dMinor = minor*(1-Math.exp(-kf*major*dt));
        const dx = Math.min(dMinor, A, B);
        A -= dx; B -= dx; P += dx;
        if(kh>0 && A>0){ const dh = A*(1-Math.exp(-kh*dt)); A -= dh; H += dh; }
        t += dt;
      }
      out.push({t:tt, P, A, B, H});
    }
    return out;
  }

  /* ---- UI state ---- */
  const modeSel=$("cj-mode"), typeSel=$("cj-type"), aSel=$("cj-a"), bSel=$("cj-b");
  const bconc=$("cj-bconc"), equiv=$("cj-equiv"), vol=$("cj-vol"), ph=$("cj-ph"), temp=$("cj-temp"), time=$("cj-time"), cat=$("cj-cat");
  let lastRun = null, anim = null;

  function mode(){ return modeSel.value; }
  function curType(){ return TYPES.find(x=>x.id===typeSel.value) || TYPES[0]; }
  function itemById(id){ return bank().find(r=>r.id===id); }
  function concM(){ const v=+bconc.value/100; return mode()==="bio" ? 1e-6*Math.pow(1000,v) : 1e-3*Math.pow(1000,v); }
  function timeS(){ return 10*Math.pow(8640, +time.value/100); }
  function fmtDur(s){ if(s<120) return fmt(s,0)+" s"; if(s<7200) return fmt(s/60,1)+" min"; return fmt(s/3600,2)+" h"; }
  function fmtConc(M){ if(M>=0.1) return fmt(M,3)+" M"; if(M>=1e-4) return fmt(M*1e3,3)+" mM"; if(M>=1e-7) return fmt(M*1e6,3)+" µM"; return fmt(M*1e9,3)+" nM"; }
  function fmtMass(g){ if(g>=1) return fmt(g,3)+" g"; if(g>=1e-3) return fmt(g*1e3,3)+" mg"; if(g>=1e-6) return fmt(g*1e6,3)+" µg"; return fmt(g*1e9,3)+" ng"; }
  function esc(x){ return String(x).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }

  function fillTypes(){
    const m=mode(), cur=typeSel.value;
    typeSel.innerHTML = TYPES.filter(x=>x.modes.includes(m)).map(x=>`<option value="${x.id}">${esc(x.name)}</option>`).join("");
    if([...typeSel.options].some(o=>o.value===cur)) typeSel.value=cur;
    const [lo,hi,def]=MODE_TEMP[m];
    temp.min=lo; temp.max=hi; if(+temp.value<lo||+temp.value>hi) temp.value=def;
    $("cj-scene-label").textContent = m==="bio" ? "biomolecule · conjugation sites" : "reaction vessel · molecules";
    onTypeChange(true);
  }
  function optionList(filterFn, keep){
    const list = bank().filter(filterFn);
    return list.map(r=>`<option value="${r.id}">${esc(r.name)}${r.f?" — "+esc(subs(r.f)):""}${r.custom?" ★":""}</option>`).join("");
  }
  function fillReactants(){
    const ty=curType(), m=mode();
    const prevA=aSel.value, prevB=bSel.value;
    const bFilter = r => (r.modes||["chem","bio"]).includes(m) && (r.groups||{})[ty.b]>0 && (m==="bio" ? isBio(r) : !isBio(r));
    const aFilter = r => (r.modes||["chem","bio"]).includes(m) && (r.groups||{})[ty.a]>0 && !isBio(r);
    bSel.innerHTML = optionList(bFilter) || `<option value="">— none in bank with ${esc(CJ_GROUPS[ty.b].label)} —</option>`;
    aSel.innerHTML = optionList(aFilter) || `<option value="">— none in bank with ${esc(CJ_GROUPS[ty.a].label)} —</option>`;
    if([...bSel.options].some(o=>o.value===prevB)) bSel.value=prevB;
    if([...aSel.options].some(o=>o.value===prevA)) aSel.value=prevA;
    $("cj-b-label").textContent = (m==="bio" ? t("cj_target_bio") : t("cj_target")) + " · " + CJ_GROUPS[ty.b].label;
    $("cj-a-label").textContent = t("cj_reagent") + " · " + CJ_GROUPS[ty.a].label;
  }
  function onTypeChange(fromMode){
    const ty=curType();
    if(fromMode || true){ ph.value = ty.phDefault; }
    $("cj-cat-wrap").style.display = ty.cat ? "flex" : "none";
    if(ty.cat){ $("cj-cat-label").textContent = ty.cat.label; cat.checked = true; }
    $("cj-type-info").innerHTML = esc(ty.info) + `<br><strong>Linkage:</strong> ${esc(ty.link)} · <strong>Optimal pH:</strong> ${ty.phRange[0]}–${ty.phRange[1]}` + (ty.buffer?`<br><strong>Buffer:</strong> ${esc(ty.buffer)}`:"");
    if(mode()==="chem" && (ty.id==="amide")) equiv.value = 1.2;
    else if(mode()==="bio") equiv.value = ty.id==="bsa" ? 4 : 20;
    else equiv.value = 1.2;
    fillReactants();
    updateLabels();
    previewEquation();
  }
  function updateLabels(){
    const m=mode();
    $("cj-bconc-label").textContent = m==="bio" ? t("cj_conc_bio") : t("cj_conc_chem");
    const c=concM(), B=itemById(bSel.value);
    $("cj-bconc-val").textContent = fmtConc(c) + (m==="bio" && B ? " · "+fmt(c*mwOf(B),2)+" mg/mL" : "");
    $("cj-equiv-val").textContent = fmt(+equiv.value,1)+" ×";
    $("cj-vol-val").textContent = fmt(+vol.value,1)+" mL";
    $("cj-ph-val").textContent = (+ph.value).toFixed(1) + (curType().organic ? " (n/a)" : "");
    $("cj-temp-val").textContent = temp.value+" °C";
    $("cj-time-val").textContent = fmtDur(timeS());
  }

  function equationText(ty, A, B, catOn, dol){
    const lk = (ty.id==="redam" && !catOn) ? {leave:"H2O", leaveName:"H₂O", link:"imine (Schiff base) C=N"} : ty;
    if(!isBio(B)){
      const pf = productFormula(A, B, lk.leave);
      if(!pf) return {html:`${esc(B.name)} + ${esc(A.name)} → conjugate (${esc(lk.link)})`, formula:null};
      const left = `${subs(B.f)} + ${subs(A.f)}` + (ty.id==="redam" && catOn ? " + “H₂” (NaBH₃CN)" : "");
      const right = `${subs(pf)}` + (lk.leave ? ` + ${lk.leave==="O" ? "H₂O" : subs(lk.leave)}` : "");
      const arrow = keqOf(ty, 298.15, catOn) && keqOf(ty,298.15,catOn) < 1e12 ? " ⇌ " : " → ";
      return {html: `${left}${arrow}${right}<div style="font-family:Inter,sans-serif;font-size:11px;color:var(--ink-soft);margin-top:3px;">${esc(B.name)} + ${esc(A.name)} → conjugate (${esc(lk.link)})${lk.leaveName?" + "+esc(lk.leaveName):""}</div>`, formula: pf};
    }
    const n = dol!=null ? fmt(dol,2) : "n";
    const leaveTxt = lk.leave ? ` + ${n} ${esc(lk.leaveName||lk.leave)}` : "";
    return {html:`${esc(B.name)} + ${n} ${esc(A.name)} → ${esc(B.name)}–(${esc(A.name)})<sub>${n}</sub>${leaveTxt}`, formula:null};
  }
  function previewEquation(){
    const ty=curType(), A=itemById(aSel.value), B=itemById(bSel.value);
    if(!A||!B){ $("cj-equation").textContent="—"; $("cj-linkage").textContent=""; return; }
    $("cj-equation").innerHTML = equationText(ty, A, B, cat.checked, null).html;
    $("cj-linkage").textContent = "Linkage formed: " + ((ty.id==="redam" && !cat.checked) ? "imine (Schiff base) C=N — reversible" : ty.link);
    drawScene(null, 0);
  }

  /* ---- scene ---- */
  const SVGNS = "http://www.w3.org/2000/svg";
  let seeds = [];
  function short(x,n){ x=String(x).split(" (")[0]; return x.length>n ? x.slice(0,n-1)+"…" : x; }
  function rnd(i){ const x=Math.sin(i*12.9898+78.233)*43758.5453; return x-Math.floor(x); }
  function drawScene(run, frac){
    const svg=$("cj-scene"); const W=420, H=200;
    const A=itemById(aSel.value), B=itemById(bSel.value);
    let html = `<rect x="4" y="4" width="${W-8}" height="${H-8}" rx="14" fill="rgba(99,199,214,0.10)" stroke="rgba(120,120,120,0.35)"/>`;
    const pt = run ? run.pts[Math.min(run.pts.length-1, Math.round(frac*(run.pts.length-1)))] : null;
    const tNow = pt ? pt.t : 0;
    if(B && isBio(B)){
      const sites = Math.max(1, Math.min(40, (B.groups||{})[curType().b]||1));
      const cx=150, cy=100, r=62;
      html += `<ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="${r*0.86}" fill="rgba(217,105,95,0.20)" stroke="#D9695F" stroke-width="1.5"/>`;
      html += `<text x="${cx}" y="${cy+4}" text-anchor="middle" font-size="11" fill="currentColor">${esc(B.name.split(" (")[0].slice(0,22))}</text>`;
      const dol = pt ? pt.P/run.Bmol : 0;
      const labelled = Math.round(Math.min(sites, dol * (sites/((B.groups||{})[curType().b]||1))));
      const order = Array.from({length:sites},(_,i)=>i).sort((x,y)=>rnd(x+300)-rnd(y+300));
      for(let i=0;i<sites;i++){
        const ang = (i/sites)*Math.PI*2 - Math.PI/2;
        const x = cx + Math.cos(ang)*r, y = cy + Math.sin(ang)*r*0.86;
        const on = order.indexOf(i) < labelled;
        html += `<line x1="${x}" y1="${y}" x2="${cx+Math.cos(ang)*(r+ (on?14:6))}" y2="${cy+Math.sin(ang)*(r+(on?14:6))*0.86}" stroke="${on?"#2F9E52":"#999"}" stroke-width="1.5"/>`;
        if(on) html += `<circle cx="${cx+Math.cos(ang)*(r+17)}" cy="${cy+Math.sin(ang)*(r+17)*0.86}" r="4.5" fill="#2F9E52"/>`;
      }
      // free partner molecules to the right
      const freeN = pt ? Math.round(18*pt.A/run.A0) : 18, hydN = pt ? Math.round(18*pt.H/run.A0) : 0;
      for(let i=0;i<18;i++){
        const x = 270 + rnd(i)*130 + Math.sin(tNow*0.001+i)*3, y = 22 + rnd(i+50)*156 + Math.cos(tNow*0.0013+i)*3;
        if(i<freeN) html += `<circle cx="${x}" cy="${y}" r="4" fill="#2B6FB8"/>`;
        else if(i<freeN+hydN) html += `<circle cx="${x}" cy="${y}" r="4" fill="#9a9a9a"/>`;
      }
      html += `<text x="${W-14}" y="22" text-anchor="end" font-size="11" font-weight="600" fill="currentColor">DOL ${fmt(dol,2)} · t = ${fmtDur(tNow)}</text>`;
    } else {
      const N=40;
      const r0 = run ? run.B0/(run.A0+run.B0) : 0.5;
      const nB = Math.max(1, Math.round(N*r0)), nA = Math.max(1, N-nB);
      const nP = pt ? Math.round(Math.min(nA,nB) * pt.P/Math.min(run.A0,run.B0)) : 0;
      const nH = pt && run.A0>0 ? Math.round(nA*pt.H/run.A0) : 0;
      let idx=0;
      const pos = i => [24 + rnd(i)*(W-48) + Math.sin(tNow*0.002+i)*4, 22 + rnd(i+99)*(H-44) + Math.cos(tNow*0.0017+i)*4];
      for(let i=0;i<nP;i++){ const [x,y]=pos(idx++); html += `<line x1="${x-6}" y1="${y}" x2="${x+6}" y2="${y}" stroke="#2F9E52" stroke-width="3"/><circle cx="${x-6}" cy="${y}" r="5" fill="#E8A33D"/><circle cx="${x+6}" cy="${y}" r="5" fill="#2B6FB8"/>`; }
      for(let i=0;i<nB-nP;i++){ const [x,y]=pos(idx++); html += `<circle cx="${x}" cy="${y}" r="5.5" fill="#E8A33D"/>`; }
      for(let i=0;i<nA-nP-nH;i++){ const [x,y]=pos(idx++); html += `<circle cx="${x}" cy="${y}" r="5.5" fill="#2B6FB8"/>`; }
      for(let i=0;i<nH;i++){ const [x,y]=pos(idx++); html += `<circle cx="${x}" cy="${y}" r="5" fill="#9a9a9a"/>`; }
      html += `<text x="${W-14}" y="22" text-anchor="end" font-size="11" font-weight="600" fill="currentColor">t = ${fmtDur(tNow)}</text>`;
    }
    html += `<g font-size="10" fill="currentColor"><circle cx="16" cy="${H-14}" r="4" fill="${B&&isBio(B)?"#D9695F":"#E8A33D"}"/><text x="24" y="${H-10}">${esc(short(B&&B.name||"target",17))}</text>
      <circle cx="140" cy="${H-14}" r="4" fill="#2B6FB8"/><text x="148" y="${H-10}">${esc(short(A&&A.name||"partner",15))}</text>
      <circle cx="250" cy="${H-14}" r="4" fill="#2F9E52"/><text x="258" y="${H-10}">linked</text>
      ${curType().hydro?`<circle cx="300" cy="${H-14}" r="4" fill="#9a9a9a"/><text x="308" y="${H-10}">hydrolysed</text>`:""}</g>`;
    svg.innerHTML = html;
    svg.style.color = "var(--ink)";
  }

  /* ---- chart ---- */
  const SERIES = [
    {key:"yield", label:"Conjugation (of limiting reagent)", color:"#2F9E52"},
    {key:"B", label:"Target sites remaining", color:"#E8A33D"},
    {key:"A", label:"Partner remaining", color:"#2B6FB8"},
    {key:"H", label:"Partner hydrolysed", color:"#9a9a9a"}
  ];
  function drawChart(run, upto){
    const canvas=$("cj-chart");
    const {ctx,w,h} = setupCanvas(canvas);
    ctx.clearRect(0,0,w,h);
    const m={l:42,r:12,t:10,b:26}, pw=w-m.l-m.r, phh=h-m.t-m.b;
    const tEnd = run.tEnd, unit = tEnd<120 ? [1,"s"] : tEnd<7200 ? [60,"min"] : [3600,"h"];
    const sx=x=> m.l + x/tEnd*pw, sy=y=> m.t + phh - y*phh;
    ctx.font="9.5px 'IBM Plex Mono', monospace"; ctx.strokeStyle=CHART_GRID_LINE; ctx.lineWidth=1;
    for(let i=0;i<=4;i++){ const gy=i/4; ctx.beginPath(); ctx.moveTo(m.l,sy(gy)); ctx.lineTo(m.l+pw,sy(gy)); ctx.stroke(); ctx.fillStyle=CHART_TEXT; ctx.textAlign="right"; ctx.fillText((gy*100).toFixed(0)+"%", m.l-6, sy(gy)+3); }
    for(let i=0;i<=4;i++){ const gx=i/4*tEnd; ctx.beginPath(); ctx.moveTo(sx(gx),m.t); ctx.lineTo(sx(gx),m.t+phh); ctx.stroke(); ctx.fillStyle=CHART_TEXT; ctx.textAlign="center"; ctx.fillText(fmt(gx/unit[0],1), sx(gx), m.t+phh+13); }
    ctx.strokeStyle=CHART_AXIS; ctx.lineWidth=1.3; ctx.beginPath(); ctx.moveTo(m.l,m.t); ctx.lineTo(m.l,m.t+phh); ctx.lineTo(m.l+pw,m.t+phh); ctx.stroke();
    const n = Math.max(2, Math.round(upto*(run.pts.length-1))+1);
    SERIES.forEach(s=>{
      if(s.key==="H" && !run.hasHydro) return;
      ctx.beginPath();
      for(let i=0;i<n;i++){ const p=run.pts[i]; const v = s.key==="yield" ? p.P/run.lim : s.key==="A" ? p.A/run.A0 : s.key==="B" ? p.B/run.B0 : p.H/run.A0; const X=sx(p.t), Y=sy(clamp(v,0,1)); i?ctx.lineTo(X,Y):ctx.moveTo(X,Y); }
      ctx.strokeStyle=s.color; ctx.lineWidth = s.key==="yield"?2.8:1.8; ctx.stroke();
    });
    ctx.fillStyle=CHART_TEXT; ctx.textAlign="center"; ctx.font="bold 9.5px 'IBM Plex Mono', monospace";
    ctx.fillText("time ("+unit[1]+")", m.l+pw/2, h-3);
    ctx.save(); ctx.translate(11, m.t+phh/2); ctx.rotate(-Math.PI/2); ctx.fillText("fraction",0,0); ctx.restore();
    $("cj-legend").innerHTML = SERIES.filter(s=>s.key!=="H"||run.hasHydro).map(s=>`<span style="display:inline-flex;align-items:center;gap:5px;"><span style="width:14px;height:3px;background:${s.color};display:inline-block;border-radius:2px;"></span>${s.label}</span>`).join("");
  }

  /* ---- run ---- */
  function run(){
    const ty=curType(), A=itemById(aSel.value), B=itemById(bSel.value);
    if(!A||!B){ showToast("Choose both a target and a coupling partner that carry the required groups.", "warn"); return; }
    const TK = +temp.value + 273.15, pH=+ph.value, catOn = ty.cat ? cat.checked : true;
    const Bmol = concM();                                   // molecules of target, M
    const sitesB = (B.groups||{})[ty.b] || 1, sitesA = (A.groups||{})[ty.a] || 1;
    const purity = LAB.realistic ? clamp((+$("cj-purity").value||100)/100, 0.3, 1) : 1;
    const B0 = Bmol*sitesB, A0 = Bmol*(+equiv.value)*sitesA*purity;   // reactive-group concentrations, M
    const tEnd = timeS(), V = (+vol.value)/1000;
    const times = Array.from({length:241}, (_,i)=> tEnd*i/240);
    const kf = kForward(ty, B, organicPH(ty,pH), TK, catOn);
    const kh = kHydro(ty, pH, TK);
    const Keq = keqOf(ty, TK, catOn);
    const pts = Keq ? solveReversible(A0, B0, kf, Keq, times) : solveIrreversible(A0, B0, kf, kh, times);
    const fin = pts[pts.length-1];
    const lim = Math.min(A0, B0);
    // half-time to 50 % of final conversion
    let t50=null; for(const p of pts){ if(p.P >= 0.5*fin.P && fin.P>0){ t50=p.t; break; } }
    const eq = equationText(ty, A, B, catOn, isBio(B) ? fin.P/Bmol : null);
    const mwA=mwOf(A), mwB=mwOf(B), lMW = (ty.id==="redam" && catOn) ? (18.015-2.016) : leaveMW((ty.id==="redam"&&!catOn)?"H2O":ty.leave);
    const res = {equiv:+equiv.value, purity, ty, A, B, pH, T:+temp.value, catOn, Bmol, B0, A0, tEnd, V, kf, kh, Keq, pts, fin, lim, t50, eq, mwA, mwB, lMW, hasHydro: kh>0};
    res.lim = lim;
    if(isBio(B)){
      res.dol = fin.P/Bmol;
      res.conjMW = mwB + res.dol*(mwA - lMW);
      res.conjMass = Bmol*V*res.conjMW;   // g
    } else {
      res.prodFormula = eq.formula;
      res.prodMW = eq.formula ? molarMass(parseFormula(eq.formula).counts) : (mwA+mwB-lMW);
      res.prodMass = fin.P*V*res.prodMW;
    }
    lastRun = res;
    $("cj-equation").innerHTML = eq.html;
    $("cj-linkage").textContent = "Linkage formed: " + ((ty.id==="redam" && !catOn) ? "imine (Schiff base) C=N — reversible" : ty.link);
    animate(res);
  }
  function organicPH(ty, pH){ return ty.organic ? 7 : pH; }

  const cjClock = createSimClock("panel-conjugation");
  createLabConditions("panel-conjugation");
  /* ---- realistic replicate layer: pipetting, pH-meter and thermostat scatter, reagent activity,
         UV-Vis quantification error (bio) or work-up losses (chemical) ---- */
  function finalAt(r, equivF, pHv, TC, purity){
    const ty=r.ty, B=r.B, A=r.A;
    const sitesB=(B.groups||{})[ty.b]||1, sitesA=(A.groups||{})[ty.a]||1;
    const B0=r.Bmol*sitesB, A0=r.Bmol*equivF*sitesA*purity;
    const TK=TC+273.15;
    const kf=kForward(ty,B,organicPH(ty,pHv),TK,r.catOn), kh=kHydro(ty,pHv,TK), Keq=keqOf(ty,TK,r.catOn);
    const tt=[r.fin.t];
    const p=(Keq? solveReversible(A0,B0,kf,Keq,tt) : solveIrreversible(A0,B0,kf,kh,tt))[0];
    return {P:p.P, A0, B0};
  }
  function replicateReport(r, completed){
    const el=$("cj-report");
    if(!LAB.realistic){ renderLabReport(el, null); return; }
    const bio=isBio(r.B), n=LAB.replicates;
    const rng=makeRng(hashSeed(LAB.seed,"conj",r.ty.id,r.A.id,r.B.id,r.pH,r.T,r.equiv,r.fin.t));
    const reps=[];
    const LOSS=0.10;
    for(let i=0;i<n;i++){
      const eq=r.equiv*(1+rng.normal(0,0.02));                // reagent pipetting, 2 % RSD
      const pHi=r.pH+rng.normal(0,0.03);                      // pH meter ±0.03
      const Ti=r.T+rng.normal(0,0.3);                          // thermostat
      const pur=clamp(r.purity+rng.normal(0,0.01),0.3,1);      // reagent activity lot-to-lot
      const f=finalAt(r,eq,pHi,Ti,pur);
      if(bio){
        const dol=f.P/r.Bmol, dolMeas=dol*(1+rng.normal(0,0.02))/(1+rng.normal(0,0.03)); // dye A_max and A280 errors
        reps.push({eq,pHi,Ti,val:dolMeas});
      } else {
        const li=clamp(LOSS+rng.normal(0,0.025),0,0.9);
        const lim=Math.min(f.A0,f.B0);
        reps.push({eq,pHi,Ti,val:100*f.P/lim*(1-li)});
      }
    }
    const st=stats(reps.map(x=>x.val));
    const uMethod = bio ? st.mean*Math.sqrt(0.02*0.02+0.03*0.03) : st.mean*0.01;
    const uRep = n>1 ? st.sd/Math.sqrt(n) : 0;
    const uc = Math.sqrt(uMethod*uMethod+uRep*uRep);
    renderLabReport(el,{
      title: t("lab_report"),
      rows:[
        [bio?t("cjr_dol"):t("cjr_yield"), `<strong>${fmtUnc(st.mean,2*uc,bio?"":"%")}</strong> (k = 2)`],
        [t("ab_ci95"), isFinite(st.ci95)?"± "+fmt(st.ci95,3)+(bio?"":" %"):"—"],
        ["RSD", st.rsd.toFixed(2)+" %"],
        [t("cj_purity"), (r.purity*100).toFixed(0)+" %"],
        [t("cjr_model_val"), bio ? fmt(r.fin.P/r.Bmol,2) : fmt(100*r.fin.P/r.lim,1)+" %"]
      ],
      replicates:{headers:["#",t("cjr_col_eq"),"pH","T (°C)",bio?t("cjr_col_dol"):t("cjr_col_yield")],
        rows:reps.map((x,i)=>[i+1,x.eq.toFixed(2),x.pHi.toFixed(2),x.Ti.toFixed(1),bio?x.val.toFixed(2):x.val.toFixed(1)])},
      budget:[
        [bio?t("cjr_u_uv"):t("cjr_u_workup"), fmt(uMethod,3)+(bio?"":" %"), ""],
        [t("ab_u_rep"), fmt(uRep,3)+(bio?"":" %"), ""],
        [t("ab_u_comb"), fmt(uc,3)+(bio?"":" %"), "U (k=2) = "+fmt(2*uc,3)+(bio?"":" %")]
      ],
      warnings: completed===false ? [t("sim_state_stopped")] : [],
      notes:[bio?t("cjr_note_bio"):t("cjr_note_chem"), t("lab_sim_disclaimer")]
    });
    r.rep = {mean:st.mean, U:2*uc, sd:st.sd, n};
  }

  function ptAt(r, frac){ return r.pts[Math.min(r.pts.length-1, Math.max(0, Math.round(frac*(r.pts.length-1))))]; }
  function animate(res){
    const btn=$("cj-run"); if(btn) btn.disabled = true;
    cjClock.run({
      total: res.tEnd,
      onFrame:(simT, f)=>{
        drawChart(res, f); drawScene(res, f);
        const p = ptAt(res, f);
        $("cj-results").innerHTML = `<span style="color:var(--ink-soft);">${t("sim_state_running")} · ${fmtDur(simT)} / ${fmtDur(res.tEnd)} · ` +
          (isBio(res.B) ? `DOL ${fmt(p.P/res.Bmol,2)}` : `${fmt(100*p.P/res.lim,1)} %`) + `</span>`;
      },
      onDone:(simT, completed)=>{
        if(btn) btn.disabled=false;
        showResults(res, res.tEnd>0 ? simT/res.tEnd : 1, completed);
      }
    });
  }

  function row(label, value){ return `<div class="readout"><span class="label">${label}</span><span class="value">${value}</span></div>`; }
  function showResults(r, frac, completed){
    if(frac==null) frac=1;
    const f=ptAt(r, frac), bio=isBio(r.B);
    r.fin = f; r.tReached = f.t;
    if(bio){ r.dol = f.P/r.Bmol; r.conjMW = r.mwB + r.dol*(r.mwA - r.lMW); r.conjMass = r.Bmol*r.V*r.conjMW; }
    else { r.prodMass = f.P*r.V*r.prodMW; }
    let html = "";
    html += row("Rate constant k (at T, pH)", fmt(r.kf, 3)+" M⁻¹ s⁻¹");
    if(r.kh) html += row("Partner hydrolysis half-life", fmtDur(Math.LN2/r.kh));
    if(r.Keq) html += row(r.ty.id==="bsa"?"Dissociation constant Kd":"Equilibrium constant K", r.ty.id==="bsa" ? fmt(1/r.Keq,2)+" M" : fmt(r.Keq,3)+" M⁻¹");
    html += row("Target concentration", fmtConc(r.Bmol) + (bio ? " ("+fmt(r.Bmol*r.mwB,2)+" mg/mL)" : ""));
    html += row("Reactive groups: target / partner", fmtConc(r.B0)+" / "+fmtConc(r.A0));
    if(bio){
      html += row("Degree of labelling (DOL)", `<strong>${fmt(r.dol,2)}</strong> per molecule (max ${fmt(r.B0/r.Bmol,0)})`);
      html += row("Partner incorporated", fmt(100*f.P/r.A0,1)+" %");
      if(r.hasHydro) html += row("Partner lost to hydrolysis", fmt(100*f.H/r.A0,1)+" %");
      html += row("Sites conjugated", fmt(100*f.P/r.B0,1)+" %");
      html += row("Conjugate molar mass", fmt(r.conjMW/1000,2)+" kDa");
      html += row("Conjugate formed", fmtMass(r.conjMass)+" in "+fmt(r.V*1000,1)+" mL");
      if(r.ty.leave==="C5H5NS") html += row("A343 of released pyridine-2-thione", fmt(8080*f.P,3)+" (1 cm)");
    } else {
      html += row("Yield (limiting reagent)", `<strong>${fmt(100*f.P/r.lim,1)} %</strong>`);
      if(r.prodFormula) html += row("Product formula", subs(r.prodFormula));
      html += row("Product molar mass", fmt(r.prodMW,2)+" g/mol");
      html += row("Product formed", fmtMass(r.prodMass)+" ("+fmt(f.P*r.V*1000,4)+" mmol)");
      if(r.hasHydro) html += row("Partner lost to hydrolysis", fmt(100*f.H/r.A0,1)+" %");
    }
    html += row("Time to half of final conversion", r.t50!=null ? fmtDur(r.t50) : "—");
    html += row("Reaction time", fmtDur(f.t) + (completed===false ? " ("+t("sim_state_stopped")+")" : ""));
    $("cj-results").innerHTML = html;
    $("cj-add-product").style.display = (!bio && r.prodFormula) ? "" : "none";
    replicateReport(r, completed);
    $("cj-warnings").innerHTML = warnings(r).map(w=>`<div style="font-size:11.5px;color:var(--amber);margin-top:3px;">⚠ ${w}</div>`).join("");
  }
  function warnings(r){
    const w=[], ty=r.ty, bio=isBio(r.B);
    if(!ty.organic && (r.pH<ty.phRange[0] || r.pH>ty.phRange[1])) w.push(`pH ${r.pH.toFixed(1)} is outside the recommended window (${ty.phRange[0]}–${ty.phRange[1]}) for this chemistry.`);
    if(ty.cat && !r.catOn) w.push(ty.id==="redam" ? "Without NaBH₃CN the imine stays reversible and hydrolyses back during work-up." : `Without “${ty.cat.label}” this coupling is essentially inactive.`);
    if(r.hasHydro && r.fin.H > 0.5*r.A0) w.push("More than half of the reactive partner was destroyed by water — lower the pH slightly, work faster, or use more equivalents.");
    if((ty.id==="thiolmal"||ty.id==="bmal") && r.pH>7.5) w.push("Above pH 7.5 maleimides lose thiol selectivity (they begin reacting with amines) and the ring hydrolyses.");
    if((ty.id==="nhs"||ty.id==="bnhs") && r.pH>9) w.push("At pH > 9 the NHS-ester hydrolysis half-life drops to minutes.");
    if(bio && r.T>42) w.push(`At ${r.T} °C most proteins start to denature${r.T>60?" — above 60 °C unfolding is extensive and activity will be lost":""}.`);
    if(bio && r.T<4) w.push("Near 0 °C the reaction slows considerably; extend the reaction time.");
    if(bio && ty.id==="bcuaac" && r.catOn) w.push("Copper can oxidise His/Met/Cys residues — keep THPTA:Cu ≥ 5:1 and remove copper afterwards (EDTA, desalting).");
    if(bio && r.dol>8 && /IgG/.test(r.B.name)) w.push(`DOL ${fmt(r.dol,1)} is high for an antibody — risk of aggregation, loss of binding and fluorescence self-quenching (typical target 2–6).`);
    if(ty.id==="da" && r.T>100) w.push("At this temperature the retro-Diels–Alder reaction becomes significant, so the adduct partly falls apart.");
    if(r.Keq && r.Keq*r.B0 < 10 && ty.id!=="bsa") w.push("The equilibrium constant is small at these concentrations, so conversion is equilibrium-limited.");
    if(+equiv.value < 1) w.push("Less than one equivalent of the partner — the partner is the limiting reagent.");
    if(bio && /Tris|glycine/i.test(ty.buffer||"") === false && (ty.id==="bnhs")) {}
    if(r.T>100 && !ty.organic) w.push("Above 100 °C aqueous reactions need a sealed vessel.");
    return w;
  }

  /* ---- custom bank entries ---- */
  function renderGroupInputs(){
    $("cj-new-groups").innerHTML = Object.entries(CJ_GROUPS).map(([k,g])=>`<label style="display:flex;align-items:center;gap:6px;"><input type="number" min="0" step="1" value="0" data-g="${k}" style="width:46px;padding:2px 4px;border:1px solid var(--paper-edge);border-radius:5px;background:var(--paper);color:var(--ink);">${esc(g.label)}</label>`).join("");
  }
  $("cj-new-add").addEventListener("click", ()=>{
    const msg=$("cj-new-msg"); msg.style.display="block";
    const name=$("cj-new-name").value.trim(), f=$("cj-new-formula").value.replace(/\s+/g,""), mw=parseFloat($("cj-new-mw").value);
    const groups={}; $("cj-new-groups").querySelectorAll("input").forEach(i=>{ const n=parseInt(i.value,10); if(n>0) groups[i.dataset.g]=n; });
    const fail = s=>{ msg.style.color="var(--red)"; msg.textContent=s; };
    if(!name) return fail("Give the reactant a name.");
    if(f && !parseFormula(f).valid) return fail("That formula isn't valid.");
    if(!f && !(mw>0)) return fail("Enter a formula or a molar mass.");
    if(!Object.keys(groups).length) return fail("Set at least one reactive group.");
    const kind=$("cj-new-kind").value;
    const list=customBank();
    const entry={id:"c"+Date.now(), name, groups, custom:true, modes: kind==="bio" ? ["bio"] : ["chem","bio"]};
    if(f) entry.f=f; else entry.mw=mw;
    if(kind==="bio") entry.kind="bio";
    list.push(entry); saveCustomBank(list);
    if(f && kind!=="bio") addCustomReagent(f, name);
    msg.style.color="var(--success-text)"; msg.textContent=`Added “${name}” to the conjugation bank.`;
    $("cj-new-name").value=""; $("cj-new-formula").value=""; $("cj-new-mw").value="";
    renderGroupInputs(); fillReactants(); previewEquation();
  });

  /* ---- buttons ---- */
  $("cj-log").addEventListener("click", ()=>{
    if(!lastRun){ showToast("Run a conjugation first.", "warn"); return; }
    const r=lastRun, bio=isBio(r.B);
    logExperiment(mode()==="bio"?"Bio-conjugation":"Conjugation", r.B.name+" + "+r.A.name+" ("+r.ty.name+")", {
      "pH":r.pH, "T(°C)":r.T, "time":fmtDur(r.tReached!=null?r.tReached:r.tEnd), "target":fmtConc(r.Bmol), "equiv":equiv.value, "V(mL)":vol.value, "catalyst":r.ty.cat?(r.catOn?"yes":"no"):"n/a"
    }, bio ? {"DOL":fmt(r.dol,2), "incorporation_%":fmt(100*r.fin.P/r.A0,1), "conjugate_kDa":fmt(r.conjMW/1000,2)}
           : {"yield_%":fmt(100*r.fin.P/r.lim,1), "product":r.prodFormula||"—", "mass":fmtMass(r.prodMass)});
  });
  $("cj-export").addEventListener("click", ()=>{
    if(!lastRun){ showToast("Run a conjugation first.", "warn"); return; }
    const r=lastRun;
    const rows=[["Reaction Bench — conjugation run"],["chemistry",r.ty.name],["target",r.B.name],["partner",r.A.name],["pH",r.pH],["T_C",r.T],["target_M",r.Bmol],["partner_equiv",equiv.value],["volume_mL",vol.value],["k_M-1s-1",r.kf],["hydrolysis_k_s-1",r.kh],
      isBio(r.B)?["DOL",r.dol]:["yield_%",100*r.fin.P/r.lim],[],["time_s","linked_M","target_groups_M","partner_M","hydrolysed_M"]]
      .concat(r.pts.map(p=>[p.t.toFixed(2), p.P.toExponential(4), p.B.toExponential(4), p.A.toExponential(4), p.H.toExponential(4)]));
    let out = labConditionsCSV(LAB.realistic?"second-order kinetics with hydrolysis; replicate scatter (pipetting, pH, T, reagent activity, quantification)":"second-order kinetics, ideal").concat(rows);
    if(r.rep) out = out.concat([[],["replicate_mean",r.rep.mean],["replicate_sd",r.rep.sd],["expanded_U_k2",r.rep.U],["n",r.rep.n]]);
    downloadCSV("conjugation_run.csv", out);
  });
  $("cj-add-product").addEventListener("click", ()=>{
    if(!lastRun || !lastRun.prodFormula) return;
    const label = lastRun.B.name+"–"+lastRun.A.name+" conjugate";
    const ok = addCustomReagent(lastRun.prodFormula, label);
    showToast(ok ? `Added ${lastRun.prodFormula} to the reactant bank.` : t("r_add_to_bank_exists"), ok?"success":"warn");
  });

  modeSel.addEventListener("change", fillTypes);
  typeSel.addEventListener("change", ()=>onTypeChange(false));
  [aSel,bSel].forEach(s=>s.addEventListener("change", ()=>{ updateLabels(); previewEquation(); }));
  cat.addEventListener("change", previewEquation);
  [bconc,equiv,vol,ph,temp,time].forEach(i=>i.addEventListener("input", updateLabels));
  const runBtn=$("cj-run"); if(runBtn) runBtn.addEventListener("click", run);
  onLanguageChange(()=>{ fillReactants(); updateLabels(); });
  onLabChange(()=>{ $("cj-purity-wrap").style.opacity = LAB.realistic ? "1" : ".45"; });

  renderGroupInputs();
  fillTypes();
  window.__conjugation = {TYPES, solveIrreversible, solveReversible, run, kForward};
})();

applyLanguage(currentLang);
