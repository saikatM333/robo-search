import React from 'react'

export default function Header(props) {
 const handleChange = (event)=>{
    
     props.setSearch(event.target.value)
 }


  return (
    <div className="container">
        <div className ="input-area">
      <h1> Robot Search Machine</h1>
       <input type="text" placeholder='search'  value={props.search} onChange={handleChange}/>

        </div>
    </div>
  )
}
