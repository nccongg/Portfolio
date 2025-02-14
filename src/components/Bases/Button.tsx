import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ variant, children, ...props }) => {
  return (
    <button className={cx('button', variant)} {...props}>
      {children}
    </button>
  );
};

export default Button;
