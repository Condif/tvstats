const initialState = {
  genreList: {
    genre: [
      {
        id: 0,
        title: "Komedi",
        selected: false,
        key: "genre",
      },
      {
        id: 1,
        title: "Drama",
        selected: false,
        key: "genre",
      },
      {
        id: 2,
        title: "Skräck",
        selected: false,
        key: "genre",
      },
    ],
  },
  categoryList: {
    category: [
      {
        id: 0,
        title: "Film",
        selected: false,
        key: "category",
      },
      {
        id: 1,
        title: "Serie",
        selected: false,
        key: "category",
      },
      {
        id: 2,
        title: "Dokumentär",
        selected: false,
        key: "category",
      },
    ],
  },
  currentOpenList: "",
  headerTitle: "Select Genre",
  dropdownRef: null,
};

export const dropdownReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_GENRE_LIST":
      return {
        ...state,
        genreList: action.genreList,
      };
    case "SET_CATEGORY_LIST":
      return {
        ...state,
        categoryList: action.categoryList,
      };

    case "SET_IS_LIST_OPEN":
      return {
        ...state,
        currentOpenList: action.currentOpenList,
      };

    case "SET_HEADER_TITLE":
      return {
        ...state,
        headerTitle: action.headerTitle,
      };
    default:
      return state;
  }
};
