import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { InfoIcon, PlayIcon } from '~/components/Icons';
import styles from './Content.module.scss';

const cx = classNames.bind(styles);
function Content() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('title')}
                src="https://occ-0-58-395.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABb7gnkfCIMCeGqwGW5uMzjuAu_Ck_I8bCUCMgi-9nkG5LnOdaE9zRAgXVz7OIiLRYqqdZA5M99YZQhVryW5I_Pm61IB4PAsEesdKnxctMhiuZxYYL_BdONxHvHJPe4etx1j-86lBL-pKTvD49bzwsuDu5D5Z7vfU-_sF2HSxpwtaoOnpa-TUvA.webp?r=45e"
                alt="friend"
            />
            <div className={cx('decs')}>
                When a young girl stows away on the ship of a legendary sea monster hunter, they launch an epic journey
                into uncharted waters — and make history to boot.
            </div>
            <div className={cx('actions')}>
                <Button leftIcon={<PlayIcon />} normal>
                    Play
                </Button>
                <Button leftIcon={<InfoIcon />} opacity>
                    More info
                </Button>
            </div>
        </div>
    );
}

export default Content;
