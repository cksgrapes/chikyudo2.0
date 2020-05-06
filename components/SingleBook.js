import Link from 'next/link'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { ChevronRight } from '@material-ui/icons'

import Markdown from '~/components/elements/Markdown'

import styles from '~/components/styles/modules/layouts/Post.module.scss'
import generalStyles from '~/components/styles/modules/layouts/General.module.scss'

const BookData = (props) => {
  const { fields } = props
  let data = []

  if (typeof fields.price !== 'undefined') {
    data.push({
      label: '価格',
      value: `${fields.price.toLocaleString()}円（税込）`,
    })
  }

  if (typeof fields.bookformat !== 'undefined') {
    data.push({
      label: '判型',
      value: `${fields.bookformat}型`,
    })
  }

  if (typeof fields.pagenum !== 'undefined') {
    data.push({
      label: '頁数',
      value: `${fields.pagenum}頁`,
    })
  }

  if (typeof fields.issue !== 'undefined') {
    data.push({
      label: '発売日',
      value: dayjs(fields.issue).format('YYYY年M月D日'),
    })
  }

  return (
    <div className={styles.post_bookDataWrap}>
      {data.map((bookData) => (
        <dl className={styles.post_bookData} key={bookData.label}>
          <dt>{bookData.label}</dt>
          <dd>{bookData.value}</dd>
        </dl>
      ))}
    </div>
  )
}

const PostMoreLink = (props) => {
  const { title, path } = props
  if (typeof path === 'undefined') return null

  let _path = path
  if (path.indexOf('http') === -1) {
    _path = `https:${path}`
  }

  let _title = title
  if (_title === 'View sample') {
    _title = (
      <>
        {_title}
        <span>(Open PDF)</span>
      </>
    )
  }

  return (
    <div className={styles.post_moreWrap}>
      <a
        className={styles.post_more}
        href={_path}
        target="_blank"
        rel="noopener"
      >
        {_title}
        <ChevronRight />
      </a>
    </div>
  )
}

const PostImages = (props) => {
  const { images } = props
  if (typeof images === 'undefined') return null

  return (
    <div className={styles.post_cover}>
      {images.map((image) => {
        return (
          <picture key={image.sys.id}>
            <source
              type="image/webp"
              srcSet={`https:${image.fields.file.url}?fm=webp`}
            />
            <img src={`https:${image.fields.file.url}`} alt="" />
          </picture>
        )
      })}
    </div>
  )
}

const SingleBook = (props) => {
  const { post } = props
  const { fields } = post

  return (
    <>
      <section
        className={classNames(
          styles.post,
          generalStyles.commonSection,
          styles['post-book']
        )}
      >
        <PostImages images={fields.coverimage} />
        <div className={styles.post_bodyWrap}>
          <h2 className={styles.post_heading}>
            <Link href={`/books/[slug]`} as={`/books/${fields.slug}`}>
              <a>{fields.title}</a>
            </Link>
          </h2>
          <p className={styles.post_bookCredit}>{fields.credit}</p>
          <div className={styles.post_body}>
            <Markdown content={fields.intro} />
          </div>
          <BookData fields={fields} />
          <PostMoreLink
            title="View sample"
            path={fields.sample.fields.file.url}
          />
          <PostMoreLink title="Buy at Booth" path={fields.booth} />
        </div>
      </section>
    </>
  )
}

SingleBook.defaultProps = {
  heading: '書籍タイトル',
  publishedDate: '0000.00.0.00 Thu 00:00',
}

export default SingleBook
