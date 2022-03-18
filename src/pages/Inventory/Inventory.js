import './Inventory.scss'
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import InventoryList from '../../Components/InventoryList/InventoryList';


class Inventory extends React.Component {

    state = {
        inventoryData: null
    };
    // initial state above null until GET request for data completed in componentDidMount below

    componentDidMount() {
        axios.get('http://localhost:8080/inventories')
            .then(res => {
                this.setState({
                    inventoryData: res.data
                });
            }).catch(err => console.log(err))
    };


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

                {/* Pass the data to the Inventory List as a prop */}
                {this.state.inventoryData && <InventoryList inventoryData={this.state.inventoryData} />}

            </main>
        );
    }
}

export default Inventory;
