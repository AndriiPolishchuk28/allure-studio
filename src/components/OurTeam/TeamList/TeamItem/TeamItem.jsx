import Link from 'next/link';
import Image from 'next/image';
import scss from './TeamItem.module.scss';

const TeamItem = ({ name, description, image, facebook, instagram }) => {
    return (
        <li className={scss.item}>
            <div className={scss.personInfo}>
                <Image
                    src={image}
                    width={159}
                    height={200}
                    alt={name}
                    priority
                    className={scss.image}
                />
                <div className={scss.person}>
                    <p className={scss.name}>{name}</p>
                    <div className={scss.socials}>
                        <Link
                            href={facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/icons/facebook.svg"
                                width={13}
                                height={13}
                                alt="facebook"
                                className={scss.socialIcon}
                            />
                        </Link>
                        <Link
                            href={instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/icons/instagram.svg"
                                width={13}
                                height={13}
                                alt="facebook"
                                className={scss.socialIcon}
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <p className={scss.description}>{description}</p>
        </li>
    );
};

export default TeamItem;
