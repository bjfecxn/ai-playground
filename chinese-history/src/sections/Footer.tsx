import { BookOpen, Clock, Map, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-16 bg-gradient-to-b from-[#0f0f23] to-[#050510] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-calligraphy text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 mb-4">
            以史为鉴，面向未来
          </h2>
          <p className="font-serif-sc text-lg text-stone-400/80 max-w-2xl mx-auto">
            历史是最好的教科书，了解过去，才能更好地把握现在，开创未来
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 rounded-2xl bg-stone-900/50 border border-stone-700/50 text-center">
            <Clock className="w-8 h-8 text-amber-400 mx-auto mb-3" />
            <p className="text-3xl font-bold text-amber-300 mb-1">约170万年</p>
            <p className="text-stone-400 text-sm font-sans-sc">人类历史跨度</p>
          </div>
          <div className="p-6 rounded-2xl bg-stone-900/50 border border-stone-700/50 text-center">
            <BookOpen className="w-8 h-8 text-amber-400 mx-auto mb-3" />
            <p className="text-3xl font-bold text-amber-300 mb-1">5000+年</p>
            <p className="text-stone-400 text-sm font-sans-sc">文明史记载</p>
          </div>
          <div className="p-6 rounded-2xl bg-stone-900/50 border border-stone-700/50 text-center">
            <Map className="w-8 h-8 text-amber-400 mx-auto mb-3" />
            <p className="text-3xl font-bold text-amber-300 mb-1">数十个</p>
            <p className="text-stone-400 text-sm font-sans-sc">主要朝代政权</p>
          </div>
        </div>

        {/* Timeline summary */}
        <div className="p-6 rounded-2xl bg-stone-900/30 border border-stone-700/30 mb-8">
          <h3 className="font-calligraphy text-2xl text-amber-300 mb-4 text-center">历史脉络概览</h3>
          <div className="flex flex-wrap justify-center gap-2 text-sm font-sans-sc">
            <span className="px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">神话传说</span>
            <span className="text-stone-600">→</span>
            <span className="px-3 py-1 bg-amber-900/30 rounded-full text-amber-300">史前史</span>
            <span className="text-stone-600">→</span>
            <span className="px-3 py-1 bg-amber-800/30 rounded-full text-amber-300">夏商周</span>
            <span className="text-stone-600">→</span>
            <span className="px-3 py-1 bg-stone-800/30 rounded-full text-stone-300">春秋战国</span>
            <span className="text-stone-600">→</span>
            <span className="px-3 py-1 bg-slate-800/30 rounded-full text-slate-300">秦汉</span>
            <span className="text-stone-600">→</span>
            <span className="px-3 py-1 bg-red-900/30 rounded-full text-red-300">三国两晋南北朝</span>
            <span className="text-stone-600">→</span>
            <span className="px-3 py-1 bg-indigo-900/30 rounded-full text-indigo-300">隋唐</span>
            <span className="text-stone-600">→</span>
            <span className="px-3 py-1 bg-amber-900/30 rounded-full text-amber-300">五代十国</span>
            <span className="text-stone-600">→</span>
            <span className="px-3 py-1 bg-cyan-900/30 rounded-full text-cyan-300">宋辽金夏</span>
            <span className="text-stone-600">→</span>
            <span className="px-3 py-1 bg-stone-800/30 rounded-full text-stone-300">元明清</span>
            <span className="text-stone-600">→</span>
            <span className="px-3 py-1 bg-red-900/30 rounded-full text-red-300">近现代</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-stone-800">
          <p className="text-stone-500 text-sm font-sans-sc flex items-center justify-center gap-1">
            用 <Heart className="w-4 h-4 text-red-500" /> 制作 · 中国历史脉络 · 2026
          </p>
          <p className="text-stone-600 text-xs font-sans-sc mt-2">
            参考：夏商周断代工程、《史记》、《资治通鉴》及现代考古发现
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
