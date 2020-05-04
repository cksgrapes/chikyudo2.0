import dayjs from 'dayjs';
import classNames from 'classnames'
import styles from '~/components/styles/modules/layouts/Post.module.scss'
import generalStyles from '~/components/styles/modules/layouts/General.module.scss'
import Tags from '~/components/elements/Tags'

const getFormattedDate = (date) => {
  return dayjs(date).format('YYYY.M.D ddd HH:mm')
}

class Post extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { children, heading, publishedDate, tags } = this.props

    return (
      <section className={classNames(styles.post, generalStyles.commonSection)}>
        <h2 className={styles.post_heading}>{heading}</h2>
        <div className={styles.post_data}>
          { Tags(tags, [styles.post_tags]) }
          <p className={styles.post_date}>{getFormattedDate(publishedDate)}</p>
        </div>
        <div className={styles.post_body}>{children}</div>
      </section>
    )
  }
}

Post.defaultProps = {
  heading: '記事タイトル',
  publishedDate: '0000.00.0.00 Thu 00:00'
}

export default Post
