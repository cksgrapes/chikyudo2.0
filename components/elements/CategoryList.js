import classNames from 'classnames'

import ExLink from '~/components/elements/ExLink'

import styles from '~/components/styles/modules/components/CategoryList.module.scss'

const CategoryList = (props) => {
  const { items, openState } = props
  const addClass = props.addClass || []
  const childAddClass = props.childAddClass || []

  return (
    <nav className={classNames(styles.categoryListWrap, ...addClass)}>
      <ul
        className={classNames(
          styles.categoryList,
          { [`${styles.openedCategoryList}`]: openState },
          ...childAddClass
        )}
      >
        {items.map((item) => (
          <li key={item.name}>{ExLink(item)}</li>
        ))}
      </ul>
    </nav>
  )
}

export default CategoryList
