import React from 'react';

const TopicEdit = ({ sub, topic }) => {

  const { id, name } = sub 
  const { title, body } = topic
  const defaultTitle = title ? title : ""
  const defaultBody = body ? body : ""
  return (
    <>
      <h1>New topic from the Sub {name}</h1>
      <form action={`/subs/${id}/topics/${topic.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
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

export default TopicEdit;