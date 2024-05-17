import { useEffect, useState ,useContext} from 'react';
import { cartcontext } from '../App';

import './Cart.css';
export const Foodcart=()=>{
  const[total,settotal]=useState(0);
  const {cart}=useContext(cartcontext)
  

  useEffect(()=>{
    settotal(cart.reduce((acc,curr)=>acc+parseInt(curr.amt),0))
  },[cart])
    return(

        <>
        
        <div className="CartContainer">
       
        {
            cart.map((product)=>(
                <>
                <div className='productList'>
                <div className='cart-product' key={product.id}>
                <div className='img'>
                    <img src={product.pic} alt='image'/>
                </div>
                <div className='cart-product-details'>
                    <h4 className='pName'>{product.name}</h4>
                    <p><span className='price'>Price Rs :₹ {product.amt}</span></p>
                    <p className='hotelName'>{product.shop}</p>
                </div>
               <div className='productDesc'>
                <p className='desc'>{product.desc}</p>
               </div>
             </div>
             
             </div>
             </>
            ))
        }
        </div>
        { total> 0 ?  ( <div className='placeOrder'>
        <div className='totalAmount'>
        <h2>Total Amount Rs: ₹{total}</h2>
        </div>
        <div className='orderBtn'>
          <button className='O-btn'>Place Your Order</button>
        </div>

        </div>):<div className='empty-msg'><h1>Your Food Cart is Empty :( </h1></div>}
     
     
       
        </>
    )
}