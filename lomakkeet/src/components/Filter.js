import React from 'react'

const Filter = (props) => {
  return (
    <div>
      Rajaa nimiä: <input value={props.filterValue}
      onChange={props.handleFilter}  />
    </div>
    )
}

export default Filter
