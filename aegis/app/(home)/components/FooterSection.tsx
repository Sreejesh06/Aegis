export default function FooterSection() {
  return (
    <section className="relative w-full mt-20 overflow-hidden" style={{backgroundColor:'#f4f4f5'}}>
      <footer className="border-t border-black/5 relative pt-10">
        <div className="max-w-7xl flex flex-col justify-between mx-auto min-h-[30rem] sm:min-h-[35rem] md:min-h-[40rem] relative p-4 py-10">
          <div className="flex flex-col mb-12 sm:mb-20 md:mb-0 w-full z-20">
            <div className="w-full flex flex-col items-center">
              <div className="space-y-4 flex flex-col items-center flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[#2d2f30] text-4xl font-black uppercase tracking-tighter">Aegis</span>
                </div>
                <p className="text-[#5a5c5d] font-medium text-center w-full max-w-sm sm:w-96 px-4 sm:px-0">
                  Building the financial safety net for the next billion gig workers through parametric intelligence.
                </p>
              </div>

              <div className="flex mb-8 mt-6 gap-6">
                {['share','dataset','email'].map((icon,i) => (
                  <a href="#" className="text-[#5a5c5d] hover:text-[#9c3f00] transition-colors hover:scale-110 duration-300" key={i}>
                    <span className="material-symbols-outlined text-3xl">{icon}</span>
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-[#5a5c5d] max-w-full px-4">
                <a className="hover:text-[#9c3f00] duration-300 uppercase tracking-widest" href="#">Coverage Tiers</a>
                <a className="hover:text-[#9c3f00] duration-300 uppercase tracking-widest" href="#">AI Risk Engine</a>
                <a className="hover:text-[#9c3f00] duration-300 uppercase tracking-widest" href="/docs">Documentation</a>
                <a className="hover:text-[#9c3f00] duration-300 uppercase tracking-widest" href="#">Partner Portal</a>
              </div>
            </div>
          </div>

          <div className="mt-20 md:mt-24 flex flex-col gap-2 md:gap-1 items-center justify-center md:flex-row md:items-center md:justify-between px-4 md:px-0 z-20">
            <p className="text-sm font-semibold text-[#5a5c5d] text-center md:text-left">© 2026 Aegis. All rights reserved.</p>
            <nav className="flex gap-4">
              <a href="#" className="text-sm font-semibold text-[#5a5c5d] hover:text-[#9c3f00] transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-sm font-semibold text-[#5a5c5d] hover:text-[#9c3f00] transition-colors duration-300">Terms of Service</a>
            </nav>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-[140px] md:bottom-[120px] font-black tracking-tighter pointer-events-none select-none text-center px-4 w-full" style={{fontSize:'clamp(6rem, 20vw, 18rem)',maxWidth:'95vw',fontFamily:'Manrope,sans-serif'}}>
          <span className="bg-gradient-to-b from-black/10 via-black/5 to-transparent bg-clip-text text-transparent leading-none block">AEGIS</span>
        </div>

        <div className="absolute hover:border-[#9c3f00] duration-500 bottom-24 md:bottom-20 backdrop-blur-md rounded-[2rem] bg-white/60 left-1/2 border-2 border-black/10 flex items-center justify-center p-3 -translate-x-1/2 z-20 group cursor-pointer transition-colors" style={{filter:'drop-shadow(0 0px 30px rgba(255,107,0,0.5))'}}>
          <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gradient-to-br from-[#9c3f00] to-[#fe6b00] rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-500">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white" style={{WebkitMaskImage:"url('/logo.png')",WebkitMaskSize:'contain',WebkitMaskRepeat:'no-repeat',WebkitMaskPosition:'center',maskImage:"url('/logo.png')",maskSize:'contain',maskRepeat:'no-repeat',maskPosition:'center'}}></div>
          </div>
        </div>

        <div className="absolute bottom-32 sm:bottom-34 backdrop-blur-sm h-[2px] bg-gradient-to-r from-transparent via-black/10 to-transparent w-full left-1/2 -translate-x-1/2 z-10"></div>
        <div className="bg-gradient-to-t from-[#f4f4f5] via-[#f4f4f5]/80 blur-[1em] to-transparent absolute bottom-0 w-full h-32 z-10 pointer-events-none"></div>
      </footer>
    </section>
  );
}
