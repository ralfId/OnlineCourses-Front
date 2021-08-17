import { HttpClient } from "../services/httpClient";
import { openSnackBar } from "./ui";

export const startSavingCourse = (course, image) => {
  return (dispatch) => {
    const endPointPostCourse = "/Courses";
    const endPointPostDoc = "/Documents";
    const c = HttpClient.post(endPointPostCourse, course);

    if (image) {
      const i = HttpClient.post(endPointPostDoc, image);

      HttpClient.all([c, i])
        .then((resp) => {
          const cr = resp[0];
          const im = resp[1];

          if (cr.status === 200 && im.status === 200) {
            dispatch(openSnackBar("saved cours successfully", "success"));
          }
        })
        .catch((e) => {
          let errors = e.response.data.errors;
          if (errors !== null) {
            for (let categ in errors) {
              for (let err in errors[categ]) {
                dispatch(openSnackBar(errors[categ][err], "error"));
              }
            }
          }
        });
    } else {

      HttpClient.all([c])
        .then((resp) => {
          console.log(resp);
        })
        .catch((e) => {
          let errors = e.response.data.errors;
          if (errors !== null) {
            for (let categ in errors) {
              for (let err in errors[categ]) {
                dispatch(openSnackBar(errors[categ][err], "error"));
              }
            }
          }
        });
    }
  
  };
};
