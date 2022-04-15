
import axios from 'axios';
import React, { useState } from 'react'
import joi from 'joi';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  
    let [user,setUser]= useState({
    
      Email:'',
      Password:'',
    })
    
    let [errorList,SetErrorList]=useState([]);
    let [errorMsg,SetErrorMsg]=useState([]);
    let [loading,SetLoding]=useState(false);
    const navigate =useNavigate();
    function goToHome(){
      let path='/Home';
      navigate(path);
    
    }
      
     async function submitFormData(e){
      e.preventDefault();
      SetLoding(true);
    let validateResult=validateForm();
    
    if(validateResult.error){
      //SetErrorList(validateResult.error.details);
      //SetLoding(false);
      //alert(validateResult.error.details);
      alert('valedition error');
    }else{
      alert('doneee')
      let {data}=await axios.post('',user);//'' حط رابط ال API
      if(data.message=='success'){
        alert("go to home")
        //goToHome();
        // localStorage.seItem('token',data.token)
      }else{
       // SetErrorMsg(data.message);
       alert(data.message);
      }
      SetLoding(false);
    }
    
    }
    function getFormValue(e){
    
    let myUser={... user};
    myUser[e.target.name]=e.target.value;
    setUser(myUser)
    console.log(myUser);
    
    }
    function validateForm(){
      const schema=joi.object({
     
      Password:joi.string().required().pattern(new RegExp('^[a-z][0-9]{3}$')),
      Email:joi.string().required().email({tlds:{allow:['com','net']}}),
      });
      return schema.validate(user,{abortEarly:false});
    }
      return (
        <div className='my-5'>
    
      
    <h1 className='my-5'>Login Form</h1>
     {errorList.map((error,index)=>
     <div key={index} className='alert alert-danger'>{error.message}</div>
     )}
     
      <form onSubmit={submitFormData} >
     
      <div className="mb-3">
        <label htmlFor="Email" className="form-label">Email</label>
        <input type="email"onChange={getFormValue} className="form-control" id="Email" name="Email" />
        
      </div>
      <div className="mb-3">
        <label htmlFor="Password" className="form-label">Password</label>
        <input type="password"onChange={getFormValue}  className="form-control" id="Password" name="Password" />
        
      </div>
      
      
     
      <button type="submit" className="btn btn-primary float-end">{loading?<i className='fa fa-spinner fa-spin'></i>:'Login'}</button>
      <div className="clrfix"></div>
    </form>
    
    
    
        </div>
  )
     
}
