import React from "react";
import classes from '../Users/AddUser.module.css';
import Card from "../UI/Card";

const AddUser = (props) => {

    const addUserHandler = (event) => {
        event.preventDefault();
    }

    return(
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
            
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter Username"/>

            <label htmlFor="age">Age</label>
            <input type="text" id="age" placeholder="Enter Age"/>
 
             <button type="submit">Add User</button>
            
            </form>
        </Card>
    );

};

export default AddUser;