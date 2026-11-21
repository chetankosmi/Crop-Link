/**
 * CropLink Ultra Pro - Government Schemes Data
 * Detailed real-world schemes with eligibility, benefits, and tags
 */

export const SCHEMES = [
  {
    id: "pm-kisan",
    title: "PM-KISAN Samman Nidhi",
    shortName: "PM-KISAN",
    department: "Ministry of Agriculture & Farmers Welfare",
    benefit: "₹6,000 / year",
    benefitPeriod: "Direct Bank Transfer in 3 equal installments",
    category: "Financial Support",
    badge: "Popular",
    description: "Income support scheme for all landholding farmer families across India to supplement their agricultural and domestic financial needs.",
    eligibility: [
      "All landholding small and marginal farmers",
      "Valid Aadhar linked bank account",
      "Land ownership records verified with revenue department"
    ],
    documents: ["Aadhaar Card", "Land Khatauni / Record of Rights", "Bank Passbook"],
    deadline: "Open All Year",
    status: "Active"
  },
  {
    id: "pmfby",
    title: "Pradhan Mantri Fasal Bima Yojana",
    shortName: "PMFBY",
    department: "Department of Agriculture Cooperation & Farmers Welfare",
    benefit: "Up to 100% Crop Value",
    benefitPeriod: "Instant payout against natural calamities & localized disasters",
    category: "Crop Insurance",
    badge: "Essential",
    description: "Comprehensive financial support to farmers suffering crop loss or damage due to unseasonal rain, pests, hail, and drought at minimal premium rates.",
    eligibility: [
      "All farmers growing notified crops in notified areas",
      "Sharecroppers and tenant farmers eligible with lease deed",
      "Both loanee and non-loanee farmers eligible"
    ],
    documents: ["Aadhaar Card", "Crop Sowing Certificate", "Land Records", "Bank Details"],
    deadline: "Before Sowing Window Closes",
    status: "Active"
  },
  {
    id: "pm-kusum",
    title: "PM-KUSUM Solar Pump Scheme",
    shortName: "PM-KUSUM",
    department: "Ministry of New & Renewable Energy",
    benefit: "Up to 60% Subsidy",
    benefitPeriod: "Installation of 3HP to 7.5HP solar powered water pumps",
    category: "Renewable Energy",
    badge: "High Subsidy",
    description: "Replace diesel pumps with grid-independent solar water pumps. Lowers irrigation costs to zero and provides surplus power generation income.",
    eligibility: [
      "Individual farmers, water user associations & FPOs",
      "Adequate land with verifiable agricultural groundwater source",
      "No prior subsidized solar pump installation"
    ],
    documents: ["Aadhaar Card", "Land Ownership Documents", "Bank Account", "Electricity Bill (if grid-tied)"],
    deadline: "Quarterly Allotment",
    status: "Active"
  },
  {
    id: "soil-health",
    title: "Soil Health Card Mission",
    shortName: "Soil Health Card",
    department: "National Mission for Sustainable Agriculture",
    benefit: "100% Free Diagnostics",
    benefitPeriod: "Soil report issued once every 2 years with nutrient advice",
    category: "Soil & Health",
    badge: "Recommended",
    description: "Detailed nutrient status report covering 12 soil parameters (N, P, K, pH, Zinc, etc.) and customized dosage recommendations to reduce chemical overuse.",
    eligibility: [
      "All practicing farmers across Indian states and union territories",
      "Available via nearest Krishi Vigyan Kendra (KVK) or CropLink portal"
    ],
    documents: ["Soil Sample (assisted collection)", "Aadhaar Card", "Survey Number"],
    deadline: "Always Open",
    status: "Active"
  },
  {
    id: "smam",
    title: "Sub-Mission on Agri Mechanization",
    shortName: "SMAM Machinery",
    department: "Mechanization & Technology Division",
    benefit: "40% to 50% Subsidy",
    benefitPeriod: "Discount on tractors, rotavators, power tillers & drones",
    category: "Equipment",
    badge: "Tech Subsidy",
    description: "Subsidies for procurement of modern agricultural machinery and setting up Custom Hiring Centers (CHCs) for village-level farmer groups.",
    eligibility: [
      "Small and marginal farmers, SC/ST, and women farmers given 50% priority",
      "Registered farmer producer organizations (FPOs)"
    ],
    documents: ["Aadhaar Card", "Land Documents", "Quotation from authorized dealer", "Bank Details"],
    deadline: "Financial Year Cycle",
    status: "Active"
  },
  {
    id: "micro-irrigation",
    title: "Per Drop More Crop (Micro Irrigation)",
    shortName: "Drip & Sprinkler",
    department: "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)",
    benefit: "55% Capital Subsidy",
    benefitPeriod: "Drip, micro-sprinklers and rain gun systems installation",
    category: "Water Management",
    badge: "Eco Friendly",
    description: "Maximizes water productivity with high-efficiency drip networks, saving up to 60% water while increasing yield by 30-40%.",
    eligibility: [
      "Farmers having assured irrigation water source",
      "Minimum 0.2 hectare landholding"
    ],
    documents: ["Aadhaar Card", "7/12 Extract or equivalent land record", "Water source proof"],
    deadline: "Continuous Intake",
    status: "Active"
  }
];

export const SCHEME_CATEGORIES = [
  "All",
  "Financial Support",
  "Crop Insurance",
  "Renewable Energy",
  "Soil & Health",
  "Equipment",
  "Water Management"
];
