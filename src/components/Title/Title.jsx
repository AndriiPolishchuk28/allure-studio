import clsx from 'clsx';
import scss from './Title.module.scss';

const Title = ({ line, children, className }) => {
    return (
        <h2
            className={clsx(
                scss.title,
                line && scss.titleLine,
                className && className
            )}
        >
            {children}
        </h2>
    );
};

export default Title;
