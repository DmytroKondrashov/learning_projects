import Toolbar from './components/toolbar'
import './App.css';
import UseStateComponent from './components/use_state_component';

function App() {
  return (
    <>
      <Toolbar />
      <UseStateComponent initialCount={3} />
    </>
  );
}

export default App;
