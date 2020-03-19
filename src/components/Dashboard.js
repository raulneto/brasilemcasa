import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import classNames from "classnames";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SimpleLineChart from "./SimpleLineChart";
import People from "@material-ui/icons/People";
import Loading from "./common/Loading";


const styles = theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: "#f8f8f8",
		overflow: "hidden",
		paddingBottom: 120
	},
	grid: {
		margin: `0 ${theme.spacing(2)}px`,
		[theme.breakpoints.down("sm")]: {
			width: "calc(100% - 20px)"
		}
	},
	loadingState: {
		opacity: 0.05
	},
	paper: {
		padding: theme.spacing(3),
		margin: theme.spacing(2),
		textAlign: "left",
		color: theme.palette.text.secondary,
		display: "flex",
		flexBasis: "inherit",
		flexGrow: 1
	},
	rangeLabel: {
		display: "flex",
		justifyContent: "space-between",
		paddingTop: theme.spacing(2)
	},
	topBar: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center"
	},
	outlinedButtom: {
		textTransform: "uppercase",
		margin: theme.spacing(1)
	},
	actionButtom: {
		textTransform: "uppercase",
		margin: "0 24px 24px 24px",
		fontWeight: 700,
		fontSize: '1.2rem',
	},
	blockCenter: {
		padding: theme.spacing(2),
		textAlign: "center"
	},
	block: {
		padding: theme.spacing(2)
	},
	buttonBar: {
		display: "flex"
	},
	mainBadge: {
		textAlign: "center",
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(4)
	},
	flex: {
		display: "flex"
	},
	paragraph: {
		marginBottom: theme.spacing(2),
		color: "#504e4e"
	},
	pageTitle: {
		marginBottom: theme.spacing(3),
		fontWeight: 700,
		color: "#504e4e"
	},
	wrapValues: {
		width: "100%"
	},
	innerValue: {
		alignItems: "center",
		justifyContent: "center"
	}

});

class Dashboard extends Component {
	constructor(){
        super();
        this.state = {
			loading: true,
		};
    }

	componentDidUpdate(prevProps, prevState) {
		const { data, qtd } = this.props;

		if (prevProps.data !== data || prevProps.qtd !== qtd) {
			this.setState({ loading: false });
		}
	}

	render() {
    	const { classes, qtd, data, loading } = this.props;

		return (
			<React.Fragment>
				<CssBaseline />
				<div className={classes.root}>
					<div className="wrapper">
						<Grid container justify="center">
							<Grid
								spacing={2	}
								alignItems="center"
								justify="center"
								container
								className={classes.grid}
							>
								<Grid item xs={12}>
									<div className={classes.topBar}>
										<div className={classes.block}>
											<Typography variant="h6" className={classes.pageTitle}>
												A nossa luta é ficar em casa. A glória é o fim da pandemia.<br /> Vamos juntos nessa?
											</Typography>
											{/* <Typography component="p" className={classNames(classes.small, classes.paragraph)} gutterBottom>
												(Mas cada um de sua casa, por favor!)
											</Typography> */}
											<Typography variant="body1" className={classes.paragraph}>
												Seria o fim do mundo? A apocalipse zumbi? Não, ainda não. Respira! Mas, tudo pode acontecer se não mudarmos o nosso comportamento agora.<br /> O nosso objetivo aqui é <strong>conscientizar toda a população brasileira da importância de ficar em casa nesse momento de crise.</strong>
											</Typography>
											<Typography variant="body1" className={classes.paragraph}>
												Nós vamos sair dessa, assim como já superamos tantos outros problemas que pareciam não ter fim. Porém, <strong>precisamos nos unir mais do que nunca para acabar com isso logo.</strong>
											</Typography>
											<Typography variant="body1" className={classes.paragraph}>
												Você já está fazendo a sua parte? Então, nos diga clicando abaixo!
											</Typography>
											<div className={classes.btnForm}>
												<Button
														href="https://forms.gle/pAoJ78knPyf2rEGi7"
													target="_blank"
													color="primary"
													variant="contained"
													className={classes.actionButtom}
													>
													Eu estou em casa!
												</Button>
												<Typography variant="body1" className={classes.paragraph}>
													Assim que isso acabar, vamos todos poder nos abraçar como se não houvesse amanhã! ❤
												</Typography>
											</div>
										</div>
									</div>
								</Grid>
								<Grid container spacing={2} justify="center">
									<Grid item xs={12} md={6} className={classes.flex}>
										<Paper
											className={classes.paper}
											style={{ position: "relative" }}
										>
											<Loading loading={loading} />
											<div className={classNames(loading && classes.loadingState, classes.wrapValues)}>
												<Typography variant="subtitle1" gutterBottom>
													Total
												</Typography>
												<div className={classes.mainBadge}>
													<People
														style={{ fontSize: 72 }}
														fontSize={"large"}
														color={"secondary"}
													/>
													<Typography
														variant="h2"
														color={"secondary"}
														gutterBottom
													>
														{qtd}
													</Typography>
												</div>
											</div>
										</Paper>
									</Grid>
									<Grid item xs={12} md={6}>
										<Paper
											className={classes.paper}
											style={{ position: "relative" }}
										>
											<Loading loading={loading} />
											<div className={classNames(loading && classes.loadingState, classes.wrapValues)}>
											{/* <div > */}
											<Typography variant="subtitle1" gutterBottom>
												Por estado
											</Typography>
											<div className={classes.innerValue}>
												<SimpleLineChart data={data} />
											</div>
											</div>
										</Paper>
										</Grid>
									</Grid>
								</Grid>
						</Grid>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default withRouter(withStyles(styles)(Dashboard));
