
import './App.css';
import CounterApp from './CounterApp';
import Greeting from './Greeting';

function App() {
  
  const name = "kalyani akash dinde";
  const age = 31;
  const email = "sankpalkalyani93@gmail.com";
  
  return (
    <div className="App">
      <header className="App-header">
        <h2>Person Information</h2>
        <p>Name : {name}, Age : {age}, Email : {email}</p>
        <p><Greeting /></p>
        <p><img src={`${process.env.PUBLIC_URL}/cat.jpg`} alt='cat'/></p>   
        <p><CounterApp /></p> 
      </header>
    </div>
  );
}

export default App;
