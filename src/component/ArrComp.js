import React from 'react'

class ArrComp extends React.Component {
    state ={
        Numbers:[1,2,3,4,5]
    };
    addHandler =()=>{
        let storeNums = [...this.state.Numbers];
        storeNums.push(storeNums[storeNums.length -1]+1);
        this.setState({Numbers: storeNums});
    };
    render() {
        return (
            <div>
                {this.state.Numbers.map((Number,index)=>{
                    return<p key={index}>{Number}</p>
                })}
                <button onClick={this.addHandler}>add a number</button>
            </div>
        )
    }
};

export default ArrComp
