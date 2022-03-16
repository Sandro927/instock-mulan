import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import DeleteButton from '../../assets/icons/delete_outline-24px.svg'
import EditButton from '../../assets/icons/edit-24px.svg'
import './Warehouse.scss'

export class Warehouse extends Component {
  render() {
    return (
      <tr className="warehouse">
            <td className="warehouse__name" data-label="WAREHOUSE">
                <Link className="warehouse__link" to={'#'}>{this.props.warehouse.name}</Link>
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
              
                  <img className="warehouse__icons" src={DeleteButton} alt="Delete Outline"/>
                  <img className="warehouse__icons" src={EditButton} alt="Edit Outline"/>
                  
              
          </td>
      </tr>
    )
  }
}

export default Warehouse