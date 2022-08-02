import { useState } from "react"

function NewChat({ onSubmit }) {

    const author = sessionStorage.getItem('firstName') + ' ' + sessionStorage.getItem('lastName')

    const userRole = sessionStorage.getItem('role')

    const [message, setMessage] = useState({
        text: '',
        author: author,
        onModel: userRole
    })

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(message)
        setMessage({
            text: '',
            author: author,
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
            <label htmlFor="author">Author: {author}</label>
            </div>
            <div className='row'>
            <input type="submit" value="Reply" className="form-btn" />
            </div>
        </form>
    )
}

export default NewChat