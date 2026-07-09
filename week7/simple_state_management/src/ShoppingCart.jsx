import { useReducer } from "react";

const initialState = {
  items: [],
  total: 0,
  itemCount: 0
};

function reducer(state, action) {
  switch (action.type) {

    case "ADD_ITEM":
    {
        return {...state, 
            items: [...state.items, { ...action.data, id: Date.now() }],
            total: state.total + action.data.price,
            itemCount: state.itemCount + 1
        };
    }

    case "REMOVE_ITEM":
    {
        const removedItem = state.items.find(item => item.id === action.data);
        if (!removedItem) {
            return state;
        }

        return {...state, 
            items: [...state.items.filter(item => item.id !== action.data)],
            total: state.total - removedItem.price,
            itemCount: state.itemCount - 1
        };
    }

    case "CLEAR_CART":
    {
      return {
        items: [],
        total: 0,
        itemCount: 0
        };
    }
    
    default:
      return state;
  }
}


function ShoppingCart() {
    const [cart, dispatch] = useReducer(reducer,initialState)

    return (
        <div>
        <h2>Shopping Cart ({cart.itemCount} items) - Total: ${cart.total}</h2>
        {/* Render items */}
        </div>
    );
    }

export default ShoppingCart