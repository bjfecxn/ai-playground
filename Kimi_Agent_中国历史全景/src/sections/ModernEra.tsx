import { useState } from 'react';
import { Flag, Building2, Globe, Flame, BookOpen, Star, Sun } from 'lucide-react';

const periods = [
  {
    name: '晚清',
    period: '1840-1912年',
    duration: '72年',
    feature: '半殖民地半封建社会形成，民族危机深重',
    events: ['鸦片战争', '太平天国', '洋务运动', '甲午战争', '戊戌变法', '辛亥革命'],
    color: 'from-red-800 to-red-700',
  },
  {
    name: '中华民国',
    period: '1912-1949年',
    duration: '37年',
    feature: '民主共和尝试，军阀混战，抗日战争，解放战争',
    events: ['北洋政府', '国民革命', '南京国民政府', '抗日战争', '国共内战'],
    color: 'from-blue-800 to-blue-700',
  },
  {
    name: '中华人民共和国',
    period: '1949年至今',
    feature: '社会主义建设，改革开放，现代化强国建设',
    events: ['建国初期', '社会主义改造', '改革开放', '新时代'],
    color: 'from-yellow-700 to-red-700',
  },
];

const lateQingEvents = [
  { year: '1840-1842', event: '鸦片战争', impact: '《南京条约》，中国开始沦为半殖民地' },
  { year: '1851-1864', event: '太平天国运动', impact: '大规模农民起义，动摇清朝统治' },
  { year: '1860s-1890s', event: '洋务运动', impact: '自强求富，近代工业起步' },
  { year: '1894-1895', event: '甲午战争', impact: '《马关条约》，民族危机加深' },
  { year: '1898', event: '戊戌变法', impact: '百日维新，改革失败' },
  { year: '1900', event: '义和团运动', impact: '反帝爱国运动，八国联军侵华' },
  { year: '1911', event: '辛亥革命', impact: '推翻清朝，建立民国' },
];

const republicPeriods = [
  { name: '南京临时政府', period: '1912年1-3月', leader: '孙中山', feature: '民主共和开端' },
  { name: '北洋军阀时期', period: '1912-1928年', leader: '袁世凯及后继', feature: '军阀割据，政局动荡' },
  { name: '南京国民政府', period: '1927-1949年', leader: '蒋介石', feature: '形式上统一，抗战内战' },
];

const prcPeriods = [
  { name: '国民经济恢复', period: '1949-1952年', feature: '战后恢复，土地改革' },
  { name: '社会主义改造', period: '1953-1956年', feature: '三大改造，社会主义制度确立' },
  { name: '十年探索', period: '1956-1966年', feature: '社会主义建设道路探索' },
  { name: '文化大革命', period: '1966-1976年', feature: '十年动乱' },
  { name: '改革开放', period: '1978年至今', feature: '社会主义现代化建设新时期' },
  { name: '新时代', period: '2012年至今', feature: '中国特色社会主义新时代' },
];

const majorAchievements = [
  { year: '1964年', event: '第一颗原子弹爆炸成功', category: '科技' },
  { year: '1970年', event: '第一颗人造卫星发射成功', category: '科技' },
  { year: '1978年', event: '改革开放开始', category: '经济' },
  { year: '2001年', event: '加入世界贸易组织', category: '经济' },
  { year: '2008年', event: '北京奥运会', category: '体育' },
  { year: '2012年', event: '党的十八大', category: '政治' },
  { year: '2020年', event: '全面建成小康社会', category: '社会' },
];

const ModernEra = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(0);

  return (
    <section id="modern-era" className="relative min-h-screen py-20 bg-gradient-to-b from-[#0f0f23] via-[#1a1a3e] to-[#0f0f23] overflow-hidden">
      {/* Modern pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc143c' fill-opacity='0.4'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-900/30 rounded-full mb-6">
            <Flag className="w-4 h-4 text-red-500" />
            <span className="text-red-400 font-sans-sc text-sm">近现代 · 从屈辱到复兴</span>
          </div>
          <h2 className="font-calligraphy text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-400 to-red-500 mb-4">
            近现代中国
          </h2>
          <p className="font-serif-sc text-lg text-red-300/70 max-w-2xl mx-auto">
            从半殖民地半封建社会到社会主义现代化强国，中华民族的伟大复兴之路
          </p>
          <div className="mt-4 inline-block px-4 py-2 bg-red-800/30 border border-red-500/40 rounded-lg">
            <span className="text-red-400/80 font-sans-sc text-sm">时间跨度：1840年至今</span>
          </div>
        </div>

        {/* Period Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {periods.map((period, index) => (
            <button
              key={period.name}
              onClick={() => setSelectedPeriod(index)}
              className={`relative px-6 py-4 rounded-xl font-sans-sc transition-all duration-300 ${
                selectedPeriod === index
                  ? 'bg-gradient-to-r ' + period.color + ' text-white shadow-lg'
                  : 'bg-stone-800/60 text-stone-400 hover:bg-stone-700/60'
              }`}
            >
              <div className="font-calligraphy text-2xl">{period.name}</div>
              <div className="text-xs opacity-80">{period.period}</div>
            </button>
          ))}
        </div>

        {/* Period Detail */}
        <div className="mb-12 animate-slide-in">
          {periods.map((period, index) => (
            selectedPeriod === index && (
              <div key={period.name}>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-stone-800/60 to-stone-900/60 border border-red-600/30 mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${period.color} flex items-center justify-center`}>
                      {index === 0 ? <Flame className="w-8 h-8 text-white" /> : 
                       index === 1 ? <Building2 className="w-8 h-8 text-white" /> : 
                       <Star className="w-8 h-8 text-white" />}
                    </div>
                    <div>
                      <h3 className="font-calligraphy text-4xl text-red-200">{period.name}</h3>
                      <p className="text-red-400/70 font-sans-sc">{period.period}</p>
                    </div>
                  </div>

                  <p className="text-stone-300 font-serif-sc text-lg leading-relaxed mb-6">
                    {period.feature}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {period.events.map((event) => (
                      <span key={event} className="px-3 py-2 bg-red-700/30 rounded-lg text-red-300 text-sm font-sans-sc">
                        {event}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Period Specific Content */}
                {index === 0 && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {lateQingEvents.map((item, i) => (
                      <div key={i} className="p-4 rounded-xl bg-gradient-to-br from-red-900/30 to-stone-900/30 border border-red-600/20">
                        <span className="px-2 py-1 bg-red-700/30 rounded text-red-300 text-xs font-sans-sc">
                          {item.year}
                        </span>
                        <h4 className="text-red-200 font-semibold mt-2 mb-1">{item.event}</h4>
                        <p className="text-red-300/70 text-xs font-sans-sc">{item.impact}</p>
                      </div>
                    ))}
                  </div>
                )}

                {index === 1 && (
                  <div className="space-y-4">
                    {republicPeriods.map((item, i) => (
                      <div key={i} className="p-4 rounded-xl bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border border-blue-600/20">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          <div className="md:w-1/4">
                            <h4 className="text-blue-200 font-calligraphy text-xl">{item.name}</h4>
                            <p className="text-blue-400/70 text-sm font-sans-sc">{item.period}</p>
                          </div>
                          <div className="md:w-1/4">
                            <p className="text-blue-300/70 text-sm font-sans-sc">
                              <span className="text-blue-400/60">领导人：</span>{item.leader}
                            </p>
                          </div>
                          <div className="md:w-1/2">
                            <p className="text-blue-200/80 text-sm font-sans-sc">{item.feature}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {index === 2 && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {prcPeriods.map((item, i) => (
                        <div key={i} className="p-4 rounded-xl bg-gradient-to-br from-red-900/30 to-yellow-900/30 border border-red-600/20">
                          <h4 className="text-red-200 font-calligraphy text-lg mb-1">{item.name}</h4>
                          <p className="text-red-400/70 text-sm font-sans-sc mb-2">{item.period}</p>
                          <p className="text-red-300/80 text-sm font-sans-sc">{item.feature}</p>
                        </div>
                      ))}
                    </div>

                    <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-900/30 to-red-900/30 border border-yellow-600/30">
                      <div className="flex items-center gap-3 mb-4">
                        <Sun className="w-5 h-5 text-yellow-400" />
                        <h3 className="font-calligraphy text-2xl text-yellow-300">重大成就</h3>
                      </div>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                        {majorAchievements.map((item, i) => (
                          <div key={i} className="p-3 rounded-lg bg-yellow-950/30 border border-yellow-600/20">
                            <span className="px-2 py-1 bg-yellow-700/30 rounded text-yellow-300 text-xs font-sans-sc">
                              {item.year}
                            </span>
                            <p className="text-yellow-200 text-sm font-sans-sc mt-2">{item.event}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          ))}
        </div>

        {/* Historical Summary */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-red-900/30 via-yellow-900/30 to-red-900/30 border border-red-500/30">
          <div className="flex items-center gap-4 mb-6">
            <Globe className="w-8 h-8 text-red-400" />
            <h3 className="font-calligraphy text-3xl text-red-300">历史总结</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl bg-red-950/30 border border-red-600/20">
              <h4 className="text-red-300 font-semibold mb-2 flex items-center gap-2">
                <Flame className="w-4 h-4" />
                屈辱与抗争
              </h4>
              <p className="text-red-200/70 text-sm font-sans-sc">
                1840年鸦片战争后，中国逐步沦为半殖民地半封建社会。中国人民进行了不屈不挠的抗争，
                从太平天国到义和团，从戊戌变法到辛亥革命。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-600/20">
              <h4 className="text-blue-300 font-semibold mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                探索与奋斗
              </h4>
              <p className="text-blue-200/70 text-sm font-sans-sc">
                中华民国时期，中国人民继续探索救国救民的道路。抗日战争取得胜利，
                成为中华民族由衰败走向振兴的转折点。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-yellow-950/30 border border-yellow-600/20">
              <h4 className="text-yellow-300 font-semibold mb-2 flex items-center gap-2">
                <Star className="w-4 h-4" />
                复兴与崛起
              </h4>
              <p className="text-yellow-200/70 text-sm font-sans-sc">
                1949年新中国成立，中国人民站起来了。改革开放以来，中国经济发展取得举世瞩目成就，
                正在实现中华民族伟大复兴的中国梦。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernEra;
