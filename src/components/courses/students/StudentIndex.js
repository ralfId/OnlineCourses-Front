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
} from "@material-ui/core";
import { HighlightOff, Search } from "@material-ui/icons";
import React from "react";
import { styleAuth } from "../../../Styles/auth";
import { useStyles } from "../../../Styles/ui";

export const StudentIndex = () => {
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
          <Grid item xs={10} md={8} >
            <FormControl variant="outlined" fullWidth>
              <OutlinedInput
                id="searchBar"
                placeholder="Search a course"
                startAdornment={
                  <IconButton>
                    {" "}
                    <Search />
                  </IconButton>
                }
                endAdornment={
                  <IconButton>
                    <HighlightOff />
                  </IconButton>
                }
              />
            </FormControl>
          </Grid>
        </Grid>

        <Paper elevation={3} className="container-mt" >
          <Grid container spacing={2} className="container-py container-px" >
            <Grid item xs={12} md={4} sm={4}>
              <Card className={useStyles.rootCard} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
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
                    View
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
            <Grid item xs={12} md={4} sm={4}>
              <Card className={useStyles.rootCard} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
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
                    View
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
            <Grid item xs={12} md={4} sm={4}>
              <Card className={useStyles.rootCard} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
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
                    View
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
            <Grid item xs={12} md={4} sm={4}>
              <Card className={useStyles.rootCard} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
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
                    View
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
         
          </Grid>
        </Paper>
      </Container>
    </>
  );
};
