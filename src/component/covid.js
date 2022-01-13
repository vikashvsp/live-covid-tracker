import React,{useEffect} from 'react';

const Covid = () => {

    const getCovidData= async()=>{
        try {
            const res=await fetch('https://api.covid19india.org/data.json');
            console.log(res);
        } catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getCovidData();
    },[]);

    return (
        <div>
            <h1>🔴 LIVE 🔴</h1>
            <h2>COVID-19 LIVE CASE TRACKER</h2>
        </div>
    );
};

export default Covid