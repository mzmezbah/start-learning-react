import React,{useState} from 'react'

//In React Hooks, we can now use a lot of  feature that can only use in class component before..
//for this we need to useState method like under & we need to import it with react like above..
//this method take a initial value & we can destructure it in two variable 1st is use for value which we use & 2nd is use set the new value , its also a method we need use it like under..

function UseState() {

    const [Count, setCount] = useState(0)

    return (
        <div>
            <button onClick={()=> setCount(Count + 1)}>Count {Count}</button>
        </div>
    )
}

export default UseState
