import React, { useEffect, useState, useRef } from 'react';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const inputRef = useRef();

    const handleOpenSearch = () => {
        setIsOpenSearch(!isOpenSearch);
    };
    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };
    const handleClosed = (e) => {
        e.stopPropagation();
    };
    useEffect(() => {
        const handleClick = () => {
            if (isOpenSearch) {
                setIsOpenSearch(!isOpenSearch);
            }
        };
        window.addEventListener('click', handleClick);
        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [isOpenSearch]);
    return (
        <div className={cx('search-box')} onClick={handleClosed}>
            <button className={cx('search-btn')} onClick={handleOpenSearch}>
                <SearchIcon className={cx('search-icon')} />
            </button>
            <input
                ref={inputRef}
                value={searchValue}
                onChange={(e) => {
                    setSearchValue(e.target.value);
                }}
                className={cx('search-input', `${isOpenSearch ? 'toggle' : ''}`)}
                placeholder="Titles, people, genres"
            />
            {!!searchValue && (
                <span className={cx('clear')} onClick={handleClear}>
                    <FontAwesomeIcon icon={faClose} />
                </span>
            )}
        </div>
    );
}

export default Search;
