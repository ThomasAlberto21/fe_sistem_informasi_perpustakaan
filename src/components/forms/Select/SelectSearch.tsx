import React from 'react';
import Select, { ActionMeta } from 'react-select';

interface SelectSearchProps {
  id: string;
  name: string;
  value: string;
  onChange: (value: string | null, actionMeta: ActionMeta<string>) => void;
  placeholder: string;
  options: string[] | any;
  label: string;
  error: string;
  isInputFilled: string;
}

const SelectSearch: React.FC<SelectSearchProps> = ({ id, name, value, onChange, placeholder, options, label, error, isInputFilled }) => {
  const isFilled = value !== '';

  return (
    <div className="mb-5">
      <label htmlFor={id}>{label}</label>
      <Select id={id} name={name} value={options.value} onChange={onChange} placeholder={placeholder} options={options} className="mb-1" />

      {error && <span className="text-danger">{error}</span>}
      {isFilled && !error && <span className="text-success">{isInputFilled}</span>}
    </div>
  );
};

export default SelectSearch;
