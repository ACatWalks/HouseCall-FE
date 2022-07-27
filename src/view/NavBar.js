import React, { useState, useEffect } from 'react'
import {Link, Outlet} from 'react-router-dom'
import { useParams } from 'react-router'

function NavBar() {

    const userId = useParams()

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: ''
    })

    const [patientProfileImage, setPatientProfileImage] = useState('')

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
            }
        }
        fetchData()
    }, [ userId ])

    function handleRole(role) {
        if(role === 'Doctor'){
            return (
            <li>
                Welcome Dr. {user.firstName} {user.lastName}
            </li>
            )
        } else if(role === 'Patient'){
            return (
            <li>
                You are logged in as {user.firstName} {user.lastName}
            </li>
            )
        } else{
            return (
                <div>
                    You must be logged in.
                </div>

            )
        }
    }

    function pic() {
        if(patientProfileImage){
            return (
                <div>
                    <img src={patientProfileImage} />
                </div>
            )
        }
    }

    function toggle() {
        if(!user.email){
            return (
                <li>
                    <Link to="/login">Log In</Link>
                </li>
            )
        } else{
            return (
                <li>
                  <Link to="/" onClick={e => setUser({firstName: '', lastName: '', email: '', password: '', role: ''})}>Log Out</Link>  
                </li>
            )
        }
    }

    return (
        <div className='nav'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                {toggle()}
                <li><Link to="/edit">Edit Profile</Link></li>
                <li><Link to="/symptoms">Report Symptoms</Link></li>
                <li><Link to="/chat">Chat With a Doctor</Link></li>
            </ul>
            {handleRole(user.role)}
            {pic}
            <Outlet />
        </div>
    )
}

export default NavBar