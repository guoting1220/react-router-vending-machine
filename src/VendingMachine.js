/* esh2nt-disable jsx-a11y/alt-text */
import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './VendingMachine.css';
import vmPicture from './vm.jpg';

const VendingMachine = () => {
	return (
		<div className="VendingMachine" >
			<h2 className="VendingMachine-title">Welcome to Cat's Vending Machine</h2>
			<div className="VendingMachine-body">
				<div className="VendingMachine-picture" style={{ 'backgroundImage': `url(${vmPicture})`}}>		
				</div>
				<div className="VendingMachine-list">				
					<h2><Link to="/soda">Soda</Link></h2>
					<h2><Link to="/popcorn">Popcorn</Link></h2>
					<h2><Link to="/lolipop">Lolipop</Link></h2>				
				</div>
			</div>
		
		</div>
	)
}
export default VendingMachine;