import React from "react"; 

import { FaCity, FaLeaf, FaLightbulb } from "react-icons/fa";

class Banner extends React.Component {
	render () {
		return (
			<div className="banner">
				<div className="wrapper bannerWrapper">
				<div className="iconBox">
					<div className="icons"><FaCity /></div>
	        		<p>Modernization</p>
				</div>

				<div className="iconBox">
					<div className="icons"><FaLeaf /></div>
	        		<p>Sustainibility</p>
				</div>

				<div className="iconBox">
					<div className="icons"><FaLightbulb /></div>
	        		<p>Innovation</p>
				</div>
				</div>
			</div>
		)
	}
}

export default Banner;
