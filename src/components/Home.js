import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home =()=>{
    const [users,setUsers]= useState([]);
    useEffect(()=>{
        getUsers();
    },[])

    const getUsers = async () =>{
        const api_result = await Axios.get("http://localhost:3003/users");
        //console.log(api_result);
        setUsers(api_result.data.reverse());
    }
    const deleteUser = async id =>{
        await Axios.delete(`http://localhost:3003/users/${id}`);
        getUsers();
    };
    return (
        <div className="container mt-5">
            {users.map((user,index)=>(
                <div key={user.id} className="card mt-3">
                    <h5 className="card-header"># {index + 1}</h5>
                    <div className="card-body">
                        <h4 className="card-title">Id : <strong>{user.id}</strong></h4>
                        <p className="card-text"><strong>Name :</strong> {user.name}</p>
                        <p className="card-text"><strong>User Name :</strong> {user.username}</p>
                        <p className="card-text"><strong>Email :</strong> {user.email}</p>
                        <p className="card-text"><strong>Phone :</strong> {user.phone}</p>
                        <p className="card-text"><strong>website :</strong> {user.website}</p>
                        
                    <div>
                            <Link to={`/users/${user.id}`} className="btn btn-info mr-3"><i className="fas fa-eye fa-lg"></i></Link>
                            <Link to={`/users/update/${user.id}`} className="btn btn-success mr-3"><i className="fas fa-user-edit fa-lg"></i></Link>
                            <div className="btn btn-warning" onClick={()=>deleteUser(user.id)}><i className="fas fa-trash-alt fa-lg"></i></div>
                        </div>
                    </div>
                </div>))
            }
            
        </div>
    )
}
export default Home;