import propTypes from 'prop-types'
const Cart = ({cart,handleRemoveFromCard}) => {
    return (
        <div >
            <h3>Cart :{cart.length}</h3>
          
           <div  >
                {cart.map(bottle=><div key={bottle.id}>
                    <img style={{width:'100px',height:'100px'}} src={bottle.img}></img>
                    <button onClick={()=>handleRemoveFromCard(bottle.id)}>
                        remove 
                    </button>
                </div>)}
            </div>
        
        </div>
    );
};
Cart.propTypes={
    cart: PropTypes.array.isRequired,
    handleRemoveFromCard: propTypes.func.isRequired,
}
export default Cart;