import ExLink from '~/components/elements/ExLink';
import classNames from 'classnames'
import styles from '~/components/styles/modules/components/CategoryList.module.scss'

const CategoryList = (props) => {
  const addClass = props.addClass || [];

  return (
    <nav className={classNames(styles.categoryListWrap, ...addClass)}>
        <ul className={styles.categoryList}>
          {props.items.map(item => <li key={item.name}>{ExLink(item)}</li>)}
        </ul>
      </nav>
  )
};

export default CategoryList;
