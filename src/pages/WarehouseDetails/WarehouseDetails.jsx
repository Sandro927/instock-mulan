import React, { Component } from "react"
import Axios from "axios"
import "./WarehouseDetails.scss"
import Arrow from "../../assets/icons/arrow_back-24px.svg"
import Edit from "../../assets/icons/edit-24px.svg"


export default class warehouseDetails extends Component {
    render() {
        return (
            <section className="warehouse-container">
                {/* {inventory.map((item) => {
                    
                    return ( */}
                    <div className="warehouse">
                        <div className="warehouse-header">
                            <img className="warehouse-header__back" src={Arrow} alt="back button" />
                            <div className="warehouse-header__top">
                                <h2 className="warehouse-header__name">Washington</h2>
                                <img className="warehouse-header__edit" src={Edit} alt="edit button" />
                                {/* <img className="warehouse-header__edit" src={Edit} alt="edit button" /> */}
                            </div>
                        </div>
                        <div className="warehouse-info">
                            <div className="warehouse-info__where">
                                <h3>WAREHOUSE ADDRESS:</h3>
                                <p className="warehouse-info__address">33 Pearl Street SW, Washington, USA</p>
                            </div>
                            <div className="contact-container">
                                <div className="contact-name">
                                    <h3 className="contact-name__title">CONTACT NAME:</h3>
                                    <p className="contact-name__manager">Graeme Lyon</p>
                                    <p className="contact-name__role">Warehouse Manager</p>
                                </div>
                                <div className="contact-info">
                                    <h3 className="contact-info__title">CONTACT INFORMATION:</h3>
                                    <p className="contact-info__number">+1 (647) 504-0911</p>
                                    <p className="contact-info__email">glyon@instock.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
            {/* } ADD CURLY BEFORE ABOVE PARENTHESIS */}
            </section>
        )
    }
}