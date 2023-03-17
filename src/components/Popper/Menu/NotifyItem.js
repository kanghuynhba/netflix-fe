import classNames from 'classnames/bind';
import styles from './NotifyItem.module.scss';

const cx = classNames.bind(styles);

function NotifyItem({ data = [] }) {
    return (
        <li className={cx('wrapper')}>
            <img className={cx('title-card')} src={data.image_src} alt="Tittle Card" />
            <div className={cx('element-text')}>
                <p className={cx('header')}>{data.header}</p>
                <p className={cx('body')}>{data.body}</p>
                <span className={cx('age')}>{data.relative_time}</span>
            </div>
        </li>
    );
}

export default NotifyItem;
