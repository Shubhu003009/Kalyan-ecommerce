import React from 'react';
import './Card.scss';

const Card = ({ item }) => {
  return (
    <div className="card">
      <div class="badge">Hot</div>
      <div class="product-tumb">
        <img src="https://i.imgur.com/xdbHo4E.png" alt="" />
      </div>
      <div class="product-details">
        {/* <span class="product-catagory">{item.id}</span> */}
        <h4>
          <a href="">{item.title}</a>
        </h4>
        <br />
        {/* <p>Lorem ipsum dolor sit amet.</p> */}

        <div class="options d-flex flex-fill">
          <select class="custom-select mr-1">
            <option selected>Color</option>
            {item.color.map((c) => {
              return <option value={c}>{c}</option>;
            })}
          </select>
          <select class="custom-select ml-1">
            <option selected>Size</option>
            {item.size.map((s) => {
              return <option value={s}>{s}</option>;
            })}
          </select>
        </div>
        <div class="product-bottom-details">
          <div class="product-price">
            <small>{item.oldPrice}</small>
            {item.price}
          </div>
          <div class="product-links">
            <a href="/#">
              <i class="fa fa-heart"></i>
            </a>
            <a href="/#">
              <i class="fa fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
