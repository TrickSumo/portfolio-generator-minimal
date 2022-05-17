import React, { useContext,useState } from 'react'
import {MyContext} from '../App.js'
import axios from 'axios';

const Delete = () => {

  const [hash,setHash] = useState('')
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const md5 = require('md5')

  const api= process.env.REACT_APP_DELETE_API_URL

  const handleOnClick = async () => {
    setIsSubmitted(true);

    const data = {hash}

    
    await axios
    .post(api,JSON.stringify(data), 
   { "headers": {
      "Content-Type": "application/json"
  }},)
    .then((response) => {
      // console.log(response);
      // console.log(response.config.data);
      // console.log(JSON.parse(response.config.data))
      setIsSubmitSuccess(true);
      
      
      
    })
    .catch((error) => {
      console.log(error);
      setIsSubmitSuccess(false);
      
    });

  }

  return (
    <>
    <div style={{backgroundColor:"rgb(224, 161, 88)", paddingTop:"130px", height:"300px", textAlign:"center"}}>
      
      <input type="text" placeholder="Enter Your Email" onChange={(e)=> setHash(md5(e.target.value))} />
    
    <button onClick={() => {setIsSubmitSuccess(false); handleOnClick();}}>Delete</button>
    {isSubmitSuccess && <h3>" Successfully Deleted Your Portfolio!"</h3>  ||  isSubmitted&&<center style={{padding:"10px"}}>Deleting Your portfolio!!! <h3 style={{height:"5px"}}>🤖</h3></center>}
      
      
      </div>
    </>
  )
}

export default Delete