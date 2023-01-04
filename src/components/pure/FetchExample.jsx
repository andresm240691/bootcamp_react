import React, {useState, useEffect} from 'react'
import { 
    getAllUsers, 
    getAllPageUsers, 
    getUserDetail, 
    login 
} from '../../services/fetchService'


const FetchExample = () => {

  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(12);
  const [userPerPages, setUsersperPage] = useState(6);
  const [pages, setPages] = useState(2);
  const [selectedUser, setSelectedUser] = useState(null);
  

  useEffect(() => {
    optainUsers();
  }, [])
  
  const optainPageUsers =(page) =>{
    getAllPageUsers(page)
        .then((response) =>{
            console.log("USERS", response.data);
            setUsers(response.data);
            setTotalUsers(response.total)
            setUsersperPage(response.total_per_pages);
            setPages(response.total_pages);
        })
        .catch((error)=>{
            alert("Error while retreiving the users");
        })
        .finally(() => {
            console.log("Ended optaing users:");
            console.table(users);
        });
  }

  const optainUsers = () =>{
    getAllUsers()
        .then((response) =>{
            console.log("USERS", response.data);
            setUsers(response.data);
            setTotalUsers(response.total)
            setUsersperPage(response.total_per_pages);
            setPages(response.total_pages);
        })
        .catch((error)=>{
            alert("Error while retreiving the users");
        })
        .finally(() => {
            console.log("Ended optaing users:");
            console.table(users);
        });
  }

  const userDetails = (id) =>{
    console.log("ID =>",id);
    getUserDetail(id)
        .then((response) =>{
            console.log("USERS", response.data);
            setSelectedUser(response.data)
        })
        .catch((error)=>{
            alert("Error while retreiving the users");
        })
        .finally(() => {
            console.log("Ended optaing users:");
            console.table(users);
        });
  }
  
  const authUser = () =>{
    login("eve.holt@reqres.in", "cityslicka")
        .then((response) =>{
            console.log("USERS", response.data);
            sessionStorage.setItem('token', response.token)
        })
        .catch((error)=>{
            alert("Error while retreiving the users");
        })
        .finally(() => {
            console.log("Ende login user. Navigate to Home");
            
        });
  }

  return (
    <div>
        <button onClick={() =>authUser()}>Login</button>
        <h2>users: </h2>
        { users.map((user, index) => (
            <p key={index}>
                {user.first_name} {user.last_name}
                <button onClick={() => userDetails(index)}> Detail</button>
            </p>
        ))}
        <p>Showing {userPerPages} users of {totalUsers}</p>
        <button onClick={() =>optainPageUsers(1)}>Page 1</button>
        <button onClick={() =>optainPageUsers(2)}>Page 2 </button>

        <div>
            <h3>User detail</h3>
            <div>
            {selectedUser && (
                <div>
                    <p>Name: {selectedUser.first_name}</p>
                    <p>Last Name: {selectedUser.last_name}</p>
                </div>
            )}
            </div>
                
        </div>    

    </div>
  );
}

export default FetchExample