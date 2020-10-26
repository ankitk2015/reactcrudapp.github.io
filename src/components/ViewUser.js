import React,{useState,useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";

const ViewUser =()=>{

    const [users,setUsers] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });
    const {id} = useParams();
    useEffect(()=>{
        getUser();
    },[]);
     
    const getUser = async ()=>{
        const res=await Axios.get(`http://localhost:3003/users/${id}`);
        console.log()
        setUsers(res.data)
    }
    return (
        <div className="row m-3">

            <div className="col-md-3">
                <Link to="/"><i className="fas fa-arrow-left"><span className="text-capitalize"> back to home</span></i></Link>
            </div>
            
            <div className="col-md-6 mt-5">
                <ul className="list-group">
                    <li className="list-group-item active">User id : {users.id}</li>
                    <li className="list-group-item">Name : {users.name}</li>
                    <li className="list-group-item">User name : {users.username}</li>
                    <li className="list-group-item">Email : {users.email}</li>
                    <li className="list-group-item">Website : {users.website}</li>
                </ul>
        </div>
        </div>
    )
}
export default ViewUser;