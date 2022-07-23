import { useState, useEffect } from "react"

function NewChat({ onSubmit }) {
    const [authors, setAuthors] = useState([])

    const [comment, setComment] = useState({
        content: '',
        author: ''
    })

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/users`)
            const users = await response.json()
            setComment({...comment, author: users[0]?.userId})
            setAuthors(users)
        }
        fetchData()
    }, [])

    let authorOptions = authors.map(author => {
        return <option key={author.userId} value={author.userId}>{author.firstName} {author.lastName}</option>
    })

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(comment)
        setComment({
            content: '',
            authorId: authors[0]?.userId
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="content">Content</label>
            <textarea required id="content" name="content" value={comment.content} onChange={e => setComment({...comment, content: e.target.value})} />
            <label htmlFor="author">Author</label>
            <select value={comment.author} onChange={e => setComment({...comment, author: e.target.value})} />
            <input type="submit" value="Reply" className="form-btn" />
        </form>
    )
}

export default NewChat