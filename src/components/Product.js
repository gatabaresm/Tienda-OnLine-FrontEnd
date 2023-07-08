import React from 'react';

const Product = ({
  name,
  company,
  shortDescription,
  longDescription,
  image,
  price,
  onAddProduct,
}) => {
  const handleAddProduct = () => {
    onAddProduct();
  };

  return (
    <div className="card">
      <div className="container mt-3">
        <img src={image} alt={name} />
        <h2 className="card-title">{name}</h2>
        <p className="card-subtitle mb-4 text-muted">Empresa: {company}</p>
        <p className="card-text">{shortDescription}</p>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="collapse"
          data-bs-target="#demo"
        >
          Más Información
        </button>
        <div id="demo" className="collapse">
          {longDescription}
        </div>
        <br />
        <br />
        <p className="card-subtitle mb-4 text-muted">Precio: {price}</p>
        <button className="btn btn-primary" onClick={handleAddProduct}>
          Agregar
        </button>
        <br/><br/>
      </div>
    </div>
  );
};

export default Product;