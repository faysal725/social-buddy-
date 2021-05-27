import React from 'react';

const Comment = (props) => {
    console.log(props)
    const {name, id, email}=props.comment;
    return (
        <div>
            <p>
                {id}: {name}: {email}
            </p>
        </div>
    );
};

export default Comment;