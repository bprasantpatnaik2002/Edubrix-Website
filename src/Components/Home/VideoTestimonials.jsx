import React from 'react'
import Videos from './Videos';

function VideoTestimonials() {

  const testimonials=[
    { "link": "18To3zpb51CQ9Km42_OLuVp9MtVv-ckfR" },
    { "link": "1Kr06PGwImZndsjKnO2mKHrrTMaPpcIke" },
    { "link": "1JOQPuUkJTDxjVP589Fo3BXHR0en-I68L" },
    { "link": "1jmBSovDFzcuvbri8N3-HDAQzy6DEsXfD" },
    { "link": "1gnZ_xm00d7BqScsu6WTSnpm4b6KriA_W"  },
    { "link": "1k5AsO5kDHMohJVBa9Co0XNlFKi-soQoD"  }
  ]

  return (
    <Videos  Heading={"Gallery"} title={"Explore our vibrant EduBrix gallery, showcasing moments of innovation, learning, and collaboration!"} testimonials={[...testimonials]}/>
  )
}

export default VideoTestimonials