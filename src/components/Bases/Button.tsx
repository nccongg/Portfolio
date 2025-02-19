import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ variant, className, children, ...props }) => {
  return (
    <button className={cx('button', variant, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
