import classNames from 'classnames/bind';
import styles from './SearchItem.module.scss';

const cx = classNames.bind(styles);
function poster(data) {
    if (!data.backdrop_path) {
        return data.poster_path;
    }
    return data.backdrop_path;
}
function SearchItem({ data = [] }) {
    return (
        <li className={cx('wrapper')}>
            <img
                className={cx('title-card')}
                src={`https://image.tmdb.org/t/p/original${poster(data)}`}
                alt={data?.title}
            />
            <div className={cx('element-text')}>
                <p className={cx('header')}>{data?.title}</p>
            </div>
        </li>
    );
}

export default SearchItem;
