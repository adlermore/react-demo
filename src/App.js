
import logo from './logo.svg';
import './App.css';
import Name from './demo/firstcomp';

function Surname(props){
  var hetaqrqirName = props.name;
  return(
    <p>My Surename is Jonson & {hetaqrqirName}</p>
  );
}

function Person(){
  let name= "Jony";
  return (
    <div>
      <h1>
        Welcome
      </h1>
      <p>Heloo World my name is {name}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Person />
        <Name />
        <Surname name='Ape'/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello 
        </a>
      </header>
    </div>
  );
}

export default App;
