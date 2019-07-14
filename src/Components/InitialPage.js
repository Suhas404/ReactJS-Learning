import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
//import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Logo from "../assets/4-04.png";
import { MemoryRouter as Router } from "react-router";
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function User_Action() {
  const classes = useStyles();
  const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <img src={Logo} />

        <Grid className={classes.form}>
          <Router>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              className={classes.submit}
              to="/LoginPage"
              component={AdapterLink}
            >
              Sign In
            </Button>

            <Button
              type="submit"
              fullWidth
              variant="outlined"
              className={classes.submit}
            >
              Create Account
            </Button>
          </Router>

          <Grid container>
            <Grid item xs>
              <Typography variant="caption" className={classes.title}>
                Your Organization should provide the license key for creating
                the account.
              </Typography>

              <Grid item>
                <Typography variant="caption" className={classes.title}>
                  WebGL is Supported in this browser.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export class InitialPage extends Component {
  render() {
    return <User_Action />;
  }
}

export default InitialPage;
