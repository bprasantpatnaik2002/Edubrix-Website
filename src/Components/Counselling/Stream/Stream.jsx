import React from 'react'
import Traditional from './Traditional'
import Undergraduate from './Undergraduate'
import Postgraduate from './Postgraduate'
import NewAge from './NewAge'

function Stream() {
  return (
    <div id='stream' className="text-center">
        <div className="container">
            <div className="section-title">
                <h2></h2>
                <h2>Stream Selection</h2>
                <p>
                    Discover Your Passion. Let Us Guide You to Your Dream Program Abroad.
                </p>
            </div>
        </div>
        <div className="streams">
                <Undergraduate/>
                <Postgraduate/>
                <Traditional/>
                <NewAge/>
            </div>
    </div>
  )
}

export default Stream