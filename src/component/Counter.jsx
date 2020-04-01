import React, { Component } from 'react'
// import {connect} from 'react-redux'
// import ActionType from '../redux/reducer/globalActionType';

// import { RouteContext } from '../container/Home/Home'
import { GlobalConsumer } from '../context/context'

export class Counter extends Component {
    // state = {
    //     order: 4
    // }

    // handleCounterChange = (newValue) => {
    //     this.props.onCounterChange(newValue);
    // }

    // handlePlus = () => {
    //     this.setState({
    //         order: this.state.order +1
    //     }, () => {
    //         this.handleCounterChange(this.state.order);
    //     })

    //     // console.log('plus :', this);
    // }

    // handleMinus = () => {
    //     if (this.state.order > 0) {
    //         // console.log('minus:', this)
    //         this.setState({
    //             order: this.state.order -1
    //         }, () => {
    //             this.handleCounterChange(this.state.order);
    //         })
    //     }
    // }
    render() {
        console.log(this);
        return (
             <div className="counter">
               <button className="minus" onClick={() => this.props.dispatch({type: 'MINUS_ORDER'})}>-</button>
                    <input type="text" value={this.props.state.totalOrder}/>
                <button className="plus" onClick={()=> this.props.dispatch({type: 'PLUS_ORDER'})}>+</button>
           </div>
                )
    }
}

// const mapStateToProps = state => {
//     return {
//         order: state.totalOrder
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         handlePlus: () => dispatch({type: ActionType.PLUS_ORDER}),
//         handleMinus: () => dispatch({type: ActionType.MINUS_ORDER})
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
export default GlobalConsumer(Counter)
