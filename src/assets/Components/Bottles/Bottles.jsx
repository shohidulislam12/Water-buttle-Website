import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle";
import { addToLS, getStoredCart,removefromLs } from "../../../utilities/localstorage";
import Cart from "../cart/Cart";
import './bottles.css'

const Bottles = () => {
    const [bottles,setBottles]=useState([])
    const [cart,setcart]=useState([])
    useEffect(()=>{
        fetch('/src/assets/Components/Header/bottle.json')
        .then((res)=>res.json())
        .then((data)=>setBottles(data))
    },[])
    //load card from local storage
    useEffect(()=>{
        console.log('called the useeffect',bottles.length)
        if(bottles.length){
            const storedCart=getStoredCart()
            console.log(storedCart,bottles);
            const saveCart=[]
            for(const id of storedCart){
                console.log(id);
                const bottle=bottles.find(bottle=>bottle.id===id)
                if(bottle){
                   saveCart.push(bottle)
                }
            }
            console.log("saved card ",saveCart);
            setcart(saveCart)
        }
      
    },[bottles])
    const handleAddtoCard=(bottle)=>{
        console.log('bottle going to add ');
        const newCart=[...cart,bottle]
        setcart(newCart)
        addToLS(bottle.id)
    }
    const handleRemoveFromCard=id=>{
        const remainingcart=cart.filter(bottle=>bottle.id !==id)
        setcart(remainingcart);

      removefromLs(id)
    }
    return (
        <div>
            <h3>Bottles Available : {bottles.length} </h3>
            <Cart cart={cart}></Cart>
            <h4>Cart :{cart.length}</h4>
           <div className="bottlesContainer">
           {
                bottles.map(bottle=>
                <Bottle
                    handleRemoveFromCard={handleRemoveFromCard}
                     handleAddtoCard={handleAddtoCard} 
                     key={bottle.id} 
                     bottle={bottle}>

                     </Bottle>)
            }
           </div>
        </div>
    );
};

export default Bottles;