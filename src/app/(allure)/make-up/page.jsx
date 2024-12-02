import PermanentMakeUpInBerlinMitte from '@/components/PermanentMakeUpInBerlinMitte';
import PermanentMakeUpInfo from '@/components/PermanentMakeUpInfo';
import PermanentMakeUpServices from '@/components/PermanentMakeUpServices';
import PermanentMakeUpChoiceMaster from '@/components/PermanentMakeUpChoiceMaster';

export const metadata = {
    title: 'Permanent Make Up',
    description:
        'Professionelles Permanent Make-up in Berlin Mitte - individuelle Pigmentierungstechniken für langanhaltende Schönheit und natürliche Ergebnisse im ALLURE Beauty Studio',
};

const MakeUp = () => {
    return (
        <main>
            <PermanentMakeUpInBerlinMitte />
            <PermanentMakeUpInfo />
            <PermanentMakeUpServices />
            <PermanentMakeUpChoiceMaster />
        </main>
    );
};

export default MakeUp;
