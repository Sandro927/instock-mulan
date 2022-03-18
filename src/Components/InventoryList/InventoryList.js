import './InventoryList.scss';
import { Link } from 'react-router-dom';


const InventoryList = (props) => {

    const { inventoryData } = props;

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

            {inventoryData.map(item => {
                return (
                    <div key={item.id} className='item'>
                        <div className='item__container-left'>
                            <p className="item__details-label">INVENTORY ITEM</p>

                            <Link to={`/inventory/${item.id}`}>
                                <p className="item__detail">{item.itemName}</p>
                            </Link>

                            <p className="item__details-label">CATEGORY</p>
                            <p className="item__detail">{item.category}</p>
                        </div>
                        <div className='item__container-right'>
                            <p className="item__details-label">STATUS</p>
                            <p className="item__detail">{item.status}</p>
                            <p className="item__details-label">QTY</p>
                            <p className="item__detail">{item.quantity}</p>
                            <p className="item__details-label">WAREHOUSE</p>
                            <p className="item__detail">{item.warehouse}</p>
                        </div>
                        <div className='item__container-bottom'>
                            <img src="" alt="icon of a pencil" />
                            <img src="" alt="icon of a trash can" />
                        </div>
                    </div>
                )
            })}
        </section>
    );
}

export default InventoryList;
