import React, { Component } from 'react'

//http://hasanadiguzel.com.tr/api/kurgetir --->Rest Api Link
const context=React.createContext();

export class Context extends Component {
    constructor(props){
        super(props);
        this.state={
          loading:true,
          response:{}
          
        }
    }

    componentDidMount(){
      
      fetch("http://hasanadiguzel.com.tr/api/kurgetir")
      .then(response=>response.json())
      .then(response=>this.setState({response,loading:false}))      
      
  }

  render() {
    return (
      <context.Provider value={this.state}>
          {this.props.children}
      </context.Provider>
    )
  }
}

const Consumer=context.Consumer;

export default Consumer;