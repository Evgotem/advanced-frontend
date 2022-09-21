import React from 'react'
import classes from './Counter.module.scss'

export const Counter = () => {

  const [counter, setCounter] = React.useState<number>(0);

  const increment = () => {
    setCounter(prev => prev + 1)
  }
  const decrement = () => {
    setCounter(prev => prev - 1)
  }

  return (
    <>
      <div>{counter}</div>
      <button className={classes.btn} onClick={increment}>+</button>
      <button className={classes.btn} onClick={decrement}>-</button>
    </>
  )
}