import { ChangeEvent, FC, InputHTMLAttributes, KeyboardEvent, useState } from 'react';
import './TimeBreakDown.module.css';
import Modal from 'react-modal';
import { PieChart } from 'react-minimal-pie-chart';

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
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  }

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';]
    console.log("afteropenmodal");
  }

  const closeModal = () => {
    setOpen(false);
  }
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={open}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <PieChart
          data={[
            { title: 'One', value: 10, color: '#E38627' },
            { title: 'Two', value: 15, color: '#C13C37' },
            { title: 'Three', value: 20, color: '#6A2135' },
          ]}
        />
      </Modal>
    </div>
  );
};

export default Input;
