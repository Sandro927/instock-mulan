import React, { Component } from 'react';
import './WarehouseTable.scss';
import Warehouse from '../Warehouse/Warehouse'

export class WarehouseTable extends Component {
  render() {
    return (
      <table className="warehouse-table">
          <thead className="warehouse-table__head">
            <tr className="warehouse-table__row"> 
                <th>WAREHOUSE</th>
                <th>ADDRESS</th>
                <th>CONTACT NAME</th>
                <th>CONTACT INFORMATION</th>
                <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {this.props.warehouses && this.props.warehouses.map(warehouse => <Warehouse key={warehouse.id} warehouse={warehouse}/>)}
            
          

          </tbody>
      </table>
    )
  }
}

export default WarehouseTable