import './Modal.scss';
import CloseButton from '../../assets/icons/close-24px.svg';
import axios from 'axios';


const Modal = ({ handleClose, show, children, warehouseId }) => {

    const showHideClassName = show ? "modal__show" : "modal__hide";

    const deleteWarehouse = () => {

        axios.delete(`https://instock-mulan.netlify.app/warehouse/${warehouseId}`)
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
                    <button className="modal__button modal__delete" type="button" onClick={deleteWarehouse}>
                        Delete
                    </button>

                    <img className="modal__close" onClick={handleClose} src={CloseButton} alt="Close Outline" />

                </div>

            </div>
        </div>
    )

}



export default Modal;