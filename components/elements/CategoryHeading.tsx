import { useState } from 'react'
import { ExpandMore } from '@material-ui/icons'
import classNames from 'classnames'
import CategoryList from '~/components/elements/CategoryList'
import styles from '~/components/styles/modules/layouts/Post.module.scss'
import generalStyles from '~/components/styles/modules/layouts/General.module.scss'

interface NavItemsParams {
  name: string
  path: string
  type: 'works' | 'blog'
}

const navItems: NavItemsParams[] = [
  {
    name: 'Works',
    path: '/works',
    type: 'works',
  },
  {
    name: 'Books',
    path: '/works/books',
    type: 'works',
  },
  {
    name: 'Games',
    path: '/works/games',
    type: 'works',
  },
  {
    name: 'Photos',
    path: '/works/photos',
    type: 'works',
  },
  { name: 'Blog', path: '/blog', type: 'blog' },
  {
    name: 'Tips',
    path: '/blog/tips',
    type: 'blog',
  },
  {
    name: 'Journal',
    path: '/blog/journal',
    type: 'blog',
  },
  {
    name: 'Information',
    path: '/blog/information',
    type: 'blog',
  },
]

interface GetNavItemsParams {
  type: 'works' | 'blog'
  items: {
    name: string
    path: string
    type: 'works' | 'blog'
  }[]
}

const getNavItems = (params: GetNavItemsParams) => {
  let filteringItems: {
    name: string
    path: string
    type: 'works' | 'blog'
  }[]

  if (params.type) {
    filteringItems = params.items.filter((item) => item.type === params.type)
  }

  return filteringItems || params.items
}

type CategoryHeadingProps = {
  name: string
  description: string
  type: 'works' | 'blog'
}

const CategoryHeading = ({ name, description, type }: CategoryHeadingProps) => {
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
      <CategoryList
        items={getNavItems({ type: type, items: navItems })}
        openState={openState}
      />
    </div>
  )
}

CategoryHeading.defaultProps = {
  name: 'Category Name',
  description: '',
}

export default CategoryHeading
