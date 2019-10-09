import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

    let buttonClass = '';
    if(props.showPersons) {
        buttonClass = classes.Red;
    }

    const assignedClasses = [];
    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Class names can be rendered dynamically!</p>
            <button
                className={buttonClass}
                onClick={props.clicked}>
                Toggle name
            </button>
        </div>
    );
}

export default cockpit;