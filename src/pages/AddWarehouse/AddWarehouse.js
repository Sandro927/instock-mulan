import './AddWarehouse.scss';
import { Link } from 'react-router-dom';
import WarehouseForm from '../../Components/WarehouseForm/WarehouseForm';


const AddWarehouse = () => {

    return (
        <main className='main'>
            <div className='main__container'>
                <header className='header'>

                    <Link to='/warehouses'>
                        {/* chevron here */}
                    </Link>

                    <h1 className='header__title'>Add Warehouse</h1>
                </header>

                {<WarehouseForm />}

            </div>
        </main>
    );
};


export default AddWarehouse;
