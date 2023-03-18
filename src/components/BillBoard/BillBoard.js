import classNames from 'classnames/bind';
import Button from '../Button';
import { AgainIcon } from '../Icons';
import styles from './BillBoard.module.scss';
import Content from './Content/Content';

const cx = classNames.bind(styles);
function BillBoard() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('background-image')}
                src="https://occ-0-58-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVpxDtZSXAWh67NRILt7ZODYwJ9Eo2KO_rR47Bhr0LGcUd308RLmoQaqTFRNY1v2GKwZSN6tcViwwkKuoek-9sLNJjSppn1mkLk2.webp?r=e4c"
                alt="friends"
            />
            <div className={cx('layer-cover-left')}></div>
            <div className={cx('layer-cover-botton')}></div>
            <Content />
            <div className={cx('more-actions')}>
                <Button leftIcon={<AgainIcon />} iconOnly />
                <span className={cx('age-limit')}>7+</span>
            </div>
        </div>
    );
}

export default BillBoard;
