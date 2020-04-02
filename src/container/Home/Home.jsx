import React, { Component, Fragment /*,createContext*/ } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';


import BlogPost from '../Pages/BlogPost/BlogPost'
import Product from '../Product/Product'
import LifeCycleComp from '../Pages/LifeCycleComp/LifeCycleComp'
import YoutubeCompPage from '../Pages/YoutubeComp/YoutubeCompPage'
import DetailPost from '../Pages/BlogPost/DetailPost/DetailPost';
import Hooks from '../Pages/Hooks/Hooks';

import './Home.css'
import  GlobalProvider  from '../../context/context';

class Home extends Component {
    // state = {
    //     showComponent: true
    // }

    // componentDidMount(){
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 15000)
    // }

    render() {
        return (
            <BrowserRouter>
                    <Fragment>
                        <div className="navigation">
                            <Link to="/">Blog Post</Link>
                            <Link to="/product">Product</Link>
                            <Link to="/lifeCycle">Lifecycle</Link>
                            <Link to="/youtubecomp">Youtube Component</Link>
                            <Link to="/hooks">Hooks</Link>
                        </div>
                        <Route path="/" exact component={BlogPost} />
                        <Route path="/detail-post/:id" component={DetailPost}/>
                        <Route path="/product" component={Product} />
                        <Route path="/lifecycle" component={LifeCycleComp} />
                        <Route path="/youtubeComp" component={YoutubeCompPage} />
                        <Route path="/hooks" component={Hooks} />
                    </Fragment>
            </BrowserRouter>
        )
    }
}

export default GlobalProvider(Home)