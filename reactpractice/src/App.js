
import './App.css';
import Heading from './components/Heading';
import ProfilePic from './logo192.png'


function App() {
  let value = true;
  return (
    <div className="App">
      <Heading username='Ronit !' value = {value} image = {ProfilePic}/>
    </div>
  );
}

export default App;
