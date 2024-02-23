import React from 'react'

function Item({item}) {
  return (
    <div data-test-id={`menu-item-${item.category}`}>
        <h1 className="title">{item.title}</h1>
        <p className='cat'>{item.category}</p>
        <p className="price">$ {item.price}</p>
        <img src={item.img} alt="" />
        <p className='desc'>{item.desc}</p>
    </div>
  )
}

export default Item
