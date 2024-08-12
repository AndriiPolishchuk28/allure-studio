import Link from 'next/link';
import contactsData from '../contactsData.json';
import scss from './FooterContacts.module.scss';

const FooterContacts = () => {
    const icons = ['icon-location', 'icon-phone', 'icon-email', 'icon-time'];

    return (
        <ul className={scss.contacts}>
            {contactsData.map(({ label, href }, index) => {
                const content = (
                    <>
                        <svg className={scss.contactIcon}>
                            <use
                                href={`/icons/icons.svg#${icons[index]}`}
                            ></use>
                        </svg>
                        <div>
                            {label.map((text) => (
                                <p key={text} className={scss.text}>
                                    {text}
                                </p>
                            ))}
                        </div>
                    </>
                );

                return (
                    <li key={label[0]} className={scss.contactsItem}>
                        {href ? (
                            <Link
                                href={href}
                                rel="noreferrer noopener"
                                className={scss.link}
                            >
                                {content}
                            </Link>
                        ) : (
                            content
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

export default FooterContacts;
