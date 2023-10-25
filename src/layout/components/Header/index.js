import classNames from 'classnames/bind';
import Image from '~/components/Image';
import Navbar, { NavbarItem } from './Navbar';
import config from '~/config';
import { Link } from 'react-router-dom';
import Search from './Search';
import { BellIcon, PencilIcon, TransferIcon, AvatarIcon, QuestionIcon } from '~/components/Icons';
import NotifyItem from '~/components/Popper/Menu/NotifyItem';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import MenuItem from '~/components/Popper/Menu/MenuItem';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
function Header() {
    const notifyItem = [
        {
            image_src:
                'https://dnm.nflximg.net/api/v6/kvDymu0eXRyicIuSUzvRrxrm5dU/AAAABYZd1218G-PJiLfl9_fOCjeLg-uc9fkP3taRDa5tlEQisYfNXiZ8nHYpoeM_pCiNO9MIRYPjh4meUpyIgyppkzNBzb7kMJvvNhKoncNAuxrPXK01HYKGVGt7kRgT2LbRP5KmIDkuajEsv04.jpg?r=1c0',
            header: 'New Arrival',
            body: 'Lockwood & Co.',
            relative_time: '1 month ago',
        },
        {
            image_src:
                'https://dnm.nflximg.net/api/v6/kvDymu0eXRyicIuSUzvRrxrm5dU/AAAABV2SFTCWG1psDw2Tza0TxwxThSsSLZeoIje0y3qH-OqhJvuwuOLbx3qtmL1X_gARC3lQv-shnIdLqS-MJfPzgenVW526606CzAwqnHOfYCpSiq9MtPLC3KwkkpJD1_w5wCIDEpAoUXEqyh0.jpg?r=282',
            header: 'New Arrival',
            body: 'You People',
            relative_time: '1 month ago',
        },
        {
            image_src:
                'https://dnm.nflximg.net/api/v6/kvDymu0eXRyicIuSUzvRrxrm5dU/AAAABRJ69pMZC_f39KF4pIU1cMjTxOOMfGw0k7kBvGuCA5Rq3eIhaxUCxZPJXoraNKrTdArGq0vuJ7t28fX9thADrh49IkC6K9x7T31uf800F8X5U7VaSkZVM_3JO6MwTVI1tCoeFXh0efdhCN4.jpg?r=e70',
            header: 'Coutinue Watching',
            body: 'Wednesday',
            relative_time: '1 month ago',
        },
    ];
    const profiles = [
        {
            avatar: 'https://static.wikia.nocookie.net/925fa2de-087e-47f4-8aed-4f5487f0a78c/scale-to-width/755',
            alt: 'Profile 1',
            title: 'Profile 1',
            to: '/SwitchProfile',
        },
        {
            avatar: 'https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg',
            alt: 'Profile 2',
            title: 'Profile 2',
            to: '/SwitchProfile',
        },
        {
            avatar: 'https://ih0.redbubble.net/image.618379802.1473/flat,1000x1000,075,f.u2.jpg',
            alt: 'Profile 3',
            title: 'Profile 3',
            to: '/SwitchProfile',
        },
        {
            avatar: 'https://ih0.redbubble.net/image.618363037.0853/flat,1000x1000,075,f.u2.jpg',
            alt: 'Profile 4',
            title: 'Profile 4',
            to: '/SwitchProfile',
        },
    ];
    const menuItem = [
        ...profiles,
        {
            icon: <PencilIcon />,
            title: 'Manage Profiles',
            to: '/profiles/manage',
        },
        {
            icon: <TransferIcon />,
            title: 'Transfer Profile',
            to: '/account/profile/transfer',
        },
        {
            icon: <AvatarIcon />,
            title: 'Account',
            to: '/YourAccount',
        },
        {
            icon: <QuestionIcon />,
            title: 'Help Center',
            to: '/Help',
        },
        {
            title: 'Sign out of Netflix',
            to: '/SignOut',
            separate: true,
        },
    ];
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        });
    }, []);
    return (
        <header className={cx('wrapper', `${isScroll ? 'black-header' : ''}`)}>
            <div className={cx('inner')}>
                <Link className={cx('logo-link')} to={config.routes.browse}>
                    <img src={images.logo} alt="Netflix" />
                </Link>
                <Navbar className={cx('primary-navbar')}>
                    <NavbarItem title="Home" to={config.routes.browse} />
                    <NavbarItem title="TV Shows" to={config.routes.tvshows} />
                    <NavbarItem title="Movies" to={config.routes.movies} />
                </Navbar>
                <ul className={cx('secondary-navbar')}>
                    <div className={cx('nav-item')}>
                        <Search />
                    </div>
                    <div className={cx('nav-item')}>
                        <Link to={`/Kids`}>Kids</Link>
                    </div>
                    <div className={cx('nav-item')}>
                        <Link to={`/SupscriptionAdd`}>DVD</Link>
                    </div>
                    <Menu items={notifyItem} Component={NotifyItem}>
                        <div className={cx('nav-item')}>
                            <BellIcon className={cx('bell-icon')} />
                        </div>
                    </Menu>
                    <Menu items={menuItem} Component={MenuItem}>
                        <div className={cx('nav-item')}>
                            <div className={cx('account-menu-item')}>
                                <Image
                                    className={cx('profile-icon')}
                                    src="https://occ-0-58-325.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"
                                    alt="Huynh Ba Khang"
                                    fallback="https://i.pinimg.com/564x/ce/1a/68/ce1a68b494cd4914a8e724d40645ac6c.jpg"
                                />
                                <span className={cx('caret')}></span>
                            </div>
                        </div>
                    </Menu>
                </ul>
            </div>
        </header>
    );
}

export default Header;
