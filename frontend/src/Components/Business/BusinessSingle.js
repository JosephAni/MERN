import React from 'react'

const BusinessSingle = (props) => {
  return (
    <div className='row'>
      <div className='col s12'>
        <div className='card'>
          <div className='card-image'>
            <img src='mern.jpg' alt='Mern industry' />
            <span className='card-title'>
              {props.business.firstName} {props.business.lastName}
            </span>
          </div>
          <div className='card-content'>
            <p>
              Phone: {props.business.phone} - Email: {props.business.email}
            </p>
            <p>
              Strength: {props.business.strength} - Endurance:
              {props.business.endurance}
            </p>
          </div>
          <div className='card-action'>Industry: {props.business.industry}</div>
        </div>
      </div>
    </div>
  )
}

export default BusinessSingle
