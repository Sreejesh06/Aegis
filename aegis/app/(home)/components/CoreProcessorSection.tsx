export default function CoreProcessorSection() {
  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden bg-white" id="core-processor">
      <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none select-none overflow-hidden z-0">
        <h3 className="text-[clamp(6rem,18vw,16rem)] font-black text-black/[0.03] tracking-tighter leading-none whitespace-nowrap translate-y-6 uppercase">ENGINE</h3>
      </div>
      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-black border-[2px] border-black px-4 py-1.5 rounded-full mb-6 shadow-[4px_4px_0_#fe6b00]">
            <div className="w-2 h-2 rounded-full bg-[#fe6b00] animate-pulse"></div>
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Core Architecture</span>
          </div>
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black tracking-tighter leading-[0.95] text-black mb-5" style={{fontFamily:'Manrope,sans-serif'}}>What powers<br/>every policy.</h2>
          <p className="text-base md:text-lg font-medium text-black/40 max-w-xl mx-auto leading-relaxed">Five interconnected modules working in milliseconds to detect, verify, and settle—automatically.</p>
        </div>

        <div style={{display:'grid'}} className="grid-cols-1 md:grid-cols-12 gap-5">
          {/* Parametric Triggers */}
          <div className="md:col-span-7 bg-[#1a1a1a] border-[3px] border-black rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[320px] relative overflow-hidden group hover:-translate-y-1 transition-all duration-500 shadow-[6px_6px_0_#fe6b00]">
            <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage:'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',backgroundSize:'30px 30px'}}></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#fe6b00] border-[2px] border-black flex items-center justify-center shadow-[3px_3px_0_#000]">
                  <span className="material-symbols-outlined text-black text-2xl" style={{fontVariationSettings:"'FILL' 1"}}>offline_bolt</span>
                </div>
                <div className="bg-[#fe6b00]/20 border border-[#fe6b00]/40 px-3 py-1 rounded-full">
                  <span className="text-[10px] font-black text-[#fe6b00] uppercase tracking-wider">Primary Engine</span>
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3">Parametric Triggers</h3>
              <p className="text-[14px] text-white/40 font-medium leading-relaxed max-w-md">Rules-based automated execution. When environmental thresholds are crossed, the system fires instantly—no human in the loop.</p>
            </div>
            <div className="relative z-10 flex items-center gap-3 mt-6">
              {['Live','12 Zones Active','<200ms'].map((l,i) => (
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5" key={i}>
                  {i===0 && <div className="w-2 h-2 rounded-full bg-[#fe6b00] animate-pulse"></div>}
                  <span className="text-[10px] font-black text-white/50 uppercase tracking-wider">{l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Worker Profiling */}
          <div className="md:col-span-5 bg-[#f9f9f5] border-[3px] border-black rounded-3xl p-7 md:p-8 flex flex-col min-h-[320px] group hover:-translate-y-1 transition-all duration-500 shadow-[6px_6px_0_#000]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-black border-[2px] border-black flex items-center justify-center"><span className="material-symbols-outlined text-white text-xl">person_search</span></div>
              <span className="text-[10px] font-black text-black/30 uppercase tracking-widest">Identity Layer</span>
            </div>
            <h3 className="text-2xl font-black text-black tracking-tight mb-3">Worker Profiling</h3>
            <p className="text-[13px] text-black/40 font-medium leading-relaxed mb-auto">Verified historical identity and work patterns. Each gig worker gets a unique risk profile built over time.</p>
            <div className="mt-5 bg-white border-[2px] border-black/10 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-lg text-black/40">person</span></div>
              <div className="flex-1 min-w-0">
                <div className="h-2.5 bg-black/10 rounded-full w-24 mb-2"></div>
                <div className="h-2 bg-black/5 rounded-full w-16"></div>
              </div>
              <div className="bg-green-100 border border-green-300 text-green-700 text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shrink-0">Verified</div>
            </div>
          </div>

          {/* AI Risk Engine */}
          <div className="md:col-span-5 bg-[#f9f9f5] border-[3px] border-black rounded-3xl p-7 md:p-8 flex flex-col min-h-[280px] group hover:-translate-y-1 transition-all duration-500 shadow-[6px_6px_0_#000]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-[#a855f7] border-[2px] border-black flex items-center justify-center"><span className="material-symbols-outlined text-white text-xl">psychology</span></div>
              <span className="text-[10px] font-black text-black/30 uppercase tracking-widest">Intelligence</span>
            </div>
            <h3 className="text-2xl font-black text-black tracking-tight mb-3">AI Risk Engine</h3>
            <p className="text-[13px] text-black/40 font-medium leading-relaxed mb-auto">Dynamic underwriting powered by machine learning. Continuously adapts risk scoring based on weather patterns and claim history.</p>
            <div className="mt-5 flex items-center justify-between gap-3">
              <div className="flex flex-col gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#a855f7] animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-[#a855f7]/60 animate-pulse" style={{animationDelay:'0.3s'}}></div>
                <div className="w-3 h-3 rounded-full bg-[#a855f7]/30 animate-pulse" style={{animationDelay:'0.6s'}}></div>
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <div className="h-[2px] bg-[#a855f7]/20 rounded-full"></div>
                <div className="h-[2px] bg-[#a855f7]/30 rounded-full w-[80%]"></div>
                <div className="h-[2px] bg-[#a855f7]/20 rounded-full w-[60%]"></div>
                <div className="h-[2px] bg-[#a855f7]/10 rounded-full w-[90%]"></div>
              </div>
              <div className="bg-[#a855f7] border-[2px] border-black px-3 py-1.5 rounded-lg shadow-[3px_3px_0_#000]">
                <span className="text-[10px] font-black text-black uppercase tracking-wider">Score: 94</span>
              </div>
            </div>
          </div>

          {/* Fraud Detection */}
          <div className="md:col-span-4 bg-black border-[3px] border-black rounded-3xl p-7 md:p-8 flex flex-col min-h-[280px] group hover:-translate-y-1 transition-all duration-500 shadow-[6px_6px_0_#ccff00]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-[#ccff00] border-[2px] border-black flex items-center justify-center"><span className="material-symbols-outlined text-black text-xl" style={{fontVariationSettings:"'FILL' 1"}}>security</span></div>
              <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">Security</span>
            </div>
            <h3 className="text-2xl font-black text-white tracking-tight mb-3">Fraud Detection</h3>
            <p className="text-[13px] text-white/40 font-medium leading-relaxed mb-auto">Real-time risk monitoring catches anomalies before payouts. Every claim cross-referenced against multiple data points.</p>
            <div className="mt-5 flex flex-col gap-2">
              {['GPS Match','Velocity Check','Pattern Analysis'].map((t,i) => (
                <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-3 py-2" key={i}>
                  <span className="text-[10px] font-bold text-white/40">{t}</span>
                  <div className="w-4 h-4 rounded bg-[#ccff00] flex items-center justify-center"><span className="material-symbols-outlined text-[10px] text-black font-black">check</span></div>
                </div>
              ))}
            </div>
          </div>

          {/* Instant Payouts */}
          <div className="md:col-span-3 bg-[#fe6b00] border-[3px] border-black rounded-3xl p-7 md:p-8 flex flex-col min-h-[280px] group hover:-translate-y-1 transition-all duration-500 shadow-[6px_6px_0_#000]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-black border-[2px] border-black flex items-center justify-center"><span className="material-symbols-outlined text-[#fe6b00] text-xl" style={{fontVariationSettings:"'FILL' 1"}}>account_balance_wallet</span></div>
            </div>
            <h3 className="text-2xl font-black text-black tracking-tight mb-3">Instant Payouts</h3>
            <p className="text-[13px] text-black/60 font-medium leading-relaxed mb-auto">Direct UPI settlement. Straight to bank.</p>
            <div className="mt-5 bg-black border-[2px] border-black rounded-2xl p-4 flex flex-col items-center text-center shadow-[4px_4px_0_rgba(0,0,0,0.3)]">
              <span className="text-3xl font-black text-[#fe6b00] tracking-tight">₹500</span>
              <span className="text-[9px] font-black text-white/40 uppercase tracking-widest mt-1">Auto-credited</span>
              <div className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse mt-2 shadow-[0_0_8px_rgba(204,255,0,0.6)]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
