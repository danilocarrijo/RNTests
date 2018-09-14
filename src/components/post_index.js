import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class PostIndex extends Component {

    componentDidMount() {
        this.props.fetchPost();
    }

    renderPosts(){
        console.log(this.props.posts);
        return _.map(this.props.posts, post =>{
            return (
                <li key={post.id} className="list-group-item">
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapSatateToProps(state){
    return {posts : state.posts};
}

export default connect(mapSatateToProps, { fetchPost })(PostIndex);