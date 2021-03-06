import React, { Component } from 'react'
import Person from './Person/Person'
 class Persons extends Component{ 
     
    static getDerivedStateFromProps(props , state){
        console.log('getDerivedStateFromProps  Persons')
        return state 
    }
    
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate Persons')
    }
    getSnapshotBeforeUpdate(){
        console.log('getSnapshotBeforeUpdate Persons')
    }

    render(){
        return this.props.persons.map((person, index) => {
            return <Person 
            click={() => this.props.clicked(index)}
            name={person.name} 
            age={person.age} 
            key={person.id}
            changeName={(event) => this.props.changed(event,person.id)}
            ></Person>
        })
    }
}
export default Persons


