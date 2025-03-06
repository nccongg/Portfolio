import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

interface InputProp {
  type: string;
  placheholder: string;
}

const Input: React.FC<InputProp> = ({ type, placheholder }) => {
  return (
    <div className={cx('input-container')}>
      <input type={type} placeholder={placheholder} className={cx('input')} />
    </div>
  );
};

export default Input;
