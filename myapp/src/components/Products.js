import '../assets/CSS/layout.css';
import {useState} from 'react';
import {flowers} from './FlowerDB';
import Product from './Product';


export default function Products(){
    const[cartItems, setCartItems]=useState([]);
   
    const addToCart=(flower,quantity)=> {
        const existingItem = cartItems.find(item=> item.id === flower.id);
        if(existingItem) {
            existingItem.qty += quantity;
            setCartItems([...cartItems]);
        }
        else {
            setCartItems([...cartItems, {...flower, qty: quantity}]);
        }
    };

    return(
        <>
            <div className="item1">
                <h1>Flower Shop</h1>
            </div>
            <div className="item2">
                <h4 className="card-title">Buy flowers</h4>
                <div className="grid-container">
                    {
                        //product
                        flowers.map(flower=> (
                            <Product key={flower.id} flower={flower} addToCart={addToCart}/>
                        ))
                    }
                </div>

            </div>
            <div className="item3">
                {
                //cart
                <Cart cartItems={cartItems}/>
                }
            </div>
        </>
    );

}