import React from 'react'

function Hero({heroName}) {
    if(heroName === 'Joker'){
        throw new Error('An error occurs')
    }
    return (
        <div>
            <h1>{heroName}</h1>
        </div>
    )
}

export default Hero
