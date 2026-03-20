export default function PlatformsSection() {
  const platforms = [
    { name: 'Blinkit', bgColor: '#F8CB46', textColor: '#000', logo: '/blinkit-logo.png' },
    { name: 'Zepto', bgColor: '#480e8e', textColor: '#fff', logo: '/zepto-logo.png' },
    { name: 'Instamart', bgColor: '#fc8019', textColor: '#fff', logo: '/instamart-logo.png' },
    { name: 'BigBasket', bgColor: '#84c225', textColor: '#fff', logo: '/bigbasket-logo.png' },
    { name: 'JioMart', bgColor: '#e51d27', textColor: '#fff', logo: '/jiomart-logo.png' },
  ];

  return (
    <section className="py-24 px-6 bg-[#0c0e0f] relative z-20" id="platforms">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-xs font-black uppercase tracking-[0.2em] text-white opacity-40 mb-6">Partner Network</div>
        <h2 className="text-5xl md:text-7xl font-black text-white text-center mb-16 tracking-tighter" style={{fontFamily:'Manrope,sans-serif'}}>
          Seamless coverage across<br/><span className="text-[#f66700]">India&apos;s top q-commerce</span>
        </h2>
        <div className="menu-wrap rounded-[2rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] w-full" style={{height:'60vh'}}>
          <nav className="menu">
            {platforms.map((p) => (
              <div className="menu__item uppercase" key={p.name}>
                <a className="menu__item-link" href="#">{p.name}</a>
                <div className="marquee" style={{backgroundColor: p.bgColor}}>
                  <div className="marquee__inner-wrap">
                    <div className="marquee__inner" aria-hidden="true">
                      {[...Array(6)].map((_, i) => (
                        <div className="marquee__part" style={{color: p.textColor}} key={i}>
                          <span>{p.name}</span>
                          <div className="marquee__img" style={{backgroundImage:`url('${p.logo}')`}}></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
