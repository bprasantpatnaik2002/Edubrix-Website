import React from 'react'
import { InlineWidget } from "react-calendly";

function Appointment() {
    return (
        <div className="App">
          <InlineWidget url="https://calendly.com/edubrix-overseas" />
        </div>
      );
}

export default Appointment;