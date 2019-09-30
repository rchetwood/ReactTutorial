import React from 'react';

const userOutput = (props) => {
    const style = {
        width: '60%',
        padding: '16px',
        margin: '16px'
    };

    return (
        <div style={style}>
            <p >Welcome, {props.username}!</p>
            <p>Input text above.</p>
        </div>
    );
};

export default userOutput;