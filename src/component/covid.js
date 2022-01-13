import React,{useEffect} from 'react';
import './covid.css';
const Covid = () => {

    const getCovidData= async()=>{
        try {
            const res=await fetch('https://api.covid19india.org/data.json');
            const actualData= await res.json();
            console.log(actualData.statewise[0]);
        } catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        //getCovidData();
    },[]);

    return (
        <div class="body">
            <h1>🔴 LIVE 🔴</h1>
            <h2>COVID-19 LIVE CASE TRACKER</h2>
            <ul>
                <li className='card'>
                    <div className='card_main'>
                        <div className='card_inner'>
                            <p className='card_name'>OUR COUNTRY</p>
                            <p className='card_total card_small'>INDIA</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Covid