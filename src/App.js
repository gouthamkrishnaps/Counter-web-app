import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div style={{height:'100vh'}}  className="d-flex justify-content-center align-items-center w-100 bg-dark">
      <div  className="counter d-flex justify-content-center align-items-center rounded p-5 bg-light flex-column">
        <h1 style={{color:'black',fontWeight:'bold'}}>Counter Application</h1>
        <Counter/>
      </div>
    </div>
  );
}

export default App;
