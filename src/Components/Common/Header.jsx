import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  We Don't Design Careers. We Design Lives
                  <span></span>
                </h1>
                <p>World's top universities. Limitless career opportunities. Unmatched student experience. Start your journey with us.</p>
                <NavLink
                  to="https://docs.google.com/forms/d/18ozM17bWEUY9y2G0JoQiAhvQSlE5Q5vtMxODglFCwl0/viewform?edit_requested=true"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </NavLink>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header