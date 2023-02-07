import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);
function Navbar({ children }) {
    return <ul className={cx('primary-navbar')}>{children}</ul>;
}

export default Navbar;
