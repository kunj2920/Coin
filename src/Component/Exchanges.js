import React, { useState } from "react";

import axios from    "axios";
import { useEffect } from "react";
import { server } from "../index";



function Exchanges() {
  const [exchanges, setExchanges] = useState([]);
   
    useEffect(() => {
        const fetchExchanges = async () => {
          try {
            const { data } = await axios.get(`${server}/exchanges`);
            console.log(data); 
            setExchanges(data);
            
          } catch (error) {
            
          }
        };
        fetchExchanges();
      }, []);
  return (
    <>
     <div>
        {exchanges.map((i) => (
   <div class="d-flex">

    
<ul class="list-group list-group-vertical mx-auto justify-content-center w-100 p-3 text-center p-3 mb-2 bg-light text-dark ">
  <li class="list-group-item text-align:center p-3 mb-2 bg-light text-dark">{i.id}</li>
  <li class="list-group-item text-align:center ">{i.name}</li>
  <li class="list-group-item text-align:center "><img src={i.image}></img></li>
  <li class="list-group-item text-align:center ">{i.trust_score_rank}</li>
  <li class="list-group-item text-align:center">{i.year_established}</li>
</ul>
      </div>    
     
     
                
            ))}
            </div>
      </>
  );
}

export default Exchanges;
