import Toolbar from './components/toolbar'
import './App.css';
import {UseStateComponent, Person, List} from './components/use_state_component';

function App() {
  return (
    <>
      <Toolbar />
      <UseStateComponent initialCount={3} />
      <Person />
      <List/>
    </>
  );
}

export default App;
