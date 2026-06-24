import {useState} from 'react'
import Item from './Item'

const Home = ({store, shouldDiscount}) => {

    return (
        store.map(product => {
            return <Item key={product.item} item={product} shouldDiscount={shouldDiscount}/>

        })

    )
}

export default Home