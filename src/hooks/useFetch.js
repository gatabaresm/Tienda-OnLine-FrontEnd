import { useEffect, useState } from "react";

export const  useFetch=(url, flag)=>{

    console.log("Ejecutando funcion useFetch");
    const [fetchResponse,setFetchResponse]=useState('...');

    useEffect(()=>{

        const fetchRequest=async()=>{
            console.log("Realizando peticion...");
            let res=await fetch(url);
            let data=await res.json();
            setFetchResponse(data.value);
        };

        fetchRequest();
    },[url, flag])

    return{fetchResponse}
}