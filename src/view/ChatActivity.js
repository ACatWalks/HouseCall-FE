import { useEffect } from "react"
import { useParams } from "react-router"
import Chat from "./Chat"
import NavBar from "./NavBar"

function ChatActivity(){
    const {chatId} = useParams()
    // const 
console.log(chatId)
    const content = async () =>{
        const req = await fetch(`http://localhost:4000/chats/${chatId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors'
        })
        const res = await req.json()
        console.log(res, 'response')
    }
    useEffect(()=>{
        content()
    }, [])
    return(
       <NavBar/>
       
    )
}

export default ChatActivity