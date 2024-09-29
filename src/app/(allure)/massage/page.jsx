import MassagenInBerlinMitte from '@/components/MassagenInBerlinMitte';
import MassagenStudio from '@/components/MassagenStudio';
import MassageServices from '@/components/MassageServices';

export const metadata = {
    title: 'Massagen',
};

const Massage = () => {
    return (
        <main>
            <MassagenInBerlinMitte />
            <MassageServices />
            <MassagenStudio />
        </main>
    );
};

export default Massage;
