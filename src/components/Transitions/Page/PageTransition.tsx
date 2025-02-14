import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './PageTransition.module.scss';

const cx = classNames.bind(styles);

type PageTransitionProps = {
  children: ReactNode;
};

function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathName}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.5, ease: easeInOut } }}
        exit={{ opacity: 0 }}
        className={cx('page-transition')}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default PageTransition;
