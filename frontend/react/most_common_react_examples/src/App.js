import Toolbar from './components/toolbar'
import './App.css';
import {UseStateComponent, Person, List} from './components/use_state_component';
import UseReducerComponent from './components/use_reducer_component';
import UseEffectComponent from './components/use_effect_component';
import { AuthProvider } from './components/context/context_provider';
import UserStatus from './components/context/context_consumer';

function App() {
  return (
    <>
      <Toolbar />
      <UseStateComponent initialCount={3} />
      <Person />
      <List/>
      <UseReducerComponent />
      <UseEffectComponent />

      <AuthProvider>
        <UserStatus />
      </AuthProvider>
    </>
  );
}

export default App;
