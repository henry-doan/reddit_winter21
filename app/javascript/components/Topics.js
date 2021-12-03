import React from 'react';

const Topics = ({ sub, topics, taco }) => {

  const { id, name } = sub
  // const id = sub.id
  // const name = sub.name
  const url = `/subs/${id}/topics/`
  return(
    <>
      <h1>All topics from {name}</h1>
      <p>{taco}</p>
      <a href={`/subs/${id}/topics/new`} className="btn btn-dark">Add new topic</a>
      <br />
      {/* topics = [{ title: 'adfadf', body: 'dasfasdf', id: 1}, { title: 'adfadf', body: 'dasfasdf', id: 2}] */}
      <ul class="list-group">
        { topics.map( (topic) => (
          <li className="list-group-item">
            <h3>{sub.name}</h3>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <a className="btn btn-primary" href={`${url}${topic.id}`}>Show</a>
              <a className="btn btn-warning" href={`${url}${topic.id}/edit`}>Edit</a>
              <a className="btn btn-danger" href={`${url}${topic.id}`} data-method='delete'>
                Delete
              </a>
            </div>
          </li>
        )) }
      </ul>
    </>
  )
}

export default Topics;