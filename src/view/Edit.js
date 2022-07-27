import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import NavBar from './NavBar'

function EditProfileForm() {
    const navigate = useNavigate()

    const userId = useParams()

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: ''
    })

    const [patientProfileImage, setPatientProfileImage] = useState('')

    const [medicalLicenseNumber, setMedicalLicenseNumber] = useState(0)

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch(`http://localhost:4000/patients/${userId}`)
                const resData = await response.json()
                setUser(resData)
                setPatientProfileImage(resData.patientProfileImage)
            } catch {
                const response = await fetch(`http://localhost:4000/medical-provider/${userId}`)
                const resData = await response.json()
                setUser(resData)
                setMedicalLicenseNumber(resData.medicalLicenseNumber)
            }
        }
        fetchData()
    }, [ userId ])

    async function handleSubmit(e, role) {
        e.preventDefault()
        if(role === 'Doctor') {
            await fetch(`http://localhost:4000/medical-provider/${user.userId}`, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
        } else {
            await fetch(`http://localhost:4000/patients/${user.userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
        }
        navigate(`/${user.userId}`)
    }

    function handleRole(role) {
        if(role === 'Doctor'){
            return (
                <div>
                    <label htmlFor='medicalLicense'>Medical License No.</label>
                    <input required value={medicalLicenseNumber} id="medicalLicense" name="medicalLicense" onChange={e => setMedicalLicenseNumber(e.target.value)} />
                </div>
            )
        } else {
            return (
                <div>
                    <label htmlFor='profilePic'>Profile Picture Link</label>
                    <input id="profilePic" name='profilePic' value={patientProfileImage} onChange={e => setPatientProfileImage(e.target.value)} />
                </div>
            )
        }
    }

    return (
        <main>
            <NavBar />
            <h1>Edit Profile Page</h1>
            <form onSubmit={handleSubmit(user.role)}>
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
                <input required value={user.password} id="password" name="password" onChange={e => setUser({...user, password: e.target.value})} />
                {handleRole(user.role)}
                <input type="submit" className='form-btn' value="Save Changes" />
            </form>
        </main>
    )
}

export default EditProfileForm