import React from 'react';
import './AddItem.scss';
import BackArrow from '../../assets/icons/arrow_back-24px.svg';
import ItemForm from '../../Components/ItemForm/ItemForm';

function AddItem() {
  return (
    <section className="add-item">
        <div className="add-item__content">
            <div className="add-item__header">
                <img src={BackArrow} alt="Back Arrow Icon" />
                <h1 className="add-item__title">Add New Inventory Item</h1>   
            </div>
            <ItemForm />
        </div>
    </section>
  )
}

export default AddItem