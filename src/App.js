import React,{useState,useEffect,useRef} from 'react';
import './App.css';


const App=()=>{
  const [status,setStatus]=useState({});
  const containerRef=useRef();
  useEffect(()=>{
    const options={
      method:'GET',
      headers:{'Content-Type':'application/json'}
    };
    fetch('https://iskartikbusy.herokuapp.com/getStatus',options)
    .then(res=>res.json())
    .then(result=>setStatus(result))
    .catch(err=>setStatus({imgTxt:'Fixing This Shitty Website'}));
    const changeHeight=()=>{
      containerRef.current.style.height=`${window.innerHeight}px`;
    }
    changeHeight();
    window.addEventListener('resize',changeHeight);
    return ()=>{window.removeEventListener('resize',changeHeight)};
  },[]);
  return(
    <div className='container' ref={containerRef}>
      <div className='heading'>Kartik is currently : </div>
        {status.imgUrl && <img id="img" src={status.imgUrl} alt={status.description||'No Description Provided'}/>}
        <p id='imgTxt'>{status.imgTxt||'Free AF'}</p>
    </div>
  )
}

export default App;