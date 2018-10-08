import React from 'react';

const List = ({ list, onRemoveList= (f) => f, editingList= (f) => f }) => {
  return (
    <div className="single-list" key={list.id}>
      <h4>{list.title}</h4>
      <p>{list.excerpt}</p>
      <button onClick={() => onRemoveList(list.id)}> Erase </button>
      <button onClick={() => editingList(list.id)}> Edit </button>
      <hr/><br/>
    </div>
  )
}

export default List
