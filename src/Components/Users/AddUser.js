import React, {useState} from "react";
import classes from '../Users/AddUser.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'please insert data for both the inputs'
            });
            return;
        }

        if(+enteredAge < 0){  //make sure that entered age is converted to number
            setError({
                title: 'Invalid Age',
                message: 'please enter valid age (> 0)'
            });
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);

        console.log(enteredUsername);
        console.log(enteredAge); 
        
        setEnteredUsername('');
        setEnteredAge('');
    }

    const userNameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);  //null is treated as a falsy value
    }

    return(
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
            
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={enteredUsername} placeholder="Enter Username" onChange={userNameChangeHandler}/>

            <label htmlFor="age">Age</label>
            <input type="number" id="age" value={enteredAge} placeholder="Enter Age" step="1" onChange={ageChangeHandler}/>
 
             <Button type="submit">Add User</Button>
            
            </form>
        </Card>
        </div>
    );

};

export default AddUser;