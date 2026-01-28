import { useState } from 'react';
import { Crown, Scroll, Globe, BookOpen, Palette, Scale, Users } from 'lucide-react';

const suiTangDynasties = [
  {
    name: '隋朝',
    period: '581-618年',
    duration: '37年',
    capital: '大兴（西安）',
    founder: '隋文帝杨坚',
    achievements: [
      '结束近400年分裂，统一全国',
      '创立三省六部制',
      '开创科举制（进士科）',
      '修建大运河',
      '颁布《开皇律》',
    ],
    color: 'from-emerald-700 to-emerald-600',
  },
  {
    name: '唐朝',
    period: '618-907年',
    duration: '289年',
    capital: '长安（西安）',
    founder: '唐高祖李渊',
    goldenAges: ['贞观之治', '开元盛世'],
    achievements: [
      '完善三省六部制和科举制',
      '疆域空前辽阔',
      '诗歌艺术巅峰',
      '对外开放，丝绸之路繁荣',
      '佛教中国化完成',
    ],
    color: 'from-amber-700 to-amber-600',
  },
];

const tangEmperors = [
  { name: '唐高祖', reign: '618-626年', era: '武德', note: '建立唐朝' },
  { name: '唐太宗', reign: '626-649年', era: '贞观', note: '贞观之治，天可汗' },
  { name: '唐高宗', reign: '649-683年', era: '永徽等', note: '永徽之治，武则天辅政' },
  { name: '武则天', reign: '690-705年', era: '周', note: '中国唯一女皇帝' },
  { name: '唐玄宗', reign: '712-756年', era: '开元、天宝', note: '开元盛世，安史之乱' },
];

const tangCulture = [
  { category: '诗歌', figures: ['李白', '杜甫', '白居易', '王维'], desc: '唐诗是中国古典诗歌的巅峰' },
  { category: '书法', figures: ['颜真卿', '柳公权', '欧阳询', '张旭'], desc: '楷书四大家占其三，草书亦有发展' },
  { category: '绘画', figures: ['吴道子', '阎立本', '张萱', '周昉'], desc: '人物画、山水画高度发展' },
  { category: '科技', figures: ['僧一行', '孙思邈'], desc: '天文学、医学成就卓著' },
];

const SuiTangEra = () => {
  const [selectedDynasty, setSelectedDynasty] = useState(0);

  return (
    <section id="suitang-era" className="relative min-h-screen py-20 bg-gradient-to-b from-[#1a1a3e] via-[#2d2d5a] to-[#1a1a3e] overflow-hidden">
      {/* Golden pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffd700' fill-opacity='0.4'%3E%3Ccircle cx='40' cy='40' r='20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-800/30 rounded-full mb-6">
            <Crown className="w-4 h-4 text-amber-500" />
            <span className="text-amber-400 font-sans-sc text-sm">第二次大一统 · 盛世华章</span>
          </div>
          <h2 className="font-calligraphy text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 mb-4">
            隋唐盛世
          </h2>
          <p className="font-serif-sc text-lg text-amber-300/70 max-w-2xl mx-auto">
            中华文明的全盛时代，诗歌、艺术、制度皆达巅峰
          </p>
          <div className="mt-4 inline-block px-4 py-2 bg-amber-700/30 border border-amber-500/40 rounded-lg">
            <span className="text-amber-400/80 font-sans-sc text-sm">时间跨度：581年 - 907年</span>
          </div>
        </div>

        {/* Dynasty Selector */}
        <div className="flex justify-center gap-4 mb-12">
          {suiTangDynasties.map((dynasty, index) => (
            <button
              key={dynasty.name}
              onClick={() => setSelectedDynasty(index)}
              className={`relative px-8 py-4 rounded-xl font-sans-sc transition-all duration-300 ${
                selectedDynasty === index
                  ? 'bg-gradient-to-r ' + dynasty.color + ' text-white shadow-lg'
                  : 'bg-indigo-900/40 text-indigo-300 hover:bg-indigo-800/40'
              }`}
            >
              <div className="font-calligraphy text-2xl">{dynasty.name}</div>
              <div className="text-xs opacity-80">{dynasty.period}</div>
            </button>
          ))}
        </div>

        {/* Dynasty Detail */}
        <div className="mb-12 animate-slide-in">
          {suiTangDynasties.map((dynasty, index) => (
            selectedDynasty === index && (
              <div key={dynasty.name} className="grid lg:grid-cols-2 gap-8">
                {/* Left: Basic Info */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-amber-600/30">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${dynasty.color} flex items-center justify-center`}>
                      <Crown className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-calligraphy text-4xl text-amber-200">{dynasty.name}</h3>
                      <p className="text-amber-400/70 font-sans-sc">{dynasty.period}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-lg bg-indigo-950/50">
                      <p className="text-indigo-300 text-sm font-sans-sc mb-1">存续时间</p>
                      <p className="text-amber-300 font-semibold">{dynasty.duration}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-indigo-950/50">
                      <p className="text-indigo-300 text-sm font-sans-sc mb-1">都城</p>
                      <p className="text-amber-300 font-semibold">{dynasty.capital}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-indigo-950/50 mb-4">
                    <p className="text-indigo-300 text-sm font-sans-sc mb-1">建立者</p>
                    <p className="text-amber-300 font-semibold">{dynasty.founder}</p>
                  </div>

                  {'goldenAges' in dynasty && dynasty.goldenAges && (
                    <div className="p-4 rounded-lg bg-indigo-950/50">
                      <p className="text-indigo-300 text-sm font-sans-sc mb-2">盛世</p>
                      <div className="flex gap-2">
                        {dynasty.goldenAges.map((age) => (
                          <span key={age} className="px-3 py-1 bg-amber-600/30 rounded-full text-amber-300 text-sm">
                            {age}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right: Achievements */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-amber-600/20">
                  <h4 className="font-calligraphy text-2xl text-amber-300 mb-6 flex items-center gap-2">
                    <Scale className="w-5 h-5" />
                    主要成就
                  </h4>
                  <div className="space-y-4">
                    {dynasty.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${dynasty.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <span className="text-white text-xs font-bold">{i + 1}</span>
                        </div>
                        <p className="text-indigo-200 font-serif-sc">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Tang Specific Content */}
        {selectedDynasty === 1 && (
          <div className="space-y-8">
            {/* Tang Emperors */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-amber-600/20">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-5 h-5 text-amber-400" />
                <h3 className="font-calligraphy text-2xl text-amber-300">唐朝主要皇帝</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tangEmperors.map((emperor, index) => (
                  <div key={emperor.name} className="p-4 rounded-lg bg-indigo-950/50 border border-indigo-600/30">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 rounded-full bg-amber-600/30 flex items-center justify-center text-amber-400 font-bold">
                        {index + 1}
                      </span>
                      <h4 className="font-calligraphy text-xl text-amber-200">{emperor.name}</h4>
                    </div>
                    <p className="text-indigo-300/70 text-sm font-sans-sc">{emperor.reign} · {emperor.era}</p>
                    <p className="text-amber-300/70 text-sm font-sans-sc mt-1">{emperor.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tang Culture */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-600/30">
              <div className="flex items-center gap-3 mb-6">
                <Palette className="w-5 h-5 text-amber-400" />
                <h3 className="font-calligraphy text-2xl text-amber-300">盛唐文化</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {tangCulture.map((item) => (
                  <div key={item.category} className="p-4 rounded-lg bg-amber-950/30 border border-amber-600/20">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-4 h-4 text-amber-400" />
                      <h4 className="font-calligraphy text-xl text-amber-200">{item.category}</h4>
                    </div>
                    <p className="text-amber-300/70 text-sm font-sans-sc mb-2">{item.desc}</p>
                    <div className="flex flex-wrap gap-1">
                      {item.figures.map((figure) => (
                        <span key={figure} className="px-2 py-0.5 bg-amber-700/30 rounded text-amber-300 text-xs">
                          {figure}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Sui Specific - Grand Canal */}
        {selectedDynasty === 0 && (
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border border-emerald-600/30">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-5 h-5 text-emerald-400" />
              <h3 className="font-calligraphy text-2xl text-emerald-300">大运河</h3>
            </div>
            <p className="text-emerald-200/70 font-serif-sc leading-relaxed">
              隋炀帝大业元年至六年（605-610年），开凿贯通南北的大运河，以洛阳为中心，北达涿郡（北京），南至余杭（杭州），
              全长2700多公里，沟通海河、黄河、淮河、长江、钱塘江五大水系，成为南北交通大动脉，对后世经济发展产生深远影响。
            </p>
          </div>
        )}

        {/* Historical significance */}
        <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-amber-900/30 to-yellow-900/30 border border-amber-500/30">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-600/30 flex items-center justify-center flex-shrink-0 mt-1">
              <Scroll className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <h4 className="text-amber-300 font-sans-sc font-semibold mb-2">历史意义</h4>
              <p className="text-amber-200/70 font-serif-sc text-sm leading-relaxed">
                隋唐时期是中国封建社会的全盛时期。隋朝虽然短暂，但创立的三省六部制、科举制、大运河等制度设施为唐朝的繁荣奠定了基础。
                唐朝是中国历史上最开放、最包容的朝代，长安成为国际性大都市，丝绸之路达到鼎盛。
                唐诗、书法、绘画等艺术成就达到巅峰，对周边国家产生深远影响，形成"中华文化圈"。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuiTangEra;
