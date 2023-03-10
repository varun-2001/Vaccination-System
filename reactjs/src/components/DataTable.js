// // create simple page to display Hello World
import React, { useEffect } from 'react';
import { useState } from 'react';



const DataTable = () => { 
  // store data from api endpoint into variable using fetch 
  const [people, getPeople] = useState([{}]);
  useEffect(()=>{
    fetch('http://localhost:3001/data')
    .then(res => res.json())
    .then(data => {
      getPeople(data);
    })
  },[]);

  console.log(people);
   
  return (
    <div id='datas'>
      <br></br>
       {/* create table to display data from json variable people  */}
      <table id ="DataTable">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Is Vaccinated</th>
            <th>Birthdate</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.is_vaccinated+""}</td>
              {/* person's birthdate in IST time zone */}
              <td>{new Date(person.birthdate).toLocaleString('en-US', { 
                timeZone: 'Asia/Kolkata',
                month: "2-digit",
                day: "2-digit",
                year: "numeric", })}</td>
              <td>{person.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

// export charts and people variable
export default DataTable;