import { useState } from 'react';
import { Crown, Map, Swords, Building2, Flame, Scroll } from 'lucide-react';

const fiveDynasties = [
  {
    name: '后梁',
    period: '907-923年',
    duration: '16年',
    capital: '开封',
    founder: '朱温（朱全忠）',
    feature: '朱温篡唐建梁，五代开始',
    color: 'from-amber-700 to-amber-600',
  },
  {
    name: '后唐',
    period: '923-936年',
    duration: '13年',
    capital: '洛阳',
    founder: '李存勖',
    feature: '沙陀族建立，一度统一北方',
    color: 'from-red-700 to-red-600',
  },
  {
    name: '后晋',
    period: '936-947年',
    duration: '11年',
    capital: '开封',
    founder: '石敬瑭',
    feature: '割让燕云十六州予契丹',
    color: 'from-orange-700 to-orange-600',
  },
  {
    name: '后汉',
    period: '947-951年',
    duration: '4年',
    capital: '开封',
    founder: '刘知远',
    feature: '最短命的五代政权',
    color: 'from-yellow-700 to-yellow-600',
  },
  {
    name: '后周',
    period: '951-960年',
    duration: '9年',
    capital: '开封',
    founder: '郭威',
    feature: '世宗改革，为北宋统一奠基',
    color: 'from-green-700 to-green-600',
  },
];

const tenKingdoms = [
  {
    name: '前蜀',
    period: '907-925年',
    capital: '成都',
    founder: '王建',
    region: '四川',
  },
  {
    name: '后蜀',
    period: '934-965年',
    capital: '成都',
    founder: '孟知祥',
    region: '四川',
  },
  {
    name: '吴',
    period: '904-937年',
    capital: '扬州',
    founder: '杨行密',
    region: '江淮',
  },
  {
    name: '南唐',
    period: '937-975年',
    capital: '金陵（南京）',
    founder: '李昪',
    region: '江南',
  },
  {
    name: '吴越',
    period: '907-978年',
    capital: '杭州',
    founder: '钱镠',
    region: '浙江',
  },
  {
    name: '闽',
    period: '909-945年',
    capital: '福州',
    founder: '王审知',
    region: '福建',
  },
  {
    name: '楚',
    period: '907-951年',
    capital: '长沙',
    founder: '马殷',
    region: '湖南',
  },
  {
    name: '南汉',
    period: '917-971年',
    capital: '广州',
    founder: '刘龑',
    region: '广东广西',
  },
  {
    name: '南平（荆南）',
    period: '924-963年',
    capital: '荆州',
    founder: '高季兴',
    region: '湖北',
  },
  {
    name: '北汉',
    period: '951-979年',
    capital: '太原',
    founder: '刘旻',
    region: '山西',
  },
];

const FiveDynastiesEra = () => {
  const [activeTab, setActiveTab] = useState<'five' | 'ten'>('five');

  return (
    <section id="five-dynasties-era" className="relative min-h-screen py-20 bg-gradient-to-b from-[#3d2914] via-[#5c3d1e] to-[#3d2914] overflow-hidden">
      {/* Fragmented pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a0522d' fill-opacity='0.4'%3E%3Crect x='10' y='10' width='30' height='30'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-800/30 rounded-full mb-6">
            <Swords className="w-4 h-4 text-amber-500" />
            <span className="text-amber-400 font-sans-sc text-sm">第二次大分裂 · 政权更迭频繁</span>
          </div>
          <h2 className="font-calligraphy text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 mb-4">
            五代十国
          </h2>
          <p className="font-serif-sc text-lg text-amber-300/70 max-w-2xl mx-auto">
            中原政权更迭如走马灯，南方割据各自为政
          </p>
          <div className="mt-4 inline-block px-4 py-2 bg-amber-700/30 border border-amber-500/40 rounded-lg">
            <span className="text-amber-400/80 font-sans-sc text-sm">时间跨度：907年 - 979年</span>
          </div>
        </div>

        {/* Period Toggle */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('five')}
            className={`flex items-center gap-3 px-8 py-4 rounded-xl font-sans-sc transition-all duration-300 ${
              activeTab === 'five'
                ? 'bg-gradient-to-r from-amber-700 to-amber-600 text-amber-100 shadow-lg'
                : 'bg-stone-800/60 text-stone-400 hover:bg-stone-700/60'
            }`}
          >
            <Crown className="w-5 h-5" />
            <div className="text-left">
              <div className="font-semibold">五代</div>
              <div className="text-xs opacity-70">中原正统</div>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('ten')}
            className={`flex items-center gap-3 px-8 py-4 rounded-xl font-sans-sc transition-all duration-300 ${
              activeTab === 'ten'
                ? 'bg-gradient-to-r from-orange-700 to-orange-600 text-orange-100 shadow-lg'
                : 'bg-stone-800/60 text-stone-400 hover:bg-stone-700/60'
            }`}
          >
            <Map className="w-5 h-5" />
            <div className="text-left">
              <div className="font-semibold">十国</div>
              <div className="text-xs opacity-70">南方割据</div>
            </div>
          </button>
        </div>

        {/* Content */}
        <div className="animate-slide-in">
          {activeTab === 'five' && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="font-calligraphy text-3xl text-amber-200 mb-2">五代更替</h3>
                <p className="text-amber-300/70 font-sans-sc">907-960年，中原地区五个短命王朝相继更替</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {fiveDynasties.map((dynasty, index) => (
                  <div
                    key={dynasty.name}
                    className="p-6 rounded-xl bg-gradient-to-br from-stone-800/60 to-stone-900/60 border border-amber-600/30 hover:border-amber-400/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${dynasty.color} flex items-center justify-center`}>
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-calligraphy text-2xl text-amber-200">{dynasty.name}</h4>
                        <p className="text-amber-400/70 text-sm font-sans-sc">{dynasty.period}</p>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <p className="text-stone-400 font-sans-sc">
                        <span className="text-amber-400/60">都城：</span>{dynasty.capital}
                      </p>
                      <p className="text-stone-400 font-sans-sc">
                        <span className="text-amber-400/60">建立者：</span>{dynasty.founder}
                      </p>
                      <p className="text-amber-300/80 font-sans-sc">
                        <span className="text-amber-400/60">特点：</span>{dynasty.feature}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-r from-amber-900/30 to-orange-900/30 border border-amber-500/30">
                <div className="flex items-start gap-4">
                  <Flame className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-amber-300 font-sans-sc font-semibold mb-2">政权特点</h4>
                    <p className="text-amber-200/70 font-serif-sc text-sm leading-relaxed">
                      五代时期政权更迭极为频繁，53年间换了五个朝代、八个姓氏、十四位皇帝。
                      武将夺权成为常态，战乱不断，民不聊生。后周世宗柴荣进行改革，为北宋统一奠定了基础。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ten' && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="font-calligraphy text-3xl text-orange-200 mb-2">十国割据</h3>
                <p className="text-orange-300/70 font-sans-sc">南方及山西地区十个割据政权</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {tenKingdoms.map((kingdom) => (
                  <div
                    key={kingdom.name}
                    className="p-4 rounded-lg bg-gradient-to-br from-stone-800/50 to-stone-900/50 border border-orange-600/30 hover:border-orange-400/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Building2 className="w-4 h-4 text-orange-400" />
                      <h4 className="font-calligraphy text-xl text-orange-200">{kingdom.name}</h4>
                    </div>

                    <div className="space-y-1 text-xs">
                      <p className="text-stone-400 font-sans-sc">
                        <span className="text-orange-400/60">时间：</span>{kingdom.period}
                      </p>
                      <p className="text-stone-400 font-sans-sc">
                        <span className="text-orange-400/60">都城：</span>{kingdom.capital}
                      </p>
                      <p className="text-stone-400 font-sans-sc">
                        <span className="text-orange-400/60">建立者：</span>{kingdom.founder}
                      </p>
                      <p className="text-orange-300/70 font-sans-sc">
                        <span className="text-orange-400/60">地区：</span>{kingdom.region}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-r from-orange-900/30 to-amber-900/30 border border-orange-500/30">
                <div className="flex items-start gap-4">
                  <Scroll className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-orange-300 font-sans-sc font-semibold mb-2">南方发展</h4>
                    <p className="text-orange-200/70 font-serif-sc text-sm leading-relaxed">
                      与北方战乱频繁不同，南方十国相对稳定，经济文化有所发展。吴越国修建海塘，治理钱塘江；
                      南唐文化繁荣，词坛兴盛；闽国发展海外贸易。这一时期南方经济逐渐超越北方，为宋代经济重心南移奠定基础。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Unification */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30">
          <div className="flex items-center gap-4 mb-4">
            <Crown className="w-8 h-8 text-green-400" />
            <h3 className="font-calligraphy text-3xl text-green-300">走向统一</h3>
          </div>
          <p className="text-green-200/70 font-serif-sc leading-relaxed mb-4">
            960年，后周大将赵匡胤发动陈桥兵变，建立北宋。随后逐步消灭南方割据政权：
            963年灭荆南，965年灭后蜀，971年灭南汉，975年灭南唐，978年吴越归降，979年灭北汉，
            最终结束五代十国分裂局面，实现全国统一。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-green-700/30 rounded-full text-green-300 text-sm">960年 北宋建立</span>
            <span className="px-3 py-1 bg-green-700/30 rounded-full text-green-300 text-sm">979年 统一完成</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiveDynastiesEra;
