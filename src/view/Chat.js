import ChatCard from "./ChatCard";
import NewChat from "./NewChat";
import NavBar from "./NavBar";
import { useState, useEffect } from 'react'

function Chat() {
    const userId = sessionStorage.getItem('id')
    const userRole = sessionStorage.getItem('role')
    const userEmail = sessionStorage.getItem('email')
    const [messages, setMessages] = useState([])
    function renderMessages(mess) {
        if(mess.length) {
            let comments = mess.map(message => {
                return (
                    <ChatCard key={message._id} message={message} />
                )
            })
            return comments
        } else {
            let comments = (
                <h3 className="inactive">
                No chat items yet.
                </h3>
            )
            return comments
        }
    }
    useEffect ((messages) => {
        const fetchMessages = async () => {
            const login = await fetch(`http://localhost:4000/authentication/${sessionStorage.getItem('email')}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: sessionStorage.getItem('email'), pass: 'pass'})
            })
            const data = await login.json()
            console.log(data)
            const chatId = data.chats[0]
            const response = fetch(`http://localhost:4000/chats/${chatId}`)
            //This is where it breaks. Response becomes undefined and it seems weird to set messages to a Promise. Setting messages to response.json() throws an error; the console will say that response.json() is not a method.
            setMessages(response)
            console.log(messages)
            renderMessages(messages)
            setTimeout(fetchMessages, 3000)
        }
        fetchMessages()
    }, [])
    /*let comments = (
        <h3 className="inactive">
                 No chat items yet.
        </h3>
    )*/
    function fillDoctorOrPatient() {
        if(userRole === 'Patient') {
            setChats({...chats, patient: userId})
        } else {
            setChats({ ...chats, doctor: userId })
        }
    }
    //let commentArr = []
    const [chats, setChats] = useState({
        doctor: '62e8599a47803539729cb7d4',
        patient: '62e85a0b47803539729cb7d7',
        content: []
    })

    async function createMessage(messageAttributes) {
        async function createChat() {
            fillDoctorOrPatient()
            const chat = await fetch(`http://localhost:4000/chats/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(chats)
            })
            const res = await chat.json()
        }
        async function createNewMessage(messageAttributes) {
            const login = await fetch(`http://localhost:4000/authentication/${userEmail}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: userEmail, pass: 'pass'})
            })
            const data = await login.json()
            const chatId = data.chats[0]
            const response = await fetch(`http://localhost:4000/chats/messages/${chatId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(messageAttributes)
            })
            const message = await response.json()
            //commentArr.push(message)
            chats.content.push(message)
        }
        createChat()
        createNewMessage(messageAttributes)
    }

    return (
        <main>
            <NavBar />
            <h2>Chat With a Doctor</h2>
            {renderMessages(messages)}
            <hr />
            <NewChat onSubmit={createMessage} />
        </main>
    )
}

export default Chat