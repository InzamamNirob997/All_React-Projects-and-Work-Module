import Data from './Components/Data';
import './App.css';

function App() {
  return (
    <div className="App">

     <nav className='container'>
      <div className="logo">
        <img  src="/images/brand_logo.png" alt="" srcset="" />
      </div>


      <ul>
        <li href ="#">Home</li>
        <li href ="#">Location</li>
        <li href ="#">About</li>
        <li href ="#">Contact</li>
      </ul>
      <button>Login</button>
     
     </nav>

     <Data />
  
    </div>
  
  
  );
}

export default App;
