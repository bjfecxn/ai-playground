import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import MythEra from './sections/MythEra';
import PrehistoricEra from './sections/PrehistoricEra';
import XiaShangZhouEra from './sections/XiaShangZhouEra';
import SpringAutumnEra from './sections/SpringAutumnEra';
import QinHanEra from './sections/QinHanEra';
import ThreeKingdomsEra from './sections/ThreeKingdomsEra';
import SuiTangEra from './sections/SuiTangEra';
import FiveDynastiesEra from './sections/FiveDynastiesEra';
import SongLiaoJinEra from './sections/SongLiaoJinEra';
import YuanMingQingEra from './sections/YuanMingQingEra';
import ModernEra from './sections/ModernEra';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f23]">
      <Navigation />
      <main>
        <HeroSection />
        <MythEra />
        <PrehistoricEra />
        <XiaShangZhouEra />
        <SpringAutumnEra />
        <QinHanEra />
        <ThreeKingdomsEra />
        <SuiTangEra />
        <FiveDynastiesEra />
        <SongLiaoJinEra />
        <YuanMingQingEra />
        <ModernEra />
      </main>
      <Footer />
    </div>
  );
}

export default App;
