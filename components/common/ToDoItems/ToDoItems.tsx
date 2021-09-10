/* eslint-disable indent */
import { FC, useCallback, useEffect, useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { ToDoItemModel, useToDo, View } from '@components/context/context';
import { ToDoItem } from '@components/common';
import styles from './ToDoItems.module.css';
import TimeAssign from '../TimeAssign';

interface Props {
  onLoadData?: any;
}

const ToDoItems: FC<Props> = (props) => {
  const { onLoadData } = props;
  const { toDoItems, view, clearToDoCompleted, sortToDoItems, changeToDo } = useToDo();
  onLoadData(toDoItems);
  const [ data, setData ] = useState<ToDoItemModel>();
  const handleToDoToShow = useCallback(
    (value: View) => {
      switch (value) {
        case 'all': {
          return [...toDoItems];
        }

        case 'active': {
          return toDoItems.filter((toDoItem: ToDoItemModel) => toDoItem.isDone === false);
        }

        case 'completed': {
          return toDoItems.filter((toDoItem: ToDoItemModel) => toDoItem.isDone === true);
        }
      }
    },
    [toDoItems],
  );

  useEffect(() => {
    handleToDoToShow(view);
    return (): any => handleToDoToShow(view);
  }, [handleToDoToShow, view]);

  const toDoItemsToShow = handleToDoToShow(view);

  const showItemsLeft = toDoItems.filter((toDoItem: ToDoItemModel) => toDoItem.isDone === false).length;
  
  const handleChangeTime = (item: ToDoItemModel) => {
    changeToDo(item);
  }
  const handleClickTimeAssign = ( toDo : ToDoItemModel) => {
    setData(toDo);
  }
  console.log(toDoItems);
  return (
    <>
      <ReactSortable
        tag="ul"
        list={toDoItems}
        setList={sortToDoItems}
        group="groupName"
        animation={300}
        delay={3}
        className={`${styles.container} ${styles.scrollY} dark:bg-gray-800`}
      >
        {toDoItemsToShow.map((toDo: ToDoItemModel) => (
          <ToDoItem key={toDo.id} toDo={toDo} onTimeAssign={handleClickTimeAssign} />
        ))}
      </ReactSortable>

      <div className={`${styles.toDoItemFooter} dark:bg-gray-800 border-b dark:border-gray-600`}>
        <p>
          <span>{showItemsLeft}</span> items left
        </p>

        <button
          type="button"
          className={styles.clearButton}
          onClick={(): any => clearToDoCompleted()}
        >
          clear completed
        </button>
        <TimeAssign data={data} onClickSave={handleChangeTime} />
      </div>
    </>
  );
};

export default ToDoItems;
