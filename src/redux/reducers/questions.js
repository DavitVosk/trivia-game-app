import * as aT from "../actions/ActionTypes";

const initialState = {
  questions: [],
  error_message: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case aT.START_QUESTIONS_FETCHING:
      return {questions: [], error_message: null};

    case aT.FETCH_QUESTIONS_SUCCESS:
      return {questions: action.payload.questions, error_message: null};

    case aT.FETCH_QUESTIONS_ERROR:
      return {questions: [], error_message: action.payload.error_message}
  }
  return state;
};
