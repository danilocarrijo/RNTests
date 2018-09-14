import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostById,deletePost } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class PostShow extends Component {

    componentDidMount() {
        if(!this.props.post)
        {
            const {id} = this.props.match.params;
            this.props.fetchPostById(id);
        }
    }

    onDeleteClick(){
        const {id} = this.props.match.params; 
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const {post} = this.props;

        if(!post){
            return (<div>Loading...</div>);
        }

        return (
            <div>
                <Link to="/">
                    Back
                </Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}
                >
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categoris: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps({posts}, ownProps){
    return {post : posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchPostById,deletePost })(PostShow);