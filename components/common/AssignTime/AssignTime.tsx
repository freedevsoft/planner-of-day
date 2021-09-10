import { ChangeEvent, FC, InputHTMLAttributes, KeyboardEvent, useState } from 'react';
import styles from './AssignTime.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  id?: string;
}
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const Input: FC<Props> = (props) => {

  const { className, id, ...rest } = props;
  const toggleModal = (modalID : string) => {
    document.getElementById(modalID)?.classList.toggle("hidden");
    document.getElementById(modalID + "-backdrop")?.classList.toggle("hidden");
    document.getElementById(modalID)?.classList.toggle("flex");
    document.getElementById(modalID + "-backdrop")?.classList.toggle("flex");
  }
  return (
      <>
        <div
        className="hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center"
        id="modal-example-regular">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                  Time Breakdown of the Day
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-gray-300 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => toggleModal('modal-example-regular')}>
                  <span className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none">
                    <i className="fas fa-times"></i>
                  </span>
                </button>
              </div>
              
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-gray-500 text-lg leading-relaxed">
                  I always felt like I could do anything. That’s the main
                  thing people are controlled by! Thoughts- their perception
                  of themselves! They're slowed down by their perception of
                  themselves. If you're taught you can’t do anything, you
                  won’t do anything. I was taught I could do everything.
                </p>
              </div>
              
              <div className="flex items-center justify-end p-6 border-t border-solid border-gray-200 rounded-b">
                <button
                  className="text-purple-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button" onClick={() => toggleModal('modal-example-regular')}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden opacity-25 fixed inset-0 z-40 bg-black" id="modal-example-regular-backdrop"></div>
      </>
  );
};

export default Input;
