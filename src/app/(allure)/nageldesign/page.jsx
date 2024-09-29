import NagelDesignBerlin from '@/components/NageldesignBerlin';
import NagelDesignFindUs from '@/components/NagelDesignFindUs';
import NagelDesignServices from '@/components/NagelDesignServices';

export const metadata = {
    title: 'Nageldesign',
};

const NagelDesign = () => {
    return (
        <main>
            <NagelDesignBerlin />
            <NagelDesignServices />
            <NagelDesignFindUs />
        </main>
    );
};

export default NagelDesign;
