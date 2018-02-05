import React from 'react'
import axios from 'axios'
import Person from './components/Person'
import Filter from './components/Filter'
import NewPerson from './components/NewPerson'
import personService from './services/persons'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
      ],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  componentDidMount() {
    personService
      .getAll()
      .then(response => {
        this.setState({persons: response.data})
      })
}

  handleNameChange = (event) => {
    //console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    //console.log(event.target.value)
    this.setState({ newNumber: event.target.value })
  }

  handleFilter = (event) => {
    this.setState({ filter: event.target.value })
  }

  removePerson = () => {
    console.log("removing ")
  }


  addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: this.state.newName,
      number: this.state.newNumber,
      //id: this.state.persons.length + 1
    }

    //tarkastetaan onko nimi jo listassa
    const t = this.state.persons.filter(person => (person.name === personObject.name))
    if (t.length > 0) {
      alert("Nimi " + personObject.name + " on jo luettelossa!")
    }
    else {
      personService
        .create(personObject)

        .then(response => {
          this.setState({
            persons: this.state.persons.concat(response.data),
            newName: '',
            newNumber: '',
            filter: ''
          })
        })
    }
  }

  render() {
    const filteredPersons =
        this.state.filter === "" ?
          this.state.persons :
          this.state.persons.filter(person =>
            person.name.toLowerCase().indexOf(this.state.filter.toLowerCase()) > -1)

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Filter filterValue={this.state.filter} handleFilter={this.handleFilter} />
        <NewPerson addName={this.addName} newName={this.state.newName}
          handleNameChange={this.handleNameChange} newNumber={this.state.newNumber}
          handleNumberChange={this.handleNumberChange} />
        <h2>Numerot</h2>
        <table>
          {filteredPersons.map(person => <Person removePerson={this.removePerson}
              key={person.name} person={person} />)}
        </table>
      </div>

    )
  }
}

export default App
