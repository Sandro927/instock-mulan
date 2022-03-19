import './Modal.scss';


const Modal = ({ handleClose, show, children }) => {

    const showHideClassName = show ? "modal__show" : "modal__hide";

    return (
        <div className={showHideClassName}>
            <div className='modal'>
                <div className="modal__main">
                    {children}
                    <button className="modal__button modal__cancel" type="button" onClick={handleClose}>
                        Cancel
                    </button>
                    <button className="modal__button modal__delete" type="button" onClick={handleClose}>
                        Delete
                    </button>
                </div>

            </div>
        </div>
    )

}



export default Modal;