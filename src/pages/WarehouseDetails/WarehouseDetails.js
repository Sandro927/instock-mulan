import React, { Component } from "react"
import Axios from "axios"
import "./WarehouseDetails.scss"
import Arrow from "../../assets/icons/arrow_back-24px.svg"
import Edit from "../../assets/icons/edit-24px.svg"
import InventoryList from "../../Components/InventoryList/InventoryList"

export default class warehouseDetails extends Component {
    state = {
        warehouse: null,
        warehouseInv: null
    }

    componentDidMount() {
        const urlId = this.props.match.params.id
        Axios.get(`http://localhost:8080/warehouse/${urlId}`)
            .then(response => {
                this.setState({ warehouse: response.data[0], warehouseInv: response.data[1] })
                console.log(this.state.warehouseInv)
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        return (
            <section className="warehouse-container">
                <div className="warehouse-details">
                    <div className="warehouse-header">
                        <img className="warehouse-header__back" src={Arrow} alt="back button" />
                        <div className="warehouse-header__top">
                            <h2 className="warehouse-header__name">{this.state.warehouse && this.state.warehouse.WarehouseName}</h2>
                            <img className="warehouse-header__edit" src={Edit} alt="edit button" />
                        </div>
                    </div>
                    <div className="warehouse-info">
                        <div className="warehouse-info__where">
                            <h3 className="warehouse-h3">WAREHOUSE ADDRESS:</h3>
                            <p className="warehouse-info__address">{this.state.warehouse && this.state.warehouse.WarehouseAddress}, {this.state.warehouse && this.state.warehouse.WarehouseCity}, {this.state.warehouse && this.state.warehouse.WarehouseCountry}</p>
                        </div>
                        <div className="contact-container">
                            <div className="contact-name">
                                <h3 className="warehouse-h3">CONTACT NAME:</h3>
                                <p className="contact-name__manager">{this.state.warehouse && this.state.warehouse.ContactName}</p>
                                <p className="contact-name__role">{this.state.warehouse && this.state.warehouse.ContactPosition}</p>
                            </div>                     <div className="contact-info">
                                <h3 className="warehouse-h3">CONTACT INFORMATION:</h3>
                                <p className="contact-info__number">{this.state.warehouse && this.state.warehouse.ContactPhone}</p>
                                <p className="contact-info__email">{this.state.warehouse && this.state.warehouse.ContactEmail}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {this.state.warehouseInv && <InventoryList warehouseSelected={true} inventoryData={this.state.warehouseInv} />}
                </div>
            </section>
        )
    }
}