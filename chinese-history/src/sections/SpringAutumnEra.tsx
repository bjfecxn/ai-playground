import { useState } from 'react';
import { Scroll, Sword, Crown, Map, BookOpen, Users } from 'lucide-react';

const periods = [
  {
    name: '春秋',
    period: '前770-前476年',
    duration: '294年',
    feature: '诸侯争霸，礼崩乐坏',
    hegemons: ['齐桓公', '晋文公', '楚庄王', '吴王阖闾', '越王勾践'],
    description: '周王室衰微，诸侯争霸。齐桓公首霸，提出"尊王攘夷"；晋楚争霸持续百年；吴越争霸于东南。',
    icon: Crown,
  },
  {
    name: '战国',
    period: '前475-前221年',
    duration: '254年',
    feature: '七雄并立，兼并战争',
    states: ['齐', '楚', '燕', '韩', '赵', '魏', '秦'],
    description: '三家分晋标志战国开始。各国变法图强：魏国李悝变法、楚国吴起变法、秦国商鞅变法最为彻底。',
    icon: Sword,
  },
];

const springAutumnStates = [
  { name: '齐国', founder: '姜太公', capital: '临淄', feature: '渔盐之利，首霸中原' },
  { name: '晋国', founder: '周成王弟叔虞', capital: '绛', feature: '城濮之战霸业，后三家分晋' },
  { name: '楚国', founder: '熊绎', capital: '郢', feature: '南方大国，问鼎中原' },
  { name: '秦国', founder: '秦非子', capital: '雍→咸阳', feature: '西陲崛起，穆公西霸' },
  { name: '鲁国', founder: '周公旦', capital: '曲阜', feature: '周公之后，礼乐之邦' },
  { name: '宋国', founder: '商纣王兄微子启', capital: '商丘', feature: '商朝遗民，春秋五霸之一' },
  { name: '郑国', founder: '周宣王弟友', capital: '新郑', feature: '庄公小霸，子产改革' },
  { name: '吴国', founder: '太伯', capital: '姑苏', feature: '东南崛起，阖闾伐楚' },
  { name: '越国', founder: '无余', capital: '会稽', feature: '卧薪尝胆，勾践灭吴' },
];

const warringStatesInfo = [
  { name: '齐', capital: '临淄', reform: '邹忌改革', feature: '稷下学宫，文化繁荣' },
  { name: '楚', capital: '郢', reform: '吴起变法', feature: '疆域最大，文化独特' },
  { name: '燕', capital: '蓟', reform: '昭王求贤', feature: '北方强国，乐毅伐齐' },
  { name: '韩', capital: '新郑', reform: '申不害变法', feature: '法家起源，劲韩之称' },
  { name: '赵', capital: '邯郸', reform: '胡服骑射', feature: '骑兵强国，长平之战' },
  { name: '魏', capital: '大梁', reform: '李悝变法', feature: '首霸战国，西门豹治邺' },
  { name: '秦', capital: '咸阳', reform: '商鞅变法', feature: '变法最彻底，统一六国' },
];

const hundredSchools = [
  { school: '儒家', founder: '孔子', core: '仁、礼', works: '《论语》' },
  { school: '道家', founder: '老子', core: '道法自然', works: '《道德经》' },
  { school: '墨家', founder: '墨子', core: '兼爱、非攻', works: '《墨子》' },
  { school: '法家', founder: '韩非子', core: '法治', works: '《韩非子》' },
  { school: '兵家', founder: '孙武', core: '兵者诡道', works: '《孙子兵法》' },
  { school: '名家', founder: '公孙龙', core: '名实之辩', works: '《公孙龙子》' },
];

const SpringAutumnEra = () => {
  const [activePeriod, setActivePeriod] = useState<'spring' | 'warring'>('spring');

  return (
    <section id="spring-autumn-era" className="relative min-h-screen py-20 bg-gradient-to-b from-[#3d3d3d] via-[#5a5a5a] to-[#3d3d3d] overflow-hidden">
      {/* Bamboo texture overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(139, 69, 19, 0.1) 20px, rgba(139, 69, 19, 0.1) 22px)`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-700/50 rounded-full mb-6">
            <Scroll className="w-4 h-4 text-stone-400" />
            <span className="text-stone-300 font-sans-sc text-sm">东周时期 · 礼崩乐坏 · 百家争鸣</span>
          </div>
          <h2 className="font-calligraphy text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-stone-300 via-amber-200 to-stone-300 mb-4">
            春秋战国
          </h2>
          <p className="font-serif-sc text-lg text-stone-400/80 max-w-2xl mx-auto">
            从诸侯争霸到七雄兼并，从礼乐文明到百家争鸣的思想黄金时代
          </p>
          <div className="mt-4 inline-block px-4 py-2 bg-stone-700/40 border border-stone-500/40 rounded-lg">
            <span className="text-stone-400/80 font-sans-sc text-sm">时间跨度：前770年 - 前221年</span>
          </div>
        </div>

        {/* Period Toggle */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActivePeriod('spring')}
            className={`flex items-center gap-3 px-8 py-4 rounded-xl font-sans-sc transition-all duration-300 ${
              activePeriod === 'spring'
                ? 'bg-gradient-to-r from-amber-700 to-amber-600 text-amber-100 shadow-lg'
                : 'bg-stone-800/60 text-stone-400 hover:bg-stone-700/60'
            }`}
          >
            <Crown className="w-5 h-5" />
            <div className="text-left">
              <div className="font-semibold">春秋时期</div>
              <div className="text-xs opacity-70">前770-前476年</div>
            </div>
          </button>
          <button
            onClick={() => setActivePeriod('warring')}
            className={`flex items-center gap-3 px-8 py-4 rounded-xl font-sans-sc transition-all duration-300 ${
              activePeriod === 'warring'
                ? 'bg-gradient-to-r from-red-800 to-red-700 text-red-100 shadow-lg'
                : 'bg-stone-800/60 text-stone-400 hover:bg-stone-700/60'
            }`}
          >
            <Sword className="w-5 h-5" />
            <div className="text-left">
              <div className="font-semibold">战国时期</div>
              <div className="text-xs opacity-70">前475-前221年</div>
            </div>
          </button>
        </div>

        {/* Content */}
        <div className="animate-slide-in">
          {activePeriod === 'spring' && (
            <div className="space-y-8">
              {/* Spring Overview */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-stone-800/60 to-stone-900/60 border border-amber-600/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-600 to-yellow-600 flex items-center justify-center">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-calligraphy text-3xl text-amber-200">春秋时期</h3>
                    <p className="text-amber-400/70 font-sans-sc">诸侯争霸 · 礼崩乐坏</p>
                  </div>
                </div>
                <p className="text-stone-300 font-serif-sc leading-relaxed mb-6">
                  周平王东迁洛邑，周王室衰微。诸侯不再听从天子号令，开始争夺霸主地位。
                  齐桓公首倡"尊王攘夷"，晋楚争霸持续百年，吴越在东南崛起。
                  这一时期，礼乐制度逐渐崩坏，但文化思想开始繁荣，为后来的百家争鸣奠定基础。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-amber-700/30 rounded-full text-amber-300 text-sm">春秋五霸</span>
                  {periods[0]?.hegemons?.map((hegemon) => (
                    <span key={hegemon} className="px-3 py-1 bg-stone-700/50 rounded-full text-stone-300 text-sm">
                      {hegemon}
                    </span>
                  ))}
                </div>
              </div>

              {/* States Grid */}
              <div>
                <h4 className="font-calligraphy text-2xl text-stone-300 mb-4 flex items-center gap-2">
                  <Map className="w-5 h-5" />
                  主要诸侯国
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {springAutumnStates.map((state) => (
                    <div
                      key={state.name}
                      className="p-4 rounded-lg bg-stone-800/50 border border-stone-600/30 hover:border-amber-500/40 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 rounded-full bg-amber-600/30 flex items-center justify-center text-amber-400 font-bold">
                          {state.name[0]}
                        </span>
                        <h5 className="font-calligraphy text-xl text-amber-200">{state.name}</h5>
                      </div>
                      <p className="text-stone-400 text-sm font-sans-sc mb-1">开国：{state.founder}</p>
                      <p className="text-stone-400 text-sm font-sans-sc mb-1">都城：{state.capital}</p>
                      <p className="text-amber-300/70 text-sm font-sans-sc">{state.feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activePeriod === 'warring' && (
            <div className="space-y-8">
              {/* Warring Overview */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-stone-800/60 to-stone-900/60 border border-red-600/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-700 to-red-600 flex items-center justify-center">
                    <Sword className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-calligraphy text-3xl text-red-200">战国时期</h3>
                    <p className="text-red-400/70 font-sans-sc">七雄并立 · 变法图强</p>
                  </div>
                </div>
                <p className="text-stone-300 font-serif-sc leading-relaxed mb-6">
                  韩赵魏三家分晋，战国时代开始。各国为求生存发展，纷纷进行变法改革。
                  魏国李悝变法首开端倪，楚国吴起变法，秦国商鞅变法最为彻底。
                  兼并战争更加激烈，最终秦国统一六国，建立中央集权帝国。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-700/30 rounded-full text-red-300 text-sm">战国七雄</span>
                  {periods[1]?.states?.map((state) => (
                    <span key={state} className="px-3 py-1 bg-stone-700/50 rounded-full text-stone-300 text-sm">
                      {state}国
                    </span>
                  ))}
                </div>
              </div>

              {/* Seven States */}
              <div>
                <h4 className="font-calligraphy text-2xl text-stone-300 mb-4 flex items-center gap-2">
                  <Map className="w-5 h-5" />
                  战国七雄
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {warringStatesInfo.map((state) => (
                    <div
                      key={state.name}
                      className="p-4 rounded-lg bg-stone-800/50 border border-stone-600/30 hover:border-red-500/40 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 rounded-full bg-red-600/30 flex items-center justify-center text-red-400 font-bold">
                          {state.name}
                        </span>
                        <h5 className="font-calligraphy text-xl text-red-200">{state.name}国</h5>
                      </div>
                      <p className="text-stone-400 text-sm font-sans-sc mb-1">都城：{state.capital}</p>
                      <p className="text-stone-400 text-sm font-sans-sc mb-1">变法：{state.reform}</p>
                      <p className="text-red-300/70 text-sm font-sans-sc">{state.feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Hundred Schools of Thought */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/30">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-indigo-400" />
            <h3 className="font-calligraphy text-2xl text-indigo-200">百家争鸣</h3>
          </div>
          <p className="text-indigo-200/70 font-serif-sc mb-6">
            春秋战国时期是中国思想史上最辉煌的时代，诸子百家争鸣，奠定了中华文化的思想基础。
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hundredSchools.map((school) => (
              <div
                key={school.school}
                className="p-4 rounded-lg bg-indigo-950/50 border border-indigo-500/20 hover:border-indigo-400/40 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-indigo-400" />
                  <h4 className="font-calligraphy text-xl text-indigo-200">{school.school}</h4>
                </div>
                <p className="text-indigo-300/70 text-sm font-sans-sc mb-1">创始人：{school.founder}</p>
                <p className="text-indigo-300/70 text-sm font-sans-sc mb-1">核心思想：{school.core}</p>
                <p className="text-indigo-400/60 text-xs font-sans-sc">代表著作：{school.works}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpringAutumnEra;
