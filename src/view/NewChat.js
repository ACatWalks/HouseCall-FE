import { useState } from "react"

function NewChat({ onSubmit }) {

    const by = sessionStorage.getItem('firstName') + ' ' + sessionStorage.getItem('lastName')

    const userRole = sessionStorage.getItem('role')
    const userId = sessionStorage.getItem('id')

    const [message, setMessage] = useState({
        text: '',
        author: userId,
        onModel: userRole
    })

    function handleSubmit(e) {
        e.preventDefault()
        sessionStorage.setItem('text', message.text)
        onSubmit(message)
        sessionStorage.removeItem('text')
        setMessage({
            text: '',
            author: userId,
            onModel: userRole
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='row'>
            <label htmlFor="content">Content</label>
            <textarea required id="content" name="content" value={message.text} onChange={e => setMessage({...message, text: e.target.value})} />
            </div>
            <div className='row'>
            <label htmlFor="author">Author: {by}</label>
            </div>
            <div className='row'>
            <input type="submit" value="Reply" className="form-btn" />
            </div>
        </form>
    )
}

export default NewChat