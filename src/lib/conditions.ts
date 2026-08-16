
export interface Condition {
  slug: string
  title: string
  icon: string
  shortDescription: string
  heroHeading: string
  heroDescription: string
  whatIsIt: string
  conventionalApproach: string
  functionalApproach: string
  rootCauses: string[]
  symptoms: string[]
  howWeHelp: string[]
  lifestyleFocus: string[]
  whoIsThisFor: string[]
}

export const conditions: Condition[] = [
  {
    slug: 'pcos',
    title: 'PCOS & Hormonal Imbalances',
    icon: '🌸',
    shortDescription:
      'Beyond irregular cycles — understanding the metabolic, inflammatory, and hormonal roots of PCOS.',
    heroHeading: 'PCOS is not just a reproductive issue',
    heroDescription:
      'Polycystic Ovary Syndrome is a whole-body metabolic condition. We look beyond irregular periods to address insulin resistance, inflammation, stress hormones, and gut health — the real drivers behind your symptoms.',
    whatIsIt:
      'PCOS affects 1 in 5 women in India, yet most are told to "just take the pill" or "lose weight." The truth is, PCOS is a complex interplay of insulin resistance, chronic low-grade inflammation, adrenal stress, and gut dysbiosis. It manifests differently in every woman — which is why a personalised approach matters.',
    conventionalApproach:
      'Birth control pills to "regulate" cycles, metformin for insulin resistance, spironolactone for acne/hair growth. These manage symptoms but don\'t address why your hormones are imbalanced in the first place. Stop the medication, and symptoms often return.',
    functionalApproach:
      'We identify YOUR type of PCOS — insulin-resistant, inflammatory, adrenal, or post-pill — and build a protocol that addresses the root driver. Through targeted nutrition, blood sugar management, stress reduction, and gut healing, we work to restore hormonal balance naturally.',
    rootCauses: [
      'Insulin resistance & blood sugar dysregulation',
      'Chronic low-grade inflammation',
      'Adrenal stress & cortisol imbalance',
      'Gut dysbiosis & impaired detoxification',
      'Nutrient deficiencies (Vitamin D, inositol, magnesium)',
      'Environmental toxin exposure',
    ],
    symptoms: [
      'Irregular or absent periods',
      'Acne, especially along jawline',
      'Excess hair growth (hirsutism)',
      'Hair thinning or loss',
      'Weight gain, especially around the middle',
      'Difficulty losing weight',
      'Fatigue & brain fog',
      'Mood swings & anxiety',
      'Darkening of skin (acanthosis)',
      'Difficulty conceiving',
    ],
    howWeHelp: [
      'Identify your PCOS type through functional lab interpretation',
      'Blood sugar stabilisation through Indian kitchen-friendly nutrition',
      'Anti-inflammatory food protocols',
      'Targeted supplementation (inositol, magnesium, Vitamin D, omega-3)',
      'Stress & cortisol management strategies',
      'Movement guidance (strength training, walking, yoga)',
      'Sleep & circadian rhythm optimisation',
      'Gut health restoration',
    ],
    lifestyleFocus: [
      'Blood sugar-balancing meals (protein + fibre + healthy fat at every meal)',
      'Anti-inflammatory foods (turmeric, omega-3 rich seeds, leafy greens)',
      'Strength training 3–4x/week (builds insulin sensitivity)',
      'Stress management (breathwork, boundaries, sleep hygiene)',
      'Reducing endocrine disruptors in daily products',
    ],
    whoIsThisFor: [
      'Women diagnosed with PCOS seeking a root-cause approach',
      'Those tired of being told to "just lose weight"',
      'Women wanting to manage PCOS without (or alongside) medication',
      'Those planning pregnancy and wanting to optimise fertility naturally',
      'Anyone with irregular cycles seeking answers beyond birth control',
    ],
  },
  {
    slug: 'thyroid',
    title: 'Thyroid Disorders',
    icon: '🦋',
    shortDescription:
      'Hypothyroidism, Hashimoto\'s, and subclinical thyroid issues — looking beyond TSH.',
    heroHeading: 'Your thyroid is a messenger, not the problem',
    heroDescription:
      'Thyroid dysfunction is often a downstream effect of deeper imbalances — gut health, nutrient deficiencies, stress, and autoimmunity. We look at the full picture, not just your TSH number.',
    whatIsIt:
      'Your thyroid controls metabolism, energy, mood, weight, and temperature regulation. When it\'s underactive (hypothyroidism) or under autoimmune attack (Hashimoto\'s), everything slows down. But the thyroid rarely malfunctions in isolation — it\'s responding to signals from your gut, adrenals, liver, and immune system.',
    conventionalApproach:
      'Levothyroxine (T4 replacement) based primarily on TSH levels. While medication is often necessary and helpful, it doesn\'t address WHY the thyroid is struggling. Many people on medication still feel unwell because the underlying triggers remain unaddressed.',
    functionalApproach:
      'We run a complete thyroid panel (not just TSH), assess autoimmune markers, check nutrient cofactors, evaluate gut health, and look at stress load. Then we build a protocol that supports thyroid function from every angle — while working alongside your prescribed medication.',
    rootCauses: [
      'Hashimoto\'s autoimmunity (most common cause)',
      'Nutrient deficiencies (selenium, zinc, iodine, iron, Vitamin D)',
      'Gut permeability ("leaky gut") triggering immune activation',
      'Chronic stress & HPA axis dysfunction',
      'Gluten sensitivity & molecular mimicry',
      'Environmental toxins (heavy metals, pesticides)',
      'Blood sugar instability',
    ],
    symptoms: [
      'Persistent fatigue despite adequate sleep',
      'Unexplained weight gain or difficulty losing weight',
      'Cold hands and feet',
      'Hair loss or thinning',
      'Dry skin and brittle nails',
      'Brain fog & poor concentration',
      'Constipation',
      'Depression or low mood',
      'Puffy face, especially in the morning',
      'Muscle aches and joint stiffness',
    ],
    howWeHelp: [
      'Complete thyroid panel interpretation (TSH, Free T3, Free T4, RT3, TPO, TgAb)',
      'Nutrient cofactor assessment & targeted supplementation',
      'Gut healing protocol (addressing permeability & dysbiosis)',
      'Anti-inflammatory nutrition plan',
      'Stress & adrenal support strategies',
      'Guidance on food sensitivities (gluten, dairy assessment)',
      'Lifestyle modifications to support conversion (T4 → T3)',
      'Coordination with your endocrinologist',
    ],
    lifestyleFocus: [
      'Selenium-rich foods (Brazil nuts, sunflower seeds)',
      'Anti-inflammatory diet (removing personal triggers)',
      'Gentle movement (avoid overtraining which stresses thyroid)',
      'Sleep prioritisation (thyroid hormones regenerate during sleep)',
      'Stress reduction (cortisol directly impacts T4→T3 conversion)',
    ],
    whoIsThisFor: [
      'Those on thyroid medication but still feeling unwell',
      'People with subclinical hypothyroidism seeking natural support',
      'Those with Hashimoto\'s wanting to address autoimmune triggers',
      'Anyone with thyroid symptoms but "normal" TSH results',
      'Those wanting to understand their full thyroid picture',
    ],
  },
  {
    slug: 'gut-health',
    title: 'Gut Health & Digestive Issues',
    icon: '🫁',
    shortDescription:
      'Bloating, IBS, acid reflux, food sensitivities — your gut is trying to tell you something.',
    heroHeading: 'Your gut is the foundation of everything',
    heroDescription:
      'Digestive issues aren\'t just uncomfortable — they affect your immunity, hormones, mood, skin, and energy. We help you understand what\'s happening inside and rebuild from the ground up.',
    whatIsIt:
      'Your gut houses 70% of your immune system, produces neurotransmitters, metabolises hormones, and determines which nutrients you actually absorb. When gut health is compromised — through dysbiosis, permeability, infections, or inflammation — the effects ripple across your entire body.',
    conventionalApproach:
      'Antacids for reflux, laxatives for constipation, anti-spasmodics for IBS, and the advice to "eat more fibre." These provide temporary relief but rarely investigate WHY your gut is struggling in the first place.',
    functionalApproach:
      'We use a systematic approach: Remove triggers, Replace deficiencies, Reinoculate with beneficial bacteria, Repair the gut lining, and Rebalance lifestyle factors. Every protocol is personalised based on your specific symptoms, history, and triggers.',
    rootCauses: [
      'Dysbiosis (imbalanced gut bacteria)',
      'Intestinal permeability ("leaky gut")',
      'Food sensitivities & intolerances',
      'Low stomach acid or digestive enzyme insufficiency',
      'SIBO (Small Intestinal Bacterial Overgrowth)',
      'Chronic stress (gut-brain axis disruption)',
      'Antibiotic history & medication effects',
      'Poor dietary patterns & processed food intake',
    ],
    symptoms: [
      'Bloating after meals',
      'Gas & abdominal discomfort',
      'Alternating constipation & diarrhoea',
      'Acid reflux or heartburn',
      'Food sensitivities (increasing over time)',
      'Skin issues (acne, eczema, rashes)',
      'Brain fog & fatigue after eating',
      'Frequent infections or low immunity',
      'Mood changes (anxiety, irritability)',
      'Nutrient deficiencies despite good diet',
    ],
    howWeHelp: [
      'Detailed digestive symptom mapping & timeline',
      'Food sensitivity identification (elimination approach)',
      'Gut healing nutrition protocol (personalised)',
      'Probiotic & prebiotic strategy (strain-specific)',
      'Digestive support (enzymes, HCl assessment)',
      'Stress-gut connection management',
      'Indian kitchen-friendly gut-healing recipes',
      'Gradual food reintroduction guidance',
    ],
    lifestyleFocus: [
      'Mindful eating practices (chewing, pacing, no screens)',
      'Fermented foods (homemade dahi, kanji, idli)',
      'Prebiotic-rich foods (banana, garlic, onion, oats)',
      'Stress management (vagus nerve activation)',
      'Sleep quality (gut repairs overnight)',
    ],
    whoIsThisFor: [
      'Those diagnosed with IBS seeking root-cause solutions',
      'People with increasing food sensitivities',
      'Anyone with chronic bloating, gas, or irregular bowels',
      'Those with skin issues linked to gut health',
      'People wanting to rebuild gut health after antibiotics',
    ],
  },
  {
    slug: 'diabetes',
    title: 'Type 2 Diabetes & Metabolic Health',
    icon: '📈',
    shortDescription:
      'Reversing insulin resistance and metabolic dysfunction through lifestyle-first interventions.',
    heroHeading: 'Diabetes is a lifestyle condition — and lifestyle can change it',
    heroDescription:
      'Type 2 diabetes doesn\'t appear overnight. It\'s the end result of years of insulin resistance, inflammation, and metabolic stress. The good news? These are modifiable. We help you address the root drivers.',
    whatIsIt:
      'Type 2 diabetes is fundamentally a condition of insulin resistance — your cells stop responding to insulin efficiently, leading to elevated blood sugar. But insulin resistance itself is driven by inflammation, visceral fat, poor sleep, chronic stress, and dietary patterns. Address these, and the metabolic picture can shift dramatically.',
    conventionalApproach:
      'Metformin, sulfonylureas, and eventually insulin injections. Dietary advice is often limited to "avoid sugar" and "eat less." While medication is important for management, it doesn\'t reverse the underlying insulin resistance or address the lifestyle factors driving progression.',
    functionalApproach:
      'We focus on reversing insulin resistance through targeted nutrition (not just calorie restriction), strategic movement, sleep optimisation, stress management, and addressing inflammation. The goal is to improve metabolic flexibility — your body\'s ability to use fuel efficiently.',
    rootCauses: [
      'Insulin resistance (often present 10+ years before diagnosis)',
      'Visceral adiposity & inflammatory fat tissue',
      'Chronic low-grade inflammation',
      'Poor sleep & circadian disruption',
      'Chronic stress & cortisol elevation',
      'Sedentary lifestyle & muscle insulin resistance',
      'Ultra-processed food consumption',
      'Gut microbiome imbalance',
    ],
    symptoms: [
      'Elevated fasting glucose or HbA1c',
      'Fatigue, especially after meals',
      'Increased thirst & frequent urination',
      'Difficulty losing weight, especially belly fat',
      'Brain fog & poor concentration',
      'Slow wound healing',
      'Darkening of skin folds (acanthosis nigricans)',
      'Sugar cravings & energy crashes',
      'Tingling in hands or feet',
      'Frequent infections',
    ],
    howWeHelp: [
      'Comprehensive metabolic assessment (beyond just HbA1c)',
      'Blood sugar stabilisation nutrition plan',
      'Indian kitchen-friendly low-glycemic meal frameworks',
      'Strategic movement prescription (resistance + walking)',
      'Sleep & circadian rhythm optimisation',
      'Stress-cortisol-glucose connection management',
      'Targeted supplementation (berberine, chromium, magnesium)',
      'Continuous glucose monitoring guidance (if applicable)',
    ],
    lifestyleFocus: [
      'Protein-first meals (stabilises post-meal glucose)',
      'Walking after meals (10–15 min — proven glucose reducer)',
      'Resistance training (builds insulin-sensitive muscle)',
      'Sleep 7–8 hours (sleep deprivation = insulin resistance)',
      'Stress management (cortisol directly raises blood sugar)',
    ],
    whoIsThisFor: [
      'Those with pre-diabetes wanting to prevent progression',
      'People with Type 2 diabetes seeking lifestyle-first management',
      'Those on medication wanting to reduce dependency over time',
      'Anyone with insulin resistance or metabolic syndrome',
      'Those wanting to understand their metabolic health deeply',
    ],
  },
  {
    slug: 'autoimmune',
    title: 'Autoimmune Conditions',
    icon: '🛡️',
    shortDescription:
      'When your immune system attacks your own body — calming inflammation and identifying triggers.',
    heroHeading: 'Autoimmunity is not a life sentence',
    heroDescription:
      'Autoimmune conditions happen when your immune system loses tolerance and attacks your own tissues. We help identify what\'s triggering this response and work to calm the immune system through lifestyle interventions.',
    whatIsIt:
      'Autoimmune diseases — Hashimoto\'s, rheumatoid arthritis, lupus, psoriasis, celiac disease, and others — share a common thread: the immune system has lost its ability to distinguish self from non-self. This is driven by a combination of genetic predisposition, environmental triggers, and gut permeability (the "triad" of autoimmunity).',
    conventionalApproach:
      'Immunosuppressants, steroids, and biologics to dampen the immune response. While these can be life-changing for managing flares, they don\'t address the triggers that activated the immune system in the first place — and they come with significant side effects over time.',
    functionalApproach:
      'We work to identify and remove triggers (food sensitivities, infections, toxins, stress), heal the gut barrier, reduce systemic inflammation, and support immune regulation. The goal isn\'t to "cure" autoimmunity but to reduce flare frequency, lower antibody levels, and improve quality of life.',
    rootCauses: [
      'Intestinal permeability ("leaky gut")',
      'Molecular mimicry (food proteins resembling body tissues)',
      'Chronic infections (EBV, gut pathogens)',
      'Environmental toxins & heavy metals',
      'Chronic psychological stress',
      'Nutrient deficiencies (Vitamin D, omega-3, glutathione)',
      'Gut dysbiosis & loss of immune tolerance',
      'Hormonal imbalances',
    ],
    symptoms: [
      'Fatigue that doesn\'t improve with rest',
      'Joint pain, stiffness, or swelling',
      'Skin rashes, psoriasis, or eczema',
      'Digestive issues (bloating, pain, irregular bowels)',
      'Brain fog & cognitive difficulties',
      'Hair loss',
      'Recurring low-grade fevers',
      'Numbness or tingling',
      'Muscle weakness',
      'Symptoms that flare and remit cyclically',
    ],
    howWeHelp: [
      'Trigger identification (food, environmental, infectious)',
      'Gut barrier repair protocol',
      'Anti-inflammatory nutrition plan (AIP-inspired, personalised)',
      'Stress & nervous system regulation',
      'Targeted supplementation (Vitamin D, omega-3, glutathione support)',
      'Food sensitivity assessment & elimination guidance',
      'Sleep & recovery optimisation',
      'Coordination with your rheumatologist/specialist',
    ],
    lifestyleFocus: [
      'Anti-inflammatory whole foods diet (personalised, not restrictive)',
      'Gut healing foods (bone broth, collagen, fermented foods)',
      'Stress reduction (autoimmune flares are stress-sensitive)',
      'Gentle movement (avoid overtraining during flares)',
      'Toxin reduction in home & personal care products',
    ],
    whoIsThisFor: [
      'Those with diagnosed autoimmune conditions seeking complementary support',
      'People with elevated antibodies wanting to address triggers',
      'Those experiencing frequent flares despite medication',
      'Anyone with multiple autoimmune symptoms seeking answers',
      'Those wanting to reduce medication dependency over time (with doctor guidance)',
    ],
  },
  {
    slug: 'fatigue',
    title: 'Chronic Fatigue & Low Energy',
    icon: '🔋',
    shortDescription:
      'When rest doesn\'t restore you — uncovering the hidden drivers of persistent exhaustion.',
    heroHeading: 'Fatigue is not laziness. It\'s a signal.',
    heroDescription:
      'Persistent exhaustion that doesn\'t improve with sleep is your body telling you something is off. We help you find what\'s draining your energy — and rebuild it from the source.',
    whatIsIt:
      'Chronic fatigue is one of the most common yet most dismissed complaints in medicine. "Your labs are normal" doesn\'t mean you\'re well. Fatigue can stem from mitochondrial dysfunction, HPA axis dysregulation, nutrient depletion, thyroid issues, gut problems, or chronic inflammation — often a combination of several.',
    conventionalApproach:
      'Basic blood tests (CBC, TSH, blood sugar). If these are "normal," patients are often told they\'re fine, need more sleep, or are stressed. Antidepressants may be prescribed. The underlying metabolic, nutritional, and hormonal drivers are rarely investigated.',
    functionalApproach:
      'We dig deeper — assessing mitochondrial function, adrenal health, complete thyroid panels, iron studies, B12, Vitamin D, gut health, and inflammatory markers. Then we build a protocol that restores energy production at the cellular level.',
    rootCauses: [
      'HPA axis dysfunction ("adrenal fatigue")',
      'Mitochondrial dysfunction',
      'Iron deficiency (even without anaemia)',
      'Subclinical thyroid dysfunction',
      'Chronic inflammation',
      'Gut malabsorption & nutrient depletion',
      'Blood sugar instability',
      'Poor sleep quality (not just quantity)',
      'Chronic stress & burnout',
      'Viral reactivation (EBV, CMV)',
    ],
    symptoms: [
      'Exhaustion that doesn\'t improve with rest',
      'Waking up tired despite 7–8 hours of sleep',
      'Energy crashes in the afternoon',
      'Needing caffeine to function',
      'Brain fog & poor concentration',
      'Muscle weakness or heaviness',
      'Low motivation & emotional flatness',
      'Getting sick frequently',
      'Exercise intolerance (feeling worse after activity)',
      'Feeling "wired but tired" at night',
    ],
    howWeHelp: [
      'Comprehensive energy assessment (beyond basic labs)',
      'Adrenal & cortisol pattern evaluation',
      'Nutrient repletion strategy (iron, B12, D, magnesium)',
      'Mitochondrial support protocol',
      'Blood sugar stabilisation',
      'Sleep architecture optimisation',
      'Stress & nervous system recovery plan',
      'Gentle movement reintroduction (paced, not pushing)',
    ],
    lifestyleFocus: [
      'Sleep hygiene & circadian rhythm alignment',
      'Blood sugar-balanced meals (prevent energy crashes)',
      'Paced activity (not pushing through fatigue)',
      'Nervous system regulation (breathwork, nature, rest)',
      'Reducing stimulant dependency gradually',
    ],
    whoIsThisFor: [
      'Those told "your labs are normal" but still exhausted',
      'People with chronic fatigue syndrome (CFS/ME)',
      'Those experiencing burnout & adrenal exhaustion',
      'Anyone dependent on caffeine to get through the day',
      'Those wanting to understand WHY they\'re tired',
    ],
  },
  {
    slug: 'weight-management',
    title: 'Unexplained Weight Gain',
    icon: '⚖️',
    shortDescription:
      'When calories and exercise aren\'t the answer — addressing the hormonal and metabolic roots of stubborn weight.',
    heroHeading: 'Your weight is a symptom, not the problem',
    heroDescription:
      'If you\'ve tried everything — diets, exercise, willpower — and the weight won\'t budge, it\'s not a discipline issue. It\'s a signal that something deeper is off. We help you find what that is.',
    whatIsIt:
      'Unexplained weight gain or inability to lose weight despite genuine effort is almost always a sign of underlying metabolic dysfunction — insulin resistance, thyroid issues, cortisol imbalance, hormonal disruption, or inflammation. Calorie restriction alone doesn\'t fix these. In fact, it often makes them worse.',
    conventionalApproach:
      '"Eat less, move more." Calorie-restricted diets, weight loss medications, and eventually bariatric surgery referrals. The metabolic, hormonal, and inflammatory drivers are rarely investigated. Patients are left feeling like failures when diets don\'t work.',
    functionalApproach:
      'We investigate the WHY — is it insulin resistance? Thyroid? Cortisol? Inflammation? Gut health? Then we build a protocol that addresses the actual driver, not just the number on the scale. Sustainable weight management comes from metabolic health, not restriction.',
    rootCauses: [
      'Insulin resistance & hyperinsulinemia',
      'Thyroid dysfunction (subclinical or overt)',
      'Cortisol dysregulation (chronic stress)',
      'Hormonal imbalances (PCOS, perimenopause)',
      'Chronic inflammation',
      'Gut dysbiosis & metabolic endotoxemia',
      'Sleep deprivation & circadian disruption',
      'Leptin resistance',
      'History of yo-yo dieting (metabolic adaptation)',
    ],
    symptoms: [
      'Weight gain despite no change in diet/exercise',
      'Inability to lose weight despite genuine effort',
      'Weight concentrated around the abdomen',
      'Sugar cravings & energy crashes',
      'Fatigue & low motivation to exercise',
      'Feeling puffy or inflamed',
      'Slow metabolism (feeling cold, sluggish)',
      'Weight gain after stressful life events',
      'Gaining weight on medications',
      'Frustration with repeated diet failures',
    ],
    howWeHelp: [
      'Metabolic root-cause investigation',
      'Insulin & hormonal assessment',
      'Personalised nutrition (not calorie restriction)',
      'Blood sugar & insulin management strategy',
      'Cortisol & stress-weight connection',
      'Thyroid optimisation support',
      'Anti-inflammatory food protocol',
      'Movement strategy (building metabolically active tissue)',
    ],
    lifestyleFocus: [
      'Protein-adequate meals (supports metabolism & satiety)',
      'Resistance training (builds insulin-sensitive muscle)',
      'Sleep optimisation (sleep debt = weight gain)',
      'Stress management (cortisol drives visceral fat)',
      'Ditching restrictive diets (they lower metabolic rate)',
    ],
    whoIsThisFor: [
      'Those who\'ve tried multiple diets without lasting results',
      'People gaining weight despite eating well and exercising',
      'Those with PCOS, thyroid, or hormonal weight gain',
      'Anyone wanting to understand their metabolism, not just restrict calories',
      'Those tired of being told to "just eat less"',
    ],
  },
]

