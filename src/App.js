import logo from './logo.svg';
import './App.css';
import Ex1_Box from './pages/Ex1_Box';
import Ex2_Button from './pages/Ex2_Button';
import Ex3_Card from './pages/Ex3_Card';


function App() {
  return (
    <div className="App">
      <Ex1_Box/>
      <Ex2_Button/>
      <div>
      <Ex3_Card/>
      </div>
    </div>
  );
}

export default App;
