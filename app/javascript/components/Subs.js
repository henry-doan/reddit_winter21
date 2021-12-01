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

      { subs.map( (sub) => (
        <>
          <h3>{sub.name}</h3>
          <a href={`/subs/${sub.id}`}>Show</a>
          <a href={`/subs/${sub.id}/edit`}>Edit</a>
          <a href={`/subs/${sub.id}`} data-method='delete'>
            Delete
          </a>
        </>
      )) }
    </>
  )
}

export default Subs;