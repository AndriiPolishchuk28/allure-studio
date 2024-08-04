import PageTitle from '@/components/PageTitle';
import Image from 'next/image';
import scss from './ServiceItem.module.scss';

const ServiceItem = ({ image, title, description, handleClick, id }) => {
    return (
        <li className={scss.item}>
            <Image className={scss.image} src={image} alt={title} />
            <div className={scss.wrapper_info}>
                <PageTitle className={scss.page_title}>{title}</PageTitle>
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
            </div>
        </li>
    );
};

export default ServiceItem;
