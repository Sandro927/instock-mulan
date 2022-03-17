import React, { Component } from 'react';
import './ItemForm.scss';

class ItemForm extends React.Component {

    state = {
        itemName: null,
        itemDescription: null,
        itemCategory: null,
        itemInStock: true,

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

  render() {
        return (
            <form class="item-form">
                <div className="item-form__details">
                    <h2 className="item-form__title">Item Details</h2>
                    
                    <label htmlFor='itemName'>Item Name</label>
                    <input type="text" name="itemName" className="item-form__input"/>
                    
                    <label htmlFor='itemDescription'>Item Name</label>
                    <textarea name="itemDescription" className="item-form__textarea" rows='5'/>

                    <label htmlFor='itemCategory'>Category</label>
                    <select name="itemCategory" className="item-form__dropdown" >
                        <option value="Electronics">Electronics</option>
                        <option value="Applicanes">Applicanes</option>
                        <option value="Apparel">Apparel</option>
                    </select>
                </div>
                <div className="item-form__availability">
                
                </div>
            </form>
        )
    }
}

export default ItemForm