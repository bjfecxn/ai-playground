import { useState } from 'react';
import { Building2, Scroll, Scale, Globe, BookOpen, Hammer, Crown, Flame } from 'lucide-react';

const qinHanDynasties = [
  {
    name: '秦朝',
    period: '前221-前207年',
    duration: '15年',
    capital: '咸阳',
    founder: '秦始皇嬴政',
    features: [
      '中国第一个中央集权帝国',
      '统一文字（小篆）',
      '统一货币（圆形方孔钱）',
      '统一度量衡',
      '修筑长城、驰道',
      '焚书坑儒',
    ],
    icon: Building2,
    color: 'from-slate-700 to-slate-600',
  },
  {
    name: '西汉',
    period: '前202-公元8年',
    duration: '210年',
    capital: '长安（西安）',
    founder: '汉高祖刘邦',
    goldenAges: ['文景之治', '汉武盛世'],
    features: [
      '郡国并行制',
      '独尊儒术',
      '丝绸之路开通',
      '司马迁著《史记》',
      '击败匈奴，开拓西域',
    ],
    icon: Crown,
    color: 'from-amber-700 to-amber-600',
  },
  {
    name: '新朝',
    period: '8-23年',
    duration: '15年',
    capital: '常安（长安）',
    founder: '王莽',
    features: [
      '托古改制',
      '土地国有（王田制）',
      '奴婢私属',
      '五均六筦',
      '改革失败，天下大乱',
    ],
    icon: Flame,
    color: 'from-red-700 to-red-600',
  },
  {
    name: '东汉',
    period: '25-220年',
    duration: '195年',
    capital: '洛阳',
    founder: '汉光武帝刘秀',
    goldenAges: ['光武中兴', '明章之治'],
    features: [
      '尚书台制度',
      '察举制完善',
      '佛教传入',
      '造纸术发明（蔡伦）',
      '班固著《汉书》',
    ],
    icon: Scroll,
    color: 'from-emerald-700 to-emerald-600',
  },
];

const qinAchievements = [
  { title: '统一六国', desc: '前230-前221年，先后灭韩、赵、魏、楚、燕、齐' },
  { title: '确立皇帝制度', desc: '嬴政自称始皇帝，建立三公九卿制' },
  { title: '推行郡县制', desc: '废除分封，全国设36郡，加强中央集权' },
  { title: '统一文字', desc: '以小篆为标准文字，促进文化交流' },
  { title: '统一货币', desc: '圆形方孔钱，便利经济往来' },
  { title: '统一度量衡', desc: '标准器颁行天下，统一计量标准' },
  { title: '修筑长城', desc: '连接秦赵燕长城，防御匈奴' },
  { title: '开凿灵渠', desc: '沟通长江珠江水系，便利南北交通' },
];

const hanAchievements = [
  { title: '文景之治', desc: '前180-前141年，轻徭薄赋，休养生息' },
  { title: '汉武盛世', desc: '前141-前87年，开疆拓土，独尊儒术' },
  { title: '丝绸之路', desc: '张骞出使西域，开通东西方贸易通道' },
  { title: '击败匈奴', desc: '卫青、霍去病北伐，解除北方威胁' },
  { title: '太初改历', desc: '颁布太初历，确立正月为岁首' },
  { title: '史记成书', desc: '司马迁著中国第一部纪传体通史' },
  { title: '造纸术发明', desc: '蔡伦改进造纸术，推动文明传播' },
  { title: '佛教传入', desc: '东汉明帝时期，佛教正式传入中国' },
];

const QinHanEra = () => {
  const [selectedDynasty, setSelectedDynasty] = useState(0);

  return (
    <section id="qinhan-era" className="relative min-h-screen py-20 bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#1a1a2e] overflow-hidden">
      {/* Palace pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 L90 40 L90 90 L10 90 L10 40 Z' fill='none' stroke='%23c9a050' stroke-width='1'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-800/30 rounded-full mb-6">
            <Building2 className="w-4 h-4 text-amber-500" />
            <span className="text-amber-400 font-sans-sc text-sm">大一统帝国 · 中华文明定型</span>
          </div>
          <h2 className="font-calligraphy text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 mb-4">
            秦汉帝国
          </h2>
          <p className="font-serif-sc text-lg text-amber-300/70 max-w-2xl mx-auto">
            从秦统一六国到汉武盛世，中华文明的基本格局在此确立
          </p>
          <div className="mt-4 inline-block px-4 py-2 bg-amber-700/30 border border-amber-500/40 rounded-lg">
            <span className="text-amber-400/80 font-sans-sc text-sm">时间跨度：前221年 - 220年</span>
          </div>
        </div>

        {/* Dynasty Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {qinHanDynasties.map((dynasty, index) => (
            <button
              key={dynasty.name}
              onClick={() => setSelectedDynasty(index)}
              className={`relative px-5 py-3 rounded-xl font-sans-sc transition-all duration-300 ${
                selectedDynasty === index
                  ? 'bg-gradient-to-r ' + dynasty.color + ' text-white shadow-lg'
                  : 'bg-slate-800/60 text-slate-400 hover:bg-slate-700/60'
              }`}
            >
              <div className="font-calligraphy text-xl">{dynasty.name}</div>
              <div className="text-xs opacity-80">{dynasty.period}</div>
            </button>
          ))}
        </div>

        {/* Dynasty Detail */}
        <div className="mb-12 animate-slide-in">
          {qinHanDynasties.map((dynasty, index) => (
            selectedDynasty === index && (
              <div key={dynasty.name} className="grid lg:grid-cols-3 gap-8">
                {/* Left: Basic Info */}
                <div className="lg:col-span-1">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-amber-600/30">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${dynasty.color} flex items-center justify-center`}>
                        <dynasty.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-calligraphy text-3xl text-amber-200">{dynasty.name}</h3>
                        <p className="text-amber-400/70 font-sans-sc text-sm">{dynasty.period}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-3 rounded-lg bg-slate-900/50">
                        <p className="text-slate-400 text-sm font-sans-sc mb-1">存续时间</p>
                        <p className="text-amber-300 font-semibold">{dynasty.duration}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-900/50">
                        <p className="text-slate-400 text-sm font-sans-sc mb-1">都城</p>
                        <p className="text-amber-300 font-semibold">{dynasty.capital}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-900/50">
                        <p className="text-slate-400 text-sm font-sans-sc mb-1">建立者</p>
                        <p className="text-amber-300 font-semibold">{dynasty.founder}</p>
                      </div>
                      {'goldenAges' in dynasty && dynasty.goldenAges && (
                        <div className="p-3 rounded-lg bg-slate-900/50">
                          <p className="text-slate-400 text-sm font-sans-sc mb-1">盛世</p>
                          <div className="flex flex-wrap gap-2">
                            {dynasty.goldenAges.map((age) => (
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
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-amber-600/20">
                    <h4 className="font-calligraphy text-2xl text-amber-300 mb-6 flex items-center gap-2">
                      <Scale className="w-5 h-5" />
                      历史特征
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {dynasty.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/50">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${dynasty.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <span className="text-white text-xs font-bold">{i + 1}</span>
                          </div>
                          <p className="text-slate-300 font-serif-sc">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Qin Achievements */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-600/30">
            <div className="flex items-center gap-3 mb-6">
              <Hammer className="w-5 h-5 text-slate-400" />
              <h3 className="font-calligraphy text-xl text-slate-300">秦朝重大举措</h3>
            </div>
            <div className="space-y-3">
              {qinAchievements.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/50 hover:bg-slate-800/50 transition-colors">
                  <span className="w-6 h-6 rounded-full bg-slate-600/50 flex items-center justify-center text-slate-400 text-xs font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="text-slate-300 font-semibold text-sm">{item.title}</h4>
                    <p className="text-slate-400 text-xs font-sans-sc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Han Achievements */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-600/30">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-5 h-5 text-amber-400" />
              <h3 className="font-calligraphy text-xl text-amber-300">汉朝辉煌成就</h3>
            </div>
            <div className="space-y-3">
              {hanAchievements.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-amber-950/30 hover:bg-amber-900/30 transition-colors">
                  <span className="w-6 h-6 rounded-full bg-amber-600/30 flex items-center justify-center text-amber-400 text-xs font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="text-amber-200 font-semibold text-sm">{item.title}</h4>
                    <p className="text-amber-300/70 text-xs font-sans-sc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Historical significance */}
        <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-amber-900/30 to-yellow-900/30 border border-amber-500/30">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-600/30 flex items-center justify-center flex-shrink-0 mt-1">
              <BookOpen className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <h4 className="text-amber-300 font-sans-sc font-semibold mb-2">历史意义</h4>
              <p className="text-amber-200/70 font-serif-sc text-sm leading-relaxed">
                秦汉时期是中国历史上第一个大一统帝国时代，奠定了中华文明的基本格局。秦朝创立的中央集权制度、郡县制、统一文字度量衡等措施，
                为后世两千多年的政治制度奠定了基础。汉朝在此基础上进一步发展，独尊儒术确立了儒家思想的正统地位，
                丝绸之路的开通促进了东西方文化交流，汉族作为主体民族在这一时期形成，"汉"成为中华民族的重要标识。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QinHanEra;
