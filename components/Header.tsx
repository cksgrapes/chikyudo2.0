import { useState, ReactElement } from 'react'
import Link from 'next/link'
import { Menu } from '@material-ui/icons'
import CategoryList from '~/components/elements/CategoryList'
import styles from '~/components/styles/modules/layouts/Header.module.scss'

const getNavItems: { name: string; path: string }[] = [
  { name: 'About', path: '/about' },
  { name: 'Works', path: '/works' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

const Header: React.FC = (): ReactElement => {
  const [isOpen, setOpen] = useState(false)

  const toggleNav = (): void => {
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
        items={getNavItems}
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
