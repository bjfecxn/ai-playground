import { useState } from 'react';
import { Crown, Map, BookOpen, Scale, Flame, Scroll } from 'lucide-react';

const regimes = [
  {
    name: '北宋',
    period: '960-1127年',
    duration: '167年',
    capital: '开封',
    founder: '宋太祖赵匡胤',
    feature: '重文轻武，经济文化繁荣，与辽西夏并立',
    events: ['陈桥兵变', '杯酒释兵权', '澶渊之盟', '王安石变法'],
    color: 'from-blue-700 to-blue-600',
  },
  {
    name: '南宋',
    period: '1127-1279年',
    duration: '152年',
    capital: '临安（杭州）',
    founder: '宋高宗赵构',
    feature: '偏安江南，与金西夏并立，最终被蒙古所灭',
    events: ['靖康之变', '岳飞抗金', '绍兴和议', '崖山海战'],
    color: 'from-cyan-700 to-cyan-600',
  },
  {
    name: '辽',
    period: '916-1125年',
    duration: '209年',
    capital: '上京（内蒙古）',
    founder: '耶律阿保机',
    feature: '契丹族建立，与北宋对峙，后被金所灭',
    events: ['契丹建国', '澶渊之盟', '辽金战争'],
    color: 'from-purple-700 to-purple-600',
  },
  {
    name: '西夏',
    period: '1038-1227年',
    duration: '189年',
    capital: '兴庆（银川）',
    founder: '李元昊',
    feature: '党项族建立，周旋于宋辽金之间',
    events: ['元昊建国', '好水川之战', '蒙古灭夏'],
    color: 'from-emerald-700 to-emerald-600',
  },
  {
    name: '金',
    period: '1115-1234年',
    duration: '119年',
    capital: '会宁→中都（北京）',
    founder: '完颜阿骨打',
    feature: '女真族建立，灭辽灭北宋，后被蒙古所灭',
    events: ['女真崛起', '灭辽', '灭北宋', '靖康之变'],
    color: 'from-yellow-700 to-yellow-600',
  },
];

const songAchievements = [
  { title: '经济繁荣', desc: '商品经济发达，纸币（交子）出现，海上贸易兴盛' },
  { title: '科技高峰', desc: '活字印刷、指南针、火药武器广泛应用' },
  { title: '文化昌盛', desc: '理学兴起，宋词繁荣，书画艺术高度发展' },
  { title: '城市发达', desc: '开封、杭州人口百万，市民文化兴起' },
];

const importantEvents = [
  { year: '1005年', event: '澶渊之盟', desc: '宋辽和议，维持百年和平' },
  { year: '1044年', event: '宋夏和议', desc: '西夏向宋称臣，宋给岁币' },
  { year: '1069年', event: '王安石变法', desc: '富国强兵改革，最终失败' },
  { year: '1125年', event: '金灭辽', desc: '女真崛起，辽朝灭亡' },
  { year: '1127年', event: '靖康之变', desc: '金灭北宋，徽钦二帝被俘' },
  { year: '1141年', event: '绍兴和议', desc: '宋金议和，岳飞被害' },
  { year: '1227年', event: '蒙古灭夏', desc: '西夏灭亡' },
  { year: '1234年', event: '蒙古灭金', desc: '金朝灭亡' },
  { year: '1279年', event: '崖山海战', desc: '南宋灭亡，元朝统一' },
];

const SongLiaoJinEra = () => {
  const [selectedRegime, setSelectedRegime] = useState(0);

  return (
    <section id="songliaojin-era" className="relative min-h-screen py-20 bg-gradient-to-b from-[#2f4f4f] via-[#3d6363] to-[#2f4f4f] overflow-hidden">
      {/* Multi-regime pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234682b4' fill-opacity='0.4'%3E%3Cpath d='M30 0L60 30L30 60L0 30L30 0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-800/30 rounded-full mb-6">
            <Map className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 font-sans-sc text-sm">多政权并立 · 经济文化高峰</span>
          </div>
          <h2 className="font-calligraphy text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-400 mb-4">
            宋辽金夏
          </h2>
          <p className="font-serif-sc text-lg text-cyan-300/70 max-w-2xl mx-auto">
            多政权并立竞争，经济文化达到封建社会新高峰
          </p>
          <div className="mt-4 inline-block px-4 py-2 bg-cyan-700/30 border border-cyan-500/40 rounded-lg">
            <span className="text-cyan-400/80 font-sans-sc text-sm">时间跨度：916年 - 1279年</span>
          </div>
        </div>

        {/* Regime Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {regimes.map((regime, index) => (
            <button
              key={regime.name}
              onClick={() => setSelectedRegime(index)}
              className={`relative px-5 py-3 rounded-xl font-sans-sc transition-all duration-300 ${
                selectedRegime === index
                  ? 'bg-gradient-to-r ' + regime.color + ' text-white shadow-lg'
                  : 'bg-cyan-900/40 text-cyan-300 hover:bg-cyan-800/40'
              }`}
            >
              <div className="font-calligraphy text-xl">{regime.name}</div>
              <div className="text-xs opacity-80">{regime.period}</div>
            </button>
          ))}
        </div>

        {/* Regime Detail */}
        <div className="mb-12 animate-slide-in">
          {regimes.map((regime, index) => (
            selectedRegime === index && (
              <div key={regime.name} className="grid lg:grid-cols-3 gap-8">
                {/* Left: Basic Info */}
                <div className="lg:col-span-1">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-600/30">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${regime.color} flex items-center justify-center`}>
                        <Crown className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-calligraphy text-3xl text-cyan-200">{regime.name}</h3>
                        <p className="text-cyan-400/70 font-sans-sc text-sm">{regime.period}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-3 rounded-lg bg-cyan-950/50">
                        <p className="text-cyan-300 text-sm font-sans-sc mb-1">存续时间</p>
                        <p className="text-amber-300 font-semibold">{regime.duration}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-cyan-950/50">
                        <p className="text-cyan-300 text-sm font-sans-sc mb-1">都城</p>
                        <p className="text-amber-300 font-semibold">{regime.capital}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-cyan-950/50">
                        <p className="text-cyan-300 text-sm font-sans-sc mb-1">建立者</p>
                        <p className="text-amber-300 font-semibold">{regime.founder}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Features & Events */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-600/20">
                    <h4 className="font-calligraphy text-xl text-cyan-300 mb-4 flex items-center gap-2">
                      <Scale className="w-5 h-5" />
                      历史特征
                    </h4>
                    <p className="text-cyan-200/80 font-serif-sc leading-relaxed">{regime.feature}</p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-600/20">
                    <h4 className="font-calligraphy text-xl text-cyan-300 mb-4 flex items-center gap-2">
                      <Flame className="w-5 h-5" />
                      重大事件
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {regime.events.map((event) => (
                        <span key={event} className="px-3 py-2 bg-cyan-700/30 rounded-lg text-cyan-300 text-sm font-sans-sc">
                          {event}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Song Specific Content */}
        {selectedRegime < 2 && (
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-600/30">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-5 h-5 text-blue-400" />
                <h3 className="font-calligraphy text-xl text-blue-300">宋朝成就</h3>
              </div>
              <div className="space-y-3">
                {songAchievements.map((item, index) => (
                  <div key={index} className="p-3 rounded-lg bg-blue-950/30">
                    <h4 className="text-blue-200 font-semibold text-sm">{item.title}</h4>
                    <p className="text-blue-300/70 text-xs font-sans-sc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/30 to-teal-900/30 border border-cyan-600/30">
              <div className="flex items-center gap-3 mb-4">
                <Scroll className="w-5 h-5 text-cyan-400" />
                <h3 className="font-calligraphy text-xl text-cyan-300">重要事件年表</h3>
              </div>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {importantEvents.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-2 rounded-lg bg-cyan-950/30">
                    <span className="px-2 py-1 bg-cyan-700/30 rounded text-cyan-300 text-xs font-sans-sc flex-shrink-0">
                      {item.year}
                    </span>
                    <div>
                      <h4 className="text-cyan-200 font-semibold text-sm">{item.event}</h4>
                      <p className="text-cyan-300/70 text-xs font-sans-sc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Relationship Map */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30">
          <div className="flex items-center gap-3 mb-4">
            <Map className="w-6 h-6 text-cyan-400" />
            <h3 className="font-calligraphy text-2xl text-cyan-300">政权关系</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-blue-900/30 border border-blue-600/30">
              <h4 className="text-blue-300 font-semibold mb-2">北宋时期</h4>
              <p className="text-blue-200/70 text-sm font-sans-sc">
                北宋与辽、西夏三足鼎立。1005年澶渊之盟后，宋辽维持百年和平。
              </p>
            </div>
            <div className="p-4 rounded-lg bg-cyan-900/30 border border-cyan-600/30">
              <h4 className="text-cyan-300 font-semibold mb-2">金崛起</h4>
              <p className="text-cyan-200/70 text-sm font-sans-sc">
                1115年金建立，1125年灭辽，1127年灭北宋（靖康之变）。
              </p>
            </div>
            <div className="p-4 rounded-lg bg-purple-900/30 border border-purple-600/30">
              <h4 className="text-purple-300 font-semibold mb-2">南宋时期</h4>
              <p className="text-purple-200/70 text-sm font-sans-sc">
                南宋与金、西夏并立。1141年绍兴和议，宋金南北对峙。
              </p>
            </div>
            <div className="p-4 rounded-lg bg-emerald-900/30 border border-emerald-600/30">
              <h4 className="text-emerald-300 font-semibold mb-2">蒙古统一</h4>
              <p className="text-emerald-200/70 text-sm font-sans-sc">
                1227年灭西夏，1234年灭金，1279年灭南宋，元朝统一。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SongLiaoJinEra;
