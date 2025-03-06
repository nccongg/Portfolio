import classNames from 'classnames/bind';
import styles from './services.module.scss';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';

const cx = classNames.bind(styles);

const ServicesItems = [
  {
    num: '01',
    title: 'Web Development',
    description:
      'We build websites that are fast, secure, and easy to manage. We use the latest technologies to create custom websites that are tailored to your business.',
    link: '/',
  },
  {
    num: '02',
    title: 'App Development',
    description:
      'We build apps that are fast, secure, and easy to manage. We use the latest technologies to create custom websites that are tailored to your business.',
    link: '/',
  },
  // {
  //   num: '03',
  //   title: 'UI/UX Design',
  //   description:
  //     'We build websites that are fast, secure, and easy to manage. We use the latest technologies to create custom websites that are tailored to your business.',
  //   link: '/',
  // },
  // {
  //   num: '04',
  //   title: 'Logo Design',
  //   description:
  //     'We build websites that are fast, secure, and easy to manage. We use the latest technologies to create custom websites that are tailored to your business.',
  //   link: '/',
  // },
];

function Services() {
  return (
    <div className={cx('container')}>
      {ServicesItems.map((item, index) => {
        return (
          <div key={index} className={cx('service')}>
            <div className={cx('service-header')}>
              <div className={cx('service-header-title')}>
                <span className={cx('service-number')}>{item.num}</span>
                <Link to={item.link} className={cx('service-link')}>
                  <FaLongArrowAltRight className={cx('icon')} />
                </Link>
              </div>
              <h1 className={cx('service-title')}>{item.title}</h1>
            </div>
            <span className={cx('service-description')}>{item.description}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Services;
