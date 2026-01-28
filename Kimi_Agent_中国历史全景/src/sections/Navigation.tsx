import { useState, useEffect } from 'react';
import { Menu, X, ChevronUp } from 'lucide-react';

const navItems = [
  { id: 'myth-era', label: '神话时代', color: 'text-purple-300' },
  { id: 'prehistoric-era', label: '史前史', color: 'text-amber-300' },
  { id: 'xiashangzhou-era', label: '夏商周', color: 'text-amber-400' },
  { id: 'spring-autumn-era', label: '春秋战国', color: 'text-stone-300' },
  { id: 'qinhan-era', label: '秦汉', color: 'text-amber-300' },
  { id: 'three-kingdoms-era', label: '三国两晋南北朝', color: 'text-red-300' },
  { id: 'suitang-era', label: '隋唐', color: 'text-amber-300' },
  { id: 'five-dynasties-era', label: '五代十国', color: 'text-amber-300' },
  { id: 'songliaojin-era', label: '宋辽金夏', color: 'text-cyan-300' },
  { id: 'yuanmingqing-era', label: '元明清', color: 'text-red-300' },
  { id: 'modern-era', label: '近现代', color: 'text-red-400' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Find active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Fixed Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-stone-900/90 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={scrollToTop}
              className="font-calligraphy text-2xl text-amber-400 hover:text-amber-300 transition-colors"
            >
              中国历史
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-sans-sc transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-amber-600/30 text-amber-300'
                      : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-400 hover:text-stone-200 hover:bg-stone-800/50 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-stone-900/95 backdrop-blur-md border-t border-stone-800">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`p-3 rounded-lg text-left font-sans-sc transition-all duration-200 ${
                      activeSection === item.id
                        ? 'bg-amber-600/30 text-amber-300'
                        : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-amber-600/80 hover:bg-amber-500 text-white shadow-lg transition-all duration-300 ${
          isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </>
  );
};

export default Navigation;
