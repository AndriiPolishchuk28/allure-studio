import MassagenInBerlinMitte from '@/components/MassagenInBerlinMitte';
import MassagenStudio from '@/components/MassagenStudio';
import MassageServices from '@/components/MassageServices';

export const metadata = {
    title: 'Massagen',
    description:
        'Entspannende Massagen in Berlin Mitte - genießen Sie Wellness, Anti-Stress- und Anti-Cellulite-Massagen von zertifizierten Experten.',
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
