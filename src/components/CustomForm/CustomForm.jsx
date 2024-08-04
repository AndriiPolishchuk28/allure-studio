'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import CustomInput from './CustomInput';
import checkIcon from '@/assets/check.svg';
import fields from './fields';
import validationSchema from './validationSchema';
import scss from './CustomForm.module.scss';

const CustomForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={scss.wrapper}>
                {fields.map(({ name, placeholder, textarea }) => (
                    <CustomInput
                        key={name}
                        register={register}
                        name={name}
                        textarea={textarea}
                        placeholder={placeholder}
                        errorText={errors[name]?.message}
                    />
                ))}
            </div>

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
                            errors.checkbox?.message && scss.errorBorder
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

                {errors.checkbox?.message && <p>{errors.checkbox?.message}</p>}

                <Link href="#" className={scss.checkboxLink}>
                    Zur Datenschutzerklärung
                </Link>
            </div>
            <div className={scss.submitButtonWrapper}>
                <button type="submit" className={scss.submitButton}>
                    absenden
                </button>
            </div>
        </form>
    );
};

export default CustomForm;
