import React from 'react';

const validationComponent = (props) => {
    const minTextLength = 5;
    let errorMessage = "Text is long enough"; 
    if(props.length < minTextLength) {
        errorMessage = "Text is too short";
    }

    return (
        <div>
            <p>  
                {errorMessage}
            </p>
        </div>
    );
}

export default validationComponent;