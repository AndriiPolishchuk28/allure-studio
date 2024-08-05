import clsx from 'clsx';
import scss from './Line.module.scss';

const Line = ({ className }) => {
    return <div className={clsx(scss.line, className)}></div>;
};

export default Line;
