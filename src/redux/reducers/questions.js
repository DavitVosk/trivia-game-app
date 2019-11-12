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

    case aT.QUESTION_ANSWERED:
      const {answer, question_index} = action.payload;
      const newData = state.data.map((i, index) => {
        if(index===question_index){
          return {...i, answeredCorrectly: i.correct_answer === answer}
        }
        return i
      });
      return {
        ...state,
        data: newData
      }
  }
  return state;
};
