import React, { useEffect } from 'react';
import {useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router'

const Planet =(props)=>{
    //axioshere
    const [responseData, setResponseData] = useState({});
    useEffect(()=>{
    axios.get('https://swapi.co/api'+ props.uri)
        // .then(res=>console.log(res))
        .then(response=>setResponseData(response.data))
        .catch(error=>(console.log(error)))
    }, [props.uri]);


    return(
        <div>
            <label>Name: </label>{responseData && <p>{responseData.name}</p>}
            <label>Height: </label>{responseData && <p>{responseData.diameter}</p>}
        </div>
    )
}
export default Planet;
