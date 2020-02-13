import React, { Component } from 'react';
import './App.css';
import Radium from 'radium'
import Persons from  '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
class App  extends Component {
  state = ({
    persons : [
      { id:"id1",name:"Yusuf", age:28},
      { id:"id2",name:"Usman", age:29},
      { id:"id3",name:"Rameez", age:30}
    ],
    showPersons:false
  })
  switchButtonHandler = (newName) => {
    this.setState({
      persons : [
        { name:newName, age:28},
        { name:"Usman", age:29},
        { name:"Rameez", age:33}
      ]
    })
  }

  nameChangeHandler = (( event,id) =>{

    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id
    })
    const person = {
      ...this.state.persons[personIndex]
    }

  
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person
    // const person = Object.assign({},this.state.persons[personIndex])
    this.setState({
      persons : persons
    })
  }) 

  showPersonsHandler = () => {
    const doesShow = this.state.showPersons

    this.setState({showPersons: !doesShow})
  }
  deletePersonHandler = (personIndex) => {
    let persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }
  render() {

    let persons = null
    if (this.state.showPersons) {
        persons = ( 
                      <Persons 
                      clicked={this.deletePersonHandler}
                      changed={this.nameChangeHandler}
                      persons={this.state.persons}
                    />
                  )

    }
    
    return (
      <div className="App">
        {/* <h1>React App</h1>
        <p className={classes.join(' ')}>This is really Good</p>
        <button style={style} onClick={this.showPersonsHandler}>Toggle Persons</button>   */}
        <Cockpit 
          persons={this.state.persons}
          clicked={this.showPersonsHandler}
          showPersons={this.state.showPersons}
        />
        {persons}
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1',null, 'React App'))
  }
  
}

export default Radium(App)




// const App = () => {
//   const [personState, setPersonState] = useState({
//     persons : [
//       { name:"Yusuf", age:28},
//       { name:"Usman", age:29},
//       { name:"Rameez", age:30}
//     ]
//   })
//   const [otherState, setOtherState] = useState('OtherData')
// 
//   const switchButtonHandler = () => {
//   
//   
//     setPersonState({
//       persons : [
//         { name:"Aslam", age:28},
//         { name:"Usman", age:29},
//         { name:"Rameez", age:33}
//       ]
//     })
//     setOtherState('Other State Change')
//   }

//     return (
//       <div className="App">
//         <h1>React App</h1>
//         <button onClick={switchButtonHandler}>Switch Name</button>  
//         <Person name={personState.persons[0].name} age={personState.persons[0].age} otherState={otherState} >From Borsad</Person>  
//         <Person name={personState.persons[1].name} age={personState.persons[1].age}> From Vadodara</Person>  
//         <Person name={personState.persons[2].name} age={personState.persons[2].age} />  
//       </div>
//     );
//     // return React.createElement('div', {className:'App'}, React.createElement('h1',null, 'React App')) 
// }
