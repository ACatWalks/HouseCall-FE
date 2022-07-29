import React, { useState } from 'react'
import {Link, Outlet} from 'react-router-dom'

function NavBar() {

    const [user, setUser] = useState({
        firstName: sessionStorage.getItem('firstName'),
        lastName: sessionStorage.getItem('lastName'),
        email: sessionStorage.getItem('email'),
        pass: sessionStorage.getItem('pass'),
        role: sessionStorage.getItem('role'),
        profilepic: sessionStorage.getItem('profilepic')
    })

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
        if(user.profilepic){
            return (
                <div>
                    <img src={user.profilepic} />
                </div>
            )
        }
    }

    function logout() {
        setUser({firstName:'', lastName:'', email: '', pass: '', role: '', profilepic: ''})
        sessionStorage.clear()
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
                  <Link to="/" onClick={logout}>Log Out</Link>  
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