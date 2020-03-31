import React, { Component } from 'react'
import Counter from '../../../component/Counter'

class CardProduct extends Component {

    render() {
        return (
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2018/1/13/26783827/26783827_6c9824c3-dbf3-49fe-818a-2ec42e813450_320_320.jpg" alt=""/>    
                    </div>
                    <p className="product-title">Daging Ayam Berbumbu</p>
                    <p className="product-price">Rp. 410,00</p>
                    <Counter/>
                </div>
            )
    }
}

export default CardProduct