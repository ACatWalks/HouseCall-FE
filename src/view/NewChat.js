import { useState } from "react"

function NewChat({ onSubmit }) {

    const author = sessionStorage.getItem('firstName') + ' ' + sessionStorage.getItem('lastName')

    const [comment, setComment] = useState({
        content: '',
        author: author
    })

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(comment)
        setComment({
            content: '',
            author: author
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="content">Content</label>
            <textarea required id="content" name="content" value={comment.content} onChange={e => setComment({...comment, content: e.target.value})} />
            <label htmlFor="author">Author: {author}</label>
            <input type="submit" value="Reply" className="form-btn" />
        </form>
    )
}

export default NewChat