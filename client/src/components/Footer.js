import React from "react";
import classNames from "classnames";
import withStyles from "@material-ui/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


const styles = theme => ({
	root: {
		flexGrow: 1,
		overflow: "hidden",
		display: "flex",
		background:" #fff",
		padding: "16px 0"
		// padding: theme.spacing(3)
	},
	share: {
		marginTop: theme.spacing(3)
	},
	gridItem: {
		width: "100%",
		padding: theme.spacing(3),
		textAlign: "center"
	},
	copyright: {
		color: "#404040"
	},
	text: {
		fontSize: "1.250rem",
		fontWeight: "700",
		color: "#404040"
	}
});


function Footer(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<div className="wrapper">
				<Grid container alignItems="center" justify="center" flexDirection="column">
					<Grid item className={classes.gridItem}>
						<Typography variant="subtitle1" gutterBottom className={classes.text}>
							Ah, e vamos levar essa mensagem ao máximo de pessoas possível? Bora divulgar nas suas redes sociais a hashtag <strong>#FicaEmCasaBrasil</strong>
						</Typography>
						<div className={classNames(classes.share, "sharethis-inline-share-buttons")}></div>
					</Grid>
					<Grid item xs={24} className={classNames(classes.gridItem, classes.copyright)}>
						<Typography variant="subtitle1" gutterBottom>
							Com muito carinho  ❤ <a href="mailto:ficaemcasabrasil@gmail.com" className={classes.link}>ficaemcasabrasil@gmail.com</a>
						</Typography>
					</Grid>
				</Grid>
			</div>
		</div>
	)
}

export default withStyles(styles)(Footer);

