import { useState } from 'react';
import { Bone, Mountain, Flame, Hammer, Wheat, Home } from 'lucide-react';

const paleolithicHumans = [
  {
    name: '元谋人',
    time: '约170万年前',
    location: '云南元谋',
    feature: '中国境内已知最早古人类',
    achievement: '使用打制石器',
    icon: Bone,
  },
  {
    name: '蓝田人',
    time: '约115-70万年前',
    location: '陕西蓝田',
    feature: '早期直立人',
    achievement: '使用简单石器',
    icon: Mountain,
  },
  {
    name: '北京人',
    time: '约70-20万年前',
    location: '北京周口店',
    feature: '晚期直立人',
    achievement: '使用天然火（人类演化里程碑）',
    icon: Flame,
  },
  {
    name: '山顶洞人',
    time: '约3万年前',
    location: '北京周口店',
    feature: '晚期智人',
    achievement: '掌握磨光和钻孔技术，人工取火',
    icon: Hammer,
  },
];

const neolithicCultures = [
  {
    name: '裴李岗-老官台文化',
    time: '约8000-7000年前',
    region: '黄河中游',
    feature: '最早的新石器文化，农业萌芽',
    icon: Wheat,
  },
  {
    name: '仰韶文化',
    time: '约7000-5000年前',
    region: '黄河中游',
    feature: '彩陶文化，母系氏族繁荣期',
    icon: Home,
  },
  {
    name: '河姆渡文化',
    time: '约7000-5000年前',
    region: '长江下游',
    feature: '稻作农业，干栏式建筑',
    icon: Wheat,
  },
  {
    name: '大汶口文化',
    time: '约6500-4500年前',
    region: '黄河下游',
    feature: '私有制萌芽，贫富分化',
    icon: Home,
  },
  {
    name: '龙山文化',
    time: '约5000-4000年前',
    region: '黄河流域',
    feature: '黑陶文化，父系氏族，城邦出现',
    icon: Hammer,
  },
  {
    name: '良渚文化',
    time: '约5300-4300年前',
    region: '长江下游',
    feature: '玉器文明，早期国家形态',
    icon: Mountain,
  },
];

const PrehistoricEra = () => {
  const [activePeriod, setActivePeriod] = useState<'paleolithic' | 'neolithic'>('paleolithic');

  return (
    <section id="prehistoric-era" className="relative min-h-screen py-20 bg-gradient-to-b from-[#3d2914] via-[#5c3d1e] to-[#3d2914] overflow-hidden">
      {/* Stone texture overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c17f59' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-700/30 rounded-full mb-6">
            <Bone className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 font-sans-sc text-sm">史前史 · 有考古实证，无文字记载</span>
          </div>
          <h2 className="font-calligraphy text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400 mb-4">
            史前史时代
          </h2>
          <p className="font-serif-sc text-lg text-amber-200/70 max-w-2xl mx-auto">
            从远古人类到文明曙光，考古实证揭示的百万年演化历程
          </p>
          <div className="mt-4 inline-block px-4 py-2 bg-amber-600/20 border border-amber-500/30 rounded-lg">
            <span className="text-amber-300/80 font-sans-sc text-sm">时间跨度：约170万年前 - 约4000年前</span>
          </div>
        </div>

        {/* Period Toggle */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActivePeriod('paleolithic')}
            className={`flex items-center gap-3 px-8 py-4 rounded-xl font-sans-sc transition-all duration-300 ${
              activePeriod === 'paleolithic'
                ? 'bg-gradient-to-r from-stone-600 to-stone-500 text-amber-100 shadow-lg shadow-stone-500/30'
                : 'bg-stone-800/50 text-stone-400 hover:bg-stone-700/50'
            }`}
          >
            <Bone className="w-5 h-5" />
            <div className="text-left">
              <div className="font-semibold">旧石器时代</div>
              <div className="text-xs opacity-70">打制石器</div>
            </div>
          </button>
          <button
            onClick={() => setActivePeriod('neolithic')}
            className={`flex items-center gap-3 px-8 py-4 rounded-xl font-sans-sc transition-all duration-300 ${
              activePeriod === 'neolithic'
                ? 'bg-gradient-to-r from-amber-700 to-amber-600 text-amber-100 shadow-lg shadow-amber-500/30'
                : 'bg-stone-800/50 text-stone-400 hover:bg-stone-700/50'
            }`}
          >
            <Hammer className="w-5 h-5" />
            <div className="text-left">
              <div className="font-semibold">新石器时代</div>
              <div className="text-xs opacity-70">磨制石器</div>
            </div>
          </button>
        </div>

        {/* Content */}
        <div className="animate-slide-in">
          {activePeriod === 'paleolithic' && (
            <div>
              <div className="text-center mb-8">
                <h3 className="font-calligraphy text-3xl text-amber-200 mb-2">旧石器时代</h3>
                <p className="text-amber-300/70 font-sans-sc">打制石器 · 采集狩猎 · 天然洞穴</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {paleolithicHumans.map((human, index) => (
                  <div
                    key={human.name}
                    className="group p-6 rounded-xl bg-gradient-to-br from-stone-800/60 to-stone-900/60 border border-stone-600/40 hover:border-amber-500/50 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-stone-500 to-stone-600 flex items-center justify-center flex-shrink-0">
                        <human.icon className="w-7 h-7 text-amber-200" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-calligraphy text-2xl text-amber-200">{human.name}</h4>
                          <span className="px-2 py-1 bg-stone-700/50 rounded text-stone-300 text-xs font-sans-sc">
                            {human.time}
                          </span>
                        </div>
                        <p className="text-stone-400 text-sm font-sans-sc mb-1">
                          <span className="text-amber-400/70">发现地点：</span>{human.location}
                        </p>
                        <p className="text-stone-400 text-sm font-sans-sc mb-1">
                          <span className="text-amber-400/70">人种特征：</span>{human.feature}
                        </p>
                        <p className="text-amber-300/80 text-sm font-sans-sc">
                          <span className="text-amber-400/70">主要成就：</span>{human.achievement}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activePeriod === 'neolithic' && (
            <div>
              <div className="text-center mb-8">
                <h3 className="font-calligraphy text-3xl text-amber-200 mb-2">新石器时代</h3>
                <p className="text-amber-300/70 font-sans-sc">磨制石器 · 农业畜牧 · 定居村落</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {neolithicCultures.map((culture, index) => (
                  <div
                    key={culture.name}
                    className="group p-5 rounded-xl bg-gradient-to-br from-amber-900/40 to-orange-900/40 border border-amber-600/30 hover:border-amber-400/50 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                        <culture.icon className="w-5 h-5 text-amber-100" />
                      </div>
                      <h4 className="font-calligraphy text-xl text-amber-200">{culture.name}</h4>
                    </div>
                    <div className="space-y-2">
                      <p className="text-amber-300/70 text-sm font-sans-sc">
                        <span className="text-amber-400/60">年代：</span>{culture.time}
                      </p>
                      <p className="text-amber-300/70 text-sm font-sans-sc">
                        <span className="text-amber-400/60">分布：</span>{culture.region}
                      </p>
                      <p className="text-amber-200/80 text-sm font-sans-sc">
                        <span className="text-amber-400/60">特征：</span>{culture.feature}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Key distinction note */}
        <div className="mt-12 p-6 rounded-xl bg-stone-800/50 border border-amber-500/30">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-600/30 flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-amber-400 text-lg">✓</span>
            </div>
            <div>
              <h4 className="text-amber-300 font-sans-sc font-semibold mb-2">历史性质说明</h4>
              <p className="text-amber-200/70 font-serif-sc text-sm leading-relaxed">
                <strong className="text-amber-300">史前史有考古实证</strong>（化石、器物、遗址），但<strong className="text-amber-300">无文字记载</strong>，属于"无文字历史"。
                这一时期通过考古学、人类学、地质学等多学科研究重建，是中国历史的物质文化基础。
                从旧石器时代的打制石器到新石器时代的磨制石器，标志着人类技术的重大进步；
                从采集狩猎到农业畜牧，标志着人类生产方式的革命性转变。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrehistoricEra;
