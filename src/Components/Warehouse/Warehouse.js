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
      <tr className="warehouse">
        <td className="warehouse__name" data-label="WAREHOUSE">
          <div className="warehouse__util">
            <Link className="warehouse__link" to={`/warehouse/${this.props.warehouse.id}`}>{this.props.warehouse.name}
            <img src={Chevron} alt="Chevron icon" /></Link>
          </div>

        </td>
        <td className="warehouse__address" data-label="ADDRESS">
          <p className="warehouse__text">{`${this.props.warehouse.address}, ${this.props.warehouse.city}, ${this.props.warehouse.country}`}</p>

        </td>
        <td className="warehouse__contact-name" data-label="CONTACT NAME">
          <p className="warehouse__text">{this.props.warehouse.contact.name}</p>
        </td>
        <td className="warehouse__contact-info" data-label="CONTACT INFORMATION">
          <p className="warehouse__text">{this.props.warehouse.contact.phone}</p>
          <p className="warehouse__text">{this.props.warehouse.contact.email}</p>

        </td>
        <td className="warehouse__actions">

          <Modal className="modal" show={this.state.show} handleClose={this.hideModal} warehouseId={this.props.warehouse.id}>

            <h1 className="modal__heading">Delete {this.props.warehouse.name} warehouse?</h1>
            <p className="modal__text">Please confirm that you'd like to delete the {this.props.warehouse.name} from the list of warehouses. You won't be able to undo this action.</p>

          </Modal>

          <button className="warehouse__button" type="button" onClick={this.showModal}  >
            <img className="warehouse__icons" src={DeleteButton} alt="Delete Outline" />
          </button>

          <Link to={`/warehouse/${this.props.warehouse.id}/edit`} className='warehouse__edit-link'> 
            <img className="warehouse__icons" src={EditButton} alt="Edit Outline" />
          </Link>
         


        </td>
      </tr>
    )
  }
  }

export default Warehouse;