import React from 'react';

const Comment = ({ comment, topic }) => {

  const { id, author, body } = comment
  return (
    <>
      <h3>Author: {author}</h3>
      <p>
        {body}
      </p>
      <br />
      <a href={`/topics/${topic.id}/comments`}>Go to Comments</a>
    </>
  )
}

export default Comment;