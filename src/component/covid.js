import React,{useEffect,useState} from 'react';
import './covid.css';
const Covid = () => {
    const [data,setData]=useState([]);
    const getCovidData= async()=>{
        try {
            const res=await fetch('https://api.covid19india.org/data.json');
            const actualData= await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0])
        } catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getCovidData();
    },[]);

    return (
        <div className='body'>
        <section >
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
                <li className='card'>
                    <div className='card_main'>
                        <div className='card_inner'>
                            <p className='card_name'>TOTAL RECOVERED</p>
                            <p className='card_total card_small'>{data.recovered}</p>
                        </div>
                    </div>
                </li>
                <li className='card'>
                    <div className='card_main'>
                        <div className='card_inner'>
                            <p className='card_name'>TOTAL CONFIRMED</p>
                            <p className='card_total card_small'>{data.confirmed}</p>
                        </div>
                    </div>
                </li>
                <li className='card'>
                    <div className='card_main'>
                        <div className='card_inner'>
                            <p className='card_name'>TOTAL DEATH</p>
                            <p className='card_total card_small'>{data.deaths}</p>
                        </div>
                    </div>
                </li>
                <li className='card'>
                    <div className='card_main'>
                        <div className='card_inner'>
                            <p className='card_name'>TOTAL ACTIVE</p>
                            <p className='card_total card_small'>{data.active}</p>
                        </div>
                    </div>
                </li>
                <li className='card'>
                    <div className='card_main'>
                        <div className='card_inner'>
                            <p className='card_name'>LAST UPDATED</p>
                            <p className='card_total card_small'>{data.lastupdatedtime}</p>
                        </div>
                    </div>
                </li>
            </ul>
            </section>
        </div>
    );
};

export default Covid