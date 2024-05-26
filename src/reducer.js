
import {
    FETCH_RESOURCES,
    FETCH_RESOURCES_SUCCESS,
    FETCH_RESOURCES_FAILURE,
    SET_SELECTED_TAG,
    SET_FILTERED_RESOURCES,
    CLEAR_SEARCH,
    ADD_RESOURCE_REQUEST,
    ADD_RESOURCE_REQUEST_SUCCESS,
    ADD_RESOURCE_REQUEST_FAILURE,
  } from './actions';
  
  const initialState = {
    loading: false,
    resources: [],
    error: '',
    selectedTag: 'all',
    allResources: [],
    addResourceError: false,
    addResourceLoader: false,
    addResourceSuccess: false
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      
      case FETCH_RESOURCES_SUCCESS:
        return {
          ...state,
          loading: false,
          resources: action.payload,
          allResources: action.payload,
          error: '',
        };
      case FETCH_RESOURCES_FAILURE:
        return {
          ...state,
          loading: false,
          resources: [],
          error: action.payload,
        };
        case FETCH_RESOURCES:
        return {
          ...state,
          loading: true,
        };
      case SET_SELECTED_TAG:
        const selectedTag = action.payload;
        let resources = state.allResources;
        if(selectedTag !== 'all') {
          resources =  state.allResources.filter(resource => resource.tag === selectedTag);
        }
        return {
          ...state,
          selectedTag: action.payload,
          resources: resources
        };
      case SET_FILTERED_RESOURCES:
          return {
            ...state,
            resources: action.payload,
          };
      case CLEAR_SEARCH:
        return {
          ...state,
          resources: state.allResources
        };
        case ADD_RESOURCE_REQUEST_SUCCESS:
          return {
            ...state,
            addResourceLoader: false,
            addResourceSuccess: true,
            addResourceError: false
          };
        case ADD_RESOURCE_REQUEST_FAILURE:
        return {
          ...state,
          addResourceLoader: false,
          addResourceError: true,
          addResourceSuccess: false,
        };
      case ADD_RESOURCE_REQUEST:
        return {
          ...state,
          addResourceLoader: true
        };
      case "SET_TO_INITIALS":
        return {
          ...state,
          addResourceError: false,
          addResourceLoader: false,
          addResourceSuccess: false
        }
      default:
        return state;
    }
  };
  
  export default reducer;
  