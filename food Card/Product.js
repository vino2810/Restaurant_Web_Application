import { useContext } from 'react';
import './Product.css'
import { cartcontext } from '../App';

export const Product = ({product})=>{
    const {cart,setcart}=useContext(cartcontext)

     const name=product.name.length>10 ? product.name.substring(0,10)+"..":product.name;

    //  console.log("name:"+name);

     const addcart=()=>{
        setcart([...cart,product]);
     };
     const removecart=()=>{
        setcart(cart.filter((c)=>c.id!==product.id))
     };

    return(
       <>
        <div className="product">
            <div className="img">
                <img src={product.pic} alt={product.name}/>
            </div>
        <div className="details">
        <h4>{name}</h4>
        <p> Price Rs₹{product.amt}</p>
        {cart.includes(product)?(
            <button className='btnRemove' onClick={removecart}>Remove from cart</button>
        ):(
            <button onClick={addcart}>Add to Cart</button>
        )

        }
        </div>
        </div>
        </>
    )
}