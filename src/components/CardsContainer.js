import React from 'react'
import Card from './Card'

const CardsContainer = (props) => {
  console.log('props', props)
  const cards = props.questions.map(q => {
    return <Card key={ q.id } question={ q.question } answer={ q.answer }/>
  })
  return (
    [ cards ]
  )
}

export default CardsContainer