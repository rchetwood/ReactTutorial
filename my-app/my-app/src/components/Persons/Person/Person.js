import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css'
import Aux from '../../../hoc/Auxilary';
import withClass from '../../../hoc/withClassFunc';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js]\t rendering...');
        return (
            <Aux>
                {
                    this.context.authenticated ? 
                    (<p>Authenticated!</p>) : 
                    (<p>Please log in.</p>)
                }
                <p onClick={this.props.clicked}>
                    I'm {this.props.name} and 
                    I'm {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>
        );
    }
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
    click: PropTypes.func
}

export default withClass(Person, classes.Person);
