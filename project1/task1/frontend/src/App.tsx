import { useEffect, useState } from "react"
import SearchBar from "./components/SearchBar"
import UserInfoBox from "./components/UserInfoBox"
import Modal from "./components/Modal";

interface User{
  name : string;
  phone : string;
  email : string;
  address : string;
  position_name : string;
  department : string;
  hire_date : string;
}

function App() {  

  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    const url = search
      ? `http://[::1]:3000/?term=${encodeURIComponent(search)}`
      : 'http://[::1]:3000/';

    fetch(url)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, [search])

  function handleUserClick(user : User){
    setSelectedUser(user);
  }

  function closeModal(){
    setSelectedUser(null)
  }

  return (
    <>
      <div className="container">
        <SearchBar onSearch={setSearch}/>
        <div className="user-info-box">
          {users.map((user, index) => (
            <UserInfoBox key={index} user = {user} onClick={() => handleUserClick(user)}/>
          ))}
        </div>

        {selectedUser && (
          <Modal user = {selectedUser} onClose={closeModal}/>
        )}
      </div>
    </>
  )
}

export default App
