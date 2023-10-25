/* eslint-disable array-callback-return */
import classNames from 'classnames/bind';
import styles from './Row.module.scss';
import SliderItem from './SliderItem';
import { useEffect, useRef, useState } from 'react';
import * as rowService from '~/services/rowService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const handleNext = () => {};
function Row({ title, fetch }) {
    const [movies, setMovies] = useState([]);
    const listRef = useRef();
    // Get API Row
    useEffect(() => {
        const fetchApi = async () => {
            const results = await rowService.row(fetch);
            if (results) {
                setMovies(results);
            }
        };
        fetchApi();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('row-header')}>{title}</h2>
            <div className={cx('slider-container')} ref={listRef}>
                {movies.map((movie) => (
                    <SliderItem key={movie?.id} movie={movie ? movie : ''} />
                ))}
            </div>
            <span className={cx('next')} onClick={handleNext}>
                <FontAwesomeIcon icon={faAngleRight} />
            </span>
        </div>
    );
}

export default Row;
