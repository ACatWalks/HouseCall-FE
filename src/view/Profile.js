import { useEffect, useState } from "react";
import { useParams } from "react-router";
import NavBar from "./NavBar";

function ProfilePage() {
    const userId = useParams()

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        pass: '',
        role: ''
    })

    const [profilepic, setProfilepic] = useState('')

    const [NPIMedicalLicense, setNPIMedicalLicense] = useState(0)

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch(`http://localhost:4000/patients/${userId}`)
                const resData = await response.json()
                setUser(resData)
                setProfilepic(resData.profilepic)
            } catch {
                const response = await fetch(`http://localhost:4000/medical-doctors/${userId}`)
                const resData = await response.json()
                setUser(resData)
                setNPIMedicalLicense(resData.NPIMedicalLicense)
            }
        }
        fetchData()
    }, [ userId ])

    function handleRole(role) {
        if(role === 'Doctor'){
            return (
                <div>
                    <h5>Medical License No. : {user.NPIMedicalLicense}</h5>
                </div>
            )
        } else {
            return (
                <div>
                    <h5>Profile Image: {user.profilepic}</h5>
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