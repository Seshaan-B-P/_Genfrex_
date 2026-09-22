import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle, Shield, ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { talentDisciplines, talentVettingProcess } from '../data/talent';

export default function TalentEcosystem() {
  const [selectedDiscipline, setSelectedDiscipline] = useState(talentDisciplines[0].id);
  const activeDiscipline = talentDisciplines.find(d => d.id === selectedDiscipline) || talentDisciplines[0];

  return (
    <section className="py-28 md:py-40 px-6 md:px-12 bg-[#060608] border-b border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs tracking-[0.25em] text-brand-blue uppercase">
                // THE TALENT CORE
              </span>
              <div className="h-[1px] w-12 bg-brand-blue/30" />
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl">
              THE RIGHT PEOPLE. THE RIGHT EXPERTISE. THE RIGHT MOMENT.
            </h2>
          </div>
          <p className="text-neutral-400 font-light text-sm md:text-base max-w-md">
            We bypass commoditized staffing boards. GENFREX deploys pre-vetted senior technologists and autonomous squads calibrated for immediate velocity.
          </p>
        </div>

        {/* Talent Matrix Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Discipline List (5 Cols) */}
          <div className="lg:col-span-5 border border-white/[0.08] bg-[#09090D] divide-y divide-white/[0.06]">
            <div className="p-4 border-b border-white/10 font-mono text-[11px] tracking-[0.2em] text-neutral-400 uppercase flex items-center justify-between">
              <span>SPECIALIZED CAPABILITY POOLS</span>
              <span className="text-brand-blue">[10 POOLS ACTIVE]</span>
            </div>

            <div className="max-h-[460px] overflow-y-auto scrollbar-thin">
              {talentDisciplines.map((d) => {
                const isSelected = selectedDiscipline === d.id;
                return (
                  <button
                    key={d.id}
                    onClick={() => setSelectedDiscipline(d.id)}
                    data-cursor="hover"
                    className={`w-full p-4 text-left flex items-center justify-between transition-all duration-200 focus:outline-none ${
                      isSelected
                        ? 'bg-brand-blue/15 text-white border-l-4 border-brand-blue pl-5'
                        : 'text-neutral-400 hover:text-white hover:bg-white/[0.02]'
                    }`}
                  >
                    <div>
                      <div className="font-display font-semibold text-sm tracking-wide">
                        {d.title}
                      </div>
                      <div className="font-mono text-[10px] text-neutral-500 mt-0.5">
                        {d.seniority} &bull; {d.experienceAvg} Avg
                      </div>
                    </div>
                    <span className="font-mono text-[11px] text-brand-blue tracking-wider">
                      {d.vettingRate}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Discipline Deep Dive Dossier (7 Cols) */}
          <div className="lg:col-span-7 border border-white/[0.08] bg-[#0c0c10] p-8 md:p-10 relative">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
              <div>
                <span className="font-mono text-[10px] tracking-[0.25em] text-brand-blue uppercase block mb-1">
                  DISCIPLINE PROFILE
                </span>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-white">
                  {activeDiscipline.title}
                </h3>
              </div>
              <span className="px-3 py-1 bg-white/5 border border-white/10 font-mono text-xs text-neutral-300">
                {activeDiscipline.tag}
              </span>
            </div>

            {/* Core Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="p-4 bg-black/40 border border-white/10">
                <span className="font-mono text-[10px] text-neutral-500 block mb-1">ACCEPTANCE GATE</span>
                <span className="font-display font-bold text-lg md:text-xl text-brand-blue">{activeDiscipline.vettingRate}</span>
              </div>
              <div className="p-4 bg-black/40 border border-white/10">
                <span className="font-mono text-[10px] text-neutral-500 block mb-1">AVG EXPERIENCE</span>
                <span className="font-display font-bold text-lg md:text-xl text-white">{activeDiscipline.experienceAvg}</span>
              </div>
              <div className="p-4 bg-black/40 border border-white/10">
                <span className="font-mono text-[10px] text-neutral-500 block mb-1">LEVEL TIERS</span>
                <span className="font-display font-bold text-sm md:text-base text-neutral-200">{activeDiscipline.seniority}</span>
              </div>
            </div>

            {/* Verified Stack / Tooling */}
            <div className="mb-8">
              <span className="font-mono text-[11px] tracking-[0.2em] text-neutral-400 uppercase block mb-3">
                VERIFIED TECH STACK PROFICIENCIES
              </span>
              <div className="flex flex-wrap gap-2">
                {activeDiscipline.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 bg-white/[0.03] border border-white/15 text-xs font-mono text-neutral-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Requisition CTA */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs font-mono text-neutral-400">
                Ready to augment your engineering pipeline in &lt; 72 hours?
              </p>
              <Link
                to="/contact"
                data-cursor="hover"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-blue hover:bg-blue-600 text-white font-mono text-xs tracking-widest uppercase transition-colors"
              >
                <span>REQUEST TALENT DOSSIER</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4-Stage Vetting Rigor Grid */}
        <div className="border border-white/[0.08] bg-black/40 p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-4 h-4 text-brand-blue" />
            <span className="font-mono text-xs tracking-[0.25em] text-white uppercase">
              THE 4-STAGE GENFREX VETTING CRUCIBLE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {talentVettingProcess.map((stage) => (
              <div key={stage.stage} className="border-l border-white/15 pl-4 space-y-2">
                <span className="font-mono text-xs text-brand-blue font-bold">
                  STAGE {stage.stage}
                </span>
                <h4 className="font-display font-semibold text-white text-base">
                  {stage.name}
                </h4>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
