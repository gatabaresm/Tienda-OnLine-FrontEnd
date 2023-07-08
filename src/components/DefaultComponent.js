import React from "react";
import { useParams } from 'react-router-dom';

export const DefaultComponent=()=>{
    const { questionId } = useParams();
    return  <div>
                <h1>Productos: {questionId}</h1>
                <h1>Página no encontrada!</h1>
             </div>
}