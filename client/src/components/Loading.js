import React from 'react'

const Loading = (props) => {

  const {
    loading
  } = props

  return (
    <div>
      {loading
        ? <p>Loading, please wait...</p>
        : null
      }
    </div>
  )
}

export default Loading