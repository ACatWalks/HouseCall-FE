import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import NavBar from './NavBar'

function EditProfileForm() {
    const navigate = useNavigate()

    const userId = useParams()

    const [user, setUser] = useState({
        firstName: sessionStorage.getItem('firstName'),
        lastName: sessionStorage.getItem('lastName'),
        email: sessionStorage.getItem('email'),
        pass: sessionStorage.getItem('pass'),
        role: sessionStorage.getItem('role')
    })

    const [profilepic, setProfilepic] = useState(sessionStorage.getItem('profilepic'))

    const [NPIMedicalLicense, setNPIMedicalLicense] = useState(sessionStorage.getItem('NPIMedicalLicense'))

    async function handleSubmit(e) {
        e.preventDefault()
        if(user.role === 'Doctor') {
            user.NPIMedicalLicense = NPIMedicalLicense
            await fetch(`http://localhost:4000/medical-doctors/${user.email}`, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            sessionStorage.setItem('NPIMedicalLicense', NPIMedicalLicense)
        } else {
            user.profilepic = profilepic
            await fetch(`http://localhost:4000/patients/${user.email}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            sessionStorage.setItem('profilepic', profilepic)
        }
        sessionStorage.setItem('firstName', user.firstName)
        sessionStorage.setItem('lastName', user.lastName)
        sessionStorage.setItem('email', user.email)
        sessionStorage.setItem('pass', user.pass)
        sessionStorage.setItem('role', user.role)
        navigate(`/${userId}`)
    }

    function handleRole(role) {
        if(role === 'Doctor'){
            return (
                <div>
                    <label htmlFor='medicalLicense'>Medical License No.</label>
                    <input required value={NPIMedicalLicense} id="medicalLicense" name="medicalLicense" onChange={e => setNPIMedicalLicense(e.target.value)} />
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
            <h1>Edit Profile Page</h1>
            <form onSubmit={handleSubmit}>
                <input type ='radio' id='doctor' name='role' value="Doctor" onClick={e => setUser({...user, role: "Doctor"})}/>
                <label htmlFor='doctor'>Doctor</label>
                <input type='radio' id='patient' name='role' value="Patient" onClick={e => setUser({...user, role: "Patient"})} />
                <label htmlFor='patient'>Patient</label>
                <label htmlFor='firstName'>First Name</label>
                <input required value={user.firstName} id="firstName" name="firstName" onChange={e => setUser({...user, firstName: e.target.value})} />
                <label htmlFor='lastName'>Last Name</label>
                <input required value={user.lastName} id="lastName" name="lastName" onChange={e => setUser({...user, lastName: e.target.value})} />
                <label htmlFor='email'>Email</label>
                <input required value={user.email} id="email" name="email" onChange={e => setUser({...user, email: e.target.value})} />
                <label htmlFor='password'>Password</label>
                <input required value={user.pass} id="password" name="password" onChange={e => setUser({...user, pass: e.target.value})} />
                {handleRole(user.role)}
                <input type="submit" className='form-btn' value="Save Changes" />
            </form>
        </main>
    )
}

export default EditProfileForm