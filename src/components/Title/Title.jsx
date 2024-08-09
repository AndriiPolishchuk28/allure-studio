import clsx from 'clsx';
import scss from './Title.module.scss';
import { italiana } from '@/app/ui';

const Title = ({ line, children, className }) => {
    return (
        <h2
            className={clsx(
                italiana.className,
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
