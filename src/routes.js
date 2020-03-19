import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Hashtags from './components/Hashtags'
import Whattodo from './components/Whattodo'
import ScrollToTop from './components/ScrollTop'
import Footer from './components/Footer'
import Estados from "./components/common/Estados";
import Topbar from "./components/Topbar";

class Routes extends Component {
	
	state = {
		data: [],
		estadosObj: {},
		qtd: 0,
		loading: true
	};
	
	componentDidMount() {
		let estadosObj = {}
		Estados.map(e => {
			return estadosObj[e.sigla] = {
				estado: e.sigla,
				qtd: 1
			};
		});
		this.setState ({ estadosObj });
	
		this.callApi()
		  .then(res => {
			if (Object.keys(res).length) {
				this.updateValues(res.data)
			}
			this.setState({
			  loading: false
			})
		  })
		  .catch(err => console.log(err));
	  }
	  
	callApi = async () => {
		const response = await fetch('https://storage.googleapis.com/brasil-em-casa-443b3.appspot.com/d/data.json');
		const body = await response.json();
		if (response.status !== 200) throw Error(body.message);
		return body;
	};
	
	updateValues(data) {
		let qtd = 0;

		let result = data.reduce((res, value) => {
			const uf = Estados.find(e => e.nome === value.estado).sigla;
			if (!res[uf]) {
				res[uf] = {
					qtd: 0,
					estado: uf
				}
			}
			res[uf].qtd += value.qtd;
			qtd += value.qtd;
			return res;
		}, this.state.estadosObj);

		result = Object.keys(result)
			.map(r => result[r])
			.sort(function (a, b) {
				if (a.estado > b.estado) {
					return 1;
				} else {
					return -1;
				}
			});

		this.setState({
			data: result,
			qtd
		});
	}

	render() {
		const { data, qtd, loading } = this.state;
		return (
			<BrowserRouter>
				<ScrollToTop>
					<Topbar />	
					<Switch>
						<Route exact path='/' component={() =>  <Dashboard data={data} qtd={qtd} loading={loading} /> } />
						<Route exact path='/naopire' component={ Whattodo } />
						<Route exact path='/hashtags' component={ Hashtags } />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		)
	}
    
}

export default Routes;