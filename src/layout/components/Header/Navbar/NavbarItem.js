import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);
function NavbarItem({ title, to }) {
    return (
        <li className={cx('navbar-item')}>
            <NavLink className={(nav) => cx('title', { active: nav.isActive })} to={to}>
                {title}
            </NavLink>
        </li>
    );
}

export default NavbarItem;
