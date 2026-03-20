export default function CoverageSection() {
  return (
    <section className="py-24 md:py-32 px-6 overflow-hidden bg-[#ccff00] border-t-[4px] border-b-[4px] border-black" id="coverage">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20 mb-16 md:mb-24">
          <div className="lg:w-[55%]">
            <h2 className="text-[clamp(3.5rem,8vw,7rem)] font-black tracking-tighter leading-[0.9] text-black" style={{fontFamily:'Manrope,sans-serif'}}>What we<br/>cover.</h2>
          </div>
          <div className="lg:w-[45%] pb-2">
            <p className="text-lg md:text-xl font-bold text-black/70 leading-relaxed max-w-lg">
              <span className="text-black font-black">Flexible weekly protection:</span><br/>
              Personalized. Parametric. Instant. Built for India&apos;s gig workers.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-stretch">
          {/* Card 1: Severe Weather */}
          <div className="border-[3px] border-black bg-white rounded-3xl flex flex-col overflow-hidden group hover:-translate-y-2 transition-transform duration-500 shadow-[8px_8px_0_rgba(0,0,0,1)] hover:shadow-[12px_12px_0_rgba(0,0,0,1)]">
            <div className="flex items-center justify-between px-6 py-5 border-b-[3px] border-black">
              <span className="text-[15px] font-black tracking-tight text-black">/01</span>
              <span className="material-symbols-outlined text-3xl text-black" style={{fontVariationSettings:"'FILL' 1"}}>rainy</span>
            </div>
            <div className="px-6 pt-6 pb-4">
              <h3 className="text-[2rem] md:text-[2.2rem] font-black tracking-tight leading-[1.1] text-black mb-3">Severe Weather</h3>
              <p className="text-[13px] text-black/60 font-medium leading-relaxed">One-of-a-kind protection built on YOUR delivery zone&apos;s weather data.</p>
            </div>
            <div className="mx-6 mb-6 border-[2px] border-black/15 rounded-2xl bg-[#f7f7f5] p-5 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-black/60">water_drop</span>
                  <span className="text-[11px] font-black uppercase tracking-widest text-black/50">Rainfall</span>
                </div>
                <span className="text-[10px] font-bold text-black/40 bg-black/5 px-2 py-1 rounded">JAN 2026</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-[3.5rem] font-black tracking-tighter text-black leading-none">60</span>
                <span className="text-[16px] font-bold text-black/40">mm</span>
              </div>
              <div className="relative w-full h-3 bg-black/10 rounded-full overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-[72%] bg-gradient-to-r from-[#0088ff] to-[#00c6ff] rounded-full"></div>
                <div className="absolute left-[60%] top-[-4px] w-0.5 h-[20px] bg-[#ff3b30]"></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-black/40">0mm</span>
                <span className="text-[10px] font-bold text-[#ff3b30]">← Threshold</span>
                <span className="text-[10px] font-bold text-black/40">100mm</span>
              </div>
              <div className="bg-[#ccff00] border-[2px] border-black rounded-xl px-4 py-2.5 flex items-center gap-3 mt-1">
                <div className="w-2.5 h-2.5 rounded-full bg-black animate-pulse"></div>
                <span className="text-[11px] font-black text-black uppercase tracking-wider">IMD Data: Monitoring Live</span>
              </div>
            </div>
            <div className="px-6 pb-4 mt-auto">
              <p className="text-[12px] text-black/50 font-medium leading-relaxed">Automatic payouts when rainfall exceeds critical limits, verified by India Meteorological Department data feeds.</p>
            </div>
            <div className="px-6 pb-6">
              <button className="w-full py-3.5 bg-[#ccff00] border-[3px] border-black rounded-xl font-black text-[12px] text-black uppercase tracking-widest hover:-translate-y-0.5 shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] active:translate-y-0.5 active:shadow-[0_0_0_#000] transition-all">Get Started</button>
            </div>
          </div>

          {/* Card 2: Zero Manual Claims */}
          <div className="border-[3px] border-black bg-white rounded-3xl flex flex-col overflow-hidden group hover:-translate-y-2 transition-transform duration-500 shadow-[8px_8px_0_rgba(0,0,0,1)] hover:shadow-[12px_12px_0_rgba(0,0,0,1)]">
            <div className="flex items-center justify-between px-6 py-5 border-b-[3px] border-black bg-black">
              <span className="text-[15px] font-black tracking-tight text-white">/02</span>
              <span className="material-symbols-outlined text-3xl text-[#ccff00]" style={{fontVariationSettings:"'FILL' 1"}}>bolt</span>
            </div>
            <div className="px-6 pt-6 pb-4">
              <h3 className="text-[2rem] md:text-[2.2rem] font-black tracking-tight leading-[1.1] text-black mb-3">Zero Claims</h3>
              <p className="text-[13px] text-black/60 font-medium leading-relaxed">Your first fully automated experience. No paperwork. No waiting.</p>
            </div>
            <div className="mx-6 mb-6 border-[2px] border-black/15 rounded-2xl bg-[#f7f7f5] overflow-hidden">
              <div className="divide-y divide-black/10">
                {['Weather Data','GPS Zone Match','Policy Active','Instant Payout','Fraud Check'].map((item, i) => {
                  const icons = ['cloud','my_location','policy','account_balance_wallet','security'];
                  return (
                    <div className="flex items-center justify-between px-5 py-3.5" key={i}>
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[16px] text-black/50">{icons[i]}</span>
                        <span className="text-[13px] font-bold text-black">{item}</span>
                      </div>
                      <div className="w-7 h-7 rounded-lg bg-[#ccff00] border-[2px] border-black flex items-center justify-center">
                        <span className="material-symbols-outlined text-[16px] text-black font-black">check</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="px-6 pb-4 mt-auto">
              <p className="text-[12px] text-black/50 font-medium leading-relaxed">Our AI engine verifies weather, GPS zone, and policy data in milliseconds. Money lands in your account before you even ask.</p>
            </div>
            <div className="px-6 pb-6">
              <button className="w-full py-3.5 bg-black border-[3px] border-black rounded-xl font-black text-[12px] text-[#ccff00] uppercase tracking-widest hover:-translate-y-0.5 shadow-[4px_4px_0_#ccff00] hover:shadow-[6px_6px_0_#ccff00] active:translate-y-0.5 active:shadow-[0_0_0_#ccff00] transition-all">Get Started</button>
            </div>
          </div>

          {/* Card 3: City Disruptions */}
          <div className="border-[3px] border-black bg-white rounded-3xl flex flex-col overflow-hidden group hover:-translate-y-2 transition-transform duration-500 shadow-[8px_8px_0_rgba(0,0,0,1)] hover:shadow-[12px_12px_0_rgba(0,0,0,1)]">
            <div className="flex items-center justify-between px-6 py-5 border-b-[3px] border-black">
              <span className="text-[15px] font-black tracking-tight text-black">/03</span>
              <span className="material-symbols-outlined text-3xl text-black" style={{fontVariationSettings:"'FILL' 1"}}>location_city</span>
            </div>
            <div className="px-6 pt-6 pb-4">
              <h3 className="text-[2rem] md:text-[2.2rem] font-black tracking-tight leading-[1.1] text-black mb-3">City Disruptions</h3>
              <p className="text-[13px] text-black/60 font-medium leading-relaxed">Move forward even when the city can&apos;t. Coverage for zone-wide shutdowns.</p>
            </div>
            <div className="mx-6 mb-6 border-[2px] border-black/15 rounded-2xl bg-[#f7f7f5] p-5 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-black/60">monitoring</span>
                  <span className="text-[11px] font-black uppercase tracking-widest text-black/50">Zone Status</span>
                </div>
                <span className="text-[10px] font-bold text-black/40 bg-black/5 px-2 py-1 rounded">Live ▼</span>
              </div>
              <div className="relative w-full h-[80px] mt-2">
                <svg className="w-full h-full" viewBox="0 0 300 80" fill="none" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ccff00" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="#ccff00" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d="M0,60 Q30,55 60,50 T120,35 T180,20 T240,30 T300,15" stroke="black" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <path d="M0,60 Q30,55 60,50 T120,35 T180,20 T240,30 T300,15 L300,80 L0,80Z" fill="url(#chartFill)"/>
                  <circle cx="240" cy="30" r="5" fill="black" stroke="#ccff00" strokeWidth="3"/>
                </svg>
                <div className="absolute top-0 right-[15%] bg-black text-[#ccff00] text-[10px] font-black px-2 py-1 rounded-lg shadow-lg">↑ +23%</div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-2">
                <div className="bg-white border-[2px] border-black/10 rounded-xl p-3 text-center">
                  <div className="text-xl font-black text-black leading-none">4</div>
                  <div className="text-[9px] font-bold text-black/40 uppercase tracking-wider mt-1">Zones Active</div>
                </div>
                <div className="bg-white border-[2px] border-black/10 rounded-xl p-3 text-center">
                  <div className="text-xl font-black text-[#ff3b30] leading-none">1</div>
                  <div className="text-[9px] font-bold text-black/40 uppercase tracking-wider mt-1">Disrupted</div>
                </div>
              </div>
              <div className="bg-black rounded-xl px-4 py-2.5 flex items-center gap-3 mt-1">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff3b30] animate-pulse"></div>
                <span className="text-[11px] font-black text-white uppercase tracking-wider">Alert: Zone lockdown detected</span>
              </div>
            </div>
            <div className="px-6 pb-4 mt-auto">
              <p className="text-[12px] text-black/50 font-medium leading-relaxed">Hyper-local triggers mapped to specific pin-codes and logistics hubs. Direct-to-bank transfers the moment the threshold is crossed.</p>
            </div>
            <div className="px-6 pb-6">
              <button className="w-full py-3.5 bg-[#ccff00] border-[3px] border-black rounded-xl font-black text-[12px] text-black uppercase tracking-widest hover:-translate-y-0.5 shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] active:translate-y-0.5 active:shadow-[0_0_0_#000] transition-all">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
