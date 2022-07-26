import NewChat from "./NewChat";
import NavBar from "./NavBar";
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
function Chat() {
    
    const userId = sessionStorage.getItem('id')
    const userRole = sessionStorage.getItem('role')
   
    const [chats, setChats] = useState([])
    
    const getAllChats = async () => {
            let query_string = ''
            if (userRole === 'Patient'){
                query_string = 'https://house-calls-be.herokuapp.com/chats/patientChats/'
            } else {
                query_string = 'https://house-calls-be.herokuapp.com/chats/doctorChats/'
            }
            const req = await fetch(`${query_string}${userId}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors'
            })
            const res = await req.json()
            setChats(res.data)
    }
    useEffect(() => {
        getAllChats()
        // console.log(chats, 'this is chats')
        
    }, [])
    
    const displayChats = ()=> {
        
        chats.map(chat =>{
          return(
              <h1>{chat}</h1>
          )  
        }) 
    }
    useEffect(() => {
       displayChats()
       
    }, [chats])

    return (
        <main>
            <NavBar />
            <h2>Your Chats</h2>
            <hr />
            <NewChat  />
            {
                chats.map(chatId => {
                    return (
                        <li className="form">
                            <Link to={`/chat-activity/${chatId}`}>Join chat for </Link>
                        </li>
                    )
                })
            }
         
        </main>
    )
}

export default Chat