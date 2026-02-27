import Navbar from "./Components/landing.jsx/Navbar";
import Hero from "./Components/landing.jsx/Hero"

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200">
      <Navbar />
      <Hero />
    </div>
  );
}