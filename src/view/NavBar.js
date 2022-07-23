import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function NavBar() {
    return (
        <div className='nav'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/login">Log In</Link></li>
                <li><Link to="/symptoms">Report Symptoms</Link></li>
                <li><Link to="/chat">Chat With a Doctor</Link></li>
            </ul>
            <Outlet />
        </div>
    )
}

export default NavBar