import classNames from 'classnames'
import dayjs from 'dayjs'

import styles from '~/components/styles/modules/layouts/Post.module.scss'
import generalStyles from '~/components/styles/modules/layouts/General.module.scss'

class GameTemplate extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { data } = this.props

    return (
      <>
        <section
          className={classNames(
            styles.post,
            generalStyles.commonSection,
            styles['post-photo']
          )}
        >
          <div className={styles.post_body}>
            <figure>
              <a href={data.permalink} target="_blank" rel="noopener">
                <img src={data.media_url} alt="" />
              </a>
            </figure>
          </div>
          <a href={data.permalink} target="_blank" rel="noopener">
            <div className={styles.post_data}>
              <h2 className={styles.post_summary}>{data.caption}</h2>
              <p className={styles.post_date}>
                {dayjs(data.timestamp).format('YYYY.M.D ddd HH:mm')}
              </p>
            </div>
          </a>
        </section>
      </>
    )
  }
}

export default GameTemplate
