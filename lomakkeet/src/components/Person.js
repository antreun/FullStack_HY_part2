import React from 'react'
import RemoveButton from './RemoveButton'

const Person = (props) => {
  return (
    <tr>
      <td>{props.person.name}</td>
      <td>{props.person.number}</td>
      <td><RemoveButton removeId={props.person.id} removePerson={props.removePerson} /></td>
    </tr>
    )
}

export default Person
