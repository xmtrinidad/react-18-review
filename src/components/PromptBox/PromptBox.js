import './PromptBox.css';

const PromptBox = ({ prompt }) => {
  return (
    <div className="PromptBox">
      <p>{prompt.text}</p>
    </div>
  );
}

export default PromptBox;