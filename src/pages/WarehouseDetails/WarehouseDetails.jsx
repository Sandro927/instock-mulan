import React, { Component } from "react"
import Axios from "axios"
import "./WarehouseDetails.scss"
import Arrow from "../../assets/icons/arrow_back-24px.svg"
import Edit from "../../assets/icons/edit-24px.svg"

export default class warehouseDetails extends Component {
    state = {
        warehouse: null,
        warehouseInv: null
    }

    componentDidMount() {
        const urlId = this.props.match.params.id
        Axios.get(`http://localhost:8080/warehouses/${urlId}`)
            .then(response => {
                this.setState({ warehouse: response.data[0], warehouseInv: response.data[1] })
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        return (
            <section className="warehouse-container">
                <div className="warehouse">
                    <div className="warehouse-header">
                        <img className="warehouse-header__back" src={Arrow} alt="back button" />
                        <div className="warehouse-header__top">
                            <h2 className="warehouse-header__name">{this.state.warehouse && this.state.warehouse.name}</h2>
                            <img className="warehouse-header__edit" src={Edit} alt="edit button" />
                            {/* <img className="warehouse-header__edit" src={Edit} alt="edit button" /> */}
                        </div>
                    </div>
                    <div className="warehouse-info">
                        <div className="warehouse-info__where">
                            <h3>WAREHOUSE ADDRESS:</h3>
                            <p className="warehouse-info__address">{this.state.warehouse && this.state.warehouse.address}, {this.state.warehouse && this.state.warehouse.city}, {this.state.warehouse && this.state.warehouse.country}</p>
                        </div>
                        <div className="contact-container">
                            <div className="contact-name">
                                <h3 className="contact-name__title">CONTACT NAME:</h3>
                                <p className="contact-name__manager">{this.state.warehouse && this.state.warehouse.contact.name}</p>
                                <p className="contact-name__role">{this.state.warehouse && this.state.warehouse.contact.position}</p>
                            </div>
                            <div className="contact-info">
                                <h3 className="contact-info__title">CONTACT INFORMATION:</h3>
                                <p className="contact-info__number">{this.state.warehouse && this.state.warehouse.contact.phone}</p>
                                <p className="contact-info__email">{this.state.warehouse && this.state.warehouse.contact.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* } ADD CURLY BEFORE ABOVE PARENTHESIS */}
            </section>
        )
    }
}