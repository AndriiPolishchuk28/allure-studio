import scss from './ServicesList.module.scss';

const ServicesList = ({ service, additional, price }) => {
    return (
        <li className={scss.item}>
            <div className={scss.service_info}>
                <h4 className={scss.service_text}>{service}</h4>
                {additional && <p className={scss.additional}>{additional}</p>}
            </div>
            <p className={scss.price}>{price}</p>
        </li>
    );
};

export default ServicesList;
