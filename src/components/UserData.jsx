import { useState } from 'react';
import fetchData from './fetch.json'
import { useEffect } from 'react';
import Card from './Card';

const UserData = () => {
const [data,setData]=useState([])
const [team,setTeam]=useState([])
useEffect(()=>{
    setData(fetchData)
})
const addName = (name)=>{
    setTeam([...team,name])
}

    return (
        <>
            <div>
                <h1 className='ml-5 text-[25px] font font-semibold'>Team Builder</h1>
                <ul>
                    {
                       team.map((addName,i)=>(
                        <li className='ml-5' key={i}>{addName}</li>
                       )) 
                    }
                </ul>
                {
                   data.map((userInfo,i)=>(
                    <div key={i}> 
                        <Card data={userInfo} addName={addName}/>
                    </div>
                   )) 
                }
            </div>
        </>
    );
};

export default UserData;