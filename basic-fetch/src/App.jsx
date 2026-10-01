import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import Users from './Components/Users';

function App() {

  const [loading, setLoading] = useState(true);

  const [users, setUsers] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";


  async function fetchData() {

    setLoading(true);
    // This returns us a promise.
    let response = await fetch(url);
    let data = await response.json();
    
    // Returns the array of objects.
    setUsers(data);
    setLoading(false);

  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className='container'>

        <h3>Users:</h3>

        {loading ? (<h2>Loading the users the data</h2>) : (
          users.map((user) => {
            return (
              <Users
                key={user.id}
                name={user.name}
                email={user.email}
                address={user.address}
              />
            )
          })
        )}



      </div>
    </>
  )
}

export default App
