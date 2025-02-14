import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '../Header/header';
import { ReactNode } from 'react';
import PageTransition from '../../Transitions/Page/PageTransition';
import StairTransition from '../../Transitions/Stair/StairTransition';

const cx = classNames.bind(styles);

interface DefaultLayoutProps {
  children: ReactNode;
}
function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className={cx('wrapper')}>
      <StairTransition />
      <PageTransition>
        <Header />
        {children}
      </PageTransition>
    </div>
  );
}

export default DefaultLayout;
