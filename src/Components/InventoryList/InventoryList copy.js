import './InventoryList.scss';
import { Link } from 'react-router-dom';
import iconDelete from '../../assets/icons/delete_outline-24px.svg';
import iconEdit from '../../assets/icons/edit-24px.svg';
import Modal from '../InventoryModal/InventoryModal';
import React, { Component } from 'react';


class InventoryList extends React.Component {

    state = {
        show: false,
        clickedIndex: null,
    }

    showModal = (index) => {
        this.setState({ 
            show: true,
            clickedIndex: String(index)
        });
    };

    hideModal = () => {
        this.setState({ 
            show: false,
            clickedIndex: null 
        });
    };


    render() {
        const { inventoryData } = this.props;

        return (

            <section>
                <div className='table-heading'>
                    <p className='table-heading__label'>INVENTORY ITEM</p>
                    <p className='table-heading__label'>CATEGORY</p>
                    <p className='table-heading__label'>STATUS</p>
                    <p className='table-heading__label'>QTY</p>
                    <p className='table-heading__label'>WAREHOUSE</p>
                    <p className='table-heading__label--actions'>ACTIONS</p>
                </div>

                {inventoryData.map((item, index) => {

                    return (
                        <div key={item.id} className='item'>

                            <div className='item__container-top'>

                                <div className='item__container-left'>

                                    <p className="item__details-label">INVENTORY ITEM</p>
                                    <Link to={`/inventory/${item.id}`}>
                                        <p className="item__detail item__detail--name">{item.itemName}</p>
                                    </Link>

                                    <p className="item__details-label">CATEGORY</p>
                                    <p className="item__detail">{item.category}</p>
                                </div>
                                <div className='item__container-right'>
                                    <p className="item__details-label">STATUS</p>
                                    <p className={`item__detail  item__detail--in-stock item__detail--${item.quantity}`}>{item.status}</p>
                                    <p className="item__details-label item__label-quantity">QTY</p>
                                    <p className="item__detail">{item.quantity}</p>
                                    <p className="item__details-label">WAREHOUSE</p>
                                    <p className="item__detail">{item.warehouseName}</p>
                                </div>

                            </div>


                            <div className='item__container-bottom'>

                                <button className="item__button" type="button" onClick={() => this.showModal(index)}  >
                                    <img className="item__icons" src={iconDelete} alt="Delete Outline" />
                                </button>
                                <Link to={`/inventory/${item.id}/edit`}><img src={iconEdit} alt="icon of a pencil" /></Link>
                            </div>
                        </div>
                    )
                })}

               { this.state.clickedIndex  &&  
               <Modal className="modal" show={this.state.show} handleClose={this.hideModal} itemId={inventoryData[this.state.clickedIndex].id}>

                    <h1 className="modal__heading">Delete {inventoryData[this.state.clickedIndex].itemName} inventory item?</h1>
                    <p className="modal__text">Please confirm that you'd like to delete the {inventoryData[this.state.clickedIndex].itemName} from the inventory list. You won't be able to undo this action.</p>

                </Modal>}
            
            </section>
        );
    }
}
export default InventoryList;
