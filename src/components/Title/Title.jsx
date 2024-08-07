import clsx from 'clsx';
import scss from './Title.module.scss';

const Title = ({ line, children, lineImpressum }) => {
    return (
        <h2
            className={clsx(
                scss.title,
                line && scss.titleLine,
                lineImpressum && scss.impressumLine
            )}
        >
            {children}
        </h2>
    );
};

export default Title;
