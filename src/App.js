import React, { Component } from 'react';
import Application from './component/Application';
import Navbar from './component/Navbar';
import FirstDivRow from './component/FirstDivRow';
import SecondDivRow from './component/SecondDivRow';
import Footer from './component/Footer';
import './App.css';


export default class App extends Component {


	render() {
		return (
			
				<div className="App">
				<Navbar/>
				<FirstDivRow/>
				<SecondDivRow/>
				 <Application/>
				 <Footer/>
				 
				</div>
			
		);
	}
}
