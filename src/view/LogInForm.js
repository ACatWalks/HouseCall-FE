import { useState } from "react"
import { useNavigate } from "react-router"
import NavBar from "./NavBar"

function LogInForm() {
    const navigate = useNavigate()

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const [errorMessage, setErrorMessage] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        
        const response = await fetch(`http://localhost:4000/authentication`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        const data = await response.json()
        if(response.status === 200){
            setUser(data.user)
            navigate('/')
        } else {
            setErrorMessage(data.message)
        }
    }

    return (
        <main>
            <NavBar />
            <h1>Login</h1>
            {errorMessage !== null? (<div className="danger" role="alert">{errorMessage}</div>): null}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" required value={credentials.email} onChange={e => setCredentials({...credentials, email: e.target.value})} name="email" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" required value={credentials.password} onChange={e => setCredentials({...credentials, password: e.target.value})} name="password" id="password" />
                <input type="submit" value="Login" className="form-btn" />
            </form>
        </main>
    )
}

export default LogInForm