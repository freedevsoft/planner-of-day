import { FilterBar, Layout, Searchbar, ToDoItems } from '@components/common';
import TimeBreakDown from '@components/common/TimeBreakDown';

const Home = (): JSX.Element => {
  return (
    <>
      <div className="flex">
        <Searchbar className="flex-1" />
        <TimeBreakDown />
      </div>
      

      <ToDoItems />

      <FilterBar />

      <div className="h-28 mb-4 flex justify-center items-center text-gray-400">
        <span>Drag and drop to reorder list</span>
      </div>
    </>
  );
};

Home.Layout = Layout;

export default Home;
