import { HttpClient } from "../services/httpClient";
import { types } from "../types/types";
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

export const startGetCoursePagination = (
  title,
  pageNumber,
  cuantityElements
) => {
  return (dispath) => {
    HttpClient.post("/Courses/CoursesReport", {
      title,
      pageNumber,
      cuantityElements,
    })
      .then((resp) => {
        dispath(coursesPagination(resp.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const coursesPagination = (pagination) => ({
  type: types.coursesPagination,
  payload: pagination,
});
