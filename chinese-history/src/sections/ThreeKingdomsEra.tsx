import { useState } from 'react';
import { Swords, Crown, Map, Shield, Users } from 'lucide-react';

const threeKingdoms = [
  {
    name: '曹魏',
    period: '220-265年',
    duration: '45年',
    capital: '洛阳',
    founder: '曹丕',
    rulers: ['曹丕', '曹叡', '曹芳', '曹髦', '曹奂'],
    feature: '占据中原，实力最强，九品中正制',
    color: 'from-blue-700 to-blue-600',
  },
  {
    name: '蜀汉',
    period: '221-263年',
    duration: '42年',
    capital: '成都',
    founder: '刘备',
    rulers: ['刘备', '刘禅'],
    feature: '偏安西南，诸葛亮治蜀，六出祁山',
    color: 'from-green-700 to-green-600',
  },
  {
    name: '东吴',
    period: '229-280年',
    duration: '51年',
    capital: '建业（南京）',
    founder: '孙权',
    rulers: ['孙权', '孙亮', '孙休', '孙皓'],
    feature: '据有江东，开发江南，水军强大',
    color: 'from-red-700 to-red-600',
  },
];

const jinDynasties = [
  {
    name: '西晋',
    period: '265-316年',
    duration: '51年',
    capital: '洛阳',
    founder: '司马炎',
    events: ['灭吴统一', '八王之乱', '永嘉之乱'],
  },
  {
    name: '东晋',
    period: '317-420年',
    duration: '103年',
    capital: '建康（南京）',
    founder: '司马睿',
    events: ['偏安江南', '门阀政治', '淝水之战'],
  },
];

const sixteenKingdoms = [
  { name: '前赵（汉赵）', nation: '匈奴', period: '304-329年', founder: '刘渊' },
  { name: '成汉', nation: '巴氐', period: '306-347年', founder: '李雄' },
  { name: '前凉', nation: '汉族', period: '314-363年', founder: '张寔' },
  { name: '后赵', nation: '羯族', period: '319-351年', founder: '石勒' },
  { name: '前燕', nation: '鲜卑', period: '337-370年', founder: '慕容皝' },
  { name: '前秦', nation: '氐族', period: '351-394年', founder: '苻健' },
  { name: '后秦', nation: '羌族', period: '384-417年', founder: '姚苌' },
  { name: '后燕', nation: '鲜卑', period: '384-407年', founder: '慕容垂' },
  { name: '西秦', nation: '鲜卑', period: '385-431年', founder: '乞伏国仁' },
  { name: '后凉', nation: '氐族', period: '386-403年', founder: '吕光' },
  { name: '南凉', nation: '鲜卑', period: '397-414年', founder: '拓跋乌孤' },
  { name: '南燕', nation: '鲜卑', period: '398-410年', founder: '慕容德' },
  { name: '西凉', nation: '汉族', period: '407-421年', founder: '李暠' },
  { name: '胡夏', nation: '匈奴', period: '407-431年', founder: '赫连勃勃' },
  { name: '北燕', nation: '高句丽/汉族', period: '407-436年', founder: '高云/冯跋' },
  { name: '北凉', nation: '匈奴', period: '397-439年', founder: '沮渠蒙逊' },
];

const southernDynasties = [
  { name: '宋', period: '420-479年', founder: '刘裕', feature: '刘宋最强，元嘉之治' },
  { name: '齐', period: '479-502年', founder: '萧道成', feature: '短暂统治，内乱频繁' },
  { name: '梁', period: '502-557年', founder: '萧衍', feature: '武帝崇佛，侯景之乱' },
  { name: '陈', period: '557-589年', founder: '陈霸先', feature: '南朝最弱，疆域最小' },
];

const northernDynasties = [
  { name: '北魏', period: '386-534年', founder: '拓跋珪', feature: '统一北方，孝文帝改革' },
  { name: '东魏', period: '534-550年', founder: '元善见', feature: '高欢专权，傀儡政权' },
  { name: '西魏', period: '535-557年', founder: '元宝炬', feature: '宇文泰专权，府兵制' },
  { name: '北齐', period: '550-577年', founder: '高洋', feature: '高氏暴政，北周所灭' },
  { name: '北周', period: '557-581年', founder: '宇文觉', feature: '统一北方，杨坚代周' },
];

const ThreeKingdomsEra = () => {
  const [activeTab, setActiveTab] = useState<'three' | 'jin' | 'sixteen' | 'northsouth'>('three');

  return (
    <section id="three-kingdoms-era" className="relative min-h-screen py-20 bg-gradient-to-b from-[#2c1810] via-[#4a2c17] to-[#2c1810] overflow-hidden">
      {/* Battle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238b0000' fill-opacity='0.4'%3E%3Cpath d='M30 0l30 30-30 30L0 30 30 0zm0 10L10 30l20 20 20-20L30 10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-900/30 rounded-full mb-6">
            <Swords className="w-4 h-4 text-red-500" />
            <span className="text-red-300 font-sans-sc text-sm">第一次大分裂 · 民族大融合</span>
          </div>
          <h2 className="font-calligraphy text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-red-400 mb-4">
            三国两晋南北朝
          </h2>
          <p className="font-serif-sc text-lg text-red-300/70 max-w-2xl mx-auto">
            从三国鼎立到南北对峙，战乱与融合交织的漫长岁月
          </p>
          <div className="mt-4 inline-block px-4 py-2 bg-red-800/30 border border-red-500/40 rounded-lg">
            <span className="text-red-300/80 font-sans-sc text-sm">时间跨度：220年 - 589年</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { key: 'three', label: '三国', icon: Swords },
            { key: 'jin', label: '两晋', icon: Crown },
            { key: 'sixteen', label: '十六国', icon: Map },
            { key: 'northsouth', label: '南北朝', icon: Shield },
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as typeof activeTab)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg font-sans-sc transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-red-700 to-red-600 text-white shadow-lg'
                  : 'bg-stone-800/60 text-stone-400 hover:bg-stone-700/60'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="animate-slide-in">
          {activeTab === 'three' && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                {threeKingdoms.map((kingdom) => (
                  <div
                    key={kingdom.name}
                    className="p-6 rounded-2xl bg-gradient-to-br from-stone-800/60 to-stone-900/60 border border-stone-600/30 hover:border-red-500/40 transition-all duration-300"
                  >
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${kingdom.color} flex items-center justify-center mb-4`}>
                      <Crown className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-calligraphy text-3xl text-red-200 mb-2">{kingdom.name}</h3>
                    <p className="text-red-400/70 font-sans-sc mb-4">{kingdom.period}</p>
                    
                    <div className="space-y-2 text-sm">
                      <p className="text-stone-400 font-sans-sc">
                        <span className="text-red-400/60">都城：</span>{kingdom.capital}
                      </p>
                      <p className="text-stone-400 font-sans-sc">
                        <span className="text-red-400/60">建立者：</span>{kingdom.founder}
                      </p>
                      <p className="text-red-300/80 font-sans-sc">
                        <span className="text-red-400/60">特点：</span>{kingdom.feature}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-stone-900/40 to-stone-950/40 border border-red-600/20">
                <h4 className="font-calligraphy text-2xl text-red-300 mb-4">三国归晋</h4>
                <p className="text-stone-300 font-serif-sc leading-relaxed">
                  263年，曹魏司马昭灭蜀汉；265年，司马炎代魏建晋；280年，晋灭东吴，统一全国。
                  然而统一短暂，很快陷入更大的分裂。
                </p>
              </div>
            </div>
          )}

          {activeTab === 'jin' && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                {jinDynasties.map((jin) => (
                  <div
                    key={jin.name}
                    className="p-6 rounded-2xl bg-gradient-to-br from-stone-800/60 to-stone-900/60 border border-stone-600/30"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-700 to-amber-600 flex items-center justify-center">
                        <Crown className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-calligraphy text-2xl text-amber-200">{jin.name}</h3>
                        <p className="text-amber-400/70 font-sans-sc text-sm">{jin.period}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm mb-4">
                      <p className="text-stone-400 font-sans-sc">
                        <span className="text-amber-400/60">都城：</span>{jin.capital}
                      </p>
                      <p className="text-stone-400 font-sans-sc">
                        <span className="text-amber-400/60">建立者：</span>{jin.founder}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {jin.events.map((event) => (
                        <span key={event} className="px-2 py-1 bg-amber-700/30 rounded text-amber-300 text-xs">
                          {event}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'sixteen' && (
            <div>
              <div className="mb-6">
                <h3 className="font-calligraphy text-2xl text-red-300 mb-2">十六国时期</h3>
                <p className="text-stone-400 font-sans-sc">304-439年，北方少数民族建立的政权</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                {sixteenKingdoms.map((kingdom) => (
                  <div
                    key={kingdom.name}
                    className="p-3 rounded-lg bg-stone-800/50 border border-stone-600/30 hover:border-red-500/40 transition-colors"
                  >
                    <h4 className="font-calligraphy text-lg text-red-200 mb-1">{kingdom.name}</h4>
                    <p className="text-stone-400 text-xs font-sans-sc">{kingdom.period}</p>
                    <p className="text-red-300/70 text-xs font-sans-sc">{kingdom.nation} · {kingdom.founder}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'northsouth' && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Southern Dynasties */}
                <div>
                  <h3 className="font-calligraphy text-2xl text-blue-300 mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    南朝（420-589年）
                  </h3>
                  <div className="space-y-3">
                    {southernDynasties.map((dynasty) => (
                      <div key={dynasty.name} className="p-4 rounded-lg bg-blue-900/20 border border-blue-600/30">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="w-8 h-8 rounded-full bg-blue-600/30 flex items-center justify-center text-blue-400 font-bold">
                            {dynasty.name}
                          </span>
                          <div>
                            <h4 className="font-calligraphy text-xl text-blue-200">{dynasty.name}朝</h4>
                            <p className="text-blue-400/70 text-xs font-sans-sc">{dynasty.period}</p>
                          </div>
                        </div>
                        <p className="text-blue-300/70 text-sm font-sans-sc">{dynasty.feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Northern Dynasties */}
                <div>
                  <h3 className="font-calligraphy text-2xl text-green-300 mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    北朝（386-581年）
                  </h3>
                  <div className="space-y-3">
                    {northernDynasties.map((dynasty) => (
                      <div key={dynasty.name} className="p-4 rounded-lg bg-green-900/20 border border-green-600/30">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="w-8 h-8 rounded-full bg-green-600/30 flex items-center justify-center text-green-400 font-bold">
                            {dynasty.name[0]}
                          </span>
                          <div>
                            <h4 className="font-calligraphy text-xl text-green-200">{dynasty.name}</h4>
                            <p className="text-green-400/70 text-xs font-sans-sc">{dynasty.period}</p>
                          </div>
                        </div>
                        <p className="text-green-300/70 text-sm font-sans-sc">{dynasty.feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30">
                <h4 className="font-calligraphy text-xl text-red-300 mb-3">南北统一</h4>
                <p className="text-stone-300 font-serif-sc">
                  577年，北周灭北齐，统一北方；581年，杨坚代周建隋；589年，隋灭陈，结束近400年的分裂，重新统一全国。
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ThreeKingdomsEra;
