import './WarehouseForm.scss';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



class WarehouseForm extends React.Component {

    // state 
    state = {
        formData: null
    };


    handleSubmit = (event) => {
        event.preventDefault();
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
                    <button className='button--submit'>Add</button>
                </div>

            </form>
        );
    }
};

export default WarehouseForm;