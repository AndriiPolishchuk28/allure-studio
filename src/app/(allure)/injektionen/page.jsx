import InjektionenBerlin from '@/components/InjektionenBerlin';
import InjektionenServices from '@/components/InjektionenServices';
import InjektionenTermin from '@/components/InjektionenTermin';

export const metadata = {
    title: 'Injectionen',
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
