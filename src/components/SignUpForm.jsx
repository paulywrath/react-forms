import { useState } from "react"

function SignUpForm() {

  const [username, setUsername] = useState(``);
  const [password, setPassword] = useState(``); 
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(`wat`);
  }

  return (
    <>
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <label> Username: 
            <input 
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
        </label>
        <label> Password: 
            <input 
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
        </label>
        <button>Submit</button>
      </form>
    </>
  )
}

export default SignUpForm
