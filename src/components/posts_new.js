import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions'

class PostNew extends Component {

    renderField(field) {

        const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        this.props.createPost(values, () =>{
            this.props.history.push('/');
        });
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button className="btn btn-primary" type="submit">Submit</button>
                <Link className="btn btn-danger" to="/">
                    Cancel
                </Link>
            </form>
        )
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = "Enter a title!";
    }

    if (!values.categories) {
        errors.categories = "Enter a categorie!";
    }

    if (!values.content) {
        errors.content = "Enter a content!";
    }

    return errors;

}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
   connect(null,{createPost})(PostNew)
);