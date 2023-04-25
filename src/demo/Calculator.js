import React from 'react';
import { Component } from "react";

let inputThisVal= document.getElementsByClassName('calc_input');
inputThisVal.value=0;
class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewCalcVal: 0,
            calcvalone: 0,
            calcvaltwo: 0
        }
    }

    getpropinClick=(e)=>{
        let clickedValue=e.target.innerText;
        let {viewCalcVal , calcvalone , calcvaltwo}=this.state;
        if(clickedValue >=0){
            viewCalcVal += clickedValue;
        }else   if(clickedValue ==='C'){
            viewCalcVal =0;
        }
        // else if (clickedValue ==='.') {
        //     viewCalcVal+="."
        //     console.log([viewCalcVal].find(element => element === '.'));
        // }
        
        this.setState({
            viewCalcVal: +viewCalcVal
        })
        // console.log(viewCalcVal);
    }
    render() {
        return (
            <div className='Calc_body'>
                <div className="container">
                    <form action="" name="calc" className="calculator">
                        <input type="text" className="value calc_input" placeholder="0" onChange={this.getpropinClick}  value={this.state.viewCalcVal}  name="txt" />
                        <span onClick={this.getpropinClick} className="num clear"><i>C</i></span>
                        <span onClick={this.getpropinClick} className="num"><i>/</i></span>
                        <span onClick={this.getpropinClick} className="num"><i>*</i></span>
                        <span onClick={this.getpropinClick} className="num"><i>7</i></span>
                        <span onClick={this.getpropinClick} className="num"><i>8</i></span>
                        <span onClick={this.getpropinClick} className="num"><i>9</i></span>
                        <span onClick={this.getpropinClick} className="num"><i>-</i></span>
                        <span onClick={this.getpropinClick} className="num"><i>4</i></span>
                        <span onClick={this.getpropinClick} className="num"><i>5</i></span>
                        <span onClick={this.getpropinClick} className="num"><i>6</i></span>
                        <span onClick={this.getpropinClick} className="num plus"><i>+</i></span>
                        <span onClick={this.getpropinClick} className="num"><i>1</i></span>
                        <span onClick={this.getpropinClick} className="num"><i>2</i></span>
                        <span onClick={this.getpropinClick} className="num"><i>3</i></span>
                        <span onClick={this.getpropinClick} className="num"><i>0</i></span>
                        <span onClick={this.getpropinClick} className="num"><i>00</i></span>
                        <span onClick={this.getpropinClick} className="num"><i>.</i></span>
                        <span onClick={this.getpropinClick} className="num equal"><i>=</i></span>
                    </form>
                </div>
            </div>
        )
    }
}

export default Calculator;