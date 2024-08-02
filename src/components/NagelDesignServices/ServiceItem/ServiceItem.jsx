import PageTitle from '@/components/PageTitle';
import Image from 'next/image';
import scss from './ServiceItem.module.scss';

const ServiceItem = ({ image, title, description, handleClick, id }) => {
    return (
        <li className={scss.item}>
            <PageTitle style={{ textAlign: 'center' }}>{title}</PageTitle>
            <Image src={image} alt={title} />
            <p className={scss.description}>{description}</p>
            <div className={scss.wrapper_btn}>
                <button
                    onClick={() => handleClick(id)}
                    className={scss.btn}
                    type="button"
                >
                    Zum Service
                </button>
            </div>
        </li>
    );
};

export default ServiceItem;
