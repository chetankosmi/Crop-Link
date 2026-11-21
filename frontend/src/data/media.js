/**
 * CropLink Ultra Pro - Media Directory & Asset Manager
 * Manages all image, video, and vector paths across the application.
 * All media includes verified high-resolution photography with fallback support.
 */

export const MEDIA = {
  // Hero Carousel Backgrounds (5 Realistic Agriculture Images)
  hero: [
    {
      id: 1,
      title: "Growing a Better Future",
      subtitle: "Sustainable Agriculture & Farmer Empowerment",
      description: "Empowering agricultural communities with verified government schemes, modern agronomy insights, and direct market linkage.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80",
      fallback: "/assets/images/hero/paddy_field.svg",
      tag: "Green Paddy Fields"
    },
    {
      id: 2,
      title: "Smart Farming Starts Here",
      subtitle: "Precision Agriculture & IoT Intelligence",
      description: "Harness real-time soil sensors, automated drip irrigation, and weather alerts to boost crop yield while conserving precious water.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1920&q=80",
      fallback: "/assets/images/hero/smart_farming.svg",
      tag: "Precision AgTech"
    },
    {
      id: 3,
      title: "Supporting Every Farmer",
      subtitle: "Government Subsidies & Direct Financial Aid",
      description: "Seamless application access to PM-KISAN, crop insurance, solar pumps, and state subsidies with transparent status tracking.",
      image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1920&q=80",
      fallback: "/assets/images/hero/farmers_work.svg",
      tag: "Indian Farmers in Fields"
    },
    {
      id: 4,
      title: "Technology Meets Agriculture",
      subtitle: "Autonomous Drone Spraying & Modern Tractors",
      description: "Explore smart agri-drones for micronutrient spraying and heavy machinery rentals at subsidized community rates.",
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=1920&q=80",
      fallback: "/assets/images/hero/agriculture_drone.svg",
      tag: "Agriculture Drones"
    },
    {
      id: 5,
      title: "Stronger Farms, Brighter Tomorrow",
      subtitle: "Golden Harvest & Rural Prosperity",
      description: "Cultivating resilient rural economies through scientific guidance, soil health diagnostics, and collective farming power.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1920&q=80",
      fallback: "/assets/images/hero/sunrise_farmland.svg",
      tag: "Sunrise Over Farmlands"
    }
  ],

  // Services Images
  services: {
    subsidies: {
      image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80",
      fallback: "/assets/images/crops/subsidies.svg"
    },
    registration: {
      image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80",
      fallback: "/assets/images/farmers/farmer_reg.svg"
    },
    land: {
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
      fallback: "/assets/images/crops/land_mg.svg"
    },
    cropInfo: {
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80",
      fallback: "/assets/images/crops/crop_info.svg"
    },
    equipment: {
      image: "https://images.unsplash.com/photo-1594771804886-a933bb2d609b?auto=format&fit=crop&w=800&q=80",
      fallback: "/assets/images/machinery/machinery.svg"
    },
    smartAgri: {
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80",
      fallback: "/assets/images/irrigation/smart_agri.svg"
    }
  },

  // Smart Farming Tech Media
  smartFarming: {
    drones: {
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
      fallback: "/assets/images/machinery/drone_sprayer.svg"
    },
    tractors: {
      image: "https://images.unsplash.com/photo-1594771804886-a933bb2d609b?auto=format&fit=crop&w=800&q=80",
      fallback: "/assets/images/machinery/tractor_pro.svg"
    },
    irrigation: {
      image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=800&q=80",
      fallback: "/assets/images/irrigation/drip_irrigation.svg"
    },
    sensors: {
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      fallback: "/assets/images/irrigation/smart_controller.svg"
    }
  },

  // Farmer Success Stories
  farmers: [
    {
      id: 1,
      name: "Rameshwar Patel",
      location: "Anand, Gujarat",
      crop: "Organic Wheat & Groundnut",
      image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80",
      fallback: "/assets/images/farmers/farmer_1.svg",
      story: "With CropLink's guidance on micro-drip subsidies and soil health testing, I reduced fertilizer expense by 38% and harvested 22% higher wheat yield.",
      metric: "+32% Yield Growth",
      scheme: "Soil Health & Drip Subsidy"
    },
    {
      id: 2,
      name: "Lakshmi Devi",
      location: "Warangal, Telangana",
      crop: "Cotton & Chilli",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
      fallback: "/assets/images/farmers/farmer_2.svg",
      story: "Applying for the PM-KISAN and PMFBY crop insurance through CropLink was completely transparent. The payout arrived straight into my bank when floods hit.",
      metric: "100% Insured Protection",
      scheme: "PMFBY & PM-KISAN"
    },
    {
      id: 3,
      name: "Gurpreet Singh",
      location: "Ludhiana, Punjab",
      crop: "Basmati Rice & Mustard",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      fallback: "/assets/images/farmers/farmer_3.svg",
      story: "I rented modern tractor implements and an agri-drone sprayer using CropLink's equipment network. Saved 5 days of manual labor and zero crop damage.",
      metric: "₹45,000 Saved per Season",
      scheme: "Sub-Mission on Agri Mechanization"
    },
    {
      id: 4,
      name: "Biju Kurien",
      location: "Wayanad, Kerala",
      crop: "Spices & High-Density Coffee",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      fallback: "/assets/images/farmers/farmer_4.svg",
      story: "Smart weather forecasting and moisture alerts helped me automate sprinkler timing. My coffee beans scored superior grade in international exports.",
      metric: "+40% Export Value",
      scheme: "National Horticulture Mission"
    }
  ],

  // Educational Agriculture Videos
  videos: [
    {
      id: "v1",
      title: "Modern Drip Irrigation Setup & Subsidies",
      category: "Irrigation",
      duration: "6:45",
      views: "142K views",
      thumbnail: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=800&q=80",
      fallback: "/assets/images/irrigation/drip_irrigation.svg",
      embedUrl: "https://www.youtube.com/embed/P-Y3oU-8n8o",
      description: "Learn how to plan pipe layout, choose emitters, and claim up to 70% state subsidy for precision micro-irrigation."
    },
    {
      id: "v2",
      title: "Agricultural Drone Spraying in Field Crops",
      category: "Machinery",
      duration: "8:20",
      views: "215K views",
      thumbnail: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
      fallback: "/assets/images/machinery/drone_sprayer.svg",
      embedUrl: "https://www.youtube.com/embed/5a2xWfH1d1k",
      description: "Watch certified agri-drones spray 10 acres in under 45 minutes with uniform droplet distribution."
    },
    {
      id: "v3",
      title: "Step-by-Step PM-KISAN Scheme Application",
      category: "Tutorials",
      duration: "5:12",
      views: "389K views",
      thumbnail: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80",
      fallback: "/assets/images/crops/subsidies.svg",
      embedUrl: "https://www.youtube.com/embed/1vR2F8T7i4o",
      description: "Official guide on Aadhar seeding, land document verification, and tracking DBT installment deposits."
    },
    {
      id: "v4",
      title: "Organic Soil Enrichment & Composting",
      category: "Farming",
      duration: "10:15",
      views: "98K views",
      thumbnail: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80",
      fallback: "/assets/images/crops/crop_info.svg",
      embedUrl: "https://www.youtube.com/embed/d2L5vL0K1n8",
      description: "Proven bio-fertilizer and vermicompost methods to restore degraded soil microbial ecosystems."
    },
    {
      id: "v5",
      title: "Smart Solar Water Pumps (PM-KUSUM Guide)",
      category: "Irrigation",
      duration: "7:50",
      views: "176K views",
      thumbnail: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
      fallback: "/assets/images/irrigation/solar_pump.svg",
      embedUrl: "https://www.youtube.com/embed/Mh-0xJ0Y_6Q",
      description: "Everything you need to know about setting up zero-electricity solar pumps on your farm with government support."
    },
    {
      id: "v6",
      title: "Precision Harvester & Combine Operation",
      category: "Machinery",
      duration: "9:35",
      views: "84K views",
      thumbnail: "https://images.unsplash.com/photo-1594771804886-a933bb2d609b?auto=format&fit=crop&w=800&q=80",
      fallback: "/assets/images/machinery/tractor_pro.svg",
      embedUrl: "https://www.youtube.com/embed/zL9oV3W7c4U",
      description: "Best practices for operating combine harvesters to minimize grain shattering and post-harvest losses."
    }
  ]
};
