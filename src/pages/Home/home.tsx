import { useState, useRef } from 'react';
import {
  FiDownload,
  FiArrowRight,
  FiMail,
  FiPhone,
  FiMapPin,
  FiAward,
  FiBookOpen,
  FiExternalLink,
  FiGithub,
  FiCheckCircle,
} from 'react-icons/fi';
import styles from './home.module.scss';
import classNames from 'classnames/bind';
import Button from '../../components/Bases/Button';
import Social from '../components/Social';
import Avatar from '../components/Avatar';
import Stats from '../components/Stats';
import {
  personalInfo,
  experiences,
  projects,
  skillCategories,
  educationList,
  honorsAndAwards,
} from '../../data/portfolioData';
import { motion } from 'framer-motion';

const cx = classNames.bind(styles);

const smoothDecel = [0.16, 1, 0.3, 1];

const sectionHeaderViewport = { once: false, amount: 0.2 };
const contentViewport = { once: false, amount: 0.12 };

const fadeInUpVariants = {
  hidden: {
    opacity: 0,
    y: 45,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: smoothDecel },
  },
};

const staggerContainerVariants = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: smoothDecel },
  },
};

const slideLeftVariants = {
  hidden: {
    opacity: 0,
    x: -55,
    y: 15,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.75, ease: smoothDecel },
  },
};

const slideRightVariants = {
  hidden: {
    opacity: 0,
    x: 55,
    y: 15,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.75, ease: smoothDecel },
  },
};

const highlightCardVariants = {
  hidden: {
    opacity: 0,
    y: 55,
    scale: 0.93,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, ease: smoothDecel },
  },
};

const heroVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: smoothDecel },
  },
};

const avatarVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay: 0.1, ease: smoothDecel },
  },
};

function Home() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSebBbOhjBIU3wu6b5S9Qg6K-8CreB4aoJKPS97_y5wGDFkKXA/formResponse',
        {
          method: 'POST',
          mode: 'no-cors',
          body: formData,
        },
      );
      setFormStatus('success');
      form.reset();
      setTimeout(() => setFormStatus('idle'), 6000);
    } catch (err) {
      console.error('Contact form submission error:', err);
      setFormStatus('error');
    }
  };

  return (
    <div className={cx('home-container')}>
      {/* 1. HERO SECTION */}
      <section id="hero" className={cx('hero-section')}>
        <div className={cx('hero-content')}>
          <motion.div
            className={cx('hero-text')}
            initial="hidden"
            whileInView="visible"
            viewport={contentViewport}
            variants={heroVariants}
          >
            <div className={cx('role-badge')}>
              <span className={cx('pulse-dot')}></span>
              <span>{personalInfo.roleHeadline}</span>
            </div>

            <h1 className={cx('hero-title')}>
              Hello, I'm <br />
              <span className={cx('nameText')}>{personalInfo.name}</span>
            </h1>

            <p className={cx('hero-bio')}>{personalInfo.bio}</p>

            <div className={cx('hero-actions')}>
              <a href="#projects" className={cx('cta-primary-link')}>
                <Button variant="primary" className={cx('cta-btn')}>
                  <span>View My Work</span>
                  <FiArrowRight className={cx('btn-icon')} />
                </Button>
              </a>

              <a
                href={`${import.meta.env.BASE_URL}${personalInfo.cvPath}`}
                download={personalInfo.cvFileName}
                className={cx('downloadCVa')}
              >
                <Button variant="outline" className={cx('downloadCVButton')}>
                  <span>Download CV</span>
                  <FiDownload className={cx('btn-icon')} />
                </Button>
              </a>

              <div className={cx('hero-socials')}>
                <Social />
              </div>
            </div>
          </motion.div>

          <motion.div
            className={cx('hero-avatar')}
            initial="hidden"
            whileInView="visible"
            viewport={contentViewport}
            variants={avatarVariants}
          >
            <Avatar />
          </motion.div>
        </div>

        {/* VERIFIED STATS BAR */}
        <motion.div
          className={cx('stats-wrapper')}
          initial="hidden"
          whileInView="visible"
          viewport={contentViewport}
          variants={heroVariants}
        >
          <Stats />
        </motion.div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className={cx('section')}>
        <motion.div
          className={cx('section-header')}
          initial="hidden"
          whileInView="visible"
          viewport={sectionHeaderViewport}
          variants={fadeInUpVariants}
        >
          <span className={cx('section-tag')}>01 // ABOUT ME</span>
          <h2 className={cx('section-title')}>Background & Engineering Mindset</h2>
        </motion.div>

        <div className={cx('about-grid')}>
          <motion.div
            className={cx('about-story-card')}
            initial="hidden"
            whileInView="visible"
            viewport={contentViewport}
            variants={slideLeftVariants}
          >
            <p className={cx('about-lead')}>{personalInfo.longBio}</p>
            <motion.div
              className={cx('pillars-grid')}
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={contentViewport}
            >
              <motion.div
                className={cx('pillar-card')}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className={cx('pillar-icon-box')}>📱</div>
                <h3 className={cx('pillar-title')}>Mobile Engineering</h3>
                <p className={cx('pillar-desc')}>
                  Production React Native development across iOS and Android, Redux state synchronization, offline
                  caching, and real-time ONNX camera recognition.
                </p>
              </motion.div>

              <motion.div
                className={cx('pillar-card')}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className={cx('pillar-icon-box')}>⚙️</div>
                <h3 className={cx('pillar-title')}>Systems & IoT</h3>
                <p className={cx('pillar-desc')}>
                  Robotics integration with C++/QML (Qt), WebSocket/UDP protocols, ASR/TTS speech engines, and Linux
                  aarch64 cross-compilation environments.
                </p>
              </motion.div>

              <motion.div
                className={cx('pillar-card')}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className={cx('pillar-icon-box')}>🤖</div>
                <h3 className={cx('pillar-title')}>Full-Stack & AI Systems</h3>
                <p className={cx('pillar-desc')}>
                  Modern web architecture (React/Vite, Node.js, PostgreSQL) paired with autonomous testing agent workers
                  powered by Gemini and Playwright.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className={cx('about-details-card')}
            initial="hidden"
            whileInView="visible"
            viewport={contentViewport}
            variants={slideRightVariants}
          >
            <h3 className={cx('card-heading')}>Quick Profile</h3>
            <div className={cx('profile-list')}>
              <div className={cx('profile-item')}>
                <span className={cx('profile-label')}>Education</span>
                <span className={cx('profile-val')}>University of Science - VNUHCM</span>
              </div>
              <div className={cx('profile-item')}>
                <span className={cx('profile-label')}>Program</span>
                <span className={cx('profile-val')}>Honors in Computer Science</span>
              </div>
              <div className={cx('profile-item')}>
                <span className={cx('profile-label')}>Expected Graduation</span>
                <span className={cx('profile-val')}>2026</span>
              </div>
              <div className={cx('profile-item')}>
                <span className={cx('profile-label')}>Location</span>
                <span className={cx('profile-val')}>{personalInfo.location}</span>
              </div>
              <div className={cx('profile-item')}>
                <span className={cx('profile-label')}>Languages</span>
                <span className={cx('profile-val')}>Vietnamese, English</span>
              </div>
              <div className={cx('profile-item')}>
                <span className={cx('profile-label')}>Status</span>
                <span className={cx('profile-val', 'highlight-val')}>Available for Opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. EXPERIENCE SECTION */}
      <section id="experience" className={cx('section')}>
        <motion.div
          className={cx('section-header')}
          initial="hidden"
          whileInView="visible"
          viewport={sectionHeaderViewport}
          variants={fadeInUpVariants}
        >
          <span className={cx('section-tag')}>02 // EXPERIENCE</span>
          <h2 className={cx('section-title')}>Work Experience & Internships</h2>
          <p className={cx('section-desc')}>
            Proven track record contributing to production codebases and applied research environments.
          </p>
        </motion.div>

        <motion.div
          className={cx('experience-list')}
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={contentViewport}
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className={cx('exp-card')}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className={cx('exp-card-header')}>
                <div className={cx('exp-title-group')}>
                  <h3 className={cx('exp-position')}>{exp.position}</h3>
                  <div className={cx('exp-company-info')}>
                    <span className={cx('company-name')}>{exp.company}</span>
                    <span className={cx('meta-dot')}>•</span>
                    <span className={cx('location')}>{exp.location}</span>
                  </div>
                </div>
                <div className={cx('exp-badge')}>{exp.duration}</div>
              </div>

              {exp.techStack && exp.techStack.length > 0 && (
                <div className={cx('tech-chips')}>
                  {exp.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className={cx('chip')}>
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <ul className={cx('exp-bullets')}>
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className={cx('exp-bullet-item')}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. PROJECTS SECTION */}
      <section id="projects" className={cx('section')}>
        <motion.div
          className={cx('section-header')}
          initial="hidden"
          whileInView="visible"
          viewport={sectionHeaderViewport}
          variants={fadeInUpVariants}
        >
          <span className={cx('section-tag')}>03 // PROJECTS</span>
          <h2 className={cx('section-title')}>Featured Engineering Projects</h2>
          <p className={cx('section-desc')}>
            Highlighting graduation thesis research, mobile applications, and algorithmic problem-solving software.
          </p>
        </motion.div>

        <div className={cx('projects-container')}>
          {/* Flagship: Graduation Thesis */}
          {projects
            .filter((p) => p.isThesis)
            .map((thesis) => (
              <motion.div
                key={thesis.id}
                className={cx('thesis-card')}
                initial="hidden"
                whileInView="visible"
                viewport={contentViewport}
                variants={highlightCardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className={cx('thesis-top')}>
                  <div className={cx('thesis-badge')}>
                    <FiAward className={cx('thesis-icon')} />
                    <span>Graduation Thesis • {thesis.duration}</span>
                  </div>
                  {thesis.github && (
                    <a
                      href={thesis.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cx('project-link-btn')}
                      aria-label="View thesis GitHub repository"
                    >
                      <FiGithub />
                      <span>Code Repository</span>
                    </a>
                  )}
                </div>

                <h3 className={cx('thesis-title')}>{thesis.title}</h3>
                <p className={cx('thesis-desc')}>{thesis.description}</p>

                {thesis.keyContributions && (
                  <div className={cx('thesis-contributions')}>
                    <h4 className={cx('contributions-heading')}>Key Technical Contributions:</h4>
                    <ul className={cx('contributions-list')}>
                      {thesis.keyContributions.map((contrib, cIdx) => (
                        <li key={cIdx} className={cx('contribution-item')}>
                          {contrib}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className={cx('project-stack-wrap')}>
                  {thesis.stack.map((tech, sIdx) => (
                    <span key={sIdx} className={cx('project-stack-badge')}>
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

          {/* Other Projects Grid */}
          <motion.div
            className={cx('projects-grid')}
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={contentViewport}
          >
            {projects
              .filter((p) => !p.isThesis)
              .map((project) => (
                <motion.div
                  key={project.id}
                  className={cx('project-card')}
                  variants={cardVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  {project.image && (
                    <div className={cx('project-image-wrap')}>
                      <img
                        src={`${import.meta.env.BASE_URL}${project.image}`}
                        alt={project.title}
                        className={cx('project-img')}
                      />
                    </div>
                  )}

                  <div className={cx('project-body')}>
                    <div className={cx('project-cat-row')}>
                      <span className={cx('project-category')}>{project.category}</span>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cx('card-link-icon')}
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <FiGithub />
                        </a>
                      )}
                    </div>

                    <h3 className={cx('project-card-title')}>{project.title}</h3>
                    <p className={cx('project-card-desc')}>{project.description}</p>

                    <div className={cx('project-stack-wrap')}>
                      {project.stack.map((tech, sIdx) => (
                        <span key={sIdx} className={cx('project-stack-badge')}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* 5. SKILLS SECTION */}
      <section id="skills" className={cx('section')}>
        <motion.div
          className={cx('section-header')}
          initial="hidden"
          whileInView="visible"
          viewport={sectionHeaderViewport}
          variants={fadeInUpVariants}
        >
          <span className={cx('section-tag')}>04 // SKILLS</span>
          <h2 className={cx('section-title')}>Technical Stack & Competencies</h2>
          <p className={cx('section-desc')}>
            Organized into clear engineering domains supported by academic coursework and internship experience.
          </p>
        </motion.div>

        <motion.div
          className={cx('skills-grid')}
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={contentViewport}
        >
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              className={cx('skill-category-card')}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <h3 className={cx('category-title')}>{cat.category}</h3>
              <p className={cx('category-desc')}>{cat.description}</p>
              <div className={cx('skill-tags-wrap')}>
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className={cx('skill-badge')}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 6. EDUCATION & HONORS */}
      <section id="education" className={cx('section')}>
        <motion.div
          className={cx('section-header')}
          initial="hidden"
          whileInView="visible"
          viewport={sectionHeaderViewport}
          variants={fadeInUpVariants}
        >
          <span className={cx('section-tag')}>05 // EDUCATION & HONORS</span>
          <h2 className={cx('section-title')}>Academic Background & Awards</h2>
        </motion.div>

        <div className={cx('edu-honors-grid')}>
          {/* Education Column */}
          <motion.div
            className={cx('edu-col')}
            initial="hidden"
            whileInView="visible"
            viewport={contentViewport}
            variants={slideLeftVariants}
          >
            <h3 className={cx('col-heading')}>
              <FiBookOpen className={cx('heading-icon')} />
              <span>Education</span>
            </h3>

            <div className={cx('edu-cards-list')}>
              {educationList.map((edu, idx) => (
                <motion.div
                  key={idx}
                  className={cx('edu-card')}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <div className={cx('edu-meta')}>
                    <span className={cx('edu-duration')}>{edu.duration}</span>
                    <span className={cx('edu-location')}>{edu.location}</span>
                  </div>
                  <h4 className={cx('edu-institution')}>{edu.institution}</h4>
                  <p className={cx('edu-degree')}>{edu.degree}</p>
                  {edu.highlights && (
                    <ul className={cx('edu-highlights')}>
                      {edu.highlights.map((item, hIdx) => (
                        <li key={hIdx} className={cx('highlight-item')}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Honors & Awards Column */}
          <motion.div
            className={cx('honors-col')}
            initial="hidden"
            whileInView="visible"
            viewport={contentViewport}
            variants={slideRightVariants}
          >
            <h3 className={cx('col-heading')}>
              <FiAward className={cx('heading-icon')} />
              <span>Honors & Fellowships</span>
            </h3>

            <div className={cx('honors-cards-list')}>
              {honorsAndAwards.map((honor, idx) => (
                <motion.div
                  key={idx}
                  className={cx('honor-card')}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <div className={cx('honor-year')}>{honor.year}</div>
                  <h4 className={cx('honor-title')}>{honor.title}</h4>
                  <p className={cx('honor-award')}>{honor.award}</p>
                  {honor.description && <p className={cx('honor-desc')}>{honor.description}</p>}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. CONTACT SECTION */}
      <section id="contact" className={cx('section', 'contact-section')}>
        <motion.div
          className={cx('section-header')}
          initial="hidden"
          whileInView="visible"
          viewport={sectionHeaderViewport}
          variants={fadeInUpVariants}
        >
          <span className={cx('section-tag')}>06 // CONTACT</span>
          <h2 className={cx('section-title')}>Let's Connect & Work Together</h2>
          <p className={cx('section-desc')}>
            I am always open to discussing new opportunities, internship/fresher roles, or technical collaborations.
          </p>
        </motion.div>

        <div className={cx('contact-wrapper')}>
          {/* Direct Contact Details */}
          <motion.div
            className={cx('contact-info-card')}
            initial="hidden"
            whileInView="visible"
            viewport={contentViewport}
            variants={slideLeftVariants}
          >
            <h3 className={cx('info-card-title')}>Contact Information</h3>
            <p className={cx('info-card-subtitle')}>
              Feel free to reach out via email, phone, or connect with me on GitHub and LinkedIn.
            </p>

            <div className={cx('info-list')}>
              <a href={`mailto:${personalInfo.email}`} className={cx('info-item-link')}>
                <div className={cx('info-icon-box')}>
                  <FiMail />
                </div>
                <div className={cx('info-text')}>
                  <span className={cx('info-label')}>Email</span>
                  <span className={cx('info-val')}>{personalInfo.email}</span>
                </div>
              </a>

              <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className={cx('info-item-link')}>
                <div className={cx('info-icon-box')}>
                  <FiPhone />
                </div>
                <div className={cx('info-text')}>
                  <span className={cx('info-label')}>Phone</span>
                  <span className={cx('info-val')}>{personalInfo.phone}</span>
                </div>
              </a>

              <div className={cx('info-item')}>
                <div className={cx('info-icon-box')}>
                  <FiMapPin />
                </div>
                <div className={cx('info-text')}>
                  <span className={cx('info-label')}>Location</span>
                  <span className={cx('info-val')}>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div className={cx('connect-socials')}>
              <span className={cx('socials-heading')}>Social Profiles</span>
              <div className={cx('socials-row')}>
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cx('social-pill')}
                >
                  <FiGithub />
                  <span>GitHub</span>
                  <FiExternalLink className={cx('pill-arrow')} />
                </a>
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cx('social-pill')}
                >
                  <FiExternalLink />
                  <span>LinkedIn</span>
                  <FiExternalLink className={cx('pill-arrow')} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Working Contact Form */}
          <motion.div
            className={cx('contact-form-card')}
            initial="hidden"
            whileInView="visible"
            viewport={contentViewport}
            variants={slideRightVariants}
          >
            <form ref={formRef} onSubmit={handleContactSubmit} className={cx('contact-form')}>
              <h3 className={cx('form-title')}>Send a Direct Message</h3>

              {formStatus === 'success' && (
                <div className={cx('status-banner', 'success')}>
                  <FiCheckCircle className={cx('status-icon')} />
                  <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
                </div>
              )}

              {formStatus === 'error' && (
                <div className={cx('status-banner', 'error')}>
                  <span>
                    Something went wrong sending your message. Please try emailing directly at {personalInfo.email}.
                  </span>
                </div>
              )}

              <div className={cx('form-grid')}>
                <div className={cx('form-group')}>
                  <label htmlFor="firstName" className={cx('form-label')}>
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    name="entry.1134725801"
                    placeholder="Nguyen"
                    required
                    className={cx('form-input')}
                  />
                </div>

                <div className={cx('form-group')}>
                  <label htmlFor="lastName" className={cx('form-label')}>
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    name="entry.1668262243"
                    placeholder="Van A"
                    required
                    className={cx('form-input')}
                  />
                </div>
              </div>

              <div className={cx('form-grid')}>
                <div className={cx('form-group')}>
                  <label htmlFor="emailAddress" className={cx('form-label')}>
                    Email Address *
                  </label>
                  <input
                    id="emailAddress"
                    type="email"
                    name="entry.922581185"
                    placeholder="your.email@example.com"
                    required
                    className={cx('form-input')}
                  />
                </div>

                <div className={cx('form-group')}>
                  <label htmlFor="phoneNumber" className={cx('form-label')}>
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    name="entry.781513166"
                    placeholder="+84 ..."
                    className={cx('form-input')}
                  />
                </div>
              </div>

              <div className={cx('form-group')}>
                <label htmlFor="messageBody" className={cx('form-label')}>
                  Message *
                </label>
                <textarea
                  id="messageBody"
                  name="entry.1908653643"
                  placeholder="Describe your project, opportunity, or message..."
                  rows={4}
                  required
                  className={cx('form-textarea')}
                ></textarea>
              </div>

              <Button type="submit" variant="primary" className={cx('submit-btn')} disabled={formStatus === 'sending'}>
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
