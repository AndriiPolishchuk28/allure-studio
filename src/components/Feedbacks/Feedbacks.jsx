'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import clsx from 'clsx';
import feedbacks from './feedbacks.json';
import scss from './Feedbacks.module.scss';
import Title from '../Title';
import { useEffect } from 'react';

const SampleNextArrow = () => {
    return null;
};

const Feedbacks = () => {
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            .slick-dots li.slick-active>div {
                background-color: #e3dedb;
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
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
                {feedbacks.map(({ feedback, classReview, ellipse, text }) => (
                    <div
                        key={classReview}
                        className={clsx(scss.base_review, scss[classReview])}
                    >
                        <div className={clsx(scss.base_ellipse, scss[ellipse])}>
                            <p className={clsx(scss.base_text, scss[text])}>
                                {feedback}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Feedbacks;
