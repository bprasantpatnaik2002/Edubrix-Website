import React from 'react'
import Videos from '../Home/Videos'

function Gallery() {
    const fall=[
        { "link": "18To3zpb51CQ9Km42_OLuVp9MtVv-ckfR" },
        { "link": "1Kr06PGwImZndsjKnO2mKHrrTMaPpcIke" },
        { "link": "1JOQPuUkJTDxjVP589Fo3BXHR0en-I68L" },
        { "link": "1jmBSovDFzcuvbri8N3-HDAQzy6DEsXfD" },
        { "link": "1gnZ_xm00d7BqScsu6WTSnpm4b6KriA_W"  },
        { "link": "1k5AsO5kDHMohJVBa9Co0XNlFKi-soQoD"  }
      ]

      const parent=[
        { "link": "1yDgiiLJw-x0nwShx68hVDsrBNwhZWJe8"  },
        { "link": "1sVqR7otayCgQHhffv1QfcTW5oT46gBxa"  },
        { "link": "1JmkIyEStL63LDmkSW60_eHk1nZEPkkBK"  }]
    
  return (
    <>
        <Videos Heading={"Gallery"} subhead={"Our Happy Students"} title={"Explore our vibrant EduBrix gallery, showcasing moments of innovation, learning, and collaboration!"} testimonials={[...fall]}/>

        <Videos subhead={"Heartfelt Testimonials: A Parent's Perspective"} title={"Heartfelt stories from parents celebrating their journey with us."} testimonials={[...parent]}/>
    </>
  )
}

export default Gallery