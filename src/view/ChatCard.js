function ChatCard({ comment }) {
    return (
        <div className="border">
            <h4>{comment.content}</h4>
            <h3><strong>- {comment.author}</strong></h3>
        </div>
    )
}

export default ChatCard