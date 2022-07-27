import { useEffect, useState } from "react";
import { useParams } from "react-router";
import NavBar from "./NavBar";

function ProfilePage() {
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

    function handleRole(role) {
        if(role === 'Doctor'){
            return (
                <div>
                    <h5>Medical License No. : {user.medicalLicenseNumber}</h5>
                </div>
            )
        } else {
            return (
                <div>
                    <h5>Profile Image: {user.patientProfileImage}</h5>
                </div>
            )
        }
    }

    return (
        <main>
            <NavBar />
            <h1>My Profile</h1>
            <h5>Name: {user.firstName} {user.lastName}</h5>
            <h5>Email: {user.email}</h5>
            <h5>Role: {user.role}</h5>
            {handleRole(user.role)}
        </main>
    )
}

export default ProfilePage