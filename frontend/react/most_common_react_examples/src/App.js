import Toolbar from './components/toolbar'
import './App.css';
import {UseStateComponent, Person, List} from './components/use_state_component';
import UseReducerComponent from './components/use_reducer_component';
import UseEffectComponent from './components/use_effect_component';
import React from 'react';
import ChildComponent from './components/context/child_component';

export const UserContext = React.createContext();

function App() {
  return (
    <>
      <Toolbar />
      <UseStateComponent initialCount={3} />
      <Person />
      <List/>
      <UseReducerComponent />
      <UseEffectComponent />

      <UserContext.Provider value={'John Doe'}>
        <ChildComponent/>
      </UserContext.Provider>
    </>
  );
}

export default App;
