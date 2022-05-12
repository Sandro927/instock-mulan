import './InventoryModal.scss';
import CloseButton from '../../assets/icons/close-24px.svg';
import axios from 'axios';


const InventoryModal = ({ handleClose, show, children, itemId }) => {

    const showHideClassName = show ? "modal__show" : "modal__hide";

    const deleteInventory = () => {
        axios.delete(`https://instock-mulan.netlify.app/inventory/${itemId}`)
            .then(response => {
            })
            window.location.reload()
    }

    return (
        <div className={showHideClassName}>
            <div className='modal'>
                <div className="modal__main">
                    {children}
                    <button className="modal__button modal__cancel" type="button" onClick={handleClose}>
                        Cancel
                    </button>
                    <button className="modal__button modal__delete" type="button" onClick={deleteInventory}>
                        Delete
                    </button>

                    <img className="modal__close" onClick={handleClose} src={CloseButton} alt="Close Outline" />

                </div>

            </div>
        </div>
    )
}



export default InventoryModal;