import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Stairs from './Stairs';
import styles from './StairTransition.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function StairTransition() {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className={cx('container')}>
            <Stairs />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
}

export default StairTransition;
