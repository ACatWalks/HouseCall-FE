import ChatCard from "./ChatCard";
import NewChat from "./NewChat";

function Chat() {
    async function createComment(commentAttributes) {
        const response = await fetch(`http://localhost:5000/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commentAttributes)
        })
        const comment = await response.json()
    }

    let comments = (
        <h3 className="inactive">
            No chat items yet.
        </h3>
    )

    if(comments.length) {
        comments = comments.map(comment => {
            return (
                <ChatCard key={comment.commentId} comment={comment} />
            )
        })
    }

    return (
        <main>
            <h2>Chat With a Doctor</h2>
            {comments}
            <hr />
            <NewChat onSubmit={createComment} />
        </main>
    )
}

export default Chat