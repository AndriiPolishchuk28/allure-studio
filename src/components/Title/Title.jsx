import clsx from 'clsx';
import scss from './Title.module.scss';

const Title = ({ line, children }) => {
    return (
        <h2 className={clsx(scss.title, line && scss.titleLine)}>{children}</h2>
    );
};

export default Title;
