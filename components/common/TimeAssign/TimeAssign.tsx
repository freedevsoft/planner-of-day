import { ToDoItemModel } from '@components/context/context';
import { TimePicker } from '@components/ui';
import { ChangeEvent, FC, InputHTMLAttributes, KeyboardEvent, useEffect, useState } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  data?: ToDoItemModel;
  onClickSave?: any;
}
const Input: FC<Props> = (props) => {

  const { data, onClickSave } = props;
  const toggleModal = (modalID : string) => {
    document.getElementById(modalID)?.classList.toggle("hidden");
    document.getElementById(modalID + "-backdrop")?.classList.toggle("hidden");
    document.getElementById(modalID)?.classList.toggle("flex");
    document.getElementById(modalID + "-backdrop")?.classList.toggle("flex");
  }
  const [startTime, setStartTime] = useState<string|undefined>("");
  const [endTime, setEndTime] = useState<string|undefined>("");
  const handleChangeStart = ( value:string ) => {
    setStartTime(value);
  }
  const handleChangeEnd = ( value:string ) => {
    setEndTime(value);
  }
  const handleSaveChange = () => {
    onClickSave({...data, startTime, endTime});
    toggleModal("modal-time-assign");
  }
  useEffect( () => {
    setStartTime(data?.startTime);
    setEndTime(data?.endTime);
  }, [data])
  return (
      <>
        <div
        className="hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center"
        id="modal-time-assign">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                  Time Assign
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-gray-300 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => toggleModal('modal-time-assign')}>
                  <span className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none">
                    <i className="fas fa-times"></i>
                  </span>
                </button>
              </div>
              <div className="flex">
                <div className="relative p-6 flex-auto">
                  <span>From</span>
                  <TimePicker value={startTime} onTimeChange={handleChangeStart} />
                </div>
                <div className="relative p-6 flex-auto">
                  <span>To</span>
                  <TimePicker value={endTime} onTimeChange={handleChangeEnd} />
                </div>
              </div>

              <div className="flex items-center justify-end p-6 border-t border-solid border-gray-200 rounded-b">
                <button
                  className="text-purple-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button" onClick={() => toggleModal('modal-time-assign')}>
                  Close
                </button>
                <button
                  className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button" onClick={handleSaveChange}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden opacity-25 fixed inset-0 z-40 bg-black" id="modal-time-assign-backdrop"></div>
      </>
  );
};

export default Input;
