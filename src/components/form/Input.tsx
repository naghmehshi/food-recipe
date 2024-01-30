import React from "react";

interface InputProps {
  name: string;
  type: string;
  value: string | number;
  onChange: (name: string, value: string) => void;
  placeholder: string;
  className: string;
}
const Input: React.FC<InputProps> = ({
  name,
  type,
  value,
  onChange,
  placeholder,
  className="",
}) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.name, e.target.value);
  };
  return (
    <input
      className={className}
      name={name}
      type={type}
      value={value}
      onChange={onChangeHandler}
      placeholder={placeholder}
    />
  );
};

export default Input;
