'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function LandingScripts() {
  useEffect(() => {
    // Blur word animation
    const heading = document.getElementById('hero-heading');
    if (heading) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const words = entry.target.querySelectorAll('.blur-word');
              words.forEach((word, index) => {
                (word as HTMLElement).style.animationDelay = `${index * 0.2}s`;
                word.classList.add('animate');
              });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(heading);
    }

    // GSAP Marquee Menu Init
    const initMarqueeInterval = setInterval(() => {
      if ((window as any).gsap) {
        clearInterval(initMarqueeInterval);
        initMenuMarquee();
      }
    }, 100);

    return () => clearInterval(initMarqueeInterval);
  }, []);

  return (
    <>
      {/* Three.js */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          initGlobe();
          initDataflow();
          initCtaParticles();
        }}
      />

      {/* GSAP */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          initMenuMarquee();
        }}
      />

      {/* GSAP ScrollTrigger */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
        strategy="afterInteractive"
      />

      {/* Lenis smooth scroll */}
      <Script
        src="https://unpkg.com/@studio-freight/lenis@1.0.39/dist/lenis.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          initLenisScroll();
        }}
      />

      {/* Cobe globe */}
      <Script
        src="https://cdn.skypack.dev/cobe"
        strategy="afterInteractive"
        type="module"
        onLoad={() => {
          initCobeGlobe();
        }}
      />
    </>
  );
}

function initGlobe() {
  const THREE = (window as any).THREE;
  if (!THREE) return;
  const canvas = document.getElementById('globe-canvas') as HTMLCanvasElement;
  if (!canvas) return;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.z = 3.5;

  function resize() {
    const s = canvas.parentElement!.offsetWidth;
    renderer.setSize(s, s);
    camera.aspect = 1;
    camera.updateProjectionMatrix();
  }

  scene.add(new THREE.AmbientLight(0xffffff, 0.3));
  const dl = new THREE.DirectionalLight(0xff6b00, 1.5);
  dl.position.set(3, 2, 3);
  scene.add(dl);
  const dl2 = new THREE.DirectionalLight(0x4488ff, 0.5);
  dl2.position.set(-3, -2, -1);
  scene.add(dl2);

  const innerGeo = new THREE.SphereGeometry(1, 32, 32);
  const innerMat = new THREE.MeshStandardMaterial({ color: 0x1a1a2e, metalness: 0.5, roughness: 0.5 });
  scene.add(new THREE.Mesh(innerGeo, innerMat));

  const wireGeo = new THREE.SphereGeometry(1.01, 20, 20);
  const wireMat = new THREE.MeshBasicMaterial({ color: 0xff6b00, wireframe: true, transparent: true, opacity: 0.35 });
  const globe = new THREE.Mesh(wireGeo, wireMat);
  scene.add(globe);

  const dotGeo = new THREE.BufferGeometry();
  const dotPositions: number[] = [];
  for (let i = 0; i < 60; i++) {
    const phi = Math.acos(2 * Math.random() - 1);
    const theta = 2 * Math.PI * Math.random();
    const r = 1.03;
    dotPositions.push(r * Math.sin(phi) * Math.cos(theta), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(theta));
  }
  dotGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(dotPositions), 3));
  scene.add(new THREE.Points(dotGeo, new THREE.PointsMaterial({ color: 0xffaa33, size: 0.05 })));

  const orbitGeo = new THREE.TorusGeometry(1.5, 0.008, 8, 80);
  const orbitMat = new THREE.MeshBasicMaterial({ color: 0x4488ff, transparent: true, opacity: 0.4 });
  const orbit = new THREE.Mesh(orbitGeo, orbitMat);
  orbit.rotation.x = Math.PI / 4;
  scene.add(orbit);

  const satGeo = new THREE.SphereGeometry(0.05, 8, 8);
  const satMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const sat = new THREE.Mesh(satGeo, satMat);
  scene.add(sat);

  resize();
  window.addEventListener('resize', resize);

  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.01;
    globe.rotation.y += 0.005;
    orbit.rotation.z += 0.008;
    sat.position.x = Math.cos(t * 1.2) * 1.5;
    sat.position.y = Math.sin(t * 1.2) * Math.sin(Math.PI / 4) * 1.5;
    sat.position.z = Math.sin(t * 1.2) * Math.cos(Math.PI / 4) * 1.5;
    renderer.render(scene, camera);
  }
  animate();
}

function initDataflow() {
  const THREE = (window as any).THREE;
  if (!THREE) return;
  const canvas = document.getElementById('dataflow-canvas') as HTMLCanvasElement;
  if (!canvas) return;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 500);
  camera.position.z = 30;

  function resize() {
    const el = canvas.parentElement!;
    renderer.setSize(el.offsetWidth, el.offsetHeight);
    camera.aspect = el.offsetWidth / el.offsetHeight;
    camera.updateProjectionMatrix();
  }

  const lineMat = new THREE.LineBasicMaterial({ color: 0xff6b00, transparent: true, opacity: 0.06 });
  for (let x = -20; x <= 20; x += 2) {
    const pts = [new THREE.Vector3(x, -20, 0), new THREE.Vector3(x, 20, 0)];
    scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), lineMat));
  }
  for (let y = -20; y <= 20; y += 2) {
    const pts = [new THREE.Vector3(-20, y, 0), new THREE.Vector3(20, y, 0)];
    scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), lineMat));
  }

  const flowDots: any[] = [];
  const dotM = new THREE.MeshBasicMaterial({ color: 0xff6b00, transparent: true, opacity: 0.7 });
  for (let i = 0; i < 30; i++) {
    const d = new THREE.Mesh(new THREE.SphereGeometry(0.08, 6, 6), dotM);
    d.userData.isHorz = Math.random() > 0.5;
    d.userData.pos = (Math.random() - 0.5) * 40;
    d.userData.lane = Math.round((Math.random() - 0.5) * 10) * 2;
    d.userData.speed = (Math.random() * 0.1 + 0.05) * (Math.random() > 0.5 ? 1 : -1);
    flowDots.push(d);
    scene.add(d);
  }

  resize();
  window.addEventListener('resize', resize);

  function animate() {
    requestAnimationFrame(animate);
    flowDots.forEach((d: any) => {
      d.userData.pos += d.userData.speed;
      if (Math.abs(d.userData.pos) > 20) d.userData.pos *= -1;
      if (d.userData.isHorz) d.position.set(d.userData.pos, d.userData.lane, 0);
      else d.position.set(d.userData.lane, d.userData.pos, 0);
    });
    renderer.render(scene, camera);
  }
  animate();
}

function initCtaParticles() {
  const THREE = (window as any).THREE;
  if (!THREE) return;
  const canvas = document.getElementById('cta-canvas') as HTMLCanvasElement;
  if (!canvas) return;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(70, 1, 0.1, 200);
  camera.position.z = 20;

  function resize() {
    const el = canvas.parentElement!;
    renderer.setSize(el.offsetWidth, el.offsetHeight);
    camera.aspect = el.offsetWidth / el.offsetHeight;
    camera.updateProjectionMatrix();
  }

  const pGeo = new THREE.BufferGeometry();
  const N = 600;
  const positions = new Float32Array(N * 3);
  const velocities: { x: number; y: number; z: number }[] = [];

  for (let i = 0; i < N; i++) {
    const r = Math.random() * 40;
    const theta = Math.random() * Math.PI * 2;
    positions[i * 3] = r * Math.cos(theta);
    positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
    positions[i * 3 + 2] = r * Math.sin(theta) - 10;
    velocities.push({
      x: (Math.random() - 0.5) * 0.02,
      y: Math.random() * 0.05 + 0.01,
      z: (Math.random() - 0.5) * 0.02,
    });
  }

  pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const pMat = new THREE.PointsMaterial({
    color: 0xff6b00,
    size: 0.15,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
  });

  const particles = new THREE.Points(pGeo, pMat);
  scene.add(particles);

  resize();
  window.addEventListener('resize', resize);

  function animate() {
    requestAnimationFrame(animate);
    const pos = pGeo.attributes.position.array;
    for (let i = 0; i < N; i++) {
      pos[i * 3 + 1] += velocities[i].y;
      if (pos[i * 3 + 1] > 20) pos[i * 3 + 1] = -20;
      pos[i * 3] += velocities[i].x;
      pos[i * 3 + 2] += velocities[i].z;
    }
    pGeo.attributes.position.needsUpdate = true;
    particles.rotation.y += 0.002;
    renderer.render(scene, camera);
  }
  animate();
}

function initMenuMarquee() {
  const gsap = (window as any).gsap;
  if (!gsap) return;

  const menuItems = document.querySelectorAll('.menu__item');

  menuItems.forEach((item) => {
    if (item.hasAttribute('data-init')) return;
    item.setAttribute('data-init', 'true');

    const link = item.querySelector('.menu__item-link');
    const marquee = item.querySelector('.marquee');
    const marqueeInner = item.querySelector('.marquee__inner');
    const marqueePart = item.querySelector('.marquee__part');
    if (!marqueePart || !link || !marquee || !marqueeInner) return;

    let animation: any;
    const speed = 15;

    const setupMarquee = () => {
      const contentWidth = (marqueePart as HTMLElement).offsetWidth;
      if (contentWidth === 0) return;
      if (animation) animation.kill();
      animation = gsap.to(marqueeInner, {
        x: -contentWidth,
        duration: speed,
        ease: 'none',
        repeat: -1,
      });
    };

    setTimeout(setupMarquee, 100);
    window.addEventListener('resize', setupMarquee);

    const distMetric = (x: number, y: number, x2: number, y2: number) => (x - x2) ** 2 + (y - y2) ** 2;
    const findClosestEdge = (mouseX: number, mouseY: number, width: number, height: number) => {
      const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
      const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
      return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
    };

    const animDefaults = { duration: 0.6, ease: 'expo' };

    link.addEventListener('mouseenter', (ev: any) => {
      const rect = item.getBoundingClientRect();
      const x = ev.clientX - rect.left;
      const y = ev.clientY - rect.top;
      const edge = findClosestEdge(x, y, rect.width, rect.height);

      gsap
        .timeline({ defaults: animDefaults })
        .set(marquee, { y: edge === 'top' ? '-101%' : '101%' }, 0)
        .set(marqueeInner, { y: edge === 'top' ? '101%' : '-101%' }, 0)
        .to([marquee, marqueeInner], { y: '0%' }, 0);
    });

    link.addEventListener('mouseleave', (ev: any) => {
      const rect = item.getBoundingClientRect();
      const x = ev.clientX - rect.left;
      const y = ev.clientY - rect.top;
      const edge = findClosestEdge(x, y, rect.width, rect.height);

      gsap
        .timeline({ defaults: animDefaults })
        .to(marquee, { y: edge === 'top' ? '-101%' : '101%' }, 0)
        .to(marqueeInner, { y: edge === 'top' ? '101%' : '-101%' }, 0);
    });
  });
}

function initLenisScroll() {
  const gsap = (window as any).gsap;
  const ScrollTrigger = (window as any).ScrollTrigger;
  const Lenis = (window as any).Lenis;
  if (!gsap || !ScrollTrigger || !Lenis) return;

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time: number) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0, 0);

  gsap.registerPlugin(ScrollTrigger);

  // Global Viewport Reveals
  const headings = gsap.utils.toArray('h2, h3, p.text-xl, p.text-lg');
  headings.forEach((el: any) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
  });

  // Reveal grids with Stagger
  const cardGrids = gsap.utils.toArray('.grid');
  cardGrids.forEach((grid: any) => {
    const cards = Array.from(grid.children);
    if (cards.length > 0) {
      gsap.from(cards, {
        scrollTrigger: {
          trigger: grid,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 60,
        opacity: 0,
        scale: 0.98,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }
  });

  // Subtly shrink and fade in showcase sections
  const showcases = gsap.utils.toArray('.bg-surface-container-lowest.rounded-3xl.overflow-hidden, .bg-zinc-900.rounded-\\[2rem\\]');
  showcases.forEach((card: any) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      y: 80,
      opacity: 0,
      duration: 1.5,
      ease: 'expo.out',
    });
  });
}

function initCobeGlobe() {
  // Cobe globe needs dynamic import
  import('https://cdn.skypack.dev/cobe' as any).then((mod: any) => {
    const createGlobe = mod.default;
    const canvas = document.getElementById('cobe-globe') as HTMLCanvasElement;
    if (!canvas || !createGlobe) return;
    let phi = 0;
    const isDark = document.documentElement.classList.contains('dark');
    createGlobe(canvas, {
      devicePixelRatio: 2,
      width: 1600,
      height: 1600,
      phi: 0,
      theta: 0.1,
      dark: isDark ? 1 : 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: isDark ? [0.3, 0.3, 0.3] : [1, 1, 1],
      markerColor: [0.98, 0.41, 0],
      glowColor: isDark ? [0.1, 0.1, 0.1] : [1, 1, 1],
      markers: [
        { location: [20.5937, 78.9629], size: 0.08 },
        { location: [37.7595, -122.4367], size: 0.03 },
      ],
      onRender: (state: any) => {
        state.phi = phi;
        phi += 0.005;
      },
    });
  }).catch(() => {
    // Cobe import failed silently
  });
}
