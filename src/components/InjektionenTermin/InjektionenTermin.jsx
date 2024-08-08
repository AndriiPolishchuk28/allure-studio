import Container from '../Container';
import CustomForm from '../CustomForm';
import PageTitle from '../PageTitle';
import scss from './InjektionenTermin.module.scss';
import { montserrat } from '@/app/ui';
import clsx from 'clsx';

const InjektionenTermin = () => {
    return (
        <section className={scss.section}>
            <Container>
                <div className={scss.wrapper_text}>
                    <PageTitle className={scss.page_title}>
                        Wichtige Information zur Terminvereinbarung
                    </PageTitle>
                    <p className={clsx(montserrat.className, scss.termin_text)}>
                        Eine Anmeldung für Injektionen erfolgt ausschließlich
                        nach Einreichung Ihrer Anfrage. Danach werden wir uns
                        mit Ihnen in Verbindung setzen und einen Termin
                        vereinbaren. Derzeit ist die Verfügbarkeit freier
                        Termine sehr begrenzt.
                    </p>
                    <PageTitle className={scss.page_title}>
                        Tragen Sie einfach hier Ihre Informationen ein, und wir
                        werden uns bei Ihnen melden
                    </PageTitle>
                </div>
                <div className={scss.form_wrapper}>
                    <CustomForm />
                </div>
            </Container>
        </section>
    );
};

export default InjektionenTermin;
