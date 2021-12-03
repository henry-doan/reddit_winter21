import React from 'react';

// controller index should match in 
// the Filename, the component name 
// and export name,

// props are propertys pass into the 
// component from the controller
// const Subs = ({props, keys}) => {

const headerStyles = {
  headers: {
    fontSize: '24px',
    color: 'green',
    background: 'yellow'
  }, 
  para: {
    color: 'red',
  }
}

// const parastyles = {
//   para: {

//   }
// }
const Subs = ({ subs }) => {
  return (
    <>
      <h1 style={{ fontSize: '36px', color: 'blue' }}>Subs Page</h1>
      <h1 style={headerStyles.headers}>Subs Page</h1>
      <p style={headerStyles.para}>this is a paragraph</p>
      <p className="my-para">this is another paragraph</p>
      
      <a href="/subs/new">
        <button className="btn btn-dark">Add Sub</button>
      </a>
      <br />
      <br />
      <ul class="list-group">
        { subs.map( (sub) => (
          <li className="list-group-item">
            <h3>{sub.name}</h3>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <a className="btn btn-primary" href={`/subs/${sub.id}`}>Show</a>
              <a className="btn btn-warning" href={`/subs/${sub.id}/edit`}>Edit</a>
              <a className="btn btn-danger" href={`/subs/${sub.id}`} data-method='delete'>
                Delete
              </a>
            </div>
          </li>
        )) }
      </ul>
      <br />
    </>
  )
}

export default Subs;