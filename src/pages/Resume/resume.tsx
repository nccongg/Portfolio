import classNames from 'classnames/bind';
import styles from './resume.module.scss';
import * as Tabs from '@radix-ui/react-tabs';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import {
  personalInfo,
  experiences,
  educationList,
  skillCategories,
  honorsAndAwards,
} from '../../data/portfolioData';

const cx = classNames.bind(styles);

function Resume() {
  return (
    <div className={cx('container')}>
      <Tabs.Root className={cx('tabs-content')} defaultValue="experience">
        <Tabs.List className={cx('list')}>
          <Tabs.Trigger className={cx('trigger')} value="experience">
            Experience
          </Tabs.Trigger>
          <Tabs.Trigger className={cx('trigger')} value="education">
            Education & Honors
          </Tabs.Trigger>
          <Tabs.Trigger className={cx('trigger')} value="skills">
            Skills
          </Tabs.Trigger>
          <Tabs.Trigger className={cx('trigger')} value="about">
            About me
          </Tabs.Trigger>
        </Tabs.List>

        <div className={cx('content')}>
          {/* Experience Tab */}
          <Tabs.Content className={cx('experience')} value="experience">
            <h1 className={cx('item-title')}>My Experience</h1>
            <p className={cx('item-description')}>
              Practical software engineering internships and research laboratory roles.
            </p>
            <ScrollArea className={cx('scroll-wrapper')}>
              {experiences.map((item, index) => {
                return (
                  <div key={index} className={cx('ex-item')}>
                    <span className={cx('duration')}>{item.duration}</span>
                    <h3 className={cx('position')}>{item.position}</h3>
                    <div className={cx('company-wraper')}>
                      <span className={cx('dot')}></span>
                      <p className={cx('company')}>{item.company}</p>
                      {item.location && <span className={cx('location')}>• {item.location}</span>}
                    </div>
                    {item.techStack && (
                      <div className={cx('tech-chips')}>
                        {item.techStack.map((tech, tIdx) => (
                          <span key={tIdx} className={cx('chip')}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    {item.bullets && item.bullets.length > 0 && (
                      <ul className={cx('bullet-list')}>
                        {item.bullets.map((bullet, bIndex) => (
                          <li key={bIndex} className={cx('bullet-item')}>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </ScrollArea>
          </Tabs.Content>

          {/* Education & Honors Tab */}
          <Tabs.Content className={cx('education')} value="education">
            <h1 className={cx('item-title')}>Education & Honors</h1>
            <p className={cx('item-description')}>
              Academic achievements, university degree, and competitive programming honors.
            </p>
            <ScrollArea className={cx('scroll-wrapper')}>
              {educationList.map((item, index) => {
                return (
                  <div key={`edu-${index}`} className={cx('ex-item')}>
                    <span className={cx('duration')}>{item.duration}</span>
                    <h3 className={cx('position')}>{item.institution}</h3>
                    <div className={cx('company-wraper')}>
                      <span className={cx('dot')}></span>
                      <p className={cx('company')}>{item.degree}</p>
                    </div>
                    {item.highlights && (
                      <ul className={cx('bullet-list')}>
                        {item.highlights.map((h, hIdx) => (
                          <li key={hIdx} className={cx('bullet-item')}>
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}

              {honorsAndAwards.map((item, index) => {
                return (
                  <div key={`honor-${index}`} className={cx('ex-item')}>
                    <span className={cx('duration')}>{item.year}</span>
                    <h3 className={cx('position')}>{item.title}</h3>
                    <div className={cx('company-wraper')}>
                      <span className={cx('dot')}></span>
                      <p className={cx('company')}>{item.award}</p>
                    </div>
                    {item.description && (
                      <p className={cx('honor-desc-text')}>{item.description}</p>
                    )}
                  </div>
                );
              })}
            </ScrollArea>
          </Tabs.Content>

          {/* Skills Tab */}
          <Tabs.Content className={cx('skills')} value="skills">
            <h1 className={cx('item-title')}>My Skills</h1>
            <p className={cx('item-description')}>
              Categorized software development technologies and developer tooling.
            </p>
            <div className={cx('skills-tab-grid')}>
              {skillCategories.map((cat, index) => {
                return (
                  <div key={index} className={cx('skill-cat-box')}>
                    <h3 className={cx('cat-name')}>{cat.category}</h3>
                    <div className={cx('badges-row')}>
                      {cat.skills.map((skill, sIdx) => (
                        <span key={sIdx} className={cx('skill-badge')}>
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </Tabs.Content>

          {/* About Tab */}
          <Tabs.Content className={cx('about')} value="about">
            <h1 className={cx('item-title')}>About Me</h1>
            <p className={cx('item-description')}>{personalInfo.bio}</p>

            <div className={cx('about-content')}>
              <div className={cx('about-item')}>
                <p className={cx('field-name')}>Name</p>
                <p className={cx('field-value')}>{personalInfo.name}</p>
              </div>
              <div className={cx('about-item')}>
                <p className={cx('field-name')}>Experience</p>
                <p className={cx('field-value')}>1+ Years (Internships & Lab)</p>
              </div>
              <div className={cx('about-item')}>
                <p className={cx('field-name')}>Phone</p>
                <p className={cx('field-value')}>{personalInfo.phone}</p>
              </div>
              <div className={cx('about-item')}>
                <p className={cx('field-name')}>Nationality</p>
                <p className={cx('field-value')}>Vietnam</p>
              </div>
              <div className={cx('about-item')}>
                <p className={cx('field-name')}>Email</p>
                <p className={cx('field-value')}>{personalInfo.email}</p>
              </div>
              <div className={cx('about-item')}>
                <p className={cx('field-name')}>Languages</p>
                <p className={cx('field-value')}>Vietnamese, English (TOEIC 905)</p>
              </div>
              <div className={cx('about-item')}>
                <p className={cx('field-name')}>Location</p>
                <p className={cx('field-value')}>{personalInfo.location}</p>
              </div>
              <div className={cx('about-item')}>
                <p className={cx('field-name')}>Status</p>
                <p className={cx('field-value', 'highlight')}>Available</p>
              </div>
            </div>
          </Tabs.Content>
        </div>
      </Tabs.Root>
    </div>
  );
}

export default Resume;
