import React from 'react'
import { useDispatch } from 'react-redux'
import { removeProduct } from '../../Redux/actions';

export default function Cart(props) {
  const dispatch = useDispatch();

  React.useEffect(()=>{
    console.log('me agregaste')
    return  () => console.log('me eliminaste wey')
  },[])


  
  return (
    <div style={{borderBottom:'2px solid blue', cursor:'pointer',marginBottom:'20px'}}>
				{
					props.cart.length && props.cart.map(el=><p key={el.title} onClick={()=>dispatch(removeProduct(el,props.cart))}>{el.title}</p>)
				}
		</div>)
}
