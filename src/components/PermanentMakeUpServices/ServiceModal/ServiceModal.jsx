import Image from 'next/image';
import { photo_3 } from '@/assets/images/make-up';
import scss from './ServiceModal.module.scss';

const ServiceModal = ({ title, titleModal, descriptionModal, priceList }) => {
    return (
        <div className={scss.service}>
            <h3 className={scss.title}>{titleModal ? titleModal : title}</h3>
            <p className={scss.description}>{descriptionModal}</p>
            <div className={scss.imageWrapper}>
                <div className={scss.imageItem}>
                    <Image src={photo_3} alt="Woman" className={scss.image} />
                    <div className={scss.labelWrapper}>voher</div>
                </div>
                <div className={scss.imageItem}>
                    <Image src={photo_3} alt="Woman" className={scss.image} />
                    <div className={scss.labelWrapper}>naher</div>
                </div>
            </div>

            <ul className={scss.priceList}>
                {priceList.map(
                    ({ service, processing, time, price }, index) => (
                        <li key={index} className={scss.priceListItem}>
                            <div className={scss.serviceWrapper}>
                                <h4 className={scss.serviceTitle}>{service}</h4>
                                {processing && (
                                    <p className={scss.serviceProcessing}>
                                        {processing}
                                    </p>
                                )}
                            </div>
                            <div className={scss.timePrice}>
                                {time && (
                                    <span className={scss.time}>{time}</span>
                                )}
                                <p className={scss.price}>{`${price} euro`}</p>
                            </div>
                        </li>
                    )
                )}
            </ul>
        </div>
    );
};

export default ServiceModal;
