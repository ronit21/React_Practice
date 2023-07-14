// import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
// const Heading =()=> <h1>Hello World !</h1> // Moved to separate file Heading.js

function App() {
  return (
    <div className="App">
      <Heading username='Ronit !'/>
    </div>
  );
}

export default App;
