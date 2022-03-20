import './WarehouseForm.scss';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



class WarehouseForm extends React.Component {

    // state 
    state = {
        formData: null
    };


    handleSubmit = (e) => {
        e.preventDefault();
        // create newWarehouse to send to API server based on user's inputs in form
        const newWarehouse = {
            "name": e.target.warehouseName.value,
            "address": e.target.address.value,
            "city": e.target.city.value,
            "country": e.target.country.value,
            "contact": {
                "name": e.target.contactName.value,
                "position": e.target.position.value,
                "phone": e.target.phone.value,
                "email": e.target.email.value,
            }
        };
        // send newWarehouse to API server
        axios.post('httip://localhost:8080/warehouses', newWarehouse)
            .then(res => {
                // Redirect to new Warehouse page ('/warehouses/newWarehouseId') after form submitted
                // routerProps.history.push(`/warehouses/${res.data.id}`);
                console.log(res.data)
                console.log(res.data.id)
            })
            .catch(error => console.log(error));
        console.log(newWarehouse) // remove this when done
    }


    render() {

        return (
            <form onSubmit={this.handleSubmit} className='warehouse-form'>

                <section className='warehouse-form__section-container'>
                    <h2 className='form-detail__title'>Warehouse Details</h2>

                    <label className='form-detail__label' htmlFor='warehouseName'>Warehouse Name</label>
                    <input className='form-detail__input' name='warehouseName' type="text" placeholder='Warehouse Name' />

                    <label className='form-detail__label' htmlFor='address'>Street Address</label>
                    <input className='form-detail__input' name='address' type="text" placeholder='Street Address' />

                    <label className='form-detail__label' htmlFor='city'>City</label>
                    <input className='form-detail__input' name='city' type="text" placeholder='City' />

                    <label className='form-detail__label' htmlFor='country'>Country</label>
                    <input className='form-detail__input' name='country' type="text" placeholder='Country' />
                </section>

                <section className='warehouse-form__section-container'>
                    <h2 className='form-detail__title'>Contact Details</h2>

                    <label className='form-detail__label' htmlFor='contactName'>Contact Name</label>
                    <input className='form-detail__input' name='contactName' type="text" placeholder='Contact Name' />

                    <label className='form-detail__label' htmlFor='position'>Position</label>
                    <input className='form-detail__input' name='position' type="text" placeholder='Position' />

                    <label className='form-detail__label' htmlFor='phone'>Phone Number</label>
                    <input className='form-detail__input' name='phone' type="tel" placeholder='Phone Number' />
                    {/*  */}

                    <label className='form-detail__label' htmlFor='email'>Email</label>
                    <input className='form-detail__input' name='email' type="email" placeholder='Email' />
                    {/*  */}

                </section>

                <div className='warhouse-form__button-container'>
                    <Link to='/warehouses' className='button--cancel'>Cancel</Link>
                    <button className='button--submit'>+ Add Warehouse</button>
                </div>

            </form>
        );
    }
};

export default WarehouseForm;