import React, { Component } from 'react'
import axios from 'axios'
class Jokes extends Component {
    state={
        data: {
            joke1:'',
            joke2:''
        },
        isLoading: true,
        winner:''
        

    } 
    
    async componentDidMount(){
        //first
        const joke1 = await axios("https://api.chucknorris.io/jokes/random")
        console.log(joke1);
        
       let firstJoke = joke1.data.value

       //second
       const joke2 = await axios("https://api.chucknorris.io/jokes/random")
       
        let secondJoke = joke2.data.value

        this.setState({
          data:{
              joke1:firstJoke,
              joke2:secondJoke 
          }, 
          //si se llaman igual el state object comola const creada para modificar el valor no hace falta poner data : data
          isLoading: false
        })

        
        
    }
   
    recoverJoke = (e) => {
        //console.log(e.target.id)
        //console.log (` thinks ${e.target.id} is the funiest`)
        this.setState({
            winner: e.target.id

        })
       
    }

 /*   onLoadSecondJoke = () =>{
        setInterval(componentDidMount(),2000)
    } */
    
    render(){
        console.log(this.props);
        
        return(
            <div>
                {
                  this.state.isLoading
                  ? <h1>LOADING...</h1>
                  ://its necesari to put both elements in the same div!! to display its
                  <div><form >
                      <input type='radio' id={this.state.data.joke1} name='joke'  onClick={this.recoverJoke}/>{this.state.data.joke1}<br/>
                       <input type='radio' id={this.state.data.joke2} name='joke'  onClick={this.recoverJoke}/>{this.state.data.joke2}<br/>
                  </form>
                  <h3>{this.props.user} thinks {this.state.winner} is the funiest</h3>
                  </div>
                  
                }
                
            </div>
        )
    }
}

export default Jokes;