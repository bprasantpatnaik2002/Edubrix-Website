import React from 'react'

function Service() {
    const services= [
        {
          "icon": "fa fa-home",
          "name": " ACCOMODATION",
          "text": "We all know that when travelling abroad, accommodation can be hard to find if one has never been to that particular country before and he/she is unsure which real estate or Housing Rental Company one should trust."
        },
        {
          "icon": "fa fa-file-text-o",
          "name": "INSURANCE",
          "text": "Preparing to study internationally involves extensive planning. One important consideration is health insurance. With costly medical treatment abroad, proper coverage is essential."
        },
        {
          "icon": "fa fa-money",
          "name": "MONEY MATTERS",
          "text": "Studying overseas is an exciting adventure! But dealing with money in a foreign currency can be confusing. That’s why EduBrix offers comprehensive foreign exchange services to make your financial transition stress-free."
        },
        {
          "icon": "fa fa-cc-visa",
          "name": "PRE-DEPARTURE ORIENTATION",
          "text": "Comprehensive pre-departure support and orientation can help ensure a smooth transition and positive overseas study experience."
        },
        {
          "icon": "fa fa-plane",
          "name": "TRAVEL ASSISTANCE",
          "text": "Studying abroad is an exciting new experience. Properly preparing for your international travel will help ensure a smooth journey. Here are some tips to guide you."
        }
      ]

    function downloadFileUsingURL(fileId){
        const url = `https://drive.google.com/uc?export=download&id=${fileId}`
        const fileName=url;
        const aTag=document.createElement("a");
        aTag.href=url;
        aTag.setAttribute("download",fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      }

  return (
        <div id="services" className="text-center">
          <div className="container">
              <div className="section-title">
              <h2>Our Services</h2>
              <p>
              EduBrix ensures a smooth and stress-free journey for students pursuing global opportunities, guiding them through every step of their international adventure.
              </p>
              </div>
              <div className="row">
              {services.map((d, i) => (
                      <div key={`${d.name}-${i}`} className="col-md-4">
                      {" "}
                      <i className={d.icon}></i>
                      <div className="service-desc">
                          <h3>{d.name}</h3>
                          <p>{d.text}</p>
                          <button
                              onClick={()=>downloadFileUsingURL("")}
                              className="btn btn-custom btn-lg page-scroll"
                              >
                              Read More
                          </button>
                      </div>
                      </div>
                  ))}
              </div>
          </div>
        </div>
  )
}

export default Service