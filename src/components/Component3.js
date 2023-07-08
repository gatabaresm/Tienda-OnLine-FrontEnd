import React from "react";
import { useParams } from 'react-router-dom';

export const Component3=()=>{
    const { questionId } = useParams();
    const {value} = useParams();

    return  <div>
                <h1>Productos: {questionId}</h1>
                <h1>Componente 3: {value}!</h1>
             </div>
}