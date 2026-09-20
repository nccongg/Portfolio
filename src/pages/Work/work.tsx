import classNames from 'classnames/bind';
import styles from './work.module.scss';
import { useState } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { FaGithub } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import WorkSlideBtns from '../components/WorkSlideBtn';
import { projects } from '../../data/portfolioData';

const cx = classNames.bind(styles);

function Work() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const activeProject = projects[currentProjectIndex] || projects[0];

  const handleSlideChange = (swiper: { activeIndex: number }) => {
    setCurrentProjectIndex(swiper.activeIndex);
  };

  return (
    <div className={cx('container')}>
      <div className={cx('text-container')}>
        <span className={cx('project-num')}>{`0${currentProjectIndex + 1}`}</span>

        {activeProject.isThesis && (
          <span className={cx('thesis-tag')}>Graduation Thesis • {activeProject.duration}</span>
        )}

        <h2 className={cx('project-title')}>{activeProject.title}</h2>
        <p className={cx('project-description')}>{activeProject.description}</p>

        {activeProject.keyContributions && (
          <ul className={cx('work-contributions')}>
            {activeProject.keyContributions.map((c, cIdx) => (
              <li key={cIdx} className={cx('work-contribution-item')}>
                {c}
              </li>
            ))}
          </ul>
        )}

        <div className={cx('stack-container')}>
          {activeProject.stack.map((item, index) => {
            return (
              <span key={index} className={cx('stack-badge')}>
                {item}
              </span>
            );
          })}
        </div>

        <div className={cx('border-line')}></div>

        <div className={cx('link-container')}>
          {activeProject.github && (
            <a
              className={cx('link')}
              href={activeProject.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${activeProject.title} on GitHub`}
            >
              <Tooltip.Provider delayDuration={100}>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <div className={cx('live-project-wrapper')}>
                      <FaGithub className={cx('live-project-icon')} />
                    </div>
                  </Tooltip.Trigger>
                  <Tooltip.Content className={cx('live-project-tooltip')}>GitHub Repository</Tooltip.Content>
                </Tooltip.Root>
              </Tooltip.Provider>
            </a>
          )}
        </div>
      </div>

      <div className={cx('silde-container')}>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
          className={cx('swiper-container')}
        >
          {projects.map((item, index) => {
            return (
              <SwiperSlide key={index} className={cx('swiper')}>
                {item.image ? (
                  <img
                    className={cx('swiper-img')}
                    src={`${import.meta.env.BASE_URL}${item.image}`}
                    alt={item.title}
                  />
                ) : (
                  <div className={cx('thesis-slide-placeholder')}>
                    <div className={cx('thesis-badge-box')}>🎓 Flagship Thesis</div>
                    <h3>{item.title}</h3>
                    <p>React • Vite • Node.js • Express • PostgreSQL • Playwright • Gemini</p>
                  </div>
                )}
              </SwiperSlide>
            );
          })}
          <WorkSlideBtns container="worksl-container" btn="worksl-btn" icon="worksl-icon" />
        </Swiper>
      </div>
    </div>
  );
}

export default Work;
