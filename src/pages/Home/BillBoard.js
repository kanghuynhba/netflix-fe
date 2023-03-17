import classNames from 'classnames/bind';
import styles from './BillBoard.module.scss';
import Content from './Content';

const cx = classNames.bind(styles);
function BillBoard() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('background-image')}
                src="https://occ-0-58-395.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABTdB36qeuQ18GcwzzeiSYqPPqDfwICoMVlsos4LTKEZQfWXfxRiskk0i-IScdhdD4MQg-GKzbB3155f6mzIlpXmyfrjMeF-MOo3B.webp?r=d83"
                alt="friends"
            />
            <div className={cx('layer-cover-left')}></div>
            <div className={cx('layer-cover-botton')}></div>
            <Content />
        </div>
    );
}

export default BillBoard;
