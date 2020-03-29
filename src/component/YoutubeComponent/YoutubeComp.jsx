import React from 'react'
import './YoutubeComp.css'

const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://pbs.twimg.com/profile_images/606671522871140352/QM2XSxqS_400x400.jpg" alt=""/>
                <p className="time">{props.time}</p>
            </div>
          <p className="title">{props.title}</p>  
          <p className="disc">{props.desc}</p>  
        </div>
    )
}

YoutubeComp.defaultProps = {
    time: '00:00',
    title: 'Title Here',
    desc: 'Desc Here'
}

export default YoutubeComp
