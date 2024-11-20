import React, {useState, useEffect,useContext,useRef } from 'react'
import './Manager.css'
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer,toast } from 'react-toastify';

const Manager = () => {

  useEffect (()=> {
    let passwordsList = localStorage.getItem ("passList");
    if (passwordsList) {
      setPassList (JSON.parse(passwordsList))
    }
  },[])

  const [Url,setUrl] = useState ("");
  const [userName,setUserName] = useState ("");
  const [password,setPassword] = useState ("");
  const [passList,setPassList] = useState ([]);
  const [isVisible,setIsVisible] = useState (false);
  const toggle = useRef ('show')

  const handleUrl = (e)=> {
    setUrl (e.target.value)
  }

  const handleUserName = (e)=> {
    setUserName (e.target.value);
  }

  const handlePassword = (e)=> {
    setPassword (e.target.value);
  }

  const handleSave = ()=> {
    console.log ("Iam clicked")
    if (password.length >=4 && Url.length >=4 && userName.length >= 4) {
      setPassList ([...passList,{id:uuidv4(),userName,Url,password}])
      localStorage.setItem ("passList",JSON.stringify([...passList,{id:uuidv4 (),userName,Url,password}]));
    }
    setPassword (" ");
    setUrl (" ");
    setUserName (" ");
    console.log (passList)
  }

  function handleVisibility () {
    setIsVisible (!isVisible);
    toggle.current === 'show'?'hide':'show'
  }

  const handleErase = (id)=>{
    let permission = confirm ("Do you want to delete")
    if (permission) {
      setPassList (passList.filter (item=>item.id !== id))
      localStorage.setItem ("passList",JSON.stringify ((passList.filter (item=>item.id !== id))));
      console.log ("Iam deleted")
    }
  }

  const handleEdit = (id)=> {
    let list = passList.find (item=> item.id === id);
    setUrl (list.Url);
    setUserName (list.userName);
    setPassword (list.password);
    setPassList (passList.filter (item=> item.id !== id));
  }

  function copyButton (value) {
    navigator.clipboard.writeText (value);
    toast ("copied");
  }

  
  return (
    <>
    <div className='manager'>
      <div className="title">
        <span className="mainTitle">
      <span>&lt;</span><span>Password</span><span>Manager/&gt;</span>
        </span>
        <div>
            Your own Password manager
        </div>
      </div>

      <div className="credentials">
        <div className="URL">
      <lord-icon
    src="https://cdn.lordicon.com/sqhiykyz.json"
    trigger="hover">
</lord-icon>
        <input onChange={handleUrl} minLength={6} className='URL' type='url' placeholder='Enter web-siet URL' value={Url}/>
        </div>

        <div className="validInfo">
        <div className="userData">
        <lord-icon src="https://cdn.lordicon.com/hrjifpbq.json"trigger="hover">
  </lord-icon>
        <input onChange={handleUserName} value={userName} className='userName' minLength={4} type='text' placeholder='Enter username'/>
        </div>

        <div className="EnterPassword">
        <input  onChange={handlePassword} value={password} minLength={4} type={isVisible?'text':'password'} className="pass" placeholder='password' />
        <button onClick={handleVisibility}>{toggle.current}</button>
        </div>
        </div>


      </div>
      <button className="save" onClick={handleSave}>
      <lord-icon
    src="https://cdn.lordicon.com/hqymfzvj.json"trigger="hover"></lord-icon>
        save
      </button>
    </div>
    {passList.length === 0 && <div className='nothing'>no passwords to show</div>}
    {passList.length != 0 &&<div className='passwords'>
       <div className="heading">
        <li>Site</li>
        <li>Username</li>
        <li>Password</li>
        <li>Actions</li>
       </div>
       
       {passList.map ((item)=> {
        return<div className="items" key={item.id}>
        <li>{item.Url}<span onClick={()=>{copyButton (item.Url)}}><lord-icon
    src="https://cdn.lordicon.com/lomfljuq.json"
    trigger="click">
</lord-icon></span></li>

        <li>{item.userName}<span onClick={()=>{copyButton (item.userName)}}><lord-icon
    src="https://cdn.lordicon.com/lomfljuq.json"
    trigger='click'>
</lord-icon></span></li>

        <li>{item.password}<span onClick={()=>{copyButton (item.password)}}><lord-icon
    src="https://cdn.lordicon.com/lomfljuq.json"
    trigger="click">
</lord-icon></span></li>

        <li ><span onClick={()=>{handleErase(item.id)}}><lord-icon
    src="https://cdn.lordicon.com/skkahier.json"
    trigger="click">
</lord-icon></span><span onClick={()=>{handleEdit(item.id)}}>
<lord-icon
    src="https://cdn.lordicon.com/pflszboa.json"
    trigger="click">
</lord-icon></span></li>
       </div>
         })}
    </div>
    }
    </>
  )
}

export default Manager
