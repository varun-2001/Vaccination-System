import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState();
  const [birthdate, setDOB] = useState();
  const [is_vaccinated, setVaccinated] = useState();

  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {name, gender, birthdate, is_vaccinated}
    fetch('http://localhost:3001/vote', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }
  function getPeople(){
    fetch('http://localhost:3001/data')
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }

  return (
    <div className="create">
      <h2>Enter Vaccination Details</h2>
      <form onSubmit={handleSubmit}>

        <label>Full Name:</label>
        <input 
          type="text" 
          required 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <label>Gender:</label>
        <select
          label="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option selected disabled>Select your option</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        {/* Create a datepicker to choose Date of birth and limit future dates */}
        <label>Date of Birth:</label>
        <input

        // limits future dates and past dates to 100 years
          min={new Date(new Date().setFullYear(new Date().getFullYear() - 100)).toISOString().split("T")[0]}
          max={new Date().toISOString().split("T")[0]}
          type="date"
          value={birthdate}
          onChange={(e) => setDOB(e.target.value)}
        />
        
        <label>Vaccinated:</label>
        <select
          value={is_vaccinated}
          onChange={(e) => setVaccinated(e.target.value)}
        >
          <option selected disabled>Select your option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <button>Enter Data</button>
      </form>
      <br></br>
      <button onClick={()=>navigate("/data")}>View Data</button> 
      <button onClick={()=>navigate("/charts")}>Get Charts</button>
    </div>
  );
}
 
export default Create;