import React, { useState } from 'react'
import MyContext from './MyContext'
const MoneyState = (props) => {
  const money = 100;
  const name = "suman";
  const [counter, setcounter] = useState(0)
  const data = "Superman"
  return (
    <>
      <MyContext.Provider value={{ money, name, counter, setcounter, data }}>
        {props.children}
      </MyContext.Provider>
    </>
  )
}

export default MoneyState