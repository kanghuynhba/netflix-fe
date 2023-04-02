import classNames from 'classnames/bind';
import styles from './BillBoard.module.scss';
import { useRef, useEffect, useState } from 'react';
import { AgainIcon, VolumeOffIcon, VolumeOnIcon } from '../Icons';

import Button from '../Button';
import Trailer from '../Trailer';
import * as billboardService from '~/services/billboardService';
import * as trailerService from '~/services/trailerService';
import Content from './Content/Content';

const cx = classNames.bind(styles);
function BillBoard() {
    const [movie, setMovie] = useState();
    const [isReplay, setIsReplay] = useState(false);
    const [volumeClick, setVolumeClick] = useState(false);
    const [showActions, setShowActions] = useState(0);
    const handleOnReplay = () => {
        setIsReplay(!isReplay);
    };
    const handleVolumeClick = () => {
        volumeClick ? trailerRef.current.internalPlayer.mute() : trailerRef.current.internalPlayer.unMute();
        setVolumeClick(!volumeClick);
    };
    const trailerRef = useRef();
    // Get API Billboard
    useEffect(() => {
        const fetchApi = async () => {
            const results = await billboardService.billboard();
            const randomMovie = results[Math.floor(Math.random() * (results.length - 1))];
            const trailerResults = await trailerService.trailer(randomMovie.id);
            for (let i = 0; i < trailerResults.length; i++) {
                if (trailerResults[i].type === 'Trailer') {
                    setMovie({ key: trailerResults[i].key, ...randomMovie });
                }
            }
        };

        fetchApi();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <Trailer
                isReplay={isReplay}
                data={movie}
                trailerRef={trailerRef}
                volumeClick={volumeClick}
                setShowActions={setShowActions}
            />
            <div className={cx('info-layer')}>
                <div className={cx('layer-cover-left')}></div>
                <div className={cx('layer-cover-botton')}></div>
                <Content data={movie} showDecs={showActions} />
                <div className={cx('more-actions')}>
                    {(showActions === 1 &&
                        (volumeClick ? (
                            <Button leftIcon={<VolumeOnIcon />} iconOnly onClick={handleVolumeClick} />
                        ) : (
                            <Button leftIcon={<VolumeOffIcon />} iconOnly onClick={handleVolumeClick} />
                        ))) ||
                        (showActions === 2 && <Button leftIcon={<AgainIcon />} iconOnly onClick={handleOnReplay} />)}
                    <span className={cx('age-limit')}>{movie?.vote_average}</span>
                </div>
            </div>
        </div>
    );
}

export default BillBoard;
