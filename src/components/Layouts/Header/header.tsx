import classNames from 'classnames/bind';
import styles from './header.module.scss';
import { Link, useLocation } from 'react-router-dom';
import Button from '../../Bases/Button';
import MobileNav from './components/MobileNav';

const cx = classNames.bind(styles);

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'Services', link: '/services' },
  { name: 'Resume', link: '/resume' },
  { name: 'Work', link: '/work' },
  { name: 'Contact', link: '/contact' },
];

function Header() {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <div className={cx('wrapper')}>
      <Link className={cx('logo')} to="/">
        <h1 className={cx('logoText')}>Cong .</h1>
      </Link>

      <div className={cx('desktop-nav')}>
        {navItems.map((item, index) => (
          <Link className={cx('navItem', { active: pathName === item.link })} key={index} to={item.link}>
            {item.name}
          </Link>
        ))}
        <Link className={cx('hireMe')} to="/contact">
          <Button variant="primary">Hire me</Button>
        </Link>
      </div>
      <div className={cx('mobile-nav')}>
        <MobileNav />
      </div>
    </div>
  );
}

export default Header;
