/* eslint-disable array-callback-return */
import classNames from 'classnames/bind';
import styles from './Row.module.scss';
import SliderItem from './SliderItem';
import { useEffect, useState } from 'react';
import * as rowService from '~/services/rowService';
import requests from '~/utils/routes';

const cx = classNames.bind(styles);
function Row({ title, fetch }) {
    const [movies, setMovies] = useState([]);
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
            <div className={cx('slider-container')}>
                {movies.map((movie) => (
                    <SliderItem key={movie?.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Row;
