import React, {useState} from "react";
import classes from '../Users/AddUser.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();

        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            return;
        }

        if(enteredAge < 0){
            return;
        }

        console.log(enteredUsername);
        console.log(enteredAge);    
    }

    const userNameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return(
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
            
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter Username" onChange={userNameChangeHandler}/>

            <label htmlFor="age">Age</label>
            <input type="number" id="age" placeholder="Enter Age" step="1" onChange={ageChangeHandler}/>
 
             <Button type="submit">Add User</Button>
            
            </form>
        </Card>
    );

};

export default AddUser;