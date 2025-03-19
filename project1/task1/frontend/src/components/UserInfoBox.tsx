import EmailIcon from '../assets/EmailIcon.svg'
import PhoneIcon from '../assets/PhoneIcon.svg'
import '../styles/UserInfoBox.css'

interface User{
    name : string;
    phone : string;
    email : string;
    address : string;
    position_name : string;
    department : string;
    hire_date : string;
  }

interface UserInfoBoxProps {
    user: User;
    onClick : () => void;
}

function UserInfoBox({user, onClick} : UserInfoBoxProps){
    return(
        
        <div className="box" onClick={onClick}>
            <div className="info">
                <h2>{user.name}</h2>
                <div className="contacts">
                    <div className="contact">
                        <img src={PhoneIcon} alt="phone icon" />
                        <p>{user.phone}</p>
                    </div>
                    <div className="contact">
                        <img src={EmailIcon} alt="email icon" />
                        <p>{user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfoBox