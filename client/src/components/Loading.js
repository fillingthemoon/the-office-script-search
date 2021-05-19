import React from 'react'
import { useSelector } from 'react-redux'

const Loading = () => {

  const loadingStatus = useSelector(state => state.loadingStatus)

  return (
    <div>
      {loadingStatus
        ? <p>Loading, please wait...</p>
        : null
      }
    </div>
  )
}

export default Loading