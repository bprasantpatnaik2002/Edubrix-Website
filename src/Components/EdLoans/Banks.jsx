import React from 'react'

function Banks() {
    const items = [
        { title: "High-Quality Education", description: "Providing access to world-class resources and learning opportunities." },
        { title: "Personalized Support", description: "Tailored guidance to help students achieve their academic goals." },
        { title: "Global Connections", description: "Opportunities to network and collaborate with peers worldwide." },
        { title: "Seamless Experience", description: "End-to-end support for a smooth and stress-free journey." },
      ];
    
      return (
        <div id='Banks' className="text-center">
            <div className="info-card">
                <div className="card-header">
                    <h2 className='teal'>National Banks</h2>
                </div>
                <div className="card-content">
                    <ul className='brick'>
                        <li>State Bank of India</li>
                        <li>Bank of Baroda</li>
                        <li>Axis Bank</li>
                        <li>ICICI Bank</li>
                    </ul>
                </div>
            </div>

            <div className="info-card">
                <div className="card-header">
                    <h2 className='teal'>US Banks</h2>
                </div>
                <div className="card-content">
                    <ul className='brick'>
                        <li>Ascent</li>
                        <li>Sallie Mae</li>
                        <li>Earnest</li>
                    </ul>
                </div>
            </div>

            <div className="info-card">
                <div className="card-header">
                    <h2 className='teal'>NBFCs</h2>
                </div>
                <div className="card-content">
                    <ul className='brick'>
                        <li>Avanse Financial Services</li>
                        <li>InCred</li>
                        <li>Auxilo Finserve</li>
                        <li>HDFC Credila</li>
                        <li>Bajaj FinServ</li>
                    </ul>
                </div>
            </div>

            <div className="info-card">
                <div className="card-header">
                    <h2 className='teal'>International Lenders</h2>
                </div>
                <div className="card-content">
                    <ul className='brick'>
                        <li>MPOWER Financing</li>
                        <li>Prodigy Finance</li>
                        <li>Leap Finance</li>
                    </ul>
                </div>
            </div>

        </div>
       
      );
}

export default Banks