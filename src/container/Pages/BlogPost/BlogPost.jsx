import React, { Component, Fragment } from 'react'
import './BlogPost.css'
import Post from '../../../component/Post/Post'
// import axios from 'axios'
import API from '../../../service'

export class BlogPost extends Component {
    state = {
        post : [],
        formBlogPost : {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false,
        comments: []
    }

    getPostApi = () => {
        API.getNewsBlog().then(res => {
             // console.log(res.data);
             this.setState({
                post: res
            })
        })
        API.getComments().then(res => {
            this.setState({
                comments: res
            })
        })
        // axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        // .then((res) => {
        //     // console.log(res.data);
        //     this.setState({
        //         post: res.data
        //     })
        // })
    }

    postDataToApi = () => {
        API.postNewsBlog(this.state.formBlogPost)
        .then( (res) => {
            this.getPostApi();
            console.log(res);
            this.setState({
                formBlogPost : {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                },
            })
        })
        // axios.post('http://localhost:3004/posts/', this.state.formBlogPost)
        // .then(res => {
        //     console.log(res);
        //     this.getPostApi();
        //     this.setState({
        //         formBlogPost : {
        //             id: 1,
        //             title: '',
        //             body: '',
        //             userId: 1
        //         },
        //     })
        // }, (err) => {
        //     console.log(err)
        // })
    }

    putDataToAPi = () => {
        API.updateNewsBlog(this.state.formBlogPost, this.state.formBlogPost.id)
        .then(res => {
            this.getPostApi();
            this.setState({
                isUpdate: false,
                formBlogPost : {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                },
            })
        })
        // axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
        // .then(res=> {
        //     console.log(res);
        //     this.getPostApi();
        //     this.setState({
        //         isUpdate: false,
        //         formBlogPost : {
        //             id: 1,
        //             title: '',
        //             body: '',
        //             userId: 1
        //         },
        //     })
        // })
    }

    handleRemove = data => {
        // console.log(data)
        API.deleteNewsBlog(data)
        .then(res => {
            this.getPostApi()
        })
        // axios.delete(`http://localhost:3004/posts/${data}`)
        // .then((res)=> {
        //     this.getPostApi()
        // })
    }

    handleUpdate = data => {
        console.log(data);
        this.setState({
            formBlogPost : data,
            isUpdate: true
        })
    }

    handleFormChange = (event) => {
        let formBlogPostNew = {...this.state.formBlogPost};
        let timestamp = new Date().getTime();

        if(!this.state.isUpdate){
            formBlogPostNew['id'] = timestamp;
        }
        formBlogPostNew[event.target.name] = event.target.value;

        // console.log(timestamp);
        // console.log(event.target.name);

        this.setState({
            formBlogPost: formBlogPostNew
         })//, () => {
        //     console.log('value obj form', this.state.formBlogPost)
        // })
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`);
    }

    handleSubmit = () => {
        if (this.state.isUpdate) {
             this.putDataToAPi();
        } else {
            this.postDataToApi();
        }
    }

    componentDidMount() {
        // menggunakan fetch API
        // fetch('http://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post: json
        //     })
        // })

        //  menggunakan axios
        this.getPostApi();
    }

    render() {
        return (
            <Fragment>
                <p>Halaman Blog Post</p>
                <hr/>
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">

                    <label
                    htmlFor="title">
                        Title
                    </label>

                    <input type="text" name="title" placeholder="add title" onChange={this.handleFormChange} value={this.state.formBlogPost.title}/>
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body" cols="30" rows="10" placeholder="add blog content" onChange={this.handleFormChange} value={this.state.formBlogPost.body}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Save</button>
                </div>
                {/* {
                    this.state.comments.map(comment => {
                        return <p>{comment.name} - {comment.email}</p>
                    })
                } */}
                {
                    this.state.post.map(post => {
                        return <Post
                        key={post.id}
                        data={post} remove={this.handleRemove}
                        update={this.handleUpdate}
                        goDetail={this.handleDetail}/>
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost