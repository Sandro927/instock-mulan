import './InventoryItemDetails.scss'
import { Link } from 'react-router-dom';
import arrow from '../../assets/icons/arrow_back-24px.svg';
import edit from '../../assets/icons/edit-24px.svg';


import React from 'react'

function InventoryItemDetails() {
  return (

    <div className="item">
        <div className="item__header">
            <Link className="item__link" to="/inventories">
                <img className="item__icon-arrow" src={arrow} alt="Back Arrow" />
            </Link>
            <h1 className="item__heading">Television</h1>
            <Link className="item__link-edit" href="/inventories" >
                <img className="item__icon-edit" src={edit} alt="Edit Item" />
                <p className="item__icon-text">Edit</p>
            </Link>
        </div>

        <div className="item__underline"></div>

        <div className="item__details-container">

            <div className="item__details">
                <h4 className="item__subheading">ITEM DESCRIPTION:</h4>
                <p className="item__information">This 50", 4K LED TV provides a crystal-clear picture and vivid colors.</p>
            </div>

            <div className="item__details">
                <h4 className="item__subheading">CATEGORY:</h4>
                <p className="item__information">Electronics</p>
            </div>

            <div className="item__details-status">
                <h4 className="item__subheading">STATUS:</h4>
                <p className="item__information--green">IN STOCK</p>
            </div>

            <div className="item__details-quantity">
                <h4 className="item__subheading">QUANTITY:</h4>
                <p className="item__information">500</p>
            </div>

            <div className="item__details">
                <h4 className="item__subheading">WAREHOUSE:</h4>
                <p className="item__information">Manhattan</p>
            </div>
            
        </div>

    </div>

  )}

export default InventoryItemDetails;
