import { CSSProperties } from 'react';

interface ButtonProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
  className?: string;
}

const Button = ({ label, onClick, style, className }: ButtonProps) => {
  return (
    <button style={style} className={`button ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
