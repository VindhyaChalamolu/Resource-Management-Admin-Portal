// src/store/actions.js

import axios from 'axios';

export const  CLEAR_SEARCH = 'CLEAR_SEARCH';
export const SET_SELECTED_TAG = 'SET_SELECTED_TAG';
export const FETCH_RESOURCES = "FETCH_RESOURCES";
export const FETCH_RESOURCES_SUCCESS = 'FETCH_RESOURCES_SUCCESS';
export const FETCH_RESOURCES_FAILURE = 'FETCH_RESOURCES_FAILURE';
export const SET_FILTERED_RESOURCES = 'SET_FILTERED_RESOURCES';
export const ADD_RESOURCE_REQUEST = 'ADD_RESOURCE_REQUEST';
export const ADD_RESOURCE_REQUEST_SUCCESS = 'ADD_RESOURCE_REQUEST_SUCCESS';
export const ADD_RESOURCE_REQUEST_FAILURE = 'ADD_RESOURCE_REQUEST_FAILURE';

export const fetchDataRequest = () => ({
  type: FETCH_RESOURCES,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_RESOURCES_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_RESOURCES_FAILURE,
  payload: error,
});

export const setSelectedTagName = (tag) => ({
  type: SET_SELECTED_TAG,
  payload: tag,
});

export const setFilteredResources = (data) => ({
  type: SET_FILTERED_RESOURCES,
  payload: data
})

export const clearSearch = () => ({
  type: CLEAR_SEARCH,
})

export const addResourceRequest = () => ({
  type: ADD_RESOURCE_REQUEST,
})

export const addResourceRequestSuccess = () => ({
  type: ADD_RESOURCE_REQUEST_SUCCESS
});
export const addResourceRequestFailure = () => ({
  type: ADD_RESOURCE_REQUEST_FAILURE,
})
export const setToInitials = () => ({
  type: "SET_TO_INITIALS",
})

export const fetchResources = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios.get("https://media-content.ccbp.in/website/react-assignment/resources.json")
      .then((response) => {
        dispatch(fetchDataSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};

export const addResource = () => {
  return (dispatch) => {
    dispatch(addResourceRequest());
    axios.get("https://media-content.ccbp.in/website/react-assignment/add_resource.json")
      .then((response) => {
        dispatch(addResourceRequestSuccess());
      })
      .catch((error) => {
        dispatch(addResourceRequestFailure(error.message));
      });
  };
};
