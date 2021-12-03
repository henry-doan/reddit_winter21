import React from 'react';

const Comments = ({ topic, comments }) => {

  const { id, title } = topic
  const url = `/topics/${id}/comments/`
  return(
    <>
      <h1>All topics from {title}</h1>
      <a href={`/topics/${id}/comments/new`} className="btn btn-dark">Add new Comment</a>
      <br />
      <ul class="list-group">
        { comments.map( (c) => (
          <li className="list-group-item">
            <h3>{c.author}</h3>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <a className="btn btn-primary" href={`${url}${c.id}`}>Show</a>
              <a className="btn btn-warning" href={`${url}${c.id}/edit`}>Edit</a>
              <a className="btn btn-danger" href={`${url}${c.id}`} data-method='delete'>
                Delete
              </a>
            </div>
          </li>
        )) }
      </ul>
    </>
  )
}

export default Comments;