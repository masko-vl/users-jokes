import React, { Component } from 'react';
import Jokes from './components/jokes/jokes'

class App extends Component {
  state={
    name:'',
    isLoaded:false,
    
  }
 changeName = (event) => {
      //to recover the input id and put the input value into state
    this.setState({
      name: event.target.value,
      isLoaded:true
    })
 }
  /* keepName = (event) => {
    //alert('hola')
    
    alert( this.state.name)
    
    //don't display the function if the method before doesn't revover the name of the input
    event.preventDefaut();
    

  } */



  render(){
  return (
    <div>
    <form >
      <h1>REUSED EXCERSICE: Welcome to Netlify !</h1>
        <label htmlFor='name'>Name:</label>
        <input type ='text' value ={this.state.name} onChange={this.changeName}></input>
        {/* <button value={this.state.name} onClick={this.keepName}>Log in</button> */}
      </form>
      <h1>{this.state.name}</h1>
      <hr></hr>
      {/*put  true false statement in the state, so we use it for display JOke component after the user write the name*/}
      {this.state.isLoaded ? <Jokes user={this.state.name}/> : <h4>Write your name</h4>}
      
    </div>
  );
}}

export default App;
