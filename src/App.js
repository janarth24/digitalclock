
import './App.css';
import Clock from './Clock';

function App() {
  
  return (
    <div className="App" style={{backgroundImage: 'url("/space1.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
    }}>
      <Clock />
    </div>
  );
}

export default App;
