import { useState } from 'react';
import styles from './mobileNav.module.scss';
import classNames from 'classnames/bind';
import { FaAlignRight, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'Services', link: '/services' },
  { name: 'Resume', link: '/resume' },
  { name: 'Work', link: '/work' },
  { name: 'Contact', link: '/contact' },
];

function MobileNav() {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <div className={cx('container')}>
      <div onClick={() => setShowNav(true)} className={cx('navIcon', { hideIcon: showNav })}>
        <FaAlignRight />
      </div>

      <div>
        <div className={cx('overlay', { showOverlay: showNav })} onClick={() => setShowNav(false)}></div>
        <div className={cx('nav', { showNav: showNav })}>
          <div className={cx('closeIcon')} onClick={() => setShowNav(false)}>
            <FaTimes />
          </div>
          <div className={cx('navContent')}>
            <Link className={cx('logo')} to={'/'}>
              <h1 className={cx('logoText')}>Cong .</h1>
            </Link>

            <div className={cx('navItemsList')}>
              {navItems.map((item, index) => {
                return (
                  <Link className={cx('navItem', { active: item.link == pathName })} key={index} to={item.link}>
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
