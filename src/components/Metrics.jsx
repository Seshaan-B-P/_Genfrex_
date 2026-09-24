import React from 'react';

export default function Metrics() {
  const metrics = [
    {
      label: 'DIGITAL SERVICES',
      status: 'GROWING',
      subtext: 'Marketing, SEO, custom web & WordPress development.',
    },
    {
      label: 'TALENT NETWORK',
      status: 'GROWING',
      subtext: 'Curated freelancers, graduates & skilled professionals.',
    },
    {
      label: 'BUSINESS CONNECTIONS',
      status: 'GROWING',
      subtext: 'Connecting enterprise goals with verified specialists.',
    },
    {
      label: 'OPPORTUNITIES',
      status: 'GROWING',
      subtext: 'Unlocking high-impact collaborations and career growth.',
    },
  ];

  return (
    <section
      id="impact"
      className="py-16 md:py-20 px-6 md:px-12 bg-[#0C0E17] border-t border-[#0052FF]/15 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#0052FF]/15 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs tracking-[0.25em] text-[#0052FF] uppercase font-bold font-mono">
                03 — QUANTITATIVE IMPACT
              </span>
              <div className="h-[1px] w-12 bg-[#0052FF]" />
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
              BUILDING CONNECTIONS. <br className="hidden sm:inline" />
              <span className="text-[#0052FF]">CREATING OPPORTUNITIES.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#888888] font-light max-w-xs leading-relaxed">
            Measurable ecosystem progress tracking active digital engagements and verified talent matching.
          </p>
        </div>

        {/* Minimal 4-Metric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, idx) => (
            <div
              key={item.label}
              className="p-6 bg-[#131725] border border-[#0052FF]/20 hover:border-[#0052FF] hover:shadow-[0_0_20px_rgba(0,82,255,0.2)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight group-hover:text-[#0052FF] transition-colors">
                    {item.status}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#0052FF] animate-pulse" />
                </div>
                <h3 className="font-mono text-xs font-bold tracking-wider text-white uppercase">
                  {item.label}
                </h3>
                <p className="text-xs text-[#A0A0A0] font-light leading-relaxed">
                  {item.subtext}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-[#666666]">
                <span>0{idx + 1}</span>
                <span className="text-[#0052FF]">ACTIVE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
