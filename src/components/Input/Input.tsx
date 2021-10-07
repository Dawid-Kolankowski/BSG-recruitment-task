import { InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input = ({ name, label, ...rest }: IInputProps) => {
  return (
    <div className="input__container">
      <label htmlFor={name}>{label}</label>
      <input id={name} {...rest}></input>
    </div>
  );
};

export default Input;
