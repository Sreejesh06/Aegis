export default function CtaSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-zinc-900 rounded-[2rem] p-12 md:p-24 relative overflow-hidden shadow-[0_0_80px_rgba(255,107,0,0.15)] flex flex-col items-center text-center">
          <canvas id="cta-canvas"></canvas>
          <div className="absolute inset-0 circuit-pattern pointer-events-none opacity-20"></div>

          <div className="absolute -top-12 flex gap-4 z-20 pointer-events-none">
            <div className="w-32 h-20 bg-gradient-to-br from-emerald-400/30 to-emerald-600/30 backdrop-blur-xl border border-white/10 rounded-2xl animate-float"></div>
            <div className="w-40 h-24 bg-gradient-to-br from-blue-400/30 to-blue-600/30 backdrop-blur-xl border border-white/10 rounded-2xl animate-float" style={{animationDelay:'1.5s',marginTop:'20px'}}></div>
            <div className="w-32 h-20 bg-gradient-to-br from-orange-400/30 to-orange-500/30 backdrop-blur-xl border border-white/10 rounded-2xl animate-float" style={{animationDelay:'0.7s'}}></div>
          </div>

          <h2 className="font-black text-5xl md:text-8xl tracking-tighter text-white mb-6 relative z-10" style={{fontFamily:'Manrope,sans-serif'}}>
            Protect income with<br/>
            <span className="text-[#FF6B00]">automated insurance</span>
          </h2>

          <p className="text-gray-400 max-w-md mx-auto mb-12 text-lg relative z-10">
            Join the risk pool. Dynamic weekly premiums based on your zone, with instant trigger-based payouts.
          </p>

          <button className="group relative bg-[#2a2a2c] text-white px-12 py-5 rounded-full font-black text-xl border border-white/5 hover:bg-zinc-800 transition-all overflow-hidden z-10">
            <span className="relative z-10">Check your premium</span>
            <div className="absolute top-0 right-0 h-full w-8 bg-[#FF6B00] transform translate-x-4 rotate-[15deg] group-hover:translate-x-2 transition-transform duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
