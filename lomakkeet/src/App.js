import React from 'react';
import Person from './components/Person';
import Filter from './components/Filter';
import NewPerson from './components/NewPerson';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
      ],
      newName: '',
      newNumber: '',
      filter: ''
    }
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

  addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: this.state.newName,
      number: this.state.newNumber,
      id: this.state.persons.length + 1
    }

    //tarkastetaan onko nimi jo listassa
    const t = this.state.persons.filter(person => (person.name === personObject.name))
    if (t.length > 0) {
      alert("Nimi " + personObject.name + " on jo luettelossa!")
    }
    else {
      const persons = this.state.persons.concat(personObject)
      this.setState({
        persons: persons,
        newName: '',
        newNumber: '',
        filter: ''
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
          {filteredPersons.map(person => <Person key={person.name} person={person} />)}
        </table>
      </div>

    )
  }
}

export default App
