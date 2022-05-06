import React from 'react';
import { Link } from 'react-router-dom';
import './ItemForm.scss';
import axios from 'axios';

class ItemForm extends React.Component {   

    state = {
        itemName: this.props.itemId ? this.props.itemData.ItemName : "",
        itemDescription: this.props.itemId ? this.props.itemData.ItemDescription : "",
        itemCategory: this.props.itemId ? this.props.itemData.ItemCategory : "",
        itemIsAvailable: this.props.itemId ? this.props.itemData.ItemStatus : 'In Stock',
        itemWarehouse: this.props.itemId ? this.props.itemData.ItemWarehouse : "",
        itemQuantity: this.props.itemId ? this.props.itemData.ItemQuantity : 1,
        formIsValid: false,
        userSubmit: false,
        inventoryCategories: null,
        warehouses: null
    }


    componentDidMount(){
        axios.get('http://localhost:8080/inventory')
        .then(res => {

            const onlyUnique = (value, index, self) => {
                return self.indexOf(value) === index;
            }
            const inventoryCategories = res.data.map(category => {
                return category.ItemCategory;
            }).filter(onlyUnique)
            

            this.setState({
                inventoryCategories: inventoryCategories
            })
        })
        .catch(res => {

        })

        axios.get('http://localhost:8080/warehouse')
        .then(res => {

            const onlyUnique = (value, index, self) => {
                 return self.indexOf(value) === index;
            }
            const warehouses = res.data.map(warehouse => {
                return warehouse;
            }).filter(onlyUnique)

            this.setState({
                warehouses: warehouses
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

        if (this.state.itemIsAvailable === 'Out of Stock') {
            this.setState({
                itemQuantity: 1
            })
        } 
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        this.setState({
            userSubmit: true
        })
        
        if (this.isFormValid()) {
            
            const quantity = this.state.itemIsAvailable === 'Out of Stock' ? 0 : this.state.itemQuantity;
            const itemWarehouseId = this.state.warehouses.find(warehouse => warehouse.WarehouseName === this.state.itemWarehouse).WarehouseId;
           
            const newItem = {
                itemId: this.props.itemId || null,
                itemName: this.state.itemName,
                itemDescription: this.state.itemDescription,
                itemCategory: this.state.itemCategory,
                itemIsAvailable: this.state.itemIsAvailable,
                itemWarehouse: this.state.itemWarehouse,
                itemQuantity: quantity,
                warehouseId: itemWarehouseId,
                
            }

            if (this.props.itemId) {
                axios.put(`http://localhost:8080/inventory/${this.props.itemId}`, newItem)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err);
                })
            } else {
                axios.post('http://localhost:8080/inventory', newItem)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err);
                })
            }

            

            this.setState({
                itemName: "",
                itemDescription: "",
                itemCategory: "",
                itemIsAvailable: "In Stock",
                itemWarehouse: "",
                itemQuantity: 1,
                formIsValid: true,
                userSubmit: false
            })
        } else {
            console.log('you have empty values!')
        }


    }

    isFormValid = () => {
        const { itemName, itemDescription, itemCategory, itemWarehouse } = this.state;
        if (!itemName || !itemDescription || !itemCategory || !itemWarehouse) {
           return false;
        } 
    return true;
    }


  render() {
        return (
            <form className="item-form" onSubmit={this.handleSubmit}>
                <div className="item-form__body">
                    <div className="item-form__details">
                        <h2 className="item-form__title">Item Details</h2>
                        
                        <label className="item-form__label" htmlFor='itemName'>Item Name</label>
                        <input 
                            type="text" 
                            name="itemName" 
                            className={this.state.userSubmit && !this.state.itemName ? "item-form__input item-form__input--error" : "item-form__input"}
                            placeholder="Item Name" 
                            value={this.state.itemName} 
                            onChange={this.handleChange}
                        />
                        
                        <label className="item-form__label" htmlFor='itemDescription'>Description</label>
                        <textarea 
                            name="itemDescription" 
                            className={this.state.userSubmit && !this.state.itemDescription ? "item-form__textarea item-form__textarea--error" : "item-form__textarea"}
                            rows='6' 
                            placeholder="Please enter a brief item description..." 
                            value={this.state.itemDescription} 
                            onChange={this.handleChange}
                        />

                        <label className="item-form__label" htmlFor='itemCategory'>Category</label>
                        <select 
                            name="itemCategory" 
                            className={this.state.userSubmit && !this.state.itemCategory ? "item-form__dropdown item-form__dropdown--error" : "item-form__dropdown"}
                            value={this.state.itemCategory}
                            onChange={this.handleChange}
                        >
                            <option value="" disabled hidden>Please select</option>
                            {
                                this.state.inventoryCategories && 
                                this.state.inventoryCategories.map(category => <option key={category} value={category}>{category}</option>)

                            }
                        </select>
                    </div>
                    <div className="item-form__availability">
                        <h2 className="item-form__title">Item Availability</h2>

                        <label className="item-form__label">Status</label>

                        <div className="item-form__radios">
                            
                            <label className="item-form__radio-label" htmlFor='itemAvailable'>
                                <input 
                                    type='radio' 
                                    name="itemIsAvailable" 
                                    id="itemAvailable" 
                                    value={"In Stock"} 
                                    className="item-form__radio-option" 
                                    checked={this.state.itemIsAvailable === "In Stock"} 
                                    onChange={this.handleChange}
                                />
                                In Stock
                            </label>

                            <label className="item-form__radio-label" htmlFor='itemUnavailable'>                            
                                <input 
                                    type='radio' 
                                    name="itemIsAvailable" 
                                    id='itemUnavailable' 
                                    value={"Out of Stock"}
                                    className="item-form__radio-option" 
                                    checked={this.state.itemIsAvailable === "Out of Stock"} 
                                    onChange={this.handleChange}
                                />
                                Out of Stock
                            </label>
                        </div>

                        {   this.state.itemIsAvailable === "In Stock" &&
                            <>
                                <label className="item-form__label" htmlFor='itemQuantity'>Quantity</label>
                                <input 
                                    name="itemQuantity" 
                                    type='number' 
                                    className="item-form__quantity" 
                                    value={this.state.itemQuantity} 
                                    onChange={this.handleChange} min="1"
                                />
                            </>
                        }
                        <label className="item-form__label" htmlFor='itemWarehouse'>Warehouse</label>
                        <select 
                            name="itemWarehouse" 
                            className={this.state.userSubmit && !this.state.itemWarehouse ? "item-form__dropdown item-form__dropdown--error" : "item-form__dropdown"} 
                            value={this.state.itemWarehouse} 
                            onChange={this.handleChange}
                        >
                            <option value="" disabled hidden>Please select</option>
                            {
                                this.state.warehouses && 
                                this.state.warehouses.map(warehouse => <option key={warehouse.WarehouseId} value={warehouse.WarehouseName}>{warehouse.WarehouseName}</option>)

                            }

                        </select>
                    </div>
                </div>
                <div className="item-form__footer">
                    <Link className='item-form__cancel' to={'/inventory'}>Cancel</Link>
                    <button className='item-form__submit' type='submit'>{this.props.itemId ? "Save" : "+ Add Item"}</button> 
                </div>
            </form>
        )
    }
}

export default ItemForm