import classNames from 'classnames'
import styles from '~/components/styles/modules/layouts/Post.module.scss'
import generalStyles from '~/components/styles/modules/layouts/General.module.scss'

const NoData = () => (
  <section
    className={classNames(styles.post, generalStyles.commonSection, 'taC')}
  >
    <p>Sorry. Missing Data : (</p>
  </section>
)

export default NoData
