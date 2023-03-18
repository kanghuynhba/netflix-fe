import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import BillBoard from '../../components/BillBoard/BillBoard';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('main-view')}>
            <BillBoard />
        </div>
    );
}

export default Home;
