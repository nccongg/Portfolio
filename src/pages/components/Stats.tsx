import classNames from 'classnames/bind';
import styles from './stats.module.scss';
import CountUp from 'react-countup';

const cx = classNames.bind(styles);

const StatItems = [
  {
    title: 'Projects completed',
    count: 7,
  },
  {
    title: 'Years of Experience',
    count: 1,
  },
  {
    title: 'Code commits',
    count: 200,
  },
  {
    title: 'Awards',
    count: 5,
  },
];

function Stats() {
  return (
    <div className={cx('container')}>
      {StatItems.map((item, index) => {
        return (
          <div className={cx('stat-item')} key={index}>
            <CountUp end={item.count} duration={2} delay={1} className={cx('count')} />
            <span className={cx('title')}>{item.title}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Stats;
