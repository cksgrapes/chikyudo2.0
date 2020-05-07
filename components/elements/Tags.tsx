import classNames from 'classnames'
import ExLink from '~/components/elements/ExLink'
import styles from '~/components/styles/modules/components/Tags.module.scss'
import postStyles from '~/components/styles/modules/layouts/Post.module.scss'

type TagsProps = {
  items: {
    name: string
    path: string
  }[]
  addClass?: (string | object)[]
}

const Tags = ({ items, addClass }: TagsProps) => {
  if (items == null) return null

  return (
    <ul
      className={classNames(
        styles.tags,
        styles['tags-setLink'],
        postStyles.post_tags,
        ...addClass
      )}
    >
      {items.map((item) => (
        <li key={item.name} className={styles.tags_item}>
          <ExLink item={item} />
        </li>
      ))}
    </ul>
  )
}

export default Tags
