import { useContext } from 'react';
import { UserContext } from '../../App';

export default function GrandchildComponent() {
  const user = useContext(UserContext)

  return <h1>{user}</h1>
}