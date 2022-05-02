import React, { Component } from 'react';
import './WarehouseTable.scss';
import Warehouse from '../Warehouse/Warehouse';
import SortArrows from '../../assets/icons/sort-24px.svg';
import Chevron from '../../assets/icons/chevron_right-24px.svg';

export class WarehouseTable extends Component {
  render() {
    return (
      <section className="warehouse-table">
        <div className="warehouse-table__header">

          <div className="warehouse-table__column">
            <p className="warehouse-table__title">WAREHOUSE</p>
            <img className="warehouse-table__arrows" src={SortArrows} alt="Sort"/>
          </div>

          <div className="warehouse-table__column warehouse-table__column-large">
            <p className="warehouse-table__title">ADDRESS</p>
            <img className="warehouse-table__arrows" src={SortArrows} alt="Sort"/>
          </div>

          <div className="warehouse-table__column">
            <p className="warehouse-table__title">CONTACT NAME</p>
            <img className="warehouse-table__arrows" src={SortArrows} alt="Sort"/>
          </div>

          <div className="warehouse-table__column">
            <p className="warehouse-table__title">CONTACT INFORMATION</p>
            <img className="warehouse-table__arrows" src={SortArrows} alt="Sort"/>
          </div>

          <div className="warehouse-table__column warehouse-table__column-small">
            <p className="warehouse-table__title">ACTIONS</p>
          </div>
        </div>

        <div className="warehouse-table__body">
          {this.props.warehouses && this.props.warehouses.map(warehouse => <Warehouse key={warehouse.id} warehouse={warehouse} />)}
        </div>
      </section>
    )
  }
}

export default WarehouseTable