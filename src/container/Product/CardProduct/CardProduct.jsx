import React, { Component } from 'react'

class CardProduct extends Component {
    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order +1
        }, () => {
            this.handleCounterChange(this.state.order);
        })

        // console.log('plus :', this);
    }

    handleMinus = () => {
        if (this.state.order > 0) {
            // console.log('minus:', this)
            this.setState({
                order: this.state.order -1
            }, () => {
                this.handleCounterChange(this.state.order);
            })
        }
    }

    render() {
        
        return (
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2018/1/13/26783827/26783827_6c9824c3-dbf3-49fe-818a-2ec42e813450_320_320.jpg" alt=""/>    
                    </div>
                    <p className="product-title">Daging Ayam Berbumbu</p>
                    <p className="product-price">Rp. 410,00</p>
                    <div className="counter">
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input type="text" value={this.state.order}/>
                        <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
            )
    }
}

export default CardProduct