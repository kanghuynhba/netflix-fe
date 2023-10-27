import React, { useEffect, useState, useRef } from 'react';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { SearchIcon } from '~/components/Icons';
import styles from './SearchBar.module.scss';
import { useDebounce } from '~/hooks';
import * as searchService from '~/services/searchService';

const cx = classNames.bind(styles);

function SearchBar() {
    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const debounceValue = useDebounce(searchValue, 500);

    const inputRef = useRef();

    const handleOpenSearch = () => {
        setIsOpenSearch(true);
    };
    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };
    const handleClosed = (e) => {
        e.stopPropagation();
    };
    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
        if (searchValue) {
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', function () {
            setIsOpenSearch(false);
        });
        return () => {
            window.removeEventListener('scroll', function () {
                setIsOpenSearch(false);
            });
        };
    }, [isOpenSearch]);
    useEffect(() => {
        if (!debounceValue) {
            setSearchResults([]);
            return;
        } else {
        }

        const fetchApi = async () => {
            const result = await searchService.search(debounceValue);
            setSearchResults(result);
        };
        fetchApi();
    }, [debounceValue]);
    console.log(searchResults);
    return (
        <div className={cx('search-box')} onClick={handleClosed}>
            <button className={cx('search-btn')} onClick={handleOpenSearch}>
                <SearchIcon className={cx('search-icon')} />
            </button>
            <input
                ref={inputRef}
                value={searchValue}
                onChange={handleInputChange}
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

export default SearchBar;
