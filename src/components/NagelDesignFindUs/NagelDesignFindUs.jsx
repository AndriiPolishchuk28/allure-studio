import Container from '../Container';
import BenefitsList from './BenefitsList/BenefitsList';
import scss from './NagelDesignFindUs.module.scss';
import data from './data';

const NagelDesignFindUs = () => {
    return (
        <section className={scss.section}>
            <Container>
                <h2 className={scss.title}>
                    WIE FINDEST DU DEIN PERFEKTES NAGELSTUDIO?
                </h2>
                <div className={scss.stick}></div>

                <p className={scss.subtitle}>Darauf solltest du achten</p>
                <ul className={scss.list}>
                    {data.map((item) => (
                        <BenefitsList key={item.title} {...item} />
                    ))}
                </ul>
            </Container>
        </section>
    );
};

export default NagelDesignFindUs;
