import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
    normal = false,
    opacity = false,
    iconOnly = false,
    to,
    href,
    children,
    onClick,
    leftIcon,
    className,
}) {
    let Comp = 'button';
    const classes = cx('wrapper', {
        [className]: className,
        normal,
        opacity,
        iconOnly,
    });
    return (
        <Comp className={classes}>
            <span className={cx('icon')}>{leftIcon}</span>
            {iconOnly || <span className={cx('title')}>{children}</span>}
        </Comp>
    );
}

export default Button;
