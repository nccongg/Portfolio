import classNames from 'classnames/bind';
import styles from './Stats.module.scss';
import CountUp from 'react-countup';
import { verifiedStats } from '../../data/portfolioData';

const cx = classNames.bind(styles);

function Stats() {
  return (
    <div className={cx('container')}>
      {verifiedStats.map((item, index) => {
        return (
          <div className={cx('stat-item')} key={index}>
            <div className={cx('count-wrapper')}>
              <CountUp end={item.count} duration={2.2} delay={0.3} className={cx('count')} />
              {item.suffix && <span className={cx('suffix')}>{item.suffix}</span>}
            </div>
            <div className={cx('text-wrapper')}>
              <span className={cx('title')}>{item.title}</span>
              {item.subtext && <span className={cx('subtext')}>{item.subtext}</span>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Stats;
