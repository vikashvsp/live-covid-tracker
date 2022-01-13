import React,{useEffect,useState} from 'react';
import './covid.css';
const Covid = () => {
    const [data,setData]=useState([]);
    const [data1,setData2]=useState([]);
    const getCovidData= async()=>{
        try {
            const res=await fetch('https://data.covid19india.org/v4/min/data.min.json');
            const actualData= await res.json();
            console.log(actualData.BR);
            setData(actualData.BR.total)
            setData2(actualData.BR.meta)
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
                            <p className='card_name'>TODAY DATE</p>
                            <p className='card_total card_small'>{data1.date}</p>
                        </div>
                    </div>
                </li>
                <li className='card'>
                    <div className='card_main'>
                        <div className='card_inner'>
                            <p className='card_name'>OUR STATE</p>
                            <p className='card_total card_small'>BIHAR</p>
                            <p className='card_total card_small'>POPULATION:-131,199,595</p>
                        </div>
                    </div>
                </li>
                <li className='card'>
                    <div className='card_main'>
                        <div className='card_inner'>
                            <p className='card_name'>LAST UPDATE</p>
                            <p className='card_total card_small'>{data1.last_updated}</p>
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
                            <p className='card_name'>TOTAL RECOVERED</p>
                            <p className='card_total card_small'>{data.recovered}</p>
                        </div>
                    </div>
                </li>
                <li className='card'>
                    <div className='card_main'>
                        <div className='card_inner'>
                            <p className='card_name'>TOTAL DEATH</p>
                            <p className='card_total card_small'>{data.deceased}</p>
                        </div>
                    </div>
                </li>
                <li className='card'>
                    <div className='card_main'>
                        <div className='card_inner'>
                            <p className='card_name'>TOTAL TESTED</p>
                            <p className='card_total card_small'>{data.tested}</p>
                        </div>
                    </div>
                </li>
                <li className='card'>
                    <div className='card_main'>
                        <div className='card_inner'>
                            <p className='card_name'>VACCINATED 1</p>
                            <p className='card_total card_small'>{data.vaccinated1}</p>
                        </div>
                    </div>
                </li>
                <li className='card'>
                    <div className='card_main'>
                        <div className='card_inner'>
                            <p className='card_name'>VACCINATED 2</p>
                            <p className='card_total card_small'>{data.vaccinated2}</p>
                        </div>
                    </div>
                </li>
               
                
            </ul>
            </section>
        </div>
    );
};

export default Covid