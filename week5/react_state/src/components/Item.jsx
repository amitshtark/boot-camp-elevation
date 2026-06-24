
const Item = ({item, shouldDiscount}) => {
    return (
            shouldDiscount?
            <div> {item.item}: {item.price * (1-item.discount)} </div>
            : <div> {item.item}: {item.price} </div>
    )
}

export default Item