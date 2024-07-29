import scss from './PageTitle.module.scss';

const PageTitle = ({ children }) => {
    return <h2 className={scss.title}>{children}</h2>;
};

export default PageTitle;
