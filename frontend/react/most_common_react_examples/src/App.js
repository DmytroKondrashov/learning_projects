import Toolbar from './components/toolbar'
import './App.css';
import {UseStateComponent, Person, List} from './components/use_state_component';
import UseReducerComponent from './components/use_reducer_component';

function App() {
  return (
    <>
      <Toolbar />
      <UseStateComponent initialCount={3} />
      <Person />
      <List/>
      <UseReducerComponent/>
    </>
  );
}

export default App;
