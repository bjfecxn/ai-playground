import { useEffect, useRef, useState } from 'react';
import { Sparkles, Flame, Leaf, Crown } from 'lucide-react';

const mythFigures = [
  {
    name: '盘古',
    title: '开天辟地',
    description: '混沌初开，盘古持斧劈开天地，轻清者上升为天，重浊者下沉为地。盘古死后，身体化为山川河流、日月星辰。',
    icon: Sparkles,
    color: 'from-purple-400 to-blue-400',
  },
  {
    name: '女娲',
    title: '造人补天',
    description: '女娲用黄土捏造人类，炼五色石补苍天，斩鳌足撑四极，杀黑龙济冀州，积芦灰止淫水。',
    icon: Flame,
    color: 'from-red-400 to-orange-400',
  },
];

const threeSovereigns = [
  {
    name: '燧人氏',
    title: '钻木取火',
    description: '发明钻木取火，教人熟食，结束茹毛饮血的历史',
    icon: Flame,
  },
  {
    name: '伏羲氏',
    title: '创八卦教渔猎',
    description: '创制八卦，教民结网捕鱼，驯养牲畜，制定嫁娶之礼',
    icon: Sparkles,
  },
  {
    name: '神农氏',
    title: '尝百草教农耕',
    description: '尝百草辨药性，教民耕种，开创农业文明',
    icon: Leaf,
  },
];

const fiveEmperors = [
  { name: '黄帝', title: '轩辕氏', reign: '约公元前2697-2598年', achievement: '统一华夏部落，发明文字、音律、医药、舟车、养蚕缫丝' },
  { name: '颛顼', title: '高阳氏', reign: '约公元前2598-2514年', achievement: '制定历法，改革宗教，划分九州' },
  { name: '帝喾', title: '高辛氏', reign: '约公元前2514-2436年', achievement: '订立节气，改善民生，治理水患' },
  { name: '尧', title: '陶唐氏', reign: '约公元前2436-2255年', achievement: '禅让制开创者，制定历法，治理洪水，访贤任能' },
  { name: '舜', title: '有虞氏', reign: '约公元前2255-2205年', achievement: '以孝闻名，完善刑法，统一度量衡，举禹治水' },
];

const MythEra = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeTab, setActiveTab] = useState<'myth' | 'sovereigns' | 'emperors'>('myth');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let time = 0;
    let animationId: number;

    const animate = () => {
      time += 0.005;
      ctx.fillStyle = 'rgba(26, 10, 46, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw nebula-like effect
      for (let i = 0; i < 5; i++) {
        const x = canvas.width * (0.2 + i * 0.15) + Math.sin(time + i) * 50;
        const y = canvas.height * (0.3 + Math.cos(time * 0.5 + i) * 0.2);
        const radius = 100 + Math.sin(time + i * 2) * 30;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, `rgba(147, 51, 234, ${0.1 + Math.sin(time + i) * 0.05})`);
        gradient.addColorStop(0.5, `rgba(59, 130, 246, ${0.05 + Math.sin(time + i) * 0.03})`);
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="myth-era" className="relative min-h-screen py-20 bg-gradient-to-b from-[#1a0a2e] via-[#2d1b4e] to-[#1a0a2e] overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Stars background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span className="text-purple-200 font-sans-sc text-sm">传说时代 · 无考古实证</span>
          </div>
          <h2 className="font-calligraphy text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-amber-300 mb-4">
            神话传说时代
          </h2>
          <p className="font-serif-sc text-lg text-purple-200/70 max-w-2xl mx-auto">
            天地初开，混沌未分。先民以神话解释世界起源，口耳相传的创世史诗
          </p>
          <div className="mt-4 inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-lg">
            <span className="text-amber-300/80 font-sans-sc text-sm">时间跨度：约公元前30世纪以前</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {[
            { key: 'myth', label: '创世神话', icon: Sparkles },
            { key: 'sovereigns', label: '三皇', icon: Crown },
            { key: 'emperors', label: '五帝', icon: Crown },
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as typeof activeTab)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-sans-sc transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-purple-900/30 text-purple-300 hover:bg-purple-800/40'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="animate-slide-in">
          {activeTab === 'myth' && (
            <div className="grid md:grid-cols-2 gap-8">
              {mythFigures.map((figure, index) => (
                <div
                  key={figure.name}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${figure.color} opacity-20 blur-xl group-hover:opacity-30 transition-opacity rounded-2xl`} />
                  <div className="relative">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${figure.color} mb-6`}>
                      <figure.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-calligraphy text-4xl text-white mb-2">{figure.name}</h3>
                    <p className="text-purple-300 font-sans-sc text-lg mb-4">{figure.title}</p>
                    <p className="text-gray-300/80 font-serif-sc leading-relaxed">{figure.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'sovereigns' && (
            <div className="grid md:grid-cols-3 gap-6">
              {threeSovereigns.map((sovereign, index) => (
                <div
                  key={sovereign.name}
                  className="group p-6 rounded-xl bg-gradient-to-br from-amber-900/30 to-orange-900/30 border border-amber-500/30 hover:border-amber-400/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                      <sovereign.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-calligraphy text-2xl text-amber-200">{sovereign.name}</h3>
                      <p className="text-amber-400/70 font-sans-sc text-sm">{sovereign.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-300/80 font-serif-sc text-sm leading-relaxed">{sovereign.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'emperors' && (
            <div className="space-y-4">
              {fiveEmperors.map((emperor, index) => (
                <div
                  key={emperor.name}
                  className="group p-6 rounded-xl bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-center gap-4 md:w-1/4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-calligraphy text-2xl text-indigo-200">{emperor.name}</h3>
                        <p className="text-indigo-400/70 font-sans-sc text-sm">{emperor.title}</p>
                      </div>
                    </div>
                    <div className="md:w-1/4">
                      <span className="inline-block px-3 py-1 bg-indigo-500/20 rounded-full text-indigo-300 text-sm font-sans-sc">
                        {emperor.reign}
                      </span>
                    </div>
                    <div className="md:w-1/2">
                      <p className="text-gray-300/80 font-serif-sc text-sm">{emperor.achievement}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Note */}
        <div className="mt-12 p-6 rounded-xl bg-amber-900/20 border border-amber-500/30">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-amber-400 text-lg">!</span>
            </div>
            <div>
              <h4 className="text-amber-300 font-sans-sc font-semibold mb-2">历史性质说明</h4>
              <p className="text-amber-200/70 font-serif-sc text-sm leading-relaxed">
                三皇五帝属于"传说时代"，目前缺乏直接考古证据（尤其是文字证据）。部分学者认为可能与仰韶文化、龙山文化等有一定对应关系，
                如黄帝时代可能对应仰韶文化庙底沟类型（距今5700-5100年），尧舜时代可能对应陶寺遗址（距今约4300-3900年）。
                这些传说反映了先民对远古历史的集体记忆，但具体史实有待进一步考古发现证实。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MythEra;
