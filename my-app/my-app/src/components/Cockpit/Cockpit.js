import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    const toggleButtonRef = useRef(null);
    const authContext = useContext(AuthContext);

    // runs once in beginning and once on unmount
    useEffect(() => {
        console.log('[Cockpit.js]\t useEffect');
        toggleButtonRef.current.click()
        return () => {
            console.log('[Cockpit.js]\t cleanup work in useEffect');
        };
    }, []);

    // runs every cycle
    useEffect(() => {
        console.log('[Cockpit.js]\t 2nd useEffect');
        return () => {
            console.log('[Cockpit.js]\t cleanup work in 2nd useEffect');
        };
    });

    let buttonClass = '';
    if (props.showPersons) {
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
                ref={toggleButtonRef}
                className={buttonClass}
                onClick={props.clicked}>
                Toggle name
            </button>
            <button onClick={authContext.login}>Log In</button>
        </div>
    );
}

export default React.memo(cockpit);