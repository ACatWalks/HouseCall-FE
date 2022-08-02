function ChatCard({ message }) {
    return (
        <div className="border">
            <h4>{message.content}</h4>
            <h3><strong>- {message.author}</strong></h3>
        </div>
    )
}

export default ChatCard