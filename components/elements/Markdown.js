import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'
// import collapse from 'remark-collapse'
// import shortcodes from 'remark-shortcodes'
// import remarkIframe from 'remark-iframes'

const Markdown = (props) => {
  const { content } = props

  if (!content) return null

  return unified()
    .use(parse)
    .use(remark2react)
    .processSync(content).result
}

export default Markdown
