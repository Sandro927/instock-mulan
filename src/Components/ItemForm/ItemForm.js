import React from 'react';
import { Link } from 'react-router-dom';
import './ItemForm.scss';

class ItemForm extends React.Component {

    componentDidMount() {}

    state = {
        itemName: null,
        itemDescription: null,
        itemCategory: null,
        itemIsAvailable: "in-stock",
        itemWarehouse: null

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

  render() {
        return (
            <form className="item-form">
                <div className="item-form__body">
                    <div className="item-form__details">
                        <h2 className="item-form__title">Item Details</h2>
                        
                        <label className="item-form__label" htmlFor='itemName'>Item Name</label>
                        <input type="text" name="itemName" className="item-form__input" placeholder="Item Name" value={this.state.itemName} onChange={this.handleChange}/>
                        
                        <label className="item-form__label" htmlFor='itemDescription'>Description</label>
                        <textarea name="itemDescription" className="item-form__textarea" rows='6' placeholder="Please enter a brief item description..." value={this.state.itemDescription} onChange={this.handleChange}/>

                        <label className="item-form__label" htmlFor='itemCategory'>Category</label>
                        <select name="itemCategory" className="item-form__dropdown" value={this.state.itemCategory} onChange={this.handleChange}>
                            <option value="" selected disabled hidden>Please select</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Applicanes">Applicanes</option>
                            <option value="Apparel">Apparel</option>
                        </select>
                    </div>
                    <div className="item-form__availability">
                        <h2 className="item-form__title">Item Availability</h2>

                        <label className="item-form__label">Status</label>

                        <div className="item-form__radios">
                            
                            <label className="item-form__radio-label" htmlFor='itemAvailable'>
                                <input type='radio' name="itemIsAvailable" id="itemAvailable" value={"in-stock"} className="item-form__radio-option" checked={this.state.itemIsAvailable === "in-stock"} onChange={this.handleChange}/>
                                In Stock
                            </label>

                            <label className="item-form__radio-label" htmlFor='itemUnavailable'>                            
                                <input type='radio' name="itemIsAvailable" id='itemUnavailable' value={"no-stock"} className="item-form__radio-option" checked={this.state.itemIsAvailable === "no-stock"} onChange={this.handleChange}/>
                                Out of Stock
                            </label>
                        </div>

                        <label className="item-form__label" htmlFor='itemWarehouse'>Warehouse</label>
                        <select name="itemWarehouse" className="item-form__dropdown" value={this.state.itemWarehouse} onChange={this.handleChange}>
                            <option value="" selected disabled hidden>Please select</option>
                            <option value="Manhattan">Manhattan</option>
                            <option value="San Fran">San Fran</option>
                            <option value="Florida">Florida</option>
                        </select>
                    </div>
                </div>
                <div className="item-form__footer">
                    <Link className='item-form__cancel' to={'/'}>Cancel</Link>
                    <button className='item-form__submit' type='submit'>+ Add Item</button> 
                </div>
            </form>
        )
    }
}

export default ItemForm