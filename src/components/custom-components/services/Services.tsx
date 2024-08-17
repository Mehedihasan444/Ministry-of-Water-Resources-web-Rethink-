import { useEffect, useState } from "react";
import Service_Card from "../service-card/Service_Card";

const Services = () => {
const [data,setData]=useState([])
    useEffect(()=>{

        fetch('./services.json')
       .then(response => response.json())
       .then(data => setData(data))
    },[])
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 p-5 gap-5 ">
            { 
                data.map((service,index)=>(
                    <Service_Card key={index} service={service}></Service_Card>
                ))
            }
        </div>
    );
};

export default Services;