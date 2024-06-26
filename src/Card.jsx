import React, { useState } from 'react';

function Card({ cardData, setCartValue }) {
  const [toggle, setToggle] = useState(true);

  const imagePath = {
    img1: "/image/green1.png",
    img2: "/image/tomato2.png",
    img3: "/image/red-meat1.png",
    img4: "/image/orange1.png",
    img5: "/image/fish1.png",
    img6: "/image/pomegranate1.png",
    img7: "/image/cabbage1.png",
    img8: "/image/grapes1.png",
  };

  return (
    <div className="card m-2">
      {cardData.img && (
        <img src={imagePath[cardData.img]} className="card-img-top" alt="Product" />
      )}
      {cardData.isSale && (
        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
          Sale
        </div>
      )}
      {cardData.isSpecial && (
        <div className="badge bg-danger text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
          Special
        </div>
      )}
      {cardData.isSoldout && (
        <div className="badge bg-danger text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
          Soldout
        </div>
      )}
      <div className="card-body p-4 text-center">
        <h5 className="card-title">{cardData.name}</h5>
        <p className="card-text">
          {cardData.rating && <div>{cardData.rating}</div>}
          {cardData.originalPrice ? (
            <div>
              <span style={{ textDecoration: 'line-through' }}>
                {cardData.originalPrice}
              </span>{' '}
              {cardData.price}
            </div>
          ) : (
            `Price: ${cardData.price}`
          )}
        </p>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          {toggle ? (
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={() => {
                setCartValue((value) => value + 1);
                setToggle(false);
              }}
            >
              Add To Cart
            </button>
          ) : (
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={() => {
                setCartValue((value) => value - 1);
                setToggle(true);
              }}
            >
              Remove from Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function CardGrid({ setCartValue }) {
  const cardData = [
    { name: 'Green peas', rating: '⭐⭐⭐⭐⭐', price: '₹250-₹280', img: 'img1' },
    { name: 'Tomato', rating: '⭐⭐⭐⭐⭐', originalPrice: '₹130', price: '₹60', isSpecial: true, img: 'img2' },
    { name: 'Best Red Meat', rating: '⭐⭐⭐⭐⭐', price: '₹749', isSale: true, img: 'img3' },
    { name: 'Orange', rating: '⭐⭐⭐⭐⭐', price: '₹40-₹80', img: 'img4' },
    { name: 'River Fish', rating: '⭐⭐⭐⭐⭐', price: '₹349-₹560', isSale: true, img: 'img5' },
    { name: 'Pomegranate', rating: '⭐⭐⭐⭐⭐', price: '₹140-₹180', img: 'img6' },
    { name: 'Cabbage', rating: '⭐⭐⭐⭐⭐', originalPrice: '₹45', price: '₹18', isSoldout: true, img: 'img7' },
    { name: 'Fresh Grapes', rating: '⭐⭐⭐⭐⭐', price: '₹54', img: 'img8' },
  ];

  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          {cardData.map((card, index) => (
            <div key={index} className="col-mb-4">
              <Card cardData={card} setCartValue={setCartValue} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardGrid;
