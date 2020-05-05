import Link from 'next/link';
import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'
// import collapse from 'remark-collapse'
// import shortcodes from 'remark-shortcodes'
// import remarkIframe from 'remark-iframes'

import { ChevronRight } from '@material-ui/icons'
import styles from '~/components/styles/modules/layouts/Post.module.scss'

const removeStartNewLine = (content) => {
  if (!content.startsWith('\n')) {
    return content
  }
  content = content.replace('\n', '')
  return removeStartNewLine(content)
}

const SplitedContents = ({ content, separator, removeMore, linkData }) => {
  const arrContent = content.split(separator)
  const splitedContent = {
    excerpt: arrContent[0],
    more: removeStartNewLine(arrContent[1]),
  }
  const srcExcerpt = unified()
    .use(parse)
    .use(remark2react)
    .processSync(splitedContent.excerpt).result
  const srcMore = unified()
    .use(parse)
    .use(remark2react)
    .processSync(splitedContent.more).result

  if (removeMore) {
    return (
      <>
        {srcExcerpt}
        {srcMore}
      </>
    )
  }

  return (
    <>
      {srcExcerpt}
      <div className={styles.post_moreWrap}>
        <Link href={linkData.href} as={linkData.as}>
          <a className={styles.post_more}>
            Read more
            <ChevronRight />
          </a>
        </Link>
      </div>
    </>
  )
}

const Markdown = (props) => {
  const { content, isArchive, linkData } = props

  if (!content) return null

  const separator = '[[more]]'

  if (content.includes(separator)) {
    if (isArchive) {
      return (
        <SplitedContents
          content={content}
          separator={separator}
          linkData={linkData}
        />
      )
    } else {
      return (
        <SplitedContents content={content} separator={separator} removeMore />
      )
    }
  }

  return unified().use(parse).use(remark2react).processSync(content).result
}

export default Markdown
