import React from "react";

interface InputProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: [],
}
const Select: React.FC<InputProps> = ({
  name,
  value,
  onChange,
  options,
}) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e);
  };
  return (
    <select
      name={name}
      value={value}
      onChange={onChangeHandler}
    
    >
     {
        // options.map(item=> <option value={item.value}>{item.value}</option>)
     }
    </select>
  );
};

export default Select;
