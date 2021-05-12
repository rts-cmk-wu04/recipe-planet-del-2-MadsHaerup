import React from 'react'

export default function Nutritional({quantity, nutrients, value }) {
  return (
        <div>
          <p>{quantity}</p>
          <p>{nutrients}</p>
          <p>{value}</p>
        </div>
  )
}
