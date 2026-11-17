import HeroSection from '@/components/HeroSection'
import TickerBar from '@/components/TickerBar'
import LineupSection from '@/components/LineupSection'
import SectionBreak from '@/components/SectionBreak'
import DressCodeSection from '@/components/DressCodeSection'
import PropertySelector from '@/components/PropertySelector'
import FaqSection from '@/components/FaqSection'
import FooterSection from '@/components/FooterSection'

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <HeroSection />
      <TickerBar />
      <LineupSection />
      <DressCodeSection />
      <TickerBar reverse />
      <PropertySelector />
      <SectionBreak />
      <FaqSection />
      <FooterSection />
    </div>
  )
}

export default Index
