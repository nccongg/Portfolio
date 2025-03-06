import classNames from 'classnames/bind';
import styles from './contact.module.scss';
import { FaChevronDown, FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import '@radix-ui/react-select';

import { Select } from 'radix-ui';
import Button from '../../components/Bases/Button';
import { useRef } from 'react';

const cx = classNames.bind(styles);

const infor = [
  {
    icon: FaPhone,
    title: 'Phone',
    description: '(84+) 973 371 776',
  },
  {
    icon: FaEnvelope,
    title: 'Email',
    description: 'chicong442004@gmail.com',
  },
  {
    icon: FaLocationDot,
    title: 'Address',
    description: 'District 5, Ho Chi Minh city',
  },
];

const options = [
  { value: 'web-design', label: 'Web design' },
  { value: 'app-design', label: 'App design' },
  { value: 'logo-design', label: 'Logo design' },
];

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    fetch('https://docs.google.com/forms/d/e/1FAIpQLSebBbOhjBIU3wu6b5S9Qg6K-8CreB4aoJKPS97_y5wGDFkKXA/formResponse', {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    })
      .then(() => {
        alert('Message sent successfully!');
        form.reset();
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        alert('Error sending message. Please try again!');
      });
  }

  const handleClick = () => {
    if (formRef.current) {
      handleSubmit({ preventDefault: () => {}, currentTarget: formRef.current } as React.FormEvent<HTMLFormElement>);
    }
  };

  return (
    <div className={cx('container')}>
      <form className={cx('form-container')} ref={formRef} onSubmit={handleSubmit}>
        <h2 className={cx('form-title')}>Let's work together</h2>
        <p className={cx('form-description')}>Hello, if you have any problem, don't hesitate to contact to me.</p>
        <div className={cx('input-container')}>
          <div className={cx('input-wrapper')}>
            <input type="text" name="entry.1134725801" placeholder="First name" required className={cx('input')} />
          </div>
          <div className={cx('input-wrapper')}>
            <input type="text" name="entry.1668262243" placeholder="Last name" required className={cx('input')} />
          </div>
          <div className={cx('input-wrapper')}>
            <input type="email" name="entry.922581185" placeholder="Email address" required className={cx('input')} />
          </div>
          <div className={cx('input-wrapper')}>
            <input type="text" name="entry.781513166" placeholder="Phone number" required className={cx('input')} />
          </div>
        </div>
        <div className={cx('select')}>
          <Select.Root>
            <Select.Trigger className={cx('selectTrigger')}>
              <Select.Value placeholder="Select a service" />
              <Select.Icon className={cx('selectIcon')}>
                <FaChevronDown />
              </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content className={cx('selectContent')}>
                <Select.Viewport className={cx('selectViewport')}>
                  <Select.Group>
                    <Select.Item className={cx('selectItem')} value="web-design">
                      <Select.ItemText>Web design</Select.ItemText>
                    </Select.Item>
                    <Select.Item className={cx('selectItem')} value="app-design">
                      <Select.ItemText>App design</Select.ItemText>
                    </Select.Item>
                    <Select.Item className={cx('selectItem')} value="logo-design">
                      <Select.ItemText>Logo design</Select.ItemText>
                    </Select.Item>
                  </Select.Group>
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>
        <div className={cx('textAreaWrapper')}>
          <textarea
            name="entry.1908653643"
            placeholder="Type your message here."
            required
            className={cx('textArea')}
          ></textarea>
        </div>
        <div className={cx('sendButonWrapper')}>
          <Button type="submit" className={cx('sendButon')} variant="primary">
            Send message
          </Button>
        </div>
      </form>

      <div className={cx('infor-container')}>
        {infor.map((item, index) => {
          const ItemIcon = item.icon;
          return (
            <div className={cx('infor-item')} key={index}>
              <div className={cx('icon-wrapper')}>
                <ItemIcon className={cx('icon')} />
              </div>
              <div className={cx('infor-wrapper')}>
                <span className={cx('infor-title')}>{item.title}</span>
                <span className={cx('infor-description')}>{item.description}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Contact;
