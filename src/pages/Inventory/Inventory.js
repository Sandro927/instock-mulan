import './Inventory.scss'
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import InventoryList from '../../Components/InventoryList/InventoryList';
import Modal from '../../Components/Modal/Modal';


class Inventory extends React.Component {

    state = {
        inventoryData: null
    };
    // initial state above null until GET request for data completed in componentDidMount below

    componentDidMount() {
        axios.get('http://localhost:8080/inventory')
            .then(res => {
                this.setState({
                    inventoryData: res.data
                });
            }).catch(err => console.log(err))
    };

    render() {

        return (

            <section className='warehouses'>
                <div className='inventories__content'>
                    <div className='inventories__header'>
                        <h1 className='inventories__title'>Inventory</h1>
                        <div className='inventories__options'>
                            <form className='inventories__form' >
                                <input type="text" placeholder="Search..." className="inventories__search" />
                            </form>
                            <Link to='/inventory/add'>
                                <button className='inventories__button'>+ Add new item</button>
                            </Link>

                        </div>
                    </div>
                    {this.state.inventoryData && <InventoryList inventoryData={this.state.inventoryData} />}

                </div>

            </section>
        );
    }
}

export default Inventory;
