import React,{useState} from 'react'
import emailjs from "@emailjs/browser";
import { NavLink } from 'react-router';


const initialState = {
    name: "",
    email: "",
    message: "",
  };

function Contact(props) {

    const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    
    
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                Kulkarnis’ 1301, Om Malaygiri CHS, Shantivan Complex, Borivali East, Mumbai 400066.
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                +91 9930454686
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                edubrix.overseas@gmail.com
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <NavLink to="https://www.facebook.com/EdubrixOverseas" target="_blank">
                      <i className="fa fa-facebook"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="https://x.com/EdubrixOverseas" target="_blank">
                      <i className="fa fa-twitter"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="https://www.instagram.com/edubrix_overseas/" target="_blank">
                      <i className="fa fa-instagram"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="https://www.youtube.com/channel/UCsZXacnJWNkCkPJkc2z9MUA" target="_blank">
                      <i className="fa fa-youtube"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="https://www.linkedin.com/company/edubrix-overseas-consultancy/" target="_blank">
                      <i className="fa fa-linkedin"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="https://www.google.com/maps/place/Edubrix+Overseas+Consultancy+Pvt+Ltd/@19.2429691,72.8651988,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b1a0938dedb1:0x8408bc7c2006c485!8m2!3d19.2429691!4d72.8677737!16s%2Fg%2F11j2jcvn25?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 EduBrix | All Rights Reserved 
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact