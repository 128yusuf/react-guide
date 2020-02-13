import React from 'react'
import Radium from 'radium'
const Cockpit = (props) => {
      let style = {
        backgroundColor:'green',
        color:'white',
        padding:'8px',
        font:'inherit',
        border:'1px solid blue',
        cursor:'pointer',
        ':hover': {
          backgroundColor:'lightgreen',        
        }
      }

      if (props.showPersons) {
            console.log('coc',props.showPersons)
                  style.backgroundColor = 'red'
                  style[':hover'] = {
                    backgroundColor:'salmon'
                  }
    }      
    let classes = []
    if(props.persons.length <= 2){
      classes.push('red')
    }
    if(props.persons.length <= 1){
      classes.push('bold')
    }
    return (
        <div className="Cockpit">
            <h1>React App</h1>
            <p className={classes.join(' ')}>This is really Good</p>
            <button style={style} onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
}

export default  Radium(Cockpit)
