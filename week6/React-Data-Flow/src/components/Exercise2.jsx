import { useState } from 'react'
import List from './List'
import Conversation from './Conversation'

function Exercise2() 
{
  
    const [data, setData] = useState(
    {
        displayConversation: null,
        conversations:
        [
            {
                with: "Laura", convo: [
                    { text: "Hi", sender: "self" },
                    { text: "You there?", sender: "self" },
                    { text: "Yeah, hi, what's up?", sender: "other" }
                ]
            },
            {
                with: "Dad", convo: [
                    { text: "Have you finished your school work yet?", sender: "other" },
                    { text: "Yes.", sender: "self" },
                    { text: "What do you mean, yes?", sender: "other" },
                    { text: "??", sender: "self" }
                ]
            },
            {
                with: "Shoobert", convo: [
                    { text: "Shoobert!!!", sender: "self" },
                    { text: "Dude!!!!!!!!", sender: "other" },
                    { text: "Shooooooooo BERT!", sender: "self" },
                    { text: "You're my best friend", sender: "other" },
                    { text: "No, *you're* my best friend", sender: "self" },
                ]
            }
        ]
    })


    function displayConvo(name){
        setData({...data, displayConversation: name})
    }

    function findConvo ()
    {
        return data.conversations.find((con) => con.with === data.displayConversation).convo;
    }

    function goBack()
    {
        setData({...data, displayConversation: null})
    }

    return(
        <div>
            {data.displayConversation? <Conversation convo={findConvo()} sender={data.displayConversation} goBack={()=> goBack()}></Conversation>:<List contacts={data.conversations.map((conv) => conv.with)} displayConvo={displayConvo} ></List>}
        </div>
    )

    
    

  
}

export default Exercise2
