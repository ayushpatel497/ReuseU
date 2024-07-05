import axios from 'axios';
import React, { useState } from 'react'
const Admin = () => {


    const handleSent = async () =>{
        console.log(item,contact,desc,category);
        

        const response =await axios.post('http://localhost:4000/api/v1/add', {category,item,desc,contact});
        let y = response;
        console.log(y);
        if(y.data.id){
            alert('item added successfully')
        }else{
            alert('something went wrong')
        }
    }


    
    const [item, setitem] = useState(null)
    const [contact, setcontact] = useState(null)
    const [category, setcategory] = useState("Lost")
    const [desc, setdesc] = useState(null)
    
  return (
    <div>
        <div className='container'>
            <div>
                <div className="form-group row my-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Item</label>
                    <div className="col-sm-10">
                    <input type="text" onChange={(e)=>setitem(e.target.value)} className="form-control" id="inputEmail3" placeholder="Book.."/>
                    </div>
                </div>
                <div className="form-group row my-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Contact</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" onChange={(e)=>setcontact(e.target.value)} id="inputEmail3"/>
                    </div>
                </div>
                
                <fieldset className="form-group my-3">
                    <div className="row">
                    <legend className="col-form-label col-sm-2 pt-0">Category</legend>
                    <div className="col-sm-10">
                        <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" onClick={()=>setcategory("Lost")} checked/>
                        <label className="form-check-label" htmlFor="gridRadios1">
                            Lost
                        </label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" onClick={()=>setcategory("Found")}/>
                        <label className="form-check-label" htmlFor="gridRadios2">
                            Found
                        </label>
                        </div>
                        
                    </div>
                    </div>
                </fieldset>
                
                
                <div className="form-grou my-3">
                    <label htmlFor="exampleFormControlTextarea1" className='my-1'>Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" onChange={(e)=>setdesc(e.target.value)} rows="3"></textarea>
                </div>

                <div className="form-group row">
                    <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary" onClick={handleSent}>Submit</button>
                    </div>
                </div>
                </div>
        </div>
    </div>
  )
}

export default Admin