import React from 'react'
import { Container } from './Repository.styles'
import PropTypes from 'prop-types'

const Repository = ({ name, description }) => {
  return (
    <Container>
      <p>{name}</p>
      <p>{description}</p>
    </Container>
  )
}

Repository.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
}

export default Repository
