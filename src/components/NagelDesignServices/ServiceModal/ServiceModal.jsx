import PageTitle from '@/components/PageTitle';
import scss from './ServiceModal.module.scss';

const ServiceModal = ({ item }) => {
    const { info, title } = item;

    return (
        <div className={scss.wrapper_content}>
            <PageTitle style={{ textAlign: 'center' }}>{title}</PageTitle>
            <ul className={scss.list_wrapper}>
                {info.map(({ name, price, time }, index) => (
                    <li className={scss.item} key={index}>
                        <h4 className={scss.text_service}>
                            {name}{' '}
                            {time && <span className={scss.time}>{time}</span>}
                        </h4>
                        <p className={scss.text_service}>{price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServiceModal;
