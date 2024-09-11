import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [fullName,setFullName] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setFullName(firstName+" "+lastName);
  }

  return (
    <div className="App">
    <h1>Full Name Display</h1>
      <form action="submit">
      <div>
      <span>First Name:</span> 
        <input type="text" name="First Name" value={firstName} required onChange={(e)=>setFirstName(e.target.value)}/>
        </div>
        <div>
        <span>Last Name:</span> 
        <input type="text" name="Last Name" value={lastName} required onChange={(e)=>setLastName(e.target.value)}/>
        </div>
        <button type="submit" onClick={onSubmit}>
          Submit
        </button>
        {fullName && <p>Full Name: {fullName}</p>}
      </form>
    </div>
  );
}

export default App;
