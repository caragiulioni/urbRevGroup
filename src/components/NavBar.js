import React from "react"; 

class NavBar extends React.Component {
	render () {
		return (
			<header className="wrapper">
				<h1>Urban Revolution Group</h1>
				<nav>
					<ul>
						<li><a href="#contact">Contact</a></li>
					</ul>
				</nav>
			</header>
		)
	}
}

export default NavBar;

