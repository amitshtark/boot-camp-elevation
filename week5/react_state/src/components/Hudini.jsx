import {useState} from 'react'

const Hudini = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            {show ? "Now you see me" : "Now you don't"}
            <button id="button" onClick={() => setShow(!show)}>show</button>
        </div>

    )
}

export default Hudini