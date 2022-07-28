import { useState } from "react";
import NavBar from "./NavBar";

function ProfilePage() {

    const [user, setUser] = useState({
        firstName: sessionStorage.getItem('firstName'),
        lastName: sessionStorage.getItem('lastName'),
        email: sessionStorage.getItem('email'),
        pass: sessionStorage.getItem('pass'),
        role: sessionStorage.getItem('role')
    })

    const [profilePic, setProfilePic] = useState('')

    const [NPIMedicalLicense, setNPIMedicalLicense] = useState(0)

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
                    <h5>Profile Image: {user.profilePic}</h5>
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