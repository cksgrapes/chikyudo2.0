import classNames from 'classnames'
import ExLink from '~/components/elements/ExLink'
import styles from '~/components/styles/modules/components/CategoryList.module.scss'

type CategoryListProps = {
  items: {
    name: string
    path: string
  }[]
  openState: boolean
  addClass?: (object | string)[]
  childAddClass?: (object | string)[] //TODO:これあってる？
}

const CategoryList = ({
  items,
  openState,
  addClass,
  childAddClass,
}: CategoryListProps) => {
  return items ? (
    <nav className={classNames(styles.categoryListWrap, ...addClass)}>
      <ul
        className={classNames(
          styles.categoryList,
          { [`${styles.openedCategoryList}`]: openState },
          ...childAddClass
        )}
      >
        {items.map((item) => (
          <li key={item.name}>
            <ExLink item={item} />
          </li>
        ))}
      </ul>
    </nav>
  ) : null
}

export default CategoryList
