import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import BillBoard from '../../components/BillBoard/BillBoard';
import Row from '~/components/Row';
import requests from '~/utils/routes';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('main-view')}>
            <BillBoard discover={requests.discoverTv} type={'tv'} />
            <div className={cx('row-container')}>
                <Row classname={cx('row-1')} title={'Trending Now'} fetch={requests.trending} />
                <Row classname={cx('row-2')} title={'Top Rated'} fetch={requests.topRated} />
                <Row classname={cx('row-3')} title={'New Releases'} fetch={requests.newReleases} />
                <Row classname={cx('row-4')} title={'Popular on Netflix'} fetch={requests.popular} />
                <Row classname={cx('row-5')} title={'Kids & Family Movies'} fetch={requests.kidsFamilyMovies} />
            </div>
        </div>
    );
}

export default Home;
