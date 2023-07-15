import './MetaDataModal.css'
import { useRef, useEffect } from 'react';



const MetaDataModal = ({modalOpen}) => {
  const dialog = useRef(null);

  useEffect(() => {
    if (modalOpen) {
      dialog.current.showModal();
    }
  });
  
  return (
    <dialog ref={dialog} className="MetaDataModal">
      <form method="dialog">
        <div className="input-container">
          <label htmlFor="add_tag">Add Tag:</label>
          <input type="text" id="add_tag" name="add_tag" />
          <button>ADD</button>
        </div>
        <div className="input-container">
          <label htmlFor="gpt_link">ChatGPT Link:</label>
          <input type="text" id="gpt_link" />
        </div>
        <button>CANCEL</button>
        <button>SAVE</button>
      </form>
    </dialog>
  );
};

export default MetaDataModal;