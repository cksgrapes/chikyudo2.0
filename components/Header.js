import Link from 'next/link';
import ExLink from '../components/elements/ExLink';

const HeaderBar = () => (
    <div className="gNavBar">
        <h1 className="header_siteTitle">
            <Link href="/"><a>千柩堂</a></Link>
        </h1>
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

const NavBar = () => (
    <nav className="catListWrap">
        <ul className="catList" id="globalNav">
            {getNavItems().map(item => <li key={item.name}>{ExLink(item)}</li>)}
        </ul>
    </nav>
);

const Header = () => (
    <header className="header">
        <HeaderBar />
        <NavBar />
    </header>
);

export default Header;