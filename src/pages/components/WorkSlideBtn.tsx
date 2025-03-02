import React from 'react';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import classNames from 'classnames/bind';
import styles from './WorkSlideBtn.module.scss';
import { useSwiper } from 'swiper/react';

const cx = classNames.bind(styles);

interface WorkSlideBtnsProp {
  container?: string;
  btn?: string;
  icon?: string;
}

const WorkSlideBtns: React.FC<WorkSlideBtnsProp> = ({ container, btn, icon }) => {
  const swiper = useSwiper();
  return (
    <div className={cx(container)}>
      <div className={cx(btn)} onClick={() => swiper.slidePrev()}>
        <FaCaretLeft className={cx(icon)} />
      </div>
      <div className={cx(btn)} onClick={() => swiper.slideNext()}>
        <FaCaretRight className={cx(icon)} />
      </div>
    </div>
  );
};

export default WorkSlideBtns;
