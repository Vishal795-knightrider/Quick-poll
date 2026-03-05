import { useNavigate } from "react-router-dom"
import Navbar from "../Components/Navbar.jsx"
import Hero from "../Components/Hero.jsx"
import Preview from "../Components/Preview.jsx"
import Steps from "../Components/Steps.jsx"
import Features from "../Components/Features.jsx"
import Comparison from "../Components/Comparison.jsx"
import FAQ from "../Components/FAQ.jsx"
import CTA from "../Components/CTA.jsx"
import Footer from "../Components/Footer.jsx"

export default function Landing({ isDark, onThemeToggle }) {
  const navigate = useNavigate()

  function goToCreate() {
    navigate("/create")
  }

  return (
    <div className="landing-page">
      <Navbar
        isDark={isDark}
        onToggleTheme={onThemeToggle}
        onCreateClick={goToCreate}
      />

      <Hero onGoCreate={goToCreate} />
      <Preview />
      <Steps />
      <Features />
      <Comparison />
      <FAQ />
      <CTA onGoCreate={goToCreate} />
      <Footer />
    </div>
  )
}