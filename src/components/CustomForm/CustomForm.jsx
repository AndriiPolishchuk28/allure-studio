'use client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomInput from './CustomInput';
import fields from './fields';
import validationSchema from './validationSchema';
import scss from './CustomForm.module.scss';
import CustomCheckbox from './CustomCheckbox';

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
        <form onSubmit={handleSubmit(onSubmit)} className={scss.form}>
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

            <CustomCheckbox
                register={register}
                errorText={errors.checkbox?.message}
            />

            <div className={scss.submitButtonWrapper}>
                <button type="submit" className={scss.submitButton}>
                    absenden
                </button>
            </div>
        </form>
    );
};

export default CustomForm;
