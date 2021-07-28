import React from 'react';
// import logo from './logo.svg';
import './App.css';
import FunctionalComp from './component/functionalComp';
import {ClassComp, CC} from './component/classComp';
import Click from './component/click';
import Counter from './component/counter';
import ParentComp from './component/ParentComp';
import ClassProps from './component/ClassProps';
import FunctionProps from './component/functionProp';
import NewComp from './component/NewComp';
import ArrComp from './component/ArrComp';
import FunctionalCompInput from './component/functionalCompInput';

class App extends React.Component{
  styles ={
    fontstyle: "bold",
    color: "teal"
  };
  render(){
  return (
    <div className="App">
          <h1 style={this.styles}> Hello, welcome</h1>
          <h1>this about component</h1>
          <FunctionalComp/>
          <FunctionalCompInput/>
          <ClassComp/>
          <CC/>
          <Click/>
          <ArrComp/>
          <Counter/>
          <ParentComp/>
          <ClassProps name="Yussuf" location ="Manchester" ><p>Child Component</p></ClassProps>
          <ClassProps name="Mohammed" location ="New York">
            <button>Click me</button></ClassProps>
          <ClassProps name="Ismail" location = "Bancock"/>
          <FunctionProps name ="Yussuf" location ="Dublin" />{" "}
          <NewComp/>
          
    </div>
    
  );
  }
}

export default App;
