import React from 'react'
import {useSelector} from 'react-redux';

 export default function Cart(){
    const items = useSelector(state => state.cart.items);

    return(
        <div className = 'cart_wrapper'>
             <h1> You're in cart Page </h1>
    {
        items?.map((item) => {
            return (
                <div className = 'cart_card'>
                    <img src={item.thumbnail} />
                    <div className ='cart_description'>
                        <h2>{item.title}</h2>
                        <p>Brand:{item.brand}</p>
                        <p>Category: {item.category}</p>
                        <p>Price: ${item.price}</p>
                        <p>{item.description}</p>
                        <button>Delete</button>
                    </div>
                    </div>
            )
              
        })
    }

</div>
)
}