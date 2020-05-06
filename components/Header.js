import { useState } from 'react'
import Link from 'next/link'
import { Menu } from '@material-ui/icons'

import CategoryList from '~/components/elements/CategoryList'
import styles from '~/components/styles/modules/layouts/Header.module.scss'

const getNavItems = () => {
  return [
    { name: 'About', path: '/about' },
    { name: 'Works', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contacts', path: 'mailto:masakichikashi@chikyudo.org' },
  ]
}

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  const toggleNav = () => {
    setOpen(!isOpen)
  }

  return (
    <header className={styles.header}>
      <div className={styles.header_bar}>
        <h1 className={styles.siteTitle}>
          <Link href="/">
            <a>
              <span>千柩堂</span>
              <span className={styles.siteTitle_en}>Chikyudo</span>
            </a>
          </Link>
        </h1>
        <button
          type="button"
          className={styles.header_openMenu}
          onClick={toggleNav}
        >
          <span className="hidden">Menu</span>
          <Menu />
        </button>
      </div>
      <CategoryList
        items={getNavItems()}
        addClass={[styles.categoryListWrap]}
        childAddClass={[
          styles.categoryList,
          { [`${styles.openedCategoryList}`]: isOpen },
        ]}
        openState={isOpen}
      />
    </header>
  )
}

export default Header
