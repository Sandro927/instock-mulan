import './Inventory.scss'
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import InventoryList from '../../Components/InventoryList/InventoryList';


class Inventory extends React.Component {

    state = {
        inventoryData: null //
    };

    // componentDidMount() {

    // };


    render() {

        return (          
            <main className='main__container'>

                <header>
                    <h1 className="header__title">Inventory</h1>
                    <input className='header__search' type="text" placeholder='Search...' />
                    <Link to='/inventory/add'>
                        <button className='header__add-button'>+ Add new item</button>
                    </Link>
                </header>

                {this.state.inventoryData && <InventoryList inventoryData={this.inventoryData}/>}

            </main>
        );
    }
}

export default Inventory;
