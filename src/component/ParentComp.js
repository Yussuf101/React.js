import React, { Component } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';

class ParentComp extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            name:"rockwood"
        };
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name:"rockwood"
            });
        },3000);
    }
    render() {
        // console.log('Parent Component render');
        return (
            <div>
                I'm the Parent Component
                <PureComp name = {this.state.name}/>
                <RegComp name ={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
