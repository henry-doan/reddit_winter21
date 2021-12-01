import React from 'react';

const Topic = ({ sub, topic }) => {

  const { id, name } = sub
  const { title, body } = topic
  return (
    <>
      <h1>Topic: {title}</h1>
      <h1>Sub: {name}</h1>
      <p>
        {body}
      </p>
      <a href={`/subs/${id}`}>Show page of {name}</a>
    </>
  )
}

export default Topic;