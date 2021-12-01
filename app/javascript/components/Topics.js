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
      <a href={`/subs/${id}/topics/new`}>Add new topic</a>
      {/* topics = [{ title: 'adfadf', body: 'dasfasdf', id: 1}, { title: 'adfadf', body: 'dasfasdf', id: 2}] */}
      { topics.map( (topic) => (
        <>
          <h3>{topic.title}</h3>
          <a href={`${url}${topic.id}`}>Show</a>
          <a href={`${url}${topic.id}/edit`}>Edit</a>
          <a href={`${url}${topic.id}`} data-method="delete">
            Delete
          </a>
        </>
      ))}
    </>
  )
}

export default Topics;