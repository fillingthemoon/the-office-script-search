const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_LOADING_STATUS': {
      return action.data.loadingStatus
    }
    default: {
      return state
    }
  }
}

export const setLoadingStatus = (loadingStatus) => {
  return async dispatch => {

    dispatch({
      type: 'SET_LOADING_STATUS',
      data: {
        loadingStatus
      }
    })
  }
}

export default loadingReducer