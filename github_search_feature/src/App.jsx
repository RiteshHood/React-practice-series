import { useState } from 'react'
import './App.css'

function App() {
  const [user, setGihtubUser] = useState(null);

  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    // prevent the default form submission.
    e.preventDefault();
    fetchGithubUser();
  }

  async function fetchGithubUser() {
    const url = `https://api.github.com/users/${username}`

    let response = await fetch(url);

    console.log(response.status);
    let user = await response.json();

    setGihtubUser(user);
  }

  return (
    <>
      <div className="container">
        <form action="" onSubmit={handleSubmit}>
          <div className="title">
            <h1>Github User Search</h1>
          </div>
          <div className="form-container">
            <label htmlFor="username">Enter username : </label>
            <input type="text" name="username" id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="search-btn">
            <button type='submit'> Search user</button>
          </div>
        </form>
        <div className="display-user">
          {
            user &&
            <div className='user-profile'>
              <h2>User id: {user.id}</h2>
              <h2>Name: {user.name}</h2>
              <h3>Location: {user.location}</h3>
              <p>Bio: {user.bio}</p>
              <h3>Followers: {user.followers}</h3>
              <h3>Following: {user.following}</h3>
            </div>
          }
        </div>

      </div>
    </>
  )
}

export default App
