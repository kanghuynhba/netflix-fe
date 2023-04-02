import classNames from 'classnames/bind';
import styles from './Row.module.scss';

const cx = classNames.bind(styles);
function SliderItem({ movie }) {
    return (
        <div className={cx('wrapper-item')}>
            <img
                className={cx('item-image')}
                src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
                alt={movie.title}
            />
            {/* <div className={cx('item-title')}>{movie?.name || movie?.title}</div> */}
        </div>
    );
}

export default SliderItem;
