import Link from 'next/link';
import navigationItems from '../navigationData';
import scss from './Navs.module.scss';

const Navs = ({ onClose }) => {
    return (
        <ul className={scss.navigation}>
            {navigationItems.map(({ label, href }) => (
                <li key={label} className={scss.navigationItem}>
                    <Link
                        href={href}
                        onClick={onClose}
                        className={scss.navigationLink}
                    >
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Navs;
