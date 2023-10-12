import React, { useState } from 'react';

const Card = (props) => {
   const {id,name,email,address,img,phone}=props.data
   const [mobile,setMobile]=useState('')
   const addNumbers=()=>{
    setMobile(phone)
    }
    return (
        <>
            <div className='border-2 rounded-md w-[500px] my-5 ml-5 flex'>
                <img className='w-[150px] h-[100px]' src={img}alt="img" />
                <div className='ml-5 py-2'>
                    <h1 className='font-semibold text-blue-400 font-mono'>ID : {id}</h1>
                    <p className='font-mono'>Name : {name}</p>
                    <p className='text-gray-500'>Email : {email}</p>
                    <p className='text-red-600'>Address: {address}</p>
                    <p>Phone : {mobile}</p>
                    <button onClick={addNumbers} className='bg-gray-200 px-3 py-1 rounded-sm'>Show Phone Number : </button>
                    <button onClick={()=>props.addName(name)} className='bg-gray-200 px-3 py-1 rounded-sm ml-3'>Add+</button>
                </div>
               
            </div>
            
        </>
    );
};

export default Card;