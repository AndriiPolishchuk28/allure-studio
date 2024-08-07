import scss from './InjektionenBerlin.module.scss';
import Image from 'next/image';
import { injektionen } from '@/assets/images/injektionen';
import PageTitle from '../PageTitle';

const InjektionenBerlin = () => {
    return (
        <section className={scss.section}>
            <div className={scss.title_wrapper}>
                <div className={scss.text_wrapper}>
                    <PageTitle>KOSMETISCHE INJEKTIONEN</PageTitle>
                    <p>
                        Wir führen Injektionen mit den Botulinumtoxin,
                        Hyloronsäure und Mesotherapie durch. Die
                        unterschiedlichen Anwendungen reduzieren Fälltchen,
                        durch die Fett-weg Spritzen wird das Fett in der
                        Körperregion reduziert und mit der Filling-Methode
                        werden eure zum Beispiel Lippen aufgefüllt.
                    </p>
                </div>
                <Image
                    className={scss.image}
                    src={injektionen}
                    alt="Injektionen photo"
                />
            </div>
        </section>
    );
};

export default InjektionenBerlin;
