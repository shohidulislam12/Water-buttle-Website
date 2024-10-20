const getStoredCart=()=>{
    const storedCardString= localStorage.getItem('cart')
    if(storedCardString){
        return JSON.parse(storedCardString)
    }
    
        return [];
    
}
const saveCartToLS=(cart)=>{
    const cartStringfied=JSON.stringify(cart)
    localStorage.setItem('cart',cartStringfied)
}
const addToLS=(id)=>{
    const cart =getStoredCart()
    cart.push(id);
    saveCartToLS(cart)
    //save local storage
}
const removefromLs=id=>{
    const cart=getStoredCart()
    //remove every id
    const remaining =cart.filter(idx=>idx !==id);
    saveCartToLS(remaining)
}
export  {addToLS,getStoredCart,removefromLs}