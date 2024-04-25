import React, { useState ,useEffect} from "react";


function PersonViewer({title}) {
    const [namestat,setNamestat]= useState(name);
    const [users,setUsers] = useState([{name: "ahmad ", email:" skask@ss"}]);
    useEffect (()=>{
      const myPromise = fetch("https://jsonplaceholder.typicode.com/users");
      const mySecondPromis =myPromise.then((Response)=> Response.json());
      mySecondPromis.then((data)=>{
        setUsers(data);
      })
       
    },[])
    return (
   <>
      
     <h3>{title}</h3> 
    { users.map((user , index )=> ( 
        <>
        <ShowName name= {user.name} />
        <div> email :  {user.email} </div>
        </>


    ))}

   


    </>
    )
}
const ShowName = ({name})=> <h3>{name}</h3>

export default PersonViewer;