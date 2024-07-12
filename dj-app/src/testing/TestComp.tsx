interface Props {
  prop1: string
  prop2: number
}

export default function TestComp({ prop1, prop2 }: Props) {
  return (
    <>
      <h3>TestComp</h3>
      <p>{`${prop1} --- ${prop2}`}</p>
    </>
  )
}

