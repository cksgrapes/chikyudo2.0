import classNames from 'classnames'
import Layout from '~/components/Layout'
import styles from '~/components/styles/modules/layouts/Post.module.scss'
import generalStyles from '~/components/styles/modules/layouts/General.module.scss'

type PageProps = {
  heading: string
  description: string
  children: React.ReactNode
}

const Page = ({ heading, description, children }: PageProps) => {
  return (
    <Layout>
      <div
        className={classNames(
          styles.post,
          generalStyles.categoryHeading,
          generalStyles.pageHeading
        )}
      >
        <h1 className={styles.post_heading}>{heading}</h1>
        <p className={styles.post_description}>{description}</p>
      </div>
      <div className={classNames(styles.post, generalStyles.commonSection)}>
        <div className={styles.post_body}>{children}</div>
      </div>
    </Layout>
  )
}

Page.defaultProps = {
  heading: 'Heading',
  description: '見出し',
  children: <p>ここに本文が入ります。</p>,
}

export default Page
