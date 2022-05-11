import './App.css';
import { useEffect, useState } from 'react';
import Cardlist from './Components/Cardlist';

function App() {
  const [value,setValue]=useState('');
  const [post,setPost]=useState([]);

   useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res=>res.json())
    .then(data=>{
      setPost(data)})
  },[])
  const searchFunction=(search)=>{
   setPost(post.filter((e)=>{
      return e['title'].toLowerCase().includes(search.toLowerCase())
    }))
    
  }
  return (
    <div className='App'>
      <input className='searchbox' placeholder='Search here' value={value} onChange={(e)=>{setValue(e.target.value)}}/>
      <button  className='btn' onClick={()=>searchFunction(value)}>search</button>
      <Cardlist posts={post}/>
    </div>
  );
}

export default App;
