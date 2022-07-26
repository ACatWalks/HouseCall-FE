import { useState } from 'react'
import { useNavigate } from 'react-router'
import NavBar from './NavBar'

function SignUpForm() {
    const navigate = useNavigate()

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    async function handleSubmit(e) {
        e.preventDefault()
        await fetch(`http://localhost:5000/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        navigate('/')
    }

    return (
        <main>
            <NavBar />
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='firstName'>First Name</label>
                <input required value={user.firstName} id="firstName" name="firstName" onChange={e => setUser({...user, firstName: e.target.value})} />
                <label htmlFor='lastName'>Last Name</label>
                <input required value={user.lastName} id="lastName" name="lastName" onChange={e => setUser({...user, lastName: e.target.value})} />
                <label htmlFor='email'>Email</label>
                <input required value={user.email} id="email" name="email" onChange={e => setUser({...user, email: e.target.value})} />
                <label htmlFor='password'>Password</label>
                <input required value={user.password} id="password" name="password" onChange={e => setUser({...user, password: e.target.value})} />
                <input type="submit" className='form-btn' value="Sign Up" />
            </form>
        </main>
    )
}

export default SignUpForm