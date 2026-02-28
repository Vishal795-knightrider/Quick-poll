export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <div className="logo-icon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        QuickPoll
      </div>

      <div className="footer-links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
      </div>

      <div className="footer-copy">
        © {new Date().getFullYear()} QuickPoll
      </div>
    </footer>
  )
}