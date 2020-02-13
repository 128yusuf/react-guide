import React from 'react'
import './Person.css'
import Radium from 'radium'
const Person = ({name,age,children,click,changeName}) => {

    return (
        <div className="Person">
            <p onClick={click}> I'm {name} and {age} Years old</p>
            <p>{children}</p>
            <input type="text" onChange={changeName} value={name} />
        </div>
    )
}

export default Radium(Person)
