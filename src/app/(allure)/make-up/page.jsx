import PermanentMakeUpInBerlinMitte from '@/components/PermanentMakeUpInBerlinMitte';
import PermanentMakeUpInfo from '@/components/PermanentMakeUpInfo';
import PermanentMakeUpServices from '@/components/PermanentMakeUpServices';
import PermanentMakeUpChoiceMaster from '@/components/PermanentMakeUpChoiceMaster';

export const metadata = {
    title: 'PMU',
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
