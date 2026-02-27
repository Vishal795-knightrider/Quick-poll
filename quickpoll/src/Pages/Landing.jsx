import Navbar      from '../Components/Navbar.js'
import Hero        from '../Components/Hero.jsx'
import Preview     from '../Components/Preview.js'
import Steps       from '../Components/Steps.js'
import Features    from '../Components/Features.js'
import Comparison  from '../Components/Comparison.js'
import FAQ         from '../Components/FAQ.js'
import CTA         from '../Components/CTA.js'
import Footer      from '../Components/Footer.js'

export default function Landing({ isDark, onThemeToggle, onGoCreate }) {
  return (
    <div className="landing-page">
      <Navbar
        isDark={isDark}
        onToggleTheme={onThemeToggle}
        onCreateClick={onGoCreate}
      />
      <Hero       onGoCreate={onGoCreate} />
      <Preview />
      <Steps />
      <Features />
      <Comparison />
      <FAQ />
      <CTA        onGoCreate={onGoCreate} />
      <Footer />
    </div>
  )
}