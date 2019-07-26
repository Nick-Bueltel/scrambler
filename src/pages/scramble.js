import React from 'react'
import {Button, TextArea} from 'semantic-ui-react'

class ScramblerForm extends React.Component{
   
    state = {
    inputTrue : false,
    input : '',
    outPut : '',
    

    }

    handleInput = (e) => {

        this.setState({
            [e.target.name]: e.target.value,
            inputTrue : true,
        })
        this.doTheThing()
        
    }

    doTheThing = () => {
        let input = this.state.input
        var shuffled = input.split('').sort(function(){return 0.5-Math.random()}).join('');

        this.setState({outPut : shuffled})

    }

    render(){
    return(
        <div>
            <form>
                <TextArea name="input" onChange={this.handleInput}></TextArea>
               

            </form>
            <p name="outPut">{this.state.outPut}</p>
        </div>
        
    )
    }
}


class Scrambler extends React.Component{
    state = {
        showC : false,
       
        
    }
    
    handleShow = () => {
        this.state.showC === false ? this.setState({showC : true}) : this.setState({showC : false})
    }
            
    
    render(){
        return (
        <React.Fragment>
        <Button onClick={this.handleShow}>Show</Button>
           {this.state.showC === true ? <ScramblerForm/> : null } 



        </React.Fragment>
        )
    }
}

export default Scrambler