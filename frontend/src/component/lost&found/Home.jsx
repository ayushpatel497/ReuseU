import { useEffect, useState } from 'react'
import List from './List';
import Empty from './Empty';
import Navbar from './Navbar';
import axios from "axios";

function Home() {
  const [arr, setArr] = useState([])
  const [category,setcategory] = useState("Lost")

  const getData = async () =>{
    let x = await axios.get("http://localhost:4000/api/v1/items");
    // let y = await x.json();
    setArr(x.data);
    console.log(x.data);
  }

  useEffect(() => {
    getData();
  },[arr])
  

  return (
    <div>
      <Navbar  setter={setcategory}/>
      <div style={{marginTop:"10px"}}>{arr.length==0?<Empty/>:arr.map((e)=>{if(e.category===category) return <List setter={setArr} category={category} info={e}/>})
      }</div>
      
    </div>
  )
}

export default Home
