import { useState } from "react";

const Filter = ({ filter, setFilter }) => {
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      filter shown with
      <input type="text" value={filter} onChange={handleFilterChange} />
    </div>
  );
};

const PersonForm = ({
  newName,
  setNewName,
  persons,
  setPersons,
  newNumber,
  setNewNumber,
}) => {
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const personFound = persons.filter((person) => person.name === newName);
    if (personFound.length === 0) {
      setPersons([...persons, { name: newName, number: newNumber }]);
      setNewName("");
      setNewNumber("");
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input type="text" required value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number:{" "}
        <input type="text" required value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

const Persons = ({persons, filter}) => {
  return (
    <div>
      {persons.map((person) => {
        if (filter !== "") {
          if (person.name.toLowerCase().search(filter.toLowerCase()) !== -1) {
            return <p key={person.name}>{`${person.name} ${person.number}`}</p>;
          }
          return "";
        }
        return <p key={person.name}>{`${person.name} ${person.number}`}</p>;
      })}
    </div>
  );
};
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h3>add a new</h3>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter} />
    </div>
  );
};

export default App;
