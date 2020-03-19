import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "@material-ui/styles/withStyles";
import { Link, withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { Link as MaterialLink } from "@material-ui/core";
import Menu from "./Menu";
import Flag from "./common/Flag";

const backgroundHeader = require("../images/header.png");

const styles = theme => ({
  appBar: {
    position: "relative",
    boxShadow: "none",
    borderBottom: `1px solid ${theme.palette.grey["100"]}`,
    backgroundColor: "white"
  },
  inline: {
    display: "inline"
  },
  title: {
	height: 160,
	background: `url(${backgroundHeader}) no-repeat center center#f8f8f8`
  },
  wrapTitle: {
	  alignItems: "baseline",
	  display: "flex",
	  fontSize: "3rem",
	  color: "#868686",
	  fontWeight: 700,
	  [theme.breakpoints.down("xs")]: {
		fontSize: "1.5rem"
	}
  },
  flexTop: {
    display: "flex",
    justifyContent: "center",
	alignItems: "center",
	
  },
  link: {
    textDecoration: "none",
	color: "inherit",
	marginRight: 8
  },
  productLogo: {
    display: "inline-block",
    borderLeft: `1px solid ${theme.palette.grey["A100"]}`,
    marginLeft: 32,
    paddingLeft: 24,
    [theme.breakpoints.up("md")]: {
      paddingTop: "1.5em"
    }
  },
  tagline: {
    display: "inline-block",
    marginLeft: 10,
    [theme.breakpoints.up("md")]: {
      paddingTop: "0.8em"
    }
  },
  iconContainer: {
    display: "none",
    // [theme.breakpoints.down("sm")]: {
    //   display: "block"
    // }
  },
  iconButton: {
    float: "right"
  },
  tabContainer: {
    // [theme.breakpoints.down("sm")]: {
    //   display: "none"
    // }
  },
  tabItem: {
    paddingTop: 20,
    paddingBottom: 20,
    minWidth: "auto"
  }
});



class Topbar extends Component {
  state = {
    value: 0,
    menuDrawer: false
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  mobileMenuOpen = event => {
    this.setState({ menuDrawer: true });
  };

  mobileMenuClose = event => {
    this.setState({ menuDrawer: false });
  };

  current = () => {
    if (this.props.location.pathname === "/home") {
      return 0;
	}
    if (this.props.location.pathname === "/naopire") {
      return 1;
    }
    if (this.props.location.pathname === "/hashtags") {
      return 2;
    }
  };

	render() {
		const { classes } = this.props;

		return (
			<AppBar position="absolute" color="default" className={classes.appBar}>
				<Toolbar disableGutters>
					<Grid container alignItems="baseline">
						<Grid 
							item 
							xs={12} 
							className={classNames(classes.flexTop, classes.title)}
						>
							<Typography variant="h2" color="inherit" className={classes.wrapTitle} noWrap>
								<Link to="/" className={classes.link}>#FicaEmCasaBrasil</Link><Flag />
							</Typography>
						</Grid>
            <Grid item xs={12} className={classes.flexTop}>
              
              {!this.props.noTabs && (
                <React.Fragment>
                  <div className={classes.iconContainer}>
                    <IconButton
                      onClick={this.mobileMenuOpen}
                      className={classes.iconButton}
                      color="inherit"
                      aria-label="Menu"
                    >
                      <MenuIcon />
                    </IconButton>
                  </div>
                  <div className={classes.tabContainer}>
                    <SwipeableDrawer
                      anchor="right"
                      open={this.state.menuDrawer}
                      onClose={this.mobileMenuClose}
                      onOpen={this.mobileMenuOpen}
                    >
                      <AppBar title="Menu" />
                      <List>
                        {Menu.map((item, index) => (
                          <ListItem
                            component={item.external ? MaterialLink : Link}
                            href={item.external ? item.pathname : null}
                            to={
                              item.external
                                ? null
                                : {
                                    pathname: item.pathname,
                                    search: this.props.location.search
                                  }
                            }
                            button
                            key={item.label}
                          >
                            <ListItemText primary={item.label} />
                          </ListItem>
                        ))}
                      </List>
                    </SwipeableDrawer>
                    <Tabs
                      value={this.current() || this.state.value}
                      indicatorColor="primary"
                      textColor="primary"
                      onChange={this.handleChange}
                    >
                      {Menu.map((item, index) => (
                        <Tab
                          key={index}
                          component={item.external ? MaterialLink : Link}
                          href={item.external ? item.pathname : null}
                          to={
                            item.external
                              ? null
                              : {
                                  pathname: item.pathname,
                                  search: this.props.location.search
                                }
                          }
                          classes={{ root: classes.tabItem }}
                          label={item.label}
                        />
                      ))}
                    </Tabs>
                  </div>
                </React.Fragment>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(withStyles(styles)(Topbar));
