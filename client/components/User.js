import React, {PropTypes, Component} from 'react'

export default class User extends Component {
    render() {
        return (
            <div>Hello, your username is {this.props.username} and your age is {this.props.age}</div>
        )
    }
}

User.propTypes = {
    username: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
};