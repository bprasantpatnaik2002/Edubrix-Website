import React from 'react'

function Testimonials() {
    const testimonials= [
        {
          "img": "",
          
          "text": "Excellent work starting from first  step till the final step visa date .very helpful .Just like home 🏡 😇😇😇 …",

          "name": "Romil Shah",

          "link":"https://www.google.com/maps/contrib/103295413649472935108/reviews?hl=en"
        },
        {
          "img": "",

          "text": `Edubrix is one of the best overseas US B1 Visa consultants.

          Swapnaja is a thorough professional as an oversea education and professional visa consultant. She has provided us with right guidance, support with completing DS160 and documentation required for visa process. Overall making our journey smooth.

          Her team is very prompt and thorough in their research. I would highly recommend Edubrix Overseas Consulting Pvt Ltd to students who wish to pursue education abroad as well as for professional who wish to secure business visa to countries like USA, UK etc

          Thank you Swapnaja and team for your guidance and support.`,

          "name": "Tejaswini Sawant",

          "link":"https://www.google.com/maps/contrib/110816570470494206511/reviews/@19.2429691,72.8677737,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en&entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D"
        },
        {
          "img": "",

          "text": "You can definately go through them for studying abroad for any course or country. I was recommended to them by my college and this consulting service was very cooperative and you get consulting for studying abroad from getting your passport, college shortlisting, finalizing, visa process and everything else as per your requirements which was really helpful. They guide from start to end. You can definately reach out to them",

          "name": "Narayani Khatavkar",

          "link":"https://www.google.com/maps/contrib/102774789881622956313/reviews?hl=en"
        },
        {
          "img": "",

          "text": "My experience with Edubrix Consultancy has been outstanding. Their unwavering support and expertise made the process smooth and rewarding. I highly recommend their services to anyone looking to study abroad.",

          "name": "Nishant Upadhyay",

          "link":"https://www.google.com/maps/contrib/102287897087088721818/reviews/@19.2429691,72.8677737,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en&entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D"
        },
        {
          "img": "",

          "text": "I had a great experience with Edubrix overseas consultancy private. Special thanks to Swapnaja kulkarni ma'am who was quick with responses to my queries and guided me throughout in each stages.I'd definitely recommend Edubrix consultancy to all those who wish to pursue their higher education in foreign countries.",

          "name": "Jereen Yesudhas",

          "link":"https://www.google.com/maps/contrib/104441666677953192029/reviews/@16.1433622,76.5253822,7z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en&entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D"
        },
        {
          "img": "",

          "text": "I want to extend my deepest gratitude to Swapnaja Kulkarni for her unwavering support in helping me secure admission to the University of Galway. Her guidance and dedication throughout the entire process were invaluable, and I couldn't have done it without her. Thank you for being such a reliable and supportive on this journey.",

          "name": "Abhinand Vijay",

          "link":"https://www.google.com/maps/contrib/111802114504111399493/reviews/@13.8785535,76.3536009,6z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en&entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D"
        }
      ]
      return (
        <div id="testimonials">
          <div className="container">
            <div className="section-title text-center">
              <h2>What our clients say</h2>
            </div>
            <div className="row">
              {testimonials.map((d, i) => (
                    <div key={`${d.name}-${i}`} className="col-md-4">
                      <div className="testimonial">
                        
                        <div className="testimonial-content">
                        <p>"{d.text}"</p>
                        </div>
                        
                        
                        <div className="google-image">
                        <div className="testimonial-meta"> - {d.name} </div>
                          <a href={d.link} target="_blank">
                            <img 
                              src="https://tse3.mm.bing.net/th?id=OIP.VEm0V7-K-_BWB9d7ek5gyAHaHa&pid=Api&P=0&h=180" 
                              
                              alt="Google image link" 
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    
                  ))}
            </div>
            <div className="review">
              <img src="https://tse2.mm.bing.net/th?id=OIP.wUXo3aTrQYT5Z4ezTHMQZwHaEs&pid=Api&P=0&h=180" alt="google rating" />
            </div>
          </div>
           
        </div>
      );
}

export default Testimonials