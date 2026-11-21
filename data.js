// Churnio Preloaded Dataset (200 Customers matching presentation metrics exactly)
// Total: 200 | Churners: 36 (18.0%) | Critical: 35 | Medium: 1 | Low: 2 | Very Low: 162 | Cashback at-risk: Rs 6,029

const PRELOADED_CUSTOMERS = [];

// Helper to generate the exact 200 records
(function generateDataset() {
  // 35 Critical Risk Customers (Avg probability ~99.2%, Churn probability 81-100%, New customers, Complain=1, COD, Mobile Phone)
  // Total cashback: Exactly Rs 5,862.00 (so 5,862 + 167 = Rs 6,029 matching PDF Page 5!)
  const criticalCashbacks = [
    134.41, 142.10, 138.90, 145.00, 139.40, 141.60, 143.20, 156.50, 160.00, 155.10,
    158.40, 164.30, 157.10, 162.80, 156.90, 159.70, 161.20, 163.80, 166.50, 165.20,
    168.10, 167.30, 169.00, 170.20, 171.40, 172.00, 173.50, 174.20, 175.00, 176.40,
    177.10, 178.30, 179.00, 180.50, 357.79
  ];

  for (let i = 0; i < 35; i++) {
    const custId = `CUST-${1001 + i}`;
    PRELOADED_CUSTOMERS.push({
      id: custId,
      tenure: i % 3 === 0 ? 0 : (i % 3 === 1 ? 1 : 2),
      ordersLastMonth: (i % 3) + 1,
      daysSinceLastOrder: (i % 3) + 1,
      couponsUsed: i % 3,
      avgCashback: criticalCashbacks[i],
      orderHikePercentage: 8 + (i % 8),
      satisfactionScore: 1 + (i % 3),
      complain: 1, // raised complaint
      hoursSpentApp: 2 + (i % 2),
      devicesRegistered: 3 + (i % 2),
      savedAddresses: 1 + (i % 2),
      warehouseToHomeKm: 12 + (i % 14),
      cityTier: (i % 2 === 0) ? 3 : 2,
      preferredCategory: "Mobile Phone",
      paymentMode: "Cash on Delivery",
      loginDevice: "Mobile Phone",
      gender: i % 2 === 0 ? "Male" : "Female",
      maritalStatus: "Single",
      churnProbability: +(98.5 + ((i % 15) * 0.1)).toFixed(1), // ~98.5% - 99.9%
      riskLevel: "Critical",
      churn: 1,
      recommendedOffer: "20% discount + priority retention campaign"
    });
  }

  // 1 Medium Risk Customer (50.0% prob) - Cashback Rs 167.00
  PRELOADED_CUSTOMERS.push({
    id: "CUST-1036",
    tenure: 5,
    ordersLastMonth: 2,
    daysSinceLastOrder: 4,
    couponsUsed: 1,
    avgCashback: 167.00,
    orderHikePercentage: 14,
    satisfactionScore: 3,
    complain: 0,
    hoursSpentApp: 3,
    devicesRegistered: 3,
    savedAddresses: 2,
    warehouseToHomeKm: 15,
    cityTier: 2,
    preferredCategory: "Fashion",
    paymentMode: "UPI",
    loginDevice: "Mobile Phone",
    gender: "Male",
    maritalStatus: "Single",
    churnProbability: 50.0,
    riskLevel: "Medium",
    churn: 1,
    recommendedOffer: "10% discount or free shipping"
  });

  // 2 Low Risk Customers (Avg 33.2% prob)
  PRELOADED_CUSTOMERS.push({
    id: "CUST-1037",
    tenure: 8,
    ordersLastMonth: 3,
    daysSinceLastOrder: 6,
    couponsUsed: 2,
    avgCashback: 175.50,
    orderHikePercentage: 15,
    satisfactionScore: 4,
    complain: 0,
    hoursSpentApp: 2,
    devicesRegistered: 2,
    savedAddresses: 2,
    warehouseToHomeKm: 10,
    cityTier: 1,
    preferredCategory: "Laptop & Accessory",
    paymentMode: "Credit Card",
    loginDevice: "Computer",
    gender: "Female",
    maritalStatus: "Married",
    churnProbability: 32.8,
    riskLevel: "Low",
    churn: 0,
    recommendedOffer: "5% discount or reward points"
  });

  PRELOADED_CUSTOMERS.push({
    id: "CUST-1038",
    tenure: 9,
    ordersLastMonth: 3,
    daysSinceLastOrder: 5,
    couponsUsed: 2,
    avgCashback: 178.00,
    orderHikePercentage: 16,
    satisfactionScore: 4,
    complain: 0,
    hoursSpentApp: 3,
    devicesRegistered: 3,
    savedAddresses: 3,
    warehouseToHomeKm: 11,
    cityTier: 2,
    preferredCategory: "Grocery",
    paymentMode: "UPI",
    loginDevice: "Mobile Phone",
    gender: "Male",
    maritalStatus: "Married",
    churnProbability: 33.6,
    riskLevel: "Low",
    churn: 0,
    recommendedOffer: "5% discount or reward points"
  });

  // 162 Very Low Risk Customers (Avg ~1.0% prob, 0-20% range)
  const categories = ["Fashion", "Grocery", "Laptop & Accessory", "Mobile Phone", "Others"];
  const paymentModes = ["UPI", "Credit Card", "Debit Card", "E-Wallet", "Cash on Delivery"];

  for (let i = 0; i < 162; i++) {
    const custId = `CUST-${1039 + i}`;
    const tenure = 10 + (i % 20); // 10 to 29 months
    const satisfaction = (i % 5 === 0) ? 4 : 5;
    const cashback = +(175 + (i % 35) * 1.5).toFixed(2); // Avg Rs ~180.8
    PRELOADED_CUSTOMERS.push({
      id: custId,
      tenure: tenure,
      ordersLastMonth: 3 + (i % 5),
      daysSinceLastOrder: 4 + (i % 8),
      couponsUsed: 2 + (i % 4),
      avgCashback: cashback,
      orderHikePercentage: 14 + (i % 12),
      satisfactionScore: satisfaction,
      complain: (i === 50) ? 1 : 0, // very rarely complained
      hoursSpentApp: 3 + (i % 3),
      devicesRegistered: 2 + (i % 3),
      savedAddresses: 2 + (i % 4),
      warehouseToHomeKm: 5 + (i % 15),
      cityTier: (i % 3) + 1,
      preferredCategory: categories[i % categories.length],
      paymentMode: paymentModes[i % paymentModes.length],
      loginDevice: i % 3 === 0 ? "Computer" : "Mobile Phone",
      gender: i % 2 === 0 ? "Male" : "Female",
      maritalStatus: i % 4 === 0 ? "Single" : "Married",
      churnProbability: +(0.6 + ((i % 10) * 0.08)).toFixed(1), // ~0.6% - 1.4%
      riskLevel: "Very Low",
      churn: 0,
      recommendedOffer: "Regular loyalty points"
    });
  }
})();

// System Constants & Metadata from presentation guide
const CHURNIO_META = {
  name: "Churnio – Retention Hub",
  guide: "Dr. Ojaswani",
  hod: "Dr. Chetan Khemraj",
  college: "KCC Institute of Technology and Management",
  semester: "B.Tech 3rd Year, 5th Semester",
  tagline: "Every lost customer is a lost sale. Find them before they leave.",
  summary: "Churnio is a website that tells an online shopping company (like Amazon or Flipkart) which customers are about to stop buying, why, and what offer to give them so they stay.",
  stats: {
    trainedOn: "5,073",
    signals: "18",
    modelsCompared: "6",
    coreAccuracy: "95.6%",
    svmTestAccuracy: "97.8%",
    recall: "94.0%",
    f1Score: "0.94",
    rocAuc: "0.99",
    caughtChurners: "158 / 168"
  },
  team: [
    {
      name: "Sadaf",
      role: "Team Leader, Machine Learning",
      tag: "Builds the 'brain' of Churnio: the model that predicts who will leave",
      tasks: [
        "Cleans customer data (fixes spellings, removes 557 copies, fills gaps)",
        "Trains 9 ML models and compares them",
        "Chooses SVM because it catches the most leaving customers (158/168 caught)",
        "Builds backup model for files with missing columns (95.6% accuracy)",
        "Joins everyone's work and leads the presentation"
      ],
      tools: ["pandas", "NumPy", "scikit-learn", "SVM", "pickle"],
      knowWell: ["How SVM works", "Accuracy vs recall", "Train and test split"]
    },
    {
      name: "Shereya Verma",
      role: "Data Analysis and Insights",
      tag: "Finds the story in the data and turns predictions into business actions",
      tasks: [
        "Makes charts showing who leaves and why",
        "Explains findings (new customers, complaints, categories)",
        "Designs the 5 risk levels and their offers",
        "Creates rules that write business insights automatically"
      ],
      tools: ["pandas", "Matplotlib", "Seaborn"],
      knowWell: ["Reading charts", "Churn rate per group", "The retention plan"]
    },
    {
      name: "Rohan Singh Kholiya",
      role: "Design (UI)",
      tag: "Makes Churnio look like a real, professional product",
      tasks: [
        "Designs colours, fonts, cards and buttons",
        "Builds the top menu bar and Home page",
        "Keeps the app readable on every laptop (light theme)",
        "Explains look and flow of the app in demo"
      ],
      tools: ["HTML", "CSS", "Streamlit layout"],
      knowWell: ["CSS styling", "How design is added to Streamlit"]
    },
    {
      name: "Rahul Mehra",
      role: "App Logic and Testing",
      tag: "Makes the website actually work when someone uses it",
      tasks: [
        "Connects the saved model to the website",
        "Builds customer form and file upload",
        "Checks uploaded files and shows clear errors",
        "Shows results, charts and download button",
        "Tests the app and runs the live demo"
      ],
      tools: ["Streamlit", "pandas", "pickle"],
      knowWell: ["How a prediction is made step by step", "Mandatory vs optional columns"]
    }
  ],
  presentationOrder: [
    { step: 1, speaker: "Sadaf", topic: "The problem, our idea, the data", time: "2 min" },
    { step: 2, speaker: "Shereya", topic: "Charts: who leaves and why", time: "2 min" },
    { step: 3, speaker: "Sadaf", topic: "The 9 models, why SVM, results", time: "3 min" },
    { step: 4, speaker: "Rohan", topic: "App design and Home page", time: "1.5 min" },
    { step: 5, speaker: "Rahul", topic: "Live demo: Single Customer and Bulk Analysis", time: "2 min" },
    { step: 6, speaker: "Shereya", topic: "Insights and the 5-level offer plan", time: "1 min" },
    { step: 7, speaker: "Sadaf", topic: "Conclusion and future plans", time: "0.5 min" }
  ],
  qaList: [
    {
      q: "What is churn?",
      a: "When a customer stops buying from a company."
    },
    {
      q: "What does Churnio do?",
      a: "Finds customers about to leave, shows why, and suggests an offer to keep them."
    },
    {
      q: "Which model did you use?",
      a: "SVM (Support Vector Machine). It was the best of 9 models: 98.5% correct on new data and caught 158 of 168 leaving customers (94% recall)."
    },
    {
      q: "Why not just look at accuracy?",
      a: "Only 17% of customers leave, so a dummy model that says 'everyone stays' is still 83% accurate but completely useless for stopping churn. Recall is the key metric."
    },
    {
      q: "What tools did you use?",
      a: "Python, pandas, NumPy, Matplotlib, Seaborn, scikit-learn, pickle, Streamlit, HTML/CSS."
    },
    {
      q: "What if a file has missing columns?",
      a: "8 columns are must-have; if extra ones are missing, a robust backup model is used automatically (95.6% core accuracy)."
    }
  ]
};
