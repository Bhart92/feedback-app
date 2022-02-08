import Header from "./components/Header";

function App() {
    const title = "blog post";
    const body = "blog body";
    const comments = [
        {id: 1, text: "some 1"},
        {id: 2, text: "some 2"},
        {id: 3, text: "some 3"},
    ];

    const loading = false;
    const showComments = true;
    if(loading) return <h1>Loading...</h1>;

    const commentBlock = (
        <div className="comments">
            <h3>Comments: ({comments.length})</h3>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment.text}</li>
                ))}
            </ul>
        </div>
    );

    return (
        <>
        <Header text="Header"/>
        <div className="container">
            <h1>{title}</h1>
            <p>{body}</p>
            {showComments && commentBlock}
        </div>
        </>
    )
}

export default App;