import React from 'react';

const TopicNew = ({ sub, topic }) => {

  const { id, name } = sub 
  const { title, body } = topic
  const defaultTitle = title ? title : ""
  const defaultBody = body ? body : ""
  return (
    <>
      <h1>New topic from the Sub {name}</h1>
      <form action={`/subs/${id}/topics`} method="post">
        <label>Title</label>
        <input 
          type="text"
          required 
          defaultValue={defaultTitle}
          name="topic[title]"
        />
        <label>Body</label>
        <textarea
          required 
          defaultValue={defaultBody}
          name="topic[body]"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default TopicNew;