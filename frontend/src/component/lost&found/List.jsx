import React from 'react'

/**
 * heading - tag -lost found
 * Item bold
 * desc
 * contact p tag
 * 
 * 
 */

const List = (props) => {

  
  return (
    <>
        <div class="card" style={{margin:"3%"}}>
          <div class="card-header">
          <span style={props.info.category === "Lost" ? {color:"red"} : {color:"green"}}><h4>
            {
              
              props.info.category
            }</h4></span>
            
          </div>
          <div class="card-body">
            <h1 class="card-title" style={{color:"blue"}}>Item - {props.info.itemName}</h1>
            <h5 class="card-text">{props.info.description}</h5>
            <h5>Contact - {props.info.contactNumber} 📱</h5>
            <p>Item id - {props.info.id}</p>
            {/* <button type="button" class={`btn btn-${props.info.status==="pending"?"success":"warning"}`} onClick={handleDone}>Mark {props.info.status==="pending"?"done":"pending"}</button>
            <button type="button" class="btn btn-danger mx-3" onClick={handleDelete} >Delete</button> */}
          </div>
        </div>
    </>
  )
}

export default List