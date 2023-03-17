import { faClose, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Search() {
    return (
        <div className={cx('search-box')}>
            <button className={cx('search-btn')}>
                <SearchIcon />
            </button>
            <div className={cx('search-input')}>
                <SearchIcon />
                <input placeholder="Titles,people,genres" />
                <span className={cx('close-icon')}>
                    <FontAwesomeIcon icon={faClose} />
                </span>
            </div>
        </div>
    );
}

export default Search;
