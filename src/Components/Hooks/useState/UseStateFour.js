import React, {useState} from 'react'

// here we use an array as a state value...

function UseStateFour() {
    const [item,setItem] = useState([])

    const addItem = () => {
        setItem([...item,{key:item.length,value:Math.floor(Math.random()* 10) +1}])
    }

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {
                item.map(ele => <ul key={ele.id}>{ele.value}</ul>)
            }
        </div>
    )
}

export default UseStateFour
