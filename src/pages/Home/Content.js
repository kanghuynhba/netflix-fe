import classNames from 'classnames/bind';
import styles from './Content.module.scss';

const cx = classNames.bind(styles);
function Content() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('title')}
                src="https://occ-0-58-395.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABajpdrycy5d7g0_rVXXQFshLftrpWv3UfxKy_xbxeeHO0Uw8LTaUz6nB6NfgssvXKis39S2NPz17DPiVKdKAcj98uoYf1-NALFxSy7iaPMM.webp?r=584"
                alt="friend"
            />
            <div className={cx('decs')}>
                Six young people from New York City, on their own and struggling to survive in the real world, find the
                companionship, comfort and support they get from each other to be the perfect antidote to the pressures
                of life.
            </div>
        </div>
    );
}

export default Content;
