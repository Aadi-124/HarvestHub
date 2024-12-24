

import Card from "./Card";
import { useEffect } from "react";
import { latestOffer } from '../Api/ApiService';
import { useState } from "react";
export default function Home(){

    const [data, setData] = useState([]);
   
    useEffect(() => {
        latestOffer().then((res) => {
            console.log(res.data);
            setData(res.data);
           
        }).catch((err) => {
            console.log(err);
        })
    },[]);

    

    return(
        <>
           <div className="home_card_container">
                {data.map((data) => (
                    <Card 
                        name={data.name}
                        offer={data.offer_in_percent} />
                ))}
           </div>
        </>
    );
}