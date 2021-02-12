export const getAllShows = () => {
    return async (dispatch) => {
      dispatch({ type: "FETCH_ALL_SHOWS_REQUEST" });
  
      try {
        await fetch("ShowAnalytics.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            dispatch({
              type: "FETCH_ALL_SHOWS_SUCCESS",
              shows: data.data,
            })
          });
      } catch (error) {
        dispatch({ type: "FETCH_ALL_SHOWS_FAILURE", error });
      }
    };
  };