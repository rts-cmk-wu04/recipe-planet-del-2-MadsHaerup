import React from 'react';
import './Nutritional.scss';

export default function Nutritional({quantity, nutrients, value }) {
  return (
        <div className="nutritional">
          <p>{quantity}</p>
          <p>{nutrients}</p>
          <p>{value}</p>
        </div>
  )
}
