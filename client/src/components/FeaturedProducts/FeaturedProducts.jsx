import React from 'react';
import Card from '../Card/Card';

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: '',
      img2: '',
      title: 'Disk Plough 2-Disc Angled',
      color: ['Grey', 'Red', 'Blue', 'Black'],
      size: ['⅖/3', '3/3', '3½', '3⅓'],
      isNew: true,
      oldPrice: 45000,
      price: 37000,
    },
    {
      id: 2,
      img: '',
      img2: '',
      color: ['Grey', 'Red', 'Blue', 'Black'],
      size: [],
      title: 'Disk-Plough 2-Disc Rounded',
      isNew: true,
      oldPrice: 47000,
      price: 40000,
    },
    {
      id: 3,
      img: '',
      img2: '',
      color: ['Grey', 'Red', 'Blue', 'Black'],
      size: ['⅖/3', '3/3', '3½', '3⅓'],
      title: 'Disk Plough 3-Disc Angled',
      isNew: true,
      oldPrice: 55000,
      price: 47000,
    },
    // {
    //   id: 4,
    //   img: '',
    //   img2: '',
    //   color: ['Grey', 'Red', 'Blue', 'Black'],
    //   size: ['⅖/3', '3/3', '3½', '3⅓'],
    //   title: 'More Plough 2-Disc Rounded',
    //   isNew: true,
    //   oldPrice: 40000,
    //   price: 35000,
    // },
    // {
    //   id: 5,
    //   img: '',
    //   img2: '',
    //   color: ['Grey', 'Red', 'Blue', 'Black'],
    //   title: 'Cultivator 8-legs',
    //   isNew: false,
    //   oldPrice: 30000,
    //   price: 26000,
    // },
    // {
    //   id: 6,
    //   img: '',
    //   img2: '',
    //   color: ['Grey', 'Red', 'Blue', 'Black'],
    //   title: 'Cultivator 12-legs',
    //   isNew: false,
    //   oldPrice: 35000,
    //   price: 30000,
    // },
  ];
  return (
    <div className="featuredProdcuts max-width">
      <div className="top container">
        <h1>{type} products</h1>
        <p>
          Made from High-Quility materials and at <b>Affrodable</b> rates than
          market!{' '}
        </p>
      </div>
      <div className="bottom">
        <div className="grid container">
          {data.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
