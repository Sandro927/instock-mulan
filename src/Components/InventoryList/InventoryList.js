import './InventoryList.scss';
import { Link } from 'react-router-dom';
import iconDelete from '../../assets/icons/delete_outline-24px.svg';
import iconEdit from '../../assets/icons/edit-24px.svg'


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
                                <p className="item__details-label">QTY</p>
                                <p className="item__detail">{item.quantity}</p>
                                <p className="item__details-label">WAREHOUSE</p>
                                <p className="item__detail">{item.warehouseName}</p>
                            </div>

                        </div>

                        <div className='item__container-bottom'>
                            {/* We'll have to link to edit form when completed here */}
                            {/* <Link to={ }> */}
                            <img src={iconDelete} alt="icon of a pencil" />
                            {/* </Link> */}
                            {/* We'll have to have our alert/modal for delete pop here */}
                            <img src={iconEdit} alt="icon of a trash can" />
                        </div>
                    </div>
                )
            })}
        </section>
    );
}

export default InventoryList;
