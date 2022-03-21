import './WarehouseForm.scss';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



class WarehouseForm extends React.Component {

    // initialize state to emtpy form fields
    state = {
        warehouseName: this.props.warehouseData? this.props.warehouseData.name: '',
        address: this.props.warehouseData? this.props.warehouseData.address: '',
        city: this.props.warehouseData? this.props.warehouseData.city: '',
        country: this.props.warehouseData? this.props.warehouseData.country: '',
        contactName: this.props.warehouseData? this.props.warehouseData.contact.name: '',
        position: this.props.warehouseData? this.props.warehouseData.contact.position: '',
        phone: this.props.warehouseData? this.props.warehouseData.name: this.props.warehouseData? this.props.warehouseData.contact.phone: '',
        email: this.props.warehouseData? this.props.warehouseData.contact.email: '',
    };


    handleSubmit = (e) => {
        e.preventDefault();
        // only if form is valud
        if (this.isFormValid()) {
            // create newWarehouse to send to API server based on user's inputs in form
            // have to change e.target.inputName.value to this.state.inputName
            const newWarehouse = {
                "name": this.state.warehouseName,
                "address": this.state.address,
                "city": this.state.city,
                "country": this.state.country,
                "contact": {
                    "name": this.state.contactName,
                    "position": this.state.position,
                    "phone": this.state.phone,
                    "email": this.state.email,
                }
            };
            // send newWarehouse to API server
            axios.post('http://localhost:8080/warehouse', newWarehouse)
                .then(res => {
                    // Redirect to new Warehouse page ('/warehouses/newWarehouseId') after form submitted, have to use this.props since this is a class
                    this.props.routerProps.history.push(`/warehouse/${res.data.id}`);
                })
                .catch(error => console.log(error));

            // reset state to empty form fields after page submission 
            this.setState({
                warehouseName: '',
                address: '',
                city: '',
                country: '',
                contactName: '',
                position: '',
                phone: '',
                email: '',
            });
        }
    }

    // handleChange handler function changes/controls state of stored form input values and is applied to each input field
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    // handler function to disable form submission if form is invalid
    isFormValid = () => {
        if (!this.state.warehouseName || !this.state.address || !this.state.city || !this.state.country ||
            !this.state.contactName || !this.state.position || !this.state.phone || !this.state.email) {
            return false;
        }
        return true;
    };

    render() {

        return (
            <form onSubmit={this.handleSubmit} className='warehouse-form'>
                <div className='warehouse-form__top-container'>

                    <section className='warehouse-form__section-container'>
                        <h2 className='form-detail__title'>Warehouse Details</h2>

                        <label className='form-detail__label' htmlFor='warehouseName'>Warehouse Name</label>
                        <input className='form-detail__input' name='warehouseName' type="text" placeholder='Warehouse Name'
                            onChange={this.handleChange}
                            value={this.state.warehouseName} />

                        <label className='form-detail__label' htmlFor='address'>Street Address</label>
                        <input className='form-detail__input' name='address' type="text" placeholder='Street Address'
                            onChange={this.handleChange}
                            value={this.state.address} />

                        <label className='form-detail__label' htmlFor='city'>City</label>
                        <input className='form-detail__input' name='city' type="text" placeholder='City'
                            onChange={this.handleChange}
                            value={this.state.city} />

                        <label className='form-detail__label' htmlFor='country'>Country</label>
                        <input className='form-detail__input' name='country' type="text" placeholder='Country'
                            onChange={this.handleChange}
                            value={this.state.country} />
                    </section>

                    <section className='warehouse-form__section-container'>
                        <h2 className='form-detail__title'>Contact Details</h2>

                        <label className='form-detail__label' htmlFor='contactName'>Contact Name</label>
                        <input className='form-detail__input' name='contactName' type="text" placeholder='Contact Name'
                            onChange={this.handleChange}
                            value={this.state.contactName} />

                        <label className='form-detail__label' htmlFor='position'>Position</label>
                        <input className='form-detail__input' name='position' type="text" placeholder='Position'
                            onChange={this.handleChange}
                            value={this.state.position} />

                        <label className='form-detail__label' htmlFor='phone'>Phone Number</label>
                        <input className='form-detail__input' name='phone' type="text" placeholder='Phone Number'
                            onChange={this.handleChange}
                            value={this.state.phone} />

                        <label className='form-detail__label' htmlFor='email'>Email</label>
                        <input className='form-detail__input' name='email' type="text" placeholder='Email'
                            onChange={this.handleChange}
                            value={this.state.email} />
                    </section>
                </div>


                <div className='warhouse-form__button-container'>
                    <Link to='/warehouse'
                        className='form__button form__button--cancel'>Cancel
                    </Link>
                    <button type="submit" className='form__button form__button--submit' >{this.props.warehouseData? "Save": "+ Add Warehouse"}</button>
                </div>

            </form>
        );
    }
};

export default WarehouseForm;