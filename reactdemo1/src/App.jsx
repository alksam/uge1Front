import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonViewer from './components/PersonViewer';
import person from "./assismint1/file2";
import { males, females } from "./assismint1/file2";
import Europe from './Tosdagsopgave/europe';


function App() {
  const [count, setCount] = useState(0)
  const { firstName, email } = person;

    console.log([...males, ...females]);
    console.log([...males, person.firstName, 'Helle', ...females, 'Tina']);
  
    const personV2 = {
      ...person,
      phone: 123456,
      friends: [...males, ...females],
    };
  
    // Log personV2
    console.log(personV2);

  return (
    <>
    <Europe/>
      <h1> hello it me </h1>
      <PersonViewer title={"Person Viewer"} /> 
      <div>
        <h2>Ex2</h2>
        <p>
          First Name: {firstName}, Email: {email}
        </p>
      </div>
    </>
  )
}
const App1 = () => { return (<div> app1 </div>)}
const App2 = () => <div>app2</div>

export default App
export { App1 , App2,}


