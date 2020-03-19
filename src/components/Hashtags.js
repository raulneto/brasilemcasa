import React, { Component, Fragment } from "react";
import withStyles from "@material-ui/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";


const styles = theme => ({
	root: {
		flexGrow: 1,
		overflow: "hidden",
		display: "flex",
		// padding: theme.spacing(3)
	},
	share: {
		marginTop: theme.spacing(3)
	},
	gridItem: {
		width: "100%",
		padding: theme.spacing(3),
		// textAlign: "center"
	},
	copyright: {
		color: "#404040"
	},
	text: {
		fontSize: "1.250rem",
		color: "#404040",
		lineHeight: "1.5",
		marginBottom: theme.spacing(3)
	},
	hashtag: {
		color: "#404040",
		borderBottom: "2px solid #8fd3e5",
		textDecoration: "none",
		marginRight: "5px",
		fontSize: "1.5rem",
		display: "inline-block",
		marginBottom: "5px",
		[theme.breakpoints.down("xs")]: {
			fontSize: "1.2rem",
		}
	},
});


class Hasthtags extends Component {
	
	render() {
		const { classes } = this.props;
		return (
			<Fragment>
				<CssBaseline />
				<div className={classes.root}>
					<div className="wrapper">
						<Grid container alignItems="center" justify="center" flexDirection="column">
							<Grid item className={classes.gridItem}>
								<Typography variant="h2" gutterBottom className={classes.text}>
									Fique em casa e <strong>espalhe o amor pelas redes sociais,</strong> não o Coronavírus. Siga e use as hashtags abaixo e vamos salvar o mundo com mensagens positivas! #BePositiveAlways
								</Typography>
								<div className={classes.hashtagWall}>
									<a href="https://www.instagram.com/explore/tags/ficaemcasa/" className={classes.hashtag} target="_blank">#ficaemcasa</a> <a href="https://www.instagram.com/explore/tags/coisasparasefazernaquarentena/" className={classes.hashtag} target="_blank">#coisasparasefazernaquarentena</a> <a href="https://www.instagram.com/explore/tags/vaificartudobem/" className={classes.hashtag} target="_blank">#vaificartudobem</a> <a href="https://www.instagram.com/explore/tags/juntossomosmaisfortes/" className={classes.hashtag} target="_blank">#juntossomosmaisfortes</a> <a href="https://www.instagram.com/explore/tags/quarentenanaosaoferias/" className={classes.hashtag} target="_blank">#quarentenanaosaoferias</a> <a href="https://www.instagram.com/explore/tags/porummundomelhor/" className={classes.hashtag} target="_blank">#porummundomelhor</a> <a href="https://www.instagram.com/explore/tags/isolamentosocial/" className={classes.hashtag} target="_blank">#isolamentosocial</a> <a href="https://www.instagram.com/explore/tags/sempânico/" className={classes.hashtag} target="_blank">#sempânico</a> <a href="https://www.instagram.com/explore/tags/todoscontraocoronavírus/" className={classes.hashtag} target="_blank">#todoscontraocoronavírus</a> <a href="https://www.instagram.com/explore/tags/concientizacao/" className={classes.hashtag} target="_blank">#concientizacao</a>
								</div>
							</Grid>
						</Grid>
						<iframe allowfullscreen id="wallsio-iframe" src="https://walls.io/h4vxk?nobackground=1&amp;show_header=0" style={{border:0, height:"800px", width:"100%"}} title="My social wall"></iframe>
					</div>
				</div>
			</Fragment>
		)
	}
	
}

export default withStyles(styles)(Hasthtags);

