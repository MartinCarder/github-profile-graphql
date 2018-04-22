import React from 'react'
import Repository from './Repository'
import PropTypes from 'prop-types'

const Repositories = ({ repositoriesList }) => {
  return <div>{repositoriesList.nodes.map(item => <Repository key={item.id} {...item} />)}</div>
}

Repositories.propTypes = {
  repositoriesList: PropTypes.shape({
    nodes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
}

export default Repositories
