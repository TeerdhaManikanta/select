import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {countryName: countryAndCapitalsList[0].country}

  updateCountry = event => {
    const filteredData = countryAndCapitalsList.filter(
      eachItem => eachItem.id === event.target.value,
    )
    this.setState({countryName: filteredData.country})
  }

  render() {
    const {countryName} = this.state
    return (
      <div className="main-bg">
        <div className="main-card">
          <h1>Countries And Capitals</h1>
          <div className="sub-card">
            <select className="select-edit" onChange={this.updateCountry}>
              {countryAndCapitalsList.map(eachItem => (
                <option value={eachItem.id} key={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country</p>
          </div>
          <h1>{countryName}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
