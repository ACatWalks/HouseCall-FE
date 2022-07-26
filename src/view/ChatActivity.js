import { useEffect, useState } from "react"
import { useParams } from "react-router"
import ChatCard from './ChatCard'
import NavBar from "./NavBar"

function ChatActivity(){
    const {chatId} = useParams()
    const [messageContent, setMessageContent] = useState([])
    const userRole = sessionStorage.getItem('role')
    const userId = sessionStorage.getItem('id')
    const by = sessionStorage.getItem('firstName') + ' ' + sessionStorage.getItem('lastName')
    function handleRole() {
        let result;
        if(userRole === 'Doctor') {
            result = 'medicalProvider'
        } else {
            result = 'Patient'
        }
        return result
    }

    const [newMessage, setNewMessage] = useState({
        text: '',
        author: userId,
        onModel: handleRole()
    })
    const content = async () =>{
        const req = await fetch(`https://house-calls-be.herokuapp.com/chats/${chatId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors'
        })
        const res = await req.json()
        setMessageContent(res)
    }
    useEffect(()=>{
        content()
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()
         await fetch(`https://house-calls-be.herokuapp.com/chats/messages/${chatId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newMessage)
        })
        console.log(newMessage)
        content()
    }
    return(
        <div>
       <NavBar/>
       {messageContent.map(message => {
           return (
               <ChatCard message={message} />
           )
       })}
       <form onSubmit={e => handleSubmit(e)}>
           <input textarea required onChange={e => setNewMessage({...newMessage, text: e.target.value})}/>
           <p>By: {by}</p>
           <input type="submit" value="Add New Comment" className="form-btn" />
       </form>
       </div>
    )
}

export default ChatActivity