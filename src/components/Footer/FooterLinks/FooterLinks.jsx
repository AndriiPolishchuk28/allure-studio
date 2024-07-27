import Link from 'next/link';
import links from '../mainLinks.json';
import scss from './FooterLinks.module.scss';

const FooterLinks = () => {
    return (
        <ul className={scss.links}>
            {links.map(({ label, href }) => (
                <li key={label}>
                    <Link href={href} className={scss.linksItem}>
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default FooterLinks;
