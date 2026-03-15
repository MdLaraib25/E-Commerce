import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    
    const  addToCard = async (itemId, size) => {
        let cartData= structuredClone(cartItems);
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = { [size]: 1 };
        }
        setCartItems(cartData);
    }

    const value = {
        products, currency , delivery_fee,
        search,setSearch, showSearch, setShowSearch, cartItems
        , addToCard
    }

    useEffect(() => {
        console.log(cartItems);

        // const cartData = localStorage.getItem('cart');
        // if (cartData) {
        //     setCartItems(JSON.parse(cartData));
        // }
    }, [cartItems]);

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;