const ROWS = [
  { feature: 'Creation Time',     traditional: '~2–5 minutes',         quick: '~10 seconds'       },
  { feature: 'User Friction',     traditional: 'Login/Email Required',  quick: 'No Login Required' },
  { feature: 'Visual Appeal',     traditional: 'Generic / Busy',        quick: 'Minimal & Premium' },
  { feature: 'Mobile Experience', traditional: 'Often Clunky',          quick: 'Mobile-Optimized'  },
]

export default function Comparison() {
  return (
    <section className="compare-section">
      <div className="section-title">Why choose QuickPoll?</div>
      <p className="section-sub">
        Traditional forms are too heavy. QuickPoll is built for speed.
      </p>
      <div className="compare-table">
        <div className="compare-head">
          <span>Feature</span>
          <span>Traditional Forms</span>
          <span>QuickPoll</span>
        </div>
        {ROWS.map(({ feature, traditional, quick }) => (
          <div className="compare-row" key={feature}>
            <span>{feature}</span>
            <span>{traditional}</span>
            <span>{quick}</span>
          </div>
        ))}
      </div>
    </section>
  )
}