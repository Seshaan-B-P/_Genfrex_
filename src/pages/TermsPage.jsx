import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Shield,
  ShieldCheck,
  Calendar,
  Clock,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Mail,
  Phone,
  MessageCircle,
  Copy,
  Check,
  Lock,
  Layers,
  Search,
  ArrowUp,
  Scale,
  Briefcase,
  DollarSign,
  FileCheck,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  Cpu,
  Wrench,
  Ban,
  FileX,
  Compass,
  Zap,
  TrendingUp,
  Globe,
  Users
} from 'lucide-react';

const sectionData = [
  {
    id: 'introduction',
    number: '1',
    displayNum: '01',
    title: 'Introduction',
    subtitle: 'Welcome to GENFREX & Agreement Scope',
    icon: Compass,
    keywords: ['introduction', 'welcome', 'terms', 'agreement', 'discontinue', 'binding']
  },
  {
    id: 'scope-of-services',
    number: '2',
    displayNum: '02',
    title: 'Scope of Services',
    subtitle: 'Growth, Web, Content & Digital Talent Solutions',
    icon: Layers,
    keywords: ['seo', 'marketing', 'web development', 'content', 'video', 'talent', 'scope']
  },
  {
    id: 'project-inquiries-acceptance',
    number: '3',
    displayNum: '03',
    title: 'Project Inquiries and Acceptance',
    subtitle: 'Consultation, Scoping & Contract Commencement',
    icon: FileCheck,
    keywords: ['inquiries', 'acceptance', 'whatsapp', 'quotation', 'feasibility', 'commence']
  },
  {
    id: 'pricing-and-payment',
    number: '4',
    displayNum: '04',
    title: 'Pricing and Payment',
    subtitle: 'Requirement-Based Pricing, Milestones & Costs',
    icon: DollarSign,
    keywords: ['pricing', 'payment', 'milestones', 'advance', 'taxes', 'third-party costs']
  },
  {
    id: 'project-scope-and-changes',
    number: '5',
    displayNum: '05',
    title: 'Project Scope and Changes',
    subtitle: 'Approved Deliverables & Additional Work Policy',
    icon: Briefcase,
    keywords: ['scope', 'changes', 'new features', 'additional work', 'impact', 'revisions']
  },
  {
    id: 'timelines-responsibilities',
    number: '6',
    displayNum: '06',
    title: 'Timelines and Client Responsibilities',
    subtitle: 'Schedules, Client Materials & Dependency Handling',
    icon: Clock,
    keywords: ['timeline', 'responsibilities', 'delays', 'approvals', 'credentials', 'access']
  },
  {
    id: 'revisions-approvals',
    number: '7',
    displayNum: '07',
    title: 'Revisions, Approvals, and Acceptance',
    subtitle: 'Refinement Cycles & Final Acceptance Process',
    icon: CheckCircle2,
    keywords: ['revisions', 'approvals', 'feedback', 'acceptance', 'deliverables']
  },
  {
    id: 'intellectual-property',
    number: '8',
    displayNum: '08',
    title: 'Intellectual Property and Ownership',
    subtitle: 'Deliverables Rights, Client Assets & Portfolio Use',
    icon: ShieldCheck,
    keywords: ['intellectual property', 'ownership', 'copyright', 'portfolio', 'trademarks', 'licenses']
  },
  {
    id: 'confidentiality',
    number: '9',
    displayNum: '09',
    title: 'Confidentiality',
    subtitle: 'Protection of Proprietary & Project Materials',
    icon: Lock,
    keywords: ['confidentiality', 'non-public', 'credentials', 'nda', 'privacy', 'protection']
  },
  {
    id: 'third-party-services',
    number: '10',
    displayNum: '10',
    title: 'Third-Party Services and Platforms',
    subtitle: 'Hosting, Cloud, APIs & Independent Providers',
    icon: ExternalLink,
    keywords: ['third-party', 'hosting', 'domain', 'cloud', 'apis', 'plugins']
  },
  {
    id: 'digital-marketing-performance',
    number: '11',
    displayNum: '11',
    title: 'Digital Marketing, SEO, and Performance',
    subtitle: 'Algorithm Dependencies & Outcome Clarifications',
    icon: TrendingUp,
    keywords: ['seo', 'rankings', 'traffic', 'performance', 'advertising', 'algorithms']
  },
  {
    id: 'ai-and-technology',
    number: '12',
    displayNum: '12',
    title: 'AI and Technology Solutions',
    subtitle: 'AI-Assisted Workflows, Human Review & Quality',
    icon: Cpu,
    keywords: ['ai', 'automation', 'llm', 'testing', 'quality control', 'technology']
  },
  {
    id: 'website-maintenance-support',
    number: '13',
    displayNum: '13',
    title: 'Website Maintenance and Support',
    subtitle: 'Post-Delivery Services, Exclusions & Agreements',
    icon: Wrench,
    keywords: ['maintenance', 'technical support', 'updates', 'bug fixing', 'renewal']
  },
  {
    id: 'acceptable-use',
    number: '14',
    displayNum: '14',
    title: 'Acceptable Use',
    subtitle: 'Prohibited Actions & Platform Integrity Standards',
    icon: Ban,
    keywords: ['acceptable use', 'prohibited', 'fraud', 'malicious', 'security', 'lawful']
  },
  {
    id: 'suspension-and-termination',
    number: '15',
    displayNum: '15',
    title: 'Suspension and Termination',
    subtitle: 'Agreement Exit, Outstanding Payments & Handover',
    icon: FileX,
    keywords: ['suspension', 'termination', 'cancellation', 'refunds', 'handover']
  },
  {
    id: 'limitation-of-liability',
    number: '16',
    displayNum: '16',
    title: 'Limitation of Liability',
    subtitle: 'Risk Allocation & Legal Protections',
    icon: Scale,
    keywords: ['liability', 'limitation', 'losses', 'warranties', 'remedies']
  },
  {
    id: 'privacy-data-protection',
    number: '17',
    displayNum: '17',
    title: 'Privacy and Data Protection',
    subtitle: 'Cross-Reference to Privacy Policy & Security',
    icon: Shield,
    keywords: ['privacy', 'data protection', 'privacy policy', 'retention']
  },
  {
    id: 'changes-to-terms',
    number: '18',
    displayNum: '18',
    title: 'Changes to These Terms',
    subtitle: 'Periodic Review & Last Updated Revisions',
    icon: Clock,
    keywords: ['changes', 'updates', 'revisions', 'amendments']
  },
  {
    id: 'governing-law',
    number: '19',
    displayNum: '19',
    title: 'Governing Law and Dispute Resolution',
    subtitle: 'Laws of India & Good-Faith Resolution',
    icon: Globe,
    keywords: ['governing law', 'india', 'dispute resolution', 'jurisdiction', 'courts']
  },
  {
    id: 'contact-information',
    number: '20',
    displayNum: '20',
    title: 'Contact Information',
    subtitle: 'Founder Details, Direct Email & WhatsApp',
    icon: Mail,
    keywords: ['contact', 'dharshan', 'founder', 'email', 'phone', 'whatsapp']
  }
];

export default function TermsPage() {
  const [openSections, setOpenSections] = useState({
    'introduction': true,
    'scope-of-services': true,
    'project-inquiries-acceptance': false,
    'pricing-and-payment': false,
    'project-scope-and-changes': false,
    'timelines-responsibilities': false,
    'revisions-approvals': false,
    'intellectual-property': false,
    'confidentiality': false,
    'third-party-services': false,
    'digital-marketing-performance': false,
    'ai-and-technology': false,
    'website-maintenance-support': false,
    'acceptable-use': false,
    'suspension-and-termination': false,
    'limitation-of-liability': false,
    'privacy-data-protection': false,
    'changes-to-terms': false,
    'governing-law': false,
    'contact-information': true
  });

  const [activeSection, setActiveSection] = useState('introduction');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedField, setCopiedField] = useState(null);

  useEffect(() => {
    document.title = "Terms of Service | GENFREX Digital Growth & Creative Agency";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Official Terms of Service for GENFREX. Review the terms governing digital marketing, SEO, web development, creative productions, AI solutions, and digital talent engagements.";
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (let i = sectionData.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionData[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionData[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-expand sections matching search query
  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const q = searchQuery.toLowerCase();
      const updated = { ...openSections };
      sectionData.forEach((sec) => {
        const matchesTitle = sec.title.toLowerCase().includes(q);
        const matchesSub = sec.subtitle.toLowerCase().includes(q);
        const matchesKeywords = sec.keywords.some((k) => k.toLowerCase().includes(q));
        if (matchesTitle || matchesSub || matchesKeywords) {
          updated[sec.id] = true;
        }
      });
      setOpenSections(updated);
    }
  }, [searchQuery]);

  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const all = {};
    sectionData.forEach((s) => {
      all[s.id] = true;
    });
    setOpenSections(all);
  };

  const collapseAll = () => {
    const none = {};
    sectionData.forEach((s) => {
      none[s.id] = false;
    });
    setOpenSections(none);
  };

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const scrollToSection = (id) => {
    setOpenSections((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -90;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 50);
  };

  const totalExpanded = Object.values(openSections).filter(Boolean).length;

  return (
    <main className="min-h-screen bg-[#0C0E17] text-white pt-28 pb-20 relative overflow-hidden selection:bg-[#0052FF] selection:text-white">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[450px] bg-gradient-to-b from-[#0052FF]/15 via-[#0052FF]/5 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-[25%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[65%] left-[-10%] w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[#9A9A9A]">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={14} className="text-[#9A9A9A]/60" />
          <span className="text-[#9A9A9A]/80">Legal</span>
          <ChevronRight size={14} className="text-[#9A9A9A]/60" />
          <span className="text-[#0052FF] font-medium">Terms of Service</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-10 border-b border-white/[0.08] pb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0052FF]/10 border border-[#0052FF]/30 text-[#0052FF] text-xs font-semibold tracking-wider uppercase mb-5">
            <Scale size={14} />
            <span>Service Agreement & Terms</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6">
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-3">
                TERMS OF <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#0052FF]">SERVICE</span>
              </h1>
              <p className="text-base sm:text-lg text-[#9A9A9A] font-light max-w-2xl leading-relaxed">
                These Terms govern your access to and use of GENFREX’s website, digital marketing, technology, creative productions, and talent solutions.
              </p>
            </div>

            {/* Global Expand / Collapse Controls */}
            <div className="flex items-center gap-2.5 flex-shrink-0">
              <button
                type="button"
                onClick={expandAll}
                className="px-4 py-2 rounded-xl text-xs font-medium bg-[#131725] hover:bg-[#0052FF]/20 border border-white/[0.08] hover:border-[#0052FF]/40 text-white transition-all shadow-sm"
              >
                Expand All
              </button>
              <button
                type="button"
                onClick={collapseAll}
                className="px-4 py-2 rounded-xl text-xs font-medium bg-[#131725] hover:bg-white/[0.06] border border-white/[0.08] text-[#9A9A9A] hover:text-white transition-all shadow-sm"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* Metadata Badges & Live Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs text-[#9A9A9A]">
              <div className="flex items-center gap-2 bg-[#131725] px-3.5 py-2 rounded-xl border border-white/[0.06]">
                <Calendar size={13} className="text-[#0052FF]" />
                <span>Effective: <strong className="text-white font-medium">September 26, 2026</strong></span>
              </div>
              <div className="flex items-center gap-2 bg-[#131725] px-3.5 py-2 rounded-xl border border-white/[0.06]">
                <Clock size={13} className="text-[#0052FF]" />
                <span>Updated: <strong className="text-white font-medium">September 26, 2026</strong></span>
              </div>
              <div className="flex items-center gap-2 bg-[#131725] px-3.5 py-2 rounded-xl border border-white/[0.06]">
                <Shield size={13} className="text-[#0052FF]" />
                <span>Entity: <strong className="text-white font-medium">GENFREX</strong></span>
              </div>
            </div>

            {/* Search Input */}
            <div className="relative max-w-xs sm:w-72">
              <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9A9A9A]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search terms or clauses..."
                className="w-full bg-[#131725] text-white text-xs pl-9 pr-3.5 py-2.5 rounded-xl border border-white/[0.08] focus:outline-none focus:border-[#0052FF] transition-colors placeholder:text-[#666]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#9A9A9A] hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </header>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Sticky Table of Contents & Founder Card */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              
              {/* Table of Contents Index */}
              <div className="bg-[#131725]/90 backdrop-blur-md rounded-2xl p-5 border border-white/[0.08] shadow-xl">
                <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-white/[0.08]">
                  <span className="text-xs font-semibold tracking-wider uppercase text-white flex items-center gap-2">
                    <FileText size={15} className="text-[#0052FF]" />
                    Terms Index
                  </span>
                  <span className="text-[11px] text-[#0052FF] font-mono">
                    {totalExpanded}/20 Open
                  </span>
                </div>

                <nav className="space-y-1 max-h-[50vh] overflow-y-auto pr-1 text-sm custom-scrollbar">
                  {sectionData.map((item) => {
                    const isOpen = !!openSections[item.id];
                    const isActive = activeSection === item.id;
                    const Icon = item.icon;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-center justify-between gap-2 ${
                          isActive
                            ? 'bg-[#0052FF] text-white font-medium shadow-md shadow-[#0052FF]/20'
                            : 'text-[#9A9A9A] hover:text-white hover:bg-white/[0.04]'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          <Icon size={14} className={isActive ? 'text-white' : 'text-[#0052FF] flex-shrink-0'} />
                          <span className="truncate">{item.number}. {item.title}</span>
                        </div>
                        <span
                          className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                            isOpen
                              ? isActive
                                ? 'bg-white/20 text-white'
                                : 'bg-[#0052FF]/15 text-[#0052FF]'
                              : 'text-neutral-500'
                          }`}
                        >
                          {isOpen ? 'Open' : '—'}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Founder Contact Widget */}
              <div className="bg-gradient-to-br from-[#131725] to-[#0A0D18] rounded-2xl p-5 border border-[#0052FF]/25 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#0052FF]/10 rounded-full blur-xl pointer-events-none" />
                <span className="text-[10px] font-semibold tracking-widest text-[#0052FF] uppercase block mb-1">
                  TERMS & CONTRACT INQUIRIES
                </span>
                <h4 className="text-white text-base font-medium mb-0.5">Dharshan</h4>
                <p className="text-xs text-[#9A9A9A] font-light mb-4">Founder, GENFREX</p>

                <div className="space-y-2 text-xs">
                  {/* Email */}
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0C0E17]/80 border border-white/[0.06]">
                    <a
                      href="mailto:genfrexofficial@gmail.com"
                      className="text-white hover:text-[#0052FF] transition-colors truncate max-w-[190px] flex items-center gap-2"
                      title="genfrexofficial@gmail.com"
                    >
                      <Mail size={13} className="text-[#0052FF] flex-shrink-0" />
                      <span className="truncate">genfrexofficial@gmail.com</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => copyToClipboard('genfrexofficial@gmail.com', 'sidebar-email')}
                      className="text-[#9A9A9A] hover:text-white transition-colors ml-2 p-1"
                      aria-label="Copy email address"
                    >
                      {copiedField === 'sidebar-email' ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                    </button>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0C0E17]/80 border border-white/[0.06]">
                    <a
                      href="https://wa.me/919047295361"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-emerald-400 transition-colors flex items-center gap-2"
                    >
                      <MessageCircle size={13} className="text-emerald-400 flex-shrink-0" />
                      <span>+91 90472 95361</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => copyToClipboard('+919047295361', 'sidebar-phone')}
                      className="text-[#9A9A9A] hover:text-white transition-colors ml-2 p-1"
                      aria-label="Copy phone number"
                    >
                      {copiedField === 'sidebar-phone' ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </aside>

          {/* Right Column: 20 Terms Sections */}
          <div className="lg:col-span-8 space-y-4">

            {/* Mobile Table of Contents Quick Selector */}
            <div className="lg:hidden bg-[#131725] p-4 rounded-xl border border-white/[0.08] mb-4">
              <label htmlFor="mobile-toc-select" className="block text-xs font-semibold uppercase tracking-wider text-[#0052FF] mb-2">
                Quick Jump to Section:
              </label>
              <select
                id="mobile-toc-select"
                aria-label="Quick Jump to Terms Section"
                value={activeSection}
                onChange={(e) => scrollToSection(e.target.value)}
                className="w-full bg-[#0C0E17] text-white text-sm border border-white/[0.12] rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#0052FF]"
              >
                {sectionData.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.number}. {s.title}
                  </option>
                ))}
              </select>
            </div>

            {/* 1. Introduction */}
            <div
              id="introduction"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openSections['introduction']
                  ? 'bg-[#131725] border-[#0052FF]/30 shadow-xl shadow-[#0052FF]/5'
                  : 'bg-[#131725]/60 border-white/[0.06] hover:border-white/[0.12]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleSection('introduction')}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={openSections['introduction']}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF] flex-shrink-0">
                    <Compass size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono text-[#0052FF] font-semibold">01</span>
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">Introduction</h2>
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">Welcome to GENFREX & Agreement Scope</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#9A9A9A] hidden md:inline-block">
                    {openSections['introduction'] ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9A9A9A] transition-transform duration-300 ${openSections['introduction'] ? 'rotate-180 text-white bg-[#0052FF]/20 border-[#0052FF]/40' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openSections['introduction'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.06]">
                      <div className="space-y-4 text-sm sm:text-base text-[#C2C2C2] font-light leading-relaxed">
                        <p className="text-white font-normal">Welcome to <strong>GENFREX</strong>.</p>
                        <p>
                          These Terms of Service ("Terms") govern your access to and use of the GENFREX website, services, and related digital platforms.
                        </p>
                        <p>
                          GENFREX is a creative and digital growth agency offering digital marketing, search engine optimization, commercial productions, website and software development, content and creative services, AI-enabled digital solutions, and digital talent connections.
                        </p>
                        <p>
                          By accessing our website, submitting a project inquiry, or engaging our services, you agree to these Terms to the extent applicable to your interaction with GENFREX.
                        </p>
                        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-white font-normal flex items-start gap-3">
                          <AlertTriangle size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
                          <span>If you do not agree with these Terms, please discontinue use of our website and services.</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 2. Scope of Services */}
            <div
              id="scope-of-services"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openSections['scope-of-services']
                  ? 'bg-[#131725] border-[#0052FF]/30 shadow-xl shadow-[#0052FF]/5'
                  : 'bg-[#131725]/60 border-white/[0.06] hover:border-white/[0.12]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleSection('scope-of-services')}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={openSections['scope-of-services']}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF] flex-shrink-0">
                    <Layers size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono text-[#0052FF] font-semibold">02</span>
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">Scope of Services</h2>
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">Growth, Web, Content & Digital Talent Solutions</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#9A9A9A] hidden md:inline-block">
                    {openSections['scope-of-services'] ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9A9A9A] transition-transform duration-300 ${openSections['scope-of-services'] ? 'rotate-180 text-white bg-[#0052FF]/20 border-[#0052FF]/40' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openSections['scope-of-services'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.06]">
                      <p className="text-sm sm:text-base text-[#C2C2C2] font-light leading-relaxed mb-6">
                        GENFREX provides services across the following categories:
                      </p>

                      <div className="space-y-4 mb-6">
                        {/* A. Digital Growth and Marketing */}
                        <div className="p-4 sm:p-5 rounded-xl bg-[#0C0E17]/70 border border-white/[0.06]">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#0052FF]/20 text-[#0052FF]">Part A</span>
                            <h3 className="text-base font-medium text-white">Digital Growth and Marketing</h3>
                          </div>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#C2C2C2]">
                            {[
                              'Search Engine Optimization (SEO)',
                              'AI Search Optimization',
                              'Digital marketing strategy and campaign planning',
                              'Social media and search marketing',
                              'Social Media SEO',
                              'Audience research and performance tracking',
                              'Conversion-focused marketing strategies'
                            ].map((item, idx) => (
                              <li key={idx} className="flex items-center gap-2 bg-[#131725]/80 p-2 rounded-lg border border-white/[0.04]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF] flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* B. Web and Technology Solutions */}
                        <div className="p-4 sm:p-5 rounded-xl bg-[#0C0E17]/70 border border-white/[0.06]">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#0052FF]/20 text-[#0052FF]">Part B</span>
                            <h3 className="text-base font-medium text-white">Web and Technology Solutions</h3>
                          </div>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#C2C2C2]">
                            {[
                              'Business, corporate, portfolio, landing page, WordPress, e-commerce, and custom websites',
                              'Web application development',
                              'Custom features and API integrations',
                              'Database solutions and automation workflows',
                              'Website maintenance, bug fixing, and performance optimization',
                              'Website deployment, hosting configuration, and technical support'
                            ].map((item, idx) => (
                              <li key={idx} className="flex items-center gap-2 bg-[#131725]/80 p-2 rounded-lg border border-white/[0.04]">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* C. Content and Creative Services */}
                        <div className="p-4 sm:p-5 rounded-xl bg-[#0C0E17]/70 border border-white/[0.06]">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#0052FF]/20 text-[#0052FF]">Part C</span>
                            <h3 className="text-base font-medium text-white">Content and Creative Services</h3>
                          </div>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#C2C2C2]">
                            {[
                              'SEO blogs, website content, and long-form articles',
                              'Social media content, captions, and content calendars',
                              'Short-form videos, Reels, and promotional videos',
                              'Commercial productions and business graphics',
                              'Digital branding and creative assets'
                            ].map((item, idx) => (
                              <li key={idx} className="flex items-center gap-2 bg-[#131725]/80 p-2 rounded-lg border border-white/[0.04]">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* D. Talent Solutions */}
                        <div className="p-4 sm:p-5 rounded-xl bg-[#0C0E17]/70 border border-white/[0.06]">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#0052FF]/20 text-[#0052FF]">Part D</span>
                            <h3 className="text-base font-medium text-white">Talent Solutions</h3>
                          </div>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#C2C2C2]">
                            {[
                              'Developer, marketing, and creative professionals',
                              'Freelancers and project-based talent',
                              'Project-based teams assembled according to requirements'
                            ].map((item, idx) => (
                              <li key={idx} className="flex items-center gap-2 bg-[#131725]/80 p-2 rounded-lg border border-white/[0.04]">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-2 text-xs sm:text-sm text-[#9A9A9A] bg-[#0C0E17]/60 p-4 rounded-xl border border-white/[0.05]">
                        <p>The exact services, deliverables, scope, timeline, and commercial terms will be agreed upon separately for each project or engagement.</p>
                        <p>Not every service listed on the website is necessarily available for every project.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3. Project Inquiries and Acceptance */}
            <div
              id="project-inquiries-acceptance"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openSections['project-inquiries-acceptance']
                  ? 'bg-[#131725] border-[#0052FF]/30 shadow-xl shadow-[#0052FF]/5'
                  : 'bg-[#131725]/60 border-white/[0.06] hover:border-white/[0.12]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleSection('project-inquiries-acceptance')}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={openSections['project-inquiries-acceptance']}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF] flex-shrink-0">
                    <FileCheck size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono text-[#0052FF] font-semibold">03</span>
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">Project Inquiries and Acceptance</h2>
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">Consultation, Scoping & Contract Commencement</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#9A9A9A] hidden md:inline-block">
                    {openSections['project-inquiries-acceptance'] ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9A9A9A] transition-transform duration-300 ${openSections['project-inquiries-acceptance'] ? 'rotate-180 text-white bg-[#0052FF]/20 border-[#0052FF]/40' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openSections['project-inquiries-acceptance'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.06]">
                      <div className="space-y-4 text-sm sm:text-base text-[#C2C2C2] font-light leading-relaxed">
                        <p>
                          Submitting a contact form, sending an email, or contacting GENFREX through WhatsApp constitutes an inquiry and does not automatically create a service agreement.
                        </p>
                        <p className="text-white font-medium text-sm">
                          Before commencing a project, GENFREX and the client should agree upon the relevant project requirements, including:
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#C2C2C2]">
                          {[
                            'Project objectives and scope',
                            'Deliverables and specifications',
                            'Pricing and payment terms',
                            'Estimated timeline and milestones',
                            'Revision limits and approval process',
                            'Maintenance and post-delivery support, where applicable'
                          ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0C0E17]/60 border border-white/[0.04]">
                              <Check size={13} className="text-[#0052FF] flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <p>
                          GENFREX may assess project feasibility, required resources, technical requirements, budget, and timeline before accepting an engagement.
                        </p>
                        <p className="text-white font-medium">
                          A project will commence once the applicable commercial and project terms have been agreed upon.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 4. Pricing and Payment */}
            <div
              id="pricing-and-payment"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openSections['pricing-and-payment']
                  ? 'bg-[#131725] border-[#0052FF]/30 shadow-xl shadow-[#0052FF]/5'
                  : 'bg-[#131725]/60 border-white/[0.06] hover:border-white/[0.12]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleSection('pricing-and-payment')}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={openSections['pricing-and-payment']}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF] flex-shrink-0">
                    <DollarSign size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono text-[#0052FF] font-semibold">04</span>
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">Pricing and Payment</h2>
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">Requirement-Based Pricing, Milestones & Costs</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#9A9A9A] hidden md:inline-block">
                    {openSections['pricing-and-payment'] ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9A9A9A] transition-transform duration-300 ${openSections['pricing-and-payment'] ? 'rotate-180 text-white bg-[#0052FF]/20 border-[#0052FF]/40' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openSections['pricing-and-payment'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.06] space-y-4">
                      {/* A. Requirement-Based Pricing */}
                      <div className="p-4 sm:p-5 rounded-xl bg-[#0C0E17]/70 border border-white/[0.06]">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#0052FF]/20 text-[#0052FF]">Part A</span>
                          <h3 className="text-base font-medium text-white">Requirement-Based Pricing</h3>
                        </div>
                        <p className="text-xs sm:text-sm text-[#C2C2C2] leading-relaxed mb-3">
                          GENFREX follows a requirement-based pricing approach. Pricing may depend on:
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#C2C2C2] mb-3">
                          {[
                            'Project scope and complexity',
                            'Required technology and resources',
                            'Project duration and delivery requirements',
                            'Required digital talent and creative capabilities',
                            'Additional features, revisions, or services'
                          ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 bg-[#131725]/80 p-2 rounded-lg border border-white/[0.04]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF] flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-xs text-[#9A9A9A] border-t border-white/[0.06] pt-2">
                          A quotation or proposal will specify the applicable pricing and payment conditions.
                        </p>
                      </div>

                      {/* B. Payment Terms */}
                      <div className="p-4 sm:p-5 rounded-xl bg-[#0C0E17]/70 border border-white/[0.06]">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#0052FF]/20 text-[#0052FF]">Part B</span>
                          <h3 className="text-base font-medium text-white">Payment Terms</h3>
                        </div>
                        <p className="text-xs sm:text-sm text-[#C2C2C2] leading-relaxed space-y-2">
                          Payment schedules, advance payments, milestones, payment methods, and due dates will be agreed upon before project commencement. Clients are responsible for making payments according to the agreed terms. Any additional work outside the approved scope may require a separate quotation or written agreement.
                        </p>
                      </div>

                      {/* C. Taxes and Third-Party Costs */}
                      <div className="p-4 sm:p-5 rounded-xl bg-[#0C0E17]/70 border border-white/[0.06]">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#0052FF]/20 text-[#0052FF]">Part C</span>
                          <h3 className="text-base font-medium text-white">Taxes and Third-Party Costs</h3>
                        </div>
                        <p className="text-xs sm:text-sm text-[#C2C2C2] leading-relaxed">
                          Applicable taxes, hosting fees, domain registration charges, advertising budgets, software subscriptions, stock assets, and other third-party costs will be handled according to the relevant project agreement. Unless expressly included in the agreed quotation, third-party costs are not assumed to be included in GENFREX's service fees.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 5. Project Scope and Changes */}
            <div
              id="project-scope-and-changes"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openSections['project-scope-and-changes']
                  ? 'bg-[#131725] border-[#0052FF]/30 shadow-xl shadow-[#0052FF]/5'
                  : 'bg-[#131725]/60 border-white/[0.06] hover:border-white/[0.12]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleSection('project-scope-and-changes')}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={openSections['project-scope-and-changes']}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF] flex-shrink-0">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono text-[#0052FF] font-semibold">05</span>
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">Project Scope and Changes</h2>
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">Approved Deliverables & Additional Work Policy</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#9A9A9A] hidden md:inline-block">
                    {openSections['project-scope-and-changes'] ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9A9A9A] transition-transform duration-300 ${openSections['project-scope-and-changes'] ? 'rotate-180 text-white bg-[#0052FF]/20 border-[#0052FF]/40' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openSections['project-scope-and-changes'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.06]">
                      <div className="space-y-4 text-sm sm:text-base text-[#C2C2C2] font-light leading-relaxed">
                        <p>Each project will be carried out according to the approved requirements and deliverables.</p>
                        <p>
                          Requests that introduce new features, additional pages, extra campaigns, substantial design changes, or other work beyond the agreed scope may be treated as additional work.
                        </p>
                        <p>
                          GENFREX will communicate relevant changes to the client, including any applicable impact on pricing and timelines.
                        </p>
                        <p>
                          Additional work will proceed subject to agreement on the revised scope and commercial terms.
                        </p>
                        <div className="p-3.5 rounded-lg bg-[#0C0E17]/80 border border-white/[0.06] text-xs sm:text-sm text-white/90">
                          Clients are encouraged to provide clear requirements and consolidated feedback to support efficient project execution.
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 6. Timelines and Client Responsibilities */}
            <div
              id="timelines-responsibilities"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openSections['timelines-responsibilities']
                  ? 'bg-[#131725] border-[#0052FF]/30 shadow-xl shadow-[#0052FF]/5'
                  : 'bg-[#131725]/60 border-white/[0.06] hover:border-white/[0.12]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleSection('timelines-responsibilities')}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={openSections['timelines-responsibilities']}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF] flex-shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono text-[#0052FF] font-semibold">06</span>
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">Timelines and Client Responsibilities</h2>
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">Schedules, Client Materials & Dependency Handling</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#9A9A9A] hidden md:inline-block">
                    {openSections['timelines-responsibilities'] ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9A9A9A] transition-transform duration-300 ${openSections['timelines-responsibilities'] ? 'rotate-180 text-white bg-[#0052FF]/20 border-[#0052FF]/40' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openSections['timelines-responsibilities'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.06]">
                      <div className="space-y-4 text-sm sm:text-base text-[#C2C2C2] font-light leading-relaxed">
                        <p>GENFREX will work toward the timelines agreed upon for each project.</p>
                        <p className="text-white font-medium text-sm">Delivery schedules may depend on:</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#C2C2C2]">
                          {[
                            'Timely receipt of content, materials, and project information',
                            'Client approvals and feedback',
                            'Access to required accounts, systems, and platforms',
                            'Third-party services and technical dependencies',
                            'Changes to the approved scope'
                          ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0C0E17]/60 border border-white/[0.04]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF] flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <p>
                          Clients agree to provide accurate information, necessary materials, access permissions, and feedback reasonably required for project execution.
                        </p>
                        <p>
                          Delays caused by missing information, delayed approvals, scope changes, or third-party dependencies may affect the agreed timeline.
                        </p>
                        <p className="text-xs text-[#9A9A9A]">
                          Any material timeline changes will be communicated between the parties.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 7. Revisions, Approvals, and Acceptance */}
            <div
              id="revisions-approvals"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openSections['revisions-approvals']
                  ? 'bg-[#131725] border-[#0052FF]/30 shadow-xl shadow-[#0052FF]/5'
                  : 'bg-[#131725]/60 border-white/[0.06] hover:border-white/[0.12]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleSection('revisions-approvals')}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={openSections['revisions-approvals']}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF] flex-shrink-0">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono text-[#0052FF] font-semibold">07</span>
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">Revisions, Approvals, and Acceptance</h2>
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">Refinement Cycles & Final Acceptance Process</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#9A9A9A] hidden md:inline-block">
                    {openSections['revisions-approvals'] ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9A9A9A] transition-transform duration-300 ${openSections['revisions-approvals'] ? 'rotate-180 text-white bg-[#0052FF]/20 border-[#0052FF]/40' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openSections['revisions-approvals'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.06]">
                      <div className="space-y-4 text-sm sm:text-base text-[#C2C2C2] font-light leading-relaxed">
                        <p>Revision limits and the applicable approval process will be established in the individual project agreement.</p>
                        <p>Revisions are intended to refine the agreed deliverables within the approved project scope.</p>
                        <p>Requests that materially change the original requirements or introduce new functionality may be treated as additional work.</p>
                        <p>Clients are responsible for reviewing deliverables and communicating feedback or approval within the agreed process.</p>
                        <p className="text-white font-medium">Final deliverables, revision limits, and any applicable acceptance criteria will be determined by the individual service agreement.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 8. Intellectual Property and Ownership */}
            <div
              id="intellectual-property"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openSections['intellectual-property']
                  ? 'bg-[#131725] border-[#0052FF]/30 shadow-xl shadow-[#0052FF]/5'
                  : 'bg-[#131725]/60 border-white/[0.06] hover:border-white/[0.12]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleSection('intellectual-property')}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={openSections['intellectual-property']}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF] flex-shrink-0">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono text-[#0052FF] font-semibold">08</span>
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">Intellectual Property and Ownership</h2>
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">Deliverables Rights, Client Assets & Portfolio Use</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#9A9A9A] hidden md:inline-block">
                    {openSections['intellectual-property'] ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9A9A9A] transition-transform duration-300 ${openSections['intellectual-property'] ? 'rotate-180 text-white bg-[#0052FF]/20 border-[#0052FF]/40' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openSections['intellectual-property'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.06] space-y-4">
                      <p className="text-sm sm:text-base text-[#C2C2C2] font-light leading-relaxed">
                        Intellectual property rights in project deliverables will be governed by the applicable project agreement. Unless otherwise agreed in writing, this section establishes the following general principles:
                      </p>

                      {/* Part A: Client Materials */}
                      <div className="p-4 sm:p-5 rounded-xl bg-[#0C0E17]/70 border border-white/[0.06]">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#0052FF]/20 text-[#0052FF]">Part A</span>
                          <h3 className="text-base font-medium text-white">Client Materials</h3>
                        </div>
                        <p className="text-xs sm:text-sm text-[#C2C2C2] leading-relaxed">
                          Clients retain responsibility for the materials, content, logos, trademarks, images, documents, and other assets they provide to GENFREX. Clients represent that they have the necessary rights or permissions to provide such materials for the intended project.
                        </p>
                      </div>

                      {/* Part B: Project Deliverables */}
                      <div className="p-4 sm:p-5 rounded-xl bg-[#0C0E17]/70 border border-white/[0.06]">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#0052FF]/20 text-[#0052FF]">Part B</span>
                          <h3 className="text-base font-medium text-white">Project Deliverables</h3>
                        </div>
                        <p className="text-xs sm:text-sm text-[#C2C2C2] leading-relaxed">
                          Ownership, licensing, transfer of rights, and permitted use of completed project deliverables will be specified in the relevant proposal, quotation, or written agreement. Where ownership transfer or licensing is subject to full payment, that condition must be specified in the applicable project agreement.
                        </p>
                      </div>

                      {/* Part C: Third-Party Materials */}
                      <div className="p-4 sm:p-5 rounded-xl bg-[#0C0E17]/70 border border-white/[0.06]">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#0052FF]/20 text-[#0052FF]">Part C</span>
                          <h3 className="text-base font-medium text-white">Third-Party Materials</h3>
                        </div>
                        <p className="text-xs sm:text-sm text-[#C2C2C2] leading-relaxed">
                          Third-party software, fonts, stock media, plugins, libraries, APIs, and other licensed resources may remain subject to their respective licenses and terms. GENFREX cannot transfer ownership of third-party materials beyond the rights permitted by their applicable licenses.
                        </p>
                      </div>

                      {/* Part D: Portfolio and Promotional Use */}
                      <div className="p-4 sm:p-5 rounded-xl bg-[#0C0E17]/70 border border-white/[0.06]">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#0052FF]/20 text-[#0052FF]">Part D</span>
                          <h3 className="text-base font-medium text-white">Portfolio and Promotional Use</h3>
                        </div>
                        <p className="text-xs sm:text-sm text-[#C2C2C2] leading-relaxed">
                          GENFREX will not assume unrestricted permission to publicly disclose confidential client information, unpublished project materials, or private business data. Any public use of client names, logos, project screenshots, or deliverables for portfolio or promotional purposes will be subject to applicable permissions and agreements.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 9. Confidentiality */}
            <div
              id="confidentiality"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openSections['confidentiality']
                  ? 'bg-[#131725] border-[#0052FF]/30 shadow-xl shadow-[#0052FF]/5'
                  : 'bg-[#131725]/60 border-white/[0.06] hover:border-white/[0.12]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleSection('confidentiality')}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={openSections['confidentiality']}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF] flex-shrink-0">
                    <Lock size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono text-[#0052FF] font-semibold">09</span>
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">Confidentiality</h2>
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">Protection of Proprietary & Project Materials</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#9A9A9A] hidden md:inline-block">
                    {openSections['confidentiality'] ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9A9A9A] transition-transform duration-300 ${openSections['confidentiality'] ? 'rotate-180 text-white bg-[#0052FF]/20 border-[#0052FF]/40' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openSections['confidentiality'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.06]">
                      <div className="space-y-4 text-sm sm:text-base text-[#C2C2C2] font-light leading-relaxed">
                        <p>GENFREX recognizes the importance of protecting client information.</p>
                        <p>
                          Both parties should treat non-public business information, project documents, technical information, credentials, and other confidential materials received during an engagement with appropriate care.
                        </p>
                        <p>
                          Confidential information should be used only for the purposes of the relevant project or engagement, except where disclosure is authorized or legally required.
                        </p>
                        <p>
                          Access to confidential project information should be limited to individuals who reasonably need it for the agreed work.
                        </p>
                        <div className="p-3.5 rounded-lg bg-[#0C0E17]/80 border border-white/[0.06] text-xs sm:text-sm text-white/90">
                          These confidentiality expectations apply alongside any separate non-disclosure agreement or confidentiality provisions agreed upon by the parties.
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 10. Third-Party Services and Platforms */}
            <div
              id="third-party-services"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openSections['third-party-services']
                  ? 'bg-[#131725] border-[#0052FF]/30 shadow-xl shadow-[#0052FF]/5'
                  : 'bg-[#131725]/60 border-white/[0.06] hover:border-white/[0.12]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleSection('third-party-services')}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={openSections['third-party-services']}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF] flex-shrink-0">
                    <ExternalLink size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono text-[#0052FF] font-semibold">10</span>
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">Third-Party Services and Platforms</h2>
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">Hosting, Cloud, APIs & Independent Providers</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#9A9A9A] hidden md:inline-block">
                    {openSections['third-party-services'] ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9A9A9A] transition-transform duration-300 ${openSections['third-party-services'] ? 'rotate-180 text-white bg-[#0052FF]/20 border-[#0052FF]/40' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openSections['third-party-services'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.06]">
                      <div className="space-y-4 text-sm sm:text-base text-[#C2C2C2] font-light leading-relaxed">
                        <p>
                          Certain projects may require third-party platforms or services, including hosting providers, domain registrars, cloud platforms, advertising platforms, analytics tools, plugins, APIs, and communication services.
                        </p>
                        <p>
                          The availability, pricing, features, policies, and performance of such services are controlled by their respective providers.
                        </p>
                        <div className="p-3.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs sm:text-sm text-white/90">
                          GENFREX is not responsible for independent changes, interruptions, suspensions, or failures caused by third-party providers outside its reasonable control.
                        </div>
                        <p>
                          Where third-party services are required, their applicable terms, charges, and dependencies should be considered as part of the project scope.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 11. Digital Marketing, SEO, and Performance */}
            <div
              id="digital-marketing-performance"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openSections['digital-marketing-performance']
                  ? 'bg-[#131725] border-[#0052FF]/30 shadow-xl shadow-[#0052FF]/5'
                  : 'bg-[#131725]/60 border-white/[0.06] hover:border-white/[0.12]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleSection('digital-marketing-performance')}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={openSections['digital-marketing-performance']}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF] flex-shrink-0">
                    <TrendingUp size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono text-[#0052FF] font-semibold">11</span>
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">Digital Marketing, SEO, and Performance</h2>
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">Algorithm Dependencies & Outcome Clarifications</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#9A9A9A] hidden md:inline-block">
                    {openSections['digital-marketing-performance'] ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9A9A9A] transition-transform duration-300 ${openSections['digital-marketing-performance'] ? 'rotate-180 text-white bg-[#0052FF]/20 border-[#0052FF]/40' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openSections['digital-marketing-performance'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.06]">
                      <div className="space-y-4 text-sm sm:text-base text-[#C2C2C2] font-light leading-relaxed">
                        <p>GENFREX provides marketing, SEO, content, optimization, and digital growth services based on the agreed scope.</p>
                        <p>
                          Digital marketing and search performance may be affected by external factors, including search engine algorithms, advertising platform policies, competition, market conditions, audience behavior, website infrastructure, and third-party systems.
                        </p>
                        <p>
                          GENFREX may use research, analytics, performance monitoring, and optimization to support campaign and project objectives.
                        </p>
                        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-3">
                          <AlertTriangle size={20} className="text-amber-400 flex-shrink-0 mt-0.5" />
                          <div className="text-xs sm:text-sm text-amber-200/90 leading-relaxed">
                            However, unless a specific measurable commitment is expressly agreed in writing, GENFREX does not guarantee particular search rankings, traffic volumes, advertising results, sales, leads, revenue, or business outcomes. Performance estimates or projections, where provided, should not be interpreted as guaranteed results unless expressly stated in the applicable agreement.
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 12. AI and Technology Solutions */}
            <div
              id="ai-and-technology"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openSections['ai-and-technology']
                  ? 'bg-[#131725] border-[#0052FF]/30 shadow-xl shadow-[#0052FF]/5'
                  : 'bg-[#131725]/60 border-white/[0.06] hover:border-white/[0.12]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleSection('ai-and-technology')}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={openSections['ai-and-technology']}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF] flex-shrink-0">
                    <Cpu size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono text-[#0052FF] font-semibold">12</span>
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">AI and Technology Solutions</h2>
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">AI-Assisted Workflows, Human Review & Quality</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#9A9A9A] hidden md:inline-block">
                    {openSections['ai-and-technology'] ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9A9A9A] transition-transform duration-300 ${openSections['ai-and-technology'] ? 'rotate-180 text-white bg-[#0052FF]/20 border-[#0052FF]/40' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openSections['ai-and-technology'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.06]">
                      <div className="space-y-4 text-sm sm:text-base text-[#C2C2C2] font-light leading-relaxed">
                        <p>
                          GENFREX may incorporate artificial intelligence, large language models, automation tools, analytics platforms, and other modern technologies into research, content workflows, development, and optimization.
                        </p>
                        <p>
                          AI-assisted outputs may require human review, editing, testing, and quality control.
                        </p>
                        <p>
                          Clients are responsible for reviewing and approving deliverables according to their project requirements and applicable obligations.
                        </p>
                        <p>
                          Third-party AI tools and platforms may have their own usage conditions, data processing practices, and limitations.
                        </p>
                        <p className="text-xs text-[#9A9A9A]">
                          The use of AI does not remove the need for appropriate review, confidentiality, and compliance with applicable laws and contractual obligations.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 13. Website Maintenance and Support */}
            <div
              id="website-maintenance-support"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openSections['website-maintenance-support']
                  ? 'bg-[#131725] border-[#0052FF]/30 shadow-xl shadow-[#0052FF]/5'
                  : 'bg-[#131725]/60 border-white/[0.06] hover:border-white/[0.12]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleSection('website-maintenance-support')}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={openSections['website-maintenance-support']}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF] flex-shrink-0">
                    <Wrench size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono text-[#0052FF] font-semibold">13</span>
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">Website Maintenance and Support</h2>
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">Post-Delivery Services, Exclusions & Agreements</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#9A9A9A] hidden md:inline-block">
                    {openSections['website-maintenance-support'] ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9A9A9A] transition-transform duration-300 ${openSections['website-maintenance-support'] ? 'rotate-180 text-white bg-[#0052FF]/20 border-[#0052FF]/40' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openSections['website-maintenance-support'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.06]">
                      <div className="space-y-4 text-sm sm:text-base text-[#C2C2C2] font-light leading-relaxed">
                        <p>
                          Maintenance, ongoing technical support, security updates, bug fixing, hosting configuration, and post-delivery services will be provided only to the extent included in the applicable agreement.
                        </p>
                        <p>
                          The scope, duration, response arrangements, charges, and exclusions for maintenance or support will be established separately.
                        </p>
                        <div className="p-3.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs sm:text-sm text-white/90">
                          Unless expressly agreed, project completion does not automatically include indefinite maintenance, hosting, domain renewal, future feature development, or ongoing support.
                        </div>
                        <p>
                          Clients remain responsible for third-party subscriptions, domain renewals, hosting charges, and other accounts assigned to them, unless otherwise agreed.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 14. Acceptable Use */}
            <div
              id="acceptable-use"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openSections['acceptable-use']
                  ? 'bg-[#131725] border-[#0052FF]/30 shadow-xl shadow-[#0052FF]/5'
                  : 'bg-[#131725]/60 border-white/[0.06] hover:border-white/[0.12]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleSection('acceptable-use')}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={openSections['acceptable-use']}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF] flex-shrink-0">
                    <Ban size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono text-[#0052FF] font-semibold">14</span>
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">Acceptable Use</h2>
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">Prohibited Actions & Platform Integrity Standards</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#9A9A9A] hidden md:inline-block">
                    {openSections['acceptable-use'] ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9A9A9A] transition-transform duration-300 ${openSections['acceptable-use'] ? 'rotate-180 text-white bg-[#0052FF]/20 border-[#0052FF]/40' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openSections['acceptable-use'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.06]">
                      <div className="space-y-4 text-sm sm:text-base text-[#C2C2C2] font-light leading-relaxed">
                        <p className="text-white font-medium text-sm">Users agree not to use the GENFREX website or services to:</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#C2C2C2] mb-4">
                          {[
                            'Violate applicable laws or regulations.',
                            'Submit fraudulent, misleading, or unauthorized information.',
                            'Infringe the intellectual property or privacy rights of others.',
                            'Distribute malicious software or attempt unauthorized access to systems.',
                            'Interfere with website functionality, security, or availability.',
                            'Request services intended to facilitate unlawful activities.'
                          ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0C0E17]/60 border border-white/[0.04]">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="p-3.5 rounded-lg bg-red-500/10 border border-red-500/20 text-xs sm:text-sm text-red-200">
                          GENFREX may decline or discontinue involvement in a project where the requested activities are unlawful or violate applicable contractual requirements.
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 15. Suspension and Termination */}
            <div
              id="suspension-and-termination"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openSections['suspension-and-termination']
                  ? 'bg-[#131725] border-[#0052FF]/30 shadow-xl shadow-[#0052FF]/5'
                  : 'bg-[#131725]/60 border-white/[0.06] hover:border-white/[0.12]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleSection('suspension-and-termination')}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={openSections['suspension-and-termination']}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF] flex-shrink-0">
                    <FileX size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono text-[#0052FF] font-semibold">15</span>
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">Suspension and Termination</h2>
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">Agreement Exit, Outstanding Payments & Handover</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#9A9A9A] hidden md:inline-block">
                    {openSections['suspension-and-termination'] ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9A9A9A] transition-transform duration-300 ${openSections['suspension-and-termination'] ? 'rotate-180 text-white bg-[#0052FF]/20 border-[#0052FF]/40' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openSections['suspension-and-termination'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.06]">
                      <div className="space-y-4 text-sm sm:text-base text-[#C2C2C2] font-light leading-relaxed">
                        <p>Project suspension, cancellation, or termination will be governed by the applicable project agreement.</p>
                        <p>
                          Where a project is suspended or terminated, the parties should address outstanding payments, completed work, approved expenses, access to project materials, and any agreed handover obligations according to the relevant agreement.
                        </p>
                        <p>
                          Any cancellation charges, refund conditions, notice periods, or termination rights must be established in the applicable written agreement.
                        </p>
                        <p className="text-white font-medium text-xs sm:text-sm bg-[#0C0E17]/80 p-3.5 rounded-lg border border-white/[0.06]">
                          GENFREX does not establish a universal refund or cancellation policy through this document; those conditions will depend on the specific engagement and agreed terms.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 16. Limitation of Liability */}
            <div
              id="limitation-of-liability"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openSections['limitation-of-liability']
                  ? 'bg-[#131725] border-[#0052FF]/30 shadow-xl shadow-[#0052FF]/5'
                  : 'bg-[#131725]/60 border-white/[0.06] hover:border-white/[0.12]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleSection('limitation-of-liability')}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={openSections['limitation-of-liability']}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF] flex-shrink-0">
                    <Scale size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono text-[#0052FF] font-semibold">16</span>
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">Limitation of Liability</h2>
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">Risk Allocation & Legal Protections</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#9A9A9A] hidden md:inline-block">
                    {openSections['limitation-of-liability'] ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9A9A9A] transition-transform duration-300 ${openSections['limitation-of-liability'] ? 'rotate-180 text-white bg-[#0052FF]/20 border-[#0052FF]/40' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openSections['limitation-of-liability'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.06]">
                      <div className="space-y-4 text-sm sm:text-base text-[#C2C2C2] font-light leading-relaxed">
                        <p>
                          To the extent permitted by applicable law, GENFREX will not be responsible for indirect or consequential losses arising from circumstances outside the agreed scope or its reasonable control.
                        </p>
                        <p>
                          Nothing in these Terms excludes or limits liability where such exclusion or limitation is prohibited by applicable law.
                        </p>
                        <p>
                          Any project-specific liability allocation, warranties, indemnities, or other risk arrangements should be expressly addressed in the applicable written agreement.
                        </p>
                        <p className="text-xs text-[#9A9A9A]">
                          Nothing in this section removes any rights or remedies that cannot legally be excluded.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 17. Privacy and Data Protection */}
            <div
              id="privacy-data-protection"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openSections['privacy-data-protection']
                  ? 'bg-[#131725] border-[#0052FF]/30 shadow-xl shadow-[#0052FF]/5'
                  : 'bg-[#131725]/60 border-white/[0.06] hover:border-white/[0.12]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleSection('privacy-data-protection')}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={openSections['privacy-data-protection']}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF] flex-shrink-0">
                    <Shield size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono text-[#0052FF] font-semibold">17</span>
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">Privacy and Data Protection</h2>
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">Cross-Reference to Privacy Policy & Security</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#9A9A9A] hidden md:inline-block">
                    {openSections['privacy-data-protection'] ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9A9A9A] transition-transform duration-300 ${openSections['privacy-data-protection'] ? 'rotate-180 text-white bg-[#0052FF]/20 border-[#0052FF]/40' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openSections['privacy-data-protection'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.06]">
                      <div className="space-y-4 text-sm sm:text-base text-[#C2C2C2] font-light leading-relaxed">
                        <p>
                          The collection and handling of personal information through the GENFREX website and services are addressed in our Privacy Policy.
                        </p>
                        <p>
                          Please review the Privacy Policy for information about personal data, communication, data retention, third-party services, and privacy-related requests.
                        </p>
                        <div className="p-4 rounded-xl bg-[#0052FF]/10 border border-[#0052FF]/25 flex items-center justify-between gap-4">
                          <span className="text-white font-medium text-xs sm:text-sm">Official Privacy Policy</span>
                          <Link
                            to="/privacy-policy"
                            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#0052FF] text-white text-xs font-medium hover:bg-blue-600 transition-colors shadow-sm"
                          >
                            <span>Read Privacy Policy</span>
                            <ArrowRight size={13} />
                          </Link>
                        </div>
                        <p className="text-xs text-[#9A9A9A]">
                          Where a project involves additional data-processing requirements, the parties may agree upon additional contractual or security arrangements.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 18. Changes to These Terms */}
            <div
              id="changes-to-terms"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openSections['changes-to-terms']
                  ? 'bg-[#131725] border-[#0052FF]/30 shadow-xl shadow-[#0052FF]/5'
                  : 'bg-[#131725]/60 border-white/[0.06] hover:border-white/[0.12]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleSection('changes-to-terms')}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={openSections['changes-to-terms']}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF] flex-shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono text-[#0052FF] font-semibold">18</span>
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">Changes to These Terms</h2>
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">Periodic Review & Last Updated Revisions</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#9A9A9A] hidden md:inline-block">
                    {openSections['changes-to-terms'] ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9A9A9A] transition-transform duration-300 ${openSections['changes-to-terms'] ? 'rotate-180 text-white bg-[#0052FF]/20 border-[#0052FF]/40' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openSections['changes-to-terms'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.06]">
                      <div className="space-y-4 text-sm sm:text-base text-[#C2C2C2] font-light leading-relaxed">
                        <p>GENFREX may update these Terms to reflect changes in its services, website, business practices, or applicable legal requirements.</p>
                        <p>Updated Terms will be published on this page with a revised <strong>Last Updated</strong> date.</p>
                        <p>The Terms applicable to an individual project will also be subject to the relevant written agreement between GENFREX and the client.</p>
                        <p className="text-xs text-[#9A9A9A]">
                          Continued use of the website after publication of updated Terms constitutes acknowledgment of the updated website terms to the extent permitted by applicable law.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 19. Governing Law and Dispute Resolution */}
            <div
              id="governing-law"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openSections['governing-law']
                  ? 'bg-[#131725] border-[#0052FF]/30 shadow-xl shadow-[#0052FF]/5'
                  : 'bg-[#131725]/60 border-white/[0.06] hover:border-white/[0.12]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleSection('governing-law')}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={openSections['governing-law']}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF] flex-shrink-0">
                    <Globe size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono text-[#0052FF] font-semibold">19</span>
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">Governing Law and Dispute Resolution</h2>
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">Laws of India & Good-Faith Resolution</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#9A9A9A] hidden md:inline-block">
                    {openSections['governing-law'] ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9A9A9A] transition-transform duration-300 ${openSections['governing-law'] ? 'rotate-180 text-white bg-[#0052FF]/20 border-[#0052FF]/40' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openSections['governing-law'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.06]">
                      <div className="space-y-4 text-sm sm:text-base text-[#C2C2C2] font-light leading-relaxed">
                        <p>These Terms shall be interpreted in accordance with the applicable laws of India, subject to mandatory legal requirements.</p>
                        <p>Any dispute arising from a specific project or service should first be addressed through good-faith communication between the parties.</p>
                        <p>The applicable courts and dispute-resolution arrangements for a project should be established in the relevant written agreement, taking into account applicable law.</p>
                        <p className="text-xs text-[#9A9A9A]">Nothing in these Terms limits any mandatory rights or remedies available under applicable law.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 20. Contact Information */}
            <div
              id="contact-information"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openSections['contact-information']
                  ? 'bg-gradient-to-br from-[#131725] via-[#101422] to-[#0A0D18] border-[#0052FF]/40 shadow-2xl shadow-[#0052FF]/10'
                  : 'bg-[#131725]/60 border-white/[0.06] hover:border-white/[0.12]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleSection('contact-information')}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={openSections['contact-information']}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0052FF] flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-[#0052FF]/30">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono text-cyan-400 font-semibold">20</span>
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">Contact Information</h2>
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">Founder Details, Direct Email & WhatsApp</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#9A9A9A] hidden md:inline-block">
                    {openSections['contact-information'] ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9A9A9A] transition-transform duration-300 ${openSections['contact-information'] ? 'rotate-180 text-white bg-[#0052FF]/20 border-[#0052FF]/40' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openSections['contact-information'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-8 pb-8 pt-1 border-t border-white/[0.06]">
                      <p className="text-sm sm:text-base text-[#C2C2C2] font-light leading-relaxed mb-6">
                        For questions regarding these Terms of Service, project agreements, or GENFREX services, please contact:
                      </p>

                      {/* Founder Info & Action Cards */}
                      <div className="bg-[#0C0E17]/90 rounded-2xl p-6 sm:p-7 border border-white/[0.08] mb-6">
                        <div className="mb-6">
                          <span className="text-xs font-semibold tracking-widest text-[#0052FF] uppercase block mb-1">
                            ORGANIZATION
                          </span>
                          <h3 className="text-2xl font-light text-white tracking-tight">GENFREX</h3>
                          <p className="text-sm text-[#9A9A9A] mt-1">
                            Founder: <strong className="text-white font-medium">Dharshan</strong>
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Email Card */}
                          <div className="p-4 rounded-xl bg-[#131725] border border-white/[0.06] flex flex-col justify-between">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs text-[#9A9A9A] uppercase tracking-wider flex items-center gap-1.5">
                                <Mail size={13} className="text-[#0052FF]" />
                                Email Address
                              </span>
                              <button
                                type="button"
                                onClick={() => copyToClipboard('genfrexofficial@gmail.com', 'card-email')}
                                className="text-xs text-[#9A9A9A] hover:text-white flex items-center gap-1 transition-colors"
                              >
                                {copiedField === 'card-email' ? (
                                  <span className="text-emerald-400 flex items-center gap-1"><Check size={12} /> Copied</span>
                                ) : (
                                  <span className="flex items-center gap-1"><Copy size={12} /> Copy</span>
                                )}
                              </button>
                            </div>
                            <a
                              href="mailto:genfrexofficial@gmail.com"
                              className="text-sm sm:text-base text-white hover:text-[#0052FF] font-medium transition-colors break-all"
                            >
                              genfrexofficial@gmail.com
                            </a>
                          </div>

                          {/* Phone / WhatsApp Card */}
                          <div className="p-4 rounded-xl bg-[#131725] border border-white/[0.06] flex flex-col justify-between">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs text-[#9A9A9A] uppercase tracking-wider flex items-center gap-1.5">
                                <Phone size={13} className="text-[#0052FF]" />
                                Phone / WhatsApp
                              </span>
                              <button
                                type="button"
                                onClick={() => copyToClipboard('+919047295361', 'card-phone')}
                                className="text-xs text-[#9A9A9A] hover:text-white flex items-center gap-1 transition-colors"
                              >
                                {copiedField === 'card-phone' ? (
                                  <span className="text-emerald-400 flex items-center gap-1"><Check size={12} /> Copied</span>
                                ) : (
                                  <span className="flex items-center gap-1"><Copy size={12} /> Copy</span>
                                )}
                              </button>
                            </div>
                            <div className="flex items-center gap-3">
                              <a
                                href="tel:+919047295361"
                                className="text-sm sm:text-base text-white hover:text-[#0052FF] font-medium transition-colors"
                              >
                                +91 90472 95361
                              </a>
                              <a
                                href="https://wa.me/919047295361"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition-colors flex items-center gap-1 font-medium"
                              >
                                <MessageCircle size={12} />
                                WhatsApp
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Direct Action Link to Contact Page */}
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
                        <p className="text-xs text-[#9A9A9A]">
                          Have a project inquiry or formal request?
                        </p>
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0052FF] text-white text-xs sm:text-sm font-medium hover:bg-blue-600 transition-colors shadow-lg shadow-[#0052FF]/25"
                        >
                          <span>Go to Contact Page</span>
                          <ArrowRight size={15} />
                        </Link>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* End of Terms Footer Card */}
            <div className="p-6 rounded-2xl bg-[#131725]/40 border border-white/[0.04] text-center text-xs text-[#9A9A9A] flex flex-col sm:flex-row items-center justify-between gap-3 mt-6">
              <span>© 2026 GENFREX. All rights reserved.</span>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-1.5 text-[#0052FF] hover:text-white transition-colors"
              >
                <span>Back to top</span>
                <ArrowUp size={13} />
              </button>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}
