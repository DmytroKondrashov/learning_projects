function AlterButton({ message, children }) {
  return(
    <button onClick={() => {alert(message)}}>{ children }</button>
  )
}

export default function Toolbar() {
  return(
    <div>
      <AlterButton message="Play">Play Movie</AlterButton>
      <AlterButton message="Save">Save</AlterButton>
    </div>
  )
}
