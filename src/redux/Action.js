import {
  SET,
  SORT_ASC,
  SORT_DSC,
  SORT_DATE_ASC,
  SORT_DATE_DSC,
  SORT_QUALITY_ASC,
  SORT_QUALITY_DSC,
  EXPLICIT,
} from "./actionTypes";

import axios from "axios";

export const Action = (dispatch) => {
  axios
    .get(`https://fast-reef-22226.herokuapp.com/data`)
    .then((res) => {
      let users = res.data;
      console.log("users: ", users);
    })
    .catch((error) => {
      const e = error.message;
    });
};
