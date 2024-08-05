'use client';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Alert } from '@mui/material';
import CustomInput from './CustomInput';
import fields from './fields';
import validationSchema from './validationSchema';
import CustomCheckbox from './CustomCheckbox';
import scss from './CustomForm.module.scss';

const CustomForm = () => {
    const [statusAlert, setStatusAlert] = useState('');
    const [message, setMessage] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        reset,
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (data) => {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const { message } = await response.json();

        setMessage(message);

        if (response.ok) {
            setStatusAlert('success');
        } else {
            setStatusAlert('error');
        }
    };

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setMessage(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    useEffect(() => {
        reset();
    }, [isSubmitSuccessful, reset]);

    console.log(errors);

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                autoComplete="off"
                className={scss.form}
            >
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

                <CustomCheckbox register={register} errors={errors} />

                <div className={scss.submitButtonWrapper}>
                    <button
                        type="submit"
                        className={scss.submitButton}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'absenden'}
                    </button>
                </div>
            </form>

            {message && (
                <Alert
                    severity={statusAlert}
                    onClose={() => setMessage(null)}
                    onClick={() => setMessage(null)}
                    sx={{
                        cursor: 'pointer',
                        position: 'fixed',
                        right: '20px',
                        top: '20px',
                    }}
                >
                    {message}
                </Alert>
            )}
        </>
    );
};

export default CustomForm;
