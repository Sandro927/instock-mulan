import './InventoryItemDetails.scss'
import { Link } from 'react-router-dom';
import arrow from '../../assets/icons/arrow_back-24px.svg';
import edit from '../../assets/icons/edit-24px.svg';
import React from 'react';
import axios from 'axios';

class InventoryItemDetails extends React.Component {

    state = {
        inventoryItem: {}
    }

    componentDidMount() {
        const {inventoryId} = this.props.match.params
        axios
            .get(`https://instock-mulan.netlify.app/inventory/${inventoryId}`)
            .then(res => {
                this.setState({ inventoryItem: res.data })
            })
            .catch(err => console.error)
    }


    render() {
        const { inventoryItem } = this.state;

        const text = inventoryItem.ItemStatus

        return (

            <div className="inventory-item">
                <div className="inventory-item__header">
                    <Link className="inventory-item__link" to="/inventory">
                        <img className="inventory-item__icon-arrow" src={arrow} alt="Back Arrow" />
                    </Link>
                    <h1 className="inventory-item__heading">{inventoryItem.ItemName}</h1>
                    <Link className="inventory-item__link-edit" to={`/inventory/${inventoryItem.ItemId}/edit`} >
                        <img className="inventory-item__icon-edit" src={edit} alt="Edit Item" />
                        <p className="inventory-item__icon-text">Edit</p>
                    </Link>
                </div>

                <div className="inventory-item__underline"></div>

                <div className="inventory-item__details-container">
                <div className="inventory-item__divider"></div>

                    <div className="inventory-item__details">
                        <h4 className="inventory-item__subheading">ITEM DESCRIPTION:</h4>
                        <p className="inventory-item__information">{inventoryItem.ItemName}</p>
                    </div>

                    <div className="inventory-item__details">
                        <h4 className="inventory-item__subheading">CATEGORY:</h4>
                        <p className="inventory-item__information">{inventoryItem.ItemCategory}</p>
                    </div>

                    <div className="inventory-item__details-status">
                        <h4 className="inventory-item__subheading">STATUS:</h4>
                        <p className={text === "In Stock" ? "inventory-item__information--green" : 'inventory-item__information--red'} >
                            {text}
                        </p>
                    </div>

                    <div className="inventory-item__details-quantity">
                        <h4 className="inventory-item__subheading">QUANTITY:</h4>
                        <p className="inventory-item__information">{inventoryItem.ItemQuantity}</p>
                    </div>

                    <div className="inventory-item__details">
                        <h4 className="inventory-item__subheading">WAREHOUSE:</h4>
                        <p className="inventory-item__information">{inventoryItem.ItemWarehouse}</p>
                    </div>

                </div>

            </div>

        )
    }
}
export default InventoryItemDetails;
