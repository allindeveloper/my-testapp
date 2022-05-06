import logo from './assets/svg/logo.svg';
import {useState} from 'react';
import './App.css';
import Button from "./components/Button/Button";
import InputField from "./components/Input/InputField";
const App = () => {
  // useState is one of the react hooks in functional components.
  // Returns a stateful value, and a function to update it.

  const [counter, setCounter] = useState(0)


  const incrementCounter = () => {
    const newCounter = counter + 1
    setCounter(newCounter)
  }

  const decrementCounter = () => {
    const newCounter = counter - 1;
    if(newCounter <=0){
      alert('Hey You cannot go below this point')
    }else{
    setCounter(newCounter)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
       
        <p>
          <InputField  value={counter} />
        </p>
        <p>
          <Button handleClick={incrementCounter} title="Increment Counter" />
        </p>
        <p>
          <Button handleClick={decrementCounter}  title="Decrement Counter" />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
