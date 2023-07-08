import React, { useState, useEffect } from 'react';
import { useFetch } from 'use-http';
import '../styles/styles.css';

export const AppHeader = ({ numero }) => {
  const [productCount, setProductCount] = useState(0);
  
  const { loading, error, data: joke } = useFetch('https://v2.jokeapi.dev/joke/Any', {}, [productCount]);

  useEffect(() => {
    if (!loading && !error && joke) {
      console.log(joke.setup + ' ' + joke.delivery);
    }
  }, [loading, error, joke]);

  console.log('montando header...');
  return (
    <div class="App-header">
      <p>
        <b>Tienda Online{numero}</b>
      </p>
      {joke && (
        <>
          <p>{joke.setup}</p>
          <p>{joke.delivery}</p>
        </>
      )}
      <br></br>
      <p>Productos agregados: {productCount}</p>
      <button className="btn btn-primary" onClick={() => setProductCount(productCount + 1)}>Agregar</button>
      <br/>
    </div>
  );
};

export default AppHeader;