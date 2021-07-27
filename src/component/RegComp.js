import React, { Component } from 'react'

 class RegComp extends Component {
    render() {
        // console.log('Regular Component render');
        return (
            <div>
                I'm a Regular Component {this.props.name}
            </div>
        )
    }
}

export default RegComp
