import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import PromptBox from './components/PromptBox/PromptBox';
import PromptInput from './components/PromptInput/PromptInput';
import MetaDataModal from './components/Modals/MetaDataModal';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       prompts: [
//         { id: 1, text: 'Some prompt text' },
//         { id: 2, text: 'Another prompt here'}
//       ]
//     }
//   }

//   render() {

//     const addPromptHandler = async () => {
//       const newPrompt = { id: 3, text: 'A new prompt' };
//       const prompts = [...this.state.prompts];
//       prompts.push(newPrompt);
//       await this.setState({ prompts });

//       console.log(this.state.prompts);
//     }

//     return (
//       <div className="App">
//         <Header></Header>
//         <main>
//           <h2>Latest GPT Prompts</h2>
//           <div className="prompts">
//             <PromptBox prompt={this.state.prompts[0]}></PromptBox>
//           </div>
//           <div className="add-prompt-container">
//             <button onClick={addPromptHandler}>Add Prompt</button>
//           </div>
//         </main>
//       </div>
//     );
//   }
// }

const App = () => {
  const [prompts, setPrompts] = useState(
    [
      { id: 1, text: 'Some prompt text' },
      { id: 2, text: 'Another prompt here'}
    ]
  );

  const [modalOpen, setModalOpen] = useState(false);

  const modalOpenHandler = () => {
    setModalOpen(true);
  }

    const addPromptHandler = (newPrompt) => {
      setPrompts((prevState) => {
        console.log(prevState);
        return [...prevState, newPrompt];
      });
    }

    // useEffect(() => {
    //   console.log(prompts);
    // }, [prompts]);

    return (
      <div className="App">
        <Header></Header>
        <main>
          <h2>Latest GPT Prompts</h2>
          <PromptInput onAddPrompt={addPromptHandler}></PromptInput>
          <div className="prompts-container">
            <h2>Prompts</h2>
            <div className="prompts">
              {prompts.map((prompt) => 
                <PromptBox key={prompt.id} prompt={prompt}></PromptBox>
              )}
            </div>
            
          </div>
          <button onClick={modalOpenHandler}>Open Modal</button>
        </main>
        
        {/* Modals */}

        <MetaDataModal modalOpen={modalOpen} />
      </div>
    );
}

export default App;
