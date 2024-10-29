import Toolbar from './components/toolbar'
import './App.css';
import {UseStateComponent, Person} from './components/use_state_component';

function App() {
  return (
    <>
      <Toolbar />
      <UseStateComponent initialCount={3} />
      <Person />
    </>
  );
}

export default App;
