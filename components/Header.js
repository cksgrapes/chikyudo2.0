import Link from 'next/link';
import ExLink from '~/components/elements/ExLink';
import CategoryList from '~/components/elements/CategoryList';
import { Menu } from '@material-ui/icons';
import styles from '~/components/styles/modules/layouts/Header.module.scss'

const HeaderBar = () => (
  <div className={styles.header_bar}>
      <h1 className={styles.header_siteTitle}>
        <Link href="/"><a><span className="ja">千柩堂</span><span className="en">Chikyudo</span></a></Link>
      </h1>
      <button className={styles.header_openMenu} id="headerOpenMenu"><span className="hidden">Menu</span><Menu /></button>
    </div>
);

const getNavItems = () => {
    return [
        { name: 'About', path: '/about' },
        { name: 'Works', path: '/works' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contacts', path: 'mailto:masakichikashi@chikyudo.org' },
    ];
};

const NavBar = () => <CategoryList
  items={getNavItems()}
  addClass={[styles.categoryListWrap]}
/>;

const Header = () => (
  <header className={styles.header}>
    <HeaderBar />
    <NavBar />
  </header>
);

export default Header;
