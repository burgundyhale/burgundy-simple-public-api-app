import { GET_REQUEST, GET_COMPLETE } from "../constants/action-types";

const getAmiiboData = () => dispatch => {
  const url = "http://www.amiiboapi.com/api/amiibo/";
  const options = {
    credentials: "same-origin",
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };

  dispatch({ type: GET_REQUEST });
  fetch(url, options)
    .then(response => {
      if (response.ok) {
        return response.text();
      }
      throw new Error("Amiibo's could not be retrieved");
    })
    .then(responseText => {
      if (responseText) return JSON.parse(responseText);
      return {};
    })
    .then(result => {
      dispatch({
        type: GET_COMPLETE,
        payload: {
          amiibos: result.amiibo,
        },
      });
    })
    .catch(error => dispatch({ type: GET_COMPLETE, error }));
};

export default getAmiiboData;
