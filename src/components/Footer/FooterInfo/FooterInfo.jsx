import Link from 'next/link';
import socialLinks from '../socialLinks.json';
import scss from './FooterInfo.module.scss';
import Image from 'next/image';

const FooterInfo = () => {
    const icons = ['instagram1.svg', 'facebook1.svg'];

    return (
        <div className={scss.info}>
            <div className={scss.logo}>
                <svg className={scss.logoIcon}>
                    <use href="/icons/icons.svg#icon-logo-footer"></use>
                </svg>
                <span className={scss.logoTitle}>ALLURE</span>
            </div>

            <p className={scss.description}>Permanent Make-Up & Beauty</p>

            <ul className={scss.social}>
                {socialLinks.map(({ href, label }, index) => (
                    <li key={label}>
                        <Link
                            href={href}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <Image
                                src={`/icons/${icons[index]}`}
                                width={24}
                                height={24}
                                alt={label}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterInfo;
