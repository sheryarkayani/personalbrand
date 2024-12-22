import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import StatsSection from "./components/StatsSection"
import ServicesSection from "./components/ServicesSection"
import BookingSection from "./components/BookingSection"
import ClientsSection from "./components/ClientSection"
import Footer from "./components/Footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900 via-black to-black">
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <BookingSection />
      <ClientsSection />
      <Footer />
    </div>
  )
}