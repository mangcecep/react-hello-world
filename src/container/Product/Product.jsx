import React, { Component, Fragment } from 'react'
import './Product.css'
import CardProduct from './CardProduct/CardProduct'
import {connect} from 'react-redux'

class Product extends Component {
    // state = {
    //     order: 4
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render() {

        return (
            <Fragment>
                <p>Halaman Product</p>
                <hr/>
                <div className="header">
                    <div className="logo">
                        <img src="https://s3-ap-southeast-1.amazonaws.com/etanee-images/asset/etanee512.jpg" alt=""/>
                    </div>
                    <div className="troley">
                        <img src="https://previews.123rf.com/images/dmvector/dmvector1907/dmvector190700035/127899308-shopping-cart-icon-trolley-icon-.jpg" alt=""/>
                    <div className="count">{this.props.order}</div>
                    </div>
                </div>
               <CardProduct/>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        order : state.totalOrder
    }
}

export default connect(mapStateToProps)(Product);