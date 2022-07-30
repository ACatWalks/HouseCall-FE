import NavBar from "./NavBar";

function ProfilePage() {

    const user = {
        firstName: sessionStorage.getItem('firstName'),
        lastName: sessionStorage.getItem('lastName'),
        email: sessionStorage.getItem('email'),
        pass: sessionStorage.getItem('pass'),
        role: sessionStorage.getItem('role')
    }

    let profilePic = sessionStorage.getItem('profilepic')

    let NPIMedicalLicense = sessionStorage.getItem('NPIMedicalLicense')

    function handleRole(role) {
        if(role === 'Doctor'){
            return (
                <div>
                    <h5>Medical License No. : {NPIMedicalLicense}</h5>
                </div>
            )
        } else {
            return (
                <div>
                    <h5>Profile Image: {profilePic}</h5>
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