import React from 'react'
import Repository from './Repository'

const Repositories = ({repositoriesList}) => {
  return (
    <div>
      {
        repositoriesList.nodes.map(item => (<Repository key={item.id} {...item} />))
      }
    </div>
  )
}

export default Repositories
