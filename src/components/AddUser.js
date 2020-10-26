import React, { useState } from 'react';
import Axios from "axios"
import {useHistory} from "react-router-dom";


const AddUser =() =>{
    let history = useHistory();
    const [users,setUsers] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });


   const onInputChange = e =>{
       //console.log(e.target.value);
       setUsers({...users,[e.target.name]:e.target.value});
   }
   
   const {name,username,email,phone,website} = users;
   const onSubmit = async e =>{
       e.preventDefault();
       await Axios.post("http://localhost:3003/users",users);
       history.push("/");
   }
   
    return (
       <div className="container">
           <div className="w-75 mx-auto shadow p-5">
               <h2 className="text-center mb-4">Add New User</h2>
               <form onSubmit={e=>onSubmit(e)}>
                   <div className="form-group">
                       <label htmlFor="name">Name</label>
                       <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            name="name" 
                            placeholder="enter your name"
                            value ={name}
                            onChange={e=>onInputChange(e)}
                        />
                   </div>

                   <div className="form-group">
                       <label htmlFor="username">User Name</label>
                       <input 
                       type="text" 
                       className="form-control form-control-lg" 
                       name="username" 
                       value={username} 
                       onChange={e=>onInputChange(e)}
                       placeholder="enter user name" />
                   </div>

                   <div className="form-group">
                       <label htmlFor="email">Email</label>
                       <input 
                            type="email" 
                            className="form-control form-control-lg" 
                            name="email" 
                            value={email} 
                            onChange={e=>onInputChange(e)}
                            placeholder="enter  email" 
                        />
                   </div>

                   <div className="form-group">
                       <label htmlFor="phone">Phone number</label>
                       <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            name="phone" 
                            value={phone} 
                            onChange={e=>onInputChange(e)}
                            placeholder="enter phone number" 
                        />
                   </div>

                   <div className="form-group">
                       <label htmlFor="website">Website name</label>
                       <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            name="website" 
                            value={website} 
                            onChange={e=>onInputChange(e)}
                            placeholder="enter your website" 
                        />
                   </div>

                   <button className="btn btn-info btn-block">Add User</button>
               </form>
           </div>
       </div>
    )
}

export default AddUser;
