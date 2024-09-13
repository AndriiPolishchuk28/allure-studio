import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import arrowLeft from '../../../../public/icons/arrow-left.svg';
import arrowRight from '../../../../public/icons/arrow-right.svg';
import scss from './ServiceModal.module.scss';

const ServiceModal = ({
    title,
    titleModal,
    imagesList,
    descriptionModal,
    priceList,
}) => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: (
            <Image
                src={arrowRight}
                alt="Arrow right"
                className={scss.arrowRight}
            />
        ),
        prevArrow: (
            <Image
                src={arrowLeft}
                alt="Arrow left"
                className={scss.arrowLeft}
            />
        ),
    };
    return (
        <div className={scss.service}>
            <h3 className={scss.title}>{titleModal ? titleModal : title}</h3>
            <p className={scss.description}>{descriptionModal}</p>
            <div className={scss.imageList}>
                <Slider {...settings}>
                    {imagesList.map(({ before, after }, index) => (
                        <div key={index}>
                            <div className={scss.imageWrapper}>
                                <div className={scss.imageItem}>
                                    <Image
                                        src={before}
                                        alt="Before"
                                        className={scss.image}
                                    />
                                    <div className={scss.labelWrapper}>
                                        voher
                                    </div>
                                </div>
                                <div className={scss.imageItem}>
                                    <Image
                                        src={after}
                                        alt="After"
                                        className={scss.image}
                                    />
                                    <div className={scss.labelWrapper}>
                                        naher
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
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
