import Link from 'next/link'
import CategoryList from '~/components/elements/CategoryList'
import { Menu } from '@material-ui/icons'
import styles from '~/components/styles/modules/layouts/Header.module.scss'

const HeaderBar = () => (
  <>
    <input className={styles.headerOpenerTrigger} id="gNavOpenerTrigger" type="checkbox"/>
    <div className={styles.header_bar}>
      <h1 className={styles.header_siteTitle}>
        <Link href="/">
          <a>
            <span className="ja">千柩堂</span>
            <span className="en">Chikyudo</span>
          </a>
        </Link>
      </h1>
      <label htmlFor="gNavOpenerTrigger" className={styles.header_openMenu} >
      <span className="hidden">Menu</span>
          <Menu />
      </label>
    </div>
  </>
)

const getNavItems = () => {
  return [
    { name: 'About', path: '/about' },
    { name: 'Works', path: '/works' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contacts', path: 'mailto:masakichikashi@chikyudo.org' },
  ]
}

const NavBar = () => (
  <CategoryList items={getNavItems()} addClass={[styles.categoryListWrap]} />
)

const Header = () => (
  <header className={styles.header}>
    <HeaderBar />
    <NavBar />
  </header>
)

export default Header
