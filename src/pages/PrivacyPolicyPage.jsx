import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
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
  FileText,
  Lock,
  Eye,
  Database,
  Users,
  AlertTriangle,
  Cookie,
  Share2,
  ExternalLink,
  HelpCircle,
  Sparkles,
  ArrowUp,
  Search,
  SlidersHorizontal,
  Compass,
  Zap,
  MessageSquare,
  Baby,
  RefreshCw,
  FolderLock,
  Layers
} from 'lucide-react';

const sectionData = [
  {
    id: 'introduction',
    number: '1',
    displayNum: '01',
    title: 'Introduction',
    subtitle: 'Welcome to GENFREX & Policy Scope',
    icon: Compass,
    keywords: ['welcome', 'agency', 'creative', 'digital growth', 'scope', 'services']
  },
  {
    id: 'information-we-collect',
    number: '2',
    displayNum: '02',
    title: 'Information We Collect',
    subtitle: 'Personal, Project, Business & Technical Data',
    icon: Database,
    keywords: ['personal information', 'project', 'business', 'technical', 'ip address', 'browser', 'cookies']
  },
  {
    id: 'how-we-use-information',
    number: '3',
    displayNum: '03',
    title: 'How We Use Your Information',
    subtitle: '8 Core Operational & Delivery Purposes',
    icon: Zap,
    keywords: ['proposals', 'quotations', 'services', 'communication', 'security', 'legal']
  },
  {
    id: 'contact-forms-communication',
    number: '4',
    displayNum: '04',
    title: 'Contact Forms and Communication',
    subtitle: 'Website Inquiries, WhatsApp & Security Advice',
    icon: MessageSquare,
    keywords: ['contact form', 'whatsapp', 'email', 'credentials', 'passwords', 'inquiry']
  },
  {
    id: 'cookies-technologies',
    number: '5',
    displayNum: '05',
    title: 'Cookies and Similar Technologies',
    subtitle: 'Website Functionality, Performance & Consent',
    icon: Cookie,
    keywords: ['cookies', 'tracking', 'analytics', 'performance', 'browser settings']
  },
  {
    id: 'sharing-disclosure',
    number: '6',
    displayNum: '06',
    title: 'Sharing and Disclosure of Information',
    subtitle: 'Zero Data Selling & Verified Third Parties',
    icon: Share2,
    keywords: ['sharing', 'service providers', 'freelancers', 'professionals', 'legal', 'security']
  },
  {
    id: 'data-storage-security',
    number: '7',
    displayNum: '07',
    title: 'Data Storage and Security',
    subtitle: 'Access Controls & Protective Measures',
    icon: Lock,
    keywords: ['storage', 'cloud', 'hosting', 'security', 'confidentiality', 'encryption']
  },
  {
    id: 'data-retention',
    number: '8',
    displayNum: '08',
    title: 'Data Retention',
    subtitle: 'Operational Need & Deletion / Anonymization',
    icon: Clock,
    keywords: ['retention', 'records', 'delete', 'anonymize', 'legal period']
  },
  {
    id: 'your-privacy-rights',
    number: '9',
    displayNum: '09',
    title: 'Your Privacy Rights',
    subtitle: 'Access, Correction, Deletion & Consent Withdrawal',
    icon: Users,
    keywords: ['rights', 'access', 'correction', 'deletion', 'consent', 'complaints']
  },
  {
    id: 'third-party-services',
    number: '10',
    displayNum: '10',
    title: 'Third-Party Websites and Services',
    subtitle: 'External Platforms & Independent Policies',
    icon: ExternalLink,
    keywords: ['third-party', 'external links', 'social media', 'platforms']
  },
  {
    id: 'childrens-privacy',
    number: '11',
    displayNum: '11',
    title: "Children's Privacy",
    subtitle: 'Business & Professional Audience Focus',
    icon: Baby,
    keywords: ['children', 'age', 'parental', 'minor', 'protection']
  },
  {
    id: 'changes-to-policy',
    number: '12',
    displayNum: '12',
    title: 'Changes to This Privacy Policy',
    subtitle: 'Periodic Review & Last Updated Revisions',
    icon: RefreshCw,
    keywords: ['updates', 'changes', 'revisions', 'amendments']
  },
  {
    id: 'contact-us',
    number: '13',
    displayNum: '13',
    title: 'Contact Us',
    subtitle: 'Founder Details, Direct Email & WhatsApp',
    icon: Mail,
    keywords: ['contact', 'dharshan', 'founder', 'email', 'phone', 'whatsapp']
  }
];

export default function PrivacyPolicyPage() {
  // Selectively opened sections
  const [openSections, setOpenSections] = useState({
    'introduction': true,
    'information-we-collect': true,
    'how-we-use-information': false,
    'contact-forms-communication': false,
    'cookies-technologies': false,
    'sharing-disclosure': false,
    'data-storage-security': false,
    'data-retention': false,
    'your-privacy-rights': false,
    'third-party-services': false,
    'childrens-privacy': false,
    'changes-to-policy': false,
    'contact-us': true
  });

  const [activeSection, setActiveSection] = useState('introduction');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedField, setCopiedField] = useState(null);

  useEffect(() => {
    document.title = "Privacy Policy | GENFREX Digital Growth & Creative Agency";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Read the official Privacy Policy of GENFREX. Learn how we collect, use, store, and protect your information when engaging with our digital growth, marketing, and technology services.";
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
    // Ensure the section is expanded when clicking to jump to it
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
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[60%] left-[-10%] w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">

        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[#9A9A9A]">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={14} className="text-[#9A9A9A]/60" />
          <span className="text-[#9A9A9A]/80">Legal</span>
          <ChevronRight size={14} className="text-[#9A9A9A]/60" />
          <span className="text-[#0052FF] font-medium">Privacy Policy</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-10 border-b border-white/[0.08] pb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0052FF]/10 border border-[#0052FF]/30 text-[#0052FF] text-xs font-semibold tracking-wider uppercase mb-5">
            <ShieldCheck size={14} />
            <span>Interactive Policy Portal</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6">
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-3">
                PRIVACY <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#0052FF]">POLICY</span>
              </h1>
              <p className="text-base sm:text-lg text-[#9A9A9A] font-light max-w-2xl leading-relaxed">
                GENFREX is committed to protecting your privacy and ensuring transparency in how personal, business, and project information is handled across our services.
              </p>
            </div>

            {/* Accordion Global Controls */}
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

          {/* Metadata Badges & Search Filter */}
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

            {/* Live Keyword Search Input */}
            <div className="relative max-w-xs sm:w-72">
              <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9A9A9A]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search policy topics..."
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

          {/* Left Column: Sticky Table of Contents & Founder Widget (Desktop) */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-24 space-y-6">

              {/* Interactive Section Directory */}
              <div className="bg-[#131725]/90 backdrop-blur-md rounded-2xl p-5 border border-white/[0.08] shadow-xl">
                <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-white/[0.08]">
                  <span className="text-xs font-semibold tracking-wider uppercase text-white flex items-center gap-2">
                    <FileText size={15} className="text-[#0052FF]" />
                    Interactive Index
                  </span>
                  <span className="text-[11px] text-[#0052FF] font-mono">
                    {totalExpanded}/13 Open
                  </span>
                </div>

                <nav className="space-y-1 max-h-[48vh] overflow-y-auto pr-1 text-sm custom-scrollbar">
                  {sectionData.map((item) => {
                    const isOpen = !!openSections[item.id];
                    const isActive = activeSection === item.id;
                    const Icon = item.icon;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left px-3 py-2.5 rounded-xl text-xs transition-all flex items-center justify-between gap-2 ${isActive
                          ? 'bg-[#0052FF] text-white font-medium shadow-md shadow-[#0052FF]/20'
                          : 'text-[#9A9A9A] hover:text-white hover:bg-white/[0.04]'
                          }`}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          <Icon size={14} className={isActive ? 'text-white' : 'text-[#0052FF] flex-shrink-0'} />
                          <span className="truncate">{item.number}. {item.title}</span>
                        </div>
                        <span
                          className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${isOpen
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

              {/* Direct Founder Contact Box */}
              <div className="bg-gradient-to-br from-[#131725] to-[#0A0D18] rounded-2xl p-5 border border-[#0052FF]/25 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#0052FF]/10 rounded-full blur-xl pointer-events-none" />
                <span className="text-[10px] font-semibold tracking-widest text-[#0052FF] uppercase block mb-1">
                  PRIVACY INQUIRIES
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

          {/* Right Column: Accordion Sections */}
          <div className="lg:col-span-8 space-y-4">

            {/* Mobile Table of Contents Quick Selector */}
            <div className="lg:hidden bg-[#131725] p-4 rounded-xl border border-white/[0.08] mb-4">
              <label htmlFor="mobile-toc-select" className="block text-xs font-semibold uppercase tracking-wider text-[#0052FF] mb-2">
                Quick Jump to Section:
              </label>
              <select
                id="mobile-toc-select"
                aria-label="Quick Jump to Policy Section"
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

            {/* ============================================================== */}
            {/* ACCORDION 1: Introduction */}
            {/* ============================================================== */}
            <div
              id="introduction"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openSections['introduction']
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
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">
                      Welcome to GENFREX & Policy Scope
                    </p>
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
                        <p className="text-white font-normal">
                          Welcome to <strong>GENFREX</strong>.
                        </p>
                        <p>
                          GENFREX is a creative and digital growth agency providing digital marketing, search engine optimization, commercial productions, website and software development, content and creative services, and digital talent solutions.
                        </p>
                        <p>
                          We respect your privacy and are committed to protecting the personal information you share with us.
                        </p>
                        <p>
                          This Privacy Policy explains how GENFREX collects, uses, stores, and protects information when you visit our website, contact us, submit a project inquiry, or engage with our services.
                        </p>
                        <div className="p-4 rounded-xl bg-[#0052FF]/10 border border-[#0052FF]/20 text-white font-normal flex items-start gap-3">
                          <ShieldCheck size={20} className="text-[#0052FF] flex-shrink-0 mt-0.5" />
                          <span>By using our website, you acknowledge this Privacy Policy.</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ============================================================== */}
            {/* ACCORDION 2: Information We Collect */}
            {/* ============================================================== */}
            <div
              id="information-we-collect"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openSections['information-we-collect']
                ? 'bg-[#131725] border-[#0052FF]/30 shadow-xl shadow-[#0052FF]/5'
                : 'bg-[#131725]/60 border-white/[0.06] hover:border-white/[0.12]'
                }`}
            >
              <button
                type="button"
                onClick={() => toggleSection('information-we-collect')}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={openSections['information-we-collect']}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF] flex-shrink-0">
                    <Database size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono text-[#0052FF] font-semibold">02</span>
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">Information We Collect</h2>
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">
                      Personal, Project, Business & Technical Data
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#9A9A9A] hidden md:inline-block">
                    {openSections['information-we-collect'] ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9A9A9A] transition-transform duration-300 ${openSections['information-we-collect'] ? 'rotate-180 text-white bg-[#0052FF]/20 border-[#0052FF]/40' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openSections['information-we-collect'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.06]">
                      <p className="text-sm sm:text-base text-[#C2C2C2] font-light leading-relaxed mb-6">
                        Depending on how you interact with GENFREX, we may collect the following categories of information.
                      </p>

                      {/* Part A: Personal Information */}
                      <div className="mb-5 p-5 rounded-xl bg-[#0C0E17]/70 border border-white/[0.06]">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#0052FF]/20 text-[#0052FF]">Part A</span>
                          <h3 className="text-base sm:text-lg font-medium text-white">Personal Information</h3>
                        </div>
                        <p className="text-xs sm:text-sm text-[#9A9A9A] mb-3">
                          When you submit an inquiry or contact us, you may provide:
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#C2C2C2] mb-4">
                          {[
                            'Full name',
                            'Email address',
                            'Phone number or WhatsApp number',
                            'Company or business name',
                            'Project requirements and service preferences',
                            'Budget range and expected project timeline'
                          ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 bg-[#131725]/80 p-2.5 rounded-lg border border-white/[0.04]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF] flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-xs text-[#9A9A9A] italic border-t border-white/[0.06] pt-3">
                          You are responsible for ensuring that the information you provide is accurate and that you have permission to share any information relating to other individuals.
                        </p>
                      </div>

                      {/* Part B: Project and Business Information */}
                      <div className="mb-5 p-5 rounded-xl bg-[#0C0E17]/70 border border-white/[0.06]">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#0052FF]/20 text-[#0052FF]">Part B</span>
                          <h3 className="text-base sm:text-lg font-medium text-white">Project and Business Information</h3>
                        </div>
                        <p className="text-sm text-[#C2C2C2] font-light leading-relaxed mb-3">
                          When discussing or engaging in a project, we may receive information such as business requirements, project documents, creative assets, website content, technical specifications, and other materials necessary to understand and deliver the agreed services.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-white/90 bg-[#131725] p-3 rounded-lg border border-emerald-500/20">
                          <ShieldCheck size={16} className="text-emerald-400 flex-shrink-0" />
                          <span>We handle client information, business data, project information, and credentials with appropriate confidentiality.</span>
                        </div>
                      </div>

                      {/* Part C: Technical Information */}
                      <div className="p-5 rounded-xl bg-[#0C0E17]/70 border border-white/[0.06]">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#0052FF]/20 text-[#0052FF]">Part C</span>
                          <h3 className="text-base sm:text-lg font-medium text-white">Technical Information</h3>
                        </div>
                        <p className="text-sm text-[#C2C2C2] font-light leading-relaxed mb-3">
                          When you visit our website, certain technical information may be collected by our website infrastructure or third-party services, depending on the tools and configurations in use.
                        </p>
                        <p className="text-xs sm:text-sm text-[#9A9A9A] mb-3">
                          This may include:
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#C2C2C2] mb-3">
                          {[
                            'IP address and general device information',
                            'Browser type and operating system',
                            'Pages visited and website interactions',
                            'Referring website or source',
                            'Cookies or similar technologies, where enabled'
                          ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 bg-[#131725]/80 p-2.5 rounded-lg border border-white/[0.04]">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-xs text-[#9A9A9A] border-t border-white/[0.06] pt-3">
                          The exact technical information collected depends on the services and technologies implemented on the website.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ============================================================== */}
            {/* ACCORDION 3: How We Use Your Information */}
            {/* ============================================================== */}
            <div
              id="how-we-use-information"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openSections['how-we-use-information']
                ? 'bg-[#131725] border-[#0052FF]/30 shadow-xl shadow-[#0052FF]/5'
                : 'bg-[#131725]/60 border-white/[0.06] hover:border-white/[0.12]'
                }`}
            >
              <button
                type="button"
                onClick={() => toggleSection('how-we-use-information')}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={openSections['how-we-use-information']}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF] flex-shrink-0">
                    <Zap size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono text-[#0052FF] font-semibold">03</span>
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">How We Use Your Information</h2>
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">
                      8 Core Operational & Delivery Purposes
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#9A9A9A] hidden md:inline-block">
                    {openSections['how-we-use-information'] ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9A9A9A] transition-transform duration-300 ${openSections['how-we-use-information'] ? 'rotate-180 text-white bg-[#0052FF]/20 border-[#0052FF]/40' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openSections['how-we-use-information'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.06]">
                      <p className="text-sm sm:text-base text-[#C2C2C2] font-light leading-relaxed mb-5">
                        GENFREX may use collected information for the following purposes:
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                        {[
                          'Responding to inquiries and communication requests.',
                          'Understanding your business objectives and project requirements.',
                          'Preparing proposals, quotations, and project scopes.',
                          'Delivering agreed digital marketing, creative, technology, and talent services.',
                          'Communicating about project progress, deliverables, and support.',
                          'Improving website functionality, service quality, and user experience.',
                          'Maintaining website security and preventing misuse.',
                          'Meeting applicable legal and contractual obligations.'
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0C0E17]/60 border border-white/[0.05]">
                            <div className="w-5 h-5 rounded-full bg-[#0052FF]/20 text-[#0052FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check size={12} strokeWidth={2.5} />
                            </div>
                            <span className="text-xs sm:text-sm text-[#C2C2C2] font-light leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs sm:text-sm text-[#9A9A9A]">
                        We do not intend to collect personal information beyond what is reasonably necessary for the relevant purpose.
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ============================================================== */}
            {/* ACCORDION 4: Contact Forms and Communication */}
            {/* ============================================================== */}
            <div
              id="contact-forms-communication"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openSections['contact-forms-communication']
                ? 'bg-[#131725] border-[#0052FF]/30 shadow-xl shadow-[#0052FF]/5'
                : 'bg-[#131725]/60 border-white/[0.06] hover:border-white/[0.12]'
                }`}
            >
              <button
                type="button"
                onClick={() => toggleSection('contact-forms-communication')}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={openSections['contact-forms-communication']}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF] flex-shrink-0">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono text-[#0052FF] font-semibold">04</span>
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">Contact Forms and Communication</h2>
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">
                      Website Inquiries, WhatsApp & Security Advice
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#9A9A9A] hidden md:inline-block">
                    {openSections['contact-forms-communication'] ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9A9A9A] transition-transform duration-300 ${openSections['contact-forms-communication'] ? 'rotate-180 text-white bg-[#0052FF]/20 border-[#0052FF]/40' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openSections['contact-forms-communication'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.06]">
                      <div className="space-y-4 text-sm sm:text-base text-[#C2C2C2] font-light leading-relaxed mb-6">
                        <p>
                          If you contact GENFREX through our website, email, telephone, or WhatsApp, we may use the information you provide to respond to your request and communicate about your project.
                        </p>
                        <p>
                          Submitting a project inquiry does not automatically create a client relationship or guarantee acceptance of a project.
                        </p>
                        <p>
                          If you contact us through WhatsApp or another third-party communication platform, your use of that platform is also subject to the platform's own privacy policy and terms.
                        </p>
                      </div>

                      {/* Crucial Security Notice */}
                      <div className="p-4 sm:p-5 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-3.5">
                        <AlertTriangle size={20} className="text-amber-400 flex-shrink-0 mt-0.5" />
                        <div className="text-xs sm:text-sm text-amber-200/90 leading-relaxed">
                          <strong className="text-amber-300 font-medium block mb-1">Security Recommendation</strong>
                          Please avoid submitting passwords, payment card details, sensitive personal information, or confidential credentials through general website contact forms.
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ============================================================== */}
            {/* ACCORDION 5: Cookies and Similar Technologies */}
            {/* ============================================================== */}
            <div
              id="cookies-technologies"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openSections['cookies-technologies']
                ? 'bg-[#131725] border-[#0052FF]/30 shadow-xl shadow-[#0052FF]/5'
                : 'bg-[#131725]/60 border-white/[0.06] hover:border-white/[0.12]'
                }`}
            >
              <button
                type="button"
                onClick={() => toggleSection('cookies-technologies')}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={openSections['cookies-technologies']}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF] flex-shrink-0">
                    <Cookie size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono text-[#0052FF] font-semibold">05</span>
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">Cookies and Similar Technologies</h2>
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">
                      Website Functionality, Performance & Consent
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#9A9A9A] hidden md:inline-block">
                    {openSections['cookies-technologies'] ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9A9A9A] transition-transform duration-300 ${openSections['cookies-technologies'] ? 'rotate-180 text-white bg-[#0052FF]/20 border-[#0052FF]/40' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openSections['cookies-technologies'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.06]">
                      <div className="space-y-4 text-sm sm:text-base text-[#C2C2C2] font-light leading-relaxed mb-5">
                        <p>
                          Our website may use cookies or similar technologies to support essential functionality, security, performance, or analytics, depending on the tools enabled.
                        </p>
                        <p className="text-white font-medium text-sm">
                          Cookies may be used to:
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#C2C2C2]">
                          {[
                            'Maintain website functionality.',
                            'Understand website usage and performance.',
                            'Improve navigation and user experience.',
                            'Support security and technical operations.'
                          ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2.5 p-3 rounded-lg bg-[#0C0E17]/60 border border-white/[0.04]">
                              <Cookie size={14} className="text-[#0052FF] flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <p>
                          Where non-essential cookies or tracking technologies are implemented, appropriate consent or preference mechanisms will be provided where required by applicable law.
                        </p>
                        <p>
                          You can manage cookies through your browser settings. Disabling certain cookies may affect some website functionality.
                        </p>
                        <p className="text-xs text-[#9A9A9A] border-t border-white/[0.06] pt-3">
                          The actual cookies and tracking technologies used will depend on the website's implementation.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ============================================================== */}
            {/* ACCORDION 6: Sharing and Disclosure of Information */}
            {/* ============================================================== */}
            <div
              id="sharing-disclosure"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openSections['sharing-disclosure']
                ? 'bg-[#131725] border-[#0052FF]/30 shadow-xl shadow-[#0052FF]/5'
                : 'bg-[#131725]/60 border-white/[0.06] hover:border-white/[0.12]'
                }`}
            >
              <button
                type="button"
                onClick={() => toggleSection('sharing-disclosure')}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={openSections['sharing-disclosure']}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF] flex-shrink-0">
                    <Share2 size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono text-[#0052FF] font-semibold">06</span>
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">Sharing and Disclosure of Information</h2>
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">
                      Zero Data Selling & Verified Third Parties
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#9A9A9A] hidden md:inline-block">
                    {openSections['sharing-disclosure'] ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9A9A9A] transition-transform duration-300 ${openSections['sharing-disclosure'] ? 'rotate-180 text-white bg-[#0052FF]/20 border-[#0052FF]/40' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openSections['sharing-disclosure'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.06]">
                      {/* Zero Sale Commitment Banner */}
                      <div className="p-4 rounded-xl bg-[#0052FF]/10 border border-[#0052FF]/25 text-white font-medium text-sm mb-6 flex items-center gap-3">
                        <ShieldCheck size={20} className="text-[#0052FF] flex-shrink-0" />
                        <span>GENFREX does not sell personal information to third parties as a business practice.</span>
                      </div>

                      <p className="text-sm sm:text-base text-[#C2C2C2] font-light leading-relaxed mb-5">
                        We may share information where necessary with:
                      </p>

                      <div className="space-y-3.5">
                        {/* A. Service Providers */}
                        <div className="p-4 sm:p-5 rounded-xl bg-[#0C0E17]/70 border border-white/[0.06]">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#0052FF]/20 text-[#0052FF]">Part A</span>
                            <h3 className="text-sm sm:text-base font-medium text-white">Service Providers</h3>
                          </div>
                          <p className="text-xs sm:text-sm text-[#C2C2C2] leading-relaxed">
                            Third-party providers may support website hosting, deployment, email communication, analytics, project management, cloud infrastructure, or other operational functions. Such providers should receive only the information reasonably required to perform their services.
                          </p>
                        </div>

                        {/* B. Project-Based Professionals */}
                        <div className="p-4 sm:p-5 rounded-xl bg-[#0C0E17]/70 border border-white/[0.06]">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#0052FF]/20 text-[#0052FF]">Part B</span>
                            <h3 className="text-sm sm:text-base font-medium text-white">Project-Based Professionals</h3>
                          </div>
                          <p className="text-xs sm:text-sm text-[#C2C2C2] leading-relaxed">
                            Where a project requires developers, designers, marketers, content creators, or other digital professionals, relevant project information may be shared with suitable professionals when necessary to perform the agreed work. We aim to limit shared information to what is necessary for the project and to maintain appropriate confidentiality arrangements.
                          </p>
                        </div>

                        {/* C. Legal and Regulatory Requirements */}
                        <div className="p-4 sm:p-5 rounded-xl bg-[#0C0E17]/70 border border-white/[0.06]">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#0052FF]/20 text-[#0052FF]">Part C</span>
                            <h3 className="text-sm sm:text-base font-medium text-white">Legal and Regulatory Requirements</h3>
                          </div>
                          <p className="text-xs sm:text-sm text-[#C2C2C2] leading-relaxed">
                            Information may be disclosed when required by applicable law, a valid legal process, or a lawful request from an authorized authority.
                          </p>
                        </div>

                        {/* D. Business and Security Purposes */}
                        <div className="p-4 sm:p-5 rounded-xl bg-[#0C0E17]/70 border border-white/[0.06]">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#0052FF]/20 text-[#0052FF]">Part D</span>
                            <h3 className="text-sm sm:text-base font-medium text-white">Business and Security Purposes</h3>
                          </div>
                          <p className="text-xs sm:text-sm text-[#C2C2C2] leading-relaxed">
                            Information may be processed or disclosed where reasonably necessary to protect the rights, security, property, or legitimate interests of GENFREX, its clients, or other individuals, subject to applicable law.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ============================================================== */}
            {/* ACCORDION 7: Data Storage and Security */}
            {/* ============================================================== */}
            <div
              id="data-storage-security"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openSections['data-storage-security']
                ? 'bg-[#131725] border-[#0052FF]/30 shadow-xl shadow-[#0052FF]/5'
                : 'bg-[#131725]/60 border-white/[0.06] hover:border-white/[0.12]'
                }`}
            >
              <button
                type="button"
                onClick={() => toggleSection('data-storage-security')}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={openSections['data-storage-security']}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF] flex-shrink-0">
                    <Lock size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono text-[#0052FF] font-semibold">07</span>
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">Data Storage and Security</h2>
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">
                      Access Controls & Protective Measures
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#9A9A9A] hidden md:inline-block">
                    {openSections['data-storage-security'] ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9A9A9A] transition-transform duration-300 ${openSections['data-storage-security'] ? 'rotate-180 text-white bg-[#0052FF]/20 border-[#0052FF]/40' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openSections['data-storage-security'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.06]">
                      <div className="space-y-4 text-sm sm:text-base text-[#C2C2C2] font-light leading-relaxed">
                        <p>
                          GENFREX takes reasonable measures to protect personal and business information against unauthorized access, disclosure, alteration, loss, or misuse.
                        </p>
                        <p>
                          Depending on the services used, information may be stored or processed through hosting providers, cloud platforms, email services, or other technology providers.
                        </p>
                        <p>
                          We seek to use appropriate access controls, confidentiality practices, and security measures based on the nature of the information and the project requirements.
                        </p>
                        <p className="text-[#9A9A9A] text-xs sm:text-sm">
                          However, no method of electronic transmission or storage can be guaranteed to be completely secure.
                        </p>
                        <div className="p-3.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs text-white/90">
                          Clients should not transmit sensitive credentials through unsecured communication channels.
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ============================================================== */}
            {/* ACCORDION 8: Data Retention */}
            {/* ============================================================== */}
            <div
              id="data-retention"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openSections['data-retention']
                ? 'bg-[#131725] border-[#0052FF]/30 shadow-xl shadow-[#0052FF]/5'
                : 'bg-[#131725]/60 border-white/[0.06] hover:border-white/[0.12]'
                }`}
            >
              <button
                type="button"
                onClick={() => toggleSection('data-retention')}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={openSections['data-retention']}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF] flex-shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono text-[#0052FF] font-semibold">08</span>
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">Data Retention</h2>
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">
                      Operational Need & Deletion / Anonymization
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#9A9A9A] hidden md:inline-block">
                    {openSections['data-retention'] ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9A9A9A] transition-transform duration-300 ${openSections['data-retention'] ? 'rotate-180 text-white bg-[#0052FF]/20 border-[#0052FF]/40' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openSections['data-retention'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.06]">
                      <div className="space-y-4 text-sm sm:text-base text-[#C2C2C2] font-light leading-relaxed">
                        <p>
                          We retain personal information only for as long as reasonably necessary for the purposes described in this policy, including responding to inquiries, providing services, maintaining business records, resolving disputes, and complying with applicable legal obligations.
                        </p>
                        <p>
                          The retention period may vary depending on the type of information, the nature of the engagement, contractual requirements, and applicable law.
                        </p>
                        <p>
                          When information is no longer required, we will take reasonable steps to delete it or anonymize it, subject to applicable legal and operational requirements.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ============================================================== */}
            {/* ACCORDION 9: Your Privacy Rights */}
            {/* ============================================================== */}
            <div
              id="your-privacy-rights"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openSections['your-privacy-rights']
                ? 'bg-[#131725] border-[#0052FF]/30 shadow-xl shadow-[#0052FF]/5'
                : 'bg-[#131725]/60 border-white/[0.06] hover:border-white/[0.12]'
                }`}
            >
              <button
                type="button"
                onClick={() => toggleSection('your-privacy-rights')}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={openSections['your-privacy-rights']}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF] flex-shrink-0">
                    <Users size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono text-[#0052FF] font-semibold">09</span>
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">Your Privacy Rights</h2>
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">
                      Access, Correction, Deletion & Consent Withdrawal
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#9A9A9A] hidden md:inline-block">
                    {openSections['your-privacy-rights'] ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9A9A9A] transition-transform duration-300 ${openSections['your-privacy-rights'] ? 'rotate-180 text-white bg-[#0052FF]/20 border-[#0052FF]/40' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openSections['your-privacy-rights'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.06]">
                      <p className="text-sm sm:text-base text-[#C2C2C2] font-light leading-relaxed mb-4">
                        Subject to applicable law, you may have rights regarding your personal information, including:
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {[
                          'Requesting access to personal information we hold about you.',
                          'Requesting correction or updating of inaccurate information.',
                          'Requesting deletion of personal information where applicable.',
                          'Withdrawing consent where processing is based on consent.',
                          'Raising questions or complaints about our handling of personal information.'
                        ].map((right, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0C0E17]/60 border border-white/[0.05]">
                            <span className="w-2 h-2 rounded-full bg-[#0052FF] mt-1.5 flex-shrink-0" />
                            <span className="text-xs sm:text-sm text-[#C2C2C2] font-light">{right}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 rounded-xl bg-[#0C0E17]/80 border border-white/[0.06] text-xs sm:text-sm text-[#9A9A9A] space-y-2">
                        <p>
                          To exercise a privacy-related request, contact us using the details provided below.
                        </p>
                        <p>
                          We may need to verify your identity before processing a request. Certain information may need to be retained where required by law or for legitimate contractual purposes.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ============================================================== */}
            {/* ACCORDION 10: Third-Party Websites and Services */}
            {/* ============================================================== */}
            <div
              id="third-party-services"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openSections['third-party-services']
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
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">Third-Party Websites and Services</h2>
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">
                      External Platforms & Independent Policies
                    </p>
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
                          Our website may contain links to third-party websites, social media platforms, communication services, or external tools.
                        </p>
                        <p>
                          These third-party services operate independently and have their own privacy policies, terms, and data-handling practices.
                        </p>
                        <p>
                          GENFREX is not responsible for the privacy practices or content of third-party websites that we do not operate.
                        </p>
                        <p className="text-xs text-[#9A9A9A]">
                          We encourage users to review the privacy policies of external services before providing personal information.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ============================================================== */}
            {/* ACCORDION 11: Children's Privacy */}
            {/* ============================================================== */}
            <div
              id="childrens-privacy"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openSections['childrens-privacy']
                ? 'bg-[#131725] border-[#0052FF]/30 shadow-xl shadow-[#0052FF]/5'
                : 'bg-[#131725]/60 border-white/[0.06] hover:border-white/[0.12]'
                }`}
            >
              <button
                type="button"
                onClick={() => toggleSection('childrens-privacy')}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={openSections['childrens-privacy']}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF] flex-shrink-0">
                    <Baby size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono text-[#0052FF] font-semibold">11</span>
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">Children's Privacy</h2>
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">
                      Business & Professional Audience Focus
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#9A9A9A] hidden md:inline-block">
                    {openSections['childrens-privacy'] ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9A9A9A] transition-transform duration-300 ${openSections['childrens-privacy'] ? 'rotate-180 text-white bg-[#0052FF]/20 border-[#0052FF]/40' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openSections['childrens-privacy'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.06]">
                      <div className="space-y-4 text-sm sm:text-base text-[#C2C2C2] font-light leading-relaxed">
                        <p>
                          Our website and services are intended for businesses, professionals, and individuals seeking digital or creative services.
                        </p>
                        <p>
                          We do not knowingly seek to collect personal information from children in circumstances where such collection is not permitted by applicable law.
                        </p>
                        <p>
                          If you believe that a child has provided personal information to us inappropriately, please contact us so that we can review the matter and take appropriate action.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ============================================================== */}
            {/* ACCORDION 12: Changes to This Privacy Policy */}
            {/* ============================================================== */}
            <div
              id="changes-to-policy"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openSections['changes-to-policy']
                ? 'bg-[#131725] border-[#0052FF]/30 shadow-xl shadow-[#0052FF]/5'
                : 'bg-[#131725]/60 border-white/[0.06] hover:border-white/[0.12]'
                }`}
            >
              <button
                type="button"
                onClick={() => toggleSection('changes-to-policy')}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={openSections['changes-to-policy']}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF] flex-shrink-0">
                    <RefreshCw size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono text-[#0052FF] font-semibold">12</span>
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">Changes to This Privacy Policy</h2>
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">
                      Periodic Review & Last Updated Revisions
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#9A9A9A] hidden md:inline-block">
                    {openSections['changes-to-policy'] ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9A9A9A] transition-transform duration-300 ${openSections['changes-to-policy'] ? 'rotate-180 text-white bg-[#0052FF]/20 border-[#0052FF]/40' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openSections['changes-to-policy'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.06]">
                      <div className="space-y-4 text-sm sm:text-base text-[#C2C2C2] font-light leading-relaxed">
                        <p>
                          GENFREX may update this Privacy Policy from time to time to reflect changes in our services, website technologies, operational practices, or applicable legal requirements.
                        </p>
                        <p>
                          Any updated version will be published on this page with a revised <strong>Last Updated</strong> date.
                        </p>
                        <p>
                          We encourage visitors to review this page periodically to remain informed about how their information is handled.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ============================================================== */}
            {/* ACCORDION 13: Contact Us (Prominent Founder Card) */}
            {/* ============================================================== */}
            <div
              id="contact-us"
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openSections['contact-us']
                ? 'bg-gradient-to-br from-[#131725] via-[#101422] to-[#0A0D18] border-[#0052FF]/40 shadow-2xl shadow-[#0052FF]/10'
                : 'bg-[#131725]/60 border-white/[0.06] hover:border-white/[0.12]'
                }`}
            >
              <button
                type="button"
                onClick={() => toggleSection('contact-us')}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={openSections['contact-us']}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0052FF] flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-[#0052FF]/30">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-mono text-cyan-400 font-semibold">13</span>
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">Contact Us</h2>
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-light hidden sm:block">
                      Founder Details, Direct Email & WhatsApp
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#9A9A9A] hidden md:inline-block">
                    {openSections['contact-us'] ? 'Collapse' : 'Expand'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9A9A9A] transition-transform duration-300 ${openSections['contact-us'] ? 'rotate-180 text-white bg-[#0052FF]/20 border-[#0052FF]/40' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openSections['contact-us'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-8 pb-8 pt-1 border-t border-white/[0.06]">
                      <p className="text-sm sm:text-base text-[#C2C2C2] font-light leading-relaxed mb-6">
                        For questions, requests, or concerns relating to this Privacy Policy or the handling of your personal information, please contact:
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

            {/* End of Policy Footer Card */}
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
