import React from 'react'
import axios from 'axios'

class BusinessForm extends React.Component {
  submitBusiness(event) {
    event.preventDefault()

    axios
      .post('http://localhost:4000/business', {
        firstName: this.refs.firstName.value,
        lastName: this.refs.lastName.value,
        phone: this.refs.phone.value,
        email: this.refs.email.value,
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    return (
      <div className='row'>
        <h1 classNameName='center'>Add a new business</h1>
        <form className='col s12' onSubmit={this.submitBusiness.bind(this)}>
          <div className='row'>
            <div className='input-field col s6'>
              <input id='firstName' ref='firstName' type='text' />
              <label htmlFor='firstName'>First Name</label>
            </div>
            <div className='input-field col s6'>
              <input id='lastName' ref='lastName' type='text' />
              <label htmlFor='lastName'>Last Name</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s6'>
              <input id='phone' ref='phone' type='text' />
              <label htmlFor='phone'>Phone</label>
            </div>
            <div className='input-field col s6'>
              <input id='email' ref='email' type='text' />
              <label htmlFor='email'>Email</label>
            </div>
          </div>
          <button
            classNameName='btn waves-effect waves-light'
            type='submit'
            nme='action'
          >
            Add business
          </button>
        </form>
      </div>
    )
  }
}

export default BusinessForm
