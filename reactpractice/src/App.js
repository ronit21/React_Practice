
import './App.css';
import Heading from './components/Heading';
import ProfilePic from './logo192.png'


function App() {
  return (
    <div>
      <Heading username='Ronit' role = 'Front-End Developer' image = {ProfilePic}/>
      <Heading username='Pankaj' role = 'Back-End Developer' image = {ProfilePic}/>
      <Heading username='Dev' role = 'Database Management' image = {ProfilePic}/>
    </div>
  );
}

export default App;
