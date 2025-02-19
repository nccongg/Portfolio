import classNames from 'classnames/bind';
import styles from './Social.module.scss';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const cx = classNames.bind(styles);

const socialItems = [
  {
    name: 'facebook',
    link: 'https://www.facebook.com/profile.php?id=100020378081627',
    icon: FaFacebookF,
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/ch%C3%AD-c%C3%B4ng-nguy%E1%BB%85n-817b83318/',
    icon: FaLinkedinIn,
  },
  {
    name: 'github',
    link: 'https://github.com/nccongg',
    icon: FaGithub,
  },
];
function Social() {
  return (
    <div className={cx('social')}>
      {socialItems.map((item, index) => {
        const SocialIcon = item.icon;
        return (
          <a key={index} href={item.link} className={cx('social-item')}>
            <SocialIcon />
          </a>
        );
      })}
    </div>
  );
}

export default Social;
