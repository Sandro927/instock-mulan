import React, { Component } from 'react';
import './Warehouses.scss';
import axios from 'axios'

export class Warehouses extends Component {

  state = {
    warehouses: null
  }

  componentDidMount() {
    axios.get('http://localhost:8080/warehouses')
      .then(res => {
        this.setState({warehouses: res.data})
      })
      .catch(err => console.error)
  }

  render() {
    return (
      <section className='warehouses'>
        <div className='warehouses__content'>
          <div className='warehouses__header'>
            <h1 className='warehouses__title'>Warehouses</h1>
            <div className='warehouses__options'>
              <form className='warehouses__form'>
                <input type='text' className='warehouses__input' />
              </form>
              <button className='warehouses__button'>+ Add a New Warehouse</button>
            </div>
          </div>
          
        </div>
      </section>
    )
  }
}

export default Warehouses