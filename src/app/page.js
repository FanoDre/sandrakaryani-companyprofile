import Navbar from './components/Navbar/page'
import HeroSection from './components/HeroSection/page'
import AboutSection from './components/AboutSection/page'
import GallerySection from './components/GallerySection/page'
import EmailSection from './components/EmailSection/page'
import Footer from './components/Footer/page'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mt-10 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <EmailSection />
      </div>
      <div className="w-full mt-10  py-4">
        <Footer />
      </div>
    </main>
  )
}
