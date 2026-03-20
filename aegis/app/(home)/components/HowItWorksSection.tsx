export default function HowItWorksSection() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#f4f4f4] overflow-hidden relative" id="how-it-works">
      <div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage:'linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)',backgroundSize:'40px 40px'}}></div>
      <div className="max-w-[1000px] mx-auto relative z-10">
        <div className="text-center mb-20 md:mb-28">
          <h2 className="text-[clamp(3.5rem,8vw,7rem)] font-black tracking-tighter leading-[0.9] text-black mb-6" style={{fontFamily:'Manrope,sans-serif'}}>How it works.</h2>
          <p className="text-lg md:text-xl font-bold text-black/40 leading-relaxed max-w-2xl mx-auto">
            From weather event to money in your bank.<br/><span className="text-[#fe6b00] font-black">Zero human intervention.</span>
          </p>
        </div>
        <div className="flex flex-col items-center gap-0">
          {/* Input Sources */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-0">
            {[{icon:'water_drop',label:'IMD Weather'},{icon:'my_location',label:'GPS Zone'},{icon:'description',label:'Policy Data'}].map((s,i) => (
              <div className="flex items-center gap-2.5 bg-black/5 border-[2px] border-black/15 rounded-full px-5 py-3 hover:border-[#fe6b00]/50 transition-colors" key={i}>
                <span className="material-symbols-outlined text-[18px] text-black" style={{fontVariationSettings:"'FILL' 1"}}>{s.icon}</span>
                <span className="text-[12px] font-black text-black/70 uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </div>
          {/* Connector */}
          <div className="flex flex-col items-center py-1">
            <svg width="4" height="60" className="overflow-visible"><line x1="2" y1="0" x2="2" y2="56" stroke="#ccff00" strokeWidth="3" strokeDasharray="8 6"><animate attributeName="stroke-dashoffset" from="0" to="-28" dur="1.5s" repeatCount="indefinite"/></line><polygon points="-1,54 5,54 2,62" fill="#ccff00"/></svg>
          </div>
          {/* NODE 1 */}
          <div className="w-full border-[3px] border-black/15 bg-white shadow-[8px_8px_0_rgba(0,0,0,1)] rounded-3xl overflow-hidden group hover:border-[#ccff00] transition-all duration-500 hover:shadow-[0_0_60px_rgba(204,255,0,0.08)]">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-[40%] flex items-center justify-center p-8 md:p-12 border-b-[3px] md:border-b-0 md:border-r-[3px] border-black/10 bg-[#f9f9f5] relative min-h-[200px]">
                <div className="relative w-28 h-28">
                  <div className="absolute inset-0 rounded-full border-2 border-[#ccff00]/20 animate-ping" style={{animationDuration:'3s'}}></div>
                  <div className="absolute inset-3 rounded-full border-2 border-[#ccff00]/30 animate-ping" style={{animationDuration:'3s',animationDelay:'0.5s'}}></div>
                  <div className="absolute inset-6 rounded-full border-2 border-[#ccff00]/50 animate-ping" style={{animationDuration:'3s',animationDelay:'1s'}}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#ccff00] border-[3px] border-black flex items-center justify-center shadow-[0_0_30px_rgba(204,255,0,0.5)]">
                      <span className="material-symbols-outlined text-black text-xl" style={{fontVariationSettings:"'FILL' 1"}}>sensors</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-[#ccff00] border-[2px] border-black px-3 py-1 rounded-full shadow-[3px_3px_0_#000]">
                  <span className="text-[10px] font-black text-black tracking-tight">60mm ↑</span>
                </div>
              </div>
              <div className="md:w-[60%] p-6 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[#ccff00] border-[2px] border-black flex items-center justify-center"><span className="text-black font-black text-sm">01</span></div>
                  <span className="text-[11px] font-black text-black/30 uppercase tracking-[0.2em]">Detect</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-black tracking-tight mb-3">Parametric Trigger</h3>
                <p className="text-[14px] text-black/50 font-medium leading-relaxed mb-5">Real-time weather data from IMD crosses your zone&apos;s threshold. The event is detected instantly—no claim form, no phone call.</p>
                <div className="flex items-center gap-2.5 bg-black/5 border border-black/10 rounded-xl px-4 py-2.5 w-fit">
                  <div className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse shadow-[0_0_8px_rgba(204,255,0,0.6)]"></div>
                  <span className="text-[10px] font-black text-black/50 uppercase tracking-wider">Always monitoring</span>
                </div>
              </div>
            </div>
          </div>
          {/* Connector 1-2 */}
          <div className="flex flex-col items-center py-1 relative">
            <svg width="4" height="70" className="overflow-visible"><line x1="2" y1="0" x2="2" y2="66" stroke="#fe6b00" strokeWidth="3" strokeDasharray="8 6"><animate attributeName="stroke-dashoffset" from="0" to="-28" dur="1.5s" repeatCount="indefinite"/></line><polygon points="-1,64 5,64 2,72" fill="#fe6b00"/></svg>
            <div className="absolute top-1/2 -translate-y-1/2 left-[calc(50%+20px)] bg-[#fe6b00] border-[2px] border-black px-3 py-1 rounded-full shadow-[3px_3px_0_#000] whitespace-nowrap">
              <span className="text-[9px] font-black text-black uppercase tracking-wider">threshold crossed →</span>
            </div>
          </div>
          {/* NODE 2 */}
          <div className="w-full border-[3px] border-black/15 bg-white shadow-[8px_8px_0_rgba(0,0,0,1)] rounded-3xl overflow-hidden group hover:border-[#fe6b00] transition-all duration-500 hover:shadow-[0_0_60px_rgba(254,107,0,0.08)]">
            <div className="flex flex-col md:flex-row-reverse">
              <div className="md:w-[40%] flex items-center justify-center p-8 md:p-12 border-b-[3px] md:border-b-0 md:border-l-[3px] border-black/10 bg-[#f9f9f5] relative min-h-[200px]">
                <div className="relative w-28 h-28 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-[#fe6b00]/30 animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute inset-4 rounded-full border-[3px] border-dashed border-black/10 animate-[spin_7s_linear_infinite_reverse]"></div>
                  <div className="w-14 h-14 rounded-2xl bg-[#fe6b00] border-[3px] border-black flex items-center justify-center shadow-[0_0_25px_rgba(254,107,0,0.4)] animate-[spin_20s_linear_infinite]">
                    <span className="material-symbols-outlined text-black text-2xl" style={{fontVariationSettings:"'FILL' 1"}}>settings</span>
                  </div>
                </div>
                <div className="absolute top-5 left-5 w-7 h-7 rounded bg-black/5 border border-black/10 flex items-center justify-center animate-bounce" style={{animationDuration:'3s'}}><span className="material-symbols-outlined text-[12px] text-black/40">security</span></div>
                <div className="absolute bottom-5 right-5 w-7 h-7 rounded bg-black/5 border border-black/10 flex items-center justify-center animate-bounce" style={{animationDuration:'3s',animationDelay:'1s'}}><span className="material-symbols-outlined text-[12px] text-black/40">policy</span></div>
              </div>
              <div className="md:w-[60%] p-6 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[#fe6b00] border-[2px] border-black flex items-center justify-center"><span className="text-black font-black text-sm">02</span></div>
                  <span className="text-[11px] font-black text-black/30 uppercase tracking-[0.2em]">Verify</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-black tracking-tight mb-3">AI Risk Engine</h3>
                <p className="text-[14px] text-black/50 font-medium leading-relaxed mb-5">Cross-validates GPS zone, policy status, and fraud signals in milliseconds. Three checks. Zero manual steps.</p>
                <div className="flex flex-col gap-2">
                  {['Threshold verified','Zone + Policy matched','Fraud score: Clean'].map((t,i) => (
                    <div className="flex items-center gap-2.5" key={i}>
                      <div className="w-5 h-5 rounded bg-[#fe6b00] flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-[12px] text-black font-black">check</span></div>
                      <span className="text-[11px] font-bold text-black/50">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Connector 2-3 */}
          <div className="flex flex-col items-center py-1 relative">
            <svg width="4" height="70" className="overflow-visible"><line x1="2" y1="0" x2="2" y2="66" stroke="#a855f7" strokeWidth="3" strokeDasharray="8 6"><animate attributeName="stroke-dashoffset" from="0" to="-28" dur="1.5s" repeatCount="indefinite"/></line><polygon points="-1,64 5,64 2,72" fill="#a855f7"/></svg>
            <div className="absolute top-1/2 -translate-y-1/2 right-[calc(50%+20px)] bg-[#a855f7] border-[2px] border-black px-3 py-1 rounded-full shadow-[3px_3px_0_#000] whitespace-nowrap">
              <span className="text-[9px] font-black text-black uppercase tracking-wider">← all checks passed</span>
            </div>
          </div>
          {/* NODE 3 */}
          <div className="w-full border-[3px] border-black/15 bg-white shadow-[8px_8px_0_rgba(0,0,0,1)] rounded-3xl overflow-hidden group hover:border-[#a855f7] transition-all duration-500 hover:shadow-[0_0_60px_rgba(168,85,247,0.08)]">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-[40%] flex items-center justify-center p-8 md:p-12 border-b-[3px] md:border-b-0 md:border-r-[3px] border-black/10 bg-[#f9f9f5] relative min-h-[200px]">
                <div className="relative w-28 h-28 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-2 border-[#a855f7]/20 animate-ping" style={{animationDuration:'2s'}}></div>
                  <div className="absolute inset-4 rounded-full border-2 border-[#a855f7]/30 animate-ping" style={{animationDuration:'2s',animationDelay:'0.4s'}}></div>
                  <div className="w-16 h-16 rounded-full bg-[#a855f7] border-[3px] border-black flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.5)] animate-bounce" style={{animationDuration:'2s'}}>
                    <span className="material-symbols-outlined text-black text-3xl font-black">check</span>
                  </div>
                </div>
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#a855f7] border-[2px] border-black px-4 py-1.5 rounded-full shadow-[3px_3px_0_#000]">
                  <span className="text-[11px] font-black text-black tracking-tight">₹500 Credited</span>
                </div>
              </div>
              <div className="md:w-[60%] p-6 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[#a855f7] border-[2px] border-black flex items-center justify-center"><span className="text-black font-black text-sm">03</span></div>
                  <span className="text-[11px] font-black text-black/30 uppercase tracking-[0.2em]">Pay</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-black tracking-tight mb-3">Instant Payout</h3>
                <p className="text-[14px] text-black/50 font-medium leading-relaxed mb-5">Approved. Sent. Done. Direct-to-bank transfer via Razorpay the moment all checks pass. No delays, no paperwork.</p>
                <div className="flex items-center gap-3 bg-[#a855f7]/10 border border-[#a855f7]/30 rounded-xl px-4 py-2.5 w-fit">
                  <div className="w-2 h-2 rounded-full bg-[#a855f7] animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.6)]"></div>
                  <span className="text-[10px] font-black text-[#a855f7] uppercase tracking-wider">Payout complete</span>
                </div>
              </div>
            </div>
          </div>
          {/* Final connector */}
          <div className="flex flex-col items-center py-1">
            <svg width="4" height="50" className="overflow-visible"><line x1="2" y1="0" x2="2" y2="46" stroke="black" strokeWidth="3" strokeDasharray="8 6" strokeOpacity="0.2"><animate attributeName="stroke-dashoffset" from="0" to="-28" dur="1.5s" repeatCount="indefinite"/></line><polygon points="-1,44 5,44 2,52" fill="black" fillOpacity="0.3"/></svg>
          </div>
          {/* Settlement */}
          <div className="bg-[#ccff00] border-[3px] border-black rounded-2xl px-8 py-5 shadow-[8px_8px_0_#000] flex items-center gap-4 hover:-translate-y-1 hover:shadow-[10px_10px_0_#000] transition-all">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[#ccff00] text-xl" style={{fontVariationSettings:"'FILL' 1"}}>account_balance</span>
            </div>
            <div>
              <span className="text-[13px] font-black text-black uppercase tracking-wider">Settlement Complete</span>
              <span className="text-[11px] font-bold text-black/50 block mt-0.5">Via Razorpay → Direct to bank</span>
            </div>
          </div>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 md:mt-20">
          {[{icon:'timer',color:'#ccff00',val:'0.0s',label:'Processing'},{icon:'map',color:'#fe6b00',val:'Pin-code',label:'Zone precision'},{icon:'bolt',color:'#a855f7',val:'Instant',label:'Bank settlement'}].map((s,i) => (
            <div className={`border-[3px] border-black/10 rounded-2xl px-6 py-5 flex items-center gap-4 group hover:border-[${s.color}]/50 transition-colors bg-white`} key={i}>
              <div className={`w-10 h-10 rounded-lg border-[2px] border-black flex items-center justify-center shrink-0`} style={{backgroundColor:s.color}}>
                <span className="material-symbols-outlined text-black text-lg" style={{fontVariationSettings:"'FILL' 1"}}>{s.icon}</span>
              </div>
              <div>
                <div className="text-xl font-black text-black tracking-tight">{s.val}</div>
                <div className="text-[10px] font-bold text-black/30 uppercase tracking-widest mt-0.5">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
