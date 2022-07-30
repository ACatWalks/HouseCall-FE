import ChatCard from "./ChatCard";
import NewChat from "./NewChat";
import NavBar from "./NavBar";

function Chat() {
    let comments = (
        <h3 className="inactive">
                 No chat items yet.
        </h3>
    )

    let commentArr = []

    async function createComment(commentAttributes) {
        const response = await fetch(`http://localhost:4000/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commentAttributes)
        })
        const comment = await response.json()
        commentArr.push(comment)
    }

    if(commentArr.length) {
        comments = commentArr.map(comment => {
            return (
                <ChatCard key={comment.commentId} comment={comment} />
            )
        })
    } 

    return (
        <main>
            <NavBar />
            <h2>Chat With a Doctor</h2>
            {comments}
            <hr />
            <NewChat onSubmit={createComment} />
        </main>
    )
}

export default Chat