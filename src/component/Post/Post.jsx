import React from 'react'
import s from '../../container/Pages/BlogPost/BlogPost.css'

const Post = (props) => {
    return (
        <div className="post">
            <div className={s.imgthumb}>
                <img src="http://placeimg.com/200/150/tech" alt="dummy"/>
            </div>
            <div className={s.content}>
                <p className={s.title} onClick={() =>props.goDetail(props.data.id)}>{props.data.title}</p>
                <p className="desc">{props.data.body}</p>
                <button className="update" onClick={() => { if (window.confirm('are u sure to update data?')) props.update(props.data) }}>
                    Update
                </button>
                <button className="remove" onClick={() => { if (window.confirm('are u sure to delete data?')) props.remove(props.data.id) }}>
                    Remove
                </button>
            </div>
        </div>
    )
}

export default Post