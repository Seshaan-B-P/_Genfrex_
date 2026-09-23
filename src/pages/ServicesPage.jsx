import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  ArrowRight, 
  ArrowDown, 
  Check, 
  Sparkles, 
  Search, 
  TrendingUp, 
  Share2, 
  Palette, 
  Monitor, 
  Cpu, 
  Users, 
  Layers,
  CheckCircle2,
  FileText,
  BarChart3,
  Globe2,
  Workflow as WorkflowIcon,
  Zap,
  Target
} from 'lucide-react';
import QuoteModal from '../components/QuoteModal';

// --- 8 CORE SERVICES DATA ---
const SERVICES = [
  {
    number: "01",
    total: "08",
    id: "performance-marketing",
    category: "PERFORMANCE MARKETING",
    title: "TURN MARKETING SPEND INTO MEANINGFUL ACTION.",
    shortTitle: "Performance Marketing",
    icon: TrendingUp,
    description: "We plan, launch, monitor, and optimize digital advertising campaigns designed to reach the right audience and drive measurable business outcomes.",
    capabilities: [
      "Google Ads",
      "Meta Ads",
      "Paid Social Campaigns",
      "Search Advertising",
      "Display Campaigns",
      "Audience Research",
      "Campaign Strategy",
      "Conversion Optimization",
      "Retargeting",
      "Performance Tracking",
      "Campaign Analytics"
    ],
    highlightLabel: "BUILT FOR",
    highlights: ["Lead Generation", "Sales", "Brand Awareness", "Customer Acquisition"],
    gradient: "from-[#0052FF]/20 via-[#0052FF]/5 to-transparent",
    accentColor: "#0052FF"
  },
  {
    number: "02",
    total: "08",
    id: "seo-ai-search",
    category: "SEO & AI SEARCH",
    title: "GET FOUND. STAY RELEVANT.",
    shortTitle: "SEO & AI Search",
    icon: Search,
    description: "Search is changing. From traditional search engines to AI-powered answer engines, brands need a stronger digital presence across the entire discovery journey.",
    capabilities: [
      "Technical SEO",
      "On-Page SEO",
      "Keyword Research",
      "Competitor Analysis",
      "Local SEO",
      "Off-Page SEO",
      "Link Building",
      "Content Strategy",
      "Topic Clusters",
      "AI Search Optimization",
      "LLM Visibility",
      "Entity Optimization",
      "Structured Content"
    ],
    highlightLabel: "BUILT FOR",
    highlights: ["Organic Visibility", "Local Discovery", "Search Growth", "AI Search Presence"],
    gradient: "from-cyan-500/20 via-cyan-500/5 to-transparent",
    accentColor: "#00D4FF"
  },
  {
    number: "03",
    total: "08",
    id: "social-media-content",
    category: "SOCIAL MEDIA & CONTENT",
    title: "CREATE CONTENT PEOPLE WANT TO ENGAGE WITH.",
    shortTitle: "Social Media & Content",
    icon: Share2,
    description: "Social media is more than posting consistently. We develop content strategies that help brands communicate clearly, stay relevant, and build meaningful audience relationships.",
    capabilities: [
      "Social Media Strategy",
      "Content Planning",
      "Content Calendars",
      "Platform Optimization",
      "Social Media SEO",
      "Captions & Copywriting",
      "Creative Content",
      "Campaign Content",
      "Audience Engagement",
      "Performance Analysis"
    ],
    highlightLabel: "PLATFORMS",
    highlights: ["Instagram", "Facebook", "LinkedIn", "YouTube", "Other Platforms"],
    gradient: "from-[#0052FF]/20 via-blue-400/5 to-transparent",
    accentColor: "#2B73FF"
  },
  {
    number: "04",
    total: "08",
    id: "brand-creative",
    category: "BRAND & CREATIVE",
    title: "MAKE YOUR BRAND RECOGNIZABLE.",
    shortTitle: "Brand & Creative",
    icon: Palette,
    description: "A strong digital presence starts with a brand people can remember. We create visual and communication systems that help businesses present themselves consistently across digital channels.",
    capabilities: [
      "Brand Strategy",
      "Brand Positioning",
      "Visual Identity",
      "Logo & Brand Systems",
      "Creative Direction",
      "Social Media Creatives",
      "Campaign Creatives",
      "Digital Branding",
      "Marketing Collateral",
      "Business Graphics"
    ],
    highlightLabel: "FOCUS",
    highlights: ["Clarity", "Consistency", "Recognition", "Digital Presence"],
    gradient: "from-[#0052FF]/20 via-indigo-500/5 to-transparent",
    accentColor: "#0052FF"
  },
  {
    number: "05",
    total: "08",
    id: "web-conversion",
    category: "WEB & CONVERSION",
    title: "TURN DIGITAL VISITS INTO MEANINGFUL ACTION.",
    shortTitle: "Web & Conversion",
    icon: Monitor,
    description: "Your website should do more than look good. It should communicate your value, build trust, and guide visitors toward action.",
    capabilities: [
      "Business Websites",
      "Corporate Websites",
      "Landing Pages",
      "Portfolio Websites",
      "WordPress Development",
      "E-commerce Websites",
      "Custom Web Experiences",
      "Website Optimization",
      "Analytics Integration",
      "API Integrations",
      "Maintenance & Support"
    ],
    highlightLabel: "FOCUS",
    highlights: ["Performance", "User Experience", "Conversion", "Scalability"],
    gradient: "from-blue-600/20 via-cyan-600/5 to-transparent",
    accentColor: "#1E6FFF"
  },
  {
    number: "06",
    total: "08",
    id: "ai-digital-innovation",
    category: "AI & DIGITAL INNOVATION",
    title: "BUILD SMARTER DIGITAL WORKFLOWS.",
    shortTitle: "AI & Innovation",
    icon: Cpu,
    description: "AI is becoming part of how modern businesses research, create, communicate, and operate. GENFREX helps businesses identify practical opportunities to integrate AI and automation into their digital workflows.",
    supportingStatement: "Technology should solve a real business problem — not simply exist because it is new.",
    capabilities: [
      "AI Marketing Workflows",
      "AI Search Optimization",
      "AI-Assisted Research",
      "Content Workflows",
      "Marketing Automation",
      "Workflow Automation",
      "Data & Analytics",
      "Intelligent Digital Systems",
      "AI-Powered Productivity"
    ],
    highlightLabel: "APPROACH",
    highlights: ["Business Problem First", "Measurable ROI", "Workflow Efficiency", "Safe Human Oversight"],
    gradient: "from-cyan-500/20 via-[#0052FF]/10 to-transparent",
    accentColor: "#00D4FF"
  },
  {
    number: "07",
    total: "08",
    id: "content-creative-production",
    category: "CONTENT & CREATIVE PRODUCTION",
    title: "CONTENT THAT SUPPORTS YOUR MARKETING.",
    shortTitle: "Content Production",
    icon: FileText,
    description: "From search content to social media assets, we create content designed around the platform, audience, and objective.",
    capabilities: [
      "SEO Blogs",
      "Long-Form Articles",
      "Website Content",
      "Landing Page Copy",
      "Social Media Copy",
      "Content Ideas",
      "Content Calendars",
      "Promotional Videos",
      "Short-Form Video",
      "Social Media Creatives",
      "Digital Branding Assets"
    ],
    highlightLabel: "FOCUS",
    highlights: ["Platform Alignment", "Audience Objective", "Voice Consistency", "Retention"],
    gradient: "from-[#0052FF]/20 via-blue-500/5 to-transparent",
    accentColor: "#0052FF"
  },
  {
    number: "08",
    total: "08",
    id: "digital-talent-solutions",
    category: "DIGITAL TALENT SOLUTIONS",
    title: "THE RIGHT TALENT FOR THE RIGHT REQUIREMENT.",
    shortTitle: "Digital Talent",
    icon: Users,
    description: "When a project requires additional expertise, GENFREX can connect businesses with suitable digital professionals based on project requirements.",
    capabilities: [
      "Front-End Developers",
      "Back-End Developers",
      "Full-Stack Developers",
      "WordPress Developers",
      "SEO Specialists",
      "Digital Marketers",
      "Social Media Specialists",
      "Content Strategists",
      "Graphic Designers",
      "Video Editors",
      "Content Creators",
      "Creative Professionals"
    ],
    talentCategories: [
      {
        name: "DEVELOPMENT",
        roles: ["Front-End Developers", "Back-End Developers", "Full-Stack Developers", "WordPress Developers"]
      },
      {
        name: "MARKETING",
        roles: ["SEO Specialists", "Digital Marketers", "Social Media Specialists", "Content Strategists"]
      },
      {
        name: "CREATIVE",
        roles: ["Graphic Designers", "Video Editors", "Content Creators", "Creative Professionals"]
      }
    ],
    projectSquadNote: "Need more than one specialist? We can help structure project-based teams combining developers, designers, marketers, content professionals, and other required talent.",
    highlightLabel: "STRUCTURE",
    highlights: ["Project-Based Squads", "Flexible Onboarding", "Vetted Quality", "Dedicated Handover"],
    gradient: "from-[#0052FF]/20 via-sky-500/5 to-transparent",
    accentColor: "#2B73FF"
  }
];

// --- 6 PROCESS PHASES ---
const PROCESS_STEPS = [
  {
    num: "01",
    name: "DISCOVER",
    desc: "Understand the business, audience, goals, challenges, current digital presence, and requirements."
  },
  {
    num: "02",
    name: "STRATEGIZE",
    desc: "Identify opportunities and create a focused strategy based on objectives, market, timeline, and budget."
  },
  {
    num: "03",
    name: "CREATE",
    desc: "Develop campaigns, content, creatives, websites, and digital assets required for execution."
  },
  {
    num: "04",
    name: "LAUNCH",
    desc: "Put the strategy into action across relevant digital channels and platforms."
  },
  {
    num: "05",
    name: "OPTIMIZE",
    desc: "Monitor performance, analyze data, identify opportunities, and continuously improve execution."
  },
  {
    num: "06",
    name: "GROW",
    desc: "Scale what works, refine what doesn't, and identify new opportunities for sustainable digital growth."
  }
];

// --- WHY GENFREX 6 EDITORIAL POINTS ---
const WHY_POINTS = [
  {
    num: "01",
    title: "STRATEGY FIRST",
    desc: "Every engagement starts with understanding the business objective."
  },
  {
    num: "02",
    title: "CONNECTED CAPABILITIES",
    desc: "Marketing, creative, technology, content, and AI can work together instead of operating in isolation."
  },
  {
    num: "03",
    title: "FLEXIBLE ENGAGEMENT",
    desc: "Choose a project-based, monthly, or customized engagement based on your requirements."
  },
  {
    num: "04",
    title: "AI-READY",
    desc: "We consider AI-powered search, automation, analytics, and intelligent workflows where they create genuine value."
  },
  {
    num: "05",
    title: "CUSTOM SOLUTIONS",
    desc: "No two businesses have exactly the same requirements. Our approach adapts to the project."
  },
  {
    num: "06",
    title: "GROWTH FOCUSED",
    desc: "Every activity should contribute to a larger objective — stronger visibility, better engagement, meaningful action, or sustainable growth."
  }
];

// --- ENGAGEMENT MODELS ---
const ENGAGEMENT_MODELS = [
  {
    type: "PROJECT-BASED",
    tag: "DEFINED SCOPE",
    desc: "For businesses that need a specific digital project or defined deliverable.",
    examples: [
      "Websites",
      "Campaigns",
      "Branding",
      "SEO Projects",
      "Creative Projects",
      "Digital Launches"
    ]
  },
  {
    type: "MONTHLY",
    tag: "CONTINUOUS GROWTH",
    desc: "For businesses that need continuous digital marketing, optimization, content, or technical support.",
    examples: [
      "SEO",
      "Social Media",
      "Performance Marketing",
      "Content",
      "Website Maintenance",
      "Digital Growth"
    ]
  },
  {
    type: "CUSTOM",
    tag: "FLEXIBLE SQUADS",
    desc: "For businesses requiring a combination of multiple capabilities or a dedicated project team.",
    examples: [
      "Growth Programs",
      "Digital Transformation",
      "Campaign Teams",
      "Technology + Marketing Projects"
    ]
  }
];

export default function ServicesPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  // Set page title & SEO metadata
  useEffect(() => {
    document.title = "GENFREX Services | Digital Marketing, SEO & Digital Growth";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore GENFREX digital marketing services including performance marketing, SEO, AI search optimization, social media, creative, web development, content, and digital innovation."
      );
    }
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeService = SERVICES[activeTab];

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen relative overflow-hidden font-sans">
      
      {/* ── BACKGROUND AMBIENT GLOWS (Matching GENFREX Design System) ── */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] h-[450px] bg-gradient-to-r from-blue-600/15 via-[#0052FF]/25 to-cyan-500/15 blur-[140px] rounded-full z-0" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-[#0052FF]/10 blur-[150px] rounded-full z-0" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-[10%] left-[-10%] w-[450px] h-[450px] bg-[#0052FF]/10 blur-[130px] rounded-full z-0" 
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">

        {/* =============================================================
            01 ─ HERO SECTION
            ============================================================= */}
        <section className="pt-32 sm:pt-40 md:pt-48 pb-20 md:pb-28 text-center max-w-4xl mx-auto">
          
          {/* Eyebrow Pill */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-white/80 mb-6 backdrop-blur-md"
          >
            <Sparkles size={14} className="text-[#0052FF]" />
            <span className="tracking-widest uppercase font-mono text-[11px] text-[#0052FF] font-semibold">
              SERVICES
            </span>
            <span className="text-white/30">•</span>
            <span className="text-neutral-300">DIGITAL MARKETING AGENCY</span>
          </motion.div>

          {/* Main Headline (Single H1) */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extralight tracking-tight leading-[1.08] text-white mb-6"
          >
            DIGITAL SERVICES <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#0052FF]">
              BUILT FOR GROWTH.
            </span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-neutral-400 font-light text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-4"
          >
            From strategy and search to performance marketing, social media, creative, web, and AI — GENFREX brings the capabilities your brand needs to grow in a connected digital ecosystem.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-neutral-500 font-light text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-10"
          >
            We don't just create digital activity. We build strategies designed to create visibility, engagement, action, and sustainable growth.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollToSection('services-intro')}
              className="px-8 py-3.5 rounded-full bg-[#0052FF] hover:bg-[#1E6FFF] text-white text-xs sm:text-sm font-medium tracking-wider uppercase transition-all duration-300 flex items-center gap-2 shadow-[0_10px_25px_-5px_rgba(0,82,255,0.4)] hover:translate-y-[-2px]"
            >
              <span>EXPLORE OUR SERVICES</span>
              <ArrowDown size={15} />
            </button>

            <button
              onClick={() => setIsQuoteOpen(true)}
              className="px-8 py-3.5 rounded-full bg-transparent hover:bg-white/[0.04] text-white border border-white/20 hover:border-white/50 text-xs sm:text-sm font-medium tracking-wider uppercase transition-all duration-300 flex items-center gap-2"
            >
              <span>START A CONVERSATION</span>
              <ArrowRight size={15} />
            </button>
          </motion.div>

        </section>

        {/* =============================================================
            02 ─ SERVICES INTRO
            ============================================================= */}
        <section 
          id="services-intro" 
          className="py-16 md:py-24 border-t border-white/[0.08]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="eyebrow">WHAT WE DO</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white leading-tight">
                ONE AGENCY. <br />
                <span className="font-medium text-[#0052FF]">MULTIPLE DIGITAL CAPABILITIES.</span>
              </h2>
            </div>

            <div className="lg:col-span-6 space-y-4 text-neutral-300 font-light text-base sm:text-lg leading-relaxed lg:border-l lg:border-white/[0.1] lg:pl-8">
              <p>
                Every brand has different goals. Some need visibility. Some need better leads. Some need stronger branding. Others need a complete digital transformation.
              </p>
              <p className="text-neutral-400 text-sm sm:text-base">
                GENFREX brings strategy, creativity, technology, and performance together to create solutions around specific business objectives.
              </p>
            </div>

          </div>
        </section>

        {/* =============================================================
            03 ─ INTERACTIVE SERVICE SELECTOR & 8 CORE SERVICES
            ============================================================= */}
        <section className="py-12 md:py-16">
          
          {/* Quick Horizontal Service Tab Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none border-b border-white/[0.08]">
            {SERVICES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => {
                  setActiveTab(idx);
                  scrollToSection(`service-item-${s.id}`);
                }}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-mono transition-all flex items-center gap-2 shrink-0 ${
                  activeTab === idx
                    ? 'bg-[#0052FF] text-white font-medium shadow-md shadow-[#0052FF]/30'
                    : 'bg-[#141416] text-neutral-400 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                <span>{s.number}</span>
                <span>{s.shortTitle}</span>
              </button>
            ))}
          </div>

          {/* 8 Distinct Services Detailed Cards Sequence */}
          <div className="space-y-12 md:space-y-16">
            {SERVICES.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.id}
                  id={`service-item-${srv.id}`}
                  className="scroll-mt-32 rounded-3xl bg-[#141416] border border-white/10 p-7 sm:p-10 md:p-12 hover:border-[#0052FF]/50 transition-all duration-300 relative overflow-hidden group shadow-2xl"
                >
                  {/* Subtle top-right ambient background gradient */}
                  <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${srv.gradient} blur-3xl pointer-events-none rounded-full`} />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                    
                    {/* Left Column: Number, Category, Large Title & Description (7 cols) */}
                    <div className="lg:col-span-7 space-y-6">
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF]">
                          <Icon size={20} />
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-mono text-xs text-[#0052FF] font-bold tracking-widest uppercase">
                            {srv.number} / {srv.total}
                          </span>
                          <span className="text-white/20">•</span>
                          <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
                            {srv.category}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-extralight text-white tracking-tight leading-tight">
                        {srv.title}
                      </h3>

                      <p className="text-neutral-300 font-light text-base sm:text-lg leading-relaxed">
                        {srv.description}
                      </p>

                      {srv.supportingStatement && (
                        <div className="p-4 rounded-xl bg-[#0A0A0A] border-l-2 border-[#0052FF] text-xs sm:text-sm text-neutral-300 font-light italic">
                          "{srv.supportingStatement}"
                        </div>
                      )}

                      {/* Capabilities Pills */}
                      {srv.capabilities && srv.capabilities.length > 0 && (
                        <div className="space-y-3 pt-2">
                          <span className="font-mono text-[11px] tracking-[0.2em] text-neutral-500 uppercase block">
                            CAPABILITIES & WORKSTREAMS
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {srv.capabilities.map((cap, cIdx) => (
                              <span
                                key={cIdx}
                                className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-neutral-300 font-mono hover:border-[#0052FF]/40 transition-colors"
                              >
                                {cap}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Action Button */}
                      <div className="pt-4">
                        <button
                          onClick={() => setIsQuoteOpen(true)}
                          className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white hover:text-[#0052FF] transition-colors border-b border-[#0052FF] pb-1"
                        >
                          <span>INQUIRE ABOUT {srv.category}</span>
                          <ArrowRight size={14} />
                        </button>
                      </div>

                    </div>

                    {/* Right Column: Visual Feature Box (5 cols) */}
                    <div className="lg:col-span-5 bg-[#0D0D10] border border-white/[0.08] rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6">
                      
                      <div>
                        <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-4">
                          <span className="text-[10px] font-mono tracking-widest text-[#0052FF] uppercase font-semibold">
                            {srv.highlightLabel}
                          </span>
                          <span className="w-2 h-2 rounded-full bg-[#0052FF]" />
                        </div>

                        {/* Special Talent Squad view for Service 08 */}
                        {srv.talentCategories ? (
                          <div className="space-y-4">
                            {srv.talentCategories.map((grp, gIdx) => (
                              <div key={gIdx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                                <span className="font-mono text-xs text-[#0052FF] font-semibold block mb-1.5">
                                  {grp.name}
                                </span>
                                <div className="flex flex-wrap gap-1.5">
                                  {grp.roles?.map((r, rIdx) => (
                                    <span key={rIdx} className="text-[11px] font-mono text-neutral-300 bg-white/[0.03] px-2 py-0.5 rounded">
                                      {r}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}

                            <p className="text-xs text-neutral-400 font-light pt-2">
                              {srv.projectSquadNote}
                            </p>
                          </div>
                        ) : (
                          <div className="space-y-2.5">
                            {srv.highlights?.map((h, hIdx) => (
                              <div key={hIdx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                                <CheckCircle2 size={16} className="text-[#0052FF] shrink-0" />
                                <span className="text-xs sm:text-sm font-medium text-neutral-200">
                                  {h}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-neutral-500">
                        <span>AGENCY SPECIALIZATION</span>
                        <span className="text-neutral-300">0{idx + 1} OF 08</span>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </section>

        {/* =============================================================
            04 ─ OUR PROCESS (HOW WE WORK)
            ============================================================= */}
        <section className="py-20 md:py-28 border-t border-white/[0.08]">
          <div className="max-w-3xl mb-14">
            <span className="eyebrow">HOW WE WORK</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white leading-tight mb-4">
              FROM REQUIREMENT <br />
              <span className="font-medium text-[#0052FF]">TO RESULTS.</span>
            </h2>
            <p className="text-neutral-400 font-light text-base sm:text-lg leading-relaxed">
              We follow a structured process designed to keep every project focused, transparent, and aligned with business objectives.
            </p>
          </div>

          {/* Process Timeline Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <div 
                key={idx}
                className="bg-[#141416] border border-white/10 rounded-2xl p-7 hover:border-[#0052FF]/60 hover:bg-[#18181D] transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-light text-[#0052FF] font-mono group-hover:scale-105 transition-transform">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                      STAGE {step.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-medium text-white tracking-tight">
                    {step.name}
                  </h3>

                  <p className="text-neutral-400 font-light text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>PHASE {idx + 1}</span>
                  <Check size={14} className="text-[#0052FF]" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =============================================================
            05 ─ WHY GENFREX (EDITORIAL LIST)
            ============================================================= */}
        <section className="py-20 md:py-28 border-t border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            <div className="lg:col-span-5 lg:sticky lg:top-36 space-y-4">
              <span className="eyebrow">WHY GENFREX</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white leading-tight">
                MORE THAN <br />
                A DIGITAL SERVICE <br />
                <span className="font-medium text-[#0052FF]">PROVIDER.</span>
              </h2>
              <p className="text-neutral-400 font-light text-base leading-relaxed">
                GENFREX brings multiple digital capabilities together so businesses don't have to manage disconnected solutions across different providers.
              </p>
              
              <div className="pt-4">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="px-6 py-3 rounded-full bg-white/[0.05] hover:bg-[#0052FF] text-white border border-white/10 hover:border-transparent text-xs font-mono tracking-widest uppercase transition-all flex items-center gap-2"
                >
                  <span>REQUEST PROPOSAL</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Editorial List (Not Generic Cards) */}
            <div className="lg:col-span-7 divide-y divide-white/[0.08]">
              {WHY_POINTS.map((pt) => (
                <div 
                  key={pt.num}
                  className="py-7 flex items-start gap-6 group hover:pl-2 transition-all duration-200"
                >
                  <span className="font-mono text-lg font-light text-[#0052FF] shrink-0 pt-0.5">
                    {pt.num}
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-medium text-white group-hover:text-[#0052FF] transition-colors">
                      {pt.title}
                    </h3>
                    <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =============================================================
            06 ─ ENGAGEMENT MODELS
            ============================================================= */}
        <section className="py-20 md:py-28 border-t border-white/[0.08]">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">ENGAGEMENT MODELS</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4">
              BUILT AROUND YOUR NEEDS.
            </h2>
            <p className="text-neutral-400 font-light text-base">
              Structured to align with your organization's scope, timeline, and growth trajectory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ENGAGEMENT_MODELS.map((model, idx) => (
              <div 
                key={idx}
                className="bg-[#141416] border border-white/10 rounded-2xl p-8 hover:border-[#0052FF]/60 hover:bg-[#18181D] transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                    <span className="text-[10px] font-mono tracking-widest text-[#0052FF] uppercase font-semibold">
                      {model.tag}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#0052FF]" />
                  </div>

                  <h3 className="text-2xl font-medium text-white">
                    {model.type}
                  </h3>

                  <p className="text-neutral-400 font-light text-sm leading-relaxed">
                    {model.desc}
                  </p>

                  <div className="pt-2">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mb-2">
                      COMMON SCOPES:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {model.examples?.map((ex, exIdx) => (
                        <span 
                          key={exIdx}
                          className="px-2.5 py-1 rounded bg-white/[0.04] text-[11px] font-mono text-neutral-300"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <button
                    onClick={() => setIsQuoteOpen(true)}
                    className="w-full py-3 rounded-full border border-white/20 hover:border-[#0052FF] text-white hover:bg-[#0052FF] text-xs font-mono tracking-widest uppercase transition-all flex items-center justify-center gap-2"
                  >
                    <span>SELECT MODEL</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =============================================================
            07 ─ FINAL CTA SECTION
            ============================================================= */}
        <section className="py-24 sm:py-32 text-center border-t border-white/[0.08] relative">
          <div className="max-w-3xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-[#0052FF]">
              <Sparkles size={14} />
              <span>LET'S ELEVATE YOUR DIGITAL PRESENCE</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extralight tracking-tight text-white leading-tight">
              READY TO <span className="font-semibold text-[#0052FF]">GROW?</span>
            </h2>

            <p className="text-neutral-300 font-light text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Whether you need better search visibility, stronger social presence, performance marketing, a new website, better content, AI-powered workflows, or the right digital talent — GENFREX can help identify the right path forward.
            </p>

            <div className="pt-4 flex flex-col items-center gap-3">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="px-9 py-4 rounded-full bg-[#0052FF] hover:bg-[#1E6FFF] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 shadow-[0_12px_30px_-5px_rgba(0,82,255,0.45)] hover:scale-[1.02]"
              >
                <span>START YOUR DIGITAL GROWTH JOURNEY</span>
                <ArrowRight size={16} />
              </button>

              <p className="text-xs font-mono text-neutral-400 mt-2">
                Tell us what you're building. We'll help you figure out what comes next.
              </p>
            </div>

          </div>
        </section>

      </div>

      {/* Global Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />

    </div>
  );
}
