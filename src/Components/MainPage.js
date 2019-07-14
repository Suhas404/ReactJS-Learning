import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Logo from "../assets/4-04.png";

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Built with love by the "}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {" team."}
    </Typography>
  );
}

function GameCards(item, index) {
  const classes = useStyles();
  console.log("SUHAS");
  return (
    <Grid container spacing={4}>
      {GameData.map(card => (
        <Grid item key={card} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image="https://source.unsplash.com/random"
              title="Image title"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                Heading
              </Typography>
              <Typography>
                This is a media card. You can use this section to describe the
                content.
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "center" }}>
              <Button size="small" color="primary">
                Start Game
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  /* heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  }, */
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  /*  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }, */
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    },
    ul: {
      margin: 0,
      padding: 0
    },
    li: {
      listStyle: "none"
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2)
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }
  }
}));

const cards = [1, 2, 3];

const GameName = [
  "Space Race",
  "Odd On Out",
  "Flash",
  "Rapid Recall",
  "Attention Ninja",
  "Turn it out",
  "Stroop Shapes",
  "Spot On",
  "Corner Stone",
  "Express Agent",
  "Dr Singh's Motive",
  "Peaq questionnair"
];

const GameData = {
  "mob-01": {
    module_name: "SPACE RACE",
    key: "mob-01",
    //module_icon_path: require("../Assets/GameIcons/Space_Race.png"),
    module_status: "locked",
    module_state: "offline",
    module_source: "unity"
  },
  "mob-02": {
    module_name: "ODD ONE OUT",
    key: "mob-02",
    //module_icon_path: require("../Assets/GameIcons/Odd_One_Out.png"),
    module_status: "locked",
    module_state: "offline",
    module_source: "unity"
  },
  "mob-03": {
    module_name: "FLASH",
    key: "mob-03",
    //module_icon_path: require("../Assets/GameIcons/Flash.png"),
    module_status: "locked",
    module_state: "offline",
    module_source: "unity"
  },
  "mob-04": {
    module_name: "RAPID RECALL",
    key: "mob-04",
    //module_icon_path: require("../Assets/GameIcons/Rapid_Recall.png"),
    module_status: "locked",
    module_state: "offline",
    module_source: "unity"
  },
  "mob-05": {
    module_name: "ATTENTION NINJA",
    key: "mob-05",
    //module_icon_path: require("../Assets/GameIcons/Attention_Ninja.png"),
    module_status: "locked",
    module_state: "offline",
    module_source: "unity"
  },
  "mob-06": {
    module_name: "TURN IT",
    key: "mob-06",
    //module_icon_path: require("../Assets/GameIcons/Turn_It.png"),
    module_status: "locked",
    module_state: "offline",
    module_source: "unity"
  },
  "mob-07": {
    module_name: "STROOP SHAPES",
    key: "mob-07",
    //module_icon_path: require("../Assets/GameIcons/Stroop_Shapes.png"),
    module_status: "locked",
    module_state: "offline",
    module_source: "unity"
  },
  "mob-08": {
    module_name: "SPOT ON",
    key: "mob-08",
    //module_icon_path: require("../Assets/GameIcons/Spot_On.png"),
    module_status: "locked",
    module_state: "offline",
    module_source: "unity"
  },
  "mob-09": {
    module_name: "CORNER STONE",
    key: "mob-09",
    //module_icon_path: require("../Assets/GameIcons/Corner_Stone.png"),
    module_status: "locked",
    module_state: "offline",
    module_source: "unity"
  },
  "mob-10": {
    module_name: "EXPRESS AGENT",
    key: "mob-10",
    //module_icon_path: require("../Assets/GameIcons/Express_Agent.png"),
    module_status: "locked",
    module_state: "offline",
    module_source: "unity"
  },
  "mob-16-l1": {
    module_name: "EXPRESS AGENT",
    key: "mob-16-l1",
    //module_icon_path: require("../Assets/GameIcons/Express_Agent.png"),
    module_status: "locked",
    module_state: "offline",
    module_source: "unity"
  },
  "mob-16-l2": {
    module_name: "EXPRESS AGENT",
    key: "mob-16-l2",
    //module_icon_path: require("../Assets/GameIcons/Express_Agent.png"),
    module_status: "locked",
    module_state: "offline",
    module_source: "unity"
  },
  "mob-16-l3": {
    module_name: "EXPRESS AGENT",
    key: "mob-16-l3",
    //module_icon_path: require("../Assets/GameIcons/Express_Agent.png"),
    module_status: "locked",
    module_state: "offline",
    module_source: "unity"
  },
  "mob-11": {
    module_name: "DR SINGH'S MOTIVES",
    key: "mob-11",
    //module_icon_path: require("../Assets/GameIcons/Motives.png"),
    module_status: "locked",
    module_state: "offline",
    module_source: "unity"
  },
  "mob-12": {
    module_name: "VIDEO INTERVIEW",
    key: "mob-12",
    //module_icon_path: require("../Assets/GameIcons/Video_Interview.png"),
    module_status: "locked",
    module_state: "offline",
    module_source: "react"
  },
  "mob-13": {
    module_name: "PEAQ - 1",
    key: "mob-13",
    //module_icon_path: require("../Assets/GameIcons/Peak.png"),
    module_status: "locked",
    module_state: "online",
    module_source: "unity"
  },
  "mob-14": {
    module_name: "PEAQ - 2",
    key: "mob-14",
    //module_icon_path: require("../Assets/GameIcons/Peak.png"),
    module_status: "locked",
    module_state: "online",
    module_source: "unity"
  },
  "mob-15": {
    module_name: "PEAQ - 3",
    key: "mob-15",
    //module_icon_path: require("../Assets/GameIcons/Peak.png"),
    module_status: "locked",
    module_state: "online",
    module_source: "unity"
  }
};

export default function MainPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <img
            style={{
              height: 36
            }}
            src={Logo}
          />

          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          />
          <Button size="small">Profile</Button>
          <Button variant="outlined" size="small">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Hello, Sravan Suhas
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              You have been assigned to play the following games by your
              organization. Make sure you are in a suitable enviroment to take
              the assessment.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}

          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                  </CardContent>
                  <CardActions style={{ justifyContent: "center" }}>
                    <Button size="small" color="primary">
                      Start Game
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Powered by PerspectAI
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Re-imaging Talent Assessements
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
