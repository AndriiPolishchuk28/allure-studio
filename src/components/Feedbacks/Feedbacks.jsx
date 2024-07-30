'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import scss from './Feedbacks.module.scss';
import Title from '../Title';

const SampleNextArrow = () => {
    return null;
};

const Feedbacks = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        // dotsClass: 'dots',
        customPaging: () => <div className={scss.custom_dot}></div>,
        appendDots: (dots) => (
            <div className={scss.dotsContainer} style={{ bottom: '-3px' }}>
                <ul>{dots}</ul>
            </div>
        ),
    };
    return (
        <div className={scss.slider_container} id="test">
            <Title>SIE REDEN ÜBER UNS</Title>
            <Slider {...settings}>
                <div className={scss.review_1}>
                    <div className={scss.ellipse}>
                        <p className={scss.text_1}>
                            ”Liebe Uliyana, gestern war ich zur meiner
                            Powderbrows bei dir. Ich danke dir von Herzen. Ich
                            ben Mega zufrieden und freue mich schon auf den
                            Herbst wenn du meine Lippen nachbehandelst. Ich
                            fühle mich bei dir in sichern Händen, du bist sehr
                            professionell und deine Arbeit überzeugt mich immer
                            wieder super!”{' '}
                        </p>
                    </div>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
            </Slider>
        </div>
    );
};

export default Feedbacks;
