// Aegis Landing - Hero Section
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12 overflow-hidden">
      {/* Floating Elements Container */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        {/* CSS Grid Graphic Top Left */}
        <div className="absolute top-[8%] left-[2%] md:left-[8%] w-40 h-40 md:w-56 md:h-56 border-[3px] border-black bg-[#fcfaf5]" style={{backgroundImage:'linear-gradient(black 2px, transparent 2px), linear-gradient(90deg, black 2px, transparent 2px)',backgroundSize:'32px 32px',backgroundPosition:'-2px -2px'}}></div>
        {/* Yellow/Green Circle */}
        <div className="absolute top-[5%] left-[1%] md:left-[4%] w-24 h-24 md:w-36 md:h-36 rounded-full bg-[#ccff00] border-[4px] border-black shadow-[8px_8px_0_rgba(0,0,0,1)] z-10 transition-all animate-bounce" style={{animationDuration:'8s'}}></div>
        {/* Small Purple Circle */}
        <div className="absolute top-[18%] left-[12%] md:left-[15%] w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#a855f7] border-[3px] border-black shadow-[6px_6px_0_rgba(0,0,0,1)] z-10"></div>
        {/* Top Right Checkered Frame */}
        <div className="absolute top-[5%] right-[2%] md:right-[5%] z-0 border-[6px] border-[#a855f7] p-2 md:p-4 shadow-[12px_12px_0_rgba(0,0,0,1)] bg-[#fe6b00] rotate-6 hover:-rotate-3 transition-transform duration-700">
          <div className="w-32 h-40 md:w-48 md:h-64 border-4 border-black bg-white" style={{backgroundImage:'repeating-conic-gradient(black 0 25%, white 0 50%)',backgroundSize:'24px 24px'}}></div>
        </div>
        {/* Cyan Half Circle */}
        <div className="absolute top-[-2%] right-[20%] w-24 h-24 md:w-32 md:h-32 rounded-bl-full border-[4px] border-black bg-[#65e8c1] rotate-[15deg] z-0"></div>
        {/* Four Point Stars */}
        <svg className="absolute top-[12%] left-[45%] w-12 h-12 md:w-16 md:h-16 text-black" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
        </svg>
        <svg className="absolute top-[8%] left-[52%] w-6 h-6 md:w-8 md:h-8 text-black" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
        </svg>
        {/* Left Pop-up Figma Window */}
        <div className="absolute bottom-[5%] left-[2%] md:left-[8%] w-56 md:w-80 border-[4px] border-black shadow-[12px_12px_0_rgba(0,0,0,1)] bg-[#fdfaf5] z-30">
          <div className="h-8 border-b-[4px] border-black bg-[#1a1a1a] flex items-center px-4 gap-2.5">
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <div className="w-3 h-3 rounded-full bg-white"></div>
          </div>
          <div className="p-6 relative flex items-end justify-center min-h-[140px] md:min-h-[180px]">
            <div className="w-[120px] md:w-[160px] h-[60px] md:h-[80px] bg-[#65e8c1] border-[3px] border-black rounded-t-full relative">
              <div className="absolute -top-[30px] md:-top-[40px] left-1/2 -translate-x-1/2 w-[120px] md:w-[160px] border-t-2 border-black border-dashed h-[30px] flex justify-between">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 border-2 border-black bg-white -mt-[6px] -ml-[6px]"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 border-2 border-black bg-white rounded-full -mt-[6px]"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 border-2 border-black bg-white -mt-[6px] -mr-[6px]"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Giant Orange Donut */}
        <div className="absolute -bottom-[5%] left-[10%] md:left-[22%] w-40 h-40 md:w-56 md:h-56 border-[6px] border-black rounded-full bg-[#fdfaf5] z-10 flex items-center justify-center">
          <div className="absolute w-[60%] h-[60%] border-[6px] border-black rounded-full bg-[#fe6b00]"></div>
        </div>
        {/* Geometric Stack */}
        <div className="absolute bottom-[2%] left-[4%] w-12 h-24 border-[4px] border-black bg-[#ccff00] z-20"></div>
        <div className="absolute bottom-[4%] left-[6%] w-12 h-24 border-[4px] border-black bg-[#a855f7] z-20"></div>
        {/* Purple Card with Neon Band */}
        <div className="absolute top-[30%] right-[-5%] md:right-[-2%] z-0 hidden lg:block hover:translate-x-4 transition-transform duration-700">
          <div className="relative w-[340px] h-[220px]">
            <div className="absolute top-[40%] -right-0 w-[140px] h-[180px] border-[6px] border-black bg-[#1a1a1a] rounded-[100px] -translate-y-1/2 z-0 transform skew-y-[20deg] skew-x-[-10deg]"></div>
            <div className="absolute top-[10%] left-[-40px] w-full h-[180px] bg-[#a855f7] border-[5px] border-black rounded-3xl shadow-[12px_12px_0_rgba(0,0,0,1)] p-6 pl-8 flex flex-col justify-between z-10 transform -rotate-[22deg] skew-x-[15deg]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-black font-black text-2xl">verified_user</span>
                  <span className="font-black text-3xl italic tracking-tighter text-black">Aegis.</span>
                </div>
                <div className="flex flex-col gap-1.5 items-end">
                  <div className="w-12 h-[3px] bg-black"></div>
                  <div className="w-8 h-[3px] bg-black"></div>
                  <div className="w-16 h-[3px] bg-black"></div>
                </div>
              </div>
              <div className="flex justify-between items-end pr-8">
                <div className="w-16 h-10 border-[4px] border-black rounded-lg bg-[#ccff00] grid grid-cols-2 grid-rows-2 gap-1 p-1">
                  <div className="border-2 border-black rounded-sm"></div>
                  <div className="border-2 border-black rounded-sm"></div>
                  <div className="border-2 border-black rounded-sm"></div>
                  <div className="border-2 border-black rounded-sm"></div>
                </div>
                <div className="flex flex-col gap-2.5 w-[40%] mb-1">
                  <div className="w-full h-2.5 bg-black rounded-full"></div>
                  <div className="flex gap-2">
                    <div className="w-2/3 h-2.5 bg-black rounded-full"></div>
                    <div className="w-1/3 h-2.5 bg-black rounded-full"></div>
                  </div>
                  <div className="w-1/2 h-2.5 bg-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-[40%] -right-10 w-[120px] h-[190px] border-[6px] border-black bg-[#ccff00] rounded-r-[120px] rounded-l-[0px] -translate-y-1/2 z-20 pointer-events-none transform skew-y-[20deg] skew-x-[-10deg]"></div>
            <svg className="absolute -bottom-[20px] right-20 w-10 h-10 text-[#65e8c1] drop-shadow-[5px_5px_0_black] z-30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 0l16 11-7 1 4 8-3 2-4-8-6 5z" stroke="black" strokeWidth="2"/>
            </svg>
            <div className="absolute bottom-[20px] left-[260px] w-px h-[100px] border-l-2 border-black border-dashed flex items-end">
              <div className="w-2 h-2 bg-white border-2 border-black -ml-[5px] mb-[-5px]"></div>
            </div>
            <div className="absolute bottom-[120px] left-[260px] flex items-end">
              <div className="w-2 h-2 bg-white border-2 border-black -ml-[5px] mb-[-5px]"></div>
            </div>
          </div>
        </div>
        {/* Bottom right Grid */}
        <div className="absolute bottom-[2%] md:bottom-[5%] right-[2%] md:right-[15%] z-0">
          <div className="w-40 h-40 md:w-56 md:h-56 border-4 border-black bg-[#fcfaf5]" style={{backgroundImage:'linear-gradient(black 2px, transparent 2px), linear-gradient(90deg, black 2px, transparent 2px)',backgroundSize:'32px 32px',backgroundPosition:'-2px -2px'}}></div>
          <div className="absolute top-[-10%] left-[-15%] w-12 h-12 md:w-16 md:h-16 border-[4px] border-black bg-[#a855f7] rounded-full shadow-[4px_4px_0_black]"></div>
          <div className="absolute bottom-[-10%] right-[10%] w-24 h-24 md:w-32 md:h-32 border-[4px] border-black bg-[#fe6b00] rounded-full shadow-[8px_8px_0_black]"></div>
        </div>
        {/* Yellow Spiky Starburst */}
        <div className="absolute bottom-[10%] right-[-5%] md:right-[2%] w-32 h-32 md:w-48 md:h-48 bg-[#ccff00] border-[4px] border-black shadow-[8px_8px_0_black] z-10 flex items-center justify-center" style={{clipPath:'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}>
          <svg className="w-6 h-6 md:w-10 md:h-10 text-black" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
          </svg>
        </div>
        {/* View Architecture Widget -> links to /docs */}
        <a href="/docs" className="hidden lg:flex absolute top-[45%] left-[2%] z-[60] group pointer-events-auto items-center justify-center -rotate-[8deg] hover:rotate-0 transition-transform duration-500 hover:scale-105 outline-none focus:outline-none">
          <div className="absolute -top-[90px] -right-[60px] text-black transform rotate-[10deg] pointer-events-none group-hover:rotate-[0deg] group-hover:-translate-x-2 group-hover:translate-y-2 transition-all duration-300 z-10">
            <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{filter:'drop-shadow(4px 4px 0px #ccff00)'}}>
              <path d="M90,10 Q60,30 20,80" strokeDasharray="8 8" />
              <path d="M20,80 L35,85" />
              <path d="M20,80 L25,65" />
              <text x="60" y="20" fontFamily="monospace" fontWeight="900" fontSize="16" fill="black" stroke="none" transform="rotate(-15 60 20)">DOCS!</text>
            </svg>
          </div>
          <div className="relative bg-white border-[4px] border-black px-6 py-4 shadow-[8px_8px_0_#a855f7] group-hover:shadow-[12px_12px_0_#fe6b00] rounded-2xl flex items-center gap-4 transition-all z-20">
            <div className="w-16 h-16 rounded-full border-[3px] border-black bg-[#ccff00] flex items-center justify-center overflow-hidden shrink-0">
              <svg className="w-10 h-10 text-black animate-[spin_8s_linear_infinite]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-black text-black text-sm uppercase tracking-widest leading-none mb-1">View</span>
              <span className="font-black text-[#1a1a1a] text-2xl uppercase tracking-tighter leading-tight italic">Architecture</span>
            </div>
          </div>
        </a>
      </div>

      {/* Hero Content */}
      <div className="relative z-50 flex flex-col items-center text-center max-w-5xl" style={{mixBlendMode:'multiply'}}>
        <h1 id="hero-heading" className="font-headline font-black text-[clamp(4rem,10vw,8.5rem)] tracking-tighter hero-title flex flex-col gap-0 leading-[0.9] mt-8 text-[#1a1a1a]" style={{fontFamily:'Manrope,sans-serif'}}>
          <span><span className="blur-word">Income</span>&nbsp;<span className="blur-word">safety</span></span>
          <span className="opacity-95"><span className="blur-word">that</span>&nbsp;<span className="blur-word">feels</span></span>
          <span className="text-[#fe6b00] italic drop-shadow-sm"><span className="blur-word">effortless</span></span>
        </h1>
        <p className="mt-8 text-[#4a4a4a] font-bold text-lg md:text-xl max-w-xl leading-relaxed">
          Designed for India&apos;s gig economy. AI-powered income protection that pays out automatically for weather and disruptions—with zero manual claims.
        </p>
        <div className="mt-12 flex flex-col md:flex-row items-center gap-6">
          <a href="https://expo.dev/accounts/sriram_vk/projects/aegis/builds/6a8e6eaf-2bc7-4d58-b55c-a2646c2043ff" target="_blank" rel="noopener noreferrer" className="bg-[#ccff00] text-black border-[3px] border-black px-12 py-5 rounded-xl font-black text-xl flex items-center gap-4 hover:-translate-y-2 transition-transform shadow-[8px_8px_0_rgba(0,0,0,1)] hover:shadow-[12px_12px_0_rgba(0,0,0,1)] active:translate-y-1 active:shadow-[0px_0px_0_rgba(0,0,0,1)]">
            Download Mobile App
            <span className="w-10 h-10 rounded-full bg-black border-2 border-black flex items-center justify-center text-[#ccff00]">
              <span className="material-symbols-outlined text-lg font-black">download</span>
            </span>
          </a>
        </div>
      </div>

      {/* Partner Logos */}
      <div className="w-full max-w-5xl mt-auto pt-24 pb-8 z-50 relative pointer-events-auto">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          <div className="bg-white border-2 border-black px-5 py-2 hover:-translate-y-1 transition-transform shadow-[4px_4px_0_#000] rounded-sm transform -rotate-2">
            <span className="font-black text-xl tracking-tighter text-black">IMD</span>
          </div>
          <div className="bg-[#ccff00] border-2 border-black px-5 py-2 hover:-translate-y-1 transition-transform shadow-[4px_4px_0_#000] rounded-full transform rotate-1">
            <span className="font-black text-xl tracking-tighter text-black">OpenAQ</span>
          </div>
          <div className="bg-white border-2 border-black px-5 py-2 hover:-translate-y-1 transition-transform shadow-[4px_4px_0_#000] rounded-sm transform -rotate-1">
            <span className="font-black text-xl tracking-tighter text-black">UPI</span>
          </div>
          <div className="bg-white border-2 border-black px-5 py-2 hover:-translate-y-1 transition-transform shadow-[4px_4px_0_#000] rounded-full transform rotate-2">
            <span className="font-black text-xl tracking-tighter text-black">Razorpay</span>
          </div>
          <div className="bg-white border-[3px] border-black px-5 py-2 hover:-translate-y-1 transition-transform shadow-[4px_4px_0_#fe6b00] rounded-sm transform -rotate-[3deg] text-black">
            <span className="font-black text-xl tracking-tighter uppercase text-[#fe6b00]">Swiggy</span>
          </div>
          <div className="bg-white border-[3px] border-black px-5 py-2 hover:-translate-y-1 transition-transform shadow-[4px_4px_0_#e23744] rounded-sm transform rotate-[3deg] text-black">
            <span className="font-black text-xl tracking-tighter uppercase text-[#e23744]">Zomato</span>
          </div>
        </div>
      </div>
    </section>
  );
}
