import classNames from 'classnames/bind';
import styles from './avatar.module.scss';
import { motion } from 'framer-motion';
const cx = classNames.bind(styles);

function Avatar() {
  return (
    <div className={cx('container')}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1, duration: 1, ease: 'easeInOut' } }}
      >
        <img src="imgs/avt.png" alt="Avatar" className={cx('avatar')} />
      </motion.div>

      <motion.svg viewBox={'0 0 506 506'} xmlns="http://www.w3.org/2000/svg" className={cx('svg')}>
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          className={cx('circle')}
          strokeWidth={4}
          strokeLinecap={'round'}
          strokeLinejoin={'round'}
          initial={{ strokeDasharray: '24 10 0 0' }}
          animate={{ strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'], rotate: [120, 360] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        ></motion.circle>
      </motion.svg>
    </div>
  );
}

export default Avatar;
