import './AddWarehouse.scss';
import { Link } from 'react-router-dom';
import WarehouseForm from '../../Components/WarehouseForm/WarehouseForm';
import backArrow from '../../assets/icons/arrow_back-24px.svg';


const AddWarehouse = (routerProps) => {

    return (
        <main className='main'>
            <div className='main__container'>
                <header className='header--form-page'>

                    <Link to='/warehouse'>
                        <img src={backArrow} alt="icon of back/left arrow" />
                    </Link>
                    <h1 className='header__title'>Add Warehouse</h1>
                </header>

                {<WarehouseForm routerProps={routerProps} />}

            </div>
        </main>
    );
};


export default AddWarehouse;
