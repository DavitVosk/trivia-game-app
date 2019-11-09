import axios from "axios";
import * as aT from "./ActionTypes";

export const fetchQuestions = () => dispatch => {
  let requestUrl = `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`;

  dispatch({type: aT.START_QUESTIONS_FETCHING});

  return axios
    .get(requestUrl)
    .then(res => {
      console.log( 'success', res );
      dispatch({
        type: aT.FETCH_QUESTIONS_SUCCESS,
        payload: {questions: res.data.results}
      });
      return Promise.resolve({ success: true });
    })
    .catch(err => {
      dispatch({ type: aT.FETCH_QUESTIONS_ERROR, payload: {error_message: err.message} });
      return Promise.resolve({ success: false });
    });
};
