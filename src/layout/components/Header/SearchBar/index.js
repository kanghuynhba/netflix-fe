import React, { useEffect, useState, useRef } from 'react';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { SearchIcon } from '~/components/Icons';
import styles from './SearchBar.module.scss';
import { useDebounce } from '~/hooks';
import * as searchService from '~/services/searchService';
import HeadlessTippy from '@tippyjs/react/headless';
import SearchItem from './SearchItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function SearchBar() {
    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const [showResult, setShowResult] = useState(true);
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
    const handleHideResult = () => {
        setShowResult(false);
    };
    useEffect(() => {
        window.addEventListener('scroll', function () {
            handleClear();
            setIsOpenSearch(false);
        });
        return () => {
            window.removeEventListener('scroll', function () {
                handleClear();
                setIsOpenSearch(false);
            });
        };
    }, [isOpenSearch]);
    useEffect(() => {
        if (!debounceValue) {
            setSearchResults([]);
            return;
        }

        const fetchApi = async () => {
            const result = await searchService.search(debounceValue);
            setSearchResults(result);
        };
        fetchApi();
    }, [debounceValue]);
    return (
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResults.length > 0}
                render={(attrs) => {
                    if (searchResults.length > 7) {
                        searchResults.splice(7, searchResults.length);
                    }
                    return (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                {searchResults.map(
                                    (result) =>
                                        (result.backdrop_path || result.poster_path) && (
                                            <SearchItem key={result?.id} data={result} />
                                        ),
                                )}
                            </PopperWrapper>
                        </div>
                    );
                }}
                onClickOutside={handleHideResult}
            >
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
            </HeadlessTippy>
        </div>
    );
}

export default SearchBar;
