import React,{useState,useEffect} from 'react';
import './App.css';

const App=()=>{
  const [status,setStatus]=useState({});
  useEffect(()=>{
    const options={
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        // 'Authorization':`${btoa(unescape(encodeURIComponent('your authorization string')))}`,
      }};
    fetch('https://iskartikbusy.herokuapp.com/getStatus',options)
    .then(res=>res.json())
    .then(result=>setStatus(result))
    .catch(err=>setStatus({imgTxt:'Fixing This Shitty Website'}));
  },[])
  return(
    <div className='container'>
      <div className='heading'>Kartik is currently : </div>
        {status.imgUrl && <img id="img" src={status.imgUrl} alt={status.description||'No Description Provided'}/>}
        <p id='imgTxt'>{status.imgTxt}</p>
    </div>
  )
}

export default App;