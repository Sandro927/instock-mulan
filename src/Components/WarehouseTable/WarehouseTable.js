import React, { Component } from 'react';
import './WarehouseTable.scss';
import Warehouse from '../Warehouse/Warehouse';
import SortArrows from '../../assets/icons/sort-24px.svg';

export class WarehouseTable extends Component {
  render() {
    return (
      <table className="warehouse-table">
          <thead className="warehouse-table__head">
            <tr className="warehouse-table__row"> 
                <th className="warehouse-table__headers">
                  WAREHOUSE
                  <img className="warehouse-table__arrows" src={SortArrows} alt="Sort Arrows"/>
                </th>
                <th className="warehouse-table__headers">
                  ADDRESS
                  <img className="warehouse-table__arrows" src={SortArrows} alt="Sort Arrows"/>
                </th>
                <th className="warehouse-table__headers">
                  CONTACT NAME
                  <img className="warehouse-table__arrows" src={SortArrows} alt="Sort Arrows"/>
                </th>
                <th className="warehouse-table__headers warehouse-table__headers--large">
                  CONTACT INFORMATION
                  <img className="warehouse-table__arrows" src={SortArrows} alt="Sort Arrows"/>
                </th>
                <th className="warehouse-table__headers warehouse-table__headers--small">ACTIONS</th>
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