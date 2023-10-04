import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const[id,setId]=useState("");
    const[lastName,setLastName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[conf,setConf]=useState("");
    const[country,setCountry]=useState("");

    const navigate=useNavigate();

    const IsValidate=()=>{
        let isproced=true;
        let erromessage="Please Enter Value in  ";
        if(id===null || id==='')
        {
            isproced=false;
            erromessage+=' FirstName';
        }
    
         if(lastName===null || lastName==='')
        {
            isproced=false;
            erromessage+=' LastName';
        }
    
         if(password===null || password==='')
        {
            isproced=false
            erromessage+=' Password'
        }
        if(conf===null || conf==='')
        {
            isproced=false
            erromessage+=' Conform Password'
        }
    
         if(email===null || email==='')
        {
            isproced=false
            erromessage+=' Email'
        }
    
    
    
        if(!isproced)
        {
            toast.warning(erromessage)
        }
        else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email))
            {
    
            }
            else{
                isproced= false;
                toast.warning('Pleas Enter The valid Email');
            }
        }
        return isproced
    }

    const handels = (e) =>{
    e.preventDefault();
    let regobj={id,lastName,email,password,conf,country};
    if(IsValidate()){
    fetch(" http://localhost:8000/users",{
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(regobj)
    }).then((res)=>{
        toast.success('Register Successs Full.')  
        navigate('/login')     
 
    }).catch((err)=>{
        toast.error('Faild :'+err.message)
    });
}
    
}

    return (
        <>
            <div className='backs'>
            <div className='offset-lg col-lg-5 val'>
                <form className='container' onSubmit={handels}>
                    <div className='card' >
                        <div className='card-header'>
                            <h1 className='text-center'>SIGIN UP</h1>
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>First Name <span className='erromsg'>**</span></label>
                                        <input value={id} onChange={e=>setId(e.target.value)} className='form-control' />
                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Last Name <span className='erromsg'>**</span></label>
                                        <input value={lastName} onChange={e=>setLastName(e.target.value)} className='form-control' />
                                    </div>
                                </div>


                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Email <span className='erromsg'>**</span></label>
                                        <input value={email} onChange={e=>setEmail(e.target.value)} type="email" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Password<span className='erromsg'>**</span></label>
                                        <input value={password} onChange={e=>setPassword(e.target.value)} type='password' className='form-control' />
                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Conform Password<span className='erromsg'>**</span></label>
                                        <input value={conf} onChange={e=>setConf(e.target.value)} type='password' className='form-control' />
                                    </div>
                                </div>

                                <div className='col-lg-6' >
                                    <div className='form-group'>
                                        <label>Country<span className='erromsg'>**</span></label>
                                        <select className='form-control' value={country} onChange={e=>setCountry(e.target.value)}>
                                            <option value="indian">indian</option>
                                            <option value="USA">USA</option>
                                            <option value="China">China</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card-footer text-center'>
                            <button className='btn btn-primary px-4 py-2'>Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </>
    )
}

export default Register