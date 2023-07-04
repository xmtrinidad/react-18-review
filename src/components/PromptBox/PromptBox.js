import './PromptBox.css';

const PromptBox = ({ prompt }) => {
  return (
    <div className="PromptBox">
      {prompt.text}
    </div>
  );
}

export default PromptBox;