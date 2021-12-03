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
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Title</label>
            <input 
              className="form-control"
              type="text"
              required 
              defaultValue={defaultTitle}
              name="topic[title]"
            />
          </div>
          <div className="form-group col-md-6">
            <label>Body</label>
            <textarea
              className="form-control"
              required 
              defaultValue={defaultBody}
              name="topic[body]"
            ></textarea>
          </div>
        </div>
        <br />
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </>
  )
}

export default TopicNew;