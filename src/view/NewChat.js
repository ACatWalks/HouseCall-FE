import { useState } from "react"

function NewChat({ onSubmit }) {

    const by = sessionStorage.getItem('firstName') + ' ' + sessionStorage.getItem('lastName')

    const userRole = sessionStorage.getItem('role')
    const userId = sessionStorage.getItem('id')
    // const [message, setMessage] = useState({
    //     text: '',
    //     author: author,
    //     onModel: userRole
    // })

    let reqBody = {
        doctor: '',
        patient: ''
    }
    function setOtherUserId(e) {
        e.preventDefault()
        reqBody.doctor = e.target.value 
    }

    if(userRole === 'Patient'){
        reqBody.patient = userId
    } else {
        reqBody.doctor = userId
    }
   
    async function createChat(e) {
        e.preventDefault()

        const chat = await fetch(`http://localhost:4000/chats/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reqBody)
        })
        const res = await chat.json()
        console.log(res)
    }

    return (
        <form onSubmit={e => createChat(e)}>
            <div className='row'>
            <label htmlFor="content">Enter Id of other User To Create New Chat</label>
            <textarea required id="content" name="content" onChange={e => setOtherUserId(e)}  />
            </div>
            <div className='row'>
            {/* <label htmlFor="author">Author:</label> */}
            </div>
            <div className='row'>
            <input type="submit" className="form-btn" />
            </div>
        </form>
    )
}

export default NewChat