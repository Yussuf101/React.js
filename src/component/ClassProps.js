import React, { Component } from 'react'

class ClassProps extends Component {
    render() {
        return (
            <div>
                <h1>Hello, {this.props.name} from
                 {this.props.location} welcome to the props lessons</h1>
                <p>{this.props.children}</p>
            </div>
        )
    }
}

export default ClassProps;
