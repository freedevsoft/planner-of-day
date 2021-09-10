import { FC, useRef, useState } from 'react';
import { ToDoItemModel, useToDo } from '@components/context/context';
import { CheckIcon, CrossIcon } from '@components/icons';
import styles from './ToDoItem.module.css';
import TimeAssign from '../TimeAssign';

interface ToDoItemProps {
  toDo: ToDoItemModel;
  onTimeAssign: any;
}

const ToDoItem: FC<ToDoItemProps> = ({ toDo, onTimeAssign }) => {
  const { toggleToDo, deleteToDo, addTime } = useToDo();
  const ref = useRef<HTMLLIElement>(null);
  const toggleModal = (modalID : string) => {
    document.getElementById(modalID)?.classList.toggle("hidden");
    document.getElementById(modalID + "-backdrop")?.classList.toggle("hidden");
    document.getElementById(modalID)?.classList.toggle("flex");
    document.getElementById(modalID + "-backdrop")?.classList.toggle("flex");
  }
  const timeAssign = ( e : any ) => {
    e.stopPropagation();
    onTimeAssign(toDo);
    toggleModal('modal-time-assign');
  }

  const timeFormat = (time: string) : string => {
    const hourString = time.split(":")[0];
    const minuteString = time.split(":")[1];
    
    return `${hourString?.length === 1 ? "0" + hourString : hourString}:${minuteString?.length === 1 ? "0" + minuteString : minuteString}`
  }
  return (
    <li ref={ref} className={`${styles.container} dark:border-gray-600`}>
      <div
        className={`flex items-center ${
          toDo.isDone
            ? 'line-through text-gray-300 dark:text-gray-600'
            : 'text-black dark:text-white'
        }`}
      >
        <button
          type="button"
          aria-label="Check To Do Button"
          className={`${styles.checkButton} ${
            toDo.isDone
              ? 'text-white bg-gradient-to-r from-lightskyblue to-mediumorchid'
              : 'text-gray-300'
          }`}
          onClick={(): any => toggleToDo(toDo.id)}
        >
          <CheckIcon className={toDo.isDone ? 'stroke-2' : ''} />
        </button>

        <p>{toDo.task}</p>
        {toDo.startTime && <span
          className="ml-4 text-xs px-3 font-medium text-base bg-blue-500 text-white rounded-full py-1"
        >
          {timeFormat(toDo.startTime)}
        </span>}
        <span className="flex-1"></span>
        <button
          type="button"
          aria-label="Delete To Do Item Button"
          className={`${styles.timeAssignButton} ${toDo.startTime === "" || toDo.endTime ==="" ? "bg-blue-500" : "bg-green-500" }`}
          onClick={timeAssign}
        >
          { toDo.startTime === "" || toDo.endTime ==="" ? "Assign " : "Modify "} Time
        </button>
        <button
          type="button"
          aria-label="Delete To Do Item Button"
          className={styles.deleteButton}
          onClick={(): any => {
            deleteToDo(toDo.id);
          }}
        >
          <CrossIcon />
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
