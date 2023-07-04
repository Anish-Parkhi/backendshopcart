import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

function Checkout() {
  const [data,setData] = useState([])
  useEffect(()=>{
    axios
    .get('http://localhost:3000/cart')
    .then(res => {
      setData(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  })
  return (
    <>
    <Navbar />
    <div>
      {
        data?.map(item => {
          return(
            <>
            <div>{item.name}</div>
            <div>{item.quantity}</div>
            <div>{item.price}</div>
            </>
          )
        })
      }
    </div>
    </>
  );
}

export default Checkout;
