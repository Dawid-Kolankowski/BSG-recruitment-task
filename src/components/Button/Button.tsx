import { CSSProperties } from 'react';

interface ButtonProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
}

const Button = ({ label, onClick, style }: ButtonProps) => {
  return (
    <button style={style} className="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
