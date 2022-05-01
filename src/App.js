import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import MainApp from './components/MainApp';

function App() {
  
  // state = { characters : [
  //   {name: 'Charlie',
  // job:'Janitor'},
  // {
  //   name: 'Charlie',
  //   job: 'Janitor',
  // },
  // {
  //   name: 'Mac',
  //   job: 'Bouncer',
  // },
  // {
  //   name: 'Dee',
  //   job: 'Aspring actress',
  // },
  // {
  //   name: 'Dennis',
  //   job: 'Bartender',
  // },
  // ]}
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Table characters={characters}/> */}
      <MainApp />
    </div>
  );
}

export default App;
