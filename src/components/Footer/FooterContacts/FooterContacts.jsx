import contactsData from '../contactsData.json';
import scss from './FooterContacts.module.scss';

const FooterContacts = () => {
    const icons = ['icon-location', 'icon-phone', 'icon-email', 'icon-time'];

    return (
        <div className={scss.contacts}>
            {contactsData.map(({ label }, index) => (
                <li key={label[0]} className={scss.contactsItem}>
                    <svg className={scss.contactIcon}>
                        <use href={`/icons/icons.svg#${icons[index]}`}></use>
                    </svg>
                    <div>
                        {label.map((text) => (
                            <p key={text} className={scss.text}>
                                {text}
                            </p>
                        ))}
                    </div>
                </li>
            ))}
        </div>
    );
};

export default FooterContacts;
