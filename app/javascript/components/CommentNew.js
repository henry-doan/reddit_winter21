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
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Title</label>
            <input 
              className="form-control"
              type="text"
              required 
              defaultValue={defaultAuthor}
              name="comment[author]"
            />
          </div>
          <div className="form-group col-md-6">
            <label>Body</label>
            <textarea
              className="form-control"
              required 
              defaultValue={defaultBody}
              name="comment[body]"
            ></textarea>
          </div>
        </div>
        <br />
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </>
  )
}

export default CommentNew;