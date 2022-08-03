import { useState } from "react"
import { useNavigate } from "react-router"
import NavBar from "./NavBar"

function LogInForm() {
    const navigate = useNavigate()

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        pass: '',
        role: '',
        id: ''
    })

    const [credentials, setCredentials] = useState({
        email: '',
        pass: ''
    })

    const [errorMessage, setErrorMessage] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        if(user.role === 'Patient'){
            const response = await fetch(`https://house-calls-be.herokuapp.com/authentication/${credentials.email}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        const data = await response.json()
        if(response.status === 200){
            setUser(data)
            sessionStorage.setItem('firstName', data.firstName)
            sessionStorage.setItem('lastName', data.lastName)
            sessionStorage.setItem('email', data.email)
            sessionStorage.setItem('pass', data.pass)
            sessionStorage.setItem('role', data.role)
            sessionStorage.setItem('profilepic', data.profilepic)
            sessionStorage.setItem('id', data.id)
            navigate('/')
        } else {
            setErrorMessage(data.message)
            }
        }
        else{
            const response = await fetch(`https://house-calls-be.herokuapp.com/authentication/employee/${credentials.email}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            })
            const data = await response.json()
            if(response.status === 200){
                setUser(data)
                sessionStorage.setItem('firstName', data.firstName)
                sessionStorage.setItem('lastName', data.lastName)
                sessionStorage.setItem('email', data.email)
                sessionStorage.setItem('pass', data.pass)
                sessionStorage.setItem('role', data.role)
                sessionStorage.setItem('NPIMedicalLicense', data.NPIMedicalLicense)
                sessionStorage.setItem('id', data.id)
                navigate('/')
            } else {
                setErrorMessage(data.message)
                } 
        }
        
        
    }

    return (
        <main>
            <NavBar />
            <h1>Login</h1>
            {errorMessage !== null? (<div className="danger" role="alert">{errorMessage}</div>): null}
            <form onSubmit={handleSubmit}>
                <h3>Log in as a:</h3>
                <div className='row'>
                <input type ='radio' id='doctor' name='role' value="Doctor" onClick={e => setUser({...user, role: "Doctor"})}/>
                <label htmlFor='doctor'>Doctor</label>
                <input type='radio' id='patient' name='role' value="Patient" onClick={e => setUser({...user, role: "Patient"})} />
                <label htmlFor='patient'>Patient</label>
                </div>
                <div className='row'>
                <label htmlFor="email">Email</label>
                <input type="email" required value={credentials.email} onChange={e => setCredentials({...credentials, email: e.target.value})} name="email" id="email" />
                </div>
                <div className='row'>
                <label htmlFor="password">Password</label>
                <input type="password" required value={credentials.pass} onChange={e => setCredentials({...credentials, pass: e.target.value})} name="password" id="password" />
                </div>
                <div className='row'>
                <input type="submit" value="Login" className="form-btn" />
                </div>
            </form>
        </main>
    )
}

export default LogInForm