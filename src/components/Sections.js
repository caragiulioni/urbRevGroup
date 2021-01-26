import React from "react"; 

class Sections extends React.Component {
	render () {
		const data = this.props.dataSections;
		console.log(data);

		return (
			<div className="sections">
				<div className="mainSections">
					{data.map(item =>
						<section className="section" key={item.id}>
							<div className="sectionImage"><img src={item.image} alt="alt text" /></div>
							<div className="text wrapper"><p>{item.text}</p></div>
						</section>
					)}
				</div>
			</div>
		)
	}
}

export default Sections;

