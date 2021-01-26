import React from "react"; 
import { FaLinkedin } from "react-icons/fa";

class ContactForm extends React.Component {
	render () {
		return (
			<div className="contact" id="contact">

				{/* Hey Dont forget about the addtional form data added to the HEAD 
				https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/
				*/}
				<div className="wrapper contactForm">
					<div className="contactHeading"><h2>CONTACT</h2></div>
					<form name="contactForm" method="POST" data-netlify="true">
						<input type="hidden" name="form-name" value="contactForm" />
						<div className="formInput">
							<label htmlFor="name">Your Name:</label>   
							<input type="text" id="name" name="name" required/>
						</div>
						<div className="formInput">
							<label htmlFor="email">Your Email:</label>
							<input type="email" id="email" name="email" required/>
						</div>
						<div className="formInput">
							<label htmlFor="message">Message:</label>
							<textarea id="message" name="message"></textarea>
						</div>
						<div className="formInput button">
							<button type="submit">Send</button>
						</div>
					</form>
					<div className="linkedIn">
						<a href="https://www.linkedin.com/public-profile/in/emilymyates"> <div className="linkedInIcon" aria-hidden="true" ><FaLinkedin alt="Add Emily on LinkedIn"/></div></a>
					</div>
				</div>
			</div>
		)
	}
}

export default ContactForm;

