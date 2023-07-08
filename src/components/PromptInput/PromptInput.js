import { useState } from 'react';
import './PromptInput.css';

const PromptInput = (props) => {
  const [inputValue, setInputValue] = useState('');

  // This function will be called every time the input value changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // This function will be called when the button is clicked
  const addPromptHandler = () => {
    const newPrompt = { id: 3, text: inputValue };
    props.onAddPrompt(newPrompt);
  };

  return (
    <div className="PromptInput">
      <textarea type="text" onChange={handleInputChange} placeholder="Enter a prompt here" value={inputValue}></textarea>
      <button onClick={addPromptHandler}>Add Prompt</button>
    </div>
  );
}

export default PromptInput;