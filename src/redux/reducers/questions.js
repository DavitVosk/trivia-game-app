import * as aT from "../actions/ActionTypes";

const initialState = {
  data: [],
  error_message: null,
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case aT.START_QUESTIONS_FETCHING:
      return {data: [], error_message: null, isLoading: true};

    case aT.FETCH_QUESTIONS_SUCCESS:
      return {data: action.payload.questions, error_message: null, isLoading: false};

    case aT.FETCH_QUESTIONS_ERROR:
      return {data: [], error_message: action.payload.error_message, isLoading: false}
  }
  return state;
};
