import classNames from 'classnames'

import ExLink from '~/components/elements/ExLink'
import styles from '~/components/styles/modules/components/Tags.module.scss'
import postStyles from '~/components/styles/modules/layouts/Post.module.scss'

const Tags = (items, addClass = []) => {
  if (!items) return null

  return (
    <ul
      className={classNames(styles.tags, styles['tags-setLink'], postStyles.post_tags, ...addClass)}
    >
      {items.map((item) => (
        <li key={item.name} className={styles.tags_item}>
          {ExLink(item)}
        </li>
      ))}
    </ul>
  )
}

export default Tags
