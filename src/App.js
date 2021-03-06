import React, {Fragment, useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';


function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (name, age) => {

    setUsersList((prevUserList)=>{
      return [...prevUserList, {username: name, age: age, id: Math.random().toString()}];
    });

  };

  return (
    <Fragment>
      
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
    </Fragment>
  );
}

export default App;
