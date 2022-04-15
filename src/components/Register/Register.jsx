import axios from 'axios';
import React, { useState } from 'react'
import joi from 'joi';
import { useNavigate } from 'react-router-dom';

export default function Register() {
let [user,setUser]= useState({
  First_Name :'',
  Last_Name:'',
  Age:'',
  Email:'',
  Password:'',
})

let [errorList,SetErrorList]=useState([]);
let [errorMsg,SetErrorMsg]=useState([]);
let [loading,SetLoding]=useState(false);
const navigate =useNavigate();
function goToLogin(){
  let path='/Login';
  navigate(path);

}
  
 async function submitFormData(e){
  e.preventDefault();
  SetLoding(true);
let validateResult=validateForm();

if(validateResult.error){
  SetErrorList(validateResult.error.details);
  SetLoding(false);
  //alert(validateResult.error.details);
}else{
  alert('doneee')
  let {data}=await axios.post('',user);//'' حط رابط ال API
  if(data.message=='success'){
    goToLogin();
  }else{
    SetErrorMsg(data.message);
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
  First_Name: joi.string().required().min(3).max(20).alphanum(),
  Last_Name: joi.string().required().min(3).max(20).alphanum(),
  Age: joi.number().required().min(20).max(60),
  Password:joi.string().required().pattern(new RegExp('^[a-z][0-9]{3}$')),
  Email:joi.string().required().email({tlds:{allow:['com','net']}}),
  });
  return schema.validate(user,{abortEarly:false});
}
  return (
    <div className='my-5'>

  
<h1 className='my-5'>Registration Form</h1>
 {errorList.map((error,index)=>
 <div key={index} className='alert alert-danger'>{error.message}</div>
 )}
 
  <form onSubmit={submitFormData} >
  <div className="mb-3">
    <label htmlFor="First_Name" className="form-label">First Name</label>
    <input type="text"  onChange={getFormValue} className="form-control" id="First_Name" name="First_Name" />
    
  </div>
  <div className="mb-3">
    <label htmlFor="Last_Name" className="form-label">Last Name</label>
    <input type="text"onChange={getFormValue} className="form-control" id="Last_Name" name="Last_Name" />
    
  </div>
  <div className="mb-3">
    <label htmlFor="Age" className="form-label">Age</label>
    <input type="number" onChange={getFormValue} className="form-control" id="Age" name="Age" />
    
  </div>
  <div className="mb-3">
    <label htmlFor="Email" className="form-label">Email</label>
    <input type="email"onChange={getFormValue} className="form-control" id="Email" name="Email" />
    
  </div>
  <div className="mb-3">
    <label htmlFor="Password" className="form-label">Password</label>
    <input type="password"onChange={getFormValue}  className="form-control" id="Password" name="Password" />
    
  </div>
  
  
 
  <button type="submit" className="btn btn-primary float-end">{loading?<i className='fa fa-spinner fa-spin'></i>:'register'}</button>
  <div className="clrfix"></div>
</form>



    </div>
  )
}
