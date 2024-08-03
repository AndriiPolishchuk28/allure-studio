import PageTitle from '@/components/PageTitle';
import scss from './ServicesListItem.module.scss';
import Image from 'next/image';

const ServicesListItem = ({ id, title, image, description, onClick }) => {
    return (
        <li className={scss.item}>
            <Image src={image} alt={title} className={scss.image} />
            <div className={scss.info}>
                <PageTitle className={scss.pageTitle}>{title}</PageTitle>
                <p className={scss.description}>{description}</p>
                <div className={scss.buttonWrapper}>
                    <button
                        onClick={() => onClick(id)}
                        className={scss.modalButton}
                    >
                        zum service
                    </button>
                </div>
            </div>
        </li>
    );
};

export default ServicesListItem;
