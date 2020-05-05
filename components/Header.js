import { useState } from 'react';
import Link from 'next/link'
import CategoryList from '~/components/elements/CategoryList'
import { Menu } from '@material-ui/icons'
import styles from '~/components/styles/modules/layouts/Header.module.scss'

const getNavItems = () => {
  return [
    { name: 'About', path: '/about' },
    { name: 'Works', path: '/works' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contacts', path: 'mailto:masakichikashi@chikyudo.org' },
  ]
}

const Header = () => {
  const [openState, setOpenState] = useState(false);

  const toggleNav = () => {
    setOpenState(!openState);
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
          <button type="button" className={styles.header_openMenu} onClick={toggleNav}>
            <span className="hidden">Menu</span>
            <Menu />
          </button>
        </div>
        <CategoryList
          items={getNavItems()}
          addClass={[styles.categoryListWrap]}
          childAddClass={[styles.categoryList]}
          openState={openState}
        />
    </header>
  )
}

export default Header
