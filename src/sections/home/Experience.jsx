function Experience({ items }) {
  return (
    <section className="pf-experience">
      <span className="pf-label">Experience</span>
      <div className="pf-experience__cols">
        {items.map(item => (
          <div key={item.id} className="pf-experience__item">
            <p className="pf-experience__period">{item.period}</p>
            <p className="pf-experience__company">{item.company}</p>
            <p className="pf-experience__role">{item.role}</p>
            <p className="pf-experience__desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
