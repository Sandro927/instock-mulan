import React, { Component } from 'react';
import './WarehouseTable.scss';
import Warehouse from '../Warehouse/Warehouse';
import SortArrows from '../../assets/icons/sort-24px.svg';
import Chevron from '../../assets/icons/chevron_right-24px.svg';

export class WarehouseTable extends Component {
  render() {
    return (
      // <table className="warehouse-table">
      //     <thead className="warehouse-table__head">
      //       <tr className="warehouse-table__row"> 
      //           <th className="warehouse-table__headers">
      //             WAREHOUSE
      //             <img className="warehouse-table__arrows" src={SortArrows} alt="Sort Arrows"/>
      //           </th>
      //           <th className="warehouse-table__headers">
      //             ADDRESS
      //             <img className="warehouse-table__arrows" src={SortArrows} alt="Sort Arrows"/>
      //           </th>
      //           <th className="warehouse-table__headers">
      //             CONTACT NAME
      //             <img className="warehouse-table__arrows" src={SortArrows} alt="Sort Arrows"/>
      //           </th>
      //           <th className="warehouse-table__headers warehouse-table__headers--large">
      //             CONTACT INFORMATION
      //             <img className="warehouse-table__arrows" src={SortArrows} alt="Sort Arrows"/>
      //           </th>
      //           <th className="warehouse-table__headers warehouse-table__headers--small">ACTIONS</th>
      //       </tr>
      //     </thead>
      //     <tbody className="warehouse-table__body">
      //       {this.props.warehouses && this.props.warehouses.map(warehouse => <Warehouse key={warehouse.id} warehouse={warehouse}/>)}
            
          

      //     </tbody>
      // </table>
      <section className="warehouse-table">
        <div className="warehouse-table__header">

          <div className="warehouse-table__column">
            <p className="warehouse-table__title">WAREHOUSE</p>
            <img className="warehouse-table__arrows" src={SortArrows} alt="Sort"/>
          </div>

          <div className="warehouse-table__column">
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

          <p className="warehouse-table__title">ACTIONS</p>
        </div>

        <div>
          <div>
            <p>Manhattan</p>
            <img src={Chevron} alt="chevron logo"/>
          </div>

          <div>
            <p>503 Broadway, New York, USA</p>
          </div>

          <div>
            <p>Parmin Aujla</p>
          </div>

          <div>
            <p>(647) 703-1504</p>
            <p>paula@instock.com</p>
          </div>
        </div>
      </section>
    )
  }
}

export default WarehouseTable