import React, {useEffect, useState} from 'react';
import "./App.css"
function App() {
  const [users,setUsers]=useState([])
  
  const fetchData = () =>{
    fetch("https://reqres.in/api/users")
    .then(response => {
      return response.json()
    })
    .then(data => {
      setUsers(data.data)
    })
  }
    useEffect(()=>{
      fetchData()
    },[])
 
  return (
    <div className="App">
      <table>
        <tr>
          <th></th>
          <th>id</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {users.map((data) => (
          <tr key={data.id}>
          <td> <img src={data.avatar} alt="" /> </td> 
          <td>{data.id}</td>
          <td>{data.first_name} {data.last_name}</td>
          <td>{data.email}</td>
          </tr>
        ))}
       </table>
    </div>
  );
}

export default App;
