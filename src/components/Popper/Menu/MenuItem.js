import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <li className={classes}>
            <Link to={data.to} className={cx('menu-link')}>
                {data.hasOwnProperty('avatar') ? (
                    <img className={cx('avatar')} src={data.avatar} alt={data.alt} />
                ) : (
                    <span className={cx(`${data.icon ? 'icon' : ''}`)}>{data.icon}</span>
                )}
                {data.title}
            </Link>
        </li>
    );
}

export default MenuItem;
