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
    
    
    
    return (
        <main>
            <NavBar />
            <h2>Enter A Doctor's License Number</h2>
            {/* {comments} */}
            <hr />
            <NewChat  />
        </main>
    )
}

export default Chat