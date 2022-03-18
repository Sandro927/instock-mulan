import React from 'react';
import './AddItem.scss';
import BackArrow from '../../assets/icons/arrow_back-24px.svg';
import ItemForm from '../../Components/ItemForm/ItemForm';
import { Link } from 'react-router-dom';

function AddItem() {
  return (
    <section className="add-item">
        <div className="add-item__content">
            <div className="add-item__header">
              <Link to="/inventory" className='add-item__link'>
                <img src={BackArrow} alt="Back Arrow Icon" />
              </Link>
              <h1 className="add-item__title">Add New Inventory Item</h1>   
            </div>
            <ItemForm />
        </div>
    </section>
  )
}

export default AddItem