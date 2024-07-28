import Title from '../Title';
import scss from './Location.module.scss';

const Location = () => {
    return (
        <section className={scss.location}>
            <Title>wo sind wir</Title>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.3241053470215!2d13.391171676228943!3d52.52756993566953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851ea54f55c63%3A0xa0d460d63630a4ec!2sALLURE%20Permanent%20Make-Up%20%26%20Beauty!5e0!3m2!1sru!2sua!4v1722186837881!5m2!1sru!2sua"
                width="600"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={scss.map}
            ></iframe>
        </section>
    );
};

export default Location;
