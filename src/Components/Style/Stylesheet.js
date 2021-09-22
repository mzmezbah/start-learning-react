import React from 'react'
import './stylesheet.css'
import styles from './style.module.css'

//we can style a component in 4 approaches.. 1.css stylesheet 2.inline style 3.css module..4.css in libaries..here we can use first 3 approaches..
//first one is normal way like html..second way we need create an object & write style in key value pair..here key is must be a camelCase & value is an string & pass the object in style attribute..
//in third approach we need to create  a file  like 'filename.module.css' & put style in this file & import the file to component a name & use the style as an object file name...like under======

let desgin = {
    fontSize: '44px',
    color: 'green',
}

function Stylesheet({style}) {
    let className = style ? 'index': ''
    return (
        <div>
            <h2 className={`${className} font-xl`}>this style from css Stylesheet</h2>
            <h2 style={desgin}>This style from inline css stylesheet</h2>
            <h2 className={styles.headerStyle}>This style is from css module.</h2>
        </div>
    )
}

export default Stylesheet
