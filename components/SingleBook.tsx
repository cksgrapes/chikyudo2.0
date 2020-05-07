import Link from 'next/link'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { ChevronRight } from '@material-ui/icons'
import Markdown from '~/components/elements/Markdown'
import styles from '~/components/styles/modules/layouts/Post.module.scss'
import generalStyles from '~/components/styles/modules/layouts/General.module.scss'

type BookDataProps = {
  data: {
    price: number
    bookFormat: string
    pageNum: number
    issue: Date
  }
}

const BookData = ({ data }: BookDataProps) => {
  if (data == null) return null

  const templates = {
    price: (data: string) => {
      return {
        label: '価格',
        value: `${data.toLocaleString()}円（税込）`,
      }
    },
    bookFormat: (data: string) => {
      return {
        label: '判型',
        value: `${data}型`,
      }
    },
    pageNum: (data: string) => {
      return {
        label: '頁数',
        value: `${data}頁`,
      }
    },
    issue: (data: string) => {
      return {
        label: '発売日',
        value: dayjs(data).format('YYYY年M月D日'),
      }
    },
  }

  const getBookData: {
    label: string
    value: string
  }[] = []

  for (const label in data) {
    getBookData.push(templates[label](data[label]))
  }

  return (
    <div className={styles.post_bookDataWrap}>
      {getBookData.map((data) => (
        <dl className={styles.post_bookData} key={data.label}>
          <dt>{data.label}</dt>
          <dd>{data.value}</dd>
        </dl>
      ))}
    </div>
  )
}

type PostMoreLink = {
  title: string | React.ReactNode
  path: string
}

const PostMoreLink = ({ title, path }: PostMoreLink) => {
  if (path == null) return null

  //プロトコルがなければ付与
  if (path.indexOf('http') === -1) {
    path = `https:${path}`
  }

  //ViewSampleには(Open PDF)を付与
  if (title === 'View sample') {
    title = (
      <>
        {title}
        <span>(Open PDF)</span>
      </>
    )
  }

  return (
    <div className={styles.post_moreWrap}>
      <a
        className={styles.post_more}
        href={path}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
        <ChevronRight />
      </a>
    </div>
  )
}

type PostImagesProps = {
  images: {
    id: string
    fileUrl: string
  }[]
}

const PostImages = ({ images }: PostImagesProps) => {
  if (images == null) return null

  return (
    <div className={styles.post_cover}>
      {images.map((image: { id: string; fileUrl: string }) => {
        return (
          <picture key={image.id}>
            <source
              type="image/webp"
              srcSet={`https:${image.fileUrl}?fm=webp`}
            />
            <img src={`https:${image.fileUrl}`} alt="" />
          </picture>
        )
      })}
    </div>
  )
}

type SingBookProps = {
  post: {
    title: string
    slug: string
    coverimage: {
      id: string
      fileUrl: string
    }[]
    credit: string
    intro: string
    bookData: {
      price: number
      bookFormat: string
      pageNum: number
      issue: Date
    }
    sample: string
    booth: string
  }
}

const SingleBook = ({ post }: SingBookProps) => {
  return (
    <>
      <section
        className={classNames(
          styles.post,
          generalStyles.commonSection,
          styles['post-book']
        )}
      >
        <PostImages images={post.coverimage} />
        <div className={styles.post_bodyWrap}>
          <h2 className={styles.post_heading}>
            <Link href={`/works/books/[slug]`} as={`/works/books/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </h2>
          <p className={styles.post_bookCredit}>{post.credit}</p>
          <div className={styles.post_body}>
            <Markdown content={post.intro} />
          </div>
          <BookData data={post.bookData} />
          <PostMoreLink title="View sample" path={post.sample} />
          <PostMoreLink title="Buy at Booth" path={post.booth} />
        </div>
      </section>
    </>
  )
}

export default SingleBook
