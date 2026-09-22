export const projects = [
  {
    id: "eega-trust",
    slug: "eega-trust",
    title: "EEGA TRUST CRM",
    client: "EEGA Foundation Global",
    tagline: "High-throughput Donor & Beneficiary Intelligence Platform",
    category: "Enterprise Web Architecture & CRM",
    year: "2025",
    role: "Full-Cycle Product Strategy, UI/UX Systems & Full-Stack Cloud Engineering",
    featuredWidth: "full", // 100% width on editorial rhythm
    accentColor: "#0052FF",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
    ],
    overview: "EEGA Trust coordinates multi-regional philanthropic capital across 14 sovereign territories. Their legacy operations suffered from fragmented donor spreadsheets, delayed disbursements, and manual audit compliance. GENFREX architected an enterprise-grade digital CRM ecosystem unifying real-time donor telemetry, programmatic grant verification, and automated fiscal reporting.",
    challenge: "The platform needed to handle high-frequency transactions with bank-grade encryption, reconcile disparate cross-border tax exemptions, and maintain a frictionless experience for both field volunteers on mobile networks and executive fiduciaries on desktop command centers.",
    solution: "We designed a micro-frontend architecture backed by event-driven serverless services. The interface utilizes a high-density, low-latency design language allowing officers to review audit trails in seconds while automated triggers alert coordinators to pending beneficiary disbursements.",
    metrics: [
      { label: "Capital Disbursed Tracked", value: "$42M+" },
      { label: "Audit Cycle Reduction", value: "-78%" },
      { label: "Active Field Coordinators", value: "3,400+" },
      { label: "System Uptime", value: "99.99%" }
    ],
    techStack: ["React 18", "Node.js Microservices", "PostgreSQL", "Tailwind CSS", "Redis Streams", "AWS GovCloud"],
    deliverables: ["Product Architecture", "Design System & Component Library", "Multi-Tenant CRM Portal", "Automated Compliance Engine"]
  },
  {
    id: "bps-events",
    slug: "bps-events",
    title: "BPS EVENTS",
    client: "BPS Global Entertainment",
    tagline: "Omnichannel Global Event Production & Ticketing Ecosystem",
    category: "Web & Software / Real-Time Systems",
    year: "2025",
    role: "Brand Identity, Immersive Web Application & High-Concurrency Ticketing",
    featuredWidth: "70", // 70% width
    accentColor: "#2563EB",
    heroImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1200&auto=format&fit=crop"
    ],
    overview: "BPS produces stadium-scale live experiential events, technology summits, and world tours. They required an uncompromising digital flagship that matched their cinematic stagecraft while supporting tens of thousands of simultaneous seat bookings during high-demand drops.",
    challenge: "Flash-sale ticket drops routinely overwhelmed legacy web infrastructure, while festival attendees required an offline-first mobile companion for real-time schedule changes, beacon-based venue navigation, and frictionless biometric access.",
    solution: "GENFREX built an ultra-fast headless web platform with dynamic seat-mapping powered by WebGL. We paired this with an edge-cached queueing system that guarantees zero inventory overselling under 150,000 requests per second.",
    metrics: [
      { label: "Peak Concurrent Bookings", value: "82,000/min" },
      { label: "Checkout Completion Rate", value: "94.2%" },
      { label: "Page Load Time", value: "0.4s" },
      { label: "Annual Ticket Gross", value: "$18.5M" }
    ],
    techStack: ["Next.js / React", "WebGL Interactive Canvas", "Go High-Speed Services", "Stripe Connect", "Cloudflare Workers"],
    deliverables: ["Cinematic Digital Flagship", "WebGL Seat Selector Engine", "Mobile Web Companion PWA", "Backstage Staff Scanner App"]
  },
  {
    id: "agri-nexus",
    slug: "agri-nexus",
    title: "AGRI NEXUS",
    client: "Nexus AgriTech Innovations",
    tagline: "Autonomous Precision Agriculture & IoT Sensor Network",
    category: "Smart Agriculture / IoT Platform",
    year: "2024",
    role: "UX Architecture, Real-Time Sensor Telemetry & Analytics Dashboard",
    featuredWidth: "55", // 55% width
    accentColor: "#10B981",
    heroImage: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1600&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1200&auto=format&fit=crop"
    ],
    overview: "Agri Nexus aggregates soil telemetry, drone spectral imagery, and weather predictions for commercial farming consortiums spanning 250,000 acres across agricultural corridors. GENFREX was commissioned to transform raw sensor feeds into proactive crop management decisions.",
    challenge: "Farmers and agronomists were overwhelmed by raw telemetry and unintuitive charts. The platform needed to synthesize gigabytes of sensor readings into actionable irrigation, fertilizer, and pest interception recommendations operable even in low-bandwidth rural conditions.",
    solution: "We engineered an ambient, high-contrast geospatial dashboard that visualizes farm parcels with instant NDVI heat maps. A predictive ML pipeline flags micro-climate risks 72 hours before visible symptoms occur.",
    metrics: [
      { label: "Water Consumption Reduced", value: "-31%" },
      { label: "Yield Predictability", value: "96.4%" },
      { label: "Monitored Land Area", value: "250K Acres" },
      { label: "Offline Sync Reliability", value: "100%" }
    ],
    techStack: ["React", "Mapbox GL", "Python Data Pipelines", "TimescaleDB", "Tailwind CSS", "IndexedDB Offline Sync"],
    deliverables: ["Geospatial Field UI", "IoT Ingestion Pipeline", "Predictive Yield Engine", "Field Agronomist Tablet App"]
  },
  {
    id: "smilecare",
    slug: "smilecare",
    title: "SMILECARE",
    client: "SmileCare Clinical Network",
    tagline: "Next-Gen Multi-Clinic Healthcare & Patient Journey Suite",
    category: "HealthTech & Clinic Management",
    year: "2024",
    role: "Patient Experience Strategy, HIPAA-Compliant Clinic Management & Telehealth",
    featuredWidth: "65", // 65% width
    accentColor: "#0052FF",
    heroImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop"
    ],
    overview: "SmileCare operates 28 dental centers specializing in orthodontics and cosmetic oral surgery. Their patient onboarding was plagued by disjointed paper intake forms and fragmented imaging software that frustrated patients and slowed clinicians.",
    challenge: "Deliver a calm, reassuring digital patient onboarding experience integrated with rigorous HIPAA-grade EHR compliance, 3D oral scan rendering, and multi-location chair availability scheduling.",
    solution: "GENFREX formulated an end-to-end digital clinic operating system. Patients complete interactive medical histories on their phone prior to arrival, while clinical teams manage chairs, supplies, and treatment plans in a unified dark-mode workstation designed to reduce eye strain.",
    metrics: [
      { label: "Patient Check-in Time", value: "2.1 min" },
      { label: "No-Show Appointment Rate", value: "-44%" },
      { label: "Patient Satisfaction (CSAT)", value: "98.7%" },
      { label: "Digital Records Migrated", value: "120,000+" }
    ],
    techStack: ["React", "TypeScript", "Node.js", "Docker", "HIPAA Compliant AWS", "Tailwind CSS"],
    deliverables: ["Patient Portal Web App", "Doctor Clinical Console", "Automated SMS/Email Notification Engine", "DICOM Imaging Viewer Integration"]
  },
  {
    id: "public-eye",
    slug: "public-eye",
    title: "PUBLIC EYE",
    client: "Metropolitan Civic Governance Council",
    tagline: "Civic Redressal, Public Infrastructure & AI Complaint Triaging",
    category: "CivicTech & Smart Governance",
    year: "2024",
    role: "Civic UI/UX Design, Geo-Tagged Grievance Engine & Public Transparency Portal",
    featuredWidth: "full", // 100% width
    accentColor: "#3B82F6",
    heroImage: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?q=80&w=1600&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1200&auto=format&fit=crop"
    ],
    overview: "Public Eye is an open civic accountability network serving 2.2 million urban citizens. It empowers residents to photograph, report, and monitor infrastructure failures—from road hazards to water grid interruptions—with guaranteed government SLAs.",
    challenge: "Citizens distrusted municipal complaint portals due to bureaucratic opacity and lack of follow-through. City engineers were conversely buried under duplicate reports and incomplete location data.",
    solution: "GENFREX built an accessible, transparent civic engagement platform featuring automatic duplicate clustering via computer vision, geo-fenced assignment to local municipal zones, and a public status dashboard updated in real-time by field crews.",
    metrics: [
      { label: "Mean Resolution Time", value: "-62%" },
      { label: "Citizen Reports Resolved", value: "88,000+" },
      { label: "Active Monthly Citizens", value: "410,000" },
      { label: "Municipal SLA Adherence", value: "96.1%" }
    ],
    techStack: ["React", "FastAPI", "PostGIS / PostgreSQL", "Tailwind CSS", "TensorFlow Lite", "WebSockets"],
    deliverables: ["Citizen Mobile-First Portal", "Field Crew Dispatch Suite", "Public Transparency Board", "Automated SLA Escalation Engine"]
  }
];
