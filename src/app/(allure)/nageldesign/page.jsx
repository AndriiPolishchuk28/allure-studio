import NagelDesignBerlin from '@/components/NageldesignBerlin';
import NagelDesignFindUs from '@/components/NagelDesignFindUs';
import NagelDesignServices from '@/components/NagelDesignServices';

export const metadata = {
    title: 'Nageldesign | Allure studio',
    description:
        'Perfektes Nageldesign in Berlin Mitte - professionelle Maniküre, Pediküre, Nagelverlängerungen und individuelle Designs von erfahrenen Nageldesignerinnen.',
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
