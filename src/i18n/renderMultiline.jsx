import { Fragment } from 'react'

// "Line one\nLine two" -> Line one<br />Line two, without dangerouslySetInnerHTML
function renderMultiline(text) {
  return text.split('\n').map((line, i, lines) => (
    <Fragment key={i}>
      {line}
      {i < lines.length - 1 && <br />}
    </Fragment>
  ))
}

export default renderMultiline
