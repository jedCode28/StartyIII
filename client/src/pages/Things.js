import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Things = () => {
  const [things, setThings] = useState([])

  useEffect(()=>{
    getThings()
  },[])

  const getThings = async() => {
    try {
      let res = await axios.get('/api/things')
      console.log(res)
    } catch(err){
      alert('err in axios call')
    }
  }
  return (
    <div>
      <h1>Things</h1>
    </div>
  ) 
}

export default Things