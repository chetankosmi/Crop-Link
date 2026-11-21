/**
 * CropLink Ultra Pro - Smart Farming Data
 * Covers modern agritech: drones, tractors, smart irrigation, and AI sensors
 */

export const SMART_FARMING_TECH = [
  {
    id: "drones",
    title: "Autonomous Agriculture Drones",
    badge: "Airborne Precision",
    description: "High-capacity agricultural drones capable of spraying 1 acre in 6 minutes with uniform micro-droplets, reducing pesticide wastage by 30% and eliminating toxic farmer exposure.",
    stats: [
      { label: "Spraying Speed", value: "10x Faster" },
      { label: "Water Savings", value: "90% Less Water" },
      { label: "Pesticide Loss", value: "-30% Waste" }
    ],
    highlights: [
      "Centimeter-level RTK GPS navigation",
      "Automated terrain-following radar",
      "Multispectral crop stress detection",
      "Subsidized booking via CropLink"
    ],
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1000&q=80",
    fallback: "/assets/images/machinery/drone_sprayer.svg"
  },
  {
    id: "tractors",
    title: "Next-Gen Smart Tractors & Telemetry",
    badge: "Heavy Machinery",
    description: "Modern tractors equipped with auto-steer GPS, real-time diesel efficiency monitoring, and variable-rate implements for automated seed drilling and laser land leveling.",
    stats: [
      { label: "Fuel Efficiency", value: "+22% Saved" },
      { label: "Field Overlap", value: "< 2 cm Error" },
      { label: "Rental Network", value: "1,200+ Hubs" }
    ],
    highlights: [
      "GPS guided auto-steering kits",
      "Digital engine telemetry & diagnostics",
      "Subsidized custom hiring center booking",
      "Rotavator, laser leveler & seeder attachments"
    ],
    image: "https://images.unsplash.com/photo-1594771804886-a933bb2d609b?auto=format&fit=crop&w=1000&q=80",
    fallback: "/assets/images/machinery/tractor_pro.svg"
  },
  {
    id: "irrigation",
    title: "Automated Precision Drip & Micro-Irrigation",
    badge: "Smart Water",
    description: "Solar-powered irrigation controllers that automatically trigger water and soluble fertilizer delivery based on live soil tensiometer readings and evapotranspiration data.",
    stats: [
      { label: "Water Efficiency", value: "Up to 60%" },
      { label: "Fertilizer Uptake", value: "+40% Absorption" },
      { label: "Electric Bill", value: "Zero (Solar)" }
    ],
    highlights: [
      "Smartphone valve automation & timer schedules",
      "Direct fertigation venture injection",
      "Solar pump integration with PM-KUSUM",
      "Automatic freeze and drought alerts"
    ],
    image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=1000&q=80",
    fallback: "/assets/images/irrigation/drip_irrigation.svg"
  },
  {
    id: "sensors",
    title: "IoT Soil Health & Micro-Climate Stations",
    badge: "Ground Intelligence",
    description: "Compact in-ground probe sensors measuring volumetric soil moisture, electrical conductivity, pH, and root-zone temperatures sent directly to your phone.",
    stats: [
      { label: "Parameters Read", value: "8 Key Metrics" },
      { label: "Battery Life", value: "3 Years Solar" },
      { label: "Yield Protection", value: "+25% Guard" }
    ],
    highlights: [
      "Live N-P-K nutrient status estimation",
      "Root aeration and moisture depth profiling",
      "Localized frost and heatwave forewarnings",
      "Instant advisory recommendations in local languages"
    ],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    fallback: "/assets/images/irrigation/smart_controller.svg"
  }
];
