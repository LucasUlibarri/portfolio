const WHAT_I_DO = [
  {
    title: "Product Design",
    text: "From early-stage concepts to structured systems. I help teams define priorities, shape direction and design products that are clear enough to build.",
  },
  {
    title: "Web Design & Build",
    text: "Product-oriented websites designed and built with structure in mind. Not just visual execution — experiences that communicate thinking.",
  },
  {
    title: "Internal Tools & Systems",
    text: "Interfaces for complex internal workflows. I design systems that reduce friction and help teams work with clarity.",
  },
]

const HOW_I_WORK = [
  {
    title: "Understand the context",
    text: "Before anything else, I try to understand the actual problem. Not the symptom — the underlying situation, the constraints and what success would actually look like.",
  },
  {
    title: "Find what actually matters",
    text: "Most projects have too many priorities. I work to identify what's essential and what's noise — so the team can move with focus instead of spreading thin.",
  },
  {
    title: "Shape the system",
    text: "Once direction is clear, I design the structure. Not just screens — the logic, hierarchy and flow that makes the product coherent from the inside out.",
  },
  {
    title: "Align and move forward",
    text: "Design only works if it lands well. I stay close to implementation and make sure decisions are understood, shared and ready to execute.",
  },
]

function Process() {
  return (
    <section className="pf-process" id="process">
      <div className="pf-process__col">
        <div className="pf-process__sticky">
          <p className="pf-thinking__text">
            Most products don't fail because of design — they fail because ideas never become clear enough to execute.
          </p>
          <p className="pf-thinking__sub">
            I enjoy the early stages: the messy conversations, loose ideas and undefined directions. That stage where things exist conceptually, but not yet clearly enough to build.
            <br /><br />
            My job is to reduce the noise. Find what actually matters. Shape something that gives the team a clear direction to move toward. Not to remove exploration, but to give it direction.
          </p>
        </div>
      </div>

      <div className="pf-approach">
        <div className="pf-approach__col">
          <h3 className="pf-approach__heading">What I do</h3>
          <ul className="pf-approach__list">
            {WHAT_I_DO.map(item => (
              <li key={item.title}>
                <p className="pf-approach__item-title">{item.title}</p>
                <p className="pf-approach__text">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="pf-approach__col">
          <h3 className="pf-approach__heading">How I work</h3>
          <ol className="pf-approach__list pf-approach__list--steps">
            {HOW_I_WORK.map((step, i) => (
              <li key={step.title}>
                <span className="pf-approach__step-num">0{i + 1}</span>
                <p className="pf-approach__item-title">{step.title}</p>
                <p className="pf-approach__text">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Process
