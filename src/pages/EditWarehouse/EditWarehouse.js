import './EditWarehouse.scss';
import { Link } from 'react-router-dom';
import WarehouseForm from '../../Components/WarehouseForm/WarehouseForm';
import backArrow from '../../assets/icons/arrow_back-24px.svg';
import React from 'react';
import axios from 'axios';



class EditWarehouse extends React.Component {
    state = {
        warehouseData: null
    }

    componentDidMount() {
        axios.get(`https://instock-mulan.netlify.app/warehouse/${this.props.match.params.id}`)
            .then(res => {
                this.setState({warehouseData: res.data[0]})
            })
            .catch(err => {
                console.log(err);
            }
        );
    }


    render() {
        return (
            <main className='main'>
                <div className='main__container'>
                    <header className='header--form-page'>

                        <Link to='/warehouse'>
                            <img src={backArrow} alt="icon of back/left arrow" />
                        </Link>
                        <h1 className='header__title'>Edit Warehouse</h1>
                    </header>

                    {this.state.warehouseData && <WarehouseForm routerProps={this.props} warehouseData={this.state.warehouseData} />}

                </div>
            </main>
        );
    }
};


export default EditWarehouse;
