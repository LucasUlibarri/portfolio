function About() {
  return (
    <section className="pf-about" id="about">
      <div>
        <span className="pf-label">About</span>
        <h2 className="pf-about__heading">
          Bridging design<br />and code since 2017.
        </h2>
        <p className="pf-about__body">
          I'm a product designer and web developer with experience across government, startups, and agencies in Argentina and Australia. I work at the intersection of design and engineering — as comfortable in Figma as in a codebase.
          <br /><br />
          I care about the things that don't get noticed when they work: clear hierarchy, consistent behaviour, and interfaces that get out of the way.
        </p>
      </div>
      <aside className="pf-about__sidebar">
        <div className="pf-about__datum">
          <p className="pf-about__datum-label">Based in</p>
          <p className="pf-about__datum-value">Buenos Aires, Argentina</p>
        </div>
        <div className="pf-about__datum">
          <p className="pf-about__datum-label">Status</p>
          <p className="pf-about__datum-value">Available for freelance</p>
        </div>
        <div className="pf-about__datum">
          <p className="pf-about__datum-label">Focus</p>
          <p className="pf-about__datum-value">Product Design, Web Dev</p>
        </div>
        <div className="pf-about__datum">
          <p className="pf-about__datum-label">Languages</p>
          <p className="pf-about__datum-value">Spanish (native) · English (fluent)</p>
        </div>
      </aside>
    </section>
  )
}

export default About
