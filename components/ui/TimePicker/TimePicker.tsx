import { ChangeEvent, FC, InputHTMLAttributes, KeyboardEvent, useEffect, useState } from 'react';
import { useToDo } from '@components/context/context';

interface Props extends InputHTMLAttributes<HTMLSelectElement> {
  className?: string;
  id?: string;
  value?: string;
  onTimeChange?: any;
}

const TimePicker: FC<Props> = (props) => {
  const {value, onTimeChange} = props;
  // const { addToDo } = useToDo();
  const [hour, setHour] = useState<string|undefined>('0');
  const [minute, setMinute] = useState<string|undefined>('0');

  const handleChangeHour = (e: ChangeEvent<HTMLSelectElement>): any => {
    onTimeChange(`${e.currentTarget.value}:${minute}`)
    setHour(e.currentTarget.value);
  };
  const handleChangeMinute = (e: ChangeEvent<HTMLSelectElement>): any => {
    onTimeChange(`${hour}:${e.currentTarget.value}`)
    setMinute(e.currentTarget.value);
  };
  useEffect( () => {
    if(value === "") {
      setHour('0');
      setMinute('0');
    }
    else {
      setHour(value?.split(':')[0]);
      setMinute(value?.split(':')[1]);
    }
  }, [value, setHour, setMinute])
  return (
    <div className="mt-2 px-5 py-3 bg-blue rounded-lg border border-solid">
      <div className="flex">
        <select
          name="hours"
          className="bg-transparent text-xl appearance-none outline-none"
          onChange={handleChangeHour}
          value={hour}
        >
        {
          [...Array(24)].map( (item, index) => {
            return <option key={index} value={index}>{(index < 10 ? "0" : "") + index}</option>
          })
        }
        </select>
        <span className="text-xl mx-3">:</span>
        <select
          name="minutes"
          className="bg-transparent text-xl appearance-none outline-none"
          onChange={handleChangeMinute}
          value={minute}
        >
        {
          [...Array(60)].map( (item, index) => {
            return <option key={index} value={index}>{(index < 10 ? "0" : "") + index}</option>
          })
        }
        </select>
      </div>
    </div>
  );
};

export default TimePicker;
