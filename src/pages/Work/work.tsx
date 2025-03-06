import classNames from 'classnames/bind';
import styles from './work.module.scss';
import { useState } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import WorkSlideBtns from '../components/WorkSlideBtn';
import { Link } from 'react-router-dom';
import CoffeeAppImg from '../../assets/imgs/CoffeeApp.png';
import Sokoban from '../../assets/imgs/Skonaban.png';

const cx = classNames.bind(styles);

const projects = [
  {
    num: '01',
    category: 'Mobile Frontend',
    title: 'CoffeeTime',
    description:
      'CoffeeTime is a modern user interface for a coffee ordering app, built with React Native and Expo. This project features responsive and intuitive screens like home, coffee menu, order details, and user profile. Focused on delivering a clean, functional design, it is ideal for showcasing a seamless mobile app experience.',
    stack: [{ name: 'React Native' }, { name: 'UI Kitten' }, { name: 'React Navigation' }],
    image: CoffeeAppImg,
    live: '',
    github: 'https://github.com/nccongg/CoffeeTime',
  },
  {
    num: '02',
    category: 'AI & Algorithms',
    title: 'Sokoban-UI',
    description:
      'Developed a Sokoban puzzle solver using BFS, DFS, UCS, and A* algorithms with a Python-based GUI for visualization.',
    stack: [{ name: 'Python' }, { name: 'Algorithms' }],
    image: Sokoban,
    live: '',
    github: 'https://github.com/nccongg/Sokoban-UI',
  },
  // {
  //   num: '03',
  //   category: 'Frontend',
  //   title: 'Project 03',
  //   description: 'This is project 3 - Mobile Project.',
  //   stack: [{ name: 'Html 5' }, { name: 'Css3' }, { name: 'React Native' }],
  //   image: '/src/assets/imgs/TREASURE (7).png',
  //   live: '',
  //   github: '',
  // },
];
function Work() {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swpiper: any) => {
    const currentIndex = swpiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <div className={cx('container')}>
      <div className={cx('text-container')}>
        <span className={cx('project-num')}>{project.num}</span>

        <h2 className={cx('project-title')}>{project.category} Project</h2>
        <p className={cx('project-description')}>{project.description}</p>
        <div className={cx('stack-container')}>
          {project.stack.map((item, index) => {
            return (
              <div key={index}>
                {item.name}
                {index !== project.stack.length - 1 && ','}
              </div>
            );
          })}
        </div>
        <div className={cx('border-line')}></div>
        <div className={cx('link-container')}>
          <Tooltip.Provider delayDuration={100}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <div className={cx('live-project-wrapper')}>
                  <FaArrowUpRightFromSquare className={cx('live-project-icon')} />
                </div>
              </Tooltip.Trigger>
              <Tooltip.Content className={cx('live-project-tooltip')}>Live project</Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>

          <Link className={cx('link')} to={project.github}>
            <Tooltip.Provider delayDuration={100}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <div className={cx('live-project-wrapper')}>
                    <FaGithub className={cx('live-project-icon')} />
                  </div>
                </Tooltip.Trigger>
                <Tooltip.Content className={cx('live-project-tooltip')}>Github repo</Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider>
          </Link>
        </div>
      </div>
      <div className={cx('silde-container')}>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => console.log(swiper)}
          className={cx('swiper-container')}
        >
          {projects.map((item, index) => {
            return (
              <SwiperSlide key={index} className={cx('swiper')}>
                <img className={cx('swiper-img')} src={item.image} />
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
