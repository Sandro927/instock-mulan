import React from 'react';
import './ItemForm.scss';

function ItemForm() {
  return (
    <form class="item-form">
        <div>
            <h2>Item Details</h2>
            <label for='itemName'>Item Name</label>
            <input type="text" name="itemName" class="item-form__input"/>
        </div>
        
    </form>
  )
}

export default ItemForm