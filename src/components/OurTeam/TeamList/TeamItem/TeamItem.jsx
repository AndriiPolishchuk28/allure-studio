'use client';
import Link from 'next/link';
import Image from 'next/image';
import instagramImage from '../../../../../public/icons/instagram.svg';
import facebookImage from '../../../../../public/icons/facebook.svg';
import scss from './TeamItem.module.scss';

const TeamItem = ({ name, description, image, facebook, instagram }) => {
    return (
        <li className={scss.item}>
            <div className={scss.personInfo}>
                <Image src={image} alt={name} priority className={scss.image} />
                <div className={scss.person}>
                    <p className={scss.name}>{name}</p>
                    <div className={scss.socials}>
                        <Link
                            href={facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src={facebookImage}
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
                                src={instagramImage}
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
