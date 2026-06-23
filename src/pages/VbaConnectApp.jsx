import PageWrapper from '../components/PageWrapper'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Features from '../sections/Features'
import DownloadCTA from '../sections/DownloadCTA'

export default function VbaConnectApp() {
  return (
    <PageWrapper>
      <Hero />
      <About />
      <Features />
      <DownloadCTA />
    </PageWrapper>
  )
}
