export default function Hero({ onGoCreate }) {
  return (
    <div className="hero">
      <div className="badge">Frictionless Polling</div>
      <h1>
        Make decisions,<br />
        <span className="gradient-text">not forms.</span>
      </h1>
      <p>
        Create instant, beautiful polls that people actually love to answer.{' '}
        <span className="highlight">No logins</span> no wait times—just pure feedback.
      </p>
      <button className="btn-dark" onClick={onGoCreate}>
        Create a Free Poll
      </button>
    </div>
  )
}