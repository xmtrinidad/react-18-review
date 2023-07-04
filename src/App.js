import './App.css';
import React, { Component } from 'react';
import Header from './components/Header/Header';
import PromptBox from './components/PromptBox/PromptBox';

class App extends Component {

  state = {
    prompts: [
      { id: 1, text: 'Some prompt text' },
      { id: 2, text: 'Another prompt here'}
    ]
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <main>
          <h2>Latest GPT Prompts</h2>
          <div className="prompts">
            <PromptBox prompt={this.state.prompts[1]}></PromptBox>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
