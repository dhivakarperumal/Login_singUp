import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';

const Login = () => {
    const[firstName,setFirstName]=useState("");
    const[password,setPassword]=useState("");
    const navigates=useNavigate();

    useEffect(()=>{
        sessionStorage.clear()
    },[])
   
    const Logins = (e) =>{
        e.preventDefault();
        if(validate()){
        // console.log("proced")
        fetch(" http://localhost:8000/users/"+firstName).then((res)=>
        {
            return res.json();
        }).then((resp)=>{
            console.log(resp.data)
            if(Object.keys(resp).length===0)
            {
            toast.error('pales Enter Valide user')
            }
            else{
                if(resp.password=== password)
                {
                    toast.success("Success full Login")
                    sessionStorage.setItem("firstName",firstName)
                     navigates('/')
                }
                else{
                    toast.error('pales Enter Valide Password')
                }
            }
        }).catch((err)=>{
           toast.error('Login Faild'+err.message)
        })
        }
    }

   const validate=()=>{
     let result=true;
     if(firstName==="" || firstName=== null)
     {
        result=false;
        toast.warning('Plaas Enter valid user Name')
     }

     if(password==="" || password === null)
     {
        result=false;
        toast.warning('Plaas Enter valid Password')
     }
     return result;

   } 
  return (
    <>
    <div className='backs'>
      <Container>
      <div className='row'>
        <div className='offset-lg-4 col-lg-4' style={{height:400}}>
            <form onSubmit={Logins}>
                <div className='card gard'>
                    <div className='card-header'>
                        <h2 className='text-center'>LOGIN</h2>
                    </div>

                    <div className='card-body'>
                        <div className='form-groups'>
                            <label>User Name</label>
                            <input className='form-control' value={firstName} onChange={e=>setFirstName(e.target.value)}></input>
                        </div>
                         <div className='form-groups'>
                            <label>Password</label>
                            <input type='password' className='form-control' value={password} onChange={e=>setPassword(e.target.value)}></input>
                        </div>
                    </div>


                    <div className='card-footer text-center'>
                        <button className='btn btn-primary px-4 py-2'>Login</button>
                        <Link to="/register" className='btn btn-success mx-1 text-center px-4 py-2'>NewUsers</Link>
                    </div>
                </div>
            </form>
        </div>
      </div>
      </Container>
      </div>
    </>
  )
}

export default Login