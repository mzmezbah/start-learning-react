import React from 'react'
import Person from './Person'

//for rendering a list , you can use js array or object iterator..'
//when you render aa list you need to pass a "key" props which is unique in your list..
//you cannot access this props..which is for react understanding your data update..
//always try to avoid use index as a "key" value
//instead of using index use npm packages ..

function ListRendering() {
    let persons = [
        {id:1,name:'Zishan',skill:'coding',age:22},
        {id:2,name:'Mexbah',skill:'coding',age:23},
        {id:3,name:'Zamshed',skill:'sleeping',age:24},
        {id:4,name:'Oshan',skill:'electrician',age:21}
    ]
    let personList = persons.map( person => <Person key={person.id} person={person} />)
    return (
        <div>
            {personList}
        </div>
    )
}

export default ListRendering
