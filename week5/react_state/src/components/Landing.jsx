
const Landing = ({user, store}) => {
    
    return (
        <div>
        {"Welcome, " + user + ". The hottest item is " + store.filter((item) => item.hottest === true)[0].item}
        </div>
    )
}

export default Landing