import React from 'react'

const BusinessList = (props) => {
  return (
    <div>
      <ul className='collection with-header'>
        <li className='collection-header'>
          <h4>Business</h4>
        </li>
        {props.business.map((item) => (
          <a
            href='#!'
            className='collection-item'
            key={item._id}
            onClick={props.updateCurrentBusiness.bind(this, item)}
          >
            {item.firstName} {item.lastName}
          </a>
        ))}
      </ul>
    </div>
  )
}

export default BusinessList
