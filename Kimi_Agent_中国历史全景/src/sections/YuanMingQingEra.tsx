import { useState } from 'react';
import { Crown, Globe, Map, Scroll, Scale, Flame, BookOpen } from 'lucide-react';

const empires = [
  {
    name: '元朝',
    period: '1271-1368年',
    duration: '97年',
    capital: '大都（北京）',
    founder: '元世祖忽必烈',
    nation: '蒙古族',
    features: [
      '疆域最辽阔的朝代',
      '行省制度确立',
      '四等人制',
      '驿站系统发达',
      '中外交流频繁（马可·波罗）',
    ],
    color: 'from-emerald-800 to-emerald-700',
  },
  {
    name: '明朝',
    period: '1368-1644年',
    duration: '276年',
    capital: '南京→北京',
    founder: '明太祖朱元璋',
    nation: '汉族',
    goldenAges: ['洪武之治', '永乐盛世', '仁宣之治'],
    features: [
      '废除丞相制，设内阁',
      '厂卫特务机构',
      '郑和下西洋',
      '修筑明长城',
      '资本主义萌芽',
    ],
    color: 'from-red-800 to-red-700',
  },
  {
    name: '清朝',
    period: '1644-1912年',
    duration: '268年',
    capital: '北京',
    founder: '清太宗皇太极/顺治帝',
    nation: '满族',
    goldenAges: ['康乾盛世'],
    features: [
      '军机处设立',
      '疆域奠定现代中国版图',
      '文字狱盛行',
      '闭关锁国',
      '鸦片战争后沦为半殖民地',
    ],
    color: 'from-amber-800 to-amber-700',
  },
];

const yuanAchievements = [
  { title: '统一全国', desc: '结束宋辽金夏分裂，疆域直达东欧' },
  { title: '行省制度', desc: '设立中书省、行中书省，影响至今' },
  { title: '驿站系统', desc: '遍布全国的驿站网络，促进交通' },
  { title: '中外交流', desc: '马可·波罗来华，中外文化交流频繁' },
];

const mingAchievements = [
  { title: '郑和下西洋', desc: '1405-1433年，七下西洋，远达东非' },
  { title: '修筑长城', desc: '重修万里长城，现存多为明长城' },
  { title: '永乐大典', desc: '世界最大百科全书，3.7亿字' },
  { title: '资本主义萌芽', desc: '江南工商业发达，出现雇佣关系' },
];

const qingAchievements = [
  { title: '康乾盛世', desc: '康熙、雍正、乾隆三朝，国力强盛' },
  { title: '疆域奠定', desc: '现代中国版图基本形成' },
  { title: '四库全书', desc: '编纂大型丛书，保存古籍' },
  { title: '统一多民族', desc: '巩固统一多民族国家' },
];

const lateQingEvents = [
  { year: '1840年', event: '鸦片战争', desc: '中国近代史开端' },
  { year: '1851年', event: '太平天国运动', desc: '大规模农民起义' },
  { year: '1860s', event: '洋务运动', desc: '自强求富，近代工业起步' },
  { year: '1894年', event: '甲午战争', desc: '《马关条约》，民族危机加深' },
  { year: '1898年', event: '戊戌变法', desc: '百日维新，改革失败' },
  { year: '1900年', event: '义和团运动', desc: '反帝爱国运动' },
  { year: '1911年', event: '辛亥革命', desc: '推翻清朝，建立民国' },
];

const YuanMingQingEra = () => {
  const [selectedEmpire, setSelectedEmpire] = useState(0);

  return (
    <section id="yuanmingqing-era" className="relative min-h-screen py-20 bg-gradient-to-b from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] overflow-hidden">
      {/* Imperial pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b22222' fill-opacity='0.4'%3E%3Crect x='20' y='20' width='60' height='60'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-900/30 rounded-full mb-6">
            <Crown className="w-4 h-4 text-red-500" />
            <span className="text-red-400 font-sans-sc text-sm">第三、四次大一统 · 帝国晚期</span>
          </div>
          <h2 className="font-calligraphy text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-400 to-red-400 mb-4">
            元明清
          </h2>
          <p className="font-serif-sc text-lg text-red-300/70 max-w-2xl mx-auto">
            最后三个封建王朝，从世界帝国到闭关锁国，从盛世到衰落
          </p>
          <div className="mt-4 inline-block px-4 py-2 bg-red-800/30 border border-red-500/40 rounded-lg">
            <span className="text-red-400/80 font-sans-sc text-sm">时间跨度：1271年 - 1912年</span>
          </div>
        </div>

        {/* Empire Selector */}
        <div className="flex justify-center gap-4 mb-12">
          {empires.map((empire, index) => (
            <button
              key={empire.name}
              onClick={() => setSelectedEmpire(index)}
              className={`relative px-8 py-4 rounded-xl font-sans-sc transition-all duration-300 ${
                selectedEmpire === index
                  ? 'bg-gradient-to-r ' + empire.color + ' text-white shadow-lg'
                  : 'bg-stone-800/60 text-stone-400 hover:bg-stone-700/60'
              }`}
            >
              <div className="font-calligraphy text-2xl">{empire.name}</div>
              <div className="text-xs opacity-80">{empire.period}</div>
            </button>
          ))}
        </div>

        {/* Empire Detail */}
        <div className="mb-12 animate-slide-in">
          {empires.map((empire, index) => (
            selectedEmpire === index && (
              <div key={empire.name} className="grid lg:grid-cols-3 gap-8">
                {/* Left: Basic Info */}
                <div className="lg:col-span-1">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-stone-800/60 to-stone-900/60 border border-red-600/30">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${empire.color} flex items-center justify-center`}>
                        <Crown className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-calligraphy text-3xl text-red-200">{empire.name}</h3>
                        <p className="text-red-400/70 font-sans-sc text-sm">{empire.period}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-3 rounded-lg bg-stone-900/50">
                        <p className="text-stone-400 text-sm font-sans-sc mb-1">存续时间</p>
                        <p className="text-amber-300 font-semibold">{empire.duration}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-stone-900/50">
                        <p className="text-stone-400 text-sm font-sans-sc mb-1">都城</p>
                        <p className="text-amber-300 font-semibold">{empire.capital}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-stone-900/50">
                        <p className="text-stone-400 text-sm font-sans-sc mb-1">建立者</p>
                        <p className="text-amber-300 font-semibold">{empire.founder}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-stone-900/50">
                        <p className="text-stone-400 text-sm font-sans-sc mb-1">民族</p>
                        <p className="text-amber-300 font-semibold">{empire.nation}</p>
                      </div>
                      {'goldenAges' in empire && empire.goldenAges && (
                        <div className="p-3 rounded-lg bg-stone-900/50">
                          <p className="text-stone-400 text-sm font-sans-sc mb-2">盛世</p>
                          <div className="flex flex-wrap gap-2">
                            {empire.goldenAges.map((age) => (
                              <span key={age} className="px-2 py-1 bg-amber-700/30 rounded text-amber-300 text-sm">
                                {age}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right: Features */}
                <div className="lg:col-span-2">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-stone-800/40 to-stone-900/40 border border-red-600/20">
                    <h4 className="font-calligraphy text-2xl text-red-300 mb-6 flex items-center gap-2">
                      <Scale className="w-5 h-5" />
                      历史特征
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {empire.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-stone-900/50">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${empire.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <span className="text-white text-xs font-bold">{i + 1}</span>
                          </div>
                          <p className="text-stone-300 font-serif-sc">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Empire Specific Content */}
        {selectedEmpire === 0 && (
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900/30 to-green-900/30 border border-emerald-600/30">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-5 h-5 text-emerald-400" />
              <h3 className="font-calligraphy text-2xl text-emerald-300">元朝成就</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {yuanAchievements.map((item, index) => (
                <div key={index} className="p-4 rounded-lg bg-emerald-950/30">
                  <h4 className="text-emerald-200 font-semibold mb-1">{item.title}</h4>
                  <p className="text-emerald-300/70 text-sm font-sans-sc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedEmpire === 1 && (
          <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/30 to-orange-900/30 border border-red-600/30">
            <div className="flex items-center gap-3 mb-4">
              <Map className="w-5 h-5 text-red-400" />
              <h3 className="font-calligraphy text-2xl text-red-300">明朝成就</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {mingAchievements.map((item, index) => (
                <div key={index} className="p-4 rounded-lg bg-red-950/30">
                  <h4 className="text-red-200 font-semibold mb-1">{item.title}</h4>
                  <p className="text-red-300/70 text-sm font-sans-sc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedEmpire === 2 && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-900/30 to-yellow-900/30 border border-amber-600/30">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-5 h-5 text-amber-400" />
                <h3 className="font-calligraphy text-2xl text-amber-300">清朝成就</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {qingAchievements.map((item, index) => (
                  <div key={index} className="p-4 rounded-lg bg-amber-950/30">
                    <h4 className="text-amber-200 font-semibold mb-1">{item.title}</h4>
                    <p className="text-amber-300/70 text-sm font-sans-sc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/30 to-stone-900/30 border border-red-600/30">
              <div className="flex items-center gap-3 mb-4">
                <Flame className="w-5 h-5 text-red-400" />
                <h3 className="font-calligraphy text-2xl text-red-300">晚清变局</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                {lateQingEvents.map((item, index) => (
                  <div key={index} className="p-3 rounded-lg bg-red-950/30 border border-red-600/20">
                    <span className="px-2 py-1 bg-red-700/30 rounded text-red-300 text-xs font-sans-sc">
                      {item.year}
                    </span>
                    <h4 className="text-red-200 font-semibold text-sm mt-2">{item.event}</h4>
                    <p className="text-red-300/70 text-xs font-sans-sc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Historical significance */}
        <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-stone-800/60 to-stone-900/60 border border-red-500/30">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-red-600/30 flex items-center justify-center flex-shrink-0 mt-1">
              <Scroll className="w-4 h-4 text-red-400" />
            </div>
            <div>
              <h4 className="text-red-300 font-sans-sc font-semibold mb-2">历史意义</h4>
              <p className="text-stone-300 font-serif-sc text-sm leading-relaxed">
                元明清是中国最后三个封建王朝，也是统一多民族国家巩固和发展的重要时期。
                元朝确立了行省制度，疆域空前辽阔；明朝恢复了汉族统治，郑和下西洋展示了中国的航海实力；
                清朝奠定了现代中国版图的基础，康乾盛世达到封建社会最后的繁荣。
                然而，清朝后期的闭关锁国政策导致中国落后于西方，鸦片战争后逐步沦为半殖民地半封建社会。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YuanMingQingEra;
