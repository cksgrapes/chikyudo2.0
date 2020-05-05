import Link from 'next/link';
import Tags from '~/components/elements/Tags'
import Markdown from '~/components/elements/Markdown'
import classNames from 'classnames'
import getPostData from '~/components/general/getPostData';

import styles from '~/components/styles/modules/layouts/Post.module.scss'
import generalStyles from '~/components/styles/modules/layouts/General.module.scss'

const SingleBlog = ({post, isArchive}) => {
  const { fields } = post
  const postData = getPostData(post)
  const getIsArchive = (typeof isArchive === 'undefined')
  const linkData = {
    href: `/blog/[slug]`,
    as: `/blog/${fields.slug}`
  }

  return (
    <>
      <section className={classNames(styles.post, generalStyles.commonSection)}>
        <h2 className={styles.post_heading}>
         <Link href={linkData.href} as={linkData.as}><a>{fields.title}</a></Link>
        </h2>
        <div className={styles.post_data}>
          { Tags(postData.category(), [styles.post_tags]) }
          <p className={styles.post_date}>{postData.publishedDate()}</p>
        </div>
        <div className={styles.post_body}>
          <Markdown content={fields.body} isArchive={getIsArchive} linkData={linkData} />
        </div>
      </section>
    </>
  )
}

SingleBlog.defaultProps = {
  heading: '記事タイトル',
  publishedDate: '0000.00.0.00 Thu 00:00'
}

export default SingleBlog
