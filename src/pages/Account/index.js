import classNames from 'classnames/bind';
import styles from './Account.module.scss';
import config from '~/config';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
function Account() {
    return (
        <div className={cx('profile')}>
            <h1 className={cx('title')}>Who's watching?</h1>
            <Link to={config.routes.browse}>
                <Image
                    className={cx('profile-icon')}
                    src="https://www.netflix.com/SwitchProfile?tkn=KIW34Q76SJD7RBFZUFH46WDEUQ"
                    alt="Huynh Ba Khang"
                    fallback="https://i.pinimg.com/564x/ce/1a/68/ce1a68b494cd4914a8e724d40645ac6c.jpg"
                />
            </Link>
        </div>
    );
}

export default Account;
