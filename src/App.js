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
      <form action="submit" onSubmit={onSubmit}>
      <div>
      <span>First Name:</span> 
        <input type="text" name="First Name" value={firstName} required onChange={(e)=>{
          const value = e.target.value;
          if (/^[a-zA-Z]*$/.test(value)) {
            setFirstName(value);
          }
        }}/>
        </div>
        <div>
        <span>Last Name:</span> 
        <input type="text" name="Last Name" value={lastName} id="" required onChange={(e)=>{
          const value = e.target.value;
          if (/^[a-zA-Z]*$/.test(value)) {
            setLastName(value);
          }
        }}/>
        </div>
        <button type="submit" >
          Submit
        </button>
        <p>Full Name: {fullName}</p>
      </form>
    </div>
  );
}

export default App;
