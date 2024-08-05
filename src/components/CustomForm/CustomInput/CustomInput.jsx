import clsx from 'clsx';
import scss from './CustomInput.module.scss';

const CustomInput = ({ register, name, textarea, errorText, ...rest }) => {
    return (
        <div className={scss.inputWrapper}>
            {textarea ? (
                <textarea
                    {...rest}
                    type="text"
                    {...register(name)}
                    className={clsx(
                        scss.textarea,
                        errorText && scss.errorBorder
                    )}
                ></textarea>
            ) : (
                <input
                    {...rest}
                    type="text"
                    {...register(name)}
                    className={clsx(scss.input, errorText && scss.errorBorder)}
                />
            )}

            {errorText && <p className={scss.errorText}>{errorText}</p>}
        </div>
    );
};

export default CustomInput;
