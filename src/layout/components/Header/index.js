import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Navbar, { NavbarItem } from './Navbar';
import config from '~/config';
import { Link } from 'react-router-dom';
import Search from './Search';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link className={cx('logo-link')} to={config.routes.home}>
                    <img src={images.logo} alt="Netflix" />
                </Link>
                <Navbar>
                    <NavbarItem title="Home" to={config.routes.home} />
                    <NavbarItem title="Movies" to={config.routes.movies} />
                    <NavbarItem title="TV Shows" to={config.routes.tvshows} />
                </Navbar>
                <ul className={cx('secondary-navbar')}>
                    <Search />
                </ul>
            </div>
        </header>
    );
}

export default Header;
