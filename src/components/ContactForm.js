import React from "react"; 

class ContactForm extends React.Component {
	render () {
		return (
			<div className="contact">
				<div className="wrapper contactForm">
					<h2>CONTACT</h2>
					<form name="contact" method="POST" data-netlify="true">
						<p>
							<label>Your Name: <input type="text" name="name" /></label>   
						</p>
						<p>
							<label>Your Email: <input type="email" name="email" /></label>
						</p>
						<p>
							<label>Message: <textarea name="message"></textarea></label>
						</p>
						<p>
							<button type="submit">Send</button>
						</p>
					</form>
				</div>
			</div>
		)
	}
}

export default ContactForm;

