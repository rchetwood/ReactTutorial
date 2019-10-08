import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

    let buttonClass = '';
    if(props.showPersons) {
        buttonClass = classes.Red;
    }

    let assignedClasses = [];
    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div>
            <h1>Hi, I'm a React App.</h1>
            <p className={props.assignedClasses}>Class names can be rendered dynamically!</p>
            <button
                className={buttonClass}
                onClick={props.clicked}>
                Toggle name
            </button>
        </div>
    );
}

export default cockpit;