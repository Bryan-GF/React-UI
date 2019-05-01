import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

const numArray = [
    {
      number: 'clear',
      type: 'full',
      font: 'font'
    }, 
    {
      number: 7,
      type: 'third'
    }, 
    {
      number: 8,
      type: 'third'
    }, 
    {
      number: 9,
      type: 'third'
    }, 
    {
      number: 4,
      type: 'third'
    }, 
    {
      number: 5,
      type: 'third'
    }, 
    {
      number: 6,
      type: 'third'
    }, 
    {
      number: 1,
      type: 'third'
    }, 
    {
      number: 2,
      type: 'third'
    }, 
    {
      number: 3,
      type: 'third'
    }, 
    {
      number: 0,
      type: 'full',
    }
  ];
  
  const actionArray = ['÷', 'x', '-', '+', '='];



class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: numArray,
            newVal: "0",
        };
    }

    numClickEvent = event => {
        this.setState({
            newVal: event.target.value
        });
    };

    render() {
       console.log(this.state.newVal);
        return (
                <div className = 'allButtons'>
                    <div className = 'numberButton'>
                        {this.state.numbers.map(num => {
                        return <button onClick={this.numClickEvent} key = {num.number} className= {num.font + ' ' + num.type} value = {num.number}>{num.number}</button>
            })}
                    </div>
                    <div className = 'actionButton'>
                        {actionArray.map(action => {
                        return <ActionButton onClick={this.numClickEvent} key = {action} action = {action}/>;
                        })}
                    </div>
                </div>
        );
    }
}

export default Buttons;

