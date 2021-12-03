import React from 'react';

const Comments = ({ topic, comments }) => {

  const { id, title } = topic
  const url = `/topics/${id}/comments/`
  return(
    <>
      <h1>All topics from {title}</h1>
      <a href={`/topics/${id}/comments/new`}>Add new Comment</a>
      { comments.map( (c) => (
        <>
          <h3>{c.author}</h3>
          <a href={`${url}${c.id}`}>Show</a>
          <a href={`${url}${c.id}/edit`}>Edit</a>
          <a href={`${url}${c.id}`} data-method="delete">
            Delete
          </a>
        </>
      ))}
    </>
  )
}

export default Comments;