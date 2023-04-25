import { Component } from "react";
import React from "react";

class Product_name extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
            <>
                <p className="product_name">{this.props.name}</p>
            </>
        )
    }
}

export default Product_name;