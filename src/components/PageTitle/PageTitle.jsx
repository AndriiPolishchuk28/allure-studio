import clsx from 'clsx';
import scss from './PageTitle.module.scss';

const PageTitle = ({ children, className, ...rest }) => {
    return (
        <h3 {...rest} className={clsx(scss.title, className && className)}>
            {children}
        </h3>
    );
};

export default PageTitle;
