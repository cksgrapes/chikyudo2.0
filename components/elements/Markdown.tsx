import Link from 'next/link'
import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'
import { ChevronRight } from '@material-ui/icons'
import { MyParagraph, MyImg } from '~/components/elements/RemarkComponents'
import styles from '~/components/styles/modules/layouts/Post.module.scss'

const remark2ReactOptions = {
  remarkReactComponents: {
    img: MyImg,
    p: MyParagraph,
  },
}

const removeStartNewLine = (content: string) => {
  if (!content.startsWith('\n')) {
    return content
  }
  content = content.replace('\n', '')
  return removeStartNewLine(content)
}

type SplitedContentsProps = {
  content: string
  separator: string
  removeMore?: boolean
  linkData?: {
    href: string
    as: string
  }
}

const SplitedContents = ({
  content,
  separator,
  removeMore = false,
  linkData,
}: SplitedContentsProps) => {
  const arrContent = content.split(separator)
  const [excerpt, more] = [arrContent[0], removeStartNewLine(arrContent[1])]
  const srcExcerpt = unified()
    .use(parse)
    .use(remark2react, remark2ReactOptions)
    // @ts-ignore
    .processSync(excerpt).result

  const srcMore = unified()
    .use(parse)
    .use(remark2react, remark2ReactOptions)
    // @ts-ignore
    .processSync(more).result

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

type MarkdownProps = {
  content: string
  isArchive?: boolean
  linkData?: {
    href: string
    as: string
  }
}

const Markdown = ({ content, isArchive, linkData }: MarkdownProps) => {
  if (content == null) return null

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

  return (
    unified()
      .use(parse)
      .use(remark2react, remark2ReactOptions)
      // @ts-ignore
      .processSync(content).result
  )
}

export default Markdown
