import React from 'react'

  function Children(props) {
    return (
        <div>
            <button onClick={()=> props.greedParent('child')}>Greed Parent</button>
        </div>
    )
}

export default Children
