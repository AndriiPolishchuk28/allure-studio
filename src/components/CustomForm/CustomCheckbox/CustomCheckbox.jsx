import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import checkIcon from '@/assets/check.svg';
import scss from './CustomCheckbox.module.scss';

const CustomCheckbox = ({ register, errorText }) => {
    return (
        <div className={scss.checkboxWrapper}>
            <input
                type="checkbox"
                id="checkbox"
                {...register('checkbox')}
                className={scss.inputCheckbox}
            />
            <label htmlFor="checkbox" className={scss.checkboxLabel}>
                <span
                    className={clsx(
                        scss.checkbox,
                        errorText && scss.errorBorder
                    )}
                >
                    <Image
                        src={checkIcon}
                        alt="check icon"
                        className={scss.checkboxIcon}
                    />
                </span>
                <p className={scss.checkboxText}>
                    Ich habe die Datenschutzerklärung zur Kenntnis genommen.
                </p>
            </label>

            <Link href="#" className={scss.checkboxLink}>
                Zur Datenschutzerklärung
            </Link>
        </div>
    );
};

export default CustomCheckbox;
