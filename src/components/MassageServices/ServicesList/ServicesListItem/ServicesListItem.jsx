import PageTitle from '@/components/PageTitle';
import scss from './ServicesListItem.module.scss';
import Image from 'next/image';

const ServicesListItem = ({ id, title, image, description, onClick }) => {
    return (
        <li className={scss.item}>
            <PageTitle style={{ textAlign: 'center' }}>{title}</PageTitle>
            <Image src={image} alt={title} className={scss.image} />
            <p className={scss.description}>{description}</p>
            <div className={scss.buttonWrapper}>
                <button
                    onClick={() => onClick(id)}
                    className={scss.modalButton}
                >
                    zum service
                </button>
            </div>
        </li>
    );
};

export default ServicesListItem;
