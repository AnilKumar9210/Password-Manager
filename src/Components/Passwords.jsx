import React, { useState } from 'react'
import './Passwords.css'

const Passwords = ({props}) => {

  const handleDelete = (id)=> {
    let newList = [];
    newList = props.passList.filter ((item)=> {
      return item.id !== id
    })
    props.setPassList (newList)
  }
  
  return (
    <div className='passwords'>
       <div className="heading">
        <li>Site</li>
        <li>Username</li>
        <li>Password</li>
        <li>Actions</li>
       </div>
       {props.passList.map ((item)=> {
        return<div className="items" key={item.id}>
        <li>{item.Url}<span><lord-icon
    src="https://cdn.lordicon.com/lomfljuq.json"
    trigger="click">
</lord-icon></span></li>

        <li>{item.userName}<span><lord-icon
    src="https://cdn.lordicon.com/lomfljuq.json"
    trigger='click'>
</lord-icon></span></li>

        <li>{item.password}<span><lord-icon
    src="https://cdn.lordicon.com/lomfljuq.json"
    trigger="click">
</lord-icon></span></li>

        <li onClick={handleDelete(item.id)}><span><lord-icon
    src="https://cdn.lordicon.com/skkahier.json"
    trigger="click">
</lord-icon></span><span>
<lord-icon
    src="https://cdn.lordicon.com/pflszboa.json"
    trigger="click">
</lord-icon></span></li>
       </div>
       })}
    </div>
  )
}

export default Passwords
