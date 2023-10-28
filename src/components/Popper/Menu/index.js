import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function Menu({ children, items = [], Component, parent = '' }) {
    const renderItem = () => {
        if (items.length > 7) {
            items.splice(7, items.length);
        }
        return items.map((item, index) => <Component key={index} data={item} />);
    };
    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper classNames={cx('menu-popper')}>{renderItem()}</PopperWrapper>
        </div>
    );
    return (
        <Tippy interactive offset={[0, 15]} delay={[0, 100]} placement="bottom-end" render={renderResult}>
            {children}
        </Tippy>
    );
}

export default Menu;
