import { useState } from 'react';
import { Crown, Scroll, Scale, Flame } from 'lucide-react';

const dynasties = [
  {
    name: '夏朝',
    period: '约前2070-前1600年',
    duration: '约470年',
    capital: '阳城、斟鄩等',
    founders: ['禹', '启'],
    features: [
      '中国史书记载第一个世袭制王朝',
      '禹传子启，禅让制变为世袭制',
      '二里头遗址可能为夏都',
      '建立军队、监狱等国家机器',
    ],
    archaeology: '二里头遗址（河南偃师）',
    icon: Flame,
    color: 'from-amber-600 to-orange-600',
  },
  {
    name: '商朝',
    period: '约前1600-前1046年',
    duration: '约554年',
    capital: '亳 → 殷（安阳）',
    founders: ['汤'],
    features: [
      '甲骨文证实为信史',
      '青铜文明鼎盛（司母戊鼎）',
      '完善的祭祀制度',
      '成熟的文字系统',
    ],
    archaeology: '殷墟遗址（河南安阳）',
    icon: Crown,
    color: 'from-emerald-600 to-teal-600',
  },
  {
    name: '西周',
    period: '前1046-前771年',
    duration: '275年',
    capital: '镐京（西安）',
    founders: ['周武王姬发'],
    features: [
      '分封制确立',
      '宗法制完善',
      '礼乐制度建立',
      '周公制礼作乐',
    ],
    archaeology: '周原遗址（陕西宝鸡）',
    icon: Scale,
    color: 'from-blue-600 to-indigo-600',
  },
];

const xiaShangZhouChronology = [
  { event: '夏朝建立', year: '约前2070年', note: '禹传子启，世袭制开始' },
  { event: '商汤灭夏', year: '约前1600年', note: '鸣条之战，商朝建立' },
  { event: '盘庚迁殷', year: '约前1300年', note: '商朝中兴，甲骨文兴盛' },
  { event: '武王伐纣', year: '前1046年', note: '牧野之战，西周建立' },
  { event: '周公东征', year: '前1042年', note: '平定三监之乱' },
  { event: '成康之治', year: '前1042-前996年', note: '西周盛世' },
  { event: '国人暴动', year: '前841年', note: '共和行政，中国历史确切纪年开始' },
  { event: '西周灭亡', year: '前771年', note: '犬戎攻破镐京' },
];

const XiaShangZhouEra = () => {
  const [selectedDynasty, setSelectedDynasty] = useState(0);

  return (
    <section id="xiashangzhou-era" className="relative min-h-screen py-20 bg-gradient-to-b from-[#2a1810] via-[#4a3728] to-[#2a1810] overflow-hidden">
      {/* Bronze pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23cd7f32' fill-opacity='0.6'%3E%3Cpath d='M40 0L80 40L40 80L0 40L40 0zm0 10L10 40l30 30 30-30L40 10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-800/30 rounded-full mb-6">
            <Crown className="w-4 h-4 text-amber-500" />
            <span className="text-amber-400 font-sans-sc text-sm">信史时代 · 有文字记载的历史</span>
          </div>
          <h2 className="font-calligraphy text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 mb-4">
            夏商周三代
          </h2>
          <p className="font-serif-sc text-lg text-amber-300/70 max-w-2xl mx-auto">
            中华文明奠基时期，从神话走向信史的伟大转折
          </p>
          <div className="mt-4 inline-block px-4 py-2 bg-amber-700/30 border border-amber-500/40 rounded-lg">
            <span className="text-amber-400/80 font-sans-sc text-sm">时间跨度：约前2070年 - 前771年</span>
          </div>
        </div>

        {/* Dynasty Selector */}
        <div className="flex justify-center gap-4 mb-12">
          {dynasties.map((dynasty, index) => (
            <button
              key={dynasty.name}
              onClick={() => setSelectedDynasty(index)}
              className={`relative px-6 py-4 rounded-xl font-sans-sc transition-all duration-300 ${
                selectedDynasty === index
                  ? 'bg-gradient-to-r ' + dynasty.color + ' text-white shadow-lg'
                  : 'bg-stone-800/60 text-stone-400 hover:bg-stone-700/60'
              }`}
            >
              <div className="font-calligraphy text-2xl">{dynasty.name}</div>
              <div className="text-xs opacity-80 mt-1">{dynasty.period}</div>
            </button>
          ))}
        </div>

        {/* Dynasty Detail */}
        <div className="mb-16 animate-slide-in">
          {dynasties.map((dynasty, index) => (
            selectedDynasty === index && (
              <div key={dynasty.name} className="grid lg:grid-cols-2 gap-8">
                {/* Left: Main Info */}
                <div className="space-y-6">
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-stone-800/60 to-stone-900/60 border border-amber-600/30">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${dynasty.color} flex items-center justify-center`}>
                        <dynasty.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-calligraphy text-4xl text-amber-200">{dynasty.name}</h3>
                        <p className="text-amber-400/70 font-sans-sc">{dynasty.period}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-4 rounded-lg bg-stone-900/50">
                        <p className="text-stone-400 text-sm font-sans-sc mb-1">存续时间</p>
                        <p className="text-amber-300 font-semibold">{dynasty.duration}</p>
                      </div>
                      <div className="p-4 rounded-lg bg-stone-900/50">
                        <p className="text-stone-400 text-sm font-sans-sc mb-1">都城</p>
                        <p className="text-amber-300 font-semibold">{dynasty.capital}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-stone-400 text-sm font-sans-sc mb-2">建立者</p>
                      <div className="flex gap-2">
                        {dynasty.founders.map((founder) => (
                          <span key={founder} className="px-3 py-1 bg-amber-700/30 rounded-full text-amber-300 text-sm">
                            {founder}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-stone-400 text-sm font-sans-sc mb-2">重要考古发现</p>
                      <p className="text-amber-300/80">{dynasty.archaeology}</p>
                    </div>
                  </div>
                </div>

                {/* Right: Features */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-stone-800/40 to-stone-900/40 border border-amber-600/20">
                  <h4 className="font-calligraphy text-2xl text-amber-300 mb-6">历史特征</h4>
                  <div className="space-y-4">
                    {dynasty.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${dynasty.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <span className="text-white text-xs font-bold">{i + 1}</span>
                        </div>
                        <p className="text-stone-300 font-serif-sc">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Chronology Timeline */}
        <div className="p-8 rounded-2xl bg-stone-900/40 border border-amber-600/20">
          <div className="flex items-center gap-3 mb-6">
            <Scroll className="w-6 h-6 text-amber-500" />
            <h3 className="font-calligraphy text-2xl text-amber-300">夏商周断代工程年表</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {xiaShangZhouChronology.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-stone-800/50 border border-amber-600/20 hover:border-amber-500/40 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-amber-600/30 flex items-center justify-center text-amber-400 text-xs font-bold">
                    {index + 1}
                  </span>
                  <span className="text-amber-400/80 font-sans-sc text-sm">{item.year}</span>
                </div>
                <h4 className="text-amber-200 font-semibold mb-1">{item.event}</h4>
                <p className="text-stone-400 text-xs font-sans-sc">{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="mt-8 p-6 rounded-xl bg-emerald-900/20 border border-emerald-600/30">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-emerald-600/30 flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-emerald-400 text-lg">✓</span>
            </div>
            <div>
              <h4 className="text-emerald-300 font-sans-sc font-semibold mb-2">信史时代的确立</h4>
              <p className="text-emerald-200/70 font-serif-sc text-sm leading-relaxed">
                夏商周断代工程（1996-2000）确立了基本年代框架：夏朝始于约前2070年（禹建夏），商朝始于约前1600年（汤灭夏），周朝始于前1046年（武王伐纣）。
                商朝因甲骨文的发现被证实为信史，夏朝虽无直接文字证据，但二里头遗址的考古发现与文献记载高度吻合。
                西周建立的共和元年（前841年）是中国历史有确切纪年的开始。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default XiaShangZhouEra;
