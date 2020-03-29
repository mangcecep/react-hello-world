import React, { Component, Fragment } from 'react'
import YoutubeComp from '../../../component/YoutubeComponent/YoutubeComp'

class YoutubeCompPage extends Component {
    render() {
        return (
            <Fragment>
                <p>Youtube Component</p>
                <hr/>
               <YoutubeComp 
                    time="7.12"
                    title="Ngulik Bareng React Js part 1"
                    desc="2x ditonton, 2 hari yang lalu"
               />
               <YoutubeComp 
                    time="7.12"
                    title="Ngulik Bareng React Js part 1"
                    desc="2x ditonton, 2 hari yang lalu"
               />
               <YoutubeComp 
                    time="7.12"
                    title="Ngulik Bareng React Js part 1"
                    desc="2x ditonton, 2 hari yang lalu"
               />
               <YoutubeComp 
                    time="7.12"
                    title="Ngulik Bareng React Js part 1"
                    desc="2x ditonton, 2 hari yang lalu"
               />
               <YoutubeComp />
            </Fragment>
        )
    }
}

export default YoutubeCompPage