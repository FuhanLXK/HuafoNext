import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import OneseifIndex from '../components/oneselfIndex'
import Login from '../login/login'
import MessaageIndex from '../message/messageIndex'

class App extends Component {
	render(){
		return(
		<Router >
  		<div>
  			<Route exact path="/" component={OneseifIndex} />
  			<Route path="/login" component={Login} />
				<Route path="/Messaage" component={MessaageIndex} />
  		</div>
		</Router>
		)
		}
	}
export default App;
