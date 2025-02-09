import './App.css'
import { Student } from "./components/Student";

function App() {

  return (
    <div>
      <h1>Welcome to my first React application</h1>
      <div>
        <Student name="jianying" title="The Tickler" rating={100} />
        <Student name="jack" title="The rat" rating={49} /> 
        <Student name="john" title="The farmer" rating={20} />
        <Student name="max" title="The max max" rating={9} />
      </div>
    </div>
  );
}

export default App