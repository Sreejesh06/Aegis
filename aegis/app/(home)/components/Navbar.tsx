import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] rounded-2xl bg-white border-[3px] border-black shadow-[6px_6px_0_rgba(0,0,0,1)] flex items-center justify-between px-5 md:px-8 py-3 w-[95%] max-w-5xl transition-all hover:-translate-y-0.5 hover:shadow-[8px_8px_0_rgba(0,0,0,1)] backdrop-blur-md">
      {/* Left side: Title/Logo */}
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 bg-[#fe6b00]" style={{WebkitMaskImage:"url('/logo.png')",WebkitMaskSize:'contain',WebkitMaskRepeat:'no-repeat',WebkitMaskPosition:'center',maskImage:"url('/logo.png')",maskSize:'contain',maskRepeat:'no-repeat',maskPosition:'center'}}></div>
        <span className="text-xl font-black tracking-tighter text-black uppercase mt-1">Aegis</span>
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex items-center gap-8 px-6">
        <a href="#coverage" className="font-black text-black uppercase tracking-widest text-[11px] hover:text-[#fe6b00] hover:-translate-y-0.5 transition-transform no-underline">Cover</a>
        <a href="#how-it-works" className="font-black text-black uppercase tracking-widest text-[11px] hover:text-[#fe6b00] hover:-translate-y-0.5 transition-transform no-underline">Flow</a>
        <a href="#core-processor" className="font-black text-black uppercase tracking-widest text-[11px] hover:text-[#fe6b00] hover:-translate-y-0.5 transition-transform no-underline">Engine</a>
        <a href="#platforms" className="font-black text-black uppercase tracking-widest text-[11px] hover:text-[#fe6b00] hover:-translate-y-0.5 transition-transform no-underline">Partners</a>
        <Link href="/docs" className="font-black text-black uppercase tracking-widest text-[11px] hover:text-[#fe6b00] hover:-translate-y-0.5 transition-transform no-underline">Docs</Link>
      </div>

      {/* Right side: Status LED */}
      <div className="flex items-center gap-4 pl-4 border-l-[3px] border-black">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff3b30] border-2 border-black animate-pulse shadow-[2px_2px_0_#000]"></div>
          <span className="text-[10px] font-black text-black uppercase tracking-widest mt-0.5 hidden sm:block pr-2">Live</span>
        </div>
      </div>
    </nav>
  );
}
