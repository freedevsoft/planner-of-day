import { ChangeEvent, FC, InputHTMLAttributes, KeyboardEvent, useState } from 'react';
import { useToDo } from '@components/context/context';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  id?: string;
  date?: Date;
}

const Input: FC<Props> = (props) => {
  const { addToDo } = useToDo();
  const [inputvalue, setInputValue] = useState('');
  const { className, id, date, ...rest } = props;
  const handleInputValue = (e: ChangeEvent<HTMLInputElement>): any => {
    setInputValue(e.currentTarget.value);
  };
  const addNewToDo = (): any => {
    if (inputvalue) {
      addToDo(inputvalue, date);
      setInputValue('');
    }
  };

  const handleEnterButton = (e: KeyboardEvent<HTMLInputElement>): any => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addNewToDo();
    }
  };

  

  return (
    <label htmlFor={id} className="w-full flex items-center">
      <input
        id={id}
        type="text"
        autoComplete="off"
        placeholder="Create a new to do..."
        className={className}
        value={inputvalue}
        onChange={handleInputValue}
        onKeyUp={handleEnterButton}
        {...rest}
      />
    </label>
  );
};

export default Input;
