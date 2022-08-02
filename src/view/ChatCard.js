function ChatCard({ message }) {
    const by = sessionStorage.getItem('firstName') + ' ' + sessionStorage.getItem('lastName')
    return (
        <div className="border">
            <h4>{message.text}</h4>
            <h3><strong>- {by}</strong></h3>
        </div>
    )
}

export default ChatCard