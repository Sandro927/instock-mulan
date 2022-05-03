import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from '../../assets/icons/delete_outline-24px.svg';
import EditButton from '../../assets/icons/edit-24px.svg';
import './Warehouse.scss';
import Chevron from '../../assets/icons/chevron_right-24px.svg';
import Modal from '../Modal/Modal';


export class Warehouse extends Component {

  state = {
    show: false,
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };


  render() {
    return (

      <div className="warehouse">
          <div className="warehouse__column warehouse__column-first">
            <p className="warehouse__label">WAREHOUSE</p>
            
            <Link className="warehouse__link" to={`/warehouse/${this.props.warehouse.WarehouseId}`}>
              <p className="warehouse__text warehouse__text-blue">{this.props.warehouse.WarehouseName}</p>
              <img src={Chevron} alt="chevron logo"/>
            </Link>
            
          </div>

          <div className="warehouse__column warehouse__column-second">
            <p className="warehouse__label">ADDRESS</p>
            <p className="warehouse__text">{`${this.props.warehouse.WarehouseAddress}, ${this.props.warehouse.WarehouseCity}, ${this.props.warehouse.WarehouseCountry}`}</p>
          </div>

          <div className="warehouse__column warehouse__column-third">
          <p className="warehouse__label">CONTACT NAME</p>
            <p className="warehouse__text">{this.props.warehouse.ContactName}</p>
          </div>

          <div className="warehouse__column warehouse__column-fourth">
          <p className="warehouse__label">CONTACT INFORMATION</p>
            <p className="warehouse__text">{this.props.warehouse.ContactPhone}</p>
            <p className="warehouse__text">{this.props.warehouse.ContactEmail}</p>
          </div>

          <div className="warehouse__column warehouse__column-btns">

            <Modal className="modal" show={this.state.show} handleClose={this.hideModal} warehouseId={this.props.warehouse.WarehouseId}>

              <h1 className="modal__heading">Delete {this.props.warehouse.WarehouseName} warehouse?</h1>
              <p className="modal__text">Please confirm that you'd like to delete the {this.props.warehouse.WarehouseName} from the list of warehouses. You won't be able to undo this action.</p>

            </Modal>

            <button className="warehouse__action" onClick={this.showModal}>
              <img src={DeleteButton}/>
            </button>
            <Link className="warehouse__action" to={`/warehouse/${this.props.warehouse.id}/edit`}>
              <img src={EditButton}/>
            </Link>
          </div>
        </div>
    )
  }
  }

export default Warehouse;