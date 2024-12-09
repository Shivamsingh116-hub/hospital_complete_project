const diseaseData=[
    {
      "name": "Diabetes",
      "symptoms": ["Frequent urination", "Increased thirst", "Fatigue"],
      "causes": ["Genetics", "Obesity", "Lack of exercise"],
      "treatment": "Insulin therapy, diet control, exercise"
    },
    {
      "name": "Hypertension",
      "symptoms": ["Headache", "Dizziness", "Chest pain"],
      "causes": ["Genetics", "Stress", "Poor diet"],
      "treatment": "Medications, lifestyle changes, regular monitoring"
    },
    {
      "name": "Asthma",
      "symptoms": ["Shortness of breath", "Wheezing", "Coughing"],
      "causes": ["Allergens", "Air pollution", "Genetics"],
      "treatment": "Inhalers, avoiding triggers, medications"
    },
    {
      "name": "Cancer",
      "symptoms": ["Unexplained weight loss", "Fatigue", "Pain in affected area"],
      "causes": ["Genetics", "Environmental factors", "Tobacco use"],
      "treatment": "Chemotherapy, radiation therapy, surgery"
    },
    {
      "name": "Influenza",
      "symptoms": ["Fever", "Cough", "Sore throat", "Body aches"],
      "causes": ["Viruses"],
      "treatment": "Rest, fluids, antivirals"
    },
    {
      "name": "COVID-19",
      "symptoms": ["Fever", "Cough", "Shortness of breath", "Loss of taste or smell"],
      "causes": ["SARS-CoV-2 virus"],
      "treatment": "Rest, fluids, antiviral medication, vaccination"
    },
    {
      "name": "Malaria",
      "symptoms": ["Fever", "Chills", "Headache", "Sweating"],
      "causes": ["Plasmodium parasite carried by mosquitoes"],
      "treatment": "Antimalarial drugs"
    },
    {
      "name": "Pneumonia",
      "symptoms": ["Cough", "Fever", "Shortness of breath", "Chest pain"],
      "causes": ["Bacterial, viral, or fungal infection"],
      "treatment": "Antibiotics, antivirals, rest"
    },
    {
      "name": "Tuberculosis",
      "symptoms": ["Persistent cough", "Chest pain", "Night sweats", "Fatigue"],
      "causes": ["Mycobacterium tuberculosis bacteria"],
      "treatment": "Antibiotics (usually for 6 months)"
    },
    {
      "name": "Hepatitis B",
      "symptoms": ["Fatigue", "Abdominal pain", "Nausea", "Jaundice"],
      "causes": ["Hepatitis B virus"],
      "treatment": "Antiviral medication, liver transplant in severe cases"
    },
    {
      "name": "Hepatitis C",
      "symptoms": ["Fatigue", "Abdominal pain", "Jaundice"],
      "causes": ["Hepatitis C virus"],
      "treatment": "Antiviral medication"
    },
    {
      "name": "Anemia",
      "symptoms": ["Fatigue", "Paleness", "Dizziness", "Shortness of breath"],
      "causes": ["Iron deficiency", "Vitamin deficiency", "Chronic disease"],
      "treatment": "Iron supplements, vitamins, treating underlying cause"
    },
    {
      "name": "Arthritis",
      "symptoms": ["Joint pain", "Swelling", "Stiffness", "Reduced movement"],
      "causes": ["Genetics", "Injury", "Aging"],
      "treatment": "Pain relievers, anti-inflammatory drugs, physical therapy"
    },
    {
      "name": "Epilepsy",
      "symptoms": ["Seizures", "Aura", "Loss of consciousness"],
      "causes": ["Brain injury", "Genetics", "Brain infections"],
      "treatment": "Anticonvulsants, surgery"
    },
    {
      "name": "Parkinson's Disease",
      "symptoms": ["Tremors", "Stiffness", "Slowed movements", "Balance problems"],
      "causes": ["Genetics", "Environmental factors"],
      "treatment": "Medications, physical therapy, surgery"
    },
    {
      "name": "Chronic Obstructive Pulmonary Disease (COPD)",
      "symptoms": ["Shortness of breath", "Cough", "Fatigue", "Wheezing"],
      "causes": ["Smoking", "Air pollution", "Genetics"],
      "treatment": "Medications, oxygen therapy, pulmonary rehabilitation"
    },
    {
      "name": "Osteoporosis",
      "symptoms": ["Bone fractures", "Back pain", "Loss of height"],
      "causes": ["Aging", "Lack of calcium", "Sedentary lifestyle"],
      "treatment": "Calcium and vitamin D supplements, bisphosphonates, exercise"
    },
    {
      "name": "Stroke",
      "symptoms": ["Sudden numbness", "Confusion", "Severe headache", "Difficulty speaking"],
      "causes": ["Blood clot or burst artery in the brain"],
      "treatment": "Emergency medical treatment, rehabilitation"
    },
    {
      "name": "Kidney Disease",
      "symptoms": ["Fatigue", "Swelling", "Shortness of breath", "Changes in urination"],
      "causes": ["Diabetes", "Hypertension", "Infections"],
      "treatment": "Dialysis, kidney transplant, medication"
    },
    {
      "name": "Alzheimer's Disease",
      "symptoms": ["Memory loss", "Confusion", "Difficulty with tasks", "Personality changes"],
      "causes": ["Genetics", "Age", "Brain changes"],
      "treatment": "Medications, memory care, supportive care"
    },
    {
      "name": "Depression",
      "symptoms": ["Persistent sadness", "Loss of interest", "Fatigue", "Sleep disturbances"],
      "causes": ["Genetics", "Stress", "Chemical imbalance in the brain"],
      "treatment": "Therapy, medications (antidepressants), lifestyle changes"
    },
    {
      "name": "Anxiety Disorder",
      "symptoms": ["Excessive worry", "Panic attacks", "Restlessness", "Difficulty concentrating"],
      "causes": ["Genetics", "Stress", "Trauma"],
      "treatment": "Therapy, medications (antidepressants, benzodiazepines), relaxation techniques"
    },
    {
      "name": "Gastritis",
      "symptoms": ["Nausea", "Stomach pain", "Bloating", "Loss of appetite"],
      "causes": ["Infection, alcohol consumption, stress"],
      "treatment": "Antibiotics, antacids, avoiding irritants"
    },
    {
      "name": "Gout",
      "symptoms": ["Severe joint pain", "Redness", "Swelling"],
      "causes": ["Uric acid crystals in the joints"],
      "treatment": "Medications (NSAIDs, colchicine), lifestyle changes"
    },
    {
      "name": "Chronic Sinusitis",
      "symptoms": ["Nasal congestion", "Facial pain", "Headache", "Post-nasal drip"],
      "causes": ["Infections, allergies"],
      "treatment": "Antibiotics, nasal sprays, saline irrigation"
    },
    {
      "name": "Sickle Cell Anemia",
      "symptoms": ["Pain crises", "Fatigue", "Paleness", "Shortness of breath"],
      "causes": ["Inherited genetic mutation"],
      "treatment": "Pain management, blood transfusions, bone marrow transplant"
    },
    {
      "name": "Celiac Disease",
      "symptoms": ["Diarrhea", "Abdominal pain", "Bloating", "Weight loss"],
      "causes": ["Gluten intolerance"],
      "treatment": "Gluten-free diet"
    },
    {
      "name": "Psoriasis",
      "symptoms": ["Red, scaly skin patches", "Itching", "Dry skin"],
      "causes": ["Immune system dysfunction", "Genetics"],
      "treatment": "Topical treatments, phototherapy, systemic medications"
    },
    {
      "name": "Eczema",
      "symptoms": ["Itchy, red patches on skin", "Dry skin"],
      "causes": ["Allergies", "Genetics", "Environmental factors"],
      "treatment": "Topical creams, avoiding irritants, antihistamines"
    },
    {
      "name": "Bronchitis",
      "symptoms": ["Cough", "Shortness of breath", "Chest tightness", "Fatigue"],
      "causes": ["Viral or bacterial infection"],
      "treatment": "Rest, cough medicines, antibiotics (if bacterial)"
    },
    {
      "name": "Food Poisoning",
      "symptoms": ["Vomiting", "Diarrhea", "Abdominal cramps"],
      "causes": ["Bacterial or viral infection, contaminated food"],
      "treatment": "Hydration, rest, antibiotics (if bacterial)"
    }
  ]
  export default diseaseData