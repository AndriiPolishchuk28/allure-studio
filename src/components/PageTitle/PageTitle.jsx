import scss from './PageTitle.module.scss';

const PageTitle = ({ children, ...rest }) => {
    return (
        <h3 {...rest} className={scss.title}>
            {children}
        </h3>
    );
};

export default PageTitle;
