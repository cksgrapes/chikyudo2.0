import classNames from 'classnames'

import styles from '~/components/styles/modules/layouts/Post.module.scss'
import generalStyles from '~/components/styles/modules/layouts/General.module.scss'


const CheckHasPosts = (props) => {
  const { posts, children } = props
  const notHasPost = (
    <section className={classNames(styles.post, generalStyles.commonSection)}>
      <div className={styles.post_body}>
          <p>記事がありません。</p>
      </div>
    </section>
  )
  let contents

  if (posts.length > 0) {
    contents = children
  } else {
    contents = notHasPost
  }

  return contents
}

export default CheckHasPosts
