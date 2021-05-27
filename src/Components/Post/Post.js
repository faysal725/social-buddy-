import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const {id, title, body} = props.post;
    const history = useHistory();


    const showComments = id =>{
        const url = `post/${id}`;
        history.push(url);
    }
    return (
        <div>
            <h2>Title:{title}</h2>
            <h5>ID: {id}</h5>
            <p>body: {body}</p>
            <button onClick={() => showComments(id)}>Show Comments</button>
        </div>
    );
};

export default Post;