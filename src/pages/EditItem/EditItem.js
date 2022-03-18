import React from 'react';
import './EditItem.scss';
import BackArrow from '../../assets/icons/arrow_back-24px.svg';
import ItemForm from '../../Components/ItemForm/ItemForm';
import { Link } from 'react-router-dom';

function EditItem() {
  return (
    <section className="edit-item">
        <div className="edit-item__content">
            <div className="edit-item__header">
              <Link to="/inventory" className='edit-item__link'>
                <img src={BackArrow} alt="Back Arrow Icon" />
              </Link>
              <h1 className="edit-item__title">Edit Inventory Item</h1>   
            </div>
            <ItemForm />
        </div>
    </section>
  )
}

export default EditItem