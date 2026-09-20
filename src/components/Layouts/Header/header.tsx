import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../../Bases/Button';
import MobileNav from './components/MobileNav';
import { useTheme } from '../../../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import { personalInfo, navSections } from '../../../data/portfolioData';

const cx = classNames.bind(styles);

function Header() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll position if on home page
      if (location.pathname === '/' || location.pathname === '') {
        const sections = navSections.map((item) => document.getElementById(item.id));
        const scrollPosition = window.scrollY + 200;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(navSections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent, item: (typeof navSections)[0]) => {
    if (location.pathname === '/' || location.pathname === '') {
      e.preventDefault();
      const el = document.getElementById(item.id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(item.id);
      }
    } else {
      // Navigate to home with hash
      e.preventDefault();
      navigate(`/#${item.id}`);
    }
  };

  return (
    <header className={cx('headerWrapper', { scrolled: isScrolled })}>
      <div className={cx('container')}>
        <Link className={cx('logo')} to="/">
          <span className={cx('logoText')}>{personalInfo.shortName}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={cx('desktop-nav')} aria-label="Main Navigation">
          <div className={cx('navList')}>
            {navSections.map((item) => {
              const isActive =
                (location.pathname === '/' || location.pathname === '') && activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className={cx('navItem', { active: isActive })}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          <div className={cx('actions')}>
            <button
              onClick={toggleTheme}
              className={cx('themeToggle')}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <FaSun className={cx('themeIcon')} /> : <FaMoon className={cx('themeIcon')} />}
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, { name: 'Contact', id: 'contact', route: '/#contact' })}
              className={cx('hireMe')}
            >
              <Button variant="primary">Hire me</Button>
            </a>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className={cx('mobile-nav')}>
          <button
            onClick={toggleTheme}
            className={cx('themeToggleMobile')}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <MobileNav activeSection={activeSection} onNavClick={handleNavClick} />
        </div>
      </div>
    </header>
  );
}

export default Header;
