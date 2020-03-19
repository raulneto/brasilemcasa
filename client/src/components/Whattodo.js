import React from "react";
import withStyles from "@material-ui/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


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
		'& li':{
            marginBottom: theme.spacing(2)
        }
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
						<Typography variant="p" gutterBottom className={classes.text}>
							<ol className={classes.list}>
								<li>Hora de maratonar aquela série que você tem adiado há muito tempo. Dica: o Netflix tá cheio de lançamentos que vale a pena conferir;</li>
								<li>Testar todas aquelas receitas que você salvou, mas nunca fez. É a sua hora de concorrer ao MasterChef Home Sweet Home.</li>
								<li>Fazer cursos onlines gratuitos! Que tal aprender uma nova língua pra você viajar o mundo depois que a pandemia passar?</li>
								<li>Escrever seu TCC, Monografia, Tese.... Enfim, não há mais desculpas para adiar esse compromisso. Não há sensação melhor do que se formar!</li>
								<li>Ler livros. A leitura nos transforma! Aproveita para sair dessa uma pessoa melhor que ontem.</li>
								<li>Tirar aquele projeto do papel! Sabe aquilo que faz o seu coração vibrar só de pensar? Então, chegou a hora de botar pra quebrar.</li>
								<li>Aprender a administrar suas finanças. Afinal, com essa crise aprendemos que precisamos de uma reserva financeira para momentos inesperados, né?</li>
								<li>Fazer uma limpeza no armário. Joga fora aquilo que não presta e doe o que não usa para quem precisa. Ao tirar coisas velhas, automaticamente, você receberá coisas novas.</li>
								<li>Exercite-se! Saia do sedentarismo e ganhe doses de endorfina para ficar mais feliz e ainda entrar em forma. Já pensou quando sairmos dessa crise você aparecer com um shape novo?</li>
								<li>Fazer vários nadas. É muito prazeroso tirar um tempo para não ter responsabilidade com nada e jogar (literalmente) as pernas para o alto.</li>
							</ol>
						</Typography>
						<Typography variant="p" gutterBottom className={classes.text}>
							Viu como dá para extrair lições incríveis dessa quarentena? Ajude o mundo e se ajude
						</Typography>
					</Grid>
				</Grid>
			</div>
		</div>
	)
}

export default withStyles(styles)(Whattodo);

