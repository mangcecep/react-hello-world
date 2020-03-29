import React from 'react'


const Post = (props) => {
    return (
        <div className="post">
            <div className="img-thumb">
                <img src="http://placeimg.com/200/150/tech" alt="dummy"/>
            </div>
            <div className="content">
                <p className="title">{props.data.title}</p>
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