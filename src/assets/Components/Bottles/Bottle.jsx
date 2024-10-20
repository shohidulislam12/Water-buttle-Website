import './bottle.css'

const Bottle = ({bottle,handleAddtoCard}) => {
    const {name,price,img}=bottle
    return (
        <div className="bottle">
            <h3>name:{name} </h3>
            <img src={img}></img>
            <p>Price :{price}</p>
            <button onClick={()=>handleAddtoCard(bottle)}>Purches</button>
        </div>
    );
};

export default Bottle;