import React from 'react';

const CommentNew = ({ topic, comment }) => {

  const { id, title } = topic 
  const { author, body } = comment
  const defaultAuthor = author ? author : ""
  const defaultBody = body ? body : ""
  return (
    <>
      <h1>New Comment from the topic {title}</h1>
      <form action={`/topics/${id}/comments`} method="post">
        <label>Author</label>
        <input 
          type="text"
          required 
          defaultValue={defaultAuthor}
          name="comment[author]"
        />
        <label>Body</label>
        <textarea
          required 
          defaultValue={defaultBody}
          name="comment[body]"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default CommentNew;