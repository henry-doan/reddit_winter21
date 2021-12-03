import React from 'react';

const SubEdit = ({ sub }) => {

  // attr that your obj 
  const { name, id } = sub 
  // in case there are error it saves the user input
  // one per attr
  const defaultName = name ? name : ""
  return (
    <>
      <h1>Create Edit Sub</h1>
      <form action={`/subs/${id}`} method="post">
        {/* need for the update */}
        <input type='hidden' name='_method' value="patch" /> 
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
        <button type="submit" className="btn btn-primary">Update Sub</button>
      </form>
      <br />
      <a href="/subs" className="btn btn-success">Back to Subs</a>
    </>
  )
}

export default SubEdit;