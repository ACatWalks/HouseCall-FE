import { useState } from 'react'
import { useNavigate } from 'react-router'
import NavBar from './NavBar'

function SignUpForm() {
    const navigate = useNavigate()

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        pass: '',
        role: '',
    })

    const [profilepic, setProfilepic] = useState('')

    const [NPIMedicalLicense, setNPIMedicalLicense] = useState('NPI')

    async function handleSubmit(e) {
        e.preventDefault()
        if(user.role === 'Doctor'){
            user.NPIMedicalLicense = Number(NPIMedicalLicense)
            await fetch(`https://house-calls-be.herokuapp.com/medical-doctors/`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        navigate('/')
        } else {
            user.profilepic = profilepic
            await fetch(`https://house-calls-be.herokuapp.com/patients/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        navigate('/')
    }
    }

    function handleRole(role) {
        if(role === 'Doctor'){
            return (
                <div>
                    <label htmlFor='medicalLicense'>Medical License No.</label>
                    <input required value={NPIMedicalLicense} id="medicalLicense" name="medicalLicense" onChange={e => {setNPIMedicalLicense(e.target.value)}} />
                </div>
            )
        } else {
            return (
                <div>
                    <label htmlFor='profilePic'>Profile Picture Link</label>
                    <input id="profilePic" name='profilePic' value={profilepic} onChange={e => setProfilepic(e.target.value)} />
                </div>
            )
        }
    }

    return (
        <main>
            <NavBar />
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <h3>Sign Up As A:</h3>
                <div className='row'>
                <input type ='radio' id='doctor' name='role' value="Doctor" onClick={e => setUser({...user, role: "Doctor"})}/>
                <label htmlFor='doctor'>Doctor</label>
                <input type='radio' id='patient' name='role' value="Patient" onClick={e => setUser({...user, role: "Patient"})} />
                <label htmlFor='patient'>Patient</label>
                </div>
                <div className='row'>
                <label htmlFor='firstName'>First Name</label>
                <input required value={user.firstName} id="firstName" name="firstName" onChange={e => setUser({...user, firstName: e.target.value})} />
                </div>
                <div className='row'>
                <label htmlFor='lastName'>Last Name</label>
                <input required value={user.lastName} id="lastName" name="lastName" onChange={e => setUser({...user, lastName: e.target.value})} />
                </div>
                <div className='row'>
                <label htmlFor='email'>Email</label>
                <input required value={user.email} id="email" name="email" onChange={e => setUser({...user, email: e.target.value})} />
                </div>
                <div className='row'>
                <label htmlFor='password'>Password</label>
                <input required value={user.pass} id="password" name="password" onChange={e => setUser({...user, pass: e.target.value})} />
                </div>
                <div className='row'>
                {handleRole(user.role)}
                </div>
                <div className='row'>
                <input type="submit" className='form-btn' value="Sign Up" />
                </div>
            </form>
        </main>
    )
}

export default SignUpForm