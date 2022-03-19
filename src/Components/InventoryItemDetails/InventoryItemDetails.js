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
            .get(`http://localhost:8080/inventory/${inventoryId}`)
            .then(res => {
                this.setState({ inventoryItem: res.data })
            })
            .catch(err => console.error)
    }


    render() {
        const { inventoryItem } = this.state;

        const text = inventoryItem.status

        return (

            <div className="item">
                <div className="item__header">
                    <Link className="item__link" to="/inventory">
                        <img className="item__icon-arrow" src={arrow} alt="Back Arrow" />
                    </Link>
                    <h1 className="item__heading">{inventoryItem.itemName}</h1>
                    <Link className="item__link-edit" to="/inventory" >
                        <img className="item__icon-edit" src={edit} alt="Edit Item" />
                        <p className="item__icon-text">Edit</p>
                    </Link>
                </div>

                <div className="item__underline"></div>

                <div className="item__details-container">
                <div className="item__divider"></div>

                    <div className="item__details">
                        <h4 className="item__subheading">ITEM DESCRIPTION:</h4>
                        <p className="item__information">{inventoryItem.itemName}</p>
                    </div>

                    <div className="item__details">
                        <h4 className="item__subheading">CATEGORY:</h4>
                        <p className="item__information">{inventoryItem.category}</p>
                    </div>

                    <div className="item__details-status">
                        <h4 className="item__subheading">STATUS:</h4>
                        <p className={text === "In Stock" ? "item__information--green" : 'item__information--red'} >
                            {text}
                        </p>
                    </div>

                    <div className="item__details-quantity">
                        <h4 className="item__subheading">QUANTITY:</h4>
                        <p className="item__information">{inventoryItem.quantity}</p>
                    </div>

                    <div className="item__details">
                        <h4 className="item__subheading">WAREHOUSE:</h4>
                        <p className="item__information">{inventoryItem.warehouseName}</p>
                    </div>

                </div>

            </div>

        )
    }
}
export default InventoryItemDetails;
