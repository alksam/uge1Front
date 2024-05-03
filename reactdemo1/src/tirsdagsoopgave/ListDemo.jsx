import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';


function MemberTable({ members }) {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={uuidv4()}> {/* Use uuidv4() to generate unique key */}
              <td>{member.name}</td>
              <td>{member.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  function MemberDemo({ members }) {
    return (
      <div>
        <h4>All Members</h4>
        <MemberTable members={members} /> {/* Render MemberTable and pass down members */}
      </div>
    );
  }
  
export default function ListDemo() {

  const initialMembers = [{name : "Peter", age: 18},
                          {name : "Hanne", age: 35},
                          {name : "Janne", age: 25},
                          {name : "Holger", age: 22}];

  const [members,setMembers] = useState(initialMembers)
  
  return (<MemberDemo members={members} />);
}