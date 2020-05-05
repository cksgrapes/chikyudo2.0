import ExLink from '~/components/elements/ExLink';
import styles from '~/components/styles/modules/layouts/Footer.module.scss'

const getNavItems = () => {
    return [
        { name: 'Home', path: '/'},
        { name: 'Twitter', path: 'https://twitter.com/masakichikashi' },
        { name: 'Instagram', path: 'https://www.instagram.com/masakichikashi/' },
        { name: 'YouTube', path: 'https://www.youtube.com/channel/UCfN4BiPIfaTzuuX2n1aYyRg' },
        { name: 'Facebook', path: 'https://www.facebook.com/chikyudo.mc/' },
        { name: 'Contacts', path: 'mailto:masakichikashi@chikyudo.org' },
        { name: 'Privacy Policy', path: '/privacy-policy'},
    ];
};

const Footer = () => (
    <footer className={styles.footer}>
        <ul id="menu-footer-menu" className={styles.footerLinks}>
            {getNavItems().map(item => <li key={item.name}>{ExLink(item)}</li>)}
        </ul>
        <p className={styles.copy}>
            <small>© 2019 Masaki Chikashi.</small>
        </p>
    </footer>
);

export default Footer;
