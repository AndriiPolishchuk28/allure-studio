import clsx from 'clsx';
import Line from './Line';
import scss from './ContactsLocation.module.scss';
import Link from 'next/link';

const ContactsLocation = () => {
    return (
        <section className={scss.section}>
            <Line className={scss.lineDesk} />
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.3241053470215!2d13.391171676228943!3d52.52756993566953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851ea54f55c63%3A0xa0d460d63630a4ec!2sALLURE%20Permanent%20Make-Up%20%26%20Beauty!5e0!3m2!1sru!2sua!4v1722186837881!5m2!1sru!2sua"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={scss.map}
            ></iframe>
            <div className={scss.contactsList}>
                <div className={scss.contactsItem}>
                    <p className={scss.contactsItemTitle}>Adresse</p>
                    <div className={scss.contactsItemInfo}>
                        <svg className={scss.contactsItemIcon}>
                            <use href="/icons/icons.svg#icon-location"></use>
                        </svg>
                        <p className={scss.contactsItemData}>
                            Linienstraße 154A, 10115 Berlin-Mitte
                        </p>
                    </div>
                    <Line className={scss.line} />
                </div>
                <div className={scss.contactsItemBottom}>
                    <div className={scss.contactsItem}>
                        <p className={scss.contactsItemTitle}>Kontakt</p>
                        <div className={scss.contactsItemWrapper}>
                            <div className={scss.contactsItemInfo}>
                                <svg className={scss.contactsItemIcon}>
                                    <use href="/icons/icons.svg#icon-phone"></use>
                                </svg>
                                <p className={scss.contactsItemData}>
                                    +49 (0) 176 700 29 740
                                </p>
                            </div>
                            <div className={scss.contactsItemInfo}>
                                <svg className={scss.contactsItemIcon}>
                                    <use href="/icons/icons.svg#icon-email"></use>
                                </svg>
                                <p className={scss.contactsItemData}>
                                    <Link href="mailto:uliana.eremenko@allure-studio.de">
                                        uliana.eremenko@allure-studio.de
                                    </Link>
                                </p>
                            </div>
                        </div>

                        <Line className={clsx(scss.line, scss.lineDesk)} />
                    </div>
                    <div className={scss.contactsItem}>
                        <p className={scss.contactsItemTitle}>Öffnungszeiten</p>
                        <div className={scss.contactsItemInfo}>
                            <svg
                                className={clsx(
                                    scss.contactsItemIcon,
                                    scss.contactsItemIconStroke
                                )}
                            >
                                <use href="/icons/icons.svg#icon-time"></use>
                            </svg>
                            <p className={scss.contactsItemData}>
                                MO. - SA.: nach Terminvereinbarung
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactsLocation;
