import React from "react";
import classNames from "classnames";
import withStyles from "@material-ui/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TvIcon from '@material-ui/icons/Tv';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import SchoolIcon from '@material-ui/icons/School';
import MenuBookIcon from '@material-ui/icons/LocalLibrary';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import BathtubIcon from '@material-ui/icons/Bathtub';

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
		padding: theme.spacing(4, 3),
	},
	copyright: {
		color: "#404040"
	},
	text: {
		fontSize: "1.250rem",
		lineHeight: "1.5",
		color: "#404040",
		fontWeight: 300,
		[theme.breakpoints.down("xs")]: {
			fontSize: "1.2rem",
		}
	},
	title: {
		marginBottom: theme.spacing(5),
		fontSize: "2.4rem",
		textAlign: "center",
		[theme.breakpoints.down("xs")]: {
			fontSize: "1.6rem",
		}
	},
	list: {
		marginTop: theme.spacing(4),
		'& li':{
            marginBottom: theme.spacing(2)
        }
	},
	listItem: {
		margin: theme.spacing(3, 0)
	},
	itemText: {
		paddingRight: theme.spacing(3),
		fontWeight: 300,
		fontSize: "1.1rem",
		color: "#525252",
		lineHeight: "1.5rem",
		[theme.breakpoints.down("xs")]: {
			paddingRight: 0
		},
	},
	itemIcon: {
		textAlign: "center",
		paddingRight: 8,
		color: "#b3b3b3"
	},
	textFooter: {
		margin: theme.spacing(4, 0),
		textAlign: "center"
	}
});


function Whattodo(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<div className="wrapper">
				<Grid container alignItems="center" justify="center" flexDirection="column">
					<Grid item className={classes.gridItem}>
						<Typography variant="h2" gutterBottom className={classes.title}>
							Respira, Inspira e Não Pira (em casa)
						</Typography>
						<Typography variant="p" gutterBottom className={classes.text}>
							“Ai, meu Deus, mas o que eu vou fazer tanto tempo casa?” Nós respondemos: muita coisa! E aliás, muita coisa boa.
						</Typography>
						<Typography variant="p" gutterBottom className={classes.text}>
						Confira a lista com as 10 melhores razões para você se inspirar (e ser muito feliz) na sua quarentena.
						</Typography>
						<Grid container className={classes.list} flexDirection="row" >
							<Grid container xs={12} sm={6} className={classes.listItem}>
								<Grid xs={2} item justify="center" className={classes.itemIcon}>
									<TvIcon fontSize="large" className={classes.itemIcon} />
								</Grid>
								<Grid xs={10} item>
									<div className={classes.itemText}>
										Hora de maratonar aquela série que você tem adiado há muito tempo. Dica: o Netflix tá cheio de lançamentos que vale a pena conferir.
									</div>
								</Grid>
							</Grid>
							<Grid container xs={12} sm={6} className={classes.listItem}>
								<Grid xs={2} item justify="center" className={classes.itemIcon}>
									<RestaurantIcon fontSize="large" />
								</Grid>
								<Grid xs={10} item>
									<div className={classes.itemText}>
										Testar todas aquelas receitas que você salvou, mas nunca fez. É a sua hora de concorrer ao MasterChef Home Sweet Home.
									</div>
								</Grid>
							</Grid>
							<Grid container xs={12} sm={6} className={classes.listItem}>
								<Grid xs={2} item justify="center" className={classes.itemIcon}>
									<TextFormatIcon fontSize="large" />
								</Grid>
								<Grid xs={10} item>
									<div className={classes.itemText}>
										Fazer cursos onlines gratuitos! Que tal aprender uma nova língua pra você viajar o mundo depois que a pandemia passar?
									</div>
								</Grid>
							</Grid>
							<Grid container xs={12} sm={6} className={classes.listItem}>
								<Grid xs={2} item justify="center" className={classes.itemIcon}>
									<SchoolIcon fontSize="large" />
								</Grid>
								<Grid xs={10} item>
									<div className={classes.itemText}>
										Escrever seu TCC, Monografia, Tese.... Enfim, não há mais desculpas para adiar esse compromisso. Não há sensação melhor do que se formar!
									</div>
								</Grid>
							</Grid>
							<Grid container xs={12} sm={6} className={classes.listItem}>
								<Grid xs={2} item justify="center" className={classes.itemIcon}>
									<MenuBookIcon fontSize="large" />
								</Grid>
								<Grid xs={10} item>
									<div className={classes.itemText}>
										Ler livros. A leitura nos transforma! Aproveita para sair dessa uma pessoa melhor que ontem.
									</div>
								</Grid>
							</Grid>
							<Grid container xs={12} sm={6} className={classes.listItem}>
								<Grid xs={2} item justify="center" className={classes.itemIcon}>
									<BusinessCenterIcon fontSize="large" />
								</Grid>
								<Grid xs={10} item>
									<div className={classes.itemText}>
										Tirar aquele projeto do papel! Sabe aquilo que faz o seu coração vibrar só de pensar? Então, chegou a hora de botar pra quebrar.
									</div>
								</Grid>
							</Grid>
							<Grid container xs={12} sm={6} className={classes.listItem}>
								<Grid xs={2} item justify="center" className={classes.itemIcon}>
									<AttachMoneyIcon fontSize="large" />
								</Grid>
								<Grid xs={10} item>
									<div className={classes.itemText}>
										Aprender a administrar suas finanças. Afinal, com essa crise aprendemos que precisamos de uma reserva financeira para momentos inesperados, né?
									</div>
								</Grid>
							</Grid>
							<Grid container xs={12} sm={6} className={classes.listItem}>
								<Grid xs={2} item justify="center" className={classes.itemIcon}>
									<MeetingRoomIcon fontSize="large" />
								</Grid>
								<Grid xs={10} item>
									<div className={classes.itemText}>
										Fazer uma limpeza no armário. Joga fora aquilo que não presta e doe o que não usa para quem precisa. Ao tirar coisas velhas, automaticamente, você receberá coisas novas.
									</div>
								</Grid>
							</Grid>
							<Grid container xs={12} sm={6} className={classes.listItem}>
								<Grid xs={2} item justify="center" className={classes.itemIcon}>
									<FitnessCenterIcon fontSize="large" />
								</Grid>
								<Grid xs={10} item>
									<div className={classes.itemText}>
										Exercite-se! Saia do sedentarismo e ganhe doses de endorfina para ficar mais feliz e ainda entrar em forma. Já pensou quando sairmos dessa crise você aparecer com um shape novo?
									</div>
								</Grid>
							</Grid>
							<Grid container xs={12} sm={6} className={classes.listItem}>
								<Grid xs={2} item justify="center" className={classes.itemIcon}>
									<BathtubIcon fontSize="large" />
								</Grid>
								<Grid xs={10} item>
									<div className={classes.itemText}>
										Fazer vários nadas. É muito prazeroso tirar um tempo para não ter responsabilidade com nada e jogar (literalmente) as pernas para o alto.
									</div>
								</Grid>
							</Grid>
						</Grid>
						<Typography component="p" gutterBottom className={classNames(classes.text, classes.textFooter)}>
							Viu como dá para extrair lições incríveis dessa quarentena? Ajude o mundo e se ajude.
						</Typography>
					</Grid>
				</Grid>
			</div>
		</div>
	)
}

export default withStyles(styles)(Whattodo);

