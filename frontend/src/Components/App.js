import React from 'react'
import axios from 'axios'
import './App.css'
import BusinessList from './Business/BusinessList'
import BusinessSingle from './Business/BusinessSingle'
import BusinessForm from './Business/BusinessForm'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      business: [],
      currentBusiness: {},
    }

    this.updateCurrentBusiness = this.updateCurrentBusiness.bind(this);
  }

  componentDidMount() {
    const url = 'http://localhost:4000/business';

    axios.get(url)
      .then((Response) => {
        this.setState({
          business: Response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  updateCurrenusiness(item) {
    this.setState({
      currenBusiness: item,
    })
  }

render() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col s12'>Menu</div>
      </div>
      <div className='row'>
        <div className='col s3'>
          <BusinessList business={this.state.business} 
          updateCurrentBusiness={this.updateCurrentBusiness}/>
        </div>
        <div className='col s9'>
          <BusinessSingle />
        </div>
      </div>
      <div className='row'>
        <div className='col s12'>
          <BusinessForm />
        </div>
      </div>
    </div>
  )
}

export default App
