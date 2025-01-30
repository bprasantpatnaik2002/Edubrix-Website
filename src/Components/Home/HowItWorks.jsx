import React from 'react'

function HowItWorks() {

    const work= [
        {
          "icon": "fa fa-comments-o",
          "title": "1-2-1 Counselling",
          },
        {
          "icon": "fa fa-pencil-square-o",
          "title": "Pre Requisite Test Preparation",
          },
        {
          "icon": "fa fa-university",
          "title": "University/Course Application & Selection",
         },
        {
            "icon": "fa fa-money",
            "title": "Financial Aid",
        },
        {
            "icon": "fa fa-credit-card",
            "title": "Visa Assistance",
        },
        {
            "icon": "fa fa-plane",
            "title": "Pre Departure Briefing",
        },
        {
            "icon": "fa fa-ticket",
            "title": "Flight Booking & First Pickup Assistance",
        },
        {
            "icon": "fa fa-home",
            "title": "Accomodation Assistance",
        },
        {
            "icon": "fa fa-users",
            "title": "Forex or Education Assistance",
        }
      ]

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
                A One-Stop Solution For All
          </p>
        </div>
        <div className="row">
          {work.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.title}</h3>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  )
}

export default HowItWorks