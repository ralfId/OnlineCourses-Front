import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import ImageUploader from "react-images-upload";
import { v4 as uuidv4 } from "uuid";

import { styleAuth } from "../../Styles/auth";
import { useForms } from "../../hooks/useForms";
import { getimageData } from "../../helpers/getImageData";
import { startSavingCourse } from "../../actions/courses";
import { useDispatch } from "react-redux";

export const CreateCourse = () => {
  const dispatch = useDispatch();
  const [courseDate, setCourseDate] = useState(new Date());
  const [imgCourse, setImgCourse] = useState(null);
  const [courseForm, HandleOnchnage] = useForms({
    title: "",
    description: "",
    price: 0.0,
    pricePromotion: 0.0,
  });

  const { title, description, price, pricePromotion } = courseForm;

  const uploadImage = (image) => {
    getimageData(image[0]).then((response) => {
      setImgCourse(response);
    });
  };

  const savecourse = (e) => {
    e.preventDefault();
    const coursId = uuidv4();

    const newCourse = {
      courseId: coursId,
      title: title,
      description: description,
      price: parseFloat(price) || 0.0,
      pricePromotion: parseFloat(pricePromotion) || 0.0,
      publicationDate: courseDate,
    };

    let courseImg = null;
    if (imgCourse) {
      courseImg = {
        objectReference: coursId,
        name: imgCourse.name,
        data: imgCourse.data,
        extention: imgCourse.extention,
      };
    }

    dispatch(startSavingCourse(newCourse, courseImg));
  };

  return (
    <Container component="main" maxWidth="md" justify="center">
      <div className={styleAuth.paper}>
        <Typography component="h1" variant="h5">
          Create new course
        </Typography>
        <form style={styleAuth.form} onSubmit={savecourse}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <TextField
                name="title"
                value={title}
                onChange={HandleOnchnage}
                variant="outlined"
                fullWidth
                label="Write a title"
                required
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                name="description"
                value={description}
                onChange={HandleOnchnage}
                variant="outlined"
                fullWidth
                label="Write a description "
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="price"
                value={price}
                onChange={HandleOnchnage}
                variant="outlined"
                fullWidth
                type="number"
                label="Price"
                required
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                name="pricePromotion"
                value={pricePromotion}
                onChange={HandleOnchnage}
                variant="outlined"
                fullWidth
                type="number"
                label="Price promotion"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  margin="normal"
                  id="pubDate"
                  value={courseDate}
                  onChange={setCourseDate}
                  label="creation date"
                  format="dd/MM/yyyy"
                  fullWidth
                  KeyboardButtonProps={{ "area-label": "change date" }}
                  disabled
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12} md={6}>
              <ImageUploader
                withIcon={true}
                buttonText="Choose a cover photo"
                onChange={uploadImage}
                imgExtension={["jpg", "jpeg", "png"]}
                maxFileSize={4000000}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                style={styleAuth.submit}
              >
                Save course
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
