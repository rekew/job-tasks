import CloseIcon from "../assets/CloseIcon.svg"
import "../styles/Modal.css"

interface User{
    name : string;
    phone : string;
    email : string;
    address : string;
    position_name : string;
    department : string;
    hire_date : string;
}

interface ModalProps{
    user : User;
    onClose : () => void;
}

function Modal({user, onClose} : ModalProps){

    function handleOverlayClick(e : React.MouseEvent<HTMLDivElement>){
        if(e.target === e.currentTarget){
            onClose();
        }
    }

    return(
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <div className="user-name-close">
                    <h2>{user.name}</h2>
                    <img onClick={handleOverlayClick} src={CloseIcon} alt="close" />
                </div>
                <div className="about-user">
                    <div className="about-user-info">
                        <p className ='info-name'>Телефон:</p>
                        <p className="info-description">{user.phone}</p>
                    </div>
                    <div className="about-user-info">
                        <p className ='info-name'>Почта:</p>
                        <p className="info-description">{user.email}</p>
                    </div>
                    <div className="about-user-info">
                        <p className ='info-name'>Дата приема:</p>
                        <p className="info-description">{user.hire_date}</p>
                    </div>
                    <div className="about-user-info">
                        <p className ='info-name'>Должность:</p>
                        <p className="info-description">{user.position_name}</p>
                    </div>
                    <div className="about-user-info">
                        <p className ='info-name'>Подразделение:</p>
                        <p className="info-description">{user.department}</p>
                    </div>
                </div>
                <div className="extra-description">
                    <p className="description-header">Дополнительная информация:</p>
                    <p className="sub-description">Живет по адресу: {user.address}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal