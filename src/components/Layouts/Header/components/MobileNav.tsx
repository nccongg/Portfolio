import { useState } from 'react';
import styles from './MobileNav.module.scss';
import classNames from 'classnames/bind';
import { FaAlignRight, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { personalInfo, navSections } from '../../../../data/portfolioData';

const cx = classNames.bind(styles);

interface MobileNavProps {
  activeSection?: string;
  onNavClick?: (e: React.MouseEvent, item: (typeof navSections)[0]) => void;
}

function MobileNav({ activeSection = 'hero', onNavClick }: MobileNavProps) {
  const [showNav, setShowNav] = useState(false);

  const handleItemClick = (e: React.MouseEvent, item: (typeof navSections)[0]) => {
    setShowNav(false);
    if (onNavClick) {
      onNavClick(e, item);
    }
  };

  return (
    <div className={cx('container')}>
      <button
        onClick={() => setShowNav(true)}
        className={cx('navIcon', { hideIcon: showNav })}
        aria-label="Open navigation menu"
      >
        <FaAlignRight />
      </button>

      <div>
        <div
          className={cx('overlay', { showOverlay: showNav })}
          onClick={() => setShowNav(false)}
        ></div>

        <nav className={cx('nav', { showNav: showNav })} aria-label="Mobile Navigation">
          <button
            className={cx('closeIcon')}
            onClick={() => setShowNav(false)}
            aria-label="Close navigation menu"
          >
            <FaTimes />
          </button>

          <div className={cx('navContent')}>
            <Link className={cx('logo')} to="/" onClick={() => setShowNav(false)}>
              <span className={cx('logoText')}>{personalInfo.shortName}</span>
            </Link>

            <div className={cx('navItemsList')}>
              {navSections.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleItemClick(e, item)}
                    className={cx('navItem', { active: isActive })}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default MobileNav;
