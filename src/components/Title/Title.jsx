import scss from './Title.module.scss';

const Title = ({ children }) => {
    return <h2 className={scss.title}>{children}</h2>;
};

export default Title;
