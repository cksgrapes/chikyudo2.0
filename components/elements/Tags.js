import ExLink from '~/components/elements/ExLink';
import classNames from 'classnames'
import styles from '~/components/styles/modules/components/Tags.module.scss'

const Tags = (items, addClass=[]) => {
  if (!items) return null;

  return (
    <ul className={classNames(styles.tags, styles['tags-setLink'], ...addClass)}>
      {items.map(item => <li key={item.name} className={styles.tags_item}>{ExLink(item)}</li>)}
    </ul>
    )
};

export default Tags;
