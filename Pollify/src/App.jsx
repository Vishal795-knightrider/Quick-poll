import { useState, useRef, useEffect } from "react"
import { Routes, Route } from "react-router-dom"

import Landing from "./Pages/Landing.jsx"
import Create from "./Pages/Create.jsx"
import PollPage from "./Pages/PollPage.jsx"

export default function App() {
  const [isDark, setIsDark] = useState(false)
  const rippleRef = useRef(null)

  // Apply / remove dark-mode class
  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDark)
  }, [isDark])

  function handleThemeToggle(e) {
    const btn = e.currentTarget
    const rect = btn.getBoundingClientRect()
    const ripple = rippleRef.current
    if (!ripple) return

    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const maxDist = Math.hypot(
      Math.max(cx, window.innerWidth - cx),
      Math.max(cy, window.innerHeight - cy)
    )
    const size = maxDist * 2.2

    Object.assign(ripple.style, {
      width: size + "px",
      height: size + "px",
      left: cx - size / 2 + "px",
      top: cy - size / 2 + "px",
      transform: "scale(0)",
      opacity: "1",
      transition:
        "transform 0.75s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s ease 0.65s",
    })

    const goingDark = !isDark
    ripple.className = goingDark ? "to-dark" : "to-light"

    void ripple.offsetWidth
    ripple.classList.add("expanding")

    setTimeout(() => setIsDark(goingDark), 300)
    setTimeout(() => ripple.classList.add("done"), 650)

    setTimeout(() => {
      ripple.className = ""
      ripple.style.transform = "scale(0)"
      ripple.style.opacity = "1"
    }, 900)
  }

  return (
    <>
      <div id="theme-ripple" ref={rippleRef} />

      <Routes>
        <Route
          path="/"
          element={
            <Landing
              isDark={isDark}
              onThemeToggle={handleThemeToggle}
            />
          }
        />

        <Route
          path="/create"
          element={
            <Create
              isDark={isDark}
              onThemeToggle={handleThemeToggle}
            />
          }
        />

        <Route
          path="/poll/:id"
          element={
            <PollPage
              isDark={isDark}
              onThemeToggle={handleThemeToggle}
            />
          }
        />
      </Routes>
    </>
  )
}