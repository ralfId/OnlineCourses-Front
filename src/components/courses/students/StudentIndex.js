import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  FormControl,
  Grid,
  IconButton,
  Paper,
  OutlinedInput,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@material-ui/core";
import { HighlightOff, Search } from "@material-ui/icons";
import { Pagination } from "@material-ui/lab";

import { startGetCoursePagination } from "../../../actions/courses";
import { ControlTyping } from "../../../helpers/controlTyping";
import { styleAuth } from "../../../Styles/auth";
import { useStyles } from "../../../Styles/ui";

export const StudentIndex = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);

  const [pageReq, setpageReq] = useState({
    searchText: "",
    pageNumber: 0,
    cuantityElements: 10,
  });

  const { searchText, pageNumber, cuantityElements } = pageReq;

  const textToSearch = ControlTyping(searchText, 1000);

  useEffect(() => {
    let text = "";
    let page = 0;

    pageNumber === 0 ? (page = pageNumber + 1) : (page = pageNumber);

    if (textToSearch) {
      text = textToSearch;
      page = 1;
    }

    dispatch(startGetCoursePagination(text, page, cuantityElements));
  }, [dispatch, textToSearch, pageNumber, cuantityElements]);

  const changePage = (e, newPage) => {
    e.preventDefault();
    console.log("object page", newPage);
    setpageReq({ ...pageReq, pageNumber: parseInt(newPage) });
  };

  const options = {style:'currency', currency:'USD'};
  const usdFormatter = new Intl.NumberFormat('en-US', options);
  return (
    <>
      <Container>
        <Grid
          container
          style={{ marginTop: "7%" }}
          justifyContent="center"
          alignContent="center"
          className="container-mb3"
        >
          <Grid item xs={10} md={8}>
            <FormControl variant="outlined" fullWidth>
              <OutlinedInput
                id="searchBar"
                placeholder="Search a course"
                startAdornment={
                  <IconButton disabled>
                    {" "}
                    <Search />
                  </IconButton>
                }
                endAdornment={
                  <IconButton>
                    <HighlightOff />
                  </IconButton>
                }
                value={searchText}
                onChange={(e) => {
                  setpageReq({ ...pageReq, searchText: e.target.value });
                }}
              />
            </FormControl>
          </Grid>
        </Grid>

        <Paper elevation={3} className="container-mt container-mb">
          <Grid container spacing={2} className="container-py container-px">
            {courses.recordList.map((course) => (
              <Grid item xs={12} md={4} sm={4} key={course.CourseId}>
                <Card className={useStyles.rootCard} variant="outlined" >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image="https://cdn.pixabay.com/photo/2014/05/03/00/46/notebook-336634_960_720.jpg"
                      title={course.Title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {course.Title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {course.Description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      variant="contained"
                      style={styleAuth.submit}
                    >
                      {usdFormatter.format(course.Promotion)}
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      variant="contained"
                      style={styleAuth.submit}
                    >
                      Subscribe
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
        <Box justifyContent="center" display="flex" style={{ margin: "5% 5%" }}>
          <Pagination
            count={courses.pageNumbers}
            color="primary"
            variant="outlined"
            shape="rounded"
            onChange={changePage}
          />
        </Box>
      </Container>
    </>
  );
};
