import InjektionenBerlin from '@/components/InjektionenBerlin';
import InjektionenServices from '@/components/InjektionenServices';
import InjektionenTermin from '@/components/InjektionenTermin';

export const metadata = {
    title: 'Injectionen',
    description:
        'Kosmetische Injektionen in Berlin Mitte - professionelle Behandlungen mit Botulinumtoxin, Hyaluronsäure und Mesotherapie für natürliche Schönheit und strahlendes Aussehen.',
};

const Injektionen = () => {
    return (
        <>
            <InjektionenBerlin />
            <InjektionenServices />
            <InjektionenTermin />
        </>
    );
};

export default Injektionen;
