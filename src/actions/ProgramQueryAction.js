
export const getProgramQuery = () => {
    return async (dispatch) => {
      dispatch({ type: "FETCH_PROGRAM_QUERY_REQUEST" });
  
      try {
        await fetch("ProgramQuery.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            dispatch({
              type: "FETCH_PROGRAM_QUERY_SUCCESS",
              programQuery: data,
            })
          });
      } catch (error) {
        dispatch({ type: "FETCH_PROGRAM_QUERY_FAILURE", error });
      }
    };
  };

  export const setProgramQuery = (programQuery) => {
    return {type: "SET_PROGRAM_QUERY", programQuery}
  }

