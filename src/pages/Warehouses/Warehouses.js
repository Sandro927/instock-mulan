import React, { Component } from 'react';
import './Warehouses.scss';
import axios from 'axios';
import WarehouseTable from '../../Components/WarehouseTable/WarehouseTable';
import { Link } from 'react-router-dom';

export class Warehouses extends Component {

  state = {
    warehouses: null
  }

  componentDidMount() {
    axios.get('https://instock-mulan.netlify.app/warehouse')
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
              <form className='warehouses__form' >
                <input type="text" placeholder="Search..." className="warehouses__search" />          
              </form>
              <Link to='/warehouse/add'>
                <button className='warehouses__button'>+ Add a New Warehouse</button>
              </Link>
                
            </div>
          </div>
          {this.state.warehouses && <WarehouseTable warehouses={this.state.warehouses}/>}
          
        </div>
      </section>
    )
  }
}

export default Warehouses
