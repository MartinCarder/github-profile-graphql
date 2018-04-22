import React from 'react'
import { Container } from './Repository.styles'

const Repository = ({ name, description }) => {
  return (
    <Container>
      <p>{name}</p>
      <p>{description}</p>
    </Container>
  )
}

export default Repository
