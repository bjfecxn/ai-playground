import { useEffect, useRef } from 'react';
import { ChevronDown, BookOpen, Clock, Map } from 'lucide-react';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 15, 35, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 160, 80, ${particle.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToMyth = () => {
    document.getElementById('myth-era')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0f0f23] via-[#1a1a3e] to-[#0f0f23]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Main title */}
        <div className="mb-8">
          <h1 className="font-calligraphy text-6xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 mb-4 drop-shadow-2xl">
            中国历史
          </h1>
          <h2 className="font-brush text-3xl md:text-5xl text-amber-200/80 tracking-widest">
            完整脉络
          </h2>
        </div>

        {/* Subtitle */}
        <p className="font-serif-sc text-lg md:text-xl text-gray-300/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          从神话传说到现代中国 · 跨越百万年的文明史诗
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
          <div className="flex items-center gap-3 text-amber-200/70">
            <Clock className="w-6 h-6" />
            <span className="font-sans-sc text-lg">约170万年</span>
          </div>
          <div className="flex items-center gap-3 text-amber-200/70">
            <BookOpen className="w-6 h-6" />
            <span className="font-sans-sc text-lg">5000年文明史</span>
          </div>
          <div className="flex items-center gap-3 text-amber-200/70">
            <Map className="w-6 h-6" />
            <span className="font-sans-sc text-lg">数十个朝代</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToMyth}
          className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-sans-sc text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-amber-500/30 hover:scale-105"
        >
          开启历史之旅
          <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f0f23] to-transparent" />
    </section>
  );
};

export default HeroSection;
