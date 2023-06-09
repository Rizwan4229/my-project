import logo from './logo.svg';
import './App.css';

function App() {
  const isDocker = process.env.REACT_APP_IS_DOCKER === 'true';

  return (
    <div>
      <h1>Hello, React!</h1>
      {isDocker ? <p>Running inside Docker</p> : <p>Running on local system</p>}
    </div>
  );
}

export default App;
