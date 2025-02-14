import { motion } from 'framer-motion';
import styles from './Stairs.module.scss';
import classNames from 'classnames/bind';
import { StrictMode } from 'react';

const cx = classNames.bind(styles);
function Stairs() {
  const reverseIndex = (index: any) => {
    const totalStep = 6;
    return totalStep - index - 1;
  };

  return (
    <>
      <div className={cx('container')}>
        {[...Array(6)].map((_, index) => {
          const delayValue = reverseIndex(index) * 0.1;
          const leftValue = index * 16.6666666667;
          console.log(`Index: ${index}, leftValue: ${leftValue}`);

          return (
            <motion.div
              key={index}
              className={cx('stairs')}
              initial={{
                top: '0%',
                left: `${leftValue}%`,
              }}
              animate={{
                top: '100%',
                left: `${leftValue}%`,
              }}
              exit={{
                top: ['100%', '0%'],
                transition: {
                  duration: 0.3,
                  ease: 'easeInOut',
                  delay: delayValue,
                },
              }}
              transition={{
                duration: 0.4,
                ease: 'easeInOut',
                delay: delayValue,
              }}
            />
          );
        })}
      </div>
    </>
  );
}

export default Stairs;
