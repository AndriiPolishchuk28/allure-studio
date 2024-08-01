import Image from 'next/image';
import { photo_1 } from '@/assets/images/nageldesign';
import scss from './NagelDesignBerlin.module.scss';

const NagelDesignBerlin = () => {
    return (
        <div>
            <Image
                src={photo_1}
                alt="Nageldesign main photo"
                className={scss.image}
            />
        </div>
    );
};

export default NagelDesignBerlin;
