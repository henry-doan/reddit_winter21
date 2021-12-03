import React from 'react';

const SubNew = ({ sub }) => {

  // attr that your obj 
  const { name } = sub 
  // in case there are error it saves the user input
  // one per attr
  const defaultName = name ? name : ""
  return (
    <>
      <h1>Create new Sub</h1>
      <form action="/subs" method="post">
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control col-md-6"
            type="text"
            placeholder="Sub name"
            required
            // these next ones are a must
            defaultValue={defaultName}
            name="sub[name]"
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Sub</button>
      </form>
      <br />
      <a href="/subs" className="btn btn-success">Back to Subs</a>
    </>
  )
}

export default SubNew;