import React from "react";
import { useParams } from 'react-router-dom';

export const Component1=()=>{
    const { questionId } = useParams();
    return <div>
                <h1>Productos: {questionId}</h1>
                <h1>Componente 1!</h1>
            </div>
}