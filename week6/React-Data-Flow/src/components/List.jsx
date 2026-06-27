import Contact from './Contact'


function List(props){
    return(
        <div>
            {props.contacts.map((name) => <Contact key={name} name={name} displayConvo={props.displayConvo}/>)}
        </div>
    )
}

export default List
