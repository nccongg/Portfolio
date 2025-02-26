import classNames from 'classnames/bind';
import styles from './resume.module.scss';
import { FaCss3, FaGithub, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import * as Tabs from '@radix-ui/react-tabs';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import * as Tooltip from '@radix-ui/react-tooltip';

const cx = classNames.bind(styles);

const about = {
  title: 'About me',
  description: 'This is information about me',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Cong Nguyen Chi',
    },
    {
      fieldName: 'Experienes',
      fieldValue: '1+ Years',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+84) 973 371 776',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'VietNam',
    },
    {
      fieldName: 'Email',
      fieldValue: 'chicong442004@gmail.com',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'Vietnamese, English',
    },
  ],
};

const experience = {
  icon: '',
  title: 'My experience',
  description: 'This is my experience',
  items: [
    {
      company: 'Decentralized Applied Cryptography Lab, HCMUS',
      positon: 'Mobile UI Developer Intern',
      duration: '07/2024 - 10/2024',
    },
    {
      company: 'Decentralized Applied Cryptography Lab, HCMUS',
      positon: 'Mobile UI Developer Intern',
      duration: '07/2024 - 10/2024',
    },
    {
      company: 'Decentralized Applied Cryptography Lab, HCMUS',
      positon: 'Mobile UI Developer Intern',
      duration: '07/2024 - 10/2024',
    },
    {
      company: 'Decentralized Applied Cryptography Lab, HCMUS',
      positon: 'Mobile UI Developer Intern',
      duration: '07/2024 - 10/2024',
    },
    {
      company: 'Decentralized Applied Cryptography Lab, HCMUS',
      positon: 'Mobile UI Developer Intern',
      duration: '07/2024 - 10/2024',
    },
    {
      company: 'Decentralized Applied Cryptography Lab, HCMUS',
      positon: 'Mobile UI Developer Intern',
      duration: '07/2024 - 10/2024',
    },
  ],
};

const education = {
  icon: '',
  title: 'My education',
  description: 'This is my education',
  items: [
    {
      institution: 'University of Science',
      degree: 'Currently Studying',
      duration: '2022 - now',
    },
    {
      institution: 'Quang Trung High School for the Gifted',
      degree: 'High School Diploma',
      duration: '2019 - 2022',
    },
  ],
};

const skill = {
  title: 'My skills',
  description: 'This is my skills',
  skillList: [
    {
      icon: FaHtml5,
      name: 'Html 5',
    },
    {
      icon: FaCss3,
      name: 'Css 3',
    },
    {
      icon: FaJs,
      name: 'JavaScript',
    },
    {
      icon: FaReact,
      name: 'React.Js',
    },
    {
      icon: FaGithub,
      name: 'Github',
    },
  ],
};

function Resume() {
  return (
    <div className={cx('container')}>
      <Tabs.Root className={cx('tabs-content')} defaultValue="about">
        <Tabs.List className={cx('list')}>
          <Tabs.Trigger className={cx('trigger')} value="experience">
            Experience
          </Tabs.Trigger>
          <Tabs.Trigger className={cx('trigger')} value="education">
            Education
          </Tabs.Trigger>
          <Tabs.Trigger className={cx('trigger')} value="skills">
            Skills
          </Tabs.Trigger>
          <Tabs.Trigger className={cx('trigger')} value="about">
            About me
          </Tabs.Trigger>
        </Tabs.List>

        <div className={cx('content')}>
          <Tabs.Content className={cx('experience')} value="experience">
            <h1 className={cx('item-title')}>{experience.title}</h1>
            <p className={cx('item-description')}>{experience.description}</p>
            <ScrollArea className={cx('scroll-wrapper')}>
              {experience.items.map((item, index) => {
                return (
                  <div key={index} className={cx('ex-item')}>
                    <span className={cx('duration')}>{item.duration}</span>
                    <h3 className={cx('position')}>{item.positon}</h3>
                    <div className={cx('company-wraper')}>
                      <span className={cx('dot')}></span>
                      <p className={cx('company')}>{item.company}</p>
                    </div>
                  </div>
                );
              })}
            </ScrollArea>
          </Tabs.Content>

          <Tabs.Content className={cx('education')} value="education">
            <h1 className={cx('item-title')}>{education.title}</h1>
            <p className={cx('item-description')}>{education.description}</p>
            <ScrollArea className={cx('scroll-wrapper')}>
              {education.items.map((item, index) => {
                return (
                  <div key={index} className={cx('ex-item')}>
                    <span className={cx('duration')}>{item.duration}</span>
                    <h3 className={cx('position')}>{item.institution}</h3>
                    <div className={cx('company-wraper')}>
                      <span className={cx('dot')}></span>
                      <p className={cx('company')}>{item.degree}</p>
                    </div>
                  </div>
                );
              })}
            </ScrollArea>
          </Tabs.Content>

          <Tabs.Content className={cx('skills')} value="skills">
            <h1 className={cx('item-title')}>{skill.title}</h1>
            <p className={cx('item-description')}>{skill.description}</p>
            <div className={cx('skill-content')}>
              {skill.skillList.map((item, index) => {
                const SkillIcon = item.icon;
                return (
                  <Tooltip.Provider key={index} delayDuration={200}>
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <div className={cx('skill-item')} key={index}>
                          <SkillIcon className={cx('skill-icon')} />
                        </div>
                      </Tooltip.Trigger>
                      <Tooltip.Content className={cx('tooltip')}>
                        {item.name}
                        <Tooltip.Arrow />
                      </Tooltip.Content>
                    </Tooltip.Root>
                  </Tooltip.Provider>
                );
              })}
            </div>
          </Tabs.Content>

          <Tabs.Content className={cx('about')} value="about">
            <h1 className={cx('item-title')}>{about.title}</h1>
            <p className={cx('item-description')}>{about.description}</p>

            <div className={cx('about-content')}>
              {about.info.map((item, index) => {
                return (
                  <div className={cx('about-item')} key={index}>
                    <p className={cx('field-name')}>{item.fieldName}</p>
                    <p className={cx('field-value')}>{item.fieldValue}</p>
                  </div>
                );
              })}
            </div>
          </Tabs.Content>
        </div>
      </Tabs.Root>
    </div>
  );
}

export default Resume;
