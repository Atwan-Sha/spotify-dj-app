import { useState } from 'react'

const TestComp = (props: {prop1:string, prop2:number}) => {
  return (
    <>
      <h3>TestComp</h3>
      <p>{`${props.prop1} --- ${props.prop2}`}</p>
    </>
  )
}

export default TestComp
