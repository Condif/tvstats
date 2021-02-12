const initialState = {
  allShows: [],
  loading: false,
  error: null,
};

export const showReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL_SHOWS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "FETCH_ALL_SHOWS_SUCCESS":
      return { ...state, loading: false, allShows: action.shows };

    case "FETCH_ALL_SHOWS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
        allShows: [],
      };
    default:
      return state;
  }
};
