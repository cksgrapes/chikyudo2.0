import Link from 'next/link'
import classNames from 'classnames'
import dayjs from 'dayjs'

import styles from '~/components/styles/modules/layouts/Post.module.scss'
import generalStyles from '~/components/styles/modules/layouts/General.module.scss'

const Thumbnail = (props) =>{
  const { id } = props;

  return <img src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt="" />
}

class GameTemplate extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { id, snippet } = this.props

    return (
      <>
        <section
          className={classNames(
            styles.post,
            generalStyles.commonSection,
            styles['post-photo']
          )}
        >
          <div className="post_body">
            <p>
              <Thumbnail id={id} />
            </p>
            {/* <p>{snippet.description}</p> */}
          </div>
          <div className={styles.post_data}>
          <h2 className={styles.post_heading}>
              <a href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener">{snippet.title}</a>
            </h2>
            <p className={styles.post_date}>
              {dayjs(snippet.publishedAt).format('YYYY.M.D ddd HH:mm')}
            </p>
          </div>
        </section>
      </>
    )
  }
}

export default GameTemplate
