import React, { Component } from 'react';
import { BrowserRouter as Router, Route ,Link , withRouter} from "react-router-dom";
import OneseifIndex from '../components/oneselfIndex'
import Login from '../login/login'


class App extends Component {
	render(){
		return(
		<Router >
  		<div>
  			<Route exact path="/" component={OneseifIndex} />
  			<Route path="/login" component={Login} />
  		</div>
		</Router>
		)

		}
	}
export default withRouter(App);
