import Link from 'next/link'
import classNames from 'classnames'
import dayjs from 'dayjs'
import Tags from '~/components/elements/Tags'
import Markdown from '~/components/elements/Markdown'
import styles from '~/components/styles/modules/layouts/Post.module.scss'
import generalStyles from '~/components/styles/modules/layouts/General.module.scss'

interface GetPostDataParams {
  category: {
    title: string
    slug: string
  }
  date: {
    createdAt: Date
    publishedAt: Date
  }
}

const getPostData = (
  date: GetPostDataParams['date'],
  category: GetPostDataParams['category']
) => {
  return {
    category: () => {
      if (category == null) return null
      return [
        {
          name: category.title,
          path: `/blog/${category.slug}`,
        },
      ]
    },
    publishedAt: (format = 'YYYY.M.D ddd HH:mm') => {
      if (date == null) return null
      const _date = date.publishedAt != null ? date.publishedAt : date.createdAt
      return dayjs(_date).format(format)
    },
  }
}

type SingleBlogProps = {
  post: {
    title: string
    slug: string
    body: string
    date: {
      publishedAt: Date
      createdAt: Date
    }
    category: {
      title: string
      slug: string
    }
    ogpImage: any
  }
  isArchive?: boolean
}

const SingleBlog = ({ post, isArchive = true }: SingleBlogProps) => {
  const { title, body, slug, date, category } = post
  const postData = getPostData(date, category)
  const postLink = {
    href: `/blog/[slug]`,
    as: `/blog/${slug}`,
  }

  return (
    <>
      <section className={classNames(styles.post, generalStyles.commonSection)}>
        <h2 className={styles.post_heading}>
          <Link href={postLink.href} as={postLink.as}>
            <a>{title}</a>
          </Link>
        </h2>
        <div className={styles.post_data}>
          <Tags items={postData.category()} addClass={[styles.post_tags]} />
          <p className={styles.post_date}>{postData.publishedAt()}</p>
        </div>
        <div className={styles.post_body}>
          <Markdown content={body} isArchive={isArchive} linkData={postLink} />
        </div>
      </section>
    </>
  )
}

export default SingleBlog
