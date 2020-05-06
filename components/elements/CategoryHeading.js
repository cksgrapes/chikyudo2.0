import { useState } from 'react'
import { ExpandMore } from '@material-ui/icons'
import classNames from 'classnames'

import CategoryList from '~/components/elements/CategoryList'

import styles from '~/components/styles/modules/layouts/Post.module.scss'
import generalStyles from '~/components/styles/modules/layouts/General.module.scss'

const getNavItems = (type) => {
  const items = [
    { name: 'Works', path: '/works', type: 'works' },
    { name: 'Books', path: '/books', type: 'works' },
    { name: 'Games', path: '/games', type: 'works' },
    { name: 'Photos', path: '/photos', type: 'works' },
    { name: 'Blog', path: '/blog', type: 'blog' },
    { name: 'Tips', path: '/blog/tips', type: 'blog' },
    { name: 'Journal', path: '/blog/journal', type: 'blog' },
    { name: 'Information', path: '/blog/information', type: 'blog' },
  ]

  let filteringItems
  if (type) {
    filteringItems = items.filter((item) => item.type === type)
  }

  return filteringItems || items
}

const CategoryHeading = (props) => {
  const { name, description, type } = props
  const [openState, setOpenState] = useState(false)

  const toggleNav = () => {
    setOpenState(!openState)
  }

  return (
    <div className={classNames(styles.post, generalStyles.categoryHeading)}>
      <h1
        className={classNames(styles.post_heading, {
          [`${generalStyles.openedCategoryHeading}`]: openState,
        })}
        onClick={toggleNav}
      >
        {name}
        <ExpandMore />
      </h1>
      {description ? (
        <p className={styles.post_subHeading}>{description}</p>
      ) : null}
      <CategoryList items={getNavItems(type)} openState={openState} />
    </div>
  )
}

CategoryHeading.defaultProps = {
  name: 'Category Name',
  description: '',
}

export default CategoryHeading
