import Link from 'next/link';
import Image from 'next/image';
import socialLinks from '../socialLinks.json';
import logo from '@/assets/images/header/logo.svg';
import scss from './FooterInfo.module.scss';
import clsx from 'clsx';
import { italiana } from '@/app/ui';

const FooterInfo = () => {
    const icons = ['instagram1.svg', 'facebook1.svg'];

    return (
        <div className={scss.info}>
            <div className={scss.logo}>
                <Image src={logo} alt="ALLURE" className={scss.logoImage} />
                <span className={clsx(italiana.className, scss.logoTitle)}>
                    ALLURE
                </span>
            </div>

            <p className={clsx(italiana.className, scss.description)}>
                Permanent Make-Up & Beauty
            </p>

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
                                className={scss.socialIcon}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterInfo;
