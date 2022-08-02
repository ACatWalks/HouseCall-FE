import ChatCard from "./ChatCard";
import NewChat from "./NewChat";
import NavBar from "./NavBar";
import { useParams } from 'react-router'
import { useState } from 'react'

function Chat() {
    const chatId = useParams()
    const userId = sessionStorage.getItem('id')
    const userRole = sessionStorage.getItem('role')
    let comments = (
        <h3 className="inactive">
                 No chat items yet.
        </h3>
    )
    function fillDoctorOrPatient() {
        if(userRole === 'Doctor') {
            setChats({...chats, doctor: userId})
        } else {
            setChats({ ...chats, patient: userId })
        }
    }
    let commentArr = []
    const [chats, setChats] = useState({
        doctor: '62e8599a47803539729cb7d4',
        patient: '62e85a0b47803539729cb7d7',
        content: []
    })
    async function createMessage(messageAttributes) {
        setChats({...chats, content: commentArr})
        fillDoctorOrPatient()
        const chat = await fetch(`http://localhost:4000/chats/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(chats)
        })
        const res = await chat.json()
        const response = await fetch(`http://localhost:4000/chats/messages/${chatId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(messageAttributes)
        })
        const message = await response.json()
        commentArr.push(message)
    }

    if(commentArr.length) {
        comments = commentArr.map(message => {
            return (
                <ChatCard key={message.commentId} message={message} />
            )
        })
    } 

    return (
        <main>
            <NavBar />
            <h2>Chat With a Doctor</h2>
            {comments}
            <hr />
            <NewChat onSubmit={createMessage} />
        </main>
    )
}

export default Chat