import classNames from 'classnames'
import dayjs from 'dayjs'
import styles from '~/components/styles/modules/layouts/Post.module.scss'
import generalStyles from '~/components/styles/modules/layouts/General.module.scss'

type PhotoTemplateProps = {
  data: {
    id: string
    permalink: string
    media_url: string
    caption: string
    timestamp: Date
    media_type: string
  }
}

const PhotoTemplate = ({ data }: PhotoTemplateProps) => {
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
            <a href={data.permalink} target="_blank" rel="noopener noreferrer">
              <img src={data.media_url} alt="" />
            </a>
          </figure>
        </div>
        <a href={data.permalink} target="_blank" rel="noopener noreferrer">
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

export default PhotoTemplate
