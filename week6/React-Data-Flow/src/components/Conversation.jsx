function Conversation(props){

    return(
        <>
        {props.convo.map((message) => {

            const sender = message.sender === "self"? "Me": props.sender;
            return(
            <div key={message.text}>
                <span> {sender}: </span> {message.text} 
            </div>
            )
        })}
        <button onClick={props.goBack}>Back</button>
        </>
    )
}

export default Conversation
