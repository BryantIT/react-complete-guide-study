import React, { Fragment } from 'react'
// css
import './style.css'

const Card = ({ children, className }) => {
  const classes = 'card ' + className

  return (
    <div className={classes}>{children}</div>
  )
}

export default Card
