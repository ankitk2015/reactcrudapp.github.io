import React, { useState,useEffect } from 'react';
import Axios from "axios"
import {useHistory,useParams} from "react-router-dom";


const Update =() =>{
    let history = useHistory();
    const {id} = useParams();

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

   useEffect(()=>{
       getUser();
   },[]);
   
   const {name,username,email,phone,website} = users;
   const onSubmit = async e =>{
       e.preventDefault();
       await Axios.put(`http://localhost:3003/users/${id}`,users);
       history.push("/");
   }

   const getUser = async () =>{
       const result = await Axios.get(`http://localhost:3003/users/${id}`);
       setUsers(result.data);
   }
   
    return (
       <div className="container">
           <div className="w-75 mx-auto shadow p-5">
               <h2 className="text-center mb-4">Edit User</h2>
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

                   <button className="btn btn-success btn-block">Update User</button>
               </form>
           </div>
       </div>
    )
}

export default Update;
