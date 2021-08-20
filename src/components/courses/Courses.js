import {
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TablePagination,
  Hidden,
  Table,
  Grid,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { startGetCoursePagination } from "../../actions/courses";
import { ControlTyping } from "../../helpers/controlTyping";
import { styleAuth } from "../../Styles/auth";

export const Courses = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);

  const [pageReq, setPageReq] = useState({
    searchText: "",
    pageNumber: 0,
    cuantityElements: 5,
  });
  const { searchText, pageNumber, cuantityElements } = pageReq;

  const textToSearch = ControlTyping(searchText, 1000)

  useEffect(() => {

    let text = "";
    let page = pageNumber + 1;
    if(textToSearch)
    {
      text= textToSearch;
      page= 1
    }

    dispatch(startGetCoursePagination(text, page, cuantityElements));
    
  }, [dispatch, textToSearch, pageNumber, cuantityElements]);

  const changePage = (event, newPage) => {
    event.preventDefault();

    setPageReq({
      ...pageReq,
      pageNumber: parseInt(newPage),
    });
  };

  const changeCuantityElements = (event) => {
    event.preventDefault();

    setPageReq({
      ...pageReq,
      pageNumber: 1,
      cuantityElements: parseInt(event.target.value),
    });
  };

  return (
    <div className={styleAuth.paper} style={{ padding: "1rem", width: "100%" }}>
      <Grid container style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="searchText"
            variant="outlined"
            label="Search a courses"
            onChange={(e) => setPageReq({ ...pageReq, searchText: e.target.value })}
          />
        </Grid>
      </Grid>
      <TableContainer componen="Paper">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell aling="left"> Name </TableCell>
              <Hidden mdDown>
                <TableCell aling="left"> Description </TableCell>
                <TableCell aling="left"> Pub. Date </TableCell>
                <TableCell aling="left"> Price </TableCell>
                <TableCell aling="left"> Promotion </TableCell>
              </Hidden>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.recordList.map((course) => (
              <TableRow key={course.CourseId}>
                <TableCell aling="left">{course.Title}</TableCell>
                {/* //hide content on mobile display */}
                <Hidden mdDown>
                  <TableCell aling="left">{course.Description}</TableCell>
                  <TableCell aling="left">
                    {new Date(course.PublicationDate).toLocaleString}
                  </TableCell>
                  <TableCell aling="left">{course.CurrentPrice}</TableCell>
                  <TableCell aling="left">{course.Promotion}</TableCell>
                </Hidden>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        rowsPerPageOptions={[5, 10, 25]}
        count={courses.totalRecords}
        rowsPerPage={cuantityElements}
        page={pageNumber}
        // change to next or previus page
        onPageChange={changePage}
        // change how many elements draw on table
        onRowsPerPageChange={changeCuantityElements}
        labelRowsPerPage="Courses per page"
      />
    </div>
  );
};
