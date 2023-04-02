import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { InfoIcon, PlayIcon } from '~/components/Icons';
import styles from './Content.module.scss';

const cx = classNames.bind(styles);
function Content({ data, showDecs = 0 }) {
    const shortDecs = (string = ' ') => string.slice(0, string.indexOf('.') + 1);
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>{data?.name}</h1>
            {showDecs !== 1 && <div className={cx('decs')}>{shortDecs(data?.overview)}</div>}
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
