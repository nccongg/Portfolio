import { FiDownload } from 'react-icons/fi';
import styles from './home.module.scss';
import classNames from 'classnames/bind';
import Button from '../../components/Bases/Button';
import Social from '../components/Social';
import Avatar from '../components/Avatar';
import Stats from '../components/Stats';
import Cv from '../../assets/pdfs/NguyenChiCong.pdf';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('container')}>
      <div className={cx('content')}>
        {/* Text */}
        <div className={cx('text-content')}>
          <span>Software Developer</span>
          <h1 className={cx('name')}>
            Hello I'm <br />
            <span className={cx('nameText')}>Chi Cong Nguyen</span>
          </h1>
          <p className={cx('introduce')}>
            I am a student in the Honor Program in Computer Science at the University of Science. I am a Software
            Engineer proficient in various programming languages and technologies.
          </p>
          <div className={cx('button-container')}>
            <a href={Cv} download="NguyenChiCong_CV.pdf" className={cx('downloadCVa')}>
              <Button variant="outline" className={cx('downloadCVButton')}>
                <span>Download CV</span>
                <FiDownload className={cx('downLoadIcon')} />
              </Button>
            </a>
            <div className={cx('social')}>
              <Social />
            </div>
          </div>
        </div>

        {/* image */}
        <div className={cx('image-content')}>
          <Avatar />
        </div>
      </div>
      {/* Stats */}
      <div className={cx('stats-content')}>
        <Stats />
      </div>
    </div>
  );
}

export default Home;
