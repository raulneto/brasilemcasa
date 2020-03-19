import React, { useContext, useEffect, useState } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { useObjectVal } from 'react-firebase-hooks/database'

import firebase from './providers/Firebase'
import Dashboard from './components/Dashboard'
import Hashtags from './components/Hashtags'
import Whattodo from './components/Whattodo'
import ScrollToTop from './components/ScrollTop'
import Footer from './components/Footer'
import Estados from "./components/common/Estados";
import Topbar from "./components/Topbar";

function Routes() {
	const fb = useContext(firebase)
	const [snapshots, loading] = useObjectVal(fb.db.ref('data'))
	
	const [data, setData] = useState([])
	// const [estadosObj, setEstadosObj] = useState({})
	const [qtd, setQtd] = useState(0)

	useEffect(() => {
		console.log(snapshots);
		if (snapshots) {
			console.log(snapshots);
			updateValues(snapshots);
		}
	}, [snapshots])
	
	const updateValues = (data) => {
		let _qtd = 0
		let estadosObj = {}

		let result = data.reduce((res, value) => {
			const uf = Estados.find(e => e.nome === value.estado).sigla;
			if (!res[uf]) {
				res[uf] = {
					qtd: 0,
					estado: uf
				}
				console.log(res);
			}
			res[uf].qtd += value.qtd;
			_qtd += value.qtd;
			return res;
		}, {});

		result = Object.keys(result)
			.map(r => result[r])
			.sort(function (a, b) {
				if (a.estado > b.estado) {
					return 1;
				} else {
					return -1;
				}
			});
		
			console.log(result);
			console.log(_qtd);
		setData(result);
		setQtd(_qtd);
	}

	return (
		<Router>
			<ScrollToTop>
				<Topbar />	
				<Switch>
					<Route exact path='/' component={() =>  <Dashboard data={data} qtd={qtd} loading={loading} /> } />
					<Route exact path='/naopire' component={ Whattodo } />
					<Route exact path='/hashtags' component={ Hashtags } />
				</Switch>
				<Footer />
			</ScrollToTop>
		</Router>
	)
}

export default Routes;