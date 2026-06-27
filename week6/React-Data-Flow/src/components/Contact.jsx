function Contact(props){
    
    return(
        <div onClick={()=>{props.displayConvo(props.name)}}>{props.name}</div>
    )
}

export default Contact
