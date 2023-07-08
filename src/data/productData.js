function formatCurrencyColombian(price) {
  const formattedPrice = price.toLocaleString('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
  });
  return formattedPrice;
}

const productData = [
    {
      id: 1,
      name: 'Sofácama',
      company: 'Tugó',
      shortDescription: 'Sofácama Click Clack Hunter Indigo',
      longDescription: 'Moderno Clásico, espuma industrial, material en tela y madera de pino, Alto: 85 Ancho: 220 Profundidad: 80, color azul',
      image: require('../assets/product1.jpg'),
      price: formatCurrencyColombian(1793992),
    },
    {
      id: 2,
      name: 'Sofá',
      company: 'Homecenter',
      shortDescription: 'Sofá Quito 2 Puestos Gris',
      longDescription: 'Contemporáneo, espuma industrial, material en tela y madera de pino, Alto: 85 Ancho: 165 Profundidad: 80, color azul',
      image: require('../assets/product2.jpg'),
      price: formatCurrencyColombian(1895992),
    },
    {
      id: 3,
      name: 'Sofá',
      company: 'Tugó',
      shortDescription: 'Sofá 3P Helena Esmeralda',
      longDescription: 'Contemporáneo, espuma industrial, material en tela aterciopelada y madera de pino, Alto: 81 Ancho: 201 Profundidad: 92, color esmeralda',
      image: require('../assets/product3.jpg'),
      price: formatCurrencyColombian(2499990),
    },
    {
      id: 4,
      name: 'Sofá',
      company: 'Homecenter',
      shortDescription: 'Sofa 3 Cuerpos Café',
      longDescription: 'Actual, espuma industrial, material en poliester y madera, Alto: 92 Ancho: 215 Profundidad: 84, color café',
      image: require('../assets/product4.jpg'),
      price: formatCurrencyColombian(1699900),
    },
  ];
  
  export default productData;