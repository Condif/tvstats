const initialState = {
 programQuery: [],
 loading: false,
 error: null,
};

export const programQueryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PROGRAM_QUERY_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "FETCH_PROGRAM_QUERY_SUCCESS":
      return { ...state, loading: false, programQuery: action.programQuery };

    case "FETCH_PROGRAM_QUERY_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
        programQuery: [],
      };
      case "SET_PROGRAM_QUERY":
        return {
          ...state,
          programQuery: action.programQuery
        }
    default:
      return state;
  }
};
