import { Component } from "react";
import React from "react";
import Product_name from "./Product_name";

// let inputVal = "";
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: this.props.price,
            curr: '֏',
            inputVal: 'Example Text'
        }
    }
    inputChange = (e) => {
        this.setState({ inputVal: e.target.value })
    }
    chnagePriceCurrency = () => {
        let { price, curr } = this.state;
        let currenty = price[price.length - 1];
        if (currenty === "$") {
            price = parseFloat(price) * 390 + curr;
            this.setState({ price: price, curr: '$' });

        } else if (currenty === "֏") {
            price = parseFloat(price) / 390 + curr;
            // this.setState({price: price})
            this.setState({ price: price, curr: '֏' });

        }
    }
    render() {
        return (
            <div>
                <div className="product_block">
                    <Product_name name={this.props.name} />
                    <p className="product_description">{this.props.description}</p>
                    <p className="product_price">{this.state.price}</p>
                    <button className="change_btn" onClick={this.chnagePriceCurrency} > Փոխել տարադրամը {this.state.curr}</button>
                    <br />
                    <input type="text" id="input_bnt" onChange={this.inputChange} />
                    <p>{this.state.inputVal}</p>
                </div>
            </div>
        )
    }
}
// class Example extends Component {
//     state = {
//         count :0
//     };
//     minusClick = ()=> {
//         let {count} =this.state;
//         count--;
//         this.setState({
//             count:count
//         })
//     };
//     plusClick = ()=> {
//         let {count} =this.state;
//         count++;
//         this.setState({count}) 
//     };
//     render(){
//         return(
//             <div>
//                 <button onClick={this.minusClick}>-</button>
//                 <span>{this.state.count}</span>
//                 <button onClick={this.plusClick}>+</button>
//             </div>
//         );
//     }
// }


// function Example(){
//     let[value, setValue] = useState("");
//     return(
//         <div>
//             <input className="input_block" value={value} onChange={function(evt){
//                 setValue(value= evt.target.value);
//             }} /><br />
//             <span className="change_input">{value}</span>
//         </div>
//     );
// }

export default Product;