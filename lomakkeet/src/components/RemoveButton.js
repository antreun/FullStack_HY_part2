import React from 'react'

const RemoveButton = (props) => {
  return (
    <div>
      <button
        onClick={props.removePerson(props.removeId)} >Poista</button>
    </div>
    )
}

export default RemoveButton
