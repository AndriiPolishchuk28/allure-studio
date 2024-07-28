import scss from './Permanent.module.scss';
// import Image from 'next/image';

const Permanent = () => {
    return (
        <section className={scss.section}>
            <div className={scss.wrapper_text}>
                <h1 className={scss.title_text}>PERMANENT SCHÖN MIT ALLURE</h1>
                <h2 className={scss.subtitle_text}>
                    Permanent Make-Up &amp Beauty
                </h2>
                <p className={scss.text_owner}>by Uliana Eremenko</p>
            </div>
            {/* <Image
                src="/img/fr.jpg"
                alt="Description of the image"
                width={299} // Specify the width of the image
                height={299}
            /> */}
        </section>
    );
};

export default Permanent;
