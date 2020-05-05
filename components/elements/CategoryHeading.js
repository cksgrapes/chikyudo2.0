import { useState } from 'react'
import CategoryList from '~/components/elements/CategoryList'
import styles from '~/components/styles/modules/layouts/Post.module.scss'
import generalStyles from '~/components/styles/modules/layouts/General.module.scss'
import classNames from 'classnames'
import { ExpandMore } from '@material-ui/icons'

const getNavItems = () => {
  return [
    { name: 'Books', path: '/books' },
    { name: 'Games', path: '/games' },
    { name: 'Photos', path: '/photo' },
    { name: 'Tips', path: '/blog/tips' },
    { name: 'Journal', path: '/blog/journal' },
    { name: 'Blog', path: '/blog' },
    { name: 'Information', path: '/blog/information' }
  ]
}

const CategoryHeading = (props) => {
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
        {props.name}
        <ExpandMore />
      </h1>
      {props.description ? (
        <p className={styles.post_subHeading}>{props.description}</p>
      ) : null}
      <CategoryList items={getNavItems()} openState={openState} />
    </div>
  )
}

CategoryHeading.defaultProps = {
  name: 'Category Name',
  description: '',
}

export default CategoryHeading
