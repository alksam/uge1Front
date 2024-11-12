import './styels/App.css'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'
import { useEffect, useState } from'react'
import { fetchData } from '../util/persistence'


const blankPerson = {
  id: "",
      age: "",
      name: "",
      email: "",
      gender: ""
};

function App() {
  const [persons, setPersons] = useState([])
  const [personToEdit, setPersonToEdit] = useState([blankPerson])

  const APIURL = 'http://localhost:3000/api'


  function editPerson (person) {
    setPersonToEdit(person)
  }

  function mutatePerson (person) {
    if (person.id != "") 
    {
      updateperson(person)

  }else {
    createperson(person)
  }
}

  function createperson (person) {
    fetchData(`${APIURL}`
    ,(person )=> setPersons([...persons,person]),
    "POST",
    person)
  }

  function updateperson (person) {
    fetchData(`${APIURL}/${person.id}`
    ,(person )=>{setPersons(persons.map((p) =>( p.id === person.id ? {...person} : p)));},
    "PUT",
    person);
  }

  function getPerson(callback) {
    fetchData(APIURL,callback)
  
  }

  function deletePersonById(personId){
    fetchData(`${APIURL}/${personId}`,()=>{},"DELETE");
    
    setPersons([...persons.filter(p => p.id !== personId)]);
  }

useEffect(() => {

 getPerson((date) => setPersons(date))
},[]);



  return (
    <>
     <div>persondb </div> 
     <PersonForm blankPerson={blankPerson} personToEdit={personToEdit} mutatePerson={mutatePerson}/>
      <PersonList persons={persons} deletePersonById={deletePersonById} editPerson={editPerson}/>
      
      
    </>
  )
}

export default App
