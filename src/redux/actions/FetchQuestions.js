import axios from "axios";
import * as aT from "./ActionTypes";

export const fetchQuestions = () => dispatch => {
  let requestUrl = `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`;

  return axios
    .get(requestUrl)
    .then(res => {
      console.log("fetchQuestions", res);
      // dispatch({
      //   type: aT.FETCH_QUESTIONS,
      //   payload: res.data.notification
      // });
      // return Promise.resolve({ success: true });
    })
    .catch(err => {
      console.log("fetchQuestions error", JSON.stringify(err));

      // dispatch({ type: aT.FETCHING_NOTIFICATIONS_FAILURE });
      // return Promise.resolve({ success: false });
    });
};
