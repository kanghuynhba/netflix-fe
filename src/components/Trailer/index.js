/* eslint-disable array-callback-return */
import classNames from 'classnames/bind';
import styles from './Trailer.module.scss';
import Image from '../Image';
import YouTube from 'react-youtube';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
function Trailer({ data, isReplay = false, trailerRef, volumeClick = false, setShowActions }) {
    const [isShowTrailer, setIsShowTrailer] = useState(false);
    const [end, setEnd] = useState(0);
    const opts = {
        width: '100%',
        height: '822',
        playerVars: {
            controls: 0,
            modestbranding: 1,
            mute: 1,
            autoplay: 1,
            cc_load_policiy: 1,
        },
    };
    const checkReady = (e) => {
        volumeClick ? trailerRef.current.internalPlayer.unMute() : trailerRef.current.internalPlayer.mute();
        // e.target.playVideo();
        setEnd(e.target.getDuration() * 500);
        var res = e.target.playerInfo.playerState;
        if (res === -1) {
            setIsShowTrailer(false);
        }
    };
    useEffect(() => {
        if (isReplay) {
            setIsShowTrailer(true);
            setShowActions(1);
        } else {
            var delayShow = setTimeout(() => {
                setIsShowTrailer(true);
                setShowActions(1);
            }, 3000);
        }
        if (end) {
            var delayHide = setTimeout(() => {
                setShowActions(2);
                setIsShowTrailer(false);
            }, end + 3000);
        }
        return () => clearTimeout(delayShow && delayHide);
    }, [end, isReplay, setShowActions]);
    return (
        <div className={cx('wrapper')}>
            {isShowTrailer ? (
                <div className={cx('video-container')}>
                    <YouTube
                        ref={trailerRef}
                        videoId={data?.key}
                        opts={opts}
                        containerClassName="embed-youtube"
                        onReady={(e) => checkReady(e)}
                    />
                </div>
            ) : (
                <Image
                    className={cx('background-image')}
                    src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
                    alt={data?.name}
                />
            )}
        </div>
    );
}

export default Trailer;
